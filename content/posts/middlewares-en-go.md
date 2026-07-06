---

title: "Middlewares en Go: composición, control y buenas prácticas para APIs HTTP"
date: "2026-07-05"
excerpt: "Cómo implementar middlewares reutilizables en Go para autenticación, logging, recuperación de errores y control de solicitudes sin convertir el código en un punto difícil de mantener."
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Middlewares en Go](https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png)

# Middlewares en Go

Cuando una API empieza a crecer, las responsabilidades dejan de pertenecer únicamente a los handlers. Registrar solicitudes, validar autenticación, recuperar errores inesperados, limitar peticiones o agregar encabezados HTTP son tareas que terminan apareciendo en prácticamente todas las rutas.

La primera reacción suele ser copiar el mismo código dentro de cada endpoint. Funciona durante unos días, hasta que aparece la necesidad de modificar el comportamiento en veinte archivos distintos.

Los middlewares existen precisamente para evitar ese problema.

En Go, un middleware no es más que una función que envuelve otra función. Esa simplicidad permite construir una cadena de responsabilidades sin depender de frameworks pesados ni mecanismos ocultos.

---

# ¿Qué es un middleware?

Un middleware recibe un `http.Handler`, ejecuta alguna lógica antes o después de la solicitud y finalmente delega la ejecución al siguiente elemento de la cadena.

Visualmente se puede representar así:

```text
                Solicitud HTTP
                       │
                       ▼
             ┌─────────────────┐
             │    Logging       │
             └─────────────────┘
                       │
                       ▼
             ┌─────────────────┐
             │ Authentication  │
             └─────────────────┘
                       │
                       ▼
             ┌─────────────────┐
             │     CORS        │
             └─────────────────┘
                       │
                       ▼
             ┌─────────────────┐
             │     Handler      │
             └─────────────────┘
                       │
                       ▼
                 Respuesta
```

Cada middleware tiene una responsabilidad concreta.

Eso facilita reutilizar lógica y evita handlers con cientos de líneas haciendo tareas que no les corresponden.

---

# La firma de un middleware

La firma más utilizada en Go es:

```go
func Middleware(next http.Handler) http.Handler
```

Recibe el siguiente handler y devuelve otro handler.

Un ejemplo mínimo sería:

```go
package middleware

import "net/http"

func Logger(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		println("Nueva petición:", r.Method, r.URL.Path)

		next.ServeHTTP(w, r)
	})
}
```

La llamada a:

```go
next.ServeHTTP(w, r)
```

es la que permite continuar la ejecución.

Si nunca se ejecuta esa línea, la cadena termina allí.

---

# Estructura recomendada

Una organización sencilla puede verse así:

```text
project/

├── cmd/
│   └── api/
│       └── main.go
│
├── internal/
│   ├── handlers/
│   ├── middleware/
│   └── services/
│
└── go.mod
```

Mantener los middlewares separados evita mezclarlos con la lógica de negocio.

---

# Middleware de logging

Uno de los primeros que suele implementarse registra cada solicitud.

```go
package middleware

import (
	"log"
	"net/http"
	"time"
)

func Logger(next http.Handler) http.Handler {

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		start := time.Now()

		next.ServeHTTP(w, r)

		log.Printf(
			"%s %s %s",
			r.Method,
			r.URL.Path,
			time.Since(start),
		)
	})
}
```

Este enfoque ya permite conocer:

* método HTTP
* ruta
* duración

En producción normalmente también se registran:

* dirección IP
* código de estado
* User-Agent
* Request ID

Registrar únicamente la ruta suele quedarse corto cuando aparecen problemas de rendimiento.

---

# Middleware de autenticación

Supongamos una API protegida mediante un token sencillo.

```go
package middleware

import "net/http"

func Auth(next http.Handler) http.Handler {

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		token := r.Header.Get("Authorization")

		if token != "Bearer secret-token" {
			http.Error(w, "Unauthorized", http.StatusUnauthorized)
			return
		}

		next.ServeHTTP(w, r)

	})
}
```

Si la autenticación falla, el handler nunca llega a ejecutarse.

Eso evita repetir la misma validación en cada endpoint.

---

# Middleware para recuperación de errores

Los `panic` no deberían llegar al usuario.

Sin recuperación, un panic puede cerrar la conexión de manera abrupta.

```go
package middleware

import (
	"log"
	"net/http"
)

func Recover(next http.Handler) http.Handler {

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		defer func() {

			if err := recover(); err != nil {

				log.Println(err)

				http.Error(
					w,
					"Internal Server Error",
					http.StatusInternalServerError,
				)

			}

		}()

		next.ServeHTTP(w, r)

	})
}
```

En sistemas reales también es habitual registrar el stack trace para facilitar el diagnóstico.

---

# Middleware para agregar encabezados

Muchos encabezados HTTP son comunes para todas las respuestas.

```go
package middleware

import "net/http"

func Headers(next http.Handler) http.Handler {

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		w.Header().Set(
			"X-App-Version",
			"1.0.0",
		)

		next.ServeHTTP(w, r)

	})

}
```

Esto evita que cada handler tenga que recordar agregar los mismos encabezados.

---

# Encadenando middlewares

La composición es una de las ventajas más interesantes.

```go
mux := http.NewServeMux()

mux.HandleFunc("/users", usersHandler)

handler := Recover(
	Auth(
		Logger(
			Headers(mux),
		),
	),
)

http.ListenAndServe(":8080", handler)
```

El flujo queda así:

```text
Request
   │
   ▼
Recover
   │
   ▼
Auth
   │
   ▼
Logger
   │
   ▼
Headers
   │
   ▼
Handler
```

El orden sí importa.

Por ejemplo:

* Recover debería envolver todo.
* Logger normalmente debe registrar incluso solicitudes rechazadas.
* Auth debe ejecutarse antes del handler.
* CORS suele ir antes de autenticación.

Cambiar el orden modifica completamente el comportamiento.

---

# Creando un helper para encadenar middlewares

Cuando la cantidad de middlewares aumenta, la composición anidada pierde legibilidad.

Una alternativa sencilla:

```go
package middleware

import "net/http"

type Middleware func(http.Handler) http.Handler

func Chain(
	handler http.Handler,
	middlewares ...Middleware,
) http.Handler {

	for i := len(middlewares) - 1; i >= 0; i-- {

		handler = middlewares[i](handler)

	}

	return handler
}
```

Ahora la configuración resulta bastante más clara.

```go
handler := middleware.Chain(

	mux,

	middleware.Recover,
	middleware.Logger,
	middleware.Auth,
	middleware.Headers,

)
```

Este patrón es utilizado incluso en proyectos grandes porque mantiene el código fácil de leer.

---

# Compartiendo información mediante Context

Uno de los usos más frecuentes de un middleware consiste en almacenar información para el resto de la solicitud.

Por ejemplo, un usuario autenticado.

```go
package middleware

import (
	"context"
	"net/http"
)

type contextKey string

const UserKey contextKey = "user"

func User(next http.Handler) http.Handler {

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		ctx := context.WithValue(
			r.Context(),
			UserKey,
			"admin",
		)

		next.ServeHTTP(
			w,
			r.WithContext(ctx),
		)

	})

}
```

Posteriormente el handler puede acceder al dato.

```go
func Dashboard(w http.ResponseWriter, r *http.Request) {

	user := r.Context().Value(middleware.UserKey)

	w.Write([]byte(user.(string)))

}
```

Aunque `context.WithValue` resulta muy útil, conviene reservarlo para información asociada a la solicitud.

Guardar configuraciones globales o conexiones a bases de datos dentro del contexto suele convertirse en un problema de mantenimiento.

---

# Middleware para medir tiempos de respuesta

Cuando una API empieza a recibir tráfico, detectar endpoints lentos deja de ser opcional.

```go
package middleware

import (
	"log"
	"net/http"
	"time"
)

func Metrics(next http.Handler) http.Handler {

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		start := time.Now()

		next.ServeHTTP(w, r)

		elapsed := time.Since(start)

		if elapsed > 500*time.Millisecond {

			log.Printf(
				"Slow request: %s (%v)",
				r.URL.Path,
				elapsed,
			)

		}

	})

}
```

Registrar únicamente las solicitudes lentas ayuda a detectar cuellos de botella sin llenar los logs de información poco útil.

---

# Middleware para CORS

Si una API será consumida desde un navegador, probablemente necesite manejar CORS.

```go
package middleware

import "net/http"

func CORS(next http.Handler) http.Handler {

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		w.Header().Set(
			"Access-Control-Allow-Origin",
			"*",
		)

		w.Header().Set(
			"Access-Control-Allow-Headers",
			"Content-Type, Authorization",
		)

		if r.Method == http.MethodOptions {

			w.WriteHeader(http.StatusNoContent)
			return

		}

		next.ServeHTTP(w, r)

	})

}
```

En aplicaciones internas suele verse `"*"`, pero para producción es recomendable limitar los orígenes permitidos.

---

# Flujo completo de una solicitud

```text
Cliente
   │
   ▼
HTTP Request
   │
   ▼
Recover
   │
   ▼
Logger
   │
   ▼
Metrics
   │
   ▼
CORS
   │
   ▼
Authentication
   │
   ▼
Handler
   │
   ▼
Response
```

Separar responsabilidades permite activar, quitar o reemplazar middlewares sin modificar la lógica del negocio.

Ese desacoplamiento se vuelve especialmente útil cuando aparecen nuevas necesidades como auditoría, trazabilidad o integración con herramientas de observabilidad.

# Buenas prácticas

* Mantén un único propósito por middleware. Si autentica, no debería registrar métricas ni modificar respuestas.
* Evita lógica de negocio dentro de un middleware. Validar un JWT pertenece al middleware; actualizar un usuario pertenece al servicio correspondiente.
* Coloca `Recover` como el envoltorio más externo para capturar cualquier `panic` de la cadena.
* Usa tipos propios como clave del `context.Context` en lugar de cadenas simples para evitar colisiones entre paquetes.
* No escribas la respuesta dos veces. Si un middleware ya envió un `http.Error`, debe finalizar inmediatamente con `return`.
* Registra el código de estado HTTP además del tiempo de respuesta. Para ello suele implementarse un `ResponseWriter` personalizado que capture el estado enviado.
* Evita crear middlewares gigantes. Cinco middlewares de 30 líneas son mucho más fáciles de mantener que uno de 200 líneas con múltiples responsabilidades.
* Documenta el orden esperado de ejecución. Un cambio accidental en la composición puede alterar el comportamiento de autenticación, CORS o recuperación de errores sin que el compilador lo detecte.
* Aprovecha la composición. Si una ruta pública no requiere autenticación, crea una cadena distinta en lugar de agregar condiciones dentro del middleware de autenticación.

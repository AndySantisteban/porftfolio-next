---

title: "Routing con Chi en Go: estructura limpia, middlewares y rutas escalables"
date: "2026-07-02"
excerpt: "Aprende a construir un router HTTP mantenible con Chi en Go utilizando middlewares, rutas agrupadas, parámetros, versionado de API y una estructura preparada para proyectos reales."
---

![Chi Router](https://w7.pngwing.com/pngs/566/160/png-transparent-golang-hd-logo-thumbnail.png)

# Routing con Chi en Go: estructura limpia, middlewares y rutas escalables

Cuando una API comienza con tres o cuatro endpoints, cualquier implementación basada en `net/http` parece suficiente. El problema aparece meses después, cuando el proyecto tiene autenticación, versionado, decenas de rutas y varios equipos trabajando al mismo tiempo.

En ese punto, mantener un archivo lleno de llamadas a `http.HandleFunc()` se vuelve incómodo. Las rutas empiezan a mezclarse, los middlewares terminan duplicados y cada cambio requiere revisar demasiados lugares.

Ahí es donde **Chi** destaca. No intenta reemplazar la librería estándar, sino extenderla con un router flexible, rápido y muy sencillo de organizar.

Una de sus mayores ventajas es que sigue utilizando las interfaces estándar de Go, por lo que migrar desde `net/http` resulta bastante natural.

---

# ¿Por qué elegir Chi?

Chi está construido sobre `net/http`, lo que significa que cualquier middleware o herramienta compatible con la librería estándar seguirá funcionando.

Entre sus características destacan:

* Router extremadamente rápido.
* Soporte para parámetros dinámicos.
* Agrupación de rutas.
* Middlewares por grupo.
* Versionado sencillo de APIs.
* Compatibilidad total con `context.Context`.
* Código muy legible.

La organización del proyecto mejora considerablemente cuando la cantidad de endpoints empieza a crecer.

---

# Instalación

Crear un proyecto nuevo:

```bash
mkdir chi-api
cd chi-api

go mod init github.com/usuario/chi-api
```

Instalar Chi:

```bash
go get github.com/go-chi/chi/v5
```

También resulta útil instalar los middlewares oficiales.

```bash
go get github.com/go-chi/chi/v5/middleware
```

---

# Primer servidor

Un servidor mínimo puede verse así:

```go
package main

import (
	"net/http"

	"github.com/go-chi/chi/v5"
)

func main() {

	r := chi.NewRouter()

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hola desde Chi"))
	})

	http.ListenAndServe(":8080", r)
}
```

Ejecutar:

```bash
go run .
```

Probar:

```
GET http://localhost:8080/
```

Respuesta:

```
Hola desde Chi
```

La diferencia frente a `http.ServeMux` todavía parece pequeña, pero cambia bastante cuando aparecen más rutas.

---

# Agregando middlewares

Uno de los errores más frecuentes consiste en escribir el mismo código de logging, recuperación de errores o validación en cada controlador.

Chi permite aplicar middlewares de forma centralizada.

```go
package main

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {

	r := chi.NewRouter()

	r.Use(middleware.Logger)

	r.Use(middleware.Recoverer)

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Servidor activo"))
	})

	http.ListenAndServe(":8080", r)
}
```

Con únicamente esas dos líneas ya se obtiene:

* Registro automático de solicitudes.
* Recuperación de pánicos sin detener el servidor.

En producción es habitual agregar también:

```go
r.Use(middleware.RequestID)
r.Use(middleware.RealIP)
r.Use(middleware.Timeout(30 * time.Second))
```

Esto facilita el rastreo de errores y evita solicitudes que permanecen abiertas indefinidamente.

---

# Parámetros en la URL

Supongamos una API de usuarios.

```text
GET /users/10
```

Con Chi basta definir:

```go
r.Get("/users/{id}", getUser)
```

El controlador:

```go
func getUser(w http.ResponseWriter, r *http.Request) {

	id := chi.URLParam(r, "id")

	w.Write([]byte("Usuario: " + id))
}
```

Solicitud:

```
GET /users/15
```

Respuesta:

```
Usuario: 15
```

No hace falta manipular expresiones regulares ni dividir manualmente la ruta.

---

# Múltiples métodos HTTP

Chi permite declarar cada método de forma explícita.

```go
r.Get("/products", listProducts)

r.Post("/products", createProduct)

r.Put("/products/{id}", updateProduct)

r.Delete("/products/{id}", deleteProduct)
```

El código resulta mucho más legible que realizar validaciones sobre `r.Method`.

---

# Agrupando rutas

Cuando una API crece, agrupar endpoints evita repetir prefijos.

```go
r.Route("/users", func(r chi.Router) {

	r.Get("/", listUsers)

	r.Post("/", createUser)

	r.Get("/{id}", getUser)

	r.Put("/{id}", updateUser)

	r.Delete("/{id}", deleteUser)

})
```

Las rutas generadas serán:

```
GET /users

POST /users

GET /users/{id}

PUT /users/{id}

DELETE /users/{id}
```

Toda la lógica relacionada permanece en un único bloque.

---

# Versionando una API

Una práctica muy común consiste en versionar los endpoints.

```go
r.Route("/api", func(r chi.Router) {

	r.Route("/v1", func(r chi.Router) {

		r.Get("/users", listUsers)

		r.Post("/users", createUser)

	})

})
```

Después será sencillo agregar una nueva versión.

```text
/api/v2/users
```

Sin romper clientes existentes.

---

# Middlewares por grupo

No todas las rutas requieren autenticación.

Un error bastante habitual consiste en proteger absolutamente todo el router.

Con Chi se puede aplicar un middleware únicamente donde hace falta.

```go
r.Route("/admin", func(r chi.Router) {

	r.Use(AuthMiddleware)

	r.Get("/dashboard", dashboard)

	r.Get("/users", adminUsers)

})
```

Mientras tanto, las rutas públicas permanecen accesibles.

```
GET /
GET /login
GET /products
```

Este enfoque reduce la complejidad y evita comprobaciones innecesarias.

---

# Middleware personalizado

Supongamos que todas las rutas administrativas requieren un token.

```go
func AuthMiddleware(next http.Handler) http.Handler {

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		token := r.Header.Get("Authorization")

		if token == "" {

			http.Error(w, "Unauthorized", http.StatusUnauthorized)

			return

		}

		next.ServeHTTP(w, r)

	})
}
```

Aplicarlo es sencillo.

```go
r.Use(AuthMiddleware)
```

O únicamente sobre un grupo específico.

```go
r.Route("/admin", func(r chi.Router) {

	r.Use(AuthMiddleware)

})
```

En proyectos reales este middleware normalmente valida un JWT o consulta un servicio de autenticación.

---

# Enviando respuestas JSON

La mayoría de APIs devuelven JSON.

```go
package main

import (
	"encoding/json"
	"net/http"
)

type User struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

func getUser(w http.ResponseWriter, r *http.Request) {

	user := User{
		ID:   1,
		Name: "Carlos",
	}

	w.Header().Set("Content-Type", "application/json")

	json.NewEncoder(w).Encode(user)

}
```

Respuesta:

```json
{
  "id": 1,
  "name": "Carlos"
}
```

Usar `json.NewEncoder()` evita crear cadenas manualmente y reduce errores de formato.

---

# Organización recomendada del proyecto

Una estructura sencilla facilita el mantenimiento.

```text
project/

├── cmd/
│   └── api/
│       └── main.go
│
├── internal/
│   ├── handlers/
│   ├── middleware/
│   ├── routes/
│   ├── models/
│   └── services/
│
├── go.mod
└── go.sum
```

El archivo `main.go` debería limitarse a iniciar el servidor.

Toda la definición de rutas puede vivir en:

```go
package routes

import (
	"github.com/go-chi/chi/v5"
)

func Register(r chi.Router) {

	r.Get("/", Home)

	r.Route("/users", func(r chi.Router) {

		r.Get("/", ListUsers)

	})

}
```

Y desde `main.go` únicamente:

```go
r := chi.NewRouter()

routes.Register(r)
```

Esto evita archivos de cientos de líneas difíciles de navegar.

---

# Ejemplo completo

```go
package main

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

type User struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

func listUsers(w http.ResponseWriter, r *http.Request) {

	users := []User{
		{1, "Ana"},
		{2, "Luis"},
	}

	w.Header().Set("Content-Type", "application/json")

	json.NewEncoder(w).Encode(users)
}

func getUser(w http.ResponseWriter, r *http.Request) {

	id := chi.URLParam(r, "id")

	user := User{
		ID:   1,
		Name: "Usuario " + id,
	}

	w.Header().Set("Content-Type", "application/json")

	json.NewEncoder(w).Encode(user)
}

func main() {

	r := chi.NewRouter()

	r.Use(middleware.Logger)

	r.Use(middleware.Recoverer)

	r.Route("/api/v1", func(r chi.Router) {

		r.Get("/users", listUsers)

		r.Get("/users/{id}", getUser)

	})

	http.ListenAndServe(":8080", r)

}
```

Solicitudes disponibles:

```text
GET /api/v1/users
```

```text
GET /api/v1/users/25
```

Este tipo de organización sigue siendo fácil de mantener incluso cuando el proyecto supera los cien endpoints.

---

# Flujo de una petición

```text
Cliente
   │
   ▼
HTTP Request
   │
   ▼
Chi Router
   │
   ├──────────────┐
   ▼              │
Middlewares       │
   │              │
   ▼              │
Handler           │
   │              │
   ▼              │
Respuesta JSON ◄──┘
```

El router decide qué controlador ejecutar, los middlewares realizan tareas transversales (autenticación, logging, recuperación de errores, límites de tiempo, etc.) y finalmente el handler genera la respuesta.

---

# Cuándo usar `Mount`

En aplicaciones grandes es habitual separar módulos completos.

```go
users := chi.NewRouter()

users.Get("/", listUsers)
users.Post("/", createUser)

r.Mount("/users", users)
```

Esto permite que cada módulo tenga:

* Sus propios middlewares.
* Sus propias rutas.
* Sus propios controladores.

Es una estrategia muy útil cuando varios equipos trabajan sobre la misma API.

---

# Buenas prácticas

* Mantén los handlers pequeños; la lógica de negocio debería vivir en servicios o casos de uso, no en el router.
* Usa `context.Context` para propagar información como identificadores de solicitud, usuarios autenticados o tiempos límite.
* Evita registrar rutas duplicadas o demasiado genéricas que puedan ocultar otras más específicas.
* Aplica los middlewares únicamente donde aporten valor; autenticar rutas públicas incrementa la complejidad sin beneficios.
* Devuelve códigos HTTP coherentes (`200`, `201`, `204`, `400`, `401`, `404`, `500`) junto con respuestas JSON consistentes.
* No ignores los errores de `json.NewEncoder().Encode()` ni de `http.ListenAndServe()`. En entornos reales, registrar esos errores facilita el diagnóstico de problemas.
* Organiza las rutas por dominio (`users`, `orders`, `products`) en lugar de acumularlas en un único archivo. A medida que la API crece, esta separación reduce conflictos y hace más sencilla la incorporación de nuevos desarrolladores.

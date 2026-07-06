---
title: "Tutorial: Manejo de Variables de Entorno en Vite"
date: "2026-07-05"
excerpt: "Aprende a configurar variables de entorno en Vite para trabajar con diferentes ambientes, proteger configuraciones y mantener un proyecto más fácil de administrar."
---

# Tutorial: Manejo de Variables de Entorno en Vite


Cuando un proyecto comienza a crecer, tarde o temprano aparece el mismo problema: hay valores que cambian dependiendo del entorno donde se ejecuta la aplicación. Durante el desarrollo probablemente consumas una API local, mientras que en producción utilizarás otra URL completamente distinta.

Copiar y pegar esas direcciones cada vez que haces un despliegue funciona... hasta que alguien olvida hacerlo y termina publicando una versión que sigue apuntando al servidor de pruebas.

Las variables de entorno existen precisamente para evitar ese tipo de situaciones. Vite incorpora un sistema bastante sencillo para administrarlas y, una vez que entiendes cómo funciona, prácticamente no vuelves a modificar configuraciones directamente en el código.

---

## Crear el primer archivo `.env`

En la raíz del proyecto crea un archivo llamado:

```text
.env
```

Dentro puedes definir todas las variables que necesite tu aplicación.

```env
VITE_APP_NAME=Mi Aplicación

VITE_API_URL=https://jsonplaceholder.typicode.com

VITE_APP_VERSION=1.0.0
```

Una característica de Vite es que **únicamente expone al navegador las variables que comienzan con `VITE_`**.

Por ejemplo, esta variable estará disponible desde el frontend:

```env
VITE_API_URL=https://api.midominio.com
```

Mientras que esta otra no:

```env
API_URL=https://api.midominio.com
```

Al intentar acceder desde JavaScript obtendrás:

```javascript
console.log(import.meta.env.API_URL)
```

```text
undefined
```

Este comportamiento evita que información privada termine expuesta accidentalmente en el navegador.

---

## Acceder a las variables desde la aplicación

En Vite todas las variables se leen mediante `import.meta.env`.

Por ejemplo:

```jsx
function App() {
    return (
        <>
            <h1>{import.meta.env.VITE_APP_NAME}</h1>

            <p>Versión {import.meta.env.VITE_APP_VERSION}</p>

            <p>{import.meta.env.VITE_API_URL}</p>
        </>
    )
}

export default App
```

A diferencia de proyectos creados con Create React App, aquí no se utiliza `process.env`.

Si vienes de Webpack es un cambio pequeño, pero bastante común olvidar el nuevo formato durante los primeros días.

---

## Consumir una API usando variables de entorno

Uno de los usos más habituales consiste en almacenar la URL base de una API.

Sin variables:

```javascript
fetch("https://api.midominio.com/users")
```

Con variables:

```javascript
const API = import.meta.env.VITE_API_URL

fetch(`${API}/users`)
```

También puedes encapsular la URL en un pequeño cliente HTTP.

```javascript
const API = import.meta.env.VITE_API_URL

export async function getUsers() {
    const response = await fetch(`${API}/users`)

    if (!response.ok) {
        throw new Error("No fue posible obtener los usuarios")
    }

    return response.json()
}
```

Con este enfoque, si la dirección del servidor cambia únicamente será necesario modificar el archivo `.env`.

---

## Variables para diferentes ambientes

En proyectos pequeños suele existir un único archivo `.env`, pero cuando la aplicación pasa por distintos entornos normalmente aparecen varios archivos.

```text
.env

.env.local

.env.development

.env.production

.env.test
```

Cada uno tiene una función distinta.

Por ejemplo, durante el desarrollo podrías trabajar con una API local.

**.env.development**

```env
VITE_API_URL=http://localhost:3000
```

Mientras que producción utilizaría otro servidor.

**.env.production**

```env
VITE_API_URL=https://api.midominio.com
```

Cuando ejecutas:

```bash
npm run dev
```

Vite carga automáticamente:

- `.env`
- `.env.development`

Al generar el build:

```bash
npm run build
```

utilizará:

- `.env`
- `.env.production`

Esto permite mantener configuraciones independientes sin tocar una sola línea del código fuente.

---

## Variables locales que no deberían subirse al repositorio

Hay ocasiones donde cada desarrollador necesita una configuración diferente.

Por ejemplo, una IP distinta para acceder al backend.

En esos casos resulta útil crear:

```text
.env.local
```

Ejemplo:

```env
VITE_API_URL=http://192.168.1.100:3000
```

Ese archivo normalmente se agrega al `.gitignore`.

```gitignore
.env.local
```

Así cada integrante del equipo puede tener su propia configuración sin afectar al resto.

---

## Variables incorporadas por Vite

Además de las variables que defines manualmente, Vite expone información útil sobre el entorno de ejecución.

```javascript
console.log(import.meta.env.MODE)

console.log(import.meta.env.DEV)

console.log(import.meta.env.PROD)

console.log(import.meta.env.BASE_URL)
```

Durante el desarrollo el resultado suele ser parecido a esto:

```text
MODE = development

DEV = true

PROD = false
```

Y después del build:

```text
MODE = production

DEV = false

PROD = true
```

Estas variables resultan útiles para habilitar herramientas de depuración únicamente durante el desarrollo.

```javascript
if (import.meta.env.DEV) {
    console.log("Modo desarrollo")
}
```

---

## Centralizar la configuración

Cuando una aplicación empieza a tener muchas variables es recomendable no acceder directamente a `import.meta.env` desde cualquier componente.

Una alternativa sencilla consiste en crear un archivo de configuración.

```javascript
// src/config/env.js

export const env = {
    api: import.meta.env.VITE_API_URL,
    appName: import.meta.env.VITE_APP_NAME,
    version: import.meta.env.VITE_APP_VERSION
}
```

Después simplemente importas ese objeto.

```javascript
import { env } from "./config/env"

console.log(env.api)
```

Además de mantener el código más limpio, facilita futuras modificaciones si decides cambiar la forma de obtener la configuración.

---

## Trabajar con TypeScript

Si utilizas TypeScript puedes definir los tipos para evitar errores y obtener autocompletado.

Crea el archivo:

```text
src/vite-env.d.ts
```

Contenido:

```typescript
interface ImportMetaEnv {
    readonly VITE_API_URL: string
    readonly VITE_APP_NAME: string
    readonly VITE_APP_VERSION: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
```

Ahora TypeScript mostrará un error si intentas acceder a una variable inexistente.

```typescript
import.meta.env.VITE_APPI_URL
```

```text
Property 'VITE_APPI_URL' does not exist.
```

Ese tipo de validaciones ahorra bastante tiempo cuando el proyecto crece.

---

## Reiniciar Vite después de modificar un `.env`

Algo que suele confundir a quienes comienzan con Vite es que modificar un archivo `.env` no actualiza automáticamente las variables.

Después de agregar una nueva variable debes detener el servidor.

```bash
CTRL + C
```

Y volver a iniciarlo.

```bash
npm run dev
```

Si olvidas hacerlo, probablemente pienses que la variable no funciona cuando en realidad Vite todavía está utilizando la configuración anterior.

---

## Información sensible

Uno de los errores más comunes consiste en asumir que un archivo `.env` siempre es privado.

En aplicaciones frontend eso no es cierto.

Todo lo que empiece con `VITE_` termina formando parte del código JavaScript generado durante el build.

Eso significa que cualquier usuario puede verlo utilizando las herramientas del navegador.

Por esa razón nunca deberían almacenarse datos como:

```env
VITE_DATABASE_PASSWORD=123456
```

```env
VITE_SECRET_KEY=abc123
```

```env
VITE_JWT_SECRET=mi_clave_privada
```

Las contraseñas, claves privadas, tokens de acceso o credenciales de bases de datos pertenecen al servidor, nunca al cliente.

Las variables de Vite están pensadas para información pública como:

- URL de una API
- Nombre de la aplicación
- Versión
- Configuración visual
- IDs públicos de servicios externos

---

## Ejemplo completo

Archivo `.env`

```env
VITE_APP_NAME=Blog Vite

VITE_API_URL=https://jsonplaceholder.typicode.com
```

Componente:

```jsx
import { useEffect, useState } from "react"

function App() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function loadPosts() {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/posts?_limit=5`
            )

            const data = await response.json()

            setPosts(data)
        }

        loadPosts()
    }, [])

    return (
        <main>
            <h1>{import.meta.env.VITE_APP_NAME}</h1>

            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default App
```

El componente no depende de una URL fija. Cambiar de entorno únicamente requiere modificar el archivo correspondiente.

---

## Errores comunes

### Olvidar el prefijo `VITE_`

```env
API_URL=http://localhost:3000
```

Debe ser:

```env
VITE_API_URL=http://localhost:3000
```

---

### Usar `process.env`

Incorrecto:

```javascript
process.env.API_URL
```

Correcto:

```javascript
import.meta.env.VITE_API_URL
```

---

### No reiniciar el servidor

Si agregaste una variable nueva y aparece como `undefined`, reinicia Vite antes de seguir buscando el problema.

```bash
npm run dev
```

---

### Guardar secretos en el frontend

Las variables públicas nunca deben contener:

- Contraseñas
- Claves privadas
- Tokens de administrador
- Credenciales de bases de datos

Si el navegador puede acceder a esa información, cualquier usuario también podrá hacerlo.

---

### Acceder directamente a `import.meta.env` desde todo el proyecto

En aplicaciones pequeñas no representa un inconveniente, pero cuando el código comienza a crecer es más cómodo centralizar la configuración en un único archivo. Además de mejorar la organización, evita modificar decenas de componentes cuando cambia el nombre de una variable o se incorpora una nueva configuración.
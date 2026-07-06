---
title: "Cómo instalar Tailwind CSS en un proyecto Vite paso a paso"
date: "2026-07-05"
excerpt: "Guía práctica para integrar Tailwind CSS en Vite con una configuración moderna, ejemplos funcionales y recomendaciones basadas en experiencia."
---

![Tailwind CSS + Vite](https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80)

# Cómo instalar Tailwind CSS en un proyecto Vite

Cuando un proyecto necesita una interfaz rápida de desarrollar sin sacrificar rendimiento, la combinación de Vite y Tailwind CSS suele ser una de las primeras opciones. Vite ofrece un entorno de desarrollo extremadamente rápido y Tailwind permite construir interfaces complejas sin mantener enormes hojas de estilos.

La instalación es sencilla, pero hay varios detalles que suelen provocar que los estilos no aparezcan, que el autocompletado falle o que el proceso de compilación genere CSS innecesario.

Esta guía muestra una configuración limpia, lista para utilizar en proyectos reales.

## Requisitos

Antes de comenzar verifica que tienes instalado:

- Node.js 18 o superior
- npm, pnpm o yarn
- Un editor como VS Code

Comprueba la versión de Node:

```bash
node -v
````

## Crear un proyecto con Vite

Crea un nuevo proyecto utilizando la plantilla de JavaScript.

```bash
npm create vite@latest mi-proyecto
```

Selecciona:

```
Project name:
mi-proyecto

Framework:
Vanilla

Variant:
JavaScript
```

También puedes hacerlo directamente:

```bash
npm create vite@latest mi-proyecto -- --template vanilla
```

Instala las dependencias:

```bash
cd mi-proyecto
npm install
```

La estructura inicial será similar a esta:

```text
mi-proyecto/
│
├── public/
├── src/
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
└── vite.config.js
```

## Instalar Tailwind CSS

Instala Tailwind y el plugin oficial para Vite.

```bash
npm install tailwindcss @tailwindcss/vite
```

Esta integración elimina bastante configuración manual respecto a versiones anteriores.

## Configurar Vite

Abre el archivo `vite.config.js`.

Contenido original:

```javascript
import { defineConfig } from 'vite'

export default defineConfig({})
```

Modifícalo de la siguiente manera:

```javascript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

Con esto Vite procesará automáticamente las clases de Tailwind durante el desarrollo y la compilación.

## Importar Tailwind

Abre el archivo:

```text
src/style.css
```

Reemplaza todo su contenido por:

```css
@import "tailwindcss";
```

No hace falta agregar las antiguas directivas:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Desde Tailwind CSS v4 esa configuración dejó de ser necesaria.

## Verificar que funciona

Abre `src/main.js`.

```javascript
import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen flex items-center justify-center bg-slate-900">
    <div class="rounded-xl bg-slate-800 p-10 shadow-xl">
      <h1 class="text-4xl font-bold text-cyan-400">
        Tailwind funciona correctamente 🚀
      </h1>

      <p class="mt-4 text-slate-300">
        Proyecto generado con Vite.
      </p>

      <button
        class="mt-6 rounded-lg bg-cyan-500 px-6 py-3 font-medium text-white transition hover:bg-cyan-600"
      >
        Comenzar
      </button>
    </div>
  </div>
`
```

Inicia el servidor.

```bash
npm run dev
```

Si todo está correcto aparecerá una página con fondo oscuro y un botón azul estilizado mediante clases de Tailwind.

## Cómo funciona el proceso de compilación

Una de las ventajas de Tailwind es que no genera un archivo CSS gigantesco con todas las utilidades posibles.

Durante el desarrollo, el compilador analiza los archivos del proyecto y únicamente genera las clases utilizadas.

Por ejemplo:

```html
<div class="bg-red-500 p-4 rounded-lg"></div>
```

Solo se incluirán las reglas necesarias para:

* `bg-red-500`
* `p-4`
* `rounded-lg`

No se generarán miles de estilos que nunca aparecen en la aplicación.

En proyectos grandes esta diferencia puede representar cientos de kilobytes menos en producción.

## Organización recomendada

Una estructura sencilla suele escalar mejor que una demasiado compleja.

```text
src/
│
├── assets/
├── components/
│   ├── Button.js
│   ├── Card.js
│   └── Navbar.js
│
├── pages/
│
├── styles/
│
├── main.js
└── style.css
```

Separar componentes desde el inicio evita terminar con archivos de varios cientos de líneas.

## Ejemplo de componente reutilizable

```javascript
export function Button(text) {
  return `
    <button
      class="
        rounded-lg
        bg-indigo-600
        px-5
        py-2
        font-medium
        text-white
        transition
        hover:bg-indigo-700
        active:scale-95
      "
    >
      ${text}
    </button>
  `
}
```

Uso:

```javascript
import './style.css'
import { Button } from './components/Button'

document.querySelector('#app').innerHTML = `
    <div class="flex min-h-screen items-center justify-center">
        ${Button('Guardar cambios')}
    </div>
`
```

Este patrón mantiene el HTML mucho más limpio cuando la aplicación empieza a crecer.

## Personalizar colores

Una práctica habitual consiste en definir variables CSS para los colores principales de la aplicación.

```css
@import "tailwindcss";

:root {
    --color-primary: #2563eb;
    --color-secondary: #0f172a;
}
```

Luego pueden utilizarse directamente.

```html
<div class="bg-[var(--color-primary)] text-white p-6 rounded-xl">
    Hola Tailwind
</div>
```

Este enfoque facilita cambiar la identidad visual sin modificar decenas de componentes.

## Modo oscuro

Tailwind facilita bastante el soporte para modo oscuro.

```html
<html class="dark">
```

```html
<div class="bg-white text-black dark:bg-slate-900 dark:text-white">
    Contenido
</div>
```

Una recomendación práctica es no mezclar demasiadas condiciones de color dentro del mismo componente. Cuando aparecen más de cinco o seis variantes, normalmente conviene extraer estilos reutilizables.

## Utilidades que se usan constantemente

Algunas clases terminan apareciendo prácticamente en cualquier proyecto.

### Espaciado

```html
<div class="p-4 m-6"></div>
```

### Flexbox

```html
<div class="flex items-center justify-between">
```

### Grid

```html
<div class="grid grid-cols-3 gap-6">
```

### Bordes

```html
<div class="rounded-xl border border-slate-200">
```

### Tipografía

```html
<h2 class="text-3xl font-bold tracking-tight">
```

### Sombras

```html
<div class="shadow-lg">
```

Dominar unas pocas decenas de utilidades suele ser suficiente para construir la mayor parte de una interfaz.

## Integración con VS Code

Para mejorar la experiencia de desarrollo resulta muy útil instalar la extensión oficial de Tailwind CSS.

Entre otras funciones proporciona:

* Autocompletado
* Vista previa de colores
* Validación de clases
* Sugerencias inteligentes
* Orden automático de clases

Cuando el proyecto supera cierta complejidad, estas ayudas reducen bastante el tiempo de desarrollo.

## Rendimiento

Uno de los aspectos que más suele sorprender a quienes vienen de frameworks CSS tradicionales es el tamaño del CSS generado.

En aplicaciones reales es frecuente terminar con archivos inferiores a 20 KB comprimidos, incluso utilizando cientos de componentes.

Esto ocurre porque Tailwind elimina automáticamente todo el código que nunca se utiliza.

El resultado es especialmente beneficioso en aplicaciones SPA donde cada kilobyte descargado afecta directamente al tiempo de carga.

## Cuándo evitar clases extremadamente largas

Un error habitual consiste en escribir componentes con cuarenta o cincuenta clases.

Ejemplo poco mantenible:

```html
<button class="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-xl px-6 py-3 font-semibold tracking-wide transition duration-300 shadow-lg border border-blue-700 text-white">
    Comprar
</button>
```

Cuando empiezan a repetirse bloques similares es mejor crear un componente reutilizable.

También puede agruparse la lógica utilizando funciones.

```javascript
const button = `
bg-blue-600
hover:bg-blue-700
rounded-xl
px-6
py-3
font-semibold
text-white
transition
`
```

Esto simplifica bastante el mantenimiento.

## Despliegue

Cuando el proyecto esté listo para producción basta con ejecutar:

```bash
npm run build
```

El resultado aparecerá en:

```text
dist/
```

Puedes publicar esa carpeta en servicios como:

* Vercel
* Netlify
* GitHub Pages
* Cloudflare Pages
* Servidores Nginx
* Apache

Vite generará automáticamente una versión optimizada para producción.

# Buenas prácticas

* Mantén las clases agrupadas siguiendo un orden consistente para facilitar la lectura.
* Evita copiar y pegar bloques enormes de utilidades; si un patrón se repite varias veces, conviértelo en un componente reutilizable.
* No combines Tailwind con varios frameworks CSS distintos salvo que exista una necesidad clara; las reglas pueden entrar en conflicto.
* Utiliza nombres descriptivos para los componentes en lugar de depender únicamente de fragmentos HTML.
* Revisa el HTML generado cuando algo no se vea correctamente. Muchas veces el problema es simplemente una clase mal escrita.
* Aprovecha Flexbox y Grid antes de recurrir a posicionamiento absoluto para construir layouts.
* Mantén actualizado Tailwind junto con Vite para beneficiarte de mejoras de rendimiento y compatibilidad.
* Si una clase no tiene efecto, verifica primero que el archivo CSS se está importando correctamente y que el servidor de desarrollo se ha reiniciado tras cambios importantes en la configuración.


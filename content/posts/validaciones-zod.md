---
title: "Validaciones con Zod: esquemas seguros y tipados para aplicaciones TypeScript"
date: "2026-07-05"
excerpt: "Cómo utilizar Zod para validar datos de forma segura, compartir esquemas entre frontend y backend y reducir errores comunes en aplicaciones TypeScript."
---

![Validaciones con Zod](https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80)

# Validaciones con Zod

Las validaciones suelen aparecer cuando un proyecto ya comenzó a crecer. Al principio basta con comprobar si un campo está vacío o si un correo tiene un formato válido. Unas semanas después aparecen formularios más complejos, APIs, datos provenientes de servicios externos y diferentes equipos consumiendo la misma información.

En ese punto empiezan los problemas:

- El frontend valida una cosa y el backend otra.
- Los tipos de TypeScript dicen que un dato existe, pero en producción llega `null`.
- Se repiten las mismas validaciones en varios archivos.
- Los mensajes de error son inconsistentes.

Zod resuelve ese escenario permitiendo definir un único esquema que sirve tanto para validar datos en tiempo de ejecución como para inferir tipos de TypeScript automáticamente.

La principal ventaja es que el esquema deja de ser solamente documentación y pasa a convertirse en una fuente de verdad para toda la aplicación.

---

# Instalación

Con npm:

```bash
npm install zod
````

Con pnpm:

```bash
pnpm add zod
```

Con yarn:

```bash
yarn add zod
```

No requiere configuraciones adicionales y funciona tanto en Node.js como en React, Next.js, Express, NestJS, Bun o cualquier proyecto basado en TypeScript.

---

# El primer esquema

Supongamos que un usuario debe registrarse.

En lugar de escribir validaciones manuales, se define un esquema.

```ts
import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number().int().positive()
});
```

Ahora cualquier objeto puede validarse utilizando ese esquema.

```ts
const result = UserSchema.safeParse({
  name: "Carlos",
  email: "carlos@email.com",
  age: 28
});

if (result.success) {
  console.log(result.data);
} else {
  console.log(result.error.format());
}
```

`safeParse()` devuelve un objeto indicando si la validación fue correcta, evitando excepciones.

En aplicaciones web suele ser la opción más cómoda.

---

# Inferir tipos automáticamente

Una de las características más útiles es que no hace falta escribir interfaces duplicadas.

```ts
type User = z.infer<typeof UserSchema>;
```

Ahora `User` siempre coincide con el esquema.

Si mañana agregas un nuevo campo obligatorio, el tipo cambia automáticamente.

Esto elimina uno de los errores más frecuentes en proyectos grandes: mantener sincronizados los tipos y las validaciones.

---

# Validaciones personalizadas

No todas las reglas vienen incluidas.

Por ejemplo, una contraseña puede requerir:

* mínimo 8 caracteres
* una mayúscula
* un número

```ts
const PasswordSchema = z.string()
  .min(8, "Debe tener al menos 8 caracteres")
  .regex(/[A-Z]/, "Debe contener una mayúscula")
  .regex(/[0-9]/, "Debe contener un número");
```

Su uso es exactamente igual.

```ts
PasswordSchema.safeParse("Password123");
```

---

# Objetos anidados

Es habitual recibir estructuras complejas.

```ts
const AddressSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string()
});

const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  address: AddressSchema
});
```

El esquema se reutiliza fácilmente.

```ts
const user = UserSchema.parse({
  name: "Ana",
  email: "ana@email.com",
  address: {
    street: "Av. Principal",
    city: "Lima",
    country: "Perú"
  }
});
```

Cuando el proyecto tiene decenas de entidades, mantener pequeños esquemas reutilizables resulta mucho más sencillo que crear una única validación gigante.

---

# Arrays

Validar listas también es muy simple.

```ts
const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number()
});

const ProductsSchema = z.array(ProductSchema);
```

Uso:

```ts
const products = ProductsSchema.parse([
  {
    id: 1,
    name: "Mouse",
    price: 39
  },
  {
    id: 2,
    name: "Teclado",
    price: 75
  }
]);
```

También pueden agregarse restricciones.

```ts
const TagsSchema = z.array(z.string()).min(1).max(5);
```

---

# Campos opcionales

No todos los datos son obligatorios.

```ts
const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional()
});
```

También puede definirse un valor por defecto.

```ts
const UserSchema = z.object({
  role: z.string().default("user")
});
```

Cuando el campo no existe, Zod asignará automáticamente `"user"`.

---

# Valores nulos

Hay diferencia entre un campo opcional y uno que acepta `null`.

```ts
z.string().optional();
```

Permite:

```ts
undefined
```

Mientras que:

```ts
z.string().nullable();
```

Permite:

```ts
null
```

Y si necesitas ambos:

```ts
z.string().nullish();
```

Este detalle suele evitar bastantes errores al consumir APIs externas.

---

# Transformar datos durante la validación

Un esquema también puede modificar valores.

```ts
const EmailSchema = z.string()
  .trim()
  .toLowerCase()
  .email();
```

Entrada:

```text
  USER@EMAIL.COM
```

Salida:

```text
user@email.com
```

Otro ejemplo práctico.

```ts
const AgeSchema = z.string().transform(Number);
```

Entrada:

```text
"25"
```

Salida:

```ts
25
```

Esto resulta muy útil porque muchos formularios envían números como cadenas.

---

# Refinamientos personalizados

Algunas reglas dependen del negocio.

Por ejemplo, una persona debe ser mayor de edad.

```ts
const UserSchema = z.object({
  age: z.number()
}).refine(
  data => data.age >= 18,
  {
    message: "Debe ser mayor de edad",
    path: ["age"]
  }
);
```

También puede validarse la relación entre varios campos.

```ts
const RegisterSchema = z.object({
  password: z.string(),
  confirmPassword: z.string()
}).refine(
  data => data.password === data.confirmPassword,
  {
    path: ["confirmPassword"],
    message: "Las contraseñas no coinciden"
  }
);
```

Este tipo de validaciones suele aparecer en registros, pagos y procesos administrativos.

---

# Compartiendo esquemas entre frontend y backend

Una práctica bastante extendida consiste en crear un paquete compartido.

```
packages/

shared/
    schemas/
        user.ts

backend/
frontend/
```

En `shared/schemas/user.ts`:

```ts
import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email()
});

export type User = z.infer<typeof UserSchema>;
```

Luego ambos proyectos reutilizan exactamente el mismo esquema.

Frontend:

```ts
UserSchema.parse(response);
```

Backend:

```ts
UserSchema.parse(req.body);
```

Con este enfoque desaparecen muchas inconsistencias entre cliente y servidor.

---

# Validando variables de entorno

Una práctica que termina ahorrando muchas horas de depuración consiste en validar las variables de entorno al iniciar la aplicación.

```ts
import { z } from "zod";

const EnvSchema = z.object({
  PORT: z.coerce.number(),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32)
});

const env = EnvSchema.parse(process.env);

export default env;
```

Si una variable falta o tiene un formato incorrecto, la aplicación falla inmediatamente en lugar de hacerlo minutos después durante una petición.

---

# Integración con Express

Un middleware sencillo puede validar cualquier petición.

```ts
import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  email: z.string().email()
});

export function validateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = UserSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      errors: result.error.flatten()
    });
  }

  req.body = result.data;

  next();
}
```

Uso:

```ts
app.post("/users", validateUser, (req, res) => {
  res.json(req.body);
});
```

La ventaja es que el controlador recibe datos ya validados.

No necesita repetir comprobaciones.

---

# Integración con React Hook Form

Una combinación muy habitual es React Hook Form junto con Zod.

```ts
const FormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email()
});
```

Con el resolver de Zod, el formulario reutiliza exactamente las mismas reglas que el backend.

Esto evita mantener dos conjuntos de validaciones diferentes.

En equipos grandes, compartir los esquemas suele reducir considerablemente la cantidad de incidencias relacionadas con formularios.

---

# `parse()` o `safeParse()`

Ambos métodos validan datos, pero tienen comportamientos distintos.

`parse()` lanza una excepción.

```ts
const user = UserSchema.parse(data);
```

Si los datos son inválidos, la ejecución se interrumpe.

Es útil cuando un dato inválido representa un error de programación.

Por otro lado:

```ts
const result = UserSchema.safeParse(data);
```

Nunca lanza excepciones.

Devuelve un resultado indicando si la validación fue correcta.

En APIs REST y formularios suele ser la opción más cómoda porque permite responder errores de validación sin depender de bloques `try/catch`.

---

# Buenas prácticas

* Mantén los esquemas pequeños y reutilizables.
* Comparte los esquemas entre frontend y backend siempre que sea posible.
* Valida las variables de entorno al iniciar la aplicación.
* Prefiere `safeParse()` para datos provenientes de usuarios o APIs externas.
* Utiliza `z.infer` para evitar interfaces duplicadas.
* Aprovecha `transform()` para normalizar datos antes de almacenarlos.
* Centraliza los mensajes de error cuando el proyecto tenga soporte para varios idiomas.
* Evita validar únicamente con TypeScript. Los tipos desaparecen en tiempo de ejecución y no protegen frente a datos externos.

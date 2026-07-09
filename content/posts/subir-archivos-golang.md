---
title: "📁 Subir archivos en Go: implementación segura, validación y almacenamiento"
date: "2026-07-09"
excerpt: "Cómo implementar una subida de archivos en Go con validaciones, límites de tamaño, almacenamiento seguro y buenas prácticas para producción."
---

# 📁 Subir archivos en Go: implementación segura, validación y almacenamiento


Subir archivos parece una tarea sencilla hasta que la aplicación empieza a recibir documentos grandes, imágenes dañadas, nombres de archivos extraños o intentos de subir contenido que nunca debería llegar al servidor.

En aplicaciones internas suele bastar con guardar un archivo en una carpeta. En producción la historia cambia rápidamente: límites de tamaño, validación del tipo de archivo, colisiones de nombres, permisos, almacenamiento en la nube y ataques mediante archivos maliciosos pasan a formar parte del día a día.

Go facilita mucho este tipo de tareas gracias al paquete `net/http`, que ya incorpora soporte para formularios `multipart/form-data`. A partir de ahí la diferencia entre una implementación básica y una robusta depende principalmente de las validaciones que se agreguen.

## Cómo funciona una subida de archivos

Cuando un navegador envía un formulario con archivos utiliza el tipo de contenido:

```text
multipart/form-data
```

Cada campo del formulario viaja separado por un *boundary*. Go procesa automáticamente este formato mediante:

```go
r.ParseMultipartForm()
```

o directamente utilizando:

```go
r.FormFile()
```

El archivo recibido implementa la interfaz `io.Reader`, por lo que puede copiarse fácilmente a cualquier destino usando `io.Copy`.

## Estructura del proyecto

```text
upload-demo/
│
├── main.go
├── uploads/
└── go.mod
```

La carpeta `uploads` almacenará los archivos recibidos.

## Servidor HTTP

```go
package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

const (
	maxUploadSize = 10 << 20 // 10 MB
	uploadPath    = "./uploads"
)

func main() {

	if err := os.MkdirAll(uploadPath, os.ModePerm); err != nil {
		log.Fatal(err)
	}

	http.HandleFunc("/", formHandler)
	http.HandleFunc("/upload", uploadHandler)

	fmt.Println("Servidor iniciado en :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
```

Este servidor crea automáticamente la carpeta donde se almacenarán los archivos si todavía no existe.

## Formulario HTML

```go
func formHandler(w http.ResponseWriter, r *http.Request) {

	html := `
	<html>
		<body>
			<form enctype="multipart/form-data"
			      action="/upload"
			      method="POST">

				<input type="file" name="file">
				<button>Subir</button>

			</form>
		</body>
	</html>
	`

	w.Write([]byte(html))
}
```

El atributo que nunca debe olvidarse es:

```html
enctype="multipart/form-data"
```

Sin él, el navegador no enviará correctamente el archivo.

## Recibiendo el archivo

```go
func uploadHandler(w http.ResponseWriter, r *http.Request) {

	r.Body = http.MaxBytesReader(w, r.Body, maxUploadSize)

	err := r.ParseMultipartForm(maxUploadSize)

	if err != nil {
		http.Error(w, "Archivo demasiado grande", http.StatusBadRequest)
		return
	}

	file, header, err := r.FormFile("file")

	if err != nil {
		http.Error(w, "No se recibió ningún archivo", http.StatusBadRequest)
		return
	}

	defer file.Close()

	dst, err := os.Create(filepath.Join(uploadPath, header.Filename))

	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	defer dst.Close()

	if _, err := io.Copy(dst, file); err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	fmt.Fprintf(w, "Archivo %s subido correctamente", header.Filename)
}
```

Con esto ya es posible subir archivos desde el navegador.

Aunque funciona, todavía tiene varios problemas que aparecen rápidamente en producción.

## Limitar el tamaño del archivo

Uno de los errores más habituales consiste en aceptar cualquier tamaño de archivo.

Basta con que un cliente envíe varios archivos de cientos de megabytes para consumir memoria o espacio en disco.

La protección más sencilla es:

```go
r.Body = http.MaxBytesReader(
    w,
    r.Body,
    10<<20,
)
```

Ese límite se aplica antes de procesar el formulario.

No conviene confiar únicamente en validaciones del lado del navegador, ya que cualquier cliente HTTP puede ignorarlas.

## Validar el tipo de archivo

Muchos sistemas verifican únicamente la extensión.

```text
foto.jpg
```

Eso no significa que realmente sea una imagen JPEG.

Go permite inspeccionar los primeros bytes del archivo:

```go
buffer := make([]byte, 512)

_, err = file.Read(buffer)

if err != nil {
	return
}

contentType := http.DetectContentType(buffer)

fmt.Println(contentType)
```

El resultado puede ser:

```text
image/jpeg
```

o

```text
application/pdf
```

Después de la lectura hay que volver al inicio:

```go
file.Seek(0, io.SeekStart)
```

Una validación típica sería:

```go
allowed := map[string]bool{
	"image/jpeg": true,
	"image/png":  true,
}

if !allowed[contentType] {
	http.Error(w, "Formato no permitido", 400)
	return
}
```

Esta comprobación evita muchos intentos de subir contenido inesperado.

## Evitar sobrescribir archivos

Guardar usando el nombre original suele provocar conflictos.

Dos usuarios pueden subir:

```text
foto.png
```

El segundo sobrescribirá al primero.

Una alternativa sencilla consiste en generar un nombre único.

```go
filename := fmt.Sprintf(
	"%d%s",
	time.Now().UnixNano(),
	filepath.Ext(header.Filename),
)
```

También es habitual utilizar UUID.

```text
d81c92b6-acde-4cb8.png
```

De esta forma el nombre almacenado deja de depender del cliente.

## Sanitizar nombres de archivos

Nunca debe confiarse en el nombre recibido.

Ejemplos como estos son frecuentes:

```text
../../config.env
```

o

```text
C:\Windows\system32
```

La forma más sencilla de evitar problemas es ignorar completamente el nombre original y generar uno nuevo.

Si por motivos de negocio debe conservarse, es recomendable almacenarlo únicamente en la base de datos como información descriptiva.

## Subiendo varios archivos

Go también permite recibir múltiples archivos.

HTML:

```html
<input
    type="file"
    name="files"
    multiple
>
```

Servidor:

```go
files := r.MultipartForm.File["files"]

for _, header := range files {

	file, err := header.Open()

	if err != nil {
		continue
	}

	dst, _ := os.Create(filepath.Join(
		uploadPath,
		header.Filename,
	))

	io.Copy(dst, file)

	dst.Close()
	file.Close()
}
```

Cuando se manejan decenas de archivos resulta recomendable limitar también la cantidad permitida.

## Guardar directamente en Amazon S3

En muchos proyectos el servidor nunca almacena archivos localmente.

El flujo habitual es:

```text
Cliente
        │
        ▼
Servidor Go
        │
        ▼
Amazon S3
```

Una vez obtenido el archivo basta con enviarlo mediante el SDK oficial.

```go
uploader.Upload(ctx, &s3.PutObjectInput{
	Bucket: aws.String("mi-bucket"),
	Key:    aws.String(filename),
	Body:   file,
})
```

Esta estrategia evita llenar el disco del servidor y simplifica el escalado horizontal.

## Streaming para archivos grandes

Un error bastante frecuente consiste en cargar archivos completos en memoria.

Con archivos de varios gigabytes el consumo puede dispararse rápidamente.

Una ventaja de `io.Copy` es que realiza la copia utilizando un buffer interno.

```go
io.Copy(dst, file)
```

No necesita cargar el archivo completo en memoria antes de escribirlo.

Cuando el almacenamiento también soporta streaming (como S3), el consumo de memoria permanece prácticamente constante.

## Respuestas JSON

En APIs REST normalmente no se devuelve texto plano.

```go
type UploadResponse struct {
	File string `json:"file"`
	Size int64  `json:"size"`
}
```

Respuesta:

```go
response := UploadResponse{
	File: filename,
	Size: header.Size,
}

w.Header().Set("Content-Type", "application/json")

json.NewEncoder(w).Encode(response)
```

Respuesta obtenida:

```json
{
  "file": "174981922831923.png",
  "size": 928112
}
```

## Organización del código

Cuando el proyecto crece resulta conveniente separar responsabilidades.

```text
internal/

    handlers/
        upload.go

    services/
        storage.go

    validators/
        file.go

    middleware/
```

El handler debería limitarse a recibir la petición HTTP.

Las validaciones, almacenamiento y lógica de negocio conviene mantenerlas desacopladas para facilitar pruebas y mantenimiento.

## Consideraciones de seguridad

Hay varias medidas que suelen olvidarse durante las primeras implementaciones:

* Validar el tipo MIME además de la extensión.
* Limitar el tamaño máximo permitido.
* Generar nombres únicos.
* No confiar en el nombre enviado por el cliente.
* Evitar permisos de escritura innecesarios.
* Analizar archivos con antivirus cuando el negocio lo requiera.
* Mantener los archivos fuera del directorio público del servidor si no deben ser accesibles directamente.
* Registrar quién subió cada archivo y cuándo.

Un detalle que suele pasar desapercibido es el almacenamiento de documentos privados.

Guardar archivos dentro de la carpeta pública del servidor web permite que cualquier persona conozca la URL y los descargue sin autenticación. En sistemas donde se manejan contratos, documentos médicos o información financiera, normalmente se almacenan fuera del directorio público y se entregan mediante un endpoint que verifica permisos antes de iniciar la descarga.

## Buenas prácticas

* Generar nombres únicos en lugar de utilizar el nombre original.
* Validar tanto el tamaño como el tipo real del archivo.
* Limitar el número de archivos que pueden enviarse en una sola petición.
* Utilizar `http.MaxBytesReader` para proteger el servidor frente a cargas excesivas.
* Usar `io.Copy` para aprovechar el streaming y evitar consumir memoria innecesariamente.
* Mantener la lógica de almacenamiento separada de los handlers HTTP.
* Almacenar archivos en servicios como Amazon S3 o sistemas equivalentes cuando la aplicación deba escalar horizontalmente.
* Registrar eventos de subida y errores para facilitar el diagnóstico en producción.

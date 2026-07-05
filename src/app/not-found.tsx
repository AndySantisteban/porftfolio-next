import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md py-20 text-center">
      <p className="text-6xl font-bold text-accent" aria-hidden>
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight">Página no encontrada</h1>
      <p className="mt-2 text-muted">
        El contenido que buscás no existe o fue movido.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Volver al inicio
      </Link>
    </div>
  );
}

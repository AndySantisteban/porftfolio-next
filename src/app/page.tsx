import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { videos } from "@/data/videos";
import { recommendations } from "@/data/recommendations";
import { getAllPosts } from "@/lib/posts";
import { ProjectCard } from "@/components/project-card";
import { YouTubeEmbed } from "@/components/youtube-embed";
import { site } from "@/lib/site";

export default function Home() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <div className="flex flex-col gap-20">
      {/* ——— Hero ——— */}
      <section className="flex flex-col-reverse items-center gap-10 sm:flex-row sm:justify-between">
        <div className="max-w-xl text-center sm:text-start">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            Disponible para nuevos proyectos
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Hola, soy <span className="text-accent">Andy Santisteban</span>
          </h1>
          <p className="mt-2 text-lg font-medium text-muted">{site.role}</p>
          <p className="mt-4 leading-relaxed text-muted">
            Más de 4 años creando soluciones con <strong className="text-foreground">Golang</strong>,{" "}
            <strong className="text-foreground">TypeScript</strong>,{" "}
            <strong className="text-foreground">Python</strong> y{" "}
            <strong className="text-foreground">C#</strong> — desde plataformas IIoT hasta
            aplicaciones con Deep Learning.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
            <Link
              href="/projects"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Ver proyectos
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Contactame
            </Link>
            <a
              href={site.cv}
              download
              className="rounded-full px-5 py-2.5 text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              Descargar CV ↓
            </a>
          </div>
        </div>
        {/* LCP: imagen visible arriba del fold → priority (eager + fetchpriority=high) */}
        <Image
          src="/yo2.jpg"
          alt="Foto de Andy Santisteban"
          width={288}
          height={288}
          priority
          sizes="(max-width: 640px) 12rem, 18rem"
          className="w-48 rounded-full ring-4 ring-accent-soft sm:w-64 lg:w-72"
        />
      </section>

      {/* ——— Proyectos destacados ——— */}
      <section aria-labelledby="featured-heading">
        <div className="mb-6 flex items-end justify-between">
          <h2 id="featured-heading" className="text-2xl font-bold tracking-tight">
            Proyectos destacados
          </h2>
          <Link href="/projects" className="text-sm text-accent hover:underline">
            Ver todos →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* ——— Blog ——— */}
      <section aria-labelledby="blog-heading">
        <div className="mb-6 flex items-end justify-between">
          <h2 id="blog-heading" className="text-2xl font-bold tracking-tight">
            Últimos artículos
          </h2>
          <Link href="/blog" className="text-sm text-accent hover:underline">
            Ver todos →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
            >
              <article>
                <time dateTime={post.date} className="text-xs text-muted">
                  {new Date(post.date + "T00:00:00").toLocaleDateString("es-PE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h3 className="mt-1 font-semibold leading-snug tracking-tight group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted">{post.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* ——— Videos ——— */}
      <section aria-labelledby="videos-heading">
        <h2 id="videos-heading" className="mb-6 text-2xl font-bold tracking-tight">
          Videos y tutoriales
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <figure key={v.id}>
              <YouTubeEmbed id={v.id} title={v.title} />
              <figcaption className="mt-2 line-clamp-2 text-sm font-medium">
                {v.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ——— Recomendaciones ——— */}
      <section aria-labelledby="recs-heading">
        <h2 id="recs-heading" className="mb-6 text-2xl font-bold tracking-tight">
          Recomendaciones
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((r) => (
            <blockquote
              key={r.name}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5"
            >
              <p className="text-sm leading-relaxed text-muted">“{r.text}”</p>
              <footer className="mt-auto flex items-center gap-3">
                <span
                  aria-hidden
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-accent-soft text-sm font-semibold text-accent-strong"
                >
                  {r.name
                    .split(" ")
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")}
                </span>
                <cite className="text-sm font-medium not-italic">{r.name}</cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}

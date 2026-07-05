import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

/** Placeholder con gradiente para proyectos sin screenshot */
function CoverFallback({ title }: { title: string }) {
  return (
    <div
      aria-hidden
      className="grid aspect-video w-full place-items-center bg-gradient-to-br from-accent-soft via-surface to-accent-soft"
    >
      <span className="text-4xl font-bold tracking-tight text-accent/40">
        {title
          .split(" ")
          .slice(0, 2)
          .map((w) => w[0])
          .join("")}
      </span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <>
      <div className="overflow-hidden">
        {project.cover ? (
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            width={project.cover.width}
            height={project.cover.height}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="aspect-video w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <CoverFallback title={project.title} />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-semibold leading-snug tracking-tight">
          {project.title}
          {project.wip && (
            <span className="ms-2 rounded-full bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent-strong">
              En desarrollo
            </span>
          )}
        </h3>
        <p className="line-clamp-2 text-sm text-muted">{project.tagline}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2" aria-label="Tecnologías">
          {project.stack.slice(0, 4).map((t) => (
            <li
              key={t}
              className="rounded-full border border-border px-2 py-0.5 text-xs text-muted"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  const cardClass =
    "group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5";

  // Los WIP no tienen página de detalle todavía
  if (project.wip) {
    return <article className={cardClass}>{inner}</article>;
  }

  return (
    <Link href={`/projects/${project.slug}`} className={cardClass}>
      <article className="contents">{inner}</article>
    </Link>
  );
}

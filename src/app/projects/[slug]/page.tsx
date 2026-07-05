import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { Markdown } from "@/components/markdown";

interface Props {
  params: Promise<{ slug: string }>;
}

// SSG: todas las páginas de proyecto se generan en build time
export function generateStaticParams() {
  return projects.filter((p) => !p.wip).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    openGraph: project.cover
      ? { images: [project.cover.src] }
      : undefined,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || project.wip) notFound();

  return (
    <article className="mx-auto max-w-3xl">
      <nav aria-label="Migas de pan" className="mb-6 text-sm text-muted">
        <Link href="/projects" className="hover:text-accent">
          ← Proyectos
        </Link>
      </nav>

      <header>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>
        <p className="mt-3 text-lg text-muted">{project.tagline}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologías">
          {project.stack.map((t) => (
            <li
              key={t}
              className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-strong"
            >
              {t}
            </li>
          ))}
        </ul>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Visitar proyecto ↗
          </a>
        )}
      </header>

      {project.cover && (
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="mt-8 w-full rounded-2xl border border-border"
        />
      )}

      <div className="mt-8">
        <Markdown>{project.body}</Markdown>
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <section aria-label="Galería" className="mt-10 grid gap-4 sm:grid-cols-2">
          {project.gallery.map((img) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              loading="lazy"
              sizes="(max-width: 640px) 100vw, 384px"
              className="w-full rounded-xl border border-border"
            />
          ))}
        </section>
      )}
    </article>
  );
}

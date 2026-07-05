import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos de Andy Santisteban: plataformas IIoT, Deep Learning, librerías npm y más.",
};

export default function ProjectsPage() {
  const ready = projects.filter((p) => !p.wip);
  const wip = projects.filter((p) => p.wip);

  return (
    <div className="flex flex-col gap-12">
      <header>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Proyectos</h1>
        <p className="mt-3 max-w-xl text-muted">
          Una selección de lo que construí: desde plataformas industriales en tiempo real
          hasta aplicaciones con Deep Learning y herramientas open source.
        </p>
      </header>

      <section aria-label="Proyectos publicados">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ready.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {wip.length > 0 && (
        <section aria-labelledby="wip-heading">
          <h2 id="wip-heading" className="mb-5 text-xl font-bold tracking-tight">
            En desarrollo
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {wip.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

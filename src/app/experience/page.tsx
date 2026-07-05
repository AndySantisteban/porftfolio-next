import type { Metadata } from "next";
import { jobs, highlights } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experiencia",
  description:
    "Experiencia laboral de Andy Santisteban: Unified Software, First Automation, MDP Consulting y más.",
};

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-14">
      <header>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Experiencia</h1>
      </header>

      <section aria-label="Experiencia laboral">
        <ol className="relative flex flex-col gap-10 border-s border-border ps-6 sm:ps-8">
          {jobs.map((job) => (
            <li key={job.company} className="relative">
              <span
                aria-hidden
                className={`absolute -start-6 top-1.5 size-3 -translate-x-1/2 rounded-full sm:-start-8 ${
                  job.current ? "bg-accent ring-4 ring-accent-soft" : "bg-border"
                }`}
              />
              <h2 className="text-lg font-semibold leading-snug tracking-tight">
                {job.company}
              </h2>
              <p className="text-sm font-medium text-accent">{job.role}</p>
              <p className="mt-0.5 text-sm text-muted">{job.period}</p>
              <ul className="mt-3 flex list-disc flex-col gap-1.5 ps-4 text-sm leading-relaxed text-muted">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="highlights-heading">
        <h2 id="highlights-heading" className="mb-5 text-xl font-bold tracking-tight">
          Reconocimientos y publicaciones
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <article
              key={h.title}
              className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-5"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-muted">{h.org}</p>
              <h3 className="font-semibold tracking-tight">{h.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{h.description}</p>
              {h.url && (
                <a
                  href={h.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-2 text-sm text-accent hover:underline"
                >
                  Ver más ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

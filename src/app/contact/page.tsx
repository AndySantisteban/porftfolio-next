import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactá a Andy Santisteban para proyectos y oportunidades.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-md">
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Hablemos</h1>
        <p className="mt-3 text-muted">
          ¿Tenés un proyecto o una oportunidad? Escribime y te respondo a la brevedad.
        </p>
      </header>

      <ContactForm />

      <p className="mt-8 text-center text-sm text-muted">
        También podés encontrarme en{" "}
        <a
          href={site.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          LinkedIn
        </a>{" "}
        o escribirme por{" "}
        <a
          href={site.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          WhatsApp
        </a>
        .
      </p>
    </div>
  );
}

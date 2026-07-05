"use client";

import { useForm, ValidationError } from "@formspree/react";
import { site } from "@/lib/site";

const inputClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/20";

export function ContactForm() {
  const [state, handleSubmit] = useForm(site.formspreeId);

  // El éxito reemplaza al formulario — sin modales con estado desincronizado
  if (state.succeeded) {
    return (
      <div
        role="status"
        className="mt-10 rounded-2xl border border-accent/30 bg-accent-soft p-8 text-center"
      >
        <p className="text-2xl" aria-hidden>
          ✓
        </p>
        <h2 className="mt-2 font-semibold">¡Gracias por tu mensaje!</h2>
        <p className="mt-1 text-sm text-muted">Te responderé lo antes posible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Tu nombre"
          className={inputClass}
        />
        <ValidationError prefix="Nombre" field="name" errors={state.errors} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="tu@correo.com"
          className={inputClass}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Contame sobre tu proyecto…"
          className={inputClass}
        />
        <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {state.submitting ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}

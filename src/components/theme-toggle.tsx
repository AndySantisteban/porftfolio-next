"use client";

import { useEffect, useState } from "react";

/**
 * Toggle de 2 estados: preferencia del sistema ↔ el opuesto (pineado).
 * Pinear escribe data-theme en <html>, actualiza <meta name="color-scheme">
 * y persiste en localStorage (el script inline del layout lo re-aplica al cargar).
 */
export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const compute = () => {
      const pinned = document.documentElement.dataset.theme;
      setIsDark(pinned ? pinned === "dark" : mq.matches);
    };
    compute();
    mq.addEventListener("change", compute);
    return () => mq.removeEventListener("change", compute);
  }, []);

  function toggle() {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next = !isDark;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]');
    if (next === systemDark) {
      // Vuelve al estado "sistema"
      delete document.documentElement.dataset.theme;
      localStorage.removeItem("theme");
      if (meta) meta.content = "light dark";
    } else {
      const theme = next ? "dark" : "light";
      document.documentElement.dataset.theme = theme;
      localStorage.setItem("theme", theme);
      if (meta) meta.content = theme;
    }
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      className="grid size-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {/* Se renderiza el ícono correcto recién al hidratar para no desincronizar con SSR */}
      {isDark === null ? (
        <span className="size-4" />
      ) : isDark ? (
        <svg aria-hidden viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg aria-hidden viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
        </svg>
      )}
    </button>
  );
}

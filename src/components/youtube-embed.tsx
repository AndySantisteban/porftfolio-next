"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Facade pattern: renderiza solo el thumbnail (~20 KB) y recién carga el
 * iframe de YouTube (~1 MB de JS) cuando el usuario hace click en play.
 * Clave para redes lentas: 6 videos embebidos pasan de ~6 MB a ~120 KB.
 */
export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="aspect-video w-full rounded-xl border border-border"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Reproducir video: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-xl border border-border"
    >
      <Image
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span className="absolute inset-0 grid place-items-center bg-black/20 transition-colors group-hover:bg-black/30">
        <span className="grid size-14 place-items-center rounded-full bg-black/70 text-white backdrop-blur-sm">
          <svg aria-hidden viewBox="0 0 24 24" className="ml-1 size-6" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}

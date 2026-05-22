import { useState } from "react";
import { gallery } from "@/lib/data";
import { Reveal } from "./Reveal";
import { X } from "lucide-react";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="galeria" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Galeria</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl divider-gold">Momentos no Kampion</h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-4">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={(i % 6) * 60}>
              <button
                onClick={() => setOpen(i)}
                className={`group relative block w-full overflow-hidden rounded-xl ${
                  i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                }`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/30" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-6 backdrop-blur-md animate-fade-in"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute right-6 top-6 rounded-full border border-border bg-card p-2 text-foreground"
            aria-label="Fechar"
            onClick={() => setOpen(null)}
          >
            <X />
          </button>
          <img
            src={gallery[open].src}
            alt={gallery[open].alt}
            className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain shadow-[var(--shadow-elegant)]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

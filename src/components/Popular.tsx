import { popular } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Popular() {
  return (
    <section className="relative py-24 lg:py-32 bg-african-weave">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Favoritos da casa</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl divider-gold">Pratos Mais Populares</h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-2 hover:border-primary/60">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-foreground">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

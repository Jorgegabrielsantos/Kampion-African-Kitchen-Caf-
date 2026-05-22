import { useState } from "react";
import { menu } from "@/lib/data";
import { Reveal } from "./Reveal";

const categories = Object.keys(menu) as Array<keyof typeof menu>;

export function Menu() {
  const [active, setActive] = useState<keyof typeof menu>(categories[0]);
  const items = menu[active];

  return (
    <section id="menu" className="relative py-24 lg:py-32 bg-african-pattern">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Carta</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl divider-gold">Nosso Menu</h2>
            <p className="mt-6 mx-auto max-w-xl text-muted-foreground">
              Receitas tradicionais reinterpretadas por chefs apaixonados. Ingredientes frescos,
              ervas e especiarias do continente africano.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-6 py-2.5 text-xs uppercase tracking-wider transition-all ${
                active === c
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-gold)]"
                  : "border border-border bg-card text-foreground/80 hover:border-primary/60"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={i * 60}>
              <article className="group flex h-full overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-gold)]">
                <div className="aspect-square w-32 shrink-0 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-display text-lg leading-tight">{item.name}</h3>
                    <p className="mt-2 text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

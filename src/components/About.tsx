import dining from "@/assets/dining.jpg";
import guestsGroup from "@/assets/guests-group.jpg";
import africaWall from "@/assets/africa-wall.jpg";
import owners from "@/assets/owners.jpg";

import { Reveal } from "./Reveal";

const values = ["Tradição", "Hospitalidade", "Qualidade", "Cultura", "Excelência"];

export function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={dining}
              alt="Sala de jantar do Kampion"
              loading="lazy"
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
            />
            <img
              src={africaWall}
              alt="Parede com o mapa de África no Kampion"
              loading="lazy"
              className="mt-8 aspect-[3/4] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
            />
            <img
              src={guestsGroup}
              alt="Clientes a celebrar no Kampion"
              loading="lazy"
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
            />
            <img
              src={owners}
              alt="Anfitriões do Kampion"
              loading="lazy"
              className="mt-8 aspect-[3/4] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
            />
          </div>
        </Reveal>


        <Reveal delay={150}>
          <div className="flex h-full flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Sobre Nós</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Uma viagem aos <span className="text-gold-gradient">sabores de África</span>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Kampion nasceu com a missão de trazer sabores autênticos africanos para Cabo Verde,
              preservando a tradição, a hospitalidade e a qualidade que tornam cada refeição
              uma celebração. Combinamos receitas centenárias com um ambiente contemporâneo e
              acolhedor — pensado para famílias, jovens, profissionais e turistas.
            </p>

            <div className="mt-10 rounded-xl border border-border bg-card/60 p-6">
              <h3 className="font-display text-xl text-primary">Missão</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Oferecer experiências gastronómicas africanas autênticas, com excelência no serviço e
                respeito pelas tradições culinárias do continente.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-display text-xl text-primary">Valores</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {values.map((v) => (
                  <li
                    key={v}
                    className="rounded-full border border-primary/40 px-4 py-1.5 text-xs uppercase tracking-wider text-foreground/90"
                  >
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

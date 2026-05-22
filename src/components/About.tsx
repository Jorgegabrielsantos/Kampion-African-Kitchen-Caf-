import interior from "@/assets/interior.jpg";
import chef from "@/assets/chef.jpg";
import { Reveal } from "./Reveal";

const values = ["Tradição", "Hospitalidade", "Qualidade", "Cultura", "Excelência"];

export function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="relative">
            <img
              src={interior}
              alt="Interior elegante do Kampion"
              loading="lazy"
              width={1536}
              height={1024}
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
            />
            <img
              src={chef}
              alt="Chef a empratar"
              loading="lazy"
              width={1024}
              height={1280}
              className="absolute -bottom-10 -right-6 hidden h-56 w-44 rounded-2xl border-4 border-background object-cover shadow-[var(--shadow-gold)] md:block"
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

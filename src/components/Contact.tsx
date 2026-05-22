import { Reveal } from "./Reveal";
import { INFO } from "@/lib/data";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Contact() {
  const items = [
    { Icon: MapPin, label: "Endereço", value: INFO.address },
    { Icon: Clock, label: "Horário", value: "09:00 — 00:00 · todos os dias" },
    { Icon: Phone, label: "WhatsApp", value: INFO.phone, href: `https://wa.me/${INFO.phoneRaw}` },
    { Icon: Mail, label: "Email", value: INFO.email, href: `mailto:${INFO.email}` },
  ];

  return (
    <section id="contactos" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Contactos</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl divider-gold">Visite-nos</h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-5">
              {items.map(({ Icon, label, value, href }) => {
                const inner = (
                  <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/60">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
                      <p className="mt-1 text-foreground">{value}</p>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}

              <div className="flex gap-3 pt-2">
                {[
                  { Icon: Instagram, href: "https://instagram.com" },
                  { Icon: Facebook, href: "https://facebook.com" },
                  {
                    Icon: () => (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M16.6 5.82a4.28 4.28 0 0 1-3.77-2.1V15.4a4.6 4.6 0 1 1-4.6-4.6c.32 0 .63.04.92.1v2.39a2.2 2.2 0 1 0 1.5 2.08V0h2.3a4.28 4.28 0 0 0 3.65 3.49v2.33z"/></svg>
                    ),
                    href: "https://tiktok.com",
                  },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Rede social"
                    className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
              <iframe
                title="Localização Kampion"
                src="https://www.google.com/maps?q=Achada+Santo+Ant%C3%B3nio,+Praia,+Cabo+Verde&output=embed"
                className="h-[480px] w-full grayscale-[30%] contrast-110"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

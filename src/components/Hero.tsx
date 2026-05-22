import heroImg from "@/assets/hero.jpg";
import { Clock, MapPin, MessageCircle } from "lucide-react";
import { INFO } from "@/lib/data";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Prato premium de cozinha africana"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-african-pattern opacity-40 mix-blend-overlay" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-24 text-center">
        <p className="animate-fade-in mb-6 text-xs uppercase tracking-[0.5em] text-primary">
          Achada Santo António · Praia · Cabo Verde
        </p>
        <h1 className="animate-fade-up font-display text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          Kampion <span className="text-gold-gradient">African</span>
          <br />
          Kitchen &amp; Café
        </h1>
        <p
          className="animate-fade-up mt-8 max-w-2xl text-lg italic text-foreground/85 md:text-xl"
          style={{ animationDelay: "200ms" }}
        >
          “Sabores autênticos de África, servidos com paixão.”
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "350ms" }}
        >
          <a
            href="#menu"
            className="rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-105"
          >
            Ver Menu
          </a>
          <a
            href="#reservas"
            className="rounded-full border border-primary/70 bg-background/20 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Reservar Mesa
          </a>
        </div>

        <div
          className="animate-fade-up mt-16 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
          style={{ animationDelay: "500ms" }}
        >
          {[
            { Icon: Clock, label: "Horário", value: "09:00 — 00:00" },
            { Icon: MapPin, label: "Localização", value: "Achada Santo António" },
            { Icon: MessageCircle, label: "WhatsApp", value: INFO.phone },
          ].map(({ Icon, label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background/40 px-4 py-5 backdrop-blur-md"
            >
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
              <span className="text-sm text-foreground">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Descer"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-primary/80 hover:text-primary"
      >
        <span className="block h-10 w-px bg-primary/50 animate-pulse" />
      </a>
    </section>
  );
}

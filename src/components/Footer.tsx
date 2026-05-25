import { INFO } from "@/lib/data";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 bg-african-pattern">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div>
          <img src={logo} alt="Kampion African Kitchen & Café" className="h-20 w-20 rounded-full object-cover ring-2 ring-primary/60" />
          <p className="mt-4 font-display text-2xl">
            <span className="text-gold-gradient">Kampion</span>
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">African Kitchen &amp; Café</p>
          <p className="mt-4 text-sm text-muted-foreground">
            Sabores autênticos de África, servidos com paixão no coração de Praia.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg text-primary">Links Rápidos</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["#sobre", "Sobre Nós"],
              ["#menu", "Menu"],
              ["#galeria", "Galeria"],
              ["#reservas", "Reservas"],
              ["#contactos", "Contactos"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-foreground/80 transition-colors hover:text-primary">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-primary">Horário</h4>
          <p className="mt-4 text-sm text-foreground/80">Segunda — Domingo</p>
          <p className="text-sm text-foreground/80">09:00 — 00:00</p>
        </div>

        <div>
          <h4 className="font-display text-lg text-primary">Contactos</h4>
          <p className="mt-4 text-sm text-foreground/80">{INFO.address}</p>
          <p className="mt-2 text-sm text-foreground/80">{INFO.phone}</p>
          <p className="text-sm text-foreground/80">{INFO.email}</p>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-muted-foreground lg:px-10">
          © 2026 Kampion African Kitchen &amp; Café. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

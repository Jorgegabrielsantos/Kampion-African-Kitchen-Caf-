import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import guests from "@/assets/guests.jpg";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Indique o nome").max(80),
  phone: z.string().trim().min(6, "Telefone inválido").max(30),
  people: z.coerce.number().int().min(1).max(30),
  date: z.string().min(1, "Escolha a data"),
  time: z.string().min(1, "Escolha a hora"),
});

export function Reservation() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Verifique os campos");
      return;
    }
    setError(null);
    setSent(true);
  };

  return (
    <section id="reservas" className="relative py-24 lg:py-32 bg-african-weave">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl">
            <img
              src={guests}
              alt="Convidados a partilhar uma refeição no Kampion"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-xs uppercase tracking-[0.4em] text-primary">Reservas</p>
              <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">
                Reserve a sua mesa
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Garanta o seu lugar e viva uma experiência gastronómica única no coração de Praia.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)]">
            {sent ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <div className="mb-6 grid h-16 w-16 place-items-center rounded-full bg-primary/15">
                  <svg viewBox="0 0 24 24" className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl">Reserva enviada!</h3>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  Sua reserva foi enviada com sucesso. Entraremos em contacto em breve para confirmar.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 rounded-full border border-primary px-6 py-2.5 text-xs uppercase tracking-wider text-primary"
                >
                  Nova Reserva
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <Field label="Nome" name="name" type="text" placeholder="Seu nome completo" />
                <Field label="Telefone" name="phone" type="tel" placeholder="+238 ..." />
                <div className="grid gap-5 sm:grid-cols-3">
                  <Field label="Pessoas" name="people" type="number" min={1} max={30} defaultValue={2} />
                  <Field label="Data" name="date" type="date" />
                  <Field label="Hora" name="time" type="time" defaultValue="19:30" />
                </div>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02]"
                >
                  Reservar Mesa
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  ...rest
}: { label: string; name: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      <input
        name={name}
        required
        {...rest}
        className="w-full rounded-lg border border-border bg-input/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </label>
  );
}

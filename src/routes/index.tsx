import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Popular } from "@/components/Popular";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { Reservation } from "@/components/Reservation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kampion African Kitchen & Café — Restaurante em Praia, Cabo Verde" },
      {
        name: "description",
        content:
          "Cozinha africana autêntica em Achada Santo António, Praia. Pratos tradicionais, café e ambiente acolhedor. Reserve a sua mesa.",
      },
      { property: "og:title", content: "Kampion African Kitchen & Café" },
      {
        property: "og:description",
        content: "Sabores autênticos de África, servidos com paixão. Praia, Cabo Verde.",
      },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Kampion African Kitchen & Café",
          servesCuisine: ["African", "West African", "Café"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Achada Santo António",
            addressLocality: "Praia",
            addressCountry: "CV",
          },
          telephone: "+238 939 32 27",
          openingHours: "Mo-Su 09:00-24:00",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Popular />
      <About />
      <Menu />
      <Gallery />
      <Reservation />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}

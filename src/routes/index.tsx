import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/hero.jpg";
import { CIDADES_ATUACAO } from "@/lib/areas";
import { TELEFONE_LINK } from "@/lib/contacts";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { WhatsappButton } from "@/components/layout/WhatsappButton/WhatsappButton";
import { Hero } from "@/components/sections/Hero/Hero";
import { Sobre } from "@/components/sections/Sobre/Sobre";
import { Servicos } from "@/components/sections/Servicos/Servicos";
import { Galeria } from "@/components/sections/Galeria/Galeria";
import { PorqueEscolher } from "@/components/sections/PorqueEscolher/PorqueEscolher";
import { ZonaAtuacao } from "@/components/sections/ZonaAtuacao/ZonaAtuacao";
import { Contactos } from "@/components/sections/Contactos/Contactos";

const TITLE = "PLADUR BABO — Pladur, Tectos Falsos e Divisórias em Penafiel";
const DESCRIPTION =
  "Empresa familiar de pladur em Penafiel. Tectos falsos, divisórias, isolamento acústico e reabilitação de interiores no Porto, Paredes e arredores. Peça orçamento.";
const OG_TITLE = "PLADUR BABO — Pladur e Gesso Cartonado em Penafiel";
const OG_DESCRIPTION =
  "Trabalhos de pladur com qualidade e prazos cumpridos. Orçamento gratuito em Penafiel, Porto e arredores.";
const OG_IMAGE = `${SITE_URL}${heroImg}`;

// Structured data for local search / Google Maps. Address is city-level only
// (no street address published); telephone mirrors the placeholder number
// shown elsewhere on the site — replace both when the real details are set.
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE_NAME,
  image: OG_IMAGE,
  url: SITE_URL,
  telephone: TELEFONE_LINK,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Penafiel",
    addressRegion: "Porto",
    addressCountry: "PT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.2077,
    longitude: -8.2839,
  },
  areaServed: CIDADES_ATUACAO,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "19:00",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: OG_TITLE },
      { property: "og:description", content: OG_DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:locale", content: "pt_PT" },
      { name: "twitter:title", content: OG_TITLE },
      { name: "twitter:description", content: OG_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(JSON_LD) }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Servicos />
      <Galeria />
      <PorqueEscolher />
      <ZonaAtuacao />
      <Contactos />
      <Footer />
      <WhatsappButton />
    </>
  );
}

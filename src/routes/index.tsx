import { createFileRoute } from "@tanstack/react-router";

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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PLADUR BABO — Pladur, Tectos Falsos e Divisórias em Penafiel" },
      {
        name: "description",
        content:
          "Empresa familiar de pladur em Penafiel. Tectos falsos, divisórias, isolamento acústico e reabilitação de interiores no Porto, Paredes e arredores. Peça orçamento.",
      },
      { property: "og:title", content: "PLADUR BABO — Pladur e Gesso Cartonado em Penafiel" },
      {
        property: "og:description",
        content:
          "Trabalhos de pladur com qualidade e prazos cumpridos. Orçamento gratuito em Penafiel, Porto e arredores.",
      },
    ],
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

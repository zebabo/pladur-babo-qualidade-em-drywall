import heroImg from "@/assets/hero.jpg";
import { TELEFONE, TELEFONE_LINK } from "@/lib/contacts";
import "./Hero.scss";

export function Hero() {
  return (
    <section id="topo" className="hero">
      <img
        src={heroImg}
        alt="Aplicação de placas de pladur num tecto de uma habitação"
        width={1920}
        height={1080}
        className="hero__image"
      />
      <div className="hero__content">
        <p className="hero__label">Pladur e gesso cartonado · Penafiel</p>
        <h1 className="hero__title">Obras de pladur bem feitas e entregues a horas.</h1>
        <p className="hero__text">
          Empresa familiar com mais de 15 anos a fazer tectos falsos, divisórias e remodelações em
          Penafiel, Porto e arredores. Trabalho limpo, prazo combinado, preço claro.
        </p>
        <div className="hero__actions">
          <a href="#contactos" className="hero__cta hero__cta--primary">
            Pedir Orçamento
          </a>
          <a href={`tel:${TELEFONE_LINK}`} className="hero__cta hero__cta--outline">
            Ligar {TELEFONE}
          </a>
        </div>
      </div>
    </section>
  );
}

import clsx from "clsx";
import tectoImg from "@/assets/trabalho-tecto.jpg";
import divisoriaImg from "@/assets/trabalho-divisoria.jpg";
import isolamentoImg from "@/assets/trabalho-isolamento.jpg";
import pinturaImg from "@/assets/trabalho-pintura.jpg";
import sobreImg from "@/assets/sobre.jpg";
import heroImg from "@/assets/hero.jpg";
import { useReveal } from "@/hooks/useReveal";
import "./Galeria.scss";

const GALERIA = [
  {
    src: tectoImg,
    alt: "Tecto falso em pladur com iluminação LED numa sala de estar",
    legenda: "Tecto falso com sanca — Penafiel",
  },
  {
    src: divisoriaImg,
    alt: "Montagem de divisória em pladur sobre estrutura metálica",
    legenda: "Divisórias em escritório — Paredes",
  },
  {
    src: isolamentoImg,
    alt: "Antes e depois de sótão com isolamento e pladur",
    legenda: "Antes e depois — sótão isolado",
  },
  {
    src: pinturaImg,
    alt: "Parede em pladur acabada e pintada",
    legenda: "Acabamento e pintura — Porto",
  },
  {
    src: sobreImg,
    alt: "Equipa da Pladur Babo numa obra concluída",
    legenda: "Obra entregue — moradia em Lousada",
  },
  {
    src: heroImg,
    alt: "Colocação de placas de pladur num tecto",
    legenda: "Estrutura e placagem de tecto",
  },
];

export function Galeria() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section id="galeria" ref={ref} className={clsx("galeria", "reveal", visible && "is-visible")}>
      <p className="galeria__label">Trabalhos</p>
      <h2 className="galeria__title">Alguns dos nossos trabalhos</h2>
      <p className="galeria__text">
        Uma amostra de obras de tectos, divisórias e remodelações na zona de Penafiel.
      </p>
      <div className="galeria__grid">
        {GALERIA.map((g) => (
          <figure key={g.legenda} className="galeria__item">
            <img
              src={g.src}
              alt={g.alt}
              loading="lazy"
              width={900}
              height={700}
              className="galeria__image"
            />
            <figcaption className="galeria__caption">{g.legenda}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

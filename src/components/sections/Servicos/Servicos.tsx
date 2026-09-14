import clsx from "clsx";
import { useReveal } from "@/hooks/useReveal";
import "./Servicos.scss";

const SERVICOS = [
  {
    titulo: "Tectos falsos",
    texto:
      "Tectos em pladur lisos ou com sancas e iluminação embutida. Escondem tubagens e dão outro ar à divisão.",
  },
  {
    titulo: "Divisórias em pladur",
    texto:
      "Novas divisões em casa ou no escritório, feitas em poucos dias e sem a sujidade de uma obra em tijolo.",
  },
  {
    titulo: "Isolamento acústico e térmico",
    texto:
      "Paredes e tectos com lã mineral para reduzir o ruído e manter a casa quente no inverno e fresca no verão.",
  },
  {
    titulo: "Reabilitação de interiores",
    texto:
      "Remodelação completa de apartamentos, moradias e espaços comerciais, do arranque à limpeza final.",
  },
  {
    titulo: "Acabamentos e pintura",
    texto:
      "Barramento, lixagem e pintura para entregar o espaço pronto a usar, sem ter de chamar outra equipa.",
  },
  {
    titulo: "Pequenas reparações",
    texto:
      "Buracos, fissuras, humidades em tectos ou molduras danificadas — resolvemos também os trabalhos pequenos.",
  },
];

export function Servicos() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="servicos"
      ref={ref}
      className={clsx("servicos", "reveal", visible && "is-visible")}
    >
      <div className="servicos__inner">
        <p className="servicos__label">Serviços</p>
        <h2 className="servicos__title">O que fazemos</h2>
        <div className="servicos__grid">
          {SERVICOS.map((s) => (
            <article key={s.titulo} className="servicos__card">
              <div className="servicos__card-bar" />
              <h3 className="servicos__card-titulo">{s.titulo}</h3>
              <p className="servicos__card-texto">{s.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

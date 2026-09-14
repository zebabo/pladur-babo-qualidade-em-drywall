import clsx from "clsx";
import sobreImg from "@/assets/sobre.jpg";
import { useReveal } from "@/hooks/useReveal";
import "./Sobre.scss";

const VALORES = [
  { titulo: "Qualidade", texto: "Materiais de marca e acabamentos sem atalhos." },
  { titulo: "Confiança", texto: "Falamos claro, antes e durante a obra." },
  { titulo: "Pontualidade", texto: "Começamos e acabamos na data combinada." },
];

export function Sobre() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section id="sobre" ref={ref} className={clsx("sobre", "reveal", visible && "is-visible")}>
      <div className="sobre__grid">
        <div>
          <p className="sobre__label">Sobre nós</p>
          <h2 className="sobre__title">Pai e filho, na mesma obra.</h2>
          <p className="sobre__text">
            A Pladur Babo nasceu em Penafiel das mãos do Sr. Babo, que começou sozinho a montar
            tectos falsos pela região. Hoje trabalha lado a lado com o filho, e é essa a diferença:
            quem lhe dá a mão no orçamento é a mesma pessoa que está na sua casa a fazer o trabalho.
          </p>
          <p className="sobre__text">
            Não somos uma empresa grande e não queremos ser. Preferimos poucas obras ao mesmo tempo,
            bem acompanhadas, com o cliente a saber sempre em que ponto está.
          </p>
          <dl className="sobre__valores">
            {VALORES.map((v) => (
              <div key={v.titulo} className="sobre__valor">
                <dt className="sobre__valor-titulo">{v.titulo}</dt>
                <dd className="sobre__valor-texto">{v.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
        <img
          src={sobreImg}
          alt="Pai e filho da Pladur Babo numa divisão acabada em pladur"
          loading="lazy"
          width={1200}
          height={900}
          className="sobre__image"
        />
      </div>
    </section>
  );
}

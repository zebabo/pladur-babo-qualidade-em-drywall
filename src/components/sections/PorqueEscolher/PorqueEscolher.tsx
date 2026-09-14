import "./PorqueEscolher.scss";

const FORTES = [
  {
    titulo: "+15 anos de obra",
    texto: "Experiência em casas particulares, lojas e escritórios em todo o Vale do Sousa.",
  },
  {
    titulo: "Prazos cumpridos",
    texto: "Combinamos uma data de fim e cumprimo-la. Se algo mudar, avisamos antes.",
  },
  {
    titulo: "Preço justo e claro",
    texto: "Orçamento detalhado por escrito, sem extras a aparecer no meio da obra.",
  },
  {
    titulo: "Garantia do trabalho",
    texto: "Se aparecer alguma falha no acabamento, voltamos lá para a corrigir.",
  },
];

export function PorqueEscolher() {
  return (
    <section className="porque">
      <div className="porque__inner">
        <p className="porque__label">Porquê escolher-nos</p>
        <h2 className="porque__title">Motivos para nos confiar a sua obra</h2>
        <div className="porque__grid">
          {FORTES.map((f, i) => (
            <div key={f.titulo} className="porque__card">
              <span className="porque__numero">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="porque__card-titulo">{f.titulo}</h3>
              <p className="porque__card-texto">{f.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

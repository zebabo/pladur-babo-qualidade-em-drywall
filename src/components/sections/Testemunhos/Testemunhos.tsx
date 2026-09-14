import { Star } from "lucide-react";
import "./Testemunhos.scss";

const TESTEMUNHOS = [
  {
    texto:
      "Recomendo sem hesitar. O tecto falso ficou impecável e cumpriram o prazo à risca, nem um dia de atraso.",
    nome: "Sofia Martins",
    local: "Penafiel · Tecto falso",
  },
  {
    texto:
      "Profissionais sérios, orçamento justo e sem surpresas no fim da obra. A divisória nova mudou completamente o escritório.",
    nome: "Ricardo Almeida",
    local: "Paredes · Divisória em pladur",
  },
  {
    texto:
      "Desde o primeiro contacto senti confiança. Isolaram o sótão todo e a diferença já se nota na fatura do gás.",
    nome: "Teresa Pinto",
    local: "Lousada · Isolamento térmico",
  },
];

export function Testemunhos() {
  return (
    <section className="testemunhos">
      <div className="testemunhos__inner">
        <p className="testemunhos__label">Testemunhos</p>
        <h2 className="testemunhos__title">O que dizem os nossos clientes</h2>
        <div className="testemunhos__grid">
          {TESTEMUNHOS.map((t) => (
            <figure key={t.nome} className="testemunhos__card">
              <div className="testemunhos__estrelas" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="testemunhos__estrela" fill="currentColor" />
                ))}
              </div>
              <blockquote className="testemunhos__texto">&ldquo;{t.texto}&rdquo;</blockquote>
              <figcaption className="testemunhos__autor">
                <span className="testemunhos__nome">{t.nome}</span>
                <span className="testemunhos__local">{t.local}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

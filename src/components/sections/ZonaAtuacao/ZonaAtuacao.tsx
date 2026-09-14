import clsx from "clsx";
import { CIDADES_ATUACAO } from "@/lib/areas";
import { useReveal } from "@/hooks/useReveal";
import "./ZonaAtuacao.scss";

export function ZonaAtuacao() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className={clsx("zona", "reveal", visible && "is-visible")}>
      <div className="zona__grid">
        <div>
          <p className="zona__label">Zona de atuação</p>
          <h2 className="zona__title">Penafiel e arredores</h2>
          <p className="zona__text">
            Trabalhamos em Penafiel e num raio de cerca de 40 km. Se a sua obra ficar um pouco mais
            longe, fale connosco à mesma — normalmente arranjamos maneira.
          </p>
          <ul className="zona__lista">
            {CIDADES_ATUACAO.map((c) => (
              <li key={c} className="zona__cidade">
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="zona__mapa">
          <iframe
            title="Mapa da zona de atuação — Penafiel"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-8.55%2C41.05%2C-8.05%2C41.32&layer=mapnik&marker=41.2077%2C-8.2839"
            className="zona__mapa-iframe"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

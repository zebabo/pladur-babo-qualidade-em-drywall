import { TELEFONE, TELEFONE_LINK } from "@/lib/contacts";
import "./Header.scss";

const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Trabalhos" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#contactos", label: "Contactos" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#topo" className="site-header__brand">
          <span className="site-header__logo">
            PLADUR <span className="site-header__logo-accent">BABO</span>
          </span>
          <span className="site-header__tagline">Penafiel · Porto</span>
        </a>
        <nav className="site-header__nav">
          <div className="site-header__links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="site-header__link">
                {link.label}
              </a>
            ))}
          </div>
          <a href={`tel:${TELEFONE_LINK}`} className="site-header__phone">
            {TELEFONE}
          </a>
        </nav>
      </div>
    </header>
  );
}

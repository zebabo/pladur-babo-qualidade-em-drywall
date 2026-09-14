import { useState } from "react";
import { Menu, X } from "lucide-react";
import { TELEFONE, TELEFONE_LINK } from "@/lib/contacts";
import "./Header.scss";

const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Trabalhos" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#contactos", label: "Contactos" },
];

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

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
          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuAberto((aberto) => !aberto)}
          >
            {menuAberto ? (
              <X className="site-header__toggle-icon" aria-hidden="true" />
            ) : (
              <Menu className="site-header__toggle-icon" aria-hidden="true" />
            )}
          </button>
        </nav>
      </div>

      {menuAberto && (
        <div id="menu-mobile" className="site-header__mobile-menu">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="site-header__mobile-link"
              onClick={() => setMenuAberto(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

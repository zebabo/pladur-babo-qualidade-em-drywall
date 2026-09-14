import { TELEFONE } from "@/lib/contacts";
import "./Footer.scss";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__brand">PLADUR BABO</p>
        <p>
          Penafiel · {TELEFONE} · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

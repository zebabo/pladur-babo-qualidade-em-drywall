import { useState } from "react";
import clsx from "clsx";
import { TELEFONE, TELEFONE_LINK, WHATSAPP } from "@/lib/contacts";
import { useReveal } from "@/hooks/useReveal";
import "./Contactos.scss";

export function Contactos() {
  const { ref, visible } = useReveal<HTMLElement>();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    const texto = `Olá Pladur Babo! Sou ${nome}. Telefone: ${telefone}. Email: ${email}. ${mensagem}`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(texto)}`, "_blank");
  }

  return (
    <section
      id="contactos"
      ref={ref}
      className={clsx("contactos", "reveal", visible && "is-visible")}
    >
      <div className="contactos__inner">
        <p className="contactos__label">Contactos</p>
        <h2 className="contactos__title">Peça o seu orçamento</h2>
        <p className="contactos__text">
          Diga-nos o que precisa e respondemos no próprio dia ou no dia seguinte. Orçamento gratuito
          e sem compromisso.
        </p>

        <div className="contactos__grid">
          <form onSubmit={enviar} className="contactos__form">
            <div className="contactos__form-row">
              <label className="contactos__field">
                Nome
                <input
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="contactos__input"
                  placeholder="O seu nome"
                />
              </label>
              <label className="contactos__field">
                Telefone
                <input
                  required
                  type="tel"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="contactos__input"
                  placeholder="912 000 000"
                />
              </label>
            </div>
            <label className="contactos__field contactos__field--stacked">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="contactos__input"
                placeholder="email@exemplo.pt"
              />
            </label>
            <label className="contactos__field contactos__field--stacked">
              Mensagem
              <textarea
                required
                rows={5}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="contactos__input"
                placeholder="Ex.: preciso de tecto falso na sala, cerca de 20 m²."
              />
            </label>
            <button type="submit" className="contactos__submit">
              Enviar pedido por WhatsApp
            </button>
            <p className="contactos__disclaimer">
              Ao enviar, abrimos o WhatsApp com a sua mensagem já escrita. Prefere email ou
              telefone? Use os contactos ao lado.
            </p>
          </form>

          <div className="contactos__aside">
            <a href={`tel:${TELEFONE_LINK}`} className="contactos__card">
              <span className="contactos__card-label">Telefone</span>
              <p className="contactos__card-valor">{TELEFONE}</p>
              <p className="contactos__card-texto">Segunda a sábado, 8h–19h</p>
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="contactos__card contactos__card--whatsapp"
            >
              <span className="contactos__card-eyebrow">WhatsApp</span>
              <p className="contactos__card-valor">Enviar mensagem</p>
              <p className="contactos__card-texto">
                Envie fotos do espaço para um orçamento mais rápido
              </p>
            </a>
            <div className="contactos__card">
              <span className="contactos__card-label">Onde estamos</span>
              <p className="contactos__card-morada">Penafiel, distrito do Porto</p>
              <p className="contactos__card-texto">
                Deslocamo-nos a Penafiel, Paredes, Porto, Lousada e arredores para ver a obra sem
                custo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import sobreImg from "@/assets/sobre.jpg";
import tectoImg from "@/assets/trabalho-tecto.jpg";
import divisoriaImg from "@/assets/trabalho-divisoria.jpg";
import pinturaImg from "@/assets/trabalho-pintura.jpg";
import isolamentoImg from "@/assets/trabalho-isolamento.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PLADUR BABO — Pladur, Tectos Falsos e Divisórias em Penafiel" },
      {
        name: "description",
        content:
          "Empresa familiar de pladur em Penafiel. Tectos falsos, divisórias, isolamento acústico e reabilitação de interiores no Porto, Paredes e arredores. Peça orçamento.",
      },
      { property: "og:title", content: "PLADUR BABO — Pladur e Gesso Cartonado em Penafiel" },
      {
        property: "og:description",
        content:
          "Trabalhos de pladur com qualidade e prazos cumpridos. Orçamento gratuito em Penafiel, Porto e arredores.",
      },
    ],
  }),
  component: Index,
});

const TELEFONE = "912 345 678";
const TELEFONE_LINK = "+351912345678";
const WHATSAPP = "https://wa.me/351912345678";

const servicos = [
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

const galeria = [
  { src: tectoImg, alt: "Tecto falso em pladur com iluminação LED numa sala de estar", legenda: "Tecto falso com sanca — Penafiel" },
  { src: divisoriaImg, alt: "Montagem de divisória em pladur sobre estrutura metálica", legenda: "Divisórias em escritório — Paredes" },
  { src: isolamentoImg, alt: "Antes e depois de sótão com isolamento e pladur", legenda: "Antes e depois — sótão isolado" },
  { src: pinturaImg, alt: "Parede em pladur acabada e pintada", legenda: "Acabamento e pintura — Porto" },
  { src: sobreImg, alt: "Equipa da Pladur Babo numa obra concluída", legenda: "Obra entregue — moradia em Lousada" },
  { src: heroImg, alt: "Colocação de placas de pladur num tecto", legenda: "Estrutura e placagem de tecto" },
];

const fortes = [
  { titulo: "+15 anos de obra", texto: "Experiência em casas particulares, lojas e escritórios em todo o Vale do Sousa." },
  { titulo: "Prazos cumpridos", texto: "Combinamos uma data de fim e cumprimo-la. Se algo mudar, avisamos antes." },
  { titulo: "Preço justo e claro", texto: "Orçamento detalhado por escrito, sem extras a aparecer no meio da obra." },
  { titulo: "Garantia do trabalho", texto: "Se aparecer alguma falha no acabamento, voltamos lá para a corrigir." },
];

function Index() {
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
    <div className="min-h-screen bg-background">
      {/* Navegação */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
          <a href="#topo" className="min-w-0">
            <span className="block font-display text-lg font-extrabold tracking-tight sm:text-xl">
              PLADUR <span className="text-primary">BABO</span>
            </span>
            <span className="block text-xs text-muted-foreground">Penafiel · Porto</span>
          </a>
          <nav className="flex shrink-0 items-center gap-6">
            <div className="hidden items-center gap-6 text-sm font-medium md:flex">
              <a href="#servicos" className="hover:text-primary">Serviços</a>
              <a href="#galeria" className="hover:text-primary">Trabalhos</a>
              <a href="#sobre" className="hover:text-primary">Sobre nós</a>
              <a href="#contactos" className="hover:text-primary">Contactos</a>
            </div>
            <a
              href={`tel:${TELEFONE_LINK}`}
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
            >
              {TELEFONE}
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="topo" className="relative isolate overflow-hidden bg-steel">
        <img
          src={heroImg}
          alt="Aplicação de placas de pladur num tecto de uma habitação"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="section-label">Pladur e gesso cartonado · Penafiel</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-steel-foreground sm:text-6xl">
            Obras de pladur bem feitas e entregues a horas.
          </h1>
          <p className="mt-5 max-w-xl text-base text-steel-foreground/80 sm:text-lg">
            Empresa familiar com mais de 15 anos a fazer tectos falsos, divisórias e remodelações
            em Penafiel, Porto e arredores. Trabalho limpo, prazo combinado, preço claro.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contactos"
              className="rounded-md bg-primary px-6 py-3 text-center font-display text-base font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Pedir Orçamento
            </a>
            <a
              href={`tel:${TELEFONE_LINK}`}
              className="rounded-md border border-steel-foreground/30 px-6 py-3 text-center font-display text-base font-bold text-steel-foreground transition-colors hover:bg-steel-foreground/10"
            >
              Ligar {TELEFONE}
            </a>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="section-label">Sobre nós</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Pai e filho, na mesma obra.</h2>
            <p className="mt-5 text-muted-foreground">
              A Pladur Babo nasceu em Penafiel das mãos do Sr. Babo, que começou sozinho a montar
              tectos falsos pela região. Hoje trabalha lado a lado com o filho, e é essa a diferença:
              quem lhe dá a mão no orçamento é a mesma pessoa que está na sua casa a fazer o trabalho.
            </p>
            <p className="mt-4 text-muted-foreground">
              Não somos uma empresa grande e não queremos ser. Preferimos poucas obras ao mesmo tempo,
              bem acompanhadas, com o cliente a saber sempre em que ponto está.
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Qualidade", "Materiais de marca e acabamentos sem atalhos."],
                ["Confiança", "Falamos claro, antes e durante a obra."],
                ["Pontualidade", "Começamos e acabamos na data combinada."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-lg border border-border bg-card p-4">
                  <dt className="font-display font-bold">{t}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{d}</dd>
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
            className="w-full rounded-xl object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="section-label">Serviços</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">O que fazemos</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((s) => (
              <article
                key={s.titulo}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="h-1 w-10 rounded-full bg-primary" />
                <h3 className="mt-4 text-xl font-bold">{s.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="section-label">Trabalhos</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Alguns dos nossos trabalhos</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Uma amostra de obras de tectos, divisórias e remodelações na zona de Penafiel.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galeria.map((g) => (
            <figure key={g.legenda} className="overflow-hidden rounded-xl border border-border bg-card">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                width={900}
                height={700}
                className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <figcaption className="px-4 py-3 text-sm text-muted-foreground">{g.legenda}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Porquê escolher-nos */}
      <section className="bg-steel py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="section-label">Porquê escolher-nos</p>
          <h2 className="mt-3 text-3xl font-bold text-steel-foreground sm:text-4xl">
            Motivos para nos confiar a sua obra
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fortes.map((f, i) => (
              <div key={f.titulo} className="rounded-xl border border-steel-foreground/15 p-6">
                <span className="font-display text-3xl font-extrabold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold text-steel-foreground">{f.titulo}</h3>
                <p className="mt-2 text-sm text-steel-foreground/75">{f.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zona de atuação */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="section-label">Zona de atuação</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Penafiel e arredores</h2>
            <p className="mt-4 text-muted-foreground">
              Trabalhamos em Penafiel e num raio de cerca de 40 km. Se a sua obra ficar um pouco mais
              longe, fale connosco à mesma — normalmente arranjamos maneira.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Penafiel", "Paredes", "Porto", "Lousada", "Paços de Ferreira", "Marco de Canaveses", "Amarante", "Gondomar", "Valongo"].map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              title="Mapa da zona de atuação — Penafiel"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-8.55%2C41.05%2C-8.05%2C41.32&layer=mapnik&marker=41.2077%2C-8.2839"
              className="h-80 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Contactos */}
      <section id="contactos" className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="section-label">Contactos</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Peça o seu orçamento</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Diga-nos o que precisa e respondemos no próprio dia ou no dia seguinte. Orçamento gratuito
            e sem compromisso.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <form onSubmit={enviar} className="rounded-xl border border-border bg-card p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium">
                  Nome
                  <input
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                    placeholder="O seu nome"
                  />
                </label>
                <label className="block text-sm font-medium">
                  Telefone
                  <input
                    required
                    type="tel"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                    placeholder="912 000 000"
                  />
                </label>
              </div>
              <label className="mt-4 block text-sm font-medium">
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  placeholder="email@exemplo.pt"
                />
              </label>
              <label className="mt-4 block text-sm font-medium">
                Mensagem
                <textarea
                  required
                  rows={5}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  placeholder="Ex.: preciso de tecto falso na sala, cerca de 20 m²."
                />
              </label>
              <button
                type="submit"
                className="mt-5 w-full rounded-md bg-primary px-6 py-3 font-display font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Enviar pedido por WhatsApp
              </button>
              <p className="mt-3 text-xs text-muted-foreground">
                Ao enviar, abrimos o WhatsApp com a sua mensagem já escrita. Prefere email ou telefone?
                Use os contactos ao lado.
              </p>
            </form>

            <div className="space-y-4">
              <a
                href={`tel:${TELEFONE_LINK}`}
                className="block rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <span className="section-label">Telefone</span>
                <p className="mt-2 font-display text-2xl font-extrabold">{TELEFONE}</p>
                <p className="text-sm text-muted-foreground">Segunda a sábado, 8h–19h</p>
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-whatsapp p-6 text-whatsapp-foreground transition-transform hover:-translate-y-0.5"
              >
                <span className="font-display text-xs font-bold uppercase tracking-widest">WhatsApp</span>
                <p className="mt-2 font-display text-2xl font-extrabold">Enviar mensagem</p>
                <p className="text-sm opacity-90">Envie fotos do espaço para um orçamento mais rápido</p>
              </a>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="section-label">Onde estamos</span>
                <p className="mt-2 font-medium">Penafiel, distrito do Porto</p>
                <p className="text-sm text-muted-foreground">
                  Deslocamo-nos a Penafiel, Paredes, Porto, Lousada e arredores para ver a obra sem custo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="font-display font-bold text-foreground">PLADUR BABO</p>
          <p>Penafiel · {TELEFONE} · © {new Date().getFullYear()}</p>
        </div>
      </footer>

      {/* Botão flutuante WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar connosco no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.73 2.64 4.19 3.7.58.26 1.04.41 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29Z" />
        </svg>
      </a>
    </div>
  );
}

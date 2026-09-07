import { useEffect, useRef, ReactNode } from "react";

// ─── Photo placeholders ────────────────────────────────────────────────────
// Replace these Unsplash URLs with the real photos when ready.

const PHOTOS = {
  hero: "/fotos/navio 4.jpeg",
  story: "/fotos/casamento.jpeg",
  corinthians: "/fotos/corinthians.jpeg",
  closing: "/fotos/pai e mae.jpeg",

  gallery: [
    { url: "/fotos/batizado copy.jpeg", caption: "Um dia inesquecível" },
    { url: "/fotos/carrinho de rolima.jpeg", caption: "Boas lembranças" },
    { url: "/fotos/casamento.jpeg", caption: "Um momento especial" },
    { url: "/fotos/festa infantil.jpeg", caption: "Momentos especiais" },
    { url: "/fotos/festa pai e mae.jpeg", caption: "Nossa família" },
    { url: "/fotos/laura chorando.jpeg", caption: "Memórias que ficam" },
    { url: "/fotos/serra negra pai e mae.jpeg", caption: "Uma lembrança especial" },
    { url: "/fotos/pai copa.jpeg", caption: "Dia de jogo" },
    { url: "/fotos/pai e mae coracao .jpeg", caption: "Com amor" },
    { url: "/fotos/pai e mae navio .jpeg", caption: "Juntos sempre" },
    { url: "/fotos/pai e mae navio pochete.jpeg", caption: "Uma grande história" },
    { url: "/fotos/pai e mae restaurante.jpeg", caption: "Momentos em família" },
    { url: "/fotos/pedro e pai.jpeg", caption: "Pai e filho" },
    { url: "/fotos/pedro pai e mae pascoa.jpeg", caption: "Páscoa em família" },
    { url: "/fotos/serra negra 4.jpeg", caption: "Serra Negra" },
    
  ],
};


// ─── Messages ──────────────────────────────────────────────────────────────
const MESSAGES = [
  {
    name: "Sua família",
    relation: "Todos nós",
    message:
      "Obrigada por ser esse marido e pai maravilhoso, temos muitos sonhos ainda a realizar juntos, e com você ao nosso lado, sabemos que tudo é possível. Te amamos muito!",
    photo: null,
  },
  {
    name: "Claudete",
    relation: "Esposa",
    message:
      "Deus se encarregou de nos unir, assim continuamos mais unidos e fortes, para superar momentos difíceis e celebrar momentos felizes. Te amo!",
    photo: null,
  },
  {
    name: "Pedro",
    relation: "Filho",
    message:
      "Pai, obrigado por ser meu herói, amigo e exemplo, cada momento com você é especial. Eu to amo até o Sol!! ",
    photo: null,
  },
  {
    name: "Laura",
    relation: "Filha",
    message:
      "Você é o melhor pai que eu poderia ter, obrigado por ser essa pessoa tão carinhosa e amorosa. Eu te amo muito!",
    photo: null,
  },
];

// ─── Timeline ──────────────────────────────────────────────────────────────
const TIMELINE = [
  { year: "1975", text: "Um novo capítulo começou — O melhor pai do mundo acabou de nascer." },
  { year: "2007", text: "Uma história de amor estava prestes a começar — Claudio e Claudete se conheceram." },
  { year: "2011", text: "Pedro nasceu e trouxe um novo motivo para a família celebrar, amar e construir novas memórias." },
  { year: "2012", text: "A paixão pelo Corinthians ganhou ainda mais força — E o sonho de conquistar o mundo se tornou real." },
  { year: "2015", text: "Um novo amor chegou à família — Laura nasceu e trouxe ainda mais alegria, carinho e histórias para compartilhar." },
];

// ─── Fade-up hook ──────────────────────────────────────────────────────────
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeUp({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useFadeUp();
  return <div ref={ref} className={`fade-up ${className}`}>{children}</div>;
}

// ─── Hairline divider ──────────────────────────────────────────────────────
function Divider() {
  return <div className="w-16 h-px bg-white/20 my-8" />;
}

// ─── Section label ─────────────────────────────────────────────────────────
function Label({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-4 font-medium">
      {children}
    </p>
  );
}

// ─── Photo placeholder ─────────────────────────────────────────────────────
function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-sm bg-neutral-900 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
}

// ─── Corinthians crest (minimal SVG mark) ─────────────────────────────────
function CorinthiansMark({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <img
      src="/fotos/corinthians-brasao-seeklogo.png"
      alt="Brasão do Corinthians"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}
// ─── Field lines decoration ────────────────────────────────────────────────
function FieldLines({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 120"
      fill="none"
      className={`w-full max-w-md opacity-10 ${className}`}
      aria-hidden
    >
      {/* Center circle */}
      <ellipse cx="200" cy="60" rx="50" ry="50" stroke="white" strokeWidth="1" />
      {/* Center dot */}
      <circle cx="200" cy="60" r="3" fill="white" />
      {/* Half-field line */}
      <line x1="200" y1="5" x2="200" y2="115" stroke="white" strokeWidth="1" />
      {/* Penalty arc */}
      <path d="M 120 60 A 40 40 0 0 0 200 20" stroke="white" strokeWidth="1" fill="none" />
      <path d="M 280 60 A 40 40 0 0 1 200 20" stroke="white" strokeWidth="1" fill="none" />
      {/* Outer boundary */}
      <rect x="10" y="10" width="380" height="100" stroke="white" strokeWidth="1" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// APP
// ═══════════════════════════════════════════════════════════════════════════
export default function App() {
  return (
    <div className="min-h-full bg-black text-white">
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-black/80 backdrop-blur-sm border-b border-white/5">
        <CorinthiansMark size={28} />
        <span
          className="text-xs tracking-[0.2em] uppercase text-white/40 font-medium"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Claudio · 21.09
        </span>
        <a
          href="#homenagem"
          className="text-xs tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors"
        >
          Homenagem
        </a>
      </nav>

      {/* ══════════════════════════════════════════════════════════
          1. HERO
         ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col" id="hero">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src={PHOTOS.hero}
            alt="Claudio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        {/* Content */}
        <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
          <FadeUp>
            <Label>21 de setembro</Label>
            <h1
              className="text-6xl sm:text-8xl md:text-9xl leading-none tracking-tight mb-6"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              Feliz
              <br />
              <em className="not-italic text-white/90">Aniversário,</em>
              <br />
              Claudio.
            </h1>
            <p className="text-white/50 text-base sm:text-lg font-light max-w-sm mx-auto mb-12 leading-relaxed">
              Hoje é dia de celebrar uma pessoa muito especial para nossa família.
            </p>
            <a
              href="#homenagem"
              className="inline-flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 px-8 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300"
            >
              Nossa homenagem <span className="text-base">↓</span>
            </a>
          </FadeUp>
        </div>

        {/* Bottom date stamp */}
        <div className="relative pb-8 flex justify-center">
          <span className="text-white/20 text-xs tracking-[0.3em] uppercase">SCCP · 2026</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. HISTÓRIA / HOMENAGEM
         ══════════════════════════════════════════════════════════ */}
      <section id="homenagem" className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <FadeUp>
          <Label>Uma história que merece ser contada</Label>
          <h2
            className="text-4xl sm:text-6xl leading-tight mb-16 max-w-lg"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Um pouco da sua história
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <FadeUp className="space-y-6">
            <p className="text-white/70 text-lg leading-relaxed font-light">
              {/* ← Substitua este texto pela homenagem escrita pela família */}
             Desde os 11 anos precisou trabalhar para ajudar sua mãe que tinha mais 2 filhos, desde então nunca mais parou de trabalhar, sempre com muito esforço e dedicação.
            </p>
            <p className="text-white/60 text-base leading-relaxed font-light">
             Quando nos conhecemos, ele já havia conquistado seu carro, sua casa na praia e tinha o sonho de construir uma família, lutamos juntos para ter um lar e nos estruturar para depois ter os filhos que tanto sonhávamos, e assim foi feito, com muito esforço e dedicação conseguimos realizar nosso sonho de ter uma família linda e estruturada.
            </p>
            <p className="text-white/60 text-base leading-relaxed font-light">
             Passamos por momentos muito feliz desde a chegada de nosso primeiro filho, Pedro, e depois com a chegada de nossa filha Laura, que nos trouxe ainda mais alegria e amor. 
            </p>
            <Divider />
            <p className="text-white/40 text-sm italic leading-relaxed">
              "A família mais bonita começa com pessoas que se amam de verdade."
            </p>
          </FadeUp>

          <FadeUp>
            <Photo
              src={PHOTOS.story}
              alt="Foto do Claudio"
              className="w-full aspect-[4/5]"
            />
            <p className="mt-3 text-white/30 text-xs tracking-widest uppercase text-center">
              {/* ← Adicione uma legenda para a foto */}
              Uma foto especial
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. GALERIA
         ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-neutral-950 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="mb-16">
            <Label>Memórias que ficam</Label>
            <h2
              className="text-4xl sm:text-6xl leading-tight"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              Momentos que ficam
              <br />
              <em className="not-italic text-white/60">para sempre</em>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {PHOTOS.gallery.map((item, i) => (
              <FadeUp key={i} className={i === 0 ? "col-span-2 md:col-span-1 row-span-2" : ""}>
                <div className="group">
                  <Photo
                    src={item.url}
                    alt={item.caption}
                    className={`w-full ${i === 0 ? "aspect-square md:aspect-[4/5]" : "aspect-square"}`}
                  />
                  <p className="mt-2 text-white/30 text-xs tracking-[0.15em] uppercase">
                    {item.caption}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. MENSAGENS
         ══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto" id="mensagens">
        <FadeUp className="mb-16">
          <Label>Palavras do coração</Label>
          <h2
            className="text-4xl sm:text-6xl leading-tight"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            De quem te ama
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
          {MESSAGES.map((msg, i) => (
            <FadeUp key={i} className="bg-black p-8 md:p-10 hover:bg-neutral-950 transition-colors duration-300">
              <div className="flex items-start gap-4 mb-6">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-white/40 text-sm font-medium">
                    {msg.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{msg.name}</p>
                  <p className="text-white/30 text-xs tracking-wide uppercase mt-0.5">{msg.relation}</p>
                </div>
              </div>
              <blockquote className="text-white/60 text-base leading-relaxed font-light italic">
                "{msg.message}"
              </blockquote>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. CORINTHIANS
         ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-neutral-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <FadeUp className="mb-16 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <CorinthiansMark size={32} />
              <Label>S.C. Corinthians Paulista</Label>
            </div>
            <h2
              className="text-4xl sm:text-5xl leading-tight max-w-2xl"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              Uma paixão que também
              <br />
              faz parte da história
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeUp className="relative">
              <Photo
                src={PHOTOS.corinthians}
                alt="Claudio e sua paixão pelo Corinthians"
                className="w-full aspect-video lg:aspect-[4/3]"
              />
              {/* Subtle field overlay */}
              <div className="absolute inset-0 flex items-end justify-center p-6 pointer-events-none">
                <FieldLines />
              </div>
            </FadeUp>

            <FadeUp className="space-y-6">
              <p className="text-white/70 text-lg leading-relaxed font-light">
                {/* ← Substitua este texto pela história do Claudio com o Corinthians */}
                O futebol não é só um esporte para o Papai — é parte da sua identidade. O Corinthians entrou na vida dele e nunca mais saiu.
              </p>
              <p className="text-white/50 text-base leading-relaxed font-light">
                No dia 16 de dezembro de 2012, papai decidiu reunir todo mundo em casa para uma manhã especial. Preparou um churrasco e, juntos, assistimos ao Corinthians conquistar o bicampeonato mundial, dessa vez diante do Chelsea. Foi um daqueles dias que ficam guardados na memória, não apenas pelo título, mas por estarmos todos juntos, celebrando e vivendo aquele momento como uma família.

              </p>
              <Divider />
              <div className="flex items-center gap-4">
                <CorinthiansMark size={40} />
                <div>
                  <p className="text-white/80 text-sm font-medium">Sport Club Corinthians Paulista</p>
                  <p className="text-white/30 text-xs">Fundado em 1910 · Fiel torcedor</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. TIMELINE
         ══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-4xl mx-auto">
        <FadeUp className="mb-16">
          <Label>Uma vida em capítulos</Label>
          <h2
            className="text-4xl sm:text-6xl leading-tight"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Momentos da vida
          </h2>
        </FadeUp>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-white/10 hidden sm:block" />

          <div className="space-y-0">
            {TIMELINE.map((item, i) => (
              <FadeUp key={i}>
                <div className="flex gap-6 sm:gap-10 items-start py-8 border-b border-white/5 last:border-0 group">
                  {/* Year */}
                  <div className="flex-shrink-0 w-20 text-right sm:mr-4">
                    <span
                      className="text-2xl sm:text-3xl text-white/20 group-hover:text-white/60 transition-colors duration-300"
                      style={{ fontFamily: "DM Serif Display, serif" }}
                    >
                      {item.year}
                    </span>
                  </div>
                  {/* Dot */}
                  <div className="hidden sm:flex items-center justify-center w-3 mt-2 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/60 transition-colors duration-300 ring-4 ring-black" />
                  </div>
                  {/* Text */}
                  <p className="text-white/50 text-base leading-relaxed font-light group-hover:text-white/80 transition-colors duration-300 flex-1">
                    {item.text}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7. CLOSING
         ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex items-end">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={PHOTOS.closing}
            alt="Nossa família"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
        </div>

        <div className="relative w-full px-6 md:px-16 pb-24 max-w-7xl mx-auto">
          <FadeUp className="max-w-2xl">
            <CorinthiansMark size={36} className="mb-8 opacity-40" />
            <h2
              className="text-5xl sm:text-7xl leading-tight mb-6"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              Que venham muitos
              <br />
              outros momentos juntos.
            </h2>
            <p
              className="text-3xl sm:text-4xl text-white/60 mb-12"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              Feliz aniversário, Papai! ❤️
            </p>
            <Divider />
            <p className="text-white/30 text-sm tracking-[0.2em] uppercase">
              Com todo o amor da sua família · 21 de setembro de 2026
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <CorinthiansMark size={24} />
        <p className="text-white/20 text-xs tracking-widest uppercase">
          Feito com amor para o Papai
        </p>
        <p className="text-white/20 text-xs">21.09.2026</p>
      </footer>
    </div>
  );
}

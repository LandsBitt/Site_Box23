import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { featuredServices, serviceCategories } from "../data/servicesData.js";
import { Reveal, RevealGroup } from "./ui/Reveal.jsx";
import Magnetic from "./ui/Magnetic.jsx";
import { fadeUp } from "../lib/motion.js";

const allServices = serviceCategories.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    categoryId: category.id,
    categoryTitle: category.title,
  })),
);

const servicesById = allServices.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

const marqueeWords = [
  "Diagnóstico",
  "Elétrica",
  "Injeção",
  "Freios",
  "Suspensão",
  "Revisão",
  "Óleo",
  "ABS",
  "Arrefecimento",
  "Cabeçote",
  "Direção hidráulica",
  "Alinhamento",
];

function Marquee() {
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-white/[0.06] bg-ink-900/60 py-7 mask-fade-edges"
    >
      <div className="flex w-max animate-marquee gap-12">
        {[...marqueeWords, ...marqueeWords].map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-3xl font-medium uppercase tracking-tight text-bone/30"
          >
            {w}
            <span className="text-ember">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Services({ variant = "featured" }) {
  const isFeatured = variant === "featured";
  const services = isFeatured
    ? featuredServices.map((id) => servicesById[id]).filter(Boolean)
    : allServices;

  return (
    <section
      id={isFeatured ? "servicos" : undefined}
      className="relative overflow-hidden bg-ink-900"
    >
      {isFeatured && <Marquee />}

      <div className="relative py-32 md:py-40">
        <div className="container-page">
          <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:items-end">
            <Reveal>
              <p className="eyebrow mb-6">Nossos serviços</p>
              <h2 className="font-display text-display-md font-semibold text-bone text-balance">
                Tudo que seu carro <span className="text-ember italic">precisa</span> em um só lugar.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base text-steel-300 md:text-lg">
                Da menor revisão até reparos eletrônicos complexos. Trabalhamos
                com equipamentos de diagnóstico atualizados e peças de qualidade
                para entregar uma manutenção em que dá pra confiar.
              </p>
            </Reveal>
          </div>

          <RevealGroup
            className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-4"
            delay={0.05}
          >
            {services.map((service, i) => (
              <motion.article
                key={service.id}
                variants={fadeUp}
                className="group relative isolate overflow-hidden bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-800"
              >
                {/* Hover gradient */}
                <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-ember/0 via-ember/0 to-ember/0 opacity-0 transition-opacity duration-700 group-hover:from-ember/[0.08] group-hover:to-ember/0 group-hover:opacity-100" />

                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] tracking-widest text-steel-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ember transition-all duration-500 group-hover:border-ember group-hover:bg-ember group-hover:text-ink-950">
                    <i className={`${service.icon} text-base`} aria-hidden="true" />
                  </div>
                </div>

                <h3 className="mt-12 font-display text-lg font-semibold leading-tight text-bone">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-300">
                  {service.description}
                </p>

                {!isFeatured && service.categoryTitle && (
                  <p className="mt-6 text-[10px] uppercase tracking-widest text-ember/70">
                    {service.categoryTitle}
                  </p>
                )}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-ember transition-all duration-700 group-hover:w-full" />
              </motion.article>
            ))}
          </RevealGroup>

          {isFeatured && (
            <Reveal delay={0.2} className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <p className="text-sm text-steel-400">
                Mais de <span className="text-bone font-medium">20 especialidades</span> disponíveis na oficina.
              </p>
              <Magnetic strength={0.18}>
                <Link to="/servicos" className="btn-primary">
                  Ver catálogo completo
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </Link>
              </Magnetic>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

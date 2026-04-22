import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { serviceCategories } from "../data/servicesData.js";
import { Reveal, RevealGroup } from "../components/ui/Reveal.jsx";
import Magnetic from "../components/ui/Magnetic.jsx";
import { fadeUp, easeOutExpo } from "../lib/motion.js";

export default function ServicesPage() {
  const [activeId, setActiveId] = useState(serviceCategories[0]?.id || "");
  const active =
    serviceCategories.find((c) => c.id === activeId) || serviceCategories[0];

  return (
    <div className="bg-ink-950">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06] pt-40 pb-24 md:pt-44 md:pb-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(249,80,4,0.18),transparent_55%)]" />
        <div className="container-page relative">
          <Reveal>
            <p className="eyebrow mb-6">Catálogo completo</p>
            <h1 className="font-display text-display-lg font-semibold text-bone text-balance">
              Cada serviço com{" "}
              <span className="text-ember italic">propósito.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 max-w-xl">
            <p className="text-base text-steel-300 md:text-lg">
              Explore as especialidades organizadas por categoria. Tem dúvida
              específica? Fale direto com a oficina.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Categories + items */}
      <section className="relative py-24 md:py-28">
        <div className="container-page">
          {/* Tabs */}
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map((category, i) => {
                const isActive = category.id === activeId;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveId(category.id)}
                    className={`group relative flex items-center gap-3 rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                      isActive
                        ? "border-ember bg-ember text-ink-950"
                        : "border-white/10 bg-white/[0.02] text-steel-200 hover:border-ember/50 hover:text-bone"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span className="font-mono text-[10px] opacity-60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {category.title}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Active category */}
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: easeOutExpo }}
                className="mt-14"
              >
                <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start">
                  <div>
                    <h2 className="font-display text-3xl font-semibold text-bone md:text-4xl">
                      {active.title}
                    </h2>
                    <p className="mt-4 text-base text-steel-300">
                      {active.description}
                    </p>
                  </div>

                  <RevealGroup className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2">
                    {active.items.map((item, i) => (
                      <motion.article
                        key={item.id}
                        variants={fadeUp}
                        className="group relative overflow-hidden bg-ink-900 p-6 transition-colors duration-500 hover:bg-ink-800"
                      >
                        <div className="flex items-start gap-5">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-ember transition-all duration-500 group-hover:border-ember group-hover:bg-ember group-hover:text-ink-950">
                            <i className={item.icon} aria-hidden="true" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-baseline justify-between gap-3">
                              <h3 className="font-display text-base font-semibold text-bone">
                                {item.title}
                              </h3>
                              <span className="font-mono text-[10px] tracking-widest text-steel-400">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-steel-300">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-ember transition-all duration-700 group-hover:w-full" />
                      </motion.article>
                    ))}
                  </RevealGroup>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTAs */}
          <Reveal delay={0.2} className="mt-20 flex flex-col gap-4 border-t border-white/[0.06] pt-12 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm text-steel-300">
              Não encontrou o que procura?{" "}
              <span className="text-bone">Fale com a gente</span> — atendemos
              também serviços sob demanda.
            </p>
            <div className="flex flex-wrap gap-3">
              <Magnetic strength={0.18}>
                <a
                  href="https://wa.me/5512991730255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Chamar no WhatsApp
                </a>
              </Magnetic>
              <Link to="/#contato" className="btn-ghost">
                Ir para contato
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, RevealGroup } from "./ui/Reveal.jsx";
import { fadeUp } from "../lib/motion.js";

const pillars = [
  {
    n: "01",
    t: "Diagnóstico real",
    d: "Scanner e osciloscópio para encontrar o que outros oficinais não acham.",
  },
  {
    n: "02",
    t: "Mão de obra especializada",
    d: "Equipe focada em elétrica, freios, suspensão e revisão completa.",
  },
  {
    n: "03",
    t: "Transparência total",
    d: "Você acompanha cada etapa e recebe orçamento antes de qualquer reparo.",
  },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const labelX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      id="empresa"
      className="relative overflow-hidden bg-ink-950 py-32 md:py-40"
    >
      {/* Giant background label */}
      <motion.div
        style={{ x: labelX }}
        className="pointer-events-none absolute inset-x-0 top-10 select-none text-center"
      >
        <span className="font-display text-[18vw] font-semibold uppercase leading-none tracking-tighter text-white/[0.025]">
          BOX23
        </span>
      </motion.div>

      <div className="container-page relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-6">Quem somos</p>
          <h2 className="font-display text-display-md font-semibold text-bone text-balance">
            Uma oficina pequena com{" "}
            <span className="text-ember italic">obsessão</span> por fazer certo.
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div className="space-y-6 text-base leading-relaxed text-steel-200">
            <p>
              A <span className="text-bone font-medium">Box23</span> nasceu em
              Pindamonhangaba para devolver à mecânica algo simples: um serviço
              em que dá pra confiar. Diagnóstico preciso, conversa direta e
              foco no que realmente importa para o seu carro.
            </p>
            <p>
              Trabalhamos com elétrica embarcada, revisão, troca de óleo, freios
              e suspensão — sempre com equipamento de diagnóstico de verdade e a
              calma de quem prefere acertar a apressar.
            </p>
            <div className="hairline" />
            <div className="grid grid-cols-3 gap-6">
              {[
                { k: "8h30", v: "Seg–Sex" },
                { k: "Sáb", v: "9h–14h" },
                { k: "Pinda", v: "SP" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-2xl font-semibold text-bone">{s.k}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-steel-400">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <RevealGroup className="space-y-3">
            {pillars.map((p) => (
              <motion.article
                key={p.n}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-500 hover:border-ember/40 hover:bg-ember/[0.04]"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="font-mono text-[11px] tracking-widest text-ember/70">
                      {p.n}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-semibold text-bone">
                      {p.t}
                    </h3>
                    <p className="mt-2 text-sm text-steel-300">{p.d}</p>
                  </div>
                  <div className="opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M3 11H19M19 11L11 3M19 11L11 19" stroke="#F95004" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-ember to-transparent transition-transform duration-700 group-hover:scale-x-100" />
              </motion.article>
            ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
}

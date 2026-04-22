import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SplitText from "./ui/SplitText.jsx";
import Magnetic from "./ui/Magnetic.jsx";
import { easeOutQuart } from "../lib/motion.js";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="resumo"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink-950 pb-20 pt-32 md:pb-28"
    >
      {/* Parallax background image with color grading */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/imagens/2024-07-16-enhanced.webp')",
            filter: "contrast(1.1) saturate(0.85) brightness(0.85)",
          }}
        />
        {/* Warm color grade */}
        <div className="absolute inset-0 bg-[#F95004] mix-blend-color opacity-[0.18]" />
      </motion.div>

      {/* Bottom-up dark gradient (lighter than before so the photo breathes) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/65 to-ink-950/15" />
      {/* Left-side gradient for text legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/80 via-ink-950/30 to-transparent" />
      {/* Subtle ember radial */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_85%,rgba(249,80,4,0.22),transparent_55%)]" />

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-page relative z-10"
      >
        {/* Top meta row */}
        <div className="mb-12 flex flex-wrap items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: easeOutQuart }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ember" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-ultra text-bone/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
              Aberta · Pindamonhangaba SP
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: easeOutQuart }}
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-bone/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
          >
            <span>EST. 2023</span>
            <span className="h-3 w-px bg-white/20" />
            <span>N° 11 · Vila São Paulo</span>
          </motion.div>
        </div>

        {/* Headline — fires on mount, not on viewport */}
        <h1
          className="font-display font-semibold text-bone text-balance"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            lineHeight: "0.92",
            letterSpacing: "-0.04em",
            textShadow: "0 4px 30px rgba(0,0,0,0.4)",
          }}
        >
          <SplitText text="Mecânica" stagger={0.05} delay={0.2} trigger="mount" />
          <br />
          <SplitText
            text="de precisão."
            stagger={0.05}
            delay={0.5}
            trigger="mount"
            className="text-ember italic"
          />
        </h1>

        {/* Sub + CTA row */}
        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-[1.4fr_1fr] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: easeOutQuart }}
            className="max-w-xl text-base text-bone/85 md:text-lg text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          >
            Diagnóstico, elétrica e revisão completa por uma equipe que trata
            cada veículo como se fosse o seu. Sem promessa vazia — só o serviço
            entregue do jeito certo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.25, ease: easeOutQuart }}
            className="flex flex-wrap items-center gap-4 md:justify-end"
          >
            <Magnetic strength={0.2}>
              <a
                href="https://wa.me/5512991730255"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="Chamar no WhatsApp"
              >
                <span>Agendar pelo WhatsApp</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
            </Magnetic>
            <a href="#servicos" className="btn-ghost">
              Ver serviços
            </a>
          </motion.div>
        </div>

        {/* Bottom indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-20 flex items-center justify-between border-t border-white/15 pt-6 md:mt-28"
        >
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-ultra text-bone/70">
            <span className="font-mono">↓</span>
            <span>Role para descobrir</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            {[
              { k: "+1k", v: "atendimentos" },
              { k: "23", v: "categorias" },
              { k: "5★", v: "avaliação" },
            ].map((m) => (
              <div key={m.v} className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-semibold text-bone">{m.k}</span>
                <span className="text-[10px] uppercase tracking-widest text-bone/60">{m.v}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

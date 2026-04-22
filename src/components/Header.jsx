import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { easeOutExpo } from "../lib/motion.js";

const navLinks = [
  { href: "#resumo", label: "Empresa", key: "empresa", index: "01" },
  { href: "#servicos", label: "Serviços", key: "servicos", index: "02" },
  { href: "#contato", label: "Contato", key: "contato", index: "03" },
];

export default function Header({ isOpen, onToggle, onClose }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const resolveLink = (link) => {
    if (link.key === "servicos") {
      return isHome ? { type: "anchor", href: link.href } : { type: "route", to: "/servicos" };
    }
    if (isHome) return { type: "anchor", href: link.href };
    return { type: "route", to: `/${link.href}` };
  };

  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.1 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink-950/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        {/* Subtle top gradient for legibility when transparent */}
        {!scrolled && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink-950/85 via-ink-950/40 to-transparent"
          />
        )}

        <nav
          className={`container-page relative flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-[68px]" : "h-24"
          }`}
        >
          <Link
            to="/#resumo"
            className="group flex items-center gap-3.5"
            aria-label="Box23 — início"
          >
            <img
              src="/imagens/Logo.png"
              alt=""
              className={`w-auto transition-all duration-500 group-hover:rotate-[-4deg] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] ${
                scrolled ? "h-10" : "h-12"
              }`}
            />
            <div className="hidden flex-col leading-none sm:flex">
              <span
                className={`font-display font-bold tracking-tight text-bone drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] transition-all duration-500 ${
                  scrolled ? "text-base" : "text-lg"
                }`}
              >
                BOX<span className="text-ember">23</span>
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-ultra text-bone/70 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
                Oficina · Pinda
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const resolved = resolveLink(link);
              const baseClass = `group relative flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-bone transition-colors hover:text-ember ${
                !scrolled ? "drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]" : ""
              }`;
              const inner = (
                <>
                  <span className="font-mono text-[10px] text-ember">{link.index}</span>
                  <span>{link.label}</span>
                  <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-ember transition-transform duration-500 group-hover:scale-x-100" />
                </>
              );
              return resolved.type === "anchor" ? (
                <a key={link.key} href={resolved.href} className={baseClass}>
                  {inner}
                </a>
              ) : (
                <Link key={link.key} to={resolved.to} className={baseClass}>
                  {inner}
                </Link>
              );
            })}
          </div>

          <a
            href="https://wa.me/5512991730255"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2.5 rounded-full border border-ember bg-ember/15 backdrop-blur-sm px-5 py-2.5 text-[12px] font-semibold uppercase tracking-widest text-ember transition-all duration-300 hover:bg-ember hover:text-white hover:shadow-ember"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
            </span>
            Atender agora
          </a>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] md:hidden"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={onToggle}
          >
            <span
              className={`h-px w-5 bg-bone transition-all duration-500 ${
                isOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-bone transition-all duration-500 ${
                isOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, ease: easeOutExpo }}
              className="relative h-full w-full bg-ink-950"
            >
              <div className="container-page flex h-full flex-col justify-between pt-28 pb-12">
                <div>
                  <p className="eyebrow mb-8">Navegar</p>
                  <ul className="space-y-2">
                    {navLinks.map((link, i) => {
                      const resolved = resolveLink(link);
                      const inner = (
                        <span className="flex items-baseline gap-4">
                          <span className="font-mono text-xs text-ember/70">{link.index}</span>
                          <span className="font-display text-4xl font-semibold tracking-tight text-bone">
                            {link.label}
                          </span>
                        </span>
                      );
                      return (
                        <motion.li
                          key={link.key}
                          initial={{ opacity: 0, y: 24 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            ease: easeOutExpo,
                            delay: 0.2 + i * 0.08,
                          }}
                        >
                          {resolved.type === "anchor" ? (
                            <a href={resolved.href} onClick={handleLinkClick} className="block py-3">
                              {inner}
                            </a>
                          ) : (
                            <Link to={resolved.to} onClick={handleLinkClick} className="block py-3">
                              {inner}
                            </Link>
                          )}
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  <div className="hairline" />
                  <p className="text-xs uppercase tracking-ultra text-steel-400">Contato direto</p>
                  <a href="tel:+5512991730255" className="block font-display text-2xl text-bone">
                    (12) 99173-0255
                  </a>
                  <a
                    href="https://wa.me/5512991730255"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="btn-primary w-full"
                  >
                    Chamar no WhatsApp
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

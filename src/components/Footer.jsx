import { Link } from "react-router-dom";
import { Reveal } from "./ui/Reveal.jsx";

const footerLinks = [
  { href: "/#empresa", label: "Empresa" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/servicos", label: "Catálogo" },
  { href: "/#contato", label: "Contato" },
];

const socialLinks = [
  { href: "https://wa.me/5512991730255", label: "WhatsApp", icon: "fab fa-whatsapp" },
  { href: "https://www.instagram.com/box23_oficina/", label: "Instagram", icon: "fab fa-instagram" },
  {
    href: "https://www.tiktok.com/@of.box23?is_from_webapp=1&sender_device=pc",
    label: "TikTok",
    icon: "fab fa-tiktok",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-950 pt-24 pb-10">
      <div className="container-page">
        {/* Top CTA */}
        <Reveal>
          <div className="border-y border-white/[0.08] py-16">
            <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
              <h2 className="font-display text-display-md font-semibold text-bone text-balance">
                O próximo passo é <span className="text-ember italic">simples</span>.
              </h2>
              <a
                href="https://wa.me/5512991730255"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-self-start md:justify-self-end"
              >
                Falar com a oficina
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Main grid */}
        <div className="mt-16 grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/#resumo" className="inline-flex items-center gap-3">
              <img src="/imagens/Logo.png" alt="" className="h-12 w-auto" />
              <div className="leading-none">
                <span className="font-display text-lg font-semibold text-bone">
                  BOX<span className="text-ember">23</span>
                </span>
                <p className="mt-1 text-[10px] uppercase tracking-ultra text-steel-400">
                  Oficina mecânica · Pinda
                </p>
              </div>
            </Link>
            <p className="mt-6 max-w-xs text-sm text-steel-300">
              Diagnóstico, elétrica, revisão e suspensão com a precisão que seu
              carro merece.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-ember">Navegação</h3>
            <ul className="mt-5 space-y-3 text-sm text-steel-200">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                    <Link to={link.href} className="transition-colors hover:text-ember">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="transition-colors hover:text-ember">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-ember">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm text-steel-200">
              <li>
                <a href="tel:+5512991730255" className="transition-colors hover:text-ember">
                  (12) 99173-0255
                </a>
              </li>
              <li className="text-steel-300">
                R. Jacyrema de Castro Giulianetti Almeida, Nº 11
                <br />
                Vila São Paulo · Pinda SP
              </li>
              <li className="text-steel-300">Seg–Sex 8h30–18h · Sáb 9h–14h</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-ember">Acompanhe</h3>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-steel-200 transition-all duration-300 hover:-translate-y-1 hover:border-ember hover:bg-ember hover:text-ink-950"
                >
                  <i className={`${link.icon} text-base`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Giant brand */}
        <div className="mt-20 select-none overflow-hidden">
          <p className="font-display text-[clamp(4rem,18vw,16rem)] font-semibold leading-[0.85] tracking-tighter text-white/[0.04]">
            BOX23
          </p>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 text-[11px] text-steel-400 sm:flex-row sm:items-center">
          <p>© {year} Box23. Todos os direitos reservados.</p>
          <p>
            Construído com cuidado por{" "}
            <span className="text-ember">Roland Bittencourt</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

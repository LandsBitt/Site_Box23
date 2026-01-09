const footerLinks = [
  { href: "#resumo", label: "Empresa" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

const socialLinks = [
  {
    href: "https://wa.me/5512991730255",
    label: "WhatsApp",
    icon: "fab fa-whatsapp",
  },
  {
    href: "https://www.tiktok.com/@of.box23?is_from_webapp=1&sender_device=pc",
    label: "TikTok",
    icon: "fab fa-tiktok",
  },
  {
    href: "https://www.instagram.com/box23_oficina/",
    label: "Instagram",
    icon: "fab fa-instagram",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ember/40 bg-graphite px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_1fr_1fr_1fr]">
        <div>
          <img
            src="/imagens/Logo.png"
            alt="Box23 Logo"
            className="h-16 w-auto"
            loading="lazy"
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-ember">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-ash">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a className="transition hover:text-ember" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-ember">
            Contato rápido
          </h3>
          <div className="mt-4 space-y-2 text-sm text-ash">
            <p className="flex items-center gap-2">
              <i className="fas fa-phone-alt text-ember" aria-hidden="true" />
              (12) 99173-0255
            </p>
            <p className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-ember" aria-hidden="true" />
              R. Jacyrema de Castro Giulianetti Almeida, N° 11
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-ember">
            Siga-nos
          </h3>
          <div className="mt-4 flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mist transition hover:border-ember hover:bg-ember hover:text-black"
              >
                <i className={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-ash/70">
        <p>© 2025 Box23. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por <span className="text-ember">Roland Bittencourt</span>
        </p>
      </div>
    </footer>
  );
}

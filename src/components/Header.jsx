import { useEffect, useState } from "react";

const navLinks = [
  { href: "#resumo", label: "Empresa" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ember/30 bg-black/90 backdrop-blur">
      <nav className="mx-auto flex h-[88px] max-w-6xl items-center justify-between px-6">
        <a href="#resumo" className="flex items-center gap-2">
          <img
            src="/imagens/Logo.png"
            alt="Box23 Logo"
            className="h-12 w-auto transition-transform duration-300 hover:scale-[1.02]"
            loading="lazy"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-mist/90 transition hover:text-ember"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            className={`h-0.5 w-7 rounded bg-mist transition ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-7 rounded bg-mist transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-7 rounded bg-mist transition ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 z-40 w-3/4 max-w-xs bg-black/95 p-10 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mt-20 flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-semibold uppercase tracking-[0.3em] text-mist/90 hover:text-ember"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          aria-label="Fechar menu"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}

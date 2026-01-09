export default function FloatingWhatsApp({ isMenuOpen }) {
  if (isMenuOpen) {
    return null;
  }

  return (
    <a
      href="https://wa.me/5512991730255"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ember text-white shadow-ember transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
    >
      <i className="fab fa-whatsapp text-2xl" aria-hidden="true" />
    </a>
  );
}

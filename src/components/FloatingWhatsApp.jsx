import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { easeOutExpo } from "../lib/motion.js";

export default function FloatingWhatsApp({ isMenuOpen }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && !isMenuOpen && (
        <motion.a
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
          href="https://wa.me/5512991730255"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir conversa no WhatsApp"
          className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ember text-white shadow-ember-lg transition-transform hover:scale-110"
        >
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-ember/40" />
          <i className="fab fa-whatsapp text-2xl" aria-hidden="true" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

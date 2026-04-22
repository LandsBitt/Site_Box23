import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import SmoothScroll, { getLenis } from "./lib/SmoothScroll.jsx";
import { pageTransition } from "./lib/motion.js";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const lenis = getLenis();

    if (!hash) {
      if (lenis) {
        lenis.scrollTo(0, { immediate: false });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const id = hash.replace("#", "");
    // small delay so the new page is mounted
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      if (lenis) {
        lenis.scrollTo(el, { offset: -80 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);

    return () => clearTimeout(t);
  }, [hash, pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/servicos"
          element={
            <motion.div {...pageTransition}>
              <ServicesPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <SmoothScroll>
      <div className="min-h-screen overflow-x-hidden text-mist">
        <ScrollToHash />
        <Header
          isOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen((p) => !p)}
          onClose={() => setIsMenuOpen(false)}
        />
        <main>
          <AnimatedRoutes />
        </main>
        <FloatingWhatsApp isMenuOpen={isMenuOpen} />
        <Footer />
      </div>
    </SmoothScroll>
  );
}

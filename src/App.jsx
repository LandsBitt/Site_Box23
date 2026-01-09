import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }

    const targetId = hash.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash, pathname]);

  return null;
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen max-w-full overflow-x-hidden text-mist">
      <ScrollToHash />
      <Header
        isOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen((prev) => !prev)}
        onClose={() => setIsMenuOpen(false)}
      />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicos" element={<ServicesPage />} />
        </Routes>
      </main>
      <FloatingWhatsApp isMenuOpen={isMenuOpen} />
      <Footer />
    </div>
  );
}

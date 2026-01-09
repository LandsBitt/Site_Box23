import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen max-w-full overflow-x-hidden text-mist">
      <Header
        isOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen((prev) => !prev)}
        onClose={() => setIsMenuOpen(false)}
      />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <FloatingWhatsApp isMenuOpen={isMenuOpen} />
      <Footer />
    </div>
  );
}

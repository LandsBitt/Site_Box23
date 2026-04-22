import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Contact from "../components/Contact.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services variant="featured" />
      <Contact />
    </>
  );
}

import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import Contact from "../components/Contact.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services variant="featured" />
      <Contact />
    </>
  );
}

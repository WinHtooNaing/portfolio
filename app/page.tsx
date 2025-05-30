import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import SectionTwo from "./components/SectionTwo";

export default function Home() {
  return (
    <div className="max-w-7xl w-full px-4 md:px-8 mx-auto mt-10 ">
      <Hero />
      <SectionTwo />
      <AboutSection />
      <Footer />
    </div>
  );
}

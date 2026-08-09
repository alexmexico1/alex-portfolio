import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Stats from "@/components/stats/Stats";
import Experience from "@/components/experience/Experience";
import Services from "@/components/services/Services";
import TechStack from "@/components/tech-stack/TechStack";
import WhyHireMe from "@/components/why-hire-me/WhyHireMe";
import HowIWork from "@/components/how-i-work/HowIWork";
import CurrentlyBuilding from "@/components/currently-building/CurrentlyBuilding";
import BehindTheCode from "@/components/behind-the-code/BehindTheCode";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Stats />
      <Experience />
      <Services />
      <TechStack />
      <WhyHireMe />
      <HowIWork />
      <CurrentlyBuilding />
      <BehindTheCode />
      <Projects />
      <Contact />
    </main>
  );
}
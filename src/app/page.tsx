import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Extracurriculars from "@/components/Extracurriculars";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full relative">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Services />
      <Projects />
      <Certifications />
      <Achievements />
      <Extracurriculars />
      <Contact />
    </main>
  );
}

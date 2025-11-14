import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import CoCurriculars from "../components/CoCurriculars";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <CoCurriculars />
      <Projects />
      <Achievements />
      <Skills />
      <Contact />
    </>
  );
}

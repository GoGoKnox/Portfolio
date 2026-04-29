import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Extracurriculars from "./components/Extracurriculars.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import CursorSparkle from "./components/CursorSparkle.jsx";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CursorSparkle />
      <Nav />
      <main>
        <Hero />
        <About />
        <Extracurriculars />
        <Experience />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Certificate from "./sections/Certificate";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import "./styles/global.css";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificate />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

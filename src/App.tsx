import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#282828] text-[#ebdbb2]">

      {/* Navigation */}

      <Navbar />

      {/* Main Content */}

      <main>

        <Hero />

        <About />

        <Experience />

        <Projects />

        <Skills />

        <Education />

        <Contact />

      </main>

      {/* Footer */}

      <Footer />

    </div>
  );
}
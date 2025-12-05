import React, { useEffect } from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/hero.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Technologies from './components/Technologies.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duración de la animación en ms
      once: true,     // animar solo una vez
    });
  }, []);

   return (
    <div className="min-h-screen bg-[#040011] text-white">
      <NavBar />

      <main className="pt-24 pb-16">
        <Hero />

        <div className="max-w-6xl mx-auto px-4 space-y-24">
          <About />
          <Education />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LanguageToggle from './components/LanguageToggle';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Art from './sections/Art';
import Human from './sections/Human';
import Contact from './sections/Contact';
import FloatingOrbs from './components/FloatingOrbs';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="app">
      <LanguageToggle />
      <FloatingOrbs />
      
      <Hero />
      
      <section className="section section--about about">
        <About />
      </section>
      
      <section className="section section--skills skills">
        <Skills />
      </section>
      
      <section className="section section--experience experience">
        <Experience />
      </section>
      
      <section className="section section--projects projects">
        <Projects />
      </section>
      
      <section className="section section--art art">
        <Art />
      </section>
      
      <section className="section section--human human">
        <Human />
      </section>
      
      <section className="section section--contact contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;

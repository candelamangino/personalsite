import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomeSection from './sections/HomeSection';
import AboutMeSection from './sections/AboutMeSection';
import PhilosophySection from './sections/PhilosophySection';
import ExperienceSection from './sections/ExperienceSection';
import ArtGallerySection from './sections/ArtGallerySection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import Navigation from './components/Navigation';
import './styles/global.css';

// Registrar plugins de GSAP
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Configurar animaciones globales de scroll
    gsap.utils.toArray('.section').forEach((section, index) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 100 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animación suave para elementos con clase .reveal
    gsap.utils.toArray('.reveal').forEach((element) => {
      gsap.fromTo(element,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="app">
      <Navigation />
      
      <main>
        <HomeSection />
        <AboutMeSection />
        <PhilosophySection />
        <ExperienceSection />
        <ArtGallerySection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
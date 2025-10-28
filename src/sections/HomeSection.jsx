import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HomeSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.8"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.6"
    );

    // Animación de partículas flotantes
    gsap.to(".floating-particle", {
      y: "random(-20, 20)",
      x: "random(-10, 10)",
      rotation: "random(-5, 5)",
      duration: "random(3, 6)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
    });
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section hero-section" ref={heroRef}>
      <div className="hero-background">
        <div className="floating-particle" style={{ top: '20%', left: '10%' }}></div>
        <div className="floating-particle" style={{ top: '60%', right: '15%' }}></div>
        <div className="floating-particle" style={{ bottom: '30%', left: '20%' }}></div>
        <div className="floating-particle" style={{ top: '40%', right: '30%' }}></div>
      </div>
      
      <div className="hero-content">
        <motion.h1 
          ref={titleRef}
          className="hero-title"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "power3.out" }}
        >
          Candela Mangino Soroa
        </motion.h1>
        
        <motion.p 
          ref={subtitleRef}
          className="hero-subtitle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "power2.out", delay: 0.4 }}
        >
          Estudiante de Ingeniería en Computación
          <br />
          <span className="highlight">Creativa • Innovadora • Apasionada</span>
        </motion.p>
        
        <motion.div 
          ref={ctaRef}
          className="hero-cta"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "back.out(1.7)", delay: 0.8 }}
        >
          <motion.button 
            className="cta-button"
            onClick={scrollToNext}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Descubre mi mundo
            <motion.span 
              className="arrow"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  );
};

export default HomeSection;

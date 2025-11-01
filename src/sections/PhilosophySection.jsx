import * as THREE from "three";

import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PHRASE = "Creo que la tecnología debe ser intuitiva, hermosa y accesible. Cada línea de código que escribo es una oportunidad de crear algo que mejore la vida de las personas.";

export default function PhilosophySection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const wordsRef = useRef([]);
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Three.js refs
  const threeRefs = useRef({ renderer: null, scene: null, camera: null, mesh: null, animationId: null });

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const pinEl = sectionEl?.querySelector('.philosophy-pin');
    const trackEl = containerRef.current;
    const words = wordsRef.current;
    if (!sectionEl || !pinEl || !trackEl) return;

    const ctx = gsap.context(() => {
      // Entrada más ágil inicial del track (sólo para primera vista)
      gsap.fromTo(trackEl, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', scrollTrigger: { trigger: sectionEl, start: 'top 90%' } });

      if (!isMobile) {
        const naturalDistance = () => Math.max(0, trackEl.scrollWidth - window.innerWidth + 160);
        const endDistance = () => {
          const d = naturalDistance();
          return Math.max(1500, Math.min(2000, d));
        };

        // Timeline maestro al estilo GSAP.com
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: pinEl,
            start: 'top top',
            end: () => `+=${endDistance()}`,
            scrub: 0.3,
            pin: true,
            anticipatePin: 1,
          }
        });

        // Desplazamiento horizontal del track hacia la derecha
        tl.to(trackEl, { x: () => naturalDistance() }, 0);

        // Aparición rápida de palabras + flotación sutil
        if (words && words.length) {
          gsap.fromTo(words,
            { opacity: 0, y: 20, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out', stagger: 0.03,
              scrollTrigger: { trigger: pinEl, start: 'top 95%' } }
          );
          words.forEach((el, i) => {
            const r = (i % 2 ? -1 : 1) * 2.5;
            const y = (i % 3 ? -1 : 1) * 5;
            tl.to(el, { rotate: r, y, duration: 0.6 }, 0);
          });
        }

        // Parallax de íconos
        tl.to('.philosophy-section .icon.gear', { y: -40, rotate: -10 }, 0);
        tl.to('.philosophy-section .icon.bulb', { y: 30, rotate: 8 }, 0.2);
        tl.to('.philosophy-section .icon.code', { y: -20, rotate: 6 }, 0.4);
      }
    }, sectionEl);

    const onR = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onR);
    return () => { window.removeEventListener('resize', onR); ctx.revert(); };
  }, [isMobile]);

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  // Three.js setup
  useEffect(() => {
    let disposed = false;
    const initThree = async () => {
      if (isMobile) return; // skip heavy 3D on mobile
      try {
        const { WebGLRenderer, Scene, PerspectiveCamera, Color, AmbientLight, DirectionalLight, Mesh, MeshStandardMaterial, IcosahedronGeometry } = THREE;


        if (disposed) return;
        const canvas = canvasRef.current;
        if (!canvas) return;

        const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
        const scene = new Scene();
        scene.background = null;
        const camera = new PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
        camera.position.z = 8;

        const ambient = new AmbientLight(new Color(0xffffff), 0.75);
        const dir = new DirectionalLight(new Color(0xffffff), 1.2);
        dir.position.set(3, 5, 2);
        scene.add(ambient, dir);

        const geometry = new IcosahedronGeometry(2.6, 1);
        const material = new MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.3, roughness: 0.15, metalness: 0.8 });
        const mesh = new Mesh(geometry, material);
        scene.add(mesh);

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        const resize = () => {
          const w = canvas.clientWidth;
          const h = canvas.clientHeight;
          renderer.setSize(w, h, false);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        };
        resize();
        window.addEventListener('resize', resize);

        // Scroll-reactive rotation con end dinámico
        let scrollProgress = 0;
        const pinEl = sectionRef.current?.querySelector('.philosophy-pin');
        const endDist = () => {
          const track = containerRef.current;
          return Math.max(0, track.scrollWidth - window.innerWidth + 120);
        };
        const st = ScrollTrigger.create({
          trigger: pinEl,
          start: 'top top',
          end: () => `+=${endDist()}`,
          scrub: true,
          onUpdate: self => { scrollProgress = self.progress; }
        });

        const animate = () => {
          if (disposed) return;
          dir.intensity = 0.9 + scrollProgress * 0.5;
          mesh.rotation.x += 0.0025;
          mesh.rotation.y += 0.0018 + scrollProgress * 0.02;
          renderer.render(scene, camera);
          threeRefs.current.animationId = requestAnimationFrame(animate);
        };
        animate();

        threeRefs.current = { renderer, scene, camera, mesh, animationId: threeRefs.current.animationId };

        return () => {
          st.kill();
          window.removeEventListener('resize', resize);
          if (threeRefs.current.animationId) cancelAnimationFrame(threeRefs.current.animationId);
          renderer.dispose();
          geometry.dispose();
          material.dispose();
        };
      } catch {
        // If three is not available, do nothing (fallback handled in JSX/styles)
      }
    };
    const cleanupPromise = initThree();
    return () => {
      disposed = true;
      if (typeof cleanupPromise === 'function') cleanupPromise();
    };
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="section philosophy-section">
      <div className="philosophy-pin">
        <motion.div ref={containerRef} className="philosophy-track" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'power2.out' }}>
          <h2 className="philosophy-heading">Mi filosofía</h2>
          <div className="philosophy-row">
            <div className="ph-line">
              {PHRASE.split(' ').map((word, wi) => (
                <motion.span key={wi} className="philosophy-word" ref={(el) => (wordsRef.current[wi] = el)}>
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="floating-icons">
            <motion.div className="icon gear">⚙️</motion.div>
            <motion.div className="icon bulb">💡</motion.div>
            <motion.div className="icon code">{`{}`}</motion.div>
          </div>

          <div className="philosophy-visual">
            {!isMobile ? (
              <canvas id="philosophy-3d" ref={canvasRef} />
            ) : (
              <svg className="philosophy-fallback" viewBox="0 0 600 200" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.0)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
                  </linearGradient>
                </defs>
                <path d="M0 150 C 150 50, 300 250, 600 100" stroke="url(#glow)" strokeWidth="3" fill="none">
                  <animate attributeName="stroke-dasharray" values="0,1000; 1000,0; 0,1000" dur="6s" repeatCount="indefinite" />
                </path>
              </svg>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}



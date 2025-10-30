import { motion } from 'framer-motion';
import { useState } from 'react';

const AboutMeSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 'proficiency',
      title: 'Examen Proficiency — Cambridge English',
      description: 'Estudié inglés desde los 6 años y completé todos los exámenes (Flyers, FCE, CAE y Proficiency). Me encanta el idioma y lo uso diariamente; es una herramienta esencial para mí.',
      icon: '🌍',
      color: 'var(--color-blue)'
    },
    {
      id: 'creativity',
      title: 'Creatividad e Innovación',
      description: 'Mi pasión por crear soluciones únicas me lleva a combinar arte y tecnología. Siempre busco formas creativas de resolver problemas complejos.',
      icon: '✨',
      color: 'var(--color-purple)'
    },
    {
      id: 'tech',
      title: 'Tecnología y Desarrollo',
      description: 'Como estudiante de Ingeniería en Computación, me especializo en desarrollo frontend, diseño de interfaces y experiencias de usuario.',
      icon: '💻',
      color: 'var(--color-green)'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <motion.div 
          className="section-header reveal"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "power2.out" }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Sobre mí</h2>
          <p className="section-description">
            Soy una estudiante apasionada que combina la lógica de la ingeniería con la creatividad del arte. 
            Mi objetivo es crear experiencias digitales que conecten con las personas.
          </p>
        </motion.div>

        <div className="cards-grid">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className={`interactive-card ${hoveredCard === card.id ? 'expanded' : ''}`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setHoveredCard(prev => (prev === card.id ? null : card.id))}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="card-header"
                initial={false}
                animate={{ y: hoveredCard === card.id ? -6 : 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                <span className="card-icon" style={{ color: card.color }}>
                  {card.icon}
                </span>
                <h3 className="card-title">{card.title}</h3>
              </motion.div>

              <motion.div 
                className="card-content"
                initial={false}
                animate={{ height: hoveredCard === card.id ? 'auto' : 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                <p className="card-description">{card.description}</p>
              </motion.div>
              
              <motion.div 
                className="card-indicator"
                animate={{ 
                  scale: hoveredCard === card.id ? 1.2 : 1,
                  opacity: hoveredCard === card.id ? 0.8 : 0.3
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="about-highlight reveal"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="highlight-content">
            <h3>Mi filosofía</h3>
            <p>
              "Creo que la tecnología debe ser intuitiva, hermosa y accesible. 
              Cada línea de código que escribo es una oportunidad de crear algo que mejore la vida de las personas."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeSection;

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ExperienceSection = () => {
  const [hoveredExperience, setHoveredExperience] = useState(null);
  const swiperRef = useRef(null);

  const experiences = [
    {
      id: 'hotel',
      title: 'Host en The Grand Hotel (2024)',
      description: 'Cumplía funciones de atención al público y tareas administrativas como reservas, horarios del staff y gestión de horas extras. Fue una experiencia que me encantó por el trabajo en equipo y la interacción con personas.',
      period: '2024',
      type: 'Trabajo',
      hasReviews: true
    },
    {
      id: 'nasa',
      title: 'NASA Space Apps Challenge',
      description: 'Fue una experiencia increíble. Me encantó aplicar mi creatividad para idear soluciones a problemas reales. Descubrí que la innovación y la imaginación son mis mayores fortalezas.',
      period: '2023',
      type: 'Hackathon',
      hasReviews: false
    },
    {
      id: 'university',
      title: 'Ayudante Estudiantil - Universidad Católica',
      description: 'Apoyo en cursos de programación, ayudando a estudiantes con conceptos fundamentales y proyectos prácticos. Me encanta compartir conocimiento y ver cómo otros descubren el mundo de la programación.',
      period: '2024 - Presente',
      type: 'Educación',
      hasReviews: false
    }
  ];

  const hotelReviews = [
    {
      text: "Candela fue excepcional en su atención al cliente. Siempre sonriente y dispuesta a ayudar.",
      author: "María González",
      rating: 5
    },
    {
      text: "Su profesionalismo y calidez hicieron que nuestra estadía fuera perfecta.",
      author: "Carlos Rodríguez",
      rating: 5
    },
    {
      text: "Muy organizada y eficiente. Se nota que ama lo que hace.",
      author: "Ana Martínez",
      rating: 5
    },
    {
      text: "Excelente trabajo en equipo y siempre disponible para resolver cualquier consulta.",
      author: "Luis Fernández",
      rating: 5
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="section-container">
        <motion.div 
          className="section-header reveal"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "power2.out" }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Mi experiencia</h2>
          <p className="section-description">
            Cada experiencia me ha enseñado algo valioso y me ha ayudado a crecer tanto personal como profesionalmente.
          </p>
        </motion.div>

        <div className="experiences-grid">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`experience-card ${hoveredExperience === exp.id ? 'expanded' : ''}`}
              onMouseEnter={() => setHoveredExperience(exp.id)}
              onMouseLeave={() => setHoveredExperience(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="experience-header">
                <div className="experience-meta">
                  <span className="experience-period">{exp.period}</span>
                  <span className="experience-type">{exp.type}</span>
                </div>
                <h3 className="experience-title">{exp.title}</h3>
              </div>
              
              <motion.div 
                className="experience-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: hoveredExperience === exp.id ? 'auto' : 0,
                  opacity: hoveredExperience === exp.id ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <p className="experience-description">{exp.description}</p>
                
                {exp.hasReviews && hoveredExperience === exp.id && (
                  <motion.div 
                    className="reviews-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4>Lo que dicen los huéspedes:</h4>
                    <div className="reviews-carousel">
                      <Swiper
                        ref={swiperRef}
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        className="reviews-swiper"
                      >
                        {hotelReviews.map((review, idx) => (
                          <SwiperSlide key={idx}>
                            <div className="review-card">
                              <div className="review-stars">
                                {[...Array(review.rating)].map((_, i) => (
                                  <span key={i} className="star">★</span>
                                ))}
                              </div>
                              <p className="review-text">"{review.text}"</p>
                              <span className="review-author">— {review.author}</span>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </motion.div>
                )}
              </motion.div>
              
              <motion.div 
                className="experience-indicator"
                animate={{ 
                  scale: hoveredExperience === exp.id ? 1.2 : 1,
                  opacity: hoveredExperience === exp.id ? 0.8 : 0.3
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

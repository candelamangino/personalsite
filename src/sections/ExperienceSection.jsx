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
      text: "Excelente atención y amabilidad. Siempre dispuesta a ayudar con una sonrisa.",
      author: "María González",
      rating: 5,
      googleLink: "https://share.google/75UEpqPzHaP8vtg6m"
    },
    {
      text: "Profesionalismo y calidez que hicieron nuestra estadía perfecta.",
      author: "Carlos Rodríguez", 
      rating: 5,
      googleLink: "https://share.google/z0v4KfSnJFPEbxXV3"
    },
    {
      text: "Muy organizada y eficiente. Se nota que ama lo que hace.",
      author: "Ana Martínez",
      rating: 5,
      googleLink: "https://share.google/7iYOUZogd0sIUuRuP"
    },
    {
      text: "Excelente trabajo en equipo y siempre disponible para resolver consultas.",
      author: "Luis Fernández",
      rating: 5,
      googleLink: "https://share.google/hmepHEfDJnp8aFlLi"
    },
    {
      text: "Atención al cliente excepcional. Muy recomendable.",
      author: "Sofia Martín",
      rating: 5,
      googleLink: "https://share.google/QIrYR8p9GaLrJq9nf"
    },
    {
      text: "Servicio impecable y trato muy cordial. Volvería sin dudas.",
      author: "Diego López",
      rating: 5,
      googleLink: "https://share.google/ar6C0AxH51aAmacYn"
    },
    {
      text: "Candela hizo que nos sintiéramos como en casa. Excelente experiencia.",
      author: "Elena Ruiz",
      rating: 5,
      googleLink: "https://share.google/WfRNOCZuSCYrsUOqU"
    },
    {
      text: "Profesional, amable y muy eficiente. Recomiendo totalmente.",
      author: "Miguel Torres",
      rating: 5,
      googleLink: "https://share.google/QUk5cttqqolfGHIlp"
    },
    {
      text: "Atención personalizada y detalles que marcan la diferencia.",
      author: "Carmen Silva",
      rating: 5,
      googleLink: "https://share.google/UNxbIyBpgIcjrpIJZ"
    },
    {
      text: "Servicio de primera calidad. Candela es una excelente profesional.",
      author: "Roberto Vega",
      rating: 5,
      googleLink: "https://share.google/qhpl6efeF90F393zd"
    },
    {
      text: "Experiencia memorable gracias a su dedicación y amabilidad.",
      author: "Patricia Morales",
      rating: 5,
      googleLink: "https://share.google/w7lOrYxPpmd7ymgM7"
    },
    {
      text: "Atención excepcional que superó todas nuestras expectativas.",
      author: "Fernando Castro",
      rating: 5,
      googleLink: "https://share.google/g44dgSIEZWOp85DzU"
    },
    {
      text: "Profesionalismo y calidez humana en cada interacción.",
      author: "Isabel Herrera",
      rating: 5,
      googleLink: "https://share.google/qmnb0E6ZPMXfRlh1a"
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
                          delay: 4000,
                          disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        className="reviews-swiper"
                        breakpoints={{
                          768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                          },
                          1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                          }
                        }}
                      >
                        {hotelReviews.map((review, idx) => (
                          <SwiperSlide key={idx}>
                            <motion.div 
                              className="review-card"
                              whileHover={{ y: -5, scale: 1.02 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="review-header">
                                <div className="review-stars">
                                  {[...Array(review.rating)].map((_, i) => (
                                    <span key={i} className="star">★</span>
                                  ))}
                                </div>
                                <div className="review-rating">
                                  <span className="rating-number">{review.rating}.0</span>
                                </div>
                              </div>
                              
                              <p className="review-text">"{review.text}"</p>
                              
                              <div className="review-footer">
                                <span className="review-author">— {review.author}</span>
                                
                                <motion.a
                                  href={review.googleLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="google-link"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <span className="google-text">Ver en Google</span>
                                  <span className="google-icon">↗️</span>
                                </motion.a>
                              </div>
                            </motion.div>
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

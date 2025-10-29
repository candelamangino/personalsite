import { motion } from 'framer-motion';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ArtGallerySection = () => {
  const [hoveredArtwork, setHoveredArtwork] = useState(null);
  const [imageErrors, setImageErrors] = useState(new Set());

  // Datos de arte organizados por categorías con imágenes locales
  const artCategories = [
    {
      id: 'digital',
      title: 'Arte Digital',
      icon: '🎨',
      color: '#007AFF',
      artworks: [
        {
          id: 1,
          title: 'Dodge-48',
          description: 'Exploración de formas orgánicas en el espacio digital',
          instagramUrl: 'https://www.instagram.com/p/DLdnpGEyGIS/',
          imageUrl: '/images/art/digital/Dodge-48.png',
          valid: true
        }
      ]
    },
    {
      id: 'oil',
      title: 'Óleo sobre Lienzo',
      icon: '🖌️',
      color: '#FF9500',
      artworks: [
        {
          id: 1,
          title: 'Bailarina',
          description: 'Capturando la magia del movimiento en óleo',
          instagramUrl: 'https://www.instagram.com/p/CvN-1kbpPvQ/',
          imageUrl: '/images/art/oleo/Bailarina.png',
          valid: true
        },
        {
          id: 2,
          title: 'Retrato híper realista Franco',
          description: 'Emociones plasmadas en pinceladas',
          instagramUrl: 'https://www.instagram.com/p/CuDauTqrZrh/',
          imageUrl: '/images/art/oleo/Retrato híper realista Franco.png',
          valid: true
        },
        {
          id: 3,
          title: 'Amor padre e hija',
          description: 'La conexión más pura capturada en óleo',
          instagramUrl: 'https://www.instagram.com/p/CskbWE_LNVf/',
          imageUrl: '/images/art/oleo/Retrato híper realista "Amor padre e hija".png',
          valid: true
        },
        {
          id: 4,
          title: 'Miguel Ángel Pop',
          description: 'Clásico renacentista con toque moderno',
          instagramUrl: 'https://www.instagram.com/p/CpjGUqfLLc_/',
          imageUrl: '/images/art/oleo/Miguel Ángel pop.png',
          valid: true
        },
        {
          id: 5,
          title: 'Hakuna Matata',
          description: 'La filosofía de vida en colores vibrantes',
          instagramUrl: 'https://www.instagram.com/p/Cpkn81rLRbS/',
          imageUrl: '/images/art/oleo/Hakuna Matata.png',
          valid: true
        },
        {
          id: 6,
          title: 'La mirada de papá',
          description: 'Profundidad emocional en cada trazo',
          instagramUrl: 'https://www.instagram.com/p/CpjG19uLqVo/',
          imageUrl: '/images/art/oleo/Retrato híper realista "la mirada de papá".png',
          valid: true
        },
        {
          id: 7,
          title: 'Un suspiro',
          description: 'Momento de tranquilidad en óleo',
          instagramUrl: 'https://www.instagram.com/p/CpMRARysv06/',
          imageUrl: '/images/art/oleo/Un suspiro.png',
          valid: true
        }
      ]
    },
    {
      id: 'pencil',
      title: 'Dibujos a Lápiz',
      icon: '✏️',
      color: '#8E8E93',
      artworks: [
        {
          id: 1,
          title: 'Harry Styles B&N',
          description: 'La simplicidad del grafito',
          instagramUrl: 'https://www.instagram.com/p/CpkoIGuLD4g/',
          imageUrl: '/images/art/lapiz/harry-styles-bn.jpg',
          valid: true
        }
      ]
    }
  ];

  const handleImageError = (artworkId) => {
    setImageErrors(prev => new Set([...prev, artworkId]));
  };

  const handleArtworkClick = (artwork) => {
    if (artwork.valid && artwork.instagramUrl) {
      // Abrir enlace específico del post
      window.open(artwork.instagramUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Redirigir al perfil general de Instagram
      window.open('https://www.instagram.com/cande_mangino.arte/', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="art" className="section art-section">
      <div className="section-container">
        <motion.div 
          className="section-header reveal"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "power2.out" }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Mi Arte</h2>
          <p className="section-description">
            El color es mi lengua materna. Me inspiran los atardeceres del Río de la Plata, 
            la música electrónica y el juego de luces en las calles lluviosas.
          </p>
        </motion.div>

        <div className="art-categories-container">
          {artCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className="art-category-section"
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 1.2,
                  delay: categoryIndex * 0.3,
                  ease: "easeOut"
                }
              }}
              viewport={{ 
                once: true,
                margin: "-100px"
              }}
            >
              <motion.div 
                className="category-header"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: categoryIndex * 0.3 + 0.4,
                    ease: "easeOut"
                  }
                }}
                viewport={{ 
                  once: true,
                  margin: "-50px"
                }}
              >
                <motion.div 
                  className="category-title-container"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      delay: categoryIndex * 0.3 + 0.6,
                      ease: "back.out(1.7)"
                    }
                  }}
                  viewport={{ once: true }}
                >
                  <motion.span 
                    className="category-icon"
                    style={{ color: category.color }}
                    initial={{ opacity: 0, rotate: -180, scale: 0 }}
                    whileInView={{ 
                      opacity: 1, 
                      rotate: 0, 
                      scale: 1,
                      transition: {
                        duration: 0.8,
                        delay: categoryIndex * 0.3 + 0.7,
                        ease: "back.out(1.7)"
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    {category.icon}
                  </motion.span>
                  <motion.h3 
                    className="category-title"
                    style={{ 
                      background: `linear-gradient(135deg, ${category.color}, ${category.color}CC, ${category.color}99)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        duration: 0.8,
                        delay: categoryIndex * 0.3 + 0.8,
                        ease: "easeOut"
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    {category.title}
                  </motion.h3>
                </motion.div>
                <motion.div 
                  className="category-line"
                  style={{ backgroundColor: category.color }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ 
                    scaleX: 1, 
                    opacity: 0.8,
                    transition: {
                      duration: 1.0,
                      delay: categoryIndex * 0.3 + 1.0,
                      ease: "easeOut"
                    }
                  }}
                  viewport={{ once: true }}
                />
              </motion.div>

              {/* Título de subsección con animación */}
              <motion.div
                className="subsection-title-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: categoryIndex * 0.3 + 1.2,
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true }}
              >
                <h4 
                  className="subsection-title"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h4>
                <motion.div 
                  className="subsection-line"
                  initial={{ scaleX: 0 }}
                  whileInView={{ 
                    scaleX: 1,
                    transition: {
                      duration: 0.8,
                      delay: categoryIndex * 0.3 + 1.4,
                      ease: "easeOut"
                    }
                  }}
                  viewport={{ once: true }}
                  style={{ backgroundColor: category.color }}
                />
              </motion.div>

              <motion.div 
                className="artworks-carousel"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.5 }}
                viewport={{ once: true }}
              >
                <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: `.swiper-button-next-${category.id}`,
                    prevEl: `.swiper-button-prev-${category.id}`,
                  }}
                  pagination={{
                    clickable: true,
                    el: `.swiper-pagination-${category.id}`,
                  }}
                  className={`artworks-swiper artworks-swiper-${category.id}`}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    1200: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    }
                  }}
                >
                  {category.artworks.map((artwork, artworkIndex) => (
                    <SwiperSlide key={artwork.id}>
                      <motion.div
                        className="artwork-card clickable"
                        onMouseEnter={() => setHoveredArtwork(artwork.id)}
                        onMouseLeave={() => setHoveredArtwork(null)}
                        onClick={() => handleArtworkClick(artwork)}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: categoryIndex * 0.3 + artworkIndex * 0.1,
                          ease: "easeOut"
                        }}
                        whileHover={{ 
                          y: -8, 
                          scale: 1.05,
                          transition: { duration: 0.3, ease: "easeOut" }
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div 
                          className="artwork-glow"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{ 
                            background: `linear-gradient(135deg, ${category.color}30, ${category.color}10)`
                          }}
                        />
                        
                        <div className="artwork-image-container">
                          {imageErrors.has(artwork.id) ? (
                            <img 
                              src="/images/fallback-art.svg" 
                              alt="Imagen no disponible"
                              className="artwork-image artwork-fallback-image"
                            />
                          ) : (
                            <img 
                              src={artwork.imageUrl} 
                              alt={artwork.title}
                              className="artwork-image"
                              loading="lazy"
                              onError={() => handleImageError(artwork.id)}
                            />
                          )}
                          
                          {artwork.valid && (
                            <motion.div 
                              className="artwork-overlay"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: hoveredArtwork === artwork.id ? 1 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <motion.div
                                className="instagram-link"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <span className="instagram-icon">↗️</span>
                              </motion.div>
                            </motion.div>
                          )}
                        </div>
                        
                        <div className="artwork-info">
                          <h4 className="artwork-title">{artwork.title}</h4>
                          <p className="artwork-description">{artwork.description}</p>
                          {!artwork.valid && (
                            <div className="artwork-status">
                              <span className="status-text">Próximamente</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Navigation buttons */}
                <button 
                  className={`swiper-button-prev swiper-button-prev-${category.id}`}
                  style={{ color: category.color }}
                >
                  ‹
                </button>
                <button 
                  className={`swiper-button-next swiper-button-next-${category.id}`}
                  style={{ color: category.color }}
                >
                  ›
                </button>

                {/* Pagination */}
                <div className={`swiper-pagination swiper-pagination-${category.id}`} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="art-footer reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://www.instagram.com/cande_mangino.arte"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-profile-button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="instagram-text">Ver más en Instagram</span>
            <motion.span 
              className="instagram-arrow"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↗️
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ArtGallerySection;
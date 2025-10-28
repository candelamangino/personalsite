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

  // Datos de arte organizados por categorías con imágenes reales
  const artCategories = [
    {
      id: 'digital',
      title: 'Arte Digital',
      icon: '🎨',
      color: '#007AFF',
      artworks: [
        {
          id: 1,
          title: 'Cian Pulse',
          description: 'Exploración de formas orgánicas en el espacio digital',
          instagramUrl: 'https://www.instagram.com/p/example1/',
          imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center',
          valid: true
        },
        {
          id: 2,
          title: 'Teal Nebula',
          description: 'Una nebulosa de emociones y colores',
          instagramUrl: 'https://www.instagram.com/p/example2/',
          imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
          valid: true
        },
        {
          id: 3,
          title: 'Violet Echo',
          description: 'Patrones geométricos que resuenan',
          instagramUrl: 'https://www.instagram.com/p/example3/',
          imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center',
          valid: true
        },
        {
          id: 4,
          title: 'Red-Violet Bloom',
          description: 'La naturaleza florece en colores vibrantes',
          instagramUrl: 'https://www.instagram.com/p/example4/',
          imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center',
          valid: false
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
          id: 5,
          title: 'Atardecer Montevideano',
          description: 'Capturando la magia del Río de la Plata',
          instagramUrl: 'https://www.instagram.com/p/example5/',
          imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center',
          valid: true
        },
        {
          id: 6,
          title: 'Retrato Abstracto',
          description: 'Emociones plasmadas en pinceladas',
          instagramUrl: 'https://www.instagram.com/p/example6/',
          imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
          valid: true
        },
        {
          id: 7,
          title: 'Naturaleza Viva',
          description: 'La esencia de la vida en cada trazo',
          instagramUrl: 'https://www.instagram.com/p/example7/',
          imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center',
          valid: false
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
          id: 8,
          title: 'Estudio de Líneas',
          description: 'La simplicidad del grafito',
          instagramUrl: 'https://www.instagram.com/p/example8/',
          imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center',
          valid: true
        },
        {
          id: 9,
          title: 'Retrato Detallado',
          description: 'Cada línea cuenta una historia',
          instagramUrl: 'https://www.instagram.com/p/example9/',
          imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
          valid: true
        },
        {
          id: 10,
          title: 'Arquitectura Urbana',
          description: 'Montevideo en trazos de grafito',
          instagramUrl: 'https://www.instagram.com/p/example10/',
          imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center',
          valid: true
        },
        {
          id: 11,
          title: 'Estudio Anatómico',
          description: 'La belleza de la forma humana',
          instagramUrl: 'https://www.instagram.com/p/example11/',
          imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center',
          valid: false
        }
      ]
    }
  ];

  const handleImageError = (artworkId) => {
    setImageErrors(prev => new Set([...prev, artworkId]));
  };

  const handleArtworkClick = (artwork) => {
    if (artwork.valid && artwork.instagramUrl) {
      window.open(artwork.instagramUrl, '_blank', 'noopener,noreferrer');
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
                        className={`artwork-card ${artwork.valid ? 'clickable' : 'non-clickable'}`}
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
                        whileTap={{ scale: artwork.valid ? 0.98 : 1 }}
                      >
                        <motion.div 
                          className="artwork-glow"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: artwork.valid ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ 
                            background: `linear-gradient(135deg, ${category.color}30, ${category.color}10)`
                          }}
                        />
                        
                        <div className="artwork-image-container">
                          {imageErrors.has(artwork.id) ? (
                            <div className="artwork-fallback">
                              <div className="fallback-icon">🎨</div>
                              <div className="fallback-text">Imagen no disponible</div>
                            </div>
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
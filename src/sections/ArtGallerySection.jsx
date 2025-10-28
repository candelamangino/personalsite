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
          title: 'Retrato digital 1',
          description: 'Exploración de formas orgánicas en el espacio digital',
          instagramUrl: 'https://www.instagram.com/p/DLdnpGEyGIS/',
          imageUrl: 'https://scontent.cdninstagram.com/v/t51.75761-15/476015655_17946712292938282_2220896886900335233_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=105&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&oh=00_AfdeGHhvedvzLu0pxsBIcVhb5yYP_c7nCuIRfBT6LWcuwQ&oe=69072F6E',
          valid: true
        },
        {
          id: 2,
          title: 'Retrato digital 2',
          description: 'Una nebulosa de emociones y colores',
          instagramUrl: 'https://www.instagram.com/p/CpjG19uLqVo/',
          imageUrl: 'https://scontent.cdninstagram.com/v/t51.75761-15/503062628_17960587496938282_5637281132442241441_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=105&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&oh=00_AfduYij2Ran-qn4rsrrMmY1xmLrmlwQRxVeRAIcdGDoCTA&oe=69072DD9',
          valid: true
        },
        {
          id: 3,
          title: 'Arte digital 3',
          description: 'Composición abstracta con colores vibrantes',
          instagramUrl: 'https://www.instagram.com/p/example3/',
          imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 4,
          title: 'Arte digital 4',
          description: 'Formas geométricas en movimiento',
          instagramUrl: 'https://www.instagram.com/p/example4/',
          imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 5,
          title: 'Arte digital 5',
          description: 'Retrato con efectos de luz',
          instagramUrl: 'https://www.instagram.com/p/example5/',
          imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 6,
          title: 'Arte digital 6',
          description: 'Exploración de texturas digitales',
          instagramUrl: 'https://www.instagram.com/p/example6/',
          imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 7,
          title: 'Arte digital 7',
          description: 'Composición minimalista',
          instagramUrl: 'https://www.instagram.com/p/example7/',
          imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 8,
          title: 'Arte digital 8',
          description: 'Arte conceptual digital',
          instagramUrl: 'https://www.instagram.com/p/example8/',
          imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 9,
          title: 'Arte digital 9',
          description: 'Exploración de colores primarios',
          instagramUrl: 'https://www.instagram.com/p/example9/',
          imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 10,
          title: 'Arte digital 10',
          description: 'Arte digital experimental',
          instagramUrl: 'https://www.instagram.com/p/example10/',
          imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
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
          id: 1,
          title: 'Óleo - Retrato femenino',
          description: 'Capturando la magia del Río de la Plata',
          instagramUrl: 'https://www.instagram.com/p/CvN-1kbpPvQ/',
          imageUrl: 'https://www.instagram.com/p/CvN-1kbpPvQ/?utm_source=ig_web_copy_link',
          valid: true
        },
        {
          id: 2,
          title: 'Óleo - Mirada profunda',
          description: 'Emociones plasmadas en pinceladas',
          instagramUrl: 'https://www.instagram.com/p/CpjGUqfLLc_/',
          imageUrl: 'https://scontent.cdninstagram.com/v/t51.75761-15/476457232_17946803936938282_1927127866501663697_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=106&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&oh=00_Afd-23tungAC43I3CkK3pyQ4IGEatg6VTA4rGtv9Iky12A&oe=69070741',
          valid: true
        },
        {
          id: 3,
          title: 'Óleo - Paisaje urbano',
          description: 'Montevideo en colores cálidos',
          instagramUrl: 'https://www.instagram.com/p/example3/',
          imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 4,
          title: 'Óleo - Naturaleza muerta',
          description: 'Objetos cotidianos en óleo',
          instagramUrl: 'https://www.instagram.com/p/example4/',
          imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 5,
          title: 'Óleo - Retrato masculino',
          description: 'Estudio de luces y sombras',
          instagramUrl: 'https://www.instagram.com/p/example5/',
          imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 6,
          title: 'Óleo - Mar y cielo',
          description: 'Horizonte infinito en óleo',
          instagramUrl: 'https://www.instagram.com/p/example6/',
          imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 7,
          title: 'Óleo - Flores silvestres',
          description: 'Botánica en pinceladas suaves',
          instagramUrl: 'https://www.instagram.com/p/example7/',
          imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 8,
          title: 'Óleo - Arquitectura colonial',
          description: 'Patrimonio histórico en óleo',
          instagramUrl: 'https://www.instagram.com/p/example8/',
          imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 9,
          title: 'Óleo - Atardecer',
          description: 'Momento dorado capturado',
          instagramUrl: 'https://www.instagram.com/p/example9/',
          imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 10,
          title: 'Óleo - Abstracto',
          description: 'Emociones en movimiento',
          instagramUrl: 'https://www.instagram.com/p/example10/',
          imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
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
          id: 1,
          title: 'Retrato a lápiz 1',
          description: 'La simplicidad del grafito',
          instagramUrl: 'https://www.instagram.com/p/CpkoIGuLD4g/',
          imageUrl: 'https://scontent.cdninstagram.com/v/t39.30808-6/444481763_17915009348938282_8905329265676614816_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=103&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&oh=00_Afeo1HjUmt4oFbL5kQrMPWjSvzXeFD6KJFc6QKHNW-uB1A&oe=6907086A',
          valid: true
        },
        {
          id: 2,
          title: 'Retrato a lápiz 2',
          description: 'Cada línea cuenta una historia',
          instagramUrl: 'https://www.instagram.com/p/CpMQh-esIXC/',
          imageUrl: 'https://scontent.cdninstagram.com/v/t51.75761-15/470951725_17941612124938282_7667119843937668843_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=102&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&oh=00_AfcB4S3A2xTK5TulWC1K3sAKL9gSbahmAUC5I7SIJy6Tig&oe=690707F2',
          valid: true
        },
        {
          id: 3,
          title: 'Dibujo arquitectónico',
          description: 'Líneas precisas y proporciones',
          instagramUrl: 'https://www.instagram.com/p/example3/',
          imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 4,
          title: 'Estudio anatómico',
          description: 'Forma humana en grafito',
          instagramUrl: 'https://www.instagram.com/p/example4/',
          imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 5,
          title: 'Naturaleza en lápiz',
          description: 'Texturas naturales',
          instagramUrl: 'https://www.instagram.com/p/example5/',
          imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 6,
          title: 'Retrato clásico',
          description: 'Técnica tradicional',
          instagramUrl: 'https://www.instagram.com/p/example6/',
          imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 7,
          title: 'Dibujo expresivo',
          description: 'Emociones en trazos',
          instagramUrl: 'https://www.instagram.com/p/example7/',
          imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 8,
          title: 'Estudio de manos',
          description: 'Detalle y precisión',
          instagramUrl: 'https://www.instagram.com/p/example8/',
          imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 9,
          title: 'Paisaje urbano',
          description: 'Montevideo en grafito',
          instagramUrl: 'https://www.instagram.com/p/example9/',
          imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center',
          valid: false
        },
        {
          id: 10,
          title: 'Dibujo abstracto',
          description: 'Formas libres en lápiz',
          instagramUrl: 'https://www.instagram.com/p/example10/',
          imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
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
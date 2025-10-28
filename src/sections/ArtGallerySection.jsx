import { motion } from 'framer-motion';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ArtGallerySection = () => {
  const [hoveredArtwork, setHoveredArtwork] = useState(null);

  // Datos de arte organizados por categorías
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
          imageUrl: 'https://via.placeholder.com/400x300/00BCD4/FFFFFF?text=Digital+Art+1'
        },
        {
          id: 2,
          title: 'Teal Nebula',
          description: 'Una nebulosa de emociones y colores',
          instagramUrl: 'https://www.instagram.com/p/example2/',
          imageUrl: 'https://via.placeholder.com/400x300/009688/FFFFFF?text=Digital+Art+2'
        },
        {
          id: 3,
          title: 'Violet Echo',
          description: 'Patrones geométricos que resuenan',
          instagramUrl: 'https://www.instagram.com/p/example3/',
          imageUrl: 'https://via.placeholder.com/400x300/7C4DFF/FFFFFF?text=Digital+Art+3'
        },
        {
          id: 4,
          title: 'Red-Violet Bloom',
          description: 'La naturaleza florece en colores vibrantes',
          instagramUrl: 'https://www.instagram.com/p/example4/',
          imageUrl: 'https://via.placeholder.com/400x300/C2185B/FFFFFF?text=Digital+Art+4'
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
          imageUrl: 'https://via.placeholder.com/400x300/FF9500/FFFFFF?text=Oil+Painting+1'
        },
        {
          id: 6,
          title: 'Retrato Abstracto',
          description: 'Emociones plasmadas en pinceladas',
          instagramUrl: 'https://www.instagram.com/p/example6/',
          imageUrl: 'https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=Oil+Painting+2'
        },
        {
          id: 7,
          title: 'Naturaleza Viva',
          description: 'La esencia de la vida en cada trazo',
          instagramUrl: 'https://www.instagram.com/p/example7/',
          imageUrl: 'https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=Oil+Painting+3'
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
          imageUrl: 'https://via.placeholder.com/400x300/8E8E93/FFFFFF?text=Pencil+Drawing+1'
        },
        {
          id: 9,
          title: 'Retrato Detallado',
          description: 'Cada línea cuenta una historia',
          instagramUrl: 'https://www.instagram.com/p/example9/',
          imageUrl: 'https://via.placeholder.com/400x300/6D6D70/FFFFFF?text=Pencil+Drawing+2'
        },
        {
          id: 10,
          title: 'Arquitectura Urbana',
          description: 'Montevideo en trazos de grafito',
          instagramUrl: 'https://www.instagram.com/p/example10/',
          imageUrl: 'https://via.placeholder.com/400x300/5A5A5D/FFFFFF?text=Pencil+Drawing+3'
        },
        {
          id: 11,
          title: 'Estudio Anatómico',
          description: 'La belleza de la forma humana',
          instagramUrl: 'https://www.instagram.com/p/example11/',
          imageUrl: 'https://via.placeholder.com/400x300/48484A/FFFFFF?text=Pencil+Drawing+4'
        }
      ]
    }
  ];

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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="category-header"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                <div className="category-title-container">
                  <span 
                    className="category-icon"
                    style={{ color: category.color }}
                  >
                    {category.icon}
                  </span>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                <div 
                  className="category-line"
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
                        className="artwork-card"
                        onMouseEnter={() => setHoveredArtwork(artwork.id)}
                        onMouseLeave={() => setHoveredArtwork(null)}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: categoryIndex * 0.2 + artworkIndex * 0.1,
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
                          <img 
                            src={artwork.imageUrl} 
                            alt={artwork.title}
                            className="artwork-image"
                            loading="lazy"
                          />
                          <motion.div 
                            className="artwork-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hoveredArtwork === artwork.id ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.a
                              href={artwork.instagramUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="instagram-link"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span className="instagram-icon">↗️</span>
                            </motion.a>
                          </motion.div>
                        </div>
                        
                        <div className="artwork-info">
                          <h4 className="artwork-title">{artwork.title}</h4>
                          <p className="artwork-description">{artwork.description}</p>
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
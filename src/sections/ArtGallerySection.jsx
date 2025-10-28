import { motion } from 'framer-motion';
import { useState } from 'react';

const ArtGallerySection = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [hoveredArtwork, setHoveredArtwork] = useState(null);

  const artworks = [
    {
      id: 1,
      title: 'Cian Pulse',
      category: 'Digital Art',
      description: 'Exploración de formas orgánicas en el espacio digital',
      image: '/api/placeholder/400/300',
      color: '#00bcd4'
    },
    {
      id: 2,
      title: 'Teal Nebula',
      category: 'Abstract',
      description: 'Una nebulosa de emociones y colores',
      image: '/api/placeholder/400/300',
      color: '#009688'
    },
    {
      id: 3,
      title: 'Violet Echo',
      category: 'Geometric',
      description: 'Patrones geométricos que resuenan',
      image: '/api/placeholder/400/300',
      color: '#7c4dff'
    },
    {
      id: 4,
      title: 'Red-Violet Bloom',
      category: 'Nature',
      description: 'La naturaleza florece en colores vibrantes',
      image: '/api/placeholder/400/300',
      color: '#c2185b'
    },
    {
      id: 5,
      title: 'Golden Spiral',
      category: 'Mathematical',
      description: 'La belleza de las matemáticas en el arte',
      image: '/api/placeholder/400/300',
      color: '#ff9800'
    },
    {
      id: 6,
      title: 'Ocean Depths',
      category: 'Abstract',
      description: 'Profundidades del océano en movimiento',
      image: '/api/placeholder/400/300',
      color: '#2196f3'
    }
  ];

  const categories = ['All', 'Digital Art', 'Abstract', 'Geometric', 'Nature', 'Mathematical'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArtworks = activeCategory === 'All' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === activeCategory);

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
          <h2 className="section-title">Arte y Creatividad</h2>
          <p className="section-description">
            El color es mi lengua materna. Me inspiran los atardeceres del Río de la Plata, 
            la música electrónica y el juego de luces en las calles lluviosas.
          </p>
        </motion.div>

        <motion.div 
          className="art-categories reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="art-gallery"
          layout
        >
          {filteredArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              className={`artwork-card ${hoveredArtwork === artwork.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredArtwork(artwork.id)}
              onMouseLeave={() => setHoveredArtwork(null)}
              onClick={() => setSelectedArtwork(artwork)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              layout
            >
              <div 
                className="artwork-image"
                style={{ backgroundColor: artwork.color }}
              >
                <div className="artwork-placeholder">
                  <span className="artwork-icon">🎨</span>
                </div>
                <motion.div 
                  className="artwork-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredArtwork === artwork.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="view-icon">👁️</span>
                </motion.div>
              </div>
              
              <div className="artwork-info">
                <h3 className="artwork-title">{artwork.title}</h3>
                <span className="artwork-category">{artwork.category}</span>
                <motion.p 
                  className="artwork-description"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: hoveredArtwork === artwork.id ? 'auto' : 0,
                    opacity: hoveredArtwork === artwork.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {artwork.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal para vista ampliada */}
        {selectedArtwork && (
          <motion.div 
            className="artwork-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArtwork(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedArtwork(null)}
              >
                ×
              </button>
              <div 
                className="modal-image"
                style={{ backgroundColor: selectedArtwork.color }}
              >
                <div className="modal-placeholder">
                  <span className="modal-icon">🎨</span>
                </div>
              </div>
              <div className="modal-info">
                <h3>{selectedArtwork.title}</h3>
                <span className="modal-category">{selectedArtwork.category}</span>
                <p>{selectedArtwork.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ArtGallerySection;

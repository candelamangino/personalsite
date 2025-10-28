import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function Art() {
  const { t } = useTranslation();
  const gallery = t('art.gallery', { returnObjects: true });

  return (
    <motion.div className="art" variants={container} initial="hidden" whileInView="show" viewport={{ once: false }}>
      <h2 className="section-title">{t('art.heading')}</h2>
      <p className="section-text">{t('art.description')}</p>
      <div className="art__gallery">
        {gallery.map((piece) => (
          <motion.div
            key={piece}
            className="art__tile glass-card"
            variants={item}
            whileHover={{ scale: 1.05, rotate: 2 }}
            style={{
              background: `linear-gradient(135deg, ${
                piece.includes('Cyan') ? 'rgba(0, 188, 212, 0.3)' :
                piece.includes('Teal') ? 'rgba(0, 150, 136, 0.3)' :
                piece.includes('Violet') ? 'rgba(124, 77, 255, 0.3)' :
                'rgba(233, 30, 99, 0.3)'
              }, transparent)`,
            }}
          >
            <span>{piece}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

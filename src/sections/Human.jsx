import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Human() {
  const { t } = useTranslation();
  const paragraphs = t('human.paragraphs', { returnObjects: true });

  return (
    <motion.div className="human" variants={container} initial="hidden" whileInView="show" viewport={{ once: false }}>
      <h2 className="section-title">{t('human.heading')}</h2>
      <div className="human__stories">
        {paragraphs.map((paragraph, index) => (
          <motion.div key={index} className="human__story glass-card" variants={item}>
            <p>{paragraph}</p>
            <span className="human__hover">
              {t(`human.hover.${index === 0 ? 'empathy' : index === 1 ? 'rituals' : 'collab'}`)}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

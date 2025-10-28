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
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0 },
};

export default function Experience() {
  const { t } = useTranslation();
  const timeline = t('experience.timeline', { returnObjects: true });

  return (
    <motion.div className="experience" variants={container} initial="hidden" whileInView="show" viewport={{ once: false }}>
      <h2 className="section-title">{t('experience.heading')}</h2>
      <div className="experience__timeline">
        {timeline.map((exp, index) => (
          <motion.article key={index} className="experience__item glass-card" variants={item}>
            <header>
              <h3>{exp.title}</h3>
              <time className="experience__time">{exp.time}</time>
            </header>
            <p>{exp.description}</p>
            <span className="experience__hover">
              {t(`experience.hover.${index === 0 ? 'english' : index === 1 ? 'hotel' : 'hackathon'}`)}
            </span>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}

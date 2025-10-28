import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="about__card glass-card"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
    >
      <motion.h2 className="section-title" variants={item}>
        {t('about.heading')}
      </motion.h2>
      <motion.p className="section-text" variants={item}>
        {t('about.body')}
      </motion.p>
      <motion.span className="about__highlight" variants={item}>
        {t('about.highlight')}
      </motion.span>
    </motion.div>
  );
}

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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="section section--hero hero">
      <motion.div
        className="hero__inner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="hero__title" variants={item}>
          {t('hero.title')}
        </motion.h1>
        <motion.p className="hero__subtitle" variants={item}>
          {t('hero.subtitle')}
        </motion.p>
        <motion.blockquote className="hero__quote" variants={item}>
          "{t('hero.quote')}"
        </motion.blockquote>
        <motion.a
          href="#about"
          className="button button--primary"
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('hero.cta')}
        </motion.a>
      </motion.div>
    </section>
  );
}

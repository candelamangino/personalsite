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

export default function Contact() {
  const { t } = useTranslation();

  return (
    <motion.div className="contact" variants={container} initial="hidden" whileInView="show" viewport={{ once: false }}>
      <h2 className="section-title">{t('contact.heading')}</h2>
      <p className="section-text">{t('contact.copy')}</p>
      
      <motion.form className="contact__form" variants={item}>
        <label className="contact__name">
          {t('contact.form.name')}
          <input type="text" name="name" required />
        </label>
        
        <label className="contact__email">
          {t('contact.form.email')}
          <input type="email" name="email" required />
        </label>
        
        <label className="contact__message">
          {t('contact.form.message')}
          <textarea
            name="message"
            rows="5"
            placeholder={t('contact.form.placeholder')}
            required
          />
        </label>
        
        <motion.button
          type="submit"
          className="button button--secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('contact.form.submit')}
        </motion.button>
      </motion.form>
      
      <motion.p className="contact__footer" variants={item}>
        {t('footer')}
      </motion.p>
    </motion.div>
  );
}

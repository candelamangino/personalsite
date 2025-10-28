import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const listVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  const { t } = useTranslation();
  const projects = t('projects.list', { returnObjects: true });

  return (
    <motion.div className="projects" variants={listVariant} initial="hidden" whileInView="show" viewport={{ once: false }}>
      <h2 className="section-title">{t('projects.heading')}</h2>
      <p className="section-text">{t('projects.note')}</p>
      <div className="projects__grid">
        {projects.map((project) => (
          <motion.article key={project.name} className="projects__item glass-card" variants={itemVariant} whileHover={{ y: -6 }}>
            <span className="projects__tag">{project.tag}</span>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}

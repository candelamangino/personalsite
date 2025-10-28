import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  const { t } = useTranslation();

  const skillGroups = [
    { title: t('skills.tech'), items: t('skills.techList', { returnObjects: true }) },
    { title: t('skills.creative'), items: t('skills.creativeList', { returnObjects: true }) },
    { title: t('skills.micro'), items: t('skills.microList', { returnObjects: true }) },
  ];

  return (
    <motion.div className="skills" variants={container} initial="hidden" whileInView="show" viewport={{ once: false }}>
      <h2 className="section-title">{t('skills.heading')}</h2>
      <div className="skills__grid">
        {skillGroups.map((group) => (
          <motion.div key={group.title} className="skills__group glass-card" variants={item}>
            <h3 className="skills__group-title">{group.title}</h3>
            <ul>
              {group.items.map((skill) => (
                <motion.li key={skill} whileHover={{ x: 6, color: 'var(--color-cyan)' }}>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { useState } from 'react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 'balance',
      title: 'Balance',
      category: 'Mobile App',
      description: 'App en desarrollo — versión 1.0 próximamente en App Store y Google Play',
      status: 'En desarrollo',
      tech: ['React Native', 'Firebase', 'UI/UX'],
      color: '#4CAF50'
    },
    {
      id: 'servihub',
      title: 'ServiHub',
      category: 'Web Platform',
      description: 'Plataforma web innovadora que conecta servicios locales con usuarios',
      status: 'En desarrollo',
      tech: ['React', 'Node.js', 'MongoDB'],
      color: '#2196F3'
    },
    {
      id: 'creative-tool',
      title: 'Creative Tool',
      category: 'Design Tool',
      description: 'Herramienta creativa para diseñadores que combina arte y tecnología',
      status: 'En desarrollo',
      tech: ['WebGL', 'Canvas API', 'React'],
      color: '#9C27B0'
    },
    {
      id: 'portfolio-v2',
      title: 'Portfolio v2.0',
      category: 'Personal Website',
      description: 'Esta misma página web, construida con las últimas tecnologías',
      status: 'En desarrollo',
      tech: ['React', 'Framer Motion', 'GSAP'],
      color: '#FF9800'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <motion.div 
          className="section-header reveal"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "power2.out" }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Proyectos en desarrollo</h2>
          <p className="section-description">
            Cada proyecto es un laboratorio donde la empatía se encuentra con la computación. 
            Aquí están mis próximas creaciones.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${hoveredProject === project.id ? 'expanded' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="project-header">
                <div className="project-status">
                  <motion.span 
                    className="status-badge"
                    style={{ backgroundColor: project.color }}
                    animate={{ 
                      scale: hoveredProject === project.id ? 1.1 : 1,
                      boxShadow: hoveredProject === project.id 
                        ? `0 0 20px ${project.color}40` 
                        : 'none'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.status}
                  </motion.span>
                  <span className="project-category">{project.category}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
              </div>
              
              <motion.div 
                className="project-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: hoveredProject === project.id ? 'auto' : 0,
                  opacity: hoveredProject === project.id ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  <h4>Tecnologías:</h4>
                  <div className="tech-tags">
                    {project.tech.map((tech, idx) => (
                      <motion.span 
                        key={idx}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: hoveredProject === project.id ? 1 : 0,
                          scale: hoveredProject === project.id ? 1 : 0.8
                        }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="project-indicator"
                animate={{ 
                  scale: hoveredProject === project.id ? 1.2 : 1,
                  opacity: hoveredProject === project.id ? 0.8 : 0.3
                }}
                transition={{ duration: 0.2 }}
              />
              
              <motion.div 
                className="coming-soon-overlay"
                animate={{ 
                  opacity: hoveredProject === project.id ? 0 : 1,
                  scale: hoveredProject === project.id ? 0.8 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="coming-soon-text">Próximamente</span>
                <motion.div 
                  className="pulse-dot"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="projects-footer reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="footer-text">
            Cada proyecto es una oportunidad de aprender, crear y conectar con personas reales. 
            <br />
            <span className="highlight">¿Tienes una idea? ¡Hablemos!</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

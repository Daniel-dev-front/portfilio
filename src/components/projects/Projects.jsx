// src/components/Projects/Projects.jsx

import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import ru from '../../locales/ru.json';
import en from '../../locales/en.json';
import styles from './Projects.module.scss';
import projectsData from '../../data/projects.json';

// Иконки (можно установить lucide-react)
import { Github, ExternalLink, ChevronRight } from 'lucide-react';

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const t = language === 'ru' ? ru : en;

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          {language === 'ru' ? 'Мои проекты' : 'My Projects'}
        </h2>
        
        <div className={styles.projectsGrid}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              
              {/* Изображение проекта */}
              <div className={styles.projectImage}>
                <img 
                  src={project.image} 
                  alt={project.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x250/1a1a2e/667eea?text=Project+Image';
                  }}
                />
              </div>

              {/* Контент */}
              <div className={styles.projectContent}>
                <h3 className={styles.projectName}>{project.name}</h3>
                
                <p className={styles.projectDescription}>
                  {language === 'ru' ? project.description : project.description_en}
                </p>

                {/* Технологии */}
                <div className={styles.technologies}>
                  {project.technologies.slice(0, 5).map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className={styles.techTag}>+{project.technologies.length - 5}</span>
                  )}
                </div>

                {/* Особенности */}
                {/* <ul className={styles.features}>
                  {(language === 'ru' ? project.features : project.features_en || project.features).map((feature, index) => (
                    <li key={index}>
                      <ChevronRight size={16} />
                      {feature}
                    </li>
                  ))}
                </ul> */}

                <div className={styles.projectLinks}>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.githubLink}
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                  )}
                  
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.demoLink}
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
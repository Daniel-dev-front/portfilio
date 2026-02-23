// src/components/Projects/Projects.jsx

import React, { useContext } from 'react';
import ru from '../../locales/ru.json';
import en from '../../locales/en.json';
import projectsData from '../../data/projects.json';
import styles from './Projects.module.scss';
import ProjectCard from './ProjectsCard';
import { LanguageContext } from '../../context/LanguageContext';

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const t = language === 'ru' ? ru : en;

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t.projects.title}</h2>
        
        <div className={styles.grid}>
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id} 
              project={project} 
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
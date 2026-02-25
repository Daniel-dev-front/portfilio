// src/components/Projects/ProjectCard.jsx

import React from "react";
import styles from "./Projects.module.scss";

const ProjectCard = ({ project, language }) => {
  const description =
    language === "ru" ? project.description : project.description_en;

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <div className={styles.imagePlaceholder}>
          <img src={project.image} alt="📁" />
        </div>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.name}</h3>
        <p className={styles.cardDescription}>{description}</p>

        <div className={styles.technologies}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.cardLinks}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            GitHub ↗
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.demoLink}
          >
            Demo ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

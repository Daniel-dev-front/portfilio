// src/components/Hero/Hero.jsx

import React, { useContext } from 'react';
import ru from '../../locales/ru.json';
import en from '../../locales/en.json';
import styles from './Hero.module.scss';
import { LanguageProvider } from '../../context/LanguageContext';

const Hero = () => {
  const { language } = useContext(LanguageProvider);
  const t = language === 'ru' ? ru : en;

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {t.hero.title}
          </h1>
          <p className={styles.subtitle}>
            {t.hero.subtitle}
          </p>
          <p className={styles.description}>
            {t.hero.description}
          </p>
          
          <div className={styles.buttons}>
            <a href="#projects" className={styles.primaryButton}>
              {language === 'ru' ? 'Смотреть проекты' : 'View Projects'}
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              {language === 'ru' ? 'Связаться со мной' : 'Contact Me'}
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>4+</span>
              <span className={styles.statLabel}>
                {language === 'ru' ? 'Проектов' : 'Projects'}
              </span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>6+</span>
              <span className={styles.statLabel}>
                {language === 'ru' ? 'Технологий' : 'Technologies'}
              </span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>2+</span>
              <span className={styles.statLabel}>
                {language === 'ru' ? 'Года опыта' : 'Years of exp'}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.codeBlock}>
            <pre>
              <code>
{`const developer = {
  name: 'Даниел',
  age: 16,
  skills: ['React', 'Vite', 'SCSS', 'JS','HTML', 'CSS'],
  passion: 'Creating awesome UIs', 
  future: 'Senior Dev'
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default Hero;
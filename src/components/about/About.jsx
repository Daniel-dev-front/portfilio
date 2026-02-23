// src/components/About/About.jsx

import React, { useContext } from 'react';
import ru from '../../locales/ru.json';
import en from '../../locales/en.json';
import styles from './About.module.scss';
import { LanguageContext } from '../../context/LanguageContext';

const About = () => {
  const { language } = useContext(LanguageContext);
  const t = language === 'ru' ? ru : en;

  const skills = [
    { name: 'React', level: 85, color: '#61DAFB' },
    { name: 'JavaScript', level: 80, color: '#F7DF1E' },
    { name: 'SCSS', level: 85, color: '#CC6699' },
    { name: 'HTML/CSS', level: 90, color: '#E34F26' },
    { name: 'Git', level: 75, color: '#F05032' },
  ];

  return (
    <section id="about" className='container'>
        <div className={styles.about}>

      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t.about.title}</h2>
        
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.intro}>{t.about.intro}</p>
            <p className={styles.description}>{t.about.description1}</p>
            <p className={styles.description}>{t.about.description2}</p>
            
            <div className={styles.achievements}>
              <div className={styles.achievement}>
                <span className={styles.achievementIcon}>🎯</span>
                <div className={styles.achievementText}>
                  <h4>{language === 'ru' ? 'Цель' : 'Goal'}</h4>
                  <p>{language === 'ru' ? 'Стать Senior Fullstack разработчиком' : 'Become a Senior Fullstack Developer'}</p>
                </div>
              </div>
              
              <div className={styles.achievement}>
                <span className={styles.achievementIcon}>🚀</span>
                <div className={styles.achievementText}>
                  <h4>{language === 'ru' ? 'Сейчас' : 'Currently'}</h4>
                  <p>{language === 'ru' ? 'Изучаю Next.js и Node.js' : 'Learning Next.js and Node.js'}</p>
                </div>
              </div>
              
              <div className={styles.achievement}>
                <span className={styles.achievementIcon}>💡</span>
                <div className={styles.achievementText}>
                  <h4>{language === 'ru' ? 'Интересы' : 'Interests'}</h4>
                  <p>{language === 'ru' ? 'UI/UX дизайн, Анимации, Оптимизация' : 'UI/UX design, Animations, Optimization'}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.skillsSection}>
            <h3 className={styles.skillsTitle}>{t.about.techStack}</h3>
            <div className={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercentage}>{skill.level}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill}
                      style={{ 
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}, #667eea)`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        </div>
    </section>
  );
};

export default About;
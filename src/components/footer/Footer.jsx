// src/components/Footer/Footer.jsx

import React, { useContext } from 'react';
import ru from '../../locales/ru.json';
import en from '../../locales/en.json';
import styles from './Footer.module.scss';
import { LanguageProvider } from '../../context/LanguageContext';
import { FaGithub, FaHeart, FaTelegram, } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const { language } = useContext(LanguageProvider);
  const t = language === 'ru' ? ru : en;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/твой-логин', icon: <FaGithub  size={24}/> },
    { name: 'Telegram', url: 'https://t.me/твой-ник', icon: <FaTelegram color="#24A1DE" size={24}/> },
    { name: 'Email', url: 'mailto:твой-email@example.com', icon: <MdEmail size={24}/> },
    // { name: 'LinkedIn', url: 'https://linkedin.com/in/твой-профиль', icon: '💼' },
  ];

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.logo}>
              {language === 'ru' ? 'Мое Портфолио' : 'My Portfolio'}
            </h3>
            <p className={styles.description}>
              {language === 'ru' 
                ? 'Создаю современные веб-приложения с любовью к деталям'
                : 'Creating modern web applications with attention to detail'
              }
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>{language === 'ru' ? 'Навигация' : 'Navigation'}</h4>
              <ul>
                <li><a href="#projects">{t.nav.projects}</a></li>
                <li><a href="#about">{t.nav.about}</a></li>
                <li><a href="#skills">{t.nav.skills}</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>{language === 'ru' ? 'Соцсети' : 'Social'}</h4>
              <ul>
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <span className={styles.socialIcon}>{link.icon}</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} {language === 'ru' ? 'Все права защищены' : 'All rights reserved'}
          </p>
          <p className={styles.madeWith}>
            {language === 'ru' ? 'Сделано с' : 'Made with'} <span className={styles.heart}><FaHeart color="red" /></span> 
            {language === 'ru' ? 'и используя React' : ' using React'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
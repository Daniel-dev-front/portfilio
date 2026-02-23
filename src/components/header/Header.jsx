// src/components/Header/Header.jsx

import { useState, useContext } from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import ru from '../../locales/ru.json';
import en from '../../locales/en.json';
import styles from './Header.module.scss';
import ThemeToggle from '../../context/ThemeToggle';
import { LanguageProvider } from '../../context/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageProvider); // LanguageContext, а не LanguageProvider!
  const { theme } = useContext(ThemeProvider);

  const t = language === 'ru' ? ru : en;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };
  

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  return (
    <header className={`${styles.header} ${theme === 'light' ? styles.light : ''}`}>
      <div className={styles.container}>
        {/* Логотип */}
        <a href="/" className={styles.logo}>
          {language === 'ru' ? 'Мое Портфолио' : 'My Portfolio'}
        </a>

        {/* Десктоп навигация */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <a href="#projects" className={styles.navLink} onClick={closeMenu}>
                {t.nav.projects}
              </a>
            </li>
            <li>
              <a href="#about" className={styles.navLink} onClick={closeMenu}>
                {t.nav.about}
              </a>
            </li>
            <li>
              <a href="#skills" className={styles.navLink} onClick={closeMenu}>
                {t.nav.skills}
              </a>
            </li>
          </ul>
        </nav>

        {/* Управление темой и языком */}
        <div className={styles.controls}>
          <button 
            className={styles.langToggle} 
            onClick={toggleLanguage}
            aria-label="Сменить язык"
          
          >
            
            {language === 'ru' ? 'EN' : 'RU'}
          </button>
          <ThemeToggle />
          
          {/* Кнопка для десктопа */}
          <button className={styles.contactButton}>
            {t.nav.contact}
          </button>
        </div>

        {/* Бургер-кнопка для мобилок */}
        <button 
          className={`${styles.burgerButton} ${isMenuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Затемнение фона */}
        {isMenuOpen && (
          <div className={styles.overlay} onClick={closeMenu}></div>
        )}

      </div >
        {/* Мобильное меню */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          <nav>
            <ul className={styles.navList}>
              <li>
                <a href="#projects" className={styles.navLink} onClick={closeMenu}>
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a href="#about" className={styles.navLink} onClick={closeMenu}>
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#skills" className={styles.navLink} onClick={closeMenu}>
                  {t.nav.skills}
                </a>
              </li>
            </ul>
          </nav>
          
          <div className={styles.mobileControls}>
            <button className={styles.mobileLangToggle} onClick={toggleLanguage}>
              {language === 'ru' ? 'English' : 'Русский'}
            </button>
            <ThemeToggle />
          </div>
          
          <button className={styles.mobileContactButton} onClick={closeMenu}>
            {t.nav.contact}
          </button>
        </div>

    </header>
  );
};

export default Header;
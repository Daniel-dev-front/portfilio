// src/components/Header/ThemeToggle.jsx

import React, { useContext } from 'react';
import { ThemeProvider } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeProvider);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button 
      className="themeToggle" 
      onClick={toggleTheme}
      aria-label="Переключить тему"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
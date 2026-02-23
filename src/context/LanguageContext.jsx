// src/context/LanguageContext.jsx

/* eslint-disable react-refresh/only-export-components */
import { createContext } from 'react';

export const LanguageContext = createContext({
  language: 'ru',
  setLanguage: () => {},
});

export const LanguageProvider = LanguageContext.Provider;
// src/context/LanguageContext.jsx

import { createContext } from 'react';

const LanguageContext = createContext({
  language: 'ru',
  setLanguage: () => {},
});

export const LanguageProvider = LanguageContext.Provider;
// src/context/ThemeContext.jsx

import { createContext } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  setTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;
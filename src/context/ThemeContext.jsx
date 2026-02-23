// src/context/ThemeContext.jsx

/* eslint-disable react-refresh/only-export-components */
import { createContext } from 'react';

export const ThemeContext = createContext({
  theme: 'dark',
  setTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;
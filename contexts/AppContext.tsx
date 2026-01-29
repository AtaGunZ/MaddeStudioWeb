import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Page } from '../types';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  page: Page;
  setPage: (page: Page) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [page, setPage] = useState<Page>(Page.HOME);

  // Initialize theme class on body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const value = {
    language,
    setLanguage,
    darkMode,
    setDarkMode,
    page,
    setPage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

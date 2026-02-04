import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Page } from '../types';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  page: Page;
  setPage: (page: Page) => void;
  selectedProjectId: string | null;
  setSelectedProjectId: (id: string | null) => void;
  selectedFragmentId: string | null;
  setSelectedFragmentId: (id: string | null) => void;
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
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check if the dark class was added by the inline script
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [page, setPage] = useState<Page>(Page.HOME);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedFragmentId, setSelectedFragmentId] = useState<string | null>(null);

  // Toggle theme class and save to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
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
    selectedProjectId,
    setSelectedProjectId,
    selectedFragmentId,
    setSelectedFragmentId,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

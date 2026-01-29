import React from 'react';
import { Language, Page } from '../types';
import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';

export const Navbar: React.FC = () => {
  const { language, setLanguage, darkMode, setDarkMode, isMenuOpen, setIsMenuOpen, setPage } = useApp();
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 mix-blend-difference text-white"
    >
      <button 
        onClick={() => {
          setPage(Page.HOME);
          setIsMenuOpen(false);
        }}
        className="font-bold text-xl tracking-tighter hover:opacity-70 transition-opacity"
      >
        MaddeStudio.
      </button>

      <div className="flex gap-6 items-center text-sm font-medium">
        <button 
          onClick={() => setLanguage(language === Language.EN ? Language.TR : Language.EN)}
          className="hover:opacity-70 transition-opacity uppercase tracking-widest"
        >
          {language}
        </button>
        
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="hover:opacity-70 transition-opacity"
          aria-label="Toggle Dark Mode"
        >
          <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center">
            {darkMode ? (
              <div className="w-2 h-2 bg-current rounded-full" />
            ) : null}
          </div>
        </button>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="hover:opacity-70 transition-opacity uppercase tracking-widest w-12 text-right"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>
    </motion.nav>
  );
};
import React, { useState, useEffect } from 'react';
import { Language, Page } from './types';
import { Navbar } from './components/Navbar';
import { Menu } from './components/Menu';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Services } from './components/Services';
import { Works } from './components/Works';
import { Fragments } from './components/Fragments';
import { Contact } from './components/Contact';
import { TEXTS } from './constants';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  
  // Navigation State
  const [page, setPage] = useState<Page>(Page.HOME);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Fake Loading Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-madde-black text-white' : 'bg-madde-white text-black'}`}>
         <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-12 h-12 bg-current animate-spin"
            style={{ borderRadius: "20%" }} 
         />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full relative selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Navbar 
        language={language} 
        setLanguage={setLanguage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setPage={setPage}
      />

      <Menu 
        isOpen={isMenuOpen} 
        setIsOpen={setIsMenuOpen} 
        setPage={setPage} 
        currentPage={page}
        language={language}
      />

      <main className="w-full">
        <AnimatePresence mode='wait'>
          {page === Page.HOME && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero text={TEXTS.hero.slogan} currentLang={language} />
              <Manifesto language={language} />
              <Services language={language} />
              <Works language={language} />
            </motion.div>
          )}

          {page === Page.FRAGMENTS && (
            <Fragments key="fragments" language={language} />
          )}

          {page === Page.CONTACT && (
            <Contact key="contact" language={language} />
          )}
        </AnimatePresence>
      </main>

      {/* Smooth Scroll Noise Overlay (Optional Texture) */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[30]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
    </div>
  );
};

export default App;
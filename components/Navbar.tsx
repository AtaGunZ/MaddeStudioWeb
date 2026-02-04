import React, { useState, useEffect } from 'react';
import { Language, Page } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../contexts/AppContext';
import { TEXTS } from '../constants';

export const Navbar: React.FC = () => {
  const { language, setLanguage, darkMode, setDarkMode, page, setPage } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position to switch logos
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Reordered according to user request: Studio, Works, Fragments
  const navItems = [
    { page: Page.STUDIO, label: TEXTS.navigation.studio[language] },
    { page: Page.WORKS, label: TEXTS.navigation.works[language] },
    { page: Page.FRAGMENTS, label: TEXTS.navigation.fragments[language] },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavClick = (targetPage: Page) => {
    setPage(targetPage);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className={`relative transition-all duration-500 ${scrolled
            ? 'bg-madde-white/90 dark:bg-madde-black/90 backdrop-blur-lg'
            : 'bg-transparent'
            }`}
        >
          <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
            {/* Logo */}
            <button
              onClick={() => {
                setPage(Page.HOME);
                setIsMobileMenuOpen(false);
              }}
              className="relative h-10 transition-all duration-300 hover:opacity-70 z-50"
            >
              <AnimatePresence mode="wait">
                {scrolled ? (
                  <motion.img
                    key="logo-small"
                    src="/logos/LogoWhiteTransparent.svg"
                    alt="Madde Studio"
                    className="h-10 w-auto dark:invert-0 invert"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <motion.img
                    key="logo-full"
                    src="/logos/LogoTextWhiteTransparent.svg"
                    alt="Madde Studio"
                    className="h-10 w-auto dark:invert-0 invert"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </button>

            {/* Center Navigation (Desktop) */}
            <nav className="hidden md:flex gap-16 items-end absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => setPage(item.page)}
                  className={`font-medium tracking-wide transition-all duration-300 origin-bottom ${page === item.page
                    ? 'text-base text-madde-black dark:text-madde-white scale-110'
                    : 'text-sm text-madde-gray hover:text-madde-black dark:hover:text-madde-white'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right Side Controls (Desktop) */}
            <div className="hidden md:flex gap-4 items-center">
              {/* Language Switcher */}
              <button
                onClick={() => setLanguage(language === Language.EN ? Language.TR : Language.EN)}
                className="hover:opacity-60 transition-opacity uppercase tracking-widest flex gap-1"
              >
                <span className={`transition-all duration-300 ${language === Language.EN ? "font-bold text-base scale-110" : "text-xs opacity-50"}`}>EN</span>
                <span className="opacity-30">/</span>
                <span className={`transition-all duration-300 ${language === Language.TR ? "font-bold text-base scale-110" : "text-xs opacity-50"}`}>TR</span>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="hover:opacity-60 transition-opacity"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? (
                  // Moon Icon (filled or stroke)
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                ) : (
                  // Sun Icon
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                )}
              </button>

              {/* Contact Button */}
              <button
                onClick={() => setPage(Page.CONTACT)}
                className="px-6 py-2 rounded-full border-2 border-madde-black dark:border-madde-white text-madde-black dark:text-madde-white text-sm font-medium tracking-wide hover:bg-madde-black hover:text-madde-white dark:hover:bg-madde-white dark:hover:text-madde-black transition-all duration-300 uppercase"
              >
                {TEXTS.navigation.contact[language]}
              </button>
            </div>

            {/* Mobile Menu Icon (3 lines) */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden z-50 p-2 text-madde-black dark:text-madde-white"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 9 : 0 }}
                  className="w-full h-0.5 bg-current transform origin-center transition-transform"
                />
                <motion.span
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                  className="w-full h-0.5 bg-current transition-opacity"
                />
                <motion.span
                  animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -9 : 0 }}
                  className="w-full h-0.5 bg-current transform origin-center transition-transform"
                />
              </div>
            </button>
          </div>

          {/* Subtle gradient fade at bottom when scrolled */}
          {scrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent dark:via-white/5"
            />
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-madde-white dark:bg-madde-black md:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-8">
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col items-center gap-8 text-2xl font-light">
                {navItems.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => handleMobileNavClick(item.page)}
                    className="text-madde-black dark:text-madde-white hover:opacity-70 transition-opacity"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  key="contact"
                  onClick={() => handleMobileNavClick(Page.CONTACT)}
                  className="text-madde-black dark:text-madde-white hover:opacity-70 transition-opacity"
                >
                  {TEXTS.navigation.contact[language]}
                </button>
              </nav>

              <div className="w-12 h-px bg-madde-black/10 dark:bg-madde-white/10 my-4" />

              {/* Mobile Controls */}
              <div className="flex flex-col items-center gap-6">
                {/* Language Switcher */}
                <button
                  onClick={() => setLanguage(language === Language.EN ? Language.TR : Language.EN)}
                  className="hover:opacity-60 transition-opacity uppercase tracking-widest flex gap-2 items-center"
                >
                  <span className={`transition-all duration-300 ${language === Language.EN ? "font-bold text-xl" : "text-base opacity-50"}`}>EN</span>
                  <span className="opacity-30">/</span>
                  <span className={`transition-all duration-300 ${language === Language.TR ? "font-bold text-xl" : "text-base opacity-50"}`}>TR</span>
                </button>

                {/* Dark Mode Toggle */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="hover:opacity-60 transition-opacity flex items-center gap-2 text-madde-black dark:text-madde-white"
                >
                  {darkMode ? (
                    <>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                      </svg>
                      <span>{language === Language.EN ? 'Dark Mode' : 'Karanlık Mod'}</span>
                    </>
                  ) : (
                    <>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                      </svg>
                      <span>{language === Language.EN ? 'Light Mode' : 'Aydınlık Mod'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


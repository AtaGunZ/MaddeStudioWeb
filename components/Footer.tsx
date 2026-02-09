import React from 'react';
import { motion } from 'framer-motion';
import { Language, Page } from '../types';
import { useApp } from '../contexts/AppContext';
import { TEXTS } from '../constants';

export const Footer: React.FC = () => {
  const { language, setPage } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full relative z-[100] pb-20 px-6 md:px-12 bg-madde-white dark:bg-madde-black transition-colors duration-500">
      <div className="max-w-[1920px] mx-auto">
        <div className="border-t border-black/5 dark:border-white/5 mx-4 md:mx-8 mb-20" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-24 mx-4 md:mx-8">
          {/* Logo */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setPage(Page.HOME)}
              className="w-20 h-20 hover:opacity-100 transition-opacity"
            >
              <img
                src="/logos/LogoWhiteTransparent.svg"
                alt="Madde Studio"
                className="w-full h-full dark:invert-0 invert"
              />
            </button>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 md:items-center">
            <span className="text-xs uppercase tracking-[0.2em] text-madde-gray mb-2">
              {TEXTS.footer.inquiries[language]}
            </span>
            <a
              href={`mailto:${TEXTS.contact.mail}`}
              className="text-xl md:text-2xl font-medium hover:opacity-60 transition-opacity"
            >
              {TEXTS.contact.mail}
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4 md:items-end">
            <span className="text-xs uppercase tracking-[0.2em] text-madde-gray mb-2">
              {TEXTS.footer.connect[language]}
            </span>
            <div className="flex flex-col md:items-end gap-2 text-sm font-medium">
              <a href="https://www.instagram.com/madde.studio/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">INSTAGRAM</a>
              <a href="https://www.linkedin.com/company/madde-studio/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">LINKEDIN</a>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end pt-8 border-t border-black/5 dark:border-white/5 mx-8 md:mx-16">
          <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-madde-gray">
            Madde Studio © {new Date().getFullYear()} All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold hover:opacity-60 transition-opacity"
          >
            {TEXTS.footer.backToTop[language]}
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="text-lg"
            >
              ↑
            </motion.span>
          </button>
        </div>
      </div>
    </footer>
  );
};

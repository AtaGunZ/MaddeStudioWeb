import React from 'react';
import { TEXTS } from '../constants';
import { Language } from '../types';
import { motion } from 'framer-motion';

interface ContactProps {
  language: Language;
}

export const Contact: React.FC<ContactProps> = ({ language }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[60vh] pt-48 pb-4 px-6 md:px-12 flex flex-col justify-between relative"
    >
      <div className="max-w-[1920px] mx-auto w-full flex-grow flex items-center justify-center">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-tight text-center max-w-6xl">
          {TEXTS.contact.title[language]}
        </h1>
      </div>

      <div className="w-full flex justify-center pb-2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-madde-gray">
            {language === Language.EN ? 'Get in Touch' : 'İletişime Geçin'}
          </span>
          <div className="flex flex-col items-center gap-2">
            <motion.div
              className="w-px h-24 bg-gray-200 dark:bg-gray-800 overflow-hidden relative"
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-black dark:bg-white"
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="text-3xl"
            >
              ↓
            </motion.span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
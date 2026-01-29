import React from 'react';
import { BRANDS, TEXTS } from '../constants';
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
      className="min-h-[70vh] pt-48 pb-12 px-6 md:px-12 flex flex-col justify-center"
    >
      <div className="max-w-[1920px] mx-auto w-full">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-tight max-w-5xl">
          {TEXTS.contact.title[language]}
        </h1>
      </div>
    </motion.section>
  );
};
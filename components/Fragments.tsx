import React from 'react';
import { FRAGMENTS, TEXTS } from '../constants';
import { Language } from '../types';
import { motion } from 'framer-motion';

interface FragmentsProps {
  language: Language;
}

export const Fragments: React.FC<FragmentsProps> = ({ language }) => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 md:px-12 min-h-screen"
    >
      <div className="flex flex-col md:flex-row mb-16 items-baseline justify-between border-b border-gray-200 dark:border-gray-800 pb-8">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 md:mb-0">
          {TEXTS.fragments.title[language]}
        </h2>
        <p className="text-sm text-madde-gray italic">
          {TEXTS.fragments.description[language]}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FRAGMENTS.map((item, index) => (
          <motion.article 
            key={item.id} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="w-full aspect-square overflow-hidden bg-gray-200 dark:bg-gray-800 mb-6">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="flex justify-between items-start border-t border-gray-300 dark:border-gray-700 pt-4">
              <div>
                <span className="text-xs font-mono uppercase text-madde-gray mb-1 block">
                  {item.type}
                </span>
                <h4 className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                  {item.title}
                </h4>
              </div>
              <span className="text-xs font-mono text-madde-gray">
                {item.date}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};
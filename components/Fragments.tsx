import React from 'react';
import { FRAGMENTS, TEXTS } from '../constants';
import { Language, Page } from '../types';
import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';

interface FragmentsProps {
  language: Language;
}

export const Fragments: React.FC<FragmentsProps> = ({ language }) => {
  const { setPage, setSelectedFragmentId } = useApp();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-48 pb-24 px-6 md:px-12 min-h-screen"
    >

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FRAGMENTS.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => {
              setSelectedFragmentId(item.id);
              setPage(Page.FRAGMENT_DETAIL);
            }}
          >
            <div className="w-full aspect-square overflow-hidden bg-gray-200 dark:bg-gray-800 mb-6">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-2 py-1 mb-2 text-[10px] font-mono border border-black/20 dark:border-white/20 rounded-full uppercase">
                  {item.type}
                </span>
                <h3 className="text-xl font-bold tracking-tight group-hover:opacity-60 transition-opacity">
                  {item.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-madde-gray">{item.date}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};
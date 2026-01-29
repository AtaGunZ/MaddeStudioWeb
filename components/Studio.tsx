import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';

interface StudioProps {
  language: Language;
}

export const Studio: React.FC<StudioProps> = ({ language }) => {
  return (
    <motion.div
      key="studio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">
          {language === Language.EN ? 'Studio' : 'Stüdyo'}
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl md:text-2xl text-madde-gray leading-relaxed mb-8">
            {language === Language.EN 
              ? 'Madde Studio works multi-disciplinary, shaping different expressions from the same underlying matter.'
              : 'Madde Studio multidisipliner çalışır, aynı maddeden farklı formlar ortaya çıkarır.'}
          </p>
          
          <div className="mt-16 space-y-8">
            <p className="text-lg text-madde-black dark:text-madde-white">
              {language === Language.EN
                ? 'We believe every idea has a structure. Design is the act of revealing that structure and giving it form.'
                : 'Her fikir bir yapı taşır. Tasarım, bu yapının görünür hâle gelmesidir.'}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

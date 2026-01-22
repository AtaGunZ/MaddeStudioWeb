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
      className="pt-32 pb-12 px-6 md:px-12 flex flex-col justify-between min-h-screen"
    >
      
      {/* Brands Marqueeish area */}
      <div className="mb-24">
         <p className="text-xs font-bold uppercase tracking-widest mb-8 opacity-50">References</p>
         <div className="flex flex-wrap gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {BRANDS.map((brand, i) => (
              <span key={i} className="text-2xl md:text-4xl font-bold tracking-tighter">
                {brand}
              </span>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-12">
        <div>
           <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-8 max-w-3xl">
             {TEXTS.contact.title[language]}
           </h2>
        </div>
        
        <div className="lg:text-right">
           <a 
             href={`mailto:${TEXTS.contact.mail}`} 
             className="text-xl md:text-2xl hover:underline decoration-1 underline-offset-4 mb-8 block"
           >
             {TEXTS.contact.mail}
           </a>
           
           <div className="flex lg:justify-end gap-6 text-sm font-medium uppercase tracking-widest">
             <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
             <a href="#" className="hover:opacity-50 transition-opacity">LinkedIn</a>
             <a href="#" className="hover:opacity-50 transition-opacity">Behance</a>
           </div>

           <div className="mt-12 text-xs text-madde-gray">
             © {new Date().getFullYear()} MaddeStudio. All rights reserved.
           </div>
        </div>
      </div>
    </motion.section>
  );
};
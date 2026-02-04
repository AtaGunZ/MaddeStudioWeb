import React, { useState } from 'react';
import { SERVICES, TEXTS } from '../constants';
import { Language } from '../types';
import { motion } from 'framer-motion';

interface ServicesProps {
  language: Language;
}

export const Services: React.FC<ServicesProps> = ({ language }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 md:px-12 border-t border-black/10 dark:border-white/10 bg-madde-white dark:bg-madde-black transition-colors duration-500">
      <div className="flex flex-col md:flex-row mb-24 items-baseline justify-between max-w-[1920px] mx-auto">
        <h2 className="text-xs font-bold uppercase tracking-widest mb-4 md:mb-0">
          {TEXTS.services.title[language]}
        </h2>
        <p className="text-xs font-mono text-madde-gray uppercase hidden md:block">
          {TEXTS.services.subtitle[language]}
        </p>
      </div>

      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative flex flex-col justify-between h-[400px] p-6 border border-black/10 dark:border-white/10 hover:border-transparent dark:hover:border-transparent transition-colors duration-500 overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Background Image on Hover */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <img src={service.image} alt="" className="w-full h-full object-cover grayscale opacity-40 dark:opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-black opacity-90" />
            </div>

            <div className="relative z-10 w-full flex justify-between items-start">
              <span className="text-xs font-mono text-madde-gray">0{index + 1}</span>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-light mb-6 leading-tight group-hover:-translate-y-2 transition-transform duration-500">
                {service.title[language].split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h3>

              <div className="overflow-hidden">
                <p className="text-xs font-mono text-madde-gray uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  {service.process[language]}
                </p>
              </div>
            </div>

            {/* Bottom Line Animation */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-madde-black dark:bg-madde-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-20" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
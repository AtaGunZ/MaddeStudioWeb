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
        {SERVICES.map((service, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative h-[400px] md:h-[500px] overflow-hidden cursor-pointer group"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{
                  backgroundImage: `url(${service.image})`,
                  filter: isHovered ? 'grayscale(0%) brightness(1)' : 'grayscale(100%) brightness(0.7)',
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                }}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: isHovered
                    ? 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
                    : 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%)',
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <motion.span
                  className="text-xs font-mono uppercase tracking-widest mb-2 opacity-70"
                  animate={{ y: isHovered ? -10 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  0{index + 1}
                </motion.span>

                <motion.h3
                  className="text-2xl md:text-3xl font-bold tracking-tight mb-3"
                  animate={{ y: isHovered ? -10 : 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  {service.title[language]}
                </motion.h3>

                <motion.p
                  className="text-xs font-mono uppercase tracking-widest opacity-60"
                  animate={{
                    y: isHovered ? -10 : 0,
                    opacity: isHovered ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {service.process[language]}
                </motion.p>

                {/* Hover indicator line */}
                <motion.div
                  className="mt-4 h-px bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: isHovered ? '100%' : '0%' }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
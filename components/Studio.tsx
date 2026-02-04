import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { TEXTS, SERVICES } from '../constants';

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
      className="min-h-screen bg-madde-white dark:bg-madde-black text-madde-black dark:text-madde-white"
    >
      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col px-6 md:px-12 overflow-hidden">
        {/* Background Forms (Subtle) - Similar to Landing Page with added Square */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-5 dark:opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute -right-1/4 -top-1/4 w-[80vw] h-[80vw] border border-current rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
            className="absolute -left-1/4 -bottom-1/4 w-[60vw] h-[60vw] border border-current rounded-full"
          />
          {/* Additional rotating square */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] border border-current"
          />
        </div>

        {/* Centered Text */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="w-full max-w-[1920px] mx-auto">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none max-w-5xl"
            >
              {TEXTS.studio.hero[language]}
            </motion.h1>
          </div>
        </div>

        {/* Scroll Indicator - Same as Landing Page */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="pb-8 flex justify-center animate-bounce"
        >
          <div className="w-px h-12 bg-current" />
        </motion.div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-madde-gray block mb-4 sticky top-32">
              {TEXTS.studio.philosophyTitle[language]}
            </span>
          </div>
          <div className="md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-16"
            >
              {TEXTS.studio.description[language]}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl leading-relaxed text-madde-gray dark:text-gray-400 max-w-3xl"
            >
              {TEXTS.studio.philosophy[language]}
            </motion.p>
          </div>
        </div>
      </section>

      {/* DISCIPLINES SECTION */}
      <section className="py-32 md:py-48 px-6 md:px-12 border-t border-black/10 dark:border-white/10">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24">
            <h2 className="text-xs font-mono uppercase tracking-widest text-madde-gray mb-8 md:mb-0">
              {TEXTS.studio.disciplines[language]}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 bg-opacity-50">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-madde-white dark:bg-madde-black p-12 h-[400px] flex flex-col justify-between group hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-500"
              >
                <span className="text-xs font-mono text-madde-gray">0{index + 1}</span>

                <div>
                  <h3 className="text-3xl font-light mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {service.title[language]}
                  </h3>
                  <div className="w-12 h-px bg-black dark:bg-white my-6 opacity-20 group-hover:w-full transition-all duration-700" />
                  <p className="text-sm font-mono text-madde-gray uppercase tracking-widest">
                    {service.process[language]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  );
};

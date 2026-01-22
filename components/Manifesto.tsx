import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { TEXTS } from '../constants';
import { Language } from '../types';

interface ManifestoProps {
  language: Language;
}

export const Manifesto: React.FC<ManifestoProps> = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-24 md:py-48 px-6 md:px-12 max-w-5xl mx-auto flex flex-col justify-center min-h-[50vh]">
      <motion.div 
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="text-2xl md:text-4xl font-light leading-relaxed tracking-tight"
      >
        <motion.p variants={item} className="mb-8">
          {TEXTS.manifesto.p1[language]}
        </motion.p>
        <motion.p variants={item} className="mb-8 md:pl-24">
          {TEXTS.manifesto.p2[language]}
        </motion.p>
        <motion.p variants={item} className="md:pl-48 text-madde-gray dark:text-gray-400">
          {TEXTS.manifesto.p3[language]}
        </motion.p>
      </motion.div>
    </section>
  );
};
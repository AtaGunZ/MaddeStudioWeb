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
        {/* Animated Title */}
        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tighter leading-tight text-center max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {(language === Language.EN
            ? [
              { text: "Let's", bold: false },
              { text: "give", bold: false },
              { text: "form", bold: true },
              { text: "to", bold: false },
              { text: "an", bold: false },
              { text: "idea.", bold: true }
            ]
            : [
              { text: "Bir", bold: true },
              { text: "fikre", bold: true },
              { text: "form", bold: true },
              { text: "verelim.", bold: false }
            ]
          ).map((word, i) => (
            <motion.span
              key={i}
              className={`inline-block mr-2 ${word.bold ? 'font-bold' : ''}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.2, 0.65, 0.3, 0.9]
                  }
                }
              }}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.h1>
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
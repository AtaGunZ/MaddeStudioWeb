import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ContentText } from '../types';
import { useApp } from '../contexts/AppContext';

interface HeroProps {
  text: ContentText;
  currentLang: string;
}

export const Hero: React.FC<HeroProps> = ({ text, currentLang }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const { darkMode } = useApp();

  // Colors for the animation
  const positiveColor = darkMode ? '#FAFAFA' : '#0A0A0A'; // White in dark mode, black in light mode
  const negativeColor = darkMode ? '#0A0A0A' : '#FAFAFA'; // Black in dark mode, white in light mode

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Forms (Subtle) */}
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
      </div>

      {/* Main Animation: Logo Animation */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-24 h-24 md:w-32 md:h-32 relative mb-12">

          {/* The Square - Scales UP from loading screen size and rotates into position */}
          <motion.div
            initial={{
              scale: 0.375,
              rotate: -180,
              opacity: 1
            }}
            animate={{
              scale: 1,
              rotate: 0,
              opacity: 1
            }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
              delay: 0
            }}
            className="absolute inset-0 origin-center transition-colors duration-300"
            style={{ backgroundColor: positiveColor }}
          />

          {/* Circle - Positive color (visible part outside the square) */}
          <motion.div
            initial={{
              x: "-100vw",
              rotate: -1080,
            }}
            animate={{
              x: 0,
              rotate: 0,
            }}
            transition={{
              duration: 2,
              ease: [0.22, 1, 0.36, 1],
              delay: 1.2,
            }}
            className="absolute rounded-full transition-colors duration-300"
            style={{
              width: '33.33%',
              height: '33.33%',
              bottom: 0,
              left: 0,
              backgroundColor: positiveColor,
            }}
          />

          {/* Circle - Negative color (only visible inside the square via clip) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: 'inset(0)' }}
          >
            <motion.div
              initial={{
                x: "-100vw",
                rotate: -1080,
              }}
              animate={{
                x: 0,
                rotate: 0,
              }}
              transition={{
                duration: 2,
                ease: [0.22, 1, 0.36, 1],
                delay: 1.2,
              }}
              className="absolute rounded-full transition-colors duration-300"
              style={{
                width: '33.33%',
                height: '33.33%',
                bottom: 0,
                left: 0,
                backgroundColor: negativeColor,
              }}
            />
          </div>
        </div>

        <motion.h1
          style={{ y, opacity }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-center max-w-4xl px-4"
        >
          {/* Split text for reveal effect */}
          {text[currentLang as keyof ContentText].split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.4 + (i * 0.1), duration: 0.8 }}
              className="inline-block mx-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-px h-12 bg-current" />
      </motion.div>
    </section>
  );
};
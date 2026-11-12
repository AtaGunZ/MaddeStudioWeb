import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ContentText } from '../types';
import { useApp } from '../contexts/AppContext';
import { useIntroReady } from './IntroContext';

interface HeroProps {
  text: ContentText;
  currentLang: string;
}

export const Hero: React.FC<HeroProps> = ({ text, currentLang }) => {
  const { scrollY } = useScroll();
  // on scroll the slogan simply shrinks a little, slides up behind the logo and fades out
  // (transform + opacity only). Phones keep the original drift down and fade.
  const touch = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;
  const up = typeof window !== 'undefined' && window.innerWidth < 768 ? -150 : -190;
  const scale = useTransform(scrollY, [0, 460], [1, 0.62]);
  const yDesk = useTransform(scrollY, [60, 480], [0, up]);
  const opDesk = useTransform(scrollY, [250, 480], [1, 0]);
  const yTouch = useTransform(scrollY, [0, 500], [0, 200]);
  const opTouch = useTransform(scrollY, [0, 300], [1, 0]);
  const { darkMode } = useApp();

  // Colors for the animation
  const positiveColor = darkMode ? '#FAFAFA' : '#0A0A0A'; // White in dark mode, black in light mode
  // the dot inside the square is a hole: exactly the page colour of each theme (madde-black / madde-paper)
  const negativeColor = darkMode ? '#121212' : '#E2E1E1';

  // the intro starts when the loader is gone (the logo grows out of its square); until then the
  // hero only holds its place
  const ready = useIntroReady();
  if (!ready) return <section className="h-screen w-full" />;

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* the background rings live in BackgroundRings, pinned for the whole page */}
      {/* Main Animation: Logo Animation */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-24 h-24 md:w-32 md:h-32 relative z-20 mb-12">

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
          style={touch ? { y: yTouch, opacity: opTouch } : { y: yDesk, scale, opacity: opDesk }}
          className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-center max-w-4xl px-4 will-change-transform"
        >
          {text[currentLang as keyof ContentText].split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + (i * 0.08), duration: 0.7 }}
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
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-px h-12 bg-current" />
      </motion.div>
    </section>
  );
};
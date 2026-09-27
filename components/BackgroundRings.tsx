import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// The two faint, slowly turning rings from the home hero, pinned to the viewport so they run the
// whole length of the listing pages (home, Studio, Works, Fragments). They sit behind everything
// (z -1, above the page colour), so sections must not paint their own background over them.

const PAGES = new Set(['/', '/studio', '/works', '/fragments']);

export const BackgroundRings: React.FC = () => {
  const { pathname } = useLocation();
  if (!PAGES.has(pathname.replace(/\/+$/, '') || '/')) return null;
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-5 dark:opacity-10">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        className="absolute -right-1/4 -top-1/4 w-[80vw] h-[80vw] border border-current rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 160, repeat: Infinity, ease: 'linear' }}
        className="absolute -left-1/4 -bottom-1/4 w-[60vw] h-[60vw] border border-current rounded-full"
      />
    </div>
  );
};

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// A full-width hairline carrying the Madde logo's circle, split in two. At rest the halves
// nudge apart; as the line travels up the screen they drift out toward the edges.
// `page` ties the spread to the page's first 700px of scroll (for the hero divider).

export const BallDivider: React.FC<{ className?: string; page?: boolean; onClick?: () => void; label?: string; children?: React.ReactNode }> = ({ className, page, onClick, label, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 15%'] });
  const byPage = useTransform(scrollY, [0, 700], [0, 44]);
  const byElement = useTransform(scrollYProgress, [0, 1], [0, 44]);
  const spread = useTransform(page ? byPage : byElement, v => `${v}vw`);
  const spreadNeg = useTransform(page ? byPage : byElement, v => `-${v}vw`);
  const Tag = onClick ? 'button' : 'div';

  return (
    <div ref={ref} className={`relative ${className ?? ''}`}>
      {children}
      <Tag
        {...(onClick ? { type: 'button', onClick, 'aria-label': label } : { 'aria-hidden': true })}
        className={`relative block w-full h-6 ${onClick ? 'cursor-pointer' : ''}`}
      >
        <span className="absolute left-0 right-0 top-1/2 h-px bg-black/15 dark:bg-white/15" />
        {[spreadNeg, spread].map((x, i) => (
          <motion.span key={i} style={{ x }} className="absolute left-1/2 top-1/2 -ml-[5px] -mt-[5px]">
            <motion.span
              className="block w-[10px] h-[10px] rounded-full bg-madde-black dark:bg-madde-white"
              animate={{ x: i ? [0, 7, 0] : [0, -7, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: [0.45, 0, 0.25, 1] }}
            />
          </motion.span>
        ))}
      </Tag>
    </div>
  );
};

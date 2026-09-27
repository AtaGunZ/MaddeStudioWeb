import React, { createContext, useContext, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// A full-width hairline carrying the Madde logo's circle, split in two. At rest the halves
// nudge apart; as the line travels up the screen they drift out toward the edges.
// `page` ties the spread to the page's first 1600px of scroll (for the hero divider).

// How many dividers the page body should carry, set by ProjectDetail from the body's height
// (about one per 1300px of content), so long pages get more and short ones fewer.
export const DividerBudget = createContext(0);
export const useDividerBudget = () => useContext(DividerBudget);
export const dividerCount = (bodyHeight: number) => Math.max(1, Math.min(12, Math.round(bodyHeight / 1300)));

// Spread `n` dividers evenly over `slots` candidate positions (1-based); returns the chosen ones
export const pickSlots = (slots: number, n: number): Set<number> => {
  const out = new Set<number>();
  if (slots <= 0 || n <= 0) return out;
  if (n >= slots) { for (let i = 1; i <= slots; i++) out.add(i); return out; }
  for (let j = 0; j < n; j++) out.add(Math.min(slots, Math.max(1, Math.round((j + 0.5) * slots / n + 0.5))));
  return out;
};

let cssDone = false;
const ensureCSS = () => {
  if (cssDone || typeof document === 'undefined') return;
  const s = document.createElement('style');
  s.textContent = '@keyframes bd-nudge{0%,100%{transform:translateX(0)}50%{transform:translateX(var(--bd))}}';
  document.head.appendChild(s); cssDone = true;
};

export const BallDivider: React.FC<{ className?: string; page?: boolean; onClick?: () => void; label?: string; children?: React.ReactNode }> = ({ className, page, onClick, label, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  // slow opening: spread over a long stretch of scroll, eased by a soft spring
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const byPage = useTransform(scrollY, [0, 1600], [0, 44]);
  const byElement = useTransform(scrollYProgress, [0.05, 0.95], [0, 44]);
  const eased = useSpring(page ? byPage : byElement, { stiffness: 38, damping: 18, mass: 1 });
  const spread = useTransform(eased, v => `${v}vw`);
  const spreadNeg = useTransform(eased, v => `-${v}vw`);
  const Tag = onClick ? 'button' : 'div';
  ensureCSS();

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
            <span
              className="block w-[10px] h-[10px] rounded-full bg-madde-black dark:bg-madde-white motion-safe:animate-[bd-nudge_2.4s_cubic-bezier(.45,0,.25,1)_infinite]"
              style={{ ['--bd' as string]: i ? '7px' : '-7px' }}
            />
          </motion.span>
        ))}
      </Tag>
    </div>
  );
};

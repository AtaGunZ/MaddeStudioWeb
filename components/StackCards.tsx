import React, { useEffect, useRef } from 'react';

// A list of cards that pile up under the navbar as the page scrolls: each card sticks a little
// lower than the one before, slides over it, and the cards underneath shrink back step by step,
// so the earlier ones peek out above like a deck. No extra room after the last card: the pile
// scrolls away as soon as the list ends.

const PEEK = 12;      // px each card sits below the previous one when stacked
const SHRINK = 0.04;  // scale lost per card stacked on top

export const StackCards: React.FC<{ children: React.ReactNode[]; className?: string; cardClassName?: string }> = ({ children, className, cardClassName }) => {
  const list = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = list.current!;
    const cards = Array.from(root.children) as HTMLElement[];
    let raf = 0, visible = false;
    const update = () => {
      raf = 0;
      const stuck = cards.map(c => c.getBoundingClientRect().top <= parseFloat(getComputedStyle(c).top) + 1);
      cards.forEach((c, i) => {
        let depth = 0;
        for (let j = i + 1; j < cards.length; j++) if (stuck[j]) depth++;
        const inner = c.firstElementChild as HTMLElement | null;
        if (inner) {
          inner.style.transform = depth ? `scale(${1 - depth * SHRINK})` : '';
          inner.style.filter = depth ? `brightness(${1 - Math.min(0.5, depth * 0.12)})` : '';
        }
      });
    };
    const onScroll = () => { if (visible && !raf) raf = requestAnimationFrame(update); };
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) onScroll(); });
    io.observe(root);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, [children.length]);

  return (
    <div ref={list} className={`[--stack-top:4.75rem] md:[--stack-top:6.5rem] pb-2 ${className ?? ''}`}>
      {children.map((child, i) => (
        <div key={i} className="sticky mb-3" style={{ top: `calc(var(--stack-top) + ${i * PEEK}px)`, zIndex: i + 1 }}>
          <div
            className={`origin-top border border-black/10 dark:border-white/10 bg-madde-white dark:bg-[#161616] shadow-[0_-8px_24px_rgba(0,0,0,0.18)] transition-[transform,filter] duration-500 ease-out ${cardClassName ?? 'px-5 md:px-8 py-5 md:py-6'}`}
          >
            {child}
          </div>
        </div>
      ))}
    </div>
  );
};

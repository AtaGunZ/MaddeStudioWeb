import React, { useEffect, useRef } from 'react';
import { TEXTS } from '../constants';
import { Language } from '../types';

interface ManifestoProps {
  language: Language;
}

// The manifesto starts as scattered, blurred letters at different depths and assembles as the
// section scrolls into view: each letter has its own fixed offset, tilt and depth, and its own
// moment to settle, so the lines come together unevenly and sharpen as they land.
// One rAF on scroll drives plain styles; reduced motion shows the text set.

const LINES: { key: 'p1' | 'p2' | 'p3'; className: string }[] = [
  { key: 'p1', className: 'mb-8' },
  { key: 'p2', className: 'mb-8 md:pl-24 text-madde-black/60 dark:text-madde-white/60' },
  { key: 'p3', className: 'md:pl-48 text-madde-gray dark:text-gray-400' },
];

const ease = (t: number) => 1 - Math.pow(1 - t, 3);

export const Manifesto: React.FC<ManifestoProps> = ({ language }) => {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = section.current!;
    const letters = Array.from(root.querySelectorAll('[data-l]')) as HTMLElement[];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const touch = window.matchMedia('(hover: none)').matches;
    let seed = 7;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    // depth > 0 comes towards the viewer (bigger, blurrier), < 0 falls behind
    const scatter = letters.map(() => ({
      x: (rnd() - 0.5) * 1.2, y: (rnd() - 0.5) * 0.9, r: (rnd() - 0.5) * 70,
      depth: rnd() * 2 - 0.6, delay: rnd() * 0.35,
    }));
    let raf = 0, last = -1;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight, vw = window.innerWidth, r = root.getBoundingClientRect();
      // 0 as the section enters from below … 1 once its middle reaches the middle of the screen
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.5 + r.height / 2)));
      if (Math.abs(p - last) < 0.001) return;
      last = p;
      letters.forEach((el, i) => {
        const s = scatter[i];
        const t = ease(Math.min(1, Math.max(0, (p - s.delay) / 0.65)));
        if (t >= 1) { el.style.transform = ''; el.style.filter = ''; el.style.opacity = ''; return; }
        const k = 1 - t;
        const scale = 1 + s.depth * 0.9 * k;
        el.style.transform = `translate3d(${(s.x * vw * 0.5 * k).toFixed(1)}px, ${(s.y * vh * 0.6 * k).toFixed(1)}px, 0) rotate(${(s.r * k).toFixed(1)}deg) scale(${scale.toFixed(3)})`;
        el.style.filter = touch ? '' : `blur(${(Math.abs(s.depth) * 9 * k).toFixed(1)}px)`;
        el.style.opacity = (0.35 + 0.65 * t).toFixed(3);
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, [language]);

  return (
    <div className="w-full overflow-x-clip">
      <section ref={section} className="py-24 md:py-48 px-6 md:px-12 max-w-5xl mx-auto flex flex-col justify-center min-h-[50vh]">
        <div className="text-2xl md:text-4xl font-light leading-relaxed tracking-tight">
          {LINES.map(({ key, className }) => {
            const text = TEXTS.manifesto[key][language];
            return (
              <p key={key} className={className} aria-label={text}>
                {text.split(' ').map((word, w) => (
                  <React.Fragment key={w}>
                    <span aria-hidden className="inline-block whitespace-nowrap">
                      {[...word].map((ch, c) => <span key={c} data-l className="inline-block">{ch}</span>)}
                    </span>{' '}
                  </React.Fragment>
                ))}
              </p>
            );
          })}
        </div>
      </section>
    </div>
  );
};

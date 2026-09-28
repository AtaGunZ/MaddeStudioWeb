import React, { useEffect, useRef } from 'react';
import { TEXTS } from '../constants';
import { Language } from '../types';

interface ManifestoProps {
  language: Language;
}

// The manifesto waits slightly scattered and blurred, and when it comes into view it slowly
// gathers into place, once. Each letter sits a little off its spot (a short offset and tilt) and
// settles at its own moment; the blur lifts last. Everything runs on CSS transitions, so the
// browser animates it on the compositor with no per-frame script, which keeps phones smooth.
// Blur: on desktop every letter has its own random amount; on touch screens each paragraph is
// blurred as a whole (three filters instead of ~180, which is what phones choke on).
// Reduced motion shows the text set.

const LINES: { key: 'p1' | 'p2' | 'p3'; className: string }[] = [
  { key: 'p1', className: 'mb-8' },
  { key: 'p2', className: 'mb-8 md:pl-24 text-madde-black/60 dark:text-madde-white/60' },
  { key: 'p3', className: 'md:pl-48 text-madde-gray dark:text-gray-400' },
];

const MOVE = 3.2;     // s, how long each letter takes to settle
const STAGGER = 1.2;  // s, spread of the letters' start times

export const Manifesto: React.FC<ManifestoProps> = ({ language }) => {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = section.current!;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const letters = Array.from(root.querySelectorAll('[data-l]')) as HTMLElement[];
    const paras = Array.from(root.querySelectorAll('p')) as HTMLElement[];
    const touch = window.matchMedia('(hover: none)').matches;
    let seed = 7;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };

    // the waiting state: a light scatter
    const plan = letters.map(el => {
      const s = { x: (rnd() - 0.5) * 56, y: (rnd() - 0.5) * 40, r: (rnd() - 0.5) * 24, delay: rnd() * STAGGER, blur: 2 + rnd() * 6 };
      el.style.transform = `translate(${s.x.toFixed(1)}px, ${s.y.toFixed(1)}px) rotate(${s.r.toFixed(1)}deg)`;
      el.style.opacity = '0.35';
      if (!touch) el.style.filter = `blur(${s.blur.toFixed(1)}px)`;
      return s;
    });
    if (touch) paras.forEach(p => { p.style.filter = 'blur(5px)'; });

    let done = 0;
    const settle = () => {
      letters.forEach((el, i) => {
        const d = plan[i].delay;
        el.style.transition = `transform ${MOVE}s cubic-bezier(.25,.1,.25,1) ${d.toFixed(2)}s, opacity ${MOVE * 0.8}s ease ${d.toFixed(2)}s, filter ${MOVE * 0.9}s ease ${(d + MOVE * 0.35).toFixed(2)}s`;
      });
      paras.forEach(p => { p.style.transition = `filter ${MOVE + STAGGER}s ease ${(MOVE * 0.3).toFixed(2)}s`; });
      // next frame, so the transitions start from the waiting state
      requestAnimationFrame(() => requestAnimationFrame(() => {
        letters.forEach(el => { el.style.transform = ''; el.style.opacity = ''; el.style.filter = ''; });
        paras.forEach(p => { p.style.filter = ''; });
      }));
      // tidy up once everything has landed
      done = window.setTimeout(() => {
        letters.forEach(el => { el.style.transition = ''; });
        paras.forEach(p => { p.style.transition = ''; });
      }, (MOVE + STAGGER + MOVE * 0.4) * 1000 + 200);
    };

    // play once, as the text reaches a little above the bottom third of the screen
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      settle();
    }, { rootMargin: '0px 0px -30% 0px' });
    io.observe(root.firstElementChild as HTMLElement);

    return () => {
      io.disconnect(); window.clearTimeout(done);
      letters.forEach(el => { el.style.transform = ''; el.style.opacity = ''; el.style.filter = ''; el.style.transition = ''; });
      paras.forEach(p => { p.style.filter = ''; p.style.transition = ''; });
    };
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

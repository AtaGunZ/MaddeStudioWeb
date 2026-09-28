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

// gentle at both ends: letters leave their scattered spots slowly and settle slowly, no snap
const easeSine = (t: number) => 0.5 - 0.5 * Math.cos(Math.PI * t);

export const Manifesto: React.FC<ManifestoProps> = ({ language }) => {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = section.current!;
    const letters = Array.from(root.querySelectorAll('[data-l]')) as HTMLElement[];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const touch = window.matchMedia('(hover: none)').matches;
    const narrow = window.innerWidth < 768;
    let seed = 7;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    // depth > 0 comes towards the viewer (bigger, blurrier), < 0 falls behind
    const scatter = letters.map(() => ({
      x: (rnd() - 0.5) * 1.2, y: (rnd() - 0.5) * 0.9, r: (rnd() - 0.5) * 70,
      depth: rnd() * 2 - 0.6, delay: rnd() * 0.25,
      blur: (2 + rnd() * 10) * (touch ? 0.5 : 1),   // each letter its own amount of blur while scattered
    }));
    // p follows the scroll with a soft lag, so wheel steps glide instead of jumping
    let raf = 0, p = -1, drawn = -1;
    const last: string[] = letters.map(() => '');   // the filter each letter was last given
    const text = root.firstElementChild as HTMLElement;
    const target = () => {
      const vh = window.innerHeight, r = text.getBoundingClientRect();
      // a long, slow gather: starts while the text's middle is still well below the screen and is
      // fully set only when that middle reaches 67% of the height (55% on phones, where the text is taller)
      const c = (r.top + r.height / 2) / vh;
      const end = narrow ? 0.55 : 0.67, start = end + 0.75;
      return Math.min(1, Math.max(0, (start - c) / (start - end)));
    };
    const render = () => {
      const vh = window.innerHeight, vw = window.innerWidth;
      letters.forEach((el, i) => {
        const s = scatter[i];
        const u = Math.min(1, Math.max(0, (p - s.delay) / (1 - s.delay)));   // every letter lands at p = 1
        if (u >= 1) {
          if (last[i] !== 'done') { el.style.transform = ''; el.style.filter = ''; el.style.opacity = ''; el.style.willChange = ''; last[i] = 'done'; }
          return;
        }
        const k = 1 - easeSine(u);
        const scale = 1 + s.depth * 0.9 * k;
        const sx = narrow ? 0.35 : 0.5, sy = narrow ? 0.35 : 0.6;   // phones: a tighter scatter
        el.style.transform = `translate3d(${(s.x * vw * sx * k).toFixed(1)}px, ${(s.y * vh * sy * k).toFixed(1)}px, 0) rotate(${(s.r * k).toFixed(1)}deg) scale(${scale.toFixed(3)})`;
        // blurred at full strength while scattered; the blur only starts to lift in the second half of
        // the letter's travel and clears slowly, reaching sharp as the letter lands
        const clear = easeSine(Math.min(1, Math.max(0, (u - 0.5) / 0.5)));
        // phones: the blur moves in 2px steps and is only written when it changes, so each letter is
        // re-rasterised a handful of times instead of every frame (the moving layer itself is cached)
        const b = touch ? Math.round((s.blur * (1 - clear)) / 2) * 2 : s.blur * (1 - clear);
        const f = `blur(${touch ? b : b.toFixed(2)}px)`;
        if (last[i] !== f) { el.style.filter = f; last[i] = f; if (touch) el.style.willChange = 'transform'; }
        // phones: letters fade in from nothing, so no loose pile waits at the bottom of the screen
        el.style.opacity = (narrow ? Math.min(1, u * 1.6) : 0.35 + 0.65 * (1 - k)).toFixed(3);
      });
      drawn = p;
    };
    const tick = () => {
      raf = 0;
      const goal = target();
      p = p < 0 ? goal : p + (goal - p) * 0.14;
      if (Math.abs(goal - p) < 0.0008) p = goal;
      if (Math.abs(p - drawn) > 0.0004) render();
      if (p !== goal) raf = requestAnimationFrame(tick);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    tick();
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

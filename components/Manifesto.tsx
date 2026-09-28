import React, { useEffect, useRef } from 'react';
import { TEXTS } from '../constants';
import { Language } from '../types';

interface ManifestoProps {
  language: Language;
}

// The manifesto is tied to the scroll: slightly scattered and blurred below, it gathers into
// place as it scrolls up the screen, and scatters again when scrolled back. Each letter sits a
// little off its spot (a short offset and tilt) and has its own moment to settle; the blur lifts
// last. Kept light for phones: letters only move and fade (compositor work), the blur is one
// filter per paragraph (three instead of ~180), and styles are written only when they change.
// Reduced motion shows the text set.

const LINES: { key: 'p1' | 'p2' | 'p3'; className: string }[] = [
  { key: 'p1', className: 'mb-8' },
  { key: 'p2', className: 'mb-8 md:pl-24 text-madde-black/60 dark:text-madde-white/60' },
  { key: 'p3', className: 'md:pl-48 text-madde-gray dark:text-gray-400' },
];

// gentle at both ends: letters leave their spots slowly and settle slowly, no snap
const easeSine = (t: number) => 0.5 - 0.5 * Math.cos(Math.PI * t);

export const Manifesto: React.FC<ManifestoProps> = ({ language }) => {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = section.current!;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const letters = Array.from(root.querySelectorAll('[data-l]')) as HTMLElement[];
    const paras = Array.from(root.querySelectorAll('p')) as HTMLElement[];
    const text = root.firstElementChild as HTMLElement;
    const touch = window.matchMedia('(hover: none)').matches;
    const narrow = window.innerWidth < 768;
    const maxBlur = touch ? 5 : 6;
    let seed = 7;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    // a light scatter: a few dozen px of offset, a small tilt, and each letter's own start
    const plan = letters.map(() => ({ x: (rnd() - 0.5) * 56, y: (rnd() - 0.5) * 40, r: (rnd() - 0.5) * 24, delay: rnd() * 0.35 }));
    const lastT = letters.map(() => ''), lastO = letters.map(() => '');
    let lastBlur = '', layered = false;

    // 0 while the text's middle is well below the screen … 1 once it reaches 67% of the height
    // (55% on phones, where the text is taller): a long stretch of scroll, so the gathering is slow
    const target = () => {
      const r = text.getBoundingClientRect(), c = (r.top + r.height / 2) / window.innerHeight;
      const end = narrow ? 0.55 : 0.67, start = end + 0.6;
      return Math.min(1, Math.max(0, (start - c) / (start - end)));
    };

    // letters get their own layers while the section is near the screen: set up a screen ahead,
    // so the one-off cost of creating ~180 layers never lands in the middle of the gathering
    const near = new IntersectionObserver(([e]) => {
      if (e.isIntersecting === layered) return;
      layered = e.isIntersecting;
      letters.forEach(el => { el.style.willChange = layered ? 'transform, opacity' : ''; });
    }, { rootMargin: '100% 0px' });
    near.observe(root);

    const render = (p: number) => {
      letters.forEach((el, i) => {
        const s = plan[i];
        const u = Math.min(1, Math.max(0, (p - s.delay) / (1 - s.delay)));   // every letter lands at p = 1
        const k = 1 - easeSine(u);
        const t = k < 0.001 ? '' : `translate(${(s.x * k).toFixed(1)}px, ${(s.y * k).toFixed(1)}px) rotate(${(s.r * k).toFixed(1)}deg)`;
        const o = k < 0.001 ? '' : (0.35 + 0.65 * (1 - k)).toFixed(2);
        if (t !== lastT[i]) { el.style.transform = t; lastT[i] = t; }
        if (o !== lastO[i]) { el.style.opacity = o; lastO[i] = o; }
      });
      // the blur holds while the letters travel and lifts over the last part of the scroll
      const clear = easeSine(Math.min(1, Math.max(0, (p - 0.45) / 0.55)));
      const b = Math.round(maxBlur * (1 - clear) * 4) / 4;
      const f = b > 0 ? `blur(${b}px)` : '';
      if (f !== lastBlur) { paras.forEach(el => { el.style.filter = f; }); lastBlur = f; }
    };

    // p follows the scroll with a soft lag, so wheel steps and flicks glide instead of jumping
    let raf = 0, p = -1;
    const tick = () => {
      raf = 0;
      const goal = target();
      p = p < 0 ? goal : p + (goal - p) * 0.12;
      if (Math.abs(goal - p) < 0.001) p = goal;
      render(p);
      if (p !== goal) raf = requestAnimationFrame(tick);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    tick();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf); near.disconnect();
      window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll);
      letters.forEach(el => { el.style.transform = ''; el.style.opacity = ''; el.style.willChange = ''; });
      paras.forEach(el => { el.style.filter = ''; });
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

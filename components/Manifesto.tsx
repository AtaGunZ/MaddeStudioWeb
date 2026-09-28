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

type Scatter = { x: number; y: number; r: number; depth: number; delay: number; blur: number };

// Phones: the same gathering, but played once as a timed animation on one canvas instead of
// ~180 filtered elements following the scroll (too heavy for a phone). Every glyph is drawn once
// into small sprites at three blur levels (the blurred ones at half resolution); each frame only
// places those sprites, cross-fading between two levels for the blur in between. The real text is
// hidden until the letters land, then shown and the canvas removed.
const BLUR_LEVELS = [0, 3, 6];
const DURATION = 3200;   // ms

const playOnCanvas = (root: HTMLElement, letters: HTMLElement[], scatter: Scatter[]) => {
  const wrap = root.parentElement!, text = root.firstElementChild as HTMLElement;
  let raf = 0, cancelled = false, started = false, cv: HTMLCanvasElement | null = null;
  let io: IntersectionObserver | null = null;
  const finish = () => {
    cancelAnimationFrame(raf); io?.disconnect();
    text.style.visibility = ''; cv?.remove(); cv = null;
  };

  document.fonts.ready.then(() => {
    if (cancelled) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const vw = window.innerWidth, vh = window.innerHeight;
    const wr = wrap.getBoundingClientRect(), M = Math.round(vh * 0.4);   // room above and below for the scatter
    // where every letter lands, in canvas coordinates, and how it is drawn
    const spots = letters.map(el => {
      const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
      return { ch: el.textContent ?? '', cx: r.left - wr.left + r.width / 2, cy: r.top - wr.top + M + r.height / 2, w: r.width, h: r.height,
        font: `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`, color: cs.color };
    });

    // sprites, shared by identical glyphs
    const cache = new Map<string, HTMLCanvasElement[]>();
    const sprite = (s: typeof spots[number]) => {
      const key = `${s.ch}|${s.font}|${s.color}`;
      let set = cache.get(key);
      if (set) return set;
      set = BLUR_LEVELS.map(level => {
        const scale = level ? dpr * 0.5 : dpr, pad = level * 3 + 2;
        const c = document.createElement('canvas');
        c.width = Math.ceil((s.w + pad * 2) * scale); c.height = Math.ceil((s.h + pad * 2) * scale);
        const g = c.getContext('2d')!;
        g.scale(scale, scale);
        g.font = s.font; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = s.color;
        if (level) {
          // blur through a shadow thrown in from far off the sprite (canvas filters are missing on older Safari)
          const off = 2000;
          g.shadowColor = s.color; g.shadowBlur = level * 2 * scale; g.shadowOffsetX = off * scale;
          g.fillText(s.ch, pad + s.w / 2 - off, pad + s.h / 2);
        } else g.fillText(s.ch, pad + s.w / 2, pad + s.h / 2);
        return c;
      });
      cache.set(key, set);
      return set;
    };
    const sprites = spots.map(sprite);

    cv = document.createElement('canvas');
    cv.setAttribute('aria-hidden', 'true');
    Object.assign(cv.style, { position: 'absolute', left: '0', top: `${-M}px`, width: `${wr.width}px`, height: `${wr.height + M * 2}px`, pointerEvents: 'none' });
    cv.width = Math.round(wr.width * dpr); cv.height = Math.round((wr.height + M * 2) * dpr);
    wrap.style.position = 'relative';
    wrap.appendChild(cv);
    text.style.visibility = 'hidden';
    const ctx = cv.getContext('2d')!;

    const draw = (t: number) => {
      ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, cv!.width, cv!.height);
      spots.forEach((s, i) => {
        const sc = scatter[i], u = Math.min(1, Math.max(0, (t - sc.delay) / (1 - sc.delay)));
        const k = 1 - easeSine(u);
        const clear = easeSine(Math.min(1, Math.max(0, (u - 0.5) / 0.5)));
        const blur = Math.min(BLUR_LEVELS[2], sc.blur * (1 - clear));
        const lo = blur >= BLUR_LEVELS[1] ? 1 : 0, f = (blur - BLUR_LEVELS[lo]) / (BLUR_LEVELS[lo + 1] - BLUR_LEVELS[lo]);
        const alpha = Math.min(1, u * 1.6 + 0.25);
        const scale = 1 + sc.depth * 0.9 * k;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.translate(s.cx + sc.x * vw * 0.35 * k, s.cy + sc.y * vh * 0.35 * k);
        ctx.rotate((sc.r * k * Math.PI) / 180);
        ctx.scale(scale, scale);
        for (const [lvl, a] of [[lo, 1 - f], [lo + 1, f]] as const) {
          if (a < 0.01) continue;
          const img = sprites[i][lvl], pad = BLUR_LEVELS[lvl] * 3 + 2;
          ctx.globalAlpha = alpha * a;
          ctx.drawImage(img, -s.w / 2 - pad, -s.h / 2 - pad, s.w + pad * 2, s.h + pad * 2);
        }
      });
      ctx.globalAlpha = 1;
    };

    draw(0);   // the scattered state waits, drawn once, until the text comes into view
    // play once the text's middle is a little into the screen
    io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || started) return;
      started = true; io?.disconnect();
      const t0 = performance.now();
      const frame = (now: number) => {
        const t = Math.min(1, (now - t0) / DURATION);
        draw(t);
        if (t < 1) raf = requestAnimationFrame(frame); else finish();
      };
      raf = requestAnimationFrame(frame);
    }, { rootMargin: '0px 0px -30% 0px' });
    io.observe(text);
    window.addEventListener('resize', finish, { once: true });   // a rotated phone just shows the text
  });

  return () => { cancelled = true; window.removeEventListener('resize', finish); finish(); };
};

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
    if (touch) return playOnCanvas(root, letters, scatter);   // phones: a timed canvas animation, see above
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

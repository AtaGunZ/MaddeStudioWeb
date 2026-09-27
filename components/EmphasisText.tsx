import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

// Emphasis ripples across the words with a short horizontal blur, like the Studio disciplines,
// but sizes stay fixed so the row never grows
const BLUR_MS = 420, BLUR_MAX = 3;
// Key words: names, numbers and longer words; the small connecting words stay quiet
const isKey = (w: string) => /\d/.test(w) || /^[A-ZÇĞİÖŞÜ]/.test(w.replace(/^[^\p{L}\d]+/u, '')) || w.replace(/[^\p{L}]/gu, '').length >= 8;

export const EmphasisText: React.FC<{ text: string; active: boolean; id: string; className?: string }> = ({ text, active, id, className }) => {
  const reduce = useReducedMotion();
  const box = useRef<HTMLParagraphElement>(null);
  const blur = useRef<SVGFEGaussianBlurElement>(null);
  const first = useRef(true);
  const words = text.split(' ');

  useEffect(() => {
    const el = box.current, b = blur.current;
    if (first.current || reduce || !el || !b) { first.current = false; return; }
    let frame = 0; const start = performance.now();
    el.style.filter = `url(#${id})`;
    const tick = (now: number) => {
      const t = Math.min((now - start) / BLUR_MS, 1), k = (1 - t) ** 3;
      b.setAttribute('stdDeviation', `${(BLUR_MAX * k).toFixed(2)} 0`);
      el.style.opacity = String(1 - 0.3 * k);
      if (t < 1) frame = requestAnimationFrame(tick); else el.style.filter = 'none';
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, reduce, id]);

  return (
    <>
      <svg width="0" height="0" className="absolute" aria-hidden>
        <filter id={id}><feGaussianBlur ref={blur} stdDeviation="0 0" /></filter>
      </svg>
      <p ref={box} className={`flex flex-wrap items-baseline gap-x-[0.28em] leading-snug ${className ?? 'max-w-md text-base'}`} aria-label={text}>
        {words.map((w, i) => {
          const on = active && isKey(w);
          return (
            // Each word reserves the width of its bold form, so emphasis never reflows the row
            <span key={i} aria-hidden className="inline-grid whitespace-nowrap">
              <span className="invisible font-semibold [grid-area:1/1]">{w}</span>
              <span
                className={`[grid-area:1/1] transition-[color,transform,font-weight] duration-500 ${on
                  ? 'font-semibold text-madde-black dark:text-white -translate-y-px'
                  : active
                    ? 'text-madde-black/60 dark:text-white/60'
                    : 'text-madde-gray dark:text-gray-400'}`}
                style={{ transitionTimingFunction: 'cubic-bezier(.22,1,.36,1)', transitionDelay: active ? `${Math.min(i, 20) * 18}ms` : '0ms' }}
              >
                {w}
              </span>
            </span>
          );
        })}
      </p>
    </>
  );
};

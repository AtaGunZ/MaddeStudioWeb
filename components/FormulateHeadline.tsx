import React, { useEffect, useRef } from 'react';
import { Language } from '../types';

// "We formulate ideas into reality." set as the studio's idea → matter.
// The idea word is hollow (outline only) and fills where the pointer passes, like a thought
// taking form; the reality word forms last, filling left to right. Letters near the pointer
// lift slightly. Without a pointer (touch), a slow wave keeps filling the idea word.

const WORDS: Record<Language, { text: string; role?: 'idea' | 'real' }[]> = {
  [Language.EN]: [{ text: 'We' }, { text: 'formulate' }, { text: 'ideas', role: 'idea' }, { text: 'into' }, { text: 'reality.', role: 'real' }],
  [Language.TR]: [{ text: 'Fikirleri', role: 'idea' }, { text: 'gerçeğe', role: 'real' }, { text: 'formüle' }, { text: 'ediyoruz.' }],
};

const CSS = `
.fh{--ink:10,10,10;}
.dark .fh{--ink:250,250,250;}
.fh-c{display:inline-block;will-change:transform;
  color:rgba(var(--ink),var(--f,1));-webkit-text-stroke:0 transparent;
  transform:translateY(calc(var(--lift,0) * -0.08em)) scale(calc(1 + var(--lift,0) * .04));
  opacity:0;filter:blur(8px);translate:0 .35em;
  transition:opacity .9s cubic-bezier(.22,1,.36,1), filter .9s cubic-bezier(.22,1,.36,1), translate .9s cubic-bezier(.22,1,.36,1);}
.fh-c[data-role="idea"],.fh-c[data-role="real"]{-webkit-text-stroke:.018em rgba(var(--ink),1);}
.fh-in .fh-c{opacity:1;filter:blur(0);translate:0 0;}
.fh-note{font-family:ui-monospace,monospace;letter-spacing:.14em;text-transform:uppercase;}
@media (prefers-reduced-motion: reduce){.fh-c{transition:none;filter:none;translate:0 0;opacity:1;}}
`;

export const FormulateHeadline: React.FC<{ language: Language; className?: string }> = ({ language, className }) => {
  const root = useRef<HTMLHeadingElement>(null);
  const words = WORDS[language];

  useEffect(() => {
    const h = root.current!;
    const chars = [...h.querySelectorAll<HTMLSpanElement>('.fh-c')];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;

    // entrance: letters settle one by one; the idea word stays hollow, reality fills last
    chars.forEach((c, i) => { c.style.transitionDelay = reduce ? '0ms' : `${i * 28}ms`; });
    const inTimer = window.setTimeout(() => h.classList.add('fh-in'), 60);
    const t0 = performance.now();
    const realStart = (reduce ? 0 : chars.length * 28 + 500);

    const pointer = { x: -9999, y: -9999, on: false };
    const onMove = (e: PointerEvent) => { pointer.x = e.clientX; pointer.y = e.clientY; pointer.on = true; };
    const onLeave = () => { pointer.on = false; };
    if (fine) { window.addEventListener('pointermove', onMove); document.addEventListener('pointerleave', onLeave); }

    const state = chars.map(() => ({ fill: 0, lift: 0 }));
    let raf = 0, visible = true;
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; });
    io.observe(h);

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      const t = now - t0;
      const size = parseFloat(getComputedStyle(h).fontSize);
      const radius = size * 1.6;
      const realIdx = chars.filter(c => c.dataset.role === 'real');
      chars.forEach((c, i) => {
        const role = c.dataset.role;
        const r = c.getBoundingClientRect();
        const d = Math.hypot(pointer.x - (r.left + r.width / 2), pointer.y - (r.top + r.height / 2));
        const near = pointer.on ? Math.max(0, 1 - d / radius) : 0;
        const s = state[i];
        let fillTarget = 1;
        if (role === 'idea') {
          // hollow; fills under the pointer, or with a slow travelling wave when there is none
          const wave = fine ? 0 : Math.max(0, Math.sin(t / 900 - i * 0.55)) ** 3;
          fillTarget = Math.max(near ** 0.7, wave);
        } else if (role === 'real') {
          // forms after the entrance, left to right, then stays solid
          const k = realIdx.indexOf(c);
          fillTarget = reduce ? 1 : Math.min(1, Math.max(0, (t - realStart - k * 90) / 420));
        }
        s.fill += (fillTarget - s.fill) * (role === 'real' ? 0.35 : 0.12);
        s.lift += (near - s.lift) * 0.14;
        c.style.setProperty('--f', role ? s.fill.toFixed(3) : '1');
        c.style.setProperty('--lift', reduce ? '0' : s.lift.toFixed(3));
      });
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf); io.disconnect(); window.clearTimeout(inTimer);
      window.removeEventListener('pointermove', onMove); document.removeEventListener('pointerleave', onLeave);
      h.classList.remove('fh-in');
    };
  }, [language]);

  return (
    <>
      <style>{CSS}</style>
      <h1 ref={root} key={language} className={`fh ${className ?? ''}`} aria-label={words.map(w => w.text).join(' ')}>
        {words.map((w, wi) => (
          <span key={wi} aria-hidden className="inline-block whitespace-nowrap mr-[0.22em]">
            {[...w.text].map((ch, ci) => (
              <span key={ci} className="fh-c" data-role={w.role}>{ch}</span>
            ))}
          </span>
        ))}
      </h1>
    </>
  );
};

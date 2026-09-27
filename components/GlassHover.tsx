import React, { useEffect, useRef } from 'react';

// A pane of frosted glass that appears over its parent on hover: a hairline rim, a corner
// glint and a soft light that trails the pointer. The parent needs the "group" class and
// position:relative; whatever sits behind it (a faded project image) shows through blurred.
const CSS = `
.wk-glass{position:absolute;inset:0;z-index:0;pointer-events:none;opacity:0;transition:opacity .6s ease;
  background:linear-gradient(135deg, rgba(255,255,255,.10), rgba(255,255,255,.02) 45%, rgba(255,255,255,.05));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.35), inset 0 -1px 0 rgba(255,255,255,.08), inset 1px 0 0 rgba(255,255,255,.10), inset -1px 0 0 rgba(255,255,255,.06);}
.wk-glass::before{content:'';position:absolute;inset:0;
  background:radial-gradient(circle 240px at var(--x,50%) var(--y,50%), rgba(255,255,255,.07), rgba(255,255,255,0) 70%);}
.wk-glass::after{content:'';position:absolute;inset:0;
  background:linear-gradient(125deg, rgba(255,255,255,.18) 0%, rgba(255,255,255,0) 18%),
             linear-gradient(305deg, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 12%);}
html:not(.dark) .wk-glass{background:linear-gradient(135deg, rgba(255,255,255,.55), rgba(255,255,255,.25) 45%, rgba(255,255,255,.4));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.9), inset 0 -1px 0 rgba(0,0,0,.05);}
@media (hover:hover) and (pointer:fine){ .group:hover > .wk-glass{opacity:1;backdrop-filter:blur(14px) saturate(140%);-webkit-backdrop-filter:blur(14px) saturate(140%);} }
@media (prefers-reduced-motion: reduce){ .wk-glass{transition:none;} }
`;

let injected = false;
const injectCSS = () => {
  if (injected || typeof document === 'undefined') return;
  const s = document.createElement('style'); s.textContent = CSS; document.head.appendChild(s); injected = true;
};

export const GlassHover: React.FC<{ className?: string }> = ({ className }) => {
  const glass = useRef<HTMLDivElement>(null);

  useEffect(() => {
    injectCSS();
    const el = glass.current!, row = el.parentElement!;
    if (!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    let raf = 0;
    const target = { x: 0, y: 0 }, pos = { x: 0, y: 0 };
    const loop = () => {
      pos.x += (target.x - pos.x) * 0.1; pos.y += (target.y - pos.y) * 0.1;   // the light trails the pointer
      el.style.setProperty('--x', `${pos.x}px`); el.style.setProperty('--y', `${pos.y}px`);
      raf = Math.hypot(target.x - pos.x, target.y - pos.y) > 0.5 ? requestAnimationFrame(loop) : 0;
    };
    const set = (e: PointerEvent, jump = false) => {
      const r = row.getBoundingClientRect();
      target.x = e.clientX - r.left; target.y = e.clientY - r.top;
      if (jump) { pos.x = target.x; pos.y = target.y; }
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const onEnter = (e: PointerEvent) => set(e, true);
    const onMove = (e: PointerEvent) => set(e);
    row.addEventListener('pointerenter', onEnter);
    row.addEventListener('pointermove', onMove);
    return () => { cancelAnimationFrame(raf); row.removeEventListener('pointerenter', onEnter); row.removeEventListener('pointermove', onMove); };
  }, []);

  return <div ref={glass} className={`wk-glass ${className ?? ''}`} aria-hidden />;
};

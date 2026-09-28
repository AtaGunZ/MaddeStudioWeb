import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Faint outline shapes behind the listing pages (home, Studio, Works, Fragments). The layer runs the
// full length of the page and every stretch of it gets its own shape (rings, a ring within a ring,
// the logo's square with its dot, arcs, a long diagonal), sized and placed differently, so nothing
// repeats as the page scrolls. The home hero keeps its original pair of rings at the top.
// Sits behind everything (z -10, above the page colour); sections must not paint their own background.

const PAGES = new Set(['/', '/studio', '/works', '/fragments']);
const STEP = 900;   // px of page per shape

type Kind = 'ring' | 'double' | 'square' | 'arc' | 'line';
const KINDS: Kind[] = ['ring', 'square', 'arc', 'double', 'line'];

const Shape: React.FC<{ kind: Kind; size: number; x: number; y: number; rot: number }> = ({ kind, size, x, y, rot }) => {
  const box: React.CSSProperties = { position: 'absolute', left: `${x}%`, top: y, width: `${size}vw`, height: `${size}vw`, transform: `translate(-50%, -50%) rotate(${rot}deg)` };
  if (kind === 'ring') return <div style={box} className="border border-black/5 dark:border-white/10 rounded-full" />;
  if (kind === 'double') return (
    <div style={box} className="border border-black/5 dark:border-white/10 rounded-full">
      <div className="absolute inset-[18%] border border-black/5 dark:border-white/10 rounded-full" />
    </div>
  );
  if (kind === 'square') return (
    <div style={{ ...box, width: `${size * 0.6}vw`, height: `${size * 0.6}vw` }} className="border border-black/5 dark:border-white/10">
      <div className="absolute left-0 bottom-0 w-1/3 h-1/3 -translate-x-1/2 translate-y-1/2 border border-black/5 dark:border-white/10 rounded-full" />
    </div>
  );
  if (kind === 'arc') return <div style={box} className="border-t border-l border-black/5 dark:border-white/10 rounded-full" />;
  return <div style={{ position: 'absolute', left: '-10%', top: y, width: '120%', height: 1, transform: `rotate(${rot / 6}deg)` }} className="bg-black/5 dark:bg-white/10" />;
};

export const BackgroundRings: React.FC = () => {
  const { pathname } = useLocation();
  const on = PAGES.has(pathname.replace(/\/+$/, '') || '/');
  const layer = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // the layer fills the page container (inset 0); its height decides how many shapes it needs
  useEffect(() => {
    const el = layer.current?.parentElement;
    if (!on || !el) return;
    const measure = () => setHeight(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [on, pathname]);

  if (!on) return null;

  // one shape per stretch, from a fixed seed: kinds cycle without neighbours ever matching,
  // sides alternate, sizes and angles vary
  let seed = 11;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  const home = pathname === '/' || pathname === '';
  const first = home ? 1 : 0;   // the home hero has its own pair of rings in the first screen
  const shapes = Array.from({ length: Math.max(0, Math.ceil(height / STEP) - first) }, (_, i) => {
    const kind = KINDS[(i * 3 + Math.floor(rnd() * 2)) % KINDS.length];
    const left = i % 2 === 0;
    return {
      kind, size: 35 + rnd() * 45,
      x: left ? 5 + rnd() * 25 : 70 + rnd() * 25,
      y: (i + first) * STEP + STEP * (0.3 + rnd() * 0.5),
      rot: (rnd() - 0.5) * 60,
    };
  });

  return (
    <div ref={layer} aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {home && (
        <>
          <div className="absolute -right-[20vw] -top-[20vw] w-[80vw] h-[80vw] border border-black/5 dark:border-white/10 rounded-full" />
          <div className="absolute -left-[15vw] top-[calc(100vh-45vw)] w-[60vw] h-[60vw] border border-black/5 dark:border-white/10 rounded-full" />
        </>
      )}
      {shapes.map((s, i) => <Shape key={i} {...s} />)}
    </div>
  );
};

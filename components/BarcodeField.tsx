import React, { useEffect, useRef } from 'react';

// Barcode cards standing on a floor line (the canvas bottom), reaching up to the top of the
// field. They drop in from above one by one and settle without bouncing, and afterwards drift up now and then at random and sink
// back down. Equal length, varied widths, low opacity, each with a faint edge like a card.
// Paused off-screen; drawn once, resting, for reduced motion.

type Bar = {
  x: number; w: number; alpha: number;
  y: number; v: number; target: number;   // lift above the floor in px (0 = resting)
  k: number; c: number;                    // spring stiffness / damping for the current move
  next: number;                            // time of the next drift (s)
};

export const BarcodeField: React.FC<{ dark: boolean; className?: string }> = ({ dark, className }) => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const darkRef = useRef(dark);
  useEffect(() => { darkRef.current = dark; }, [dark]);

  useEffect(() => {
    const cv = canvas.current!;
    const ctx = cv.getContext('2d')!;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let bars: Bar[] = [], W = 0, H = 0, L = 0, raf = 0, visible = true, last = performance.now();
    const t0 = performance.now();
    const ptr = { x: -1, on: false };
    const onMove = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      ptr.on = e.clientY >= Math.max(0, r.top) && e.clientY <= r.bottom && e.clientX >= r.left && e.clientX <= r.right;
      ptr.x = e.clientX - r.left;
    };
    const onLeave = () => { ptr.on = false; };
    window.addEventListener('pointermove', onMove);
    document.addEventListener('pointerleave', onLeave);
    let seed = 23;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };

    const build = (entrance: boolean) => {
      const dpr = 1;   // flat, faint bars: a 1x buffer keeps a full-width, 140vh canvas cheap
      W = cv.clientWidth; H = cv.clientHeight; L = H;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      bars = [];
      seed = 23;
      // ten broad bars edge to edge (six on phones): varied widths, a clearly visible tone each
      const N = W < 640 ? 6 : 10;
      const widths = Array.from({ length: N }, () => [0.45, 0.8, 1.2, 1.8][Math.floor(rnd() * 4)]);
      const scale = W / widths.reduce((a, v) => a + v, 0);
      let x = 0;
      for (let i = 0; i < N; i++) {
        const w = i === N - 1 ? Math.ceil(W - x) : Math.round(widths[i] * scale);
        const start = entrance && !reduce ? H + 40 + rnd() * H * 0.6 : 0;
        bars.push({
          x, w, alpha: 0.05 + rnd() * 0.025,
          y: start, v: 0, target: 0, k: 60, c: 11,
          // entrance: staggered at random, so the cards land one after another
          next: entrance ? 0.2 + rnd() * 2.4 : 4 + rnd() * 10,
        });
        x += w;
      }
      // hold every card above the field until its drop time
      if (entrance && !reduce) bars.forEach(b => { b.target = b.y; });
    };

    const step = (t: number, dt: number) => {
      for (const b of bars) {
        if (t >= b.next) {
          if (b.target > 0 && b.y > L * 0.9) {           // drop in (entrance)
            b.target = 0; b.k = 3.2 + rnd() * 1.6; b.c = 2 * Math.sqrt(b.k);
            b.next = t + 6 + rnd() * 8;
          } else if (b.target === 0) {                    // drift up a little…
            b.target = L * (0.05 + rnd() * 0.22); b.k = 0.6 + rnd() * 0.5; b.c = 2 * Math.sqrt(b.k);
            b.next = t + 3.5 + rnd() * 3;
          } else {                                        // …and sink back smoothly
            b.target = 0; b.k = 0.9 + rnd() * 0.6; b.c = 2 * Math.sqrt(b.k);
            b.next = t + 5 + rnd() * 10;
          }
        }
        // the pointer lifts the bar under it; neighbours follow a little
        const cx = b.x + b.w / 2;
        const near = ptr.on ? Math.max(0, 1 - Math.abs(ptr.x - cx) / (b.w * 0.5 + W * 0.08)) : 0;
        const goal = Math.max(b.target, near * near * L * 0.18);
        const k = near > 0.01 ? Math.max(b.k, 2.2) : b.k;
        // critically damped spring: fluid, no bounce
        const a = k * (goal - b.y) - 2 * Math.sqrt(k) * b.v;
        b.v += a * dt; b.y += b.v * dt;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const ink = darkRef.current ? '250,250,250' : '10,10,10';
      for (const b of bars) {
        const top = H - L - b.y;
        if (top > H) continue;
        ctx.fillStyle = `rgba(${ink},${b.alpha.toFixed(3)})`;
        ctx.fillRect(b.x, top, b.w, L);
        ctx.fillStyle = `rgba(${ink},${(b.alpha * 1.6).toFixed(3)})`;   // card edge
        ctx.fillRect(b.x, top, Math.max(1, Math.min(3, b.w * 0.02)), L);
      }
    };

    let lastInk = '';
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(1 / 30, (now - last) / 1000); last = now;
      if (!visible) return;
      step((now - t0) / 1000, dt);
      const ink = darkRef.current ? 'd' : 'l';
      const moving = ink !== lastInk || bars.some(b => Math.abs(b.v) > 0.05 || Math.abs(b.target - b.y) > 0.3);
      if (moving) { draw(); lastInk = ink; }
    };

    build(true);
    if (reduce) draw(); else raf = requestAnimationFrame(frame);
    let first = true;
    const ro = new ResizeObserver(() => { if (first) { first = false; return; } build(false); if (reduce) draw(); });
    ro.observe(cv);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; last = performance.now(); });
    io.observe(cv);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); window.removeEventListener('pointermove', onMove); document.removeEventListener('pointerleave', onLeave); };
  }, []);

  return <canvas ref={canvas} aria-hidden className={className} />;
};

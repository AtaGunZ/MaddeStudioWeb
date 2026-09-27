import React, { useEffect, useRef } from 'react';

// Liquid glass cards hanging from the top of the field down to a floor line (the canvas bottom).
// They drop in one by one and settle without bouncing, drift up now and then at random and sink
// back down. Each card is a pane of glass: bright rims, a rounded tip that stretches with speed
// like a drop, and light gathered at the tip. Where a card hangs, the hero image shows in colour
// (the `tint` element is clipped to the cards). A click sends a card up fast; it then glides down slowly.
// Paused off-screen; drawn once, resting, for reduced motion.

type Bar = {
  x: number; w: number; alpha: number;
  y: number; v: number; target: number;   // lift above the floor in px (0 = resting)
  k: number;                               // spring stiffness for the current move
  next: number;                            // time of the next move (s)
  kick: boolean;                           // clicked: rising now, gliding back next
};

const NOTHING = 'polygon(0 0, 0 0, 0 0)';

export const BarcodeField: React.FC<{ dark: boolean; className?: string; tint?: React.RefObject<HTMLElement> }> = ({ dark, className, tint }) => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const darkRef = useRef(dark);
  useEffect(() => { darkRef.current = dark; }, [dark]);

  useEffect(() => {
    const cv = canvas.current!;
    const ctx = cv.getContext('2d')!;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let bars: Bar[] = [], W = 0, H = 0, L = 0, raf = 0, visible = true, dirty = true, last = performance.now();
    const t0 = performance.now();
    const now = () => (performance.now() - t0) / 1000;
    const ptr = { x: -1, on: false };
    const onMove = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      ptr.on = e.pointerType === 'mouse' && e.clientY >= Math.max(0, r.top) && e.clientY <= r.bottom && e.clientX >= r.left && e.clientX <= r.right;
      ptr.x = e.clientX - r.left;
    };
    const onLeave = () => { ptr.on = false; };
    // a click on a card (not on a link or button above it) sends it up
    const onDown = (e: MouseEvent) => {   // click, not pointerdown: a finger starting a scroll is not a tap
      if ((e.target as Element | null)?.closest?.('a,button,[role=link],input,textarea')) return;
      const r = cv.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const b = bars.find(b => x >= b.x && x < b.x + b.w);
      if (!b || y < 0 || y > H - b.y) return;
      // up to near the top of what is on screen, so the card stays in sight
      const top = Math.max(0, -r.top) + 70;
      b.kick = true; b.target = Math.max(b.y, H - top - (H - top) * 0.12); b.k = 26; b.next = now() + 0.55;
    };
    const onScroll = () => { dirty = true; if (reduce) requestAnimationFrame(draw); };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('click', onDown);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    let seed = 23;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };

    const build = (entrance: boolean) => {
      const dpr = 1;   // soft glass: a 1x buffer keeps a full-width, 140vh canvas cheap
      W = cv.clientWidth; H = cv.clientHeight; L = H;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      bars = [];
      seed = 23;
      // ten broad cards edge to edge (six on phones), varied widths
      const N = W < 640 ? 6 : 10;
      const widths = Array.from({ length: N }, () => [0.45, 0.8, 1.2, 1.8][Math.floor(rnd() * 4)]);
      const scale = W / widths.reduce((a, v) => a + v, 0);
      let x = 0;
      for (let i = 0; i < N; i++) {
        const w = i === N - 1 ? Math.ceil(W - x) : Math.round(widths[i] * scale);
        const start = entrance && !reduce ? H + 40 + rnd() * H * 0.6 : 0;
        bars.push({
          x, w, alpha: 0.05 + rnd() * 0.025,
          y: start, v: 0, target: 0, k: 60, kick: false,
          // entrance: staggered at random, so the cards land one after another
          next: entrance ? 0.2 + rnd() * 2.4 : 4 + rnd() * 10,
        });
        x += w;
      }
      // hold every card above the field until its drop time
      if (entrance && !reduce) bars.forEach(b => { b.target = b.y; });
      dirty = true;
    };

    const step = (t: number, dt: number) => {
      for (const b of bars) {
        if (t >= b.next) {
          if (b.kick) {                                   // after a click: glide back down, slowly
            b.kick = false; b.target = 0; b.k = 0.32;
            b.next = t + 9 + rnd() * 6;
          } else if (b.target > 0 && b.y > L * 0.9) {     // drop in (entrance)
            b.target = 0; b.k = 3.2 + rnd() * 1.6;
            b.next = t + 6 + rnd() * 8;
          } else if (b.target === 0) {                    // drift up a little…
            b.target = L * (0.05 + rnd() * 0.22); b.k = 0.6 + rnd() * 0.5;
            b.next = t + 3.5 + rnd() * 3;
          } else {                                        // …and sink back smoothly
            b.target = 0; b.k = 0.9 + rnd() * 0.6;
            b.next = t + 5 + rnd() * 10;
          }
        }
        // the pointer lifts the card under it; neighbours follow a little
        const cx = b.x + b.w / 2;
        const near = ptr.on ? Math.max(0, 1 - Math.abs(ptr.x - cx) / (b.w * 0.5 + W * 0.08)) : 0;
        const goal = Math.max(b.target, near * near * L * 0.18);
        const k = near > 0.01 && b.y < goal ? Math.max(b.k, 2.2) : b.k;
        // critically damped spring: fluid, no bounce
        const a = k * (goal - b.y) - 2 * Math.sqrt(k) * b.v;
        b.v += a * dt; b.y += b.v * dt;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const ink = darkRef.current ? '250,250,250' : '10,10,10';
      const rgba = (a: number) => `rgba(${ink},${Math.min(1, a).toFixed(3)})`;
      const cr = cv.getBoundingClientRect();
      const el = tint?.current, er = el?.getBoundingClientRect();
      const dx = er ? cr.left - er.left : 0, dy = er ? cr.top - er.top : 0;
      // the tinted image is slightly magnified (a lens): map the outline back into its unscaled box
      const s = el && el.offsetWidth ? er!.width / el.offsetWidth : 1;
      let clip = '';
      for (const b of bars) {
        // the outline: straight sides, rounded tip corners and a belly that hangs lower the
        // faster the card rises (the liquid lags behind), flattening as it sinks
        const x0 = b.x, x1 = b.x + b.w, w = b.w, bottom = H - b.y, r = Math.min(16, w / 4);
        if (bottom < -40) continue;
        const belly = Math.max(-4, Math.min(w * 0.28, 5 + b.v * 0.035)), tip = bottom + belly;
        const tipPath = (c: Path2D | CanvasRenderingContext2D) => {
          c.quadraticCurveTo(x1, bottom, x1 - r, bottom);
          c.bezierCurveTo(x0 + w * 0.68, tip, x0 + w * 0.32, tip, x0 + r, bottom);
          c.quadraticCurveTo(x0, bottom, x0, bottom - r);
        };
        const p = new Path2D();
        p.moveTo(x0, -2); p.lineTo(x1, -2); p.lineTo(x1, bottom - r); tipPath(p); p.closePath();
        const a = b.alpha;
        // glass body: bright at the rims, clear in the middle
        const g = ctx.createLinearGradient(x0, 0, x1, 0);
        g.addColorStop(0, rgba(a * 3)); g.addColorStop(0.06, rgba(a * 1.3)); g.addColorStop(0.5, rgba(a * 0.7));
        g.addColorStop(0.94, rgba(a * 1.1)); g.addColorStop(1, rgba(a * 2.4));
        ctx.fillStyle = g; ctx.fill(p);
        // light gathered in the tip
        ctx.save(); ctx.clip(p);
        const tg = ctx.createLinearGradient(0, bottom - 110, 0, tip);
        tg.addColorStop(0, rgba(0)); tg.addColorStop(1, rgba(a * 2.2));
        ctx.fillStyle = tg; ctx.fillRect(x0, bottom - 110, w, 112 + Math.max(0, belly));
        ctx.restore();
        // specular rim along the left edge and around the tip
        ctx.fillStyle = rgba(a * 3.2); ctx.fillRect(x0, 0, 1, Math.max(0, bottom - r));
        ctx.beginPath(); ctx.moveTo(x1, bottom - r); tipPath(ctx);
        ctx.strokeStyle = rgba(a * 5); ctx.lineWidth = 1.5; ctx.stroke();
        if (el) {
          const X = (v: number) => ((v + dx) / s).toFixed(1), Y = (v: number) => ((v + dy) / s).toFixed(1);
          clip += `M${X(x0)} ${Y(-2)}L${X(x1)} ${Y(-2)}L${X(x1)} ${Y(bottom - r)}Q${X(x1)} ${Y(bottom)} ${X(x1 - r)} ${Y(bottom)}`
            + `C${X(x0 + w * 0.68)} ${Y(tip)} ${X(x0 + w * 0.32)} ${Y(tip)} ${X(x0 + r)} ${Y(bottom)}Q${X(x0)} ${Y(bottom)} ${X(x0)} ${Y(bottom - r)}Z`;
        }
      }
      // the hero image turns to colour inside the cards
      if (el) el.style.clipPath = clip ? `path('${clip}')` : NOTHING;
      dirty = false;
    };

    let lastInk = '';
    const frame = (t: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(1 / 30, (t - last) / 1000); last = t;
      if (!visible) return;
      step(now(), dt);
      const ink = darkRef.current ? 'd' : 'l';
      const moving = ink !== lastInk || bars.some(b => Math.abs(b.v) > 0.05 || Math.abs(b.target - b.y) > 0.3);
      if (moving || dirty) { draw(); lastInk = ink; }
    };

    build(true);
    if (reduce) draw(); else raf = requestAnimationFrame(frame);
    let first = true;
    const ro = new ResizeObserver(() => { if (first) { first = false; return; } build(false); if (reduce) draw(); });
    ro.observe(cv);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting; last = performance.now(); dirty = true;
      if (!visible && tint?.current) tint.current.style.clipPath = NOTHING;   // off-screen: no colour left behind
      else if (reduce) draw();
    });
    io.observe(cv);
    return () => {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      window.removeEventListener('pointermove', onMove); window.removeEventListener('click', onDown);
      window.removeEventListener('scroll', onScroll); document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas ref={canvas} aria-hidden className={className} />;
};

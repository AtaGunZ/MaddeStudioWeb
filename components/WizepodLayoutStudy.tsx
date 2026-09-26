import React, { useCallback, useState } from 'react';
import { Language } from '../types';

// Section 08 of the Wizepod page: the e-commerce hero in five frames.
// Ported from the Claude Design file (05_Yerlesim/claude_design, wizepod_layout.dc.html).
// Buttons are part of the study: clicking one only sends a ripple across the frame.

const IMG = '/works/Wizepod_AI/ecom_hero.jpg?v=20260927'; // bump when the image is replaced

const COPY = {
  [Language.EN]: {
    eyebrow: 'Wizepod CGM', hPre: 'Your glucose, ', hEm: 'quietly', hPost: ' in the background.',
    sPre: '', sEm: 'Quietly', sPost: ', in the background.',
    body: 'A small sensor on the upper arm, applied at home with a single press.',
    buy: 'Buy now', how: 'How it works', tag: 'In the box · applicator + sensor', note: '7 cm · one press',
    study: 'Layout study',
  },
  [Language.TR]: {
    eyebrow: 'Wizepod CGM', hPre: 'Şekeriniz, ', hEm: 'sessizce', hPost: ' arka planda.',
    sPre: '', sEm: 'Sessizce', sPost: ', arka planda.',
    body: 'Üst kola takılan küçük bir sensör; evde, tek bir basışla uygulanır.',
    buy: 'Satın al', how: 'Nasıl çalışır', tag: 'Kutuda · aplikatör + sensör', note: '7 cm · tek basış',
    study: 'Yerleşim kılavuzu',
  },
};

const CSS = `
.wz-layout{
  --ink:#1A1A1A; --ink-2:#2E2C29; --green:#97B36C; --page-muted:#8A8782;
  --glass-bg:linear-gradient(160deg, rgba(255,255,255,.16) 0%, rgba(255,255,255,.03) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,.10) 100%);
  --glass-fill-hover:rgba(255,255,255,.34);
  --glass-shadow:0 18px 36px -14px rgba(50,38,30,.28), 0 3px 8px -2px rgba(50,38,30,.08);
  --glass-shadow-hover:0 22px 40px -14px rgba(50,38,30,.32), 0 4px 10px -2px rgba(50,38,30,.10);
  --glass-ease:cubic-bezier(.2,.8,.2,1); --glass-dur:.45s; --glass-blur:4px; --glass-rim-w:1.2px;
  --glass-rim:conic-gradient(from var(--rim-a), rgba(255,255,255,.25) 0deg, rgba(255,255,255,.08) 50deg, rgba(255,255,255,.55) 110deg, rgba(255,255,255,1) 140deg, rgba(255,255,255,.5) 170deg, rgba(255,255,255,.06) 230deg, rgba(255,255,255,.55) 290deg, rgba(255,255,255,1) 318deg, rgba(255,255,255,.5) 345deg, rgba(255,255,255,.25) 360deg);
  --glass-rim-hover:conic-gradient(from var(--rim-a), rgba(255,255,255,.3) 0deg, rgba(151,179,108,.5) 60deg, rgba(255,255,255,1) 140deg, rgba(151,179,108,.4) 230deg, rgba(255,255,255,1) 318deg, rgba(255,255,255,.3) 360deg);
  --glass-highlight:inset 0 0 0 .5px rgba(255,255,255,.18), inset 0 0 12px rgba(255,255,255,.38), inset 3px 4px 3px -2px rgba(255,255,255,.75), inset -3px -4px 3px -2px rgba(255,255,255,.55), inset 0 -10px 18px -12px rgba(255,255,255,.5);
  --serif:'Fraunces', Georgia, serif;
  --guide:rgba(26,26,26,.55); --guide-keepout:rgba(151,179,108,.9);
}
.wz-frame{position:relative;overflow:hidden;border-radius:6px;container-type:inline-size;background:#bdb7b3;color:var(--ink);font-family:Inter,system-ui,sans-serif;}
.wz-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;}
.wz-eyebrow{display:flex;align-items:center;font-weight:500;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-2);}
.wz-dot{border-radius:50%;background:var(--green);flex:none;}
.wz-head{margin:0;font-family:var(--serif);font-weight:300;line-height:1.08;letter-spacing:-.012em;color:var(--ink);text-wrap:balance;font-optical-sizing:auto;}
.wz-head em{font-style:italic;font-weight:300;font-variation-settings:'SOFT' 100;}
.wz-body{margin:0;line-height:1.55;color:var(--ink-2);text-wrap:pretty;}
.wz-glass{position:relative;border-radius:999px;background:var(--glass-bg);
  backdrop-filter:blur(var(--glass-blur)) saturate(160%) brightness(1.08);-webkit-backdrop-filter:blur(var(--glass-blur)) saturate(160%) brightness(1.08);
  box-shadow:var(--glass-highlight), var(--glass-shadow);}
.wz-glass::before{content:'';position:absolute;inset:0;border-radius:inherit;padding:var(--glass-rim-w);background:var(--glass-rim);
  -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);-webkit-mask-composite:xor;
  mask:linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);pointer-events:none;}
.wz-btn{appearance:none;border:0;margin:0;font:inherit;font-weight:500;color:var(--ink);cursor:pointer;display:flex;align-items:center;
  transition:background-color var(--glass-dur) var(--glass-ease), transform var(--glass-dur) var(--glass-ease), box-shadow var(--glass-dur) var(--glass-ease);will-change:transform;}
.wz-btn:hover{background-color:var(--glass-fill-hover);--glass-rim:var(--glass-rim-hover);transform:translateY(-1px) scale(1.03);box-shadow:var(--glass-highlight), var(--glass-shadow-hover);}
.wz-btn:active{transform:translateY(0) scale(.98);transition-duration:.12s;}
.wz-btn:focus-visible{outline:1px solid var(--ink);outline-offset:3px;}
.wz-link{appearance:none;background:none;border:0;margin:0;padding:0;font:inherit;color:var(--ink);cursor:pointer;border-bottom:1px solid rgba(26,26,26,.35);transition:border-color .3s;}
.wz-link:hover{border-bottom-color:var(--green);}
.wz-guides{position:absolute;inset:0;pointer-events:none;font-family:ui-monospace,monospace;letter-spacing:.08em;text-transform:uppercase;color:var(--ink);}
.wz-guides > *{position:absolute;}
.wz-ripple{position:absolute;border-radius:50%;pointer-events:none;transform:translate(-50%,-50%) scale(.06);opacity:0;
  border:1.5px solid rgba(255,255,255,.9);box-shadow:0 0 0 1px rgba(151,179,108,.28), inset 0 0 14px rgba(255,255,255,.35);
  animation:wz-ripple 1.5s cubic-bezier(.2,.7,.2,1) forwards;}
@keyframes wz-ripple{0%{transform:translate(-50%,-50%) scale(.06);opacity:.95;}100%{transform:translate(-50%,-50%) scale(1);opacity:0;}}
@property --rim-a{syntax:'<angle>';inherits:true;initial-value:0deg;}
.wz-btn{animation:wz-rim 8s linear infinite, wz-breathe 5s ease-in-out infinite;}
.wz-liquid{position:absolute;inset:0;border-radius:inherit;overflow:hidden;pointer-events:none;}
.wz-liquid i{position:absolute;top:-35%;height:170%;width:62%;filter:blur(5px);will-change:transform,border-radius;}
.wz-liquid i:nth-child(1){left:-12%;opacity:.7;background:radial-gradient(circle at 45% 45%, rgba(255,255,255,.95), rgba(255,255,255,0) 68%);
  animation:wz-flow-a 7.5s ease-in-out infinite;}
.wz-liquid i:nth-child(2){left:46%;opacity:.55;background:radial-gradient(circle at 50% 55%, rgba(151,179,108,.55), rgba(151,179,108,0) 66%);
  animation:wz-flow-b 9.5s ease-in-out infinite;}
.wz-liquid i:nth-child(3){left:18%;width:40%;opacity:.5;background:radial-gradient(circle at 50% 50%, rgba(255,255,255,.8), rgba(255,255,255,0) 70%);
  animation:wz-flow-c 11s ease-in-out infinite;}
.wz-btn:hover .wz-liquid i{animation-duration:3.8s, 4.8s, 5.5s;}
.wz-label{position:relative;z-index:1;display:inherit;align-items:inherit;gap:inherit;}
@keyframes wz-rim{to{--rim-a:360deg;}}
@keyframes wz-flow-a{0%,100%{transform:translate(0,0) rotate(0deg) scale(1);border-radius:42% 58% 63% 37% / 45% 40% 60% 55%;}
  33%{transform:translate(55%,6%) rotate(35deg) scale(1.18,.92);border-radius:62% 38% 35% 65% / 55% 62% 38% 45%;}
  66%{transform:translate(22%,-8%) rotate(-18deg) scale(.9,1.1);border-radius:36% 64% 55% 45% / 62% 34% 66% 38%;}}
@keyframes wz-flow-b{0%,100%{transform:translate(0,0) rotate(0deg) scale(1);border-radius:55% 45% 40% 60% / 40% 58% 42% 60%;}
  40%{transform:translate(-60%,-6%) rotate(-30deg) scale(1.15,.9);border-radius:38% 62% 60% 40% / 60% 42% 58% 40%;}
  75%{transform:translate(-25%,8%) rotate(20deg) scale(.92,1.08);border-radius:64% 36% 45% 55% / 45% 60% 40% 55%;}}
@keyframes wz-flow-c{0%,100%{transform:translate(0,4%) scale(1);border-radius:50% 50% 45% 55% / 55% 45% 55% 45%;}
  50%{transform:translate(90%,-4%) scale(1.25,.85);border-radius:40% 60% 58% 42% / 45% 58% 42% 55%;}}
@keyframes wz-breathe{0%,100%{box-shadow:var(--glass-highlight), var(--glass-shadow);}50%{box-shadow:inset 0 0 0 .5px rgba(255,255,255,.25), inset 0 0 16px rgba(255,255,255,.5), inset -3px 4px 3px -2px rgba(255,255,255,.8), inset 3px -4px 3px -2px rgba(255,255,255,.6), inset 0 -10px 18px -12px rgba(255,255,255,.55), var(--glass-shadow);}}
.wz-btn:hover{animation-play-state:running;}
@media (prefers-reduced-motion: reduce){.wz-ripple{animation-duration:.01s;}.wz-btn,.wz-liquid i{animation:none;transition:none;}}
`;

type Ripple = { id: number; x: number; y: number };
let rippleId = 0;

// Click on any [data-ripple] element inside the frame: rings spread from the button's center.
const Frame: React.FC<{ aspect: string; pos: string; label: string; ringSize: string; className?: string; style?: React.CSSProperties; children?: React.ReactNode }> = ({ aspect, pos, label, ringSize, className, style, children }) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const onClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const btn = (e.target as HTMLElement).closest('[data-ripple]');
    if (!btn) return;
    e.preventDefault();
    const f = e.currentTarget.getBoundingClientRect();
    const b = btn.getBoundingClientRect();
    const x = ((b.left + b.width / 2 - f.left) / f.width) * 100;
    const y = ((b.top + b.height / 2 - f.top) / f.height) * 100;
    const base = ++rippleId * 10;
    setRipples(r => [...r, { id: base, x, y }, { id: base + 1, x, y }, { id: base + 2, x, y }]);
  }, []);
  return (
    <section aria-label={label} onClick={onClick} className={`wz-frame ${aspect} ${className ?? ''}`} style={style}>
      <img src={IMG} alt="" className="wz-img" style={{ objectPosition: pos }} />
      {children}
      {ripples.map(r => (
        <span
          key={r.id}
          className="wz-ripple"
          style={{ left: `${r.x}%`, top: `${r.y}%`, width: ringSize, height: ringSize, animationDelay: `${(r.id % 10) * 0.16}s` }}
          onAnimationEnd={() => setRipples(rs => rs.filter(x => x.id !== r.id))}
        />
      ))}
    </section>
  );
};

// Slow liquid light moving inside the glass, so the button reads as interactive without a click
const Liquid: React.FC = () => <span className="wz-liquid" aria-hidden><i /><i /><i /></span>;

const Crosshair: React.FC<{ x: string; y: string; size?: number }> = ({ x, y, size = 22 }) => (
  <div style={{ left: x, top: y, width: size, height: size, margin: `-${size / 2}px 0 0 -${size / 2}px` }}>
    <div style={{ position: 'absolute', left: size / 2 - 0.5, top: 0, width: 1, height: size, background: 'var(--ink)' }} />
    <div style={{ position: 'absolute', top: size / 2 - 0.5, left: 0, height: 1, width: size, background: 'var(--ink)' }} />
    <div style={{ position: 'absolute', left: size / 2 - 3, top: size / 2 - 3, width: 6, height: 6, border: '1px solid var(--ink)', borderRadius: '50%', background: 'var(--green)' }} />
  </div>
);

const Cap: React.FC<{ a: string; b: string }> = ({ a, b }) => (
  <figcaption className="mt-2 flex flex-col gap-1 font-mono text-[11px] uppercase tracking-widest text-madde-gray dark:text-gray-400">
    <span className="text-madde-black dark:text-madde-white">{a}</span><span>{b}</span>
  </figcaption>
);

export const WizepodLayoutStudy: React.FC<{ language: Language }> = ({ language }) => {
  const c = COPY[language];
  const [guides, setGuides] = useState(false);
  const H = (pre: string, em: string, post: string) => <>{pre}<em>{em}</em>{post}</>;

  return (
    <div className="wz-layout">
      <style>{CSS}</style>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setGuides(g => !g)}
          aria-pressed={guides}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full border border-black/15 dark:border-white/15 font-mono text-[11px] uppercase tracking-widest"
        >
          <span className="w-[7px] h-[7px] rounded-full" style={{ background: guides ? '#97B36C' : '#8A8782' }} />{c.study}
        </button>
      </div>

      {/* 01 DESKTOP */}
      <figure className="mt-4">
        <Frame aspect="aspect-video" pos="50% 70%" label="Desktop 16:9" ringSize="46cqw">
          <div style={{ position: 'absolute', left: 0, top: '2%', width: '58%', height: '40%', background: 'radial-gradient(ellipse at 30% 50%, rgba(255,255,255,.28), rgba(255,255,255,0) 65%)', filter: 'blur(2cqw)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', left: '6%', top: '9%', width: '52%', display: 'flex', flexDirection: 'column', gap: '1.3cqw' }}>
            <span className="wz-eyebrow" style={{ fontSize: '.95cqw', gap: '.7cqw' }}><span className="wz-dot" style={{ width: '.5cqw', height: '.5cqw' }} />{c.eyebrow}</span>
            <h3 className="wz-head" style={{ fontSize: '4.2cqw' }}>{H(c.hPre, c.hEm, c.hPost)}</h3>
          </div>
          <div style={{ position: 'absolute', left: '62%', top: '14.5%', width: '30%', display: 'flex', flexDirection: 'column', gap: '1.8cqw', alignItems: 'flex-start' }}>
            <p className="wz-body" style={{ fontSize: '1.3cqw' }}>{c.body}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.8cqw', fontSize: '1.1cqw' }}>
              <button type="button" data-ripple className="wz-glass wz-btn" style={{ gap: '.7cqw', padding: '1.15cqw 2.5cqw' }}><Liquid /><span className="wz-label">{c.buy}</span></button>
              <button type="button" data-ripple className="wz-link" style={{ paddingBottom: '.2cqw' }}>{c.how}</button>
            </div>
          </div>
          <div className="wz-glass" style={{ position: 'absolute', left: '62%', top: '33%', display: 'flex', alignItems: 'center', gap: '.6cqw', padding: '.55cqw 1.2cqw', fontSize: '.9cqw', color: 'var(--ink-2)', letterSpacing: '.02em' }}>
            <span className="wz-dot" style={{ width: '.45cqw', height: '.45cqw' }} />{c.tag}
          </div>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            <path d="M 23.5 51.8 Q 29.5 51.5 31.6 58.5" fill="none" stroke="#1A1A1A" strokeOpacity=".6" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          </svg>
          <span className="wz-dot" style={{ position: 'absolute', left: '31.6%', top: '58.5%', width: '.5cqw', height: '.5cqw', margin: '-.25cqw 0 0 -.25cqw' }} />
          <span style={{ position: 'absolute', right: '77%', top: '50.4%', fontFamily: 'ui-monospace,monospace', fontSize: '.85cqw', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-2)', whiteSpace: 'nowrap' }}>{c.note}</span>
          {guides && (
            <div className="wz-guides" style={{ fontSize: 9 }}>
              <div style={{ left: '4%', right: '4%', top: '4%', bottom: '4%', border: '1px solid var(--guide)', borderRadius: 4 }} />
              <span style={{ right: '4.4%', bottom: '4.6%' }}>safe area · 4%</span>
              <div style={{ left: '4%', right: '4%', top: 0, height: '40%', borderBottom: '1px dashed var(--guide)' }} />
              <span style={{ right: '4.4%', top: '36.8%' }}>headline zone · 0–40%</span>
              <div style={{ left: '30%', top: '53%', width: '16%', height: '38%', border: '1px dotted var(--guide-keepout)', borderRadius: 6 }} />
              <span style={{ left: '30%', top: '91.5%' }}>keep clear · applicator + disc</span>
              <div style={{ left: '71.5%', top: '57.5%', width: '18%', height: '26%', border: '1px dotted var(--guide-keepout)', borderRadius: 6 }} />
              <span style={{ left: '71.5%', top: '84.2%' }}>keep clear · box</span>
              <Crosshair x="36%" y="71.2%" size={26} />
              <span style={{ left: '37%', top: '72.4%' }}>focal 36 / 71</span>
            </div>
          )}
        </Frame>
        <Cap a="01 · Desktop hero · 16:9" b="object-position 50% 70%" />
      </figure>

      <div className="mt-12 md:mt-16 flex flex-wrap gap-8 md:gap-10 items-start">
        {/* 02 MOBILE */}
        <figure style={{ width: 'min(320px,100%)' }}>
          <Frame aspect="aspect-[9/16]" pos="27.6% 50%" label="Mobile 9:16" ringSize="150cqw">
            <div style={{ position: 'absolute', left: '-10%', top: '2%', width: '120%', height: '40%', background: 'radial-gradient(ellipse at 40% 45%, rgba(255,255,255,.26), rgba(255,255,255,0) 65%)', filter: 'blur(6cqw)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', left: '8%', top: '8%', width: '84%', display: 'flex', flexDirection: 'column', gap: '4cqw', alignItems: 'flex-start' }}>
              <span className="wz-eyebrow" style={{ fontSize: '3.2cqw', gap: '2cqw' }}><span className="wz-dot" style={{ width: '1.6cqw', height: '1.6cqw' }} />{c.eyebrow}</span>
              <h3 className="wz-head" style={{ fontSize: '10cqw' }}>{H(c.hPre, c.hEm, c.hPost)}</h3>
              <p className="wz-body" style={{ fontSize: '4.1cqw' }}>{c.body}</p>
              <button type="button" data-ripple className="wz-link" style={{ fontSize: '4.1cqw', paddingBottom: '.6cqw' }}>{c.how}</button>
            </div>
            <button type="button" data-ripple className="wz-glass wz-btn" style={{ position: 'absolute', left: '6%', right: '6%', bottom: '6%', height: '13.5cqw', minHeight: 48, justifyContent: 'center', gap: '2cqw', fontSize: '4.3cqw' }}>
              <Liquid />
              <span className="wz-label"><span className="wz-dot" style={{ width: '1.6cqw', height: '1.6cqw' }} />{c.buy}</span>
            </button>
            {guides && (
              <div className="wz-guides" style={{ fontSize: 8 }}>
                <div style={{ left: '5%', right: '5%', top: '5%', height: '40%', border: '1px dashed var(--guide)', borderRadius: 4 }} />
                <span style={{ right: '6%', top: '45.6%' }}>headline zone</span>
                <div style={{ left: '35%', top: '55.5%', width: '41%', height: '31.5%', border: '1px dotted var(--guide-keepout)', borderRadius: 6 }} />
                <span style={{ left: '6%', top: '55.5%' }}>keep clear</span>
                <div style={{ left: 0, right: 0, bottom: 0, height: '6%', borderTop: '1px solid var(--guide)', background: 'repeating-linear-gradient(45deg, rgba(26,26,26,.10) 0 1px, transparent 1px 6px)' }} />
                <span style={{ left: '6%', bottom: '1.8%' }}>safe area · 6%</span>
                <Crosshair x="50%" y="71%" />
              </div>
            )}
          </Frame>
          <Cap a="02 · Mobile · 9:16" b="object-position 27.6% 50%" />
        </figure>

        {/* 03 FEED */}
        <figure style={{ width: 'min(380px,100%)' }}>
          <Frame aspect="aspect-[4/5]" pos="20% 50%" label="Feed 4:5" ringSize="120cqw">
            <div style={{ position: 'absolute', left: '7%', top: '8%', width: '80%', display: 'flex', flexDirection: 'column', gap: '3cqw' }}>
              <span className="wz-eyebrow" style={{ fontSize: '2.6cqw', gap: '1.4cqw' }}><span className="wz-dot" style={{ width: '1.3cqw', height: '1.3cqw' }} />{c.eyebrow}</span>
              <h3 className="wz-head" style={{ fontSize: '8.5cqw' }}>{H(c.sPre, c.sEm, c.sPost)}</h3>
            </div>
            {guides && (
              <div className="wz-guides" style={{ fontSize: 8 }}>
                <div style={{ left: '5%', right: '5%', top: '5%', bottom: '5%', border: '1px solid var(--guide)', borderRadius: 4 }} />
                <div style={{ left: '5%', right: '5%', top: '5%', height: '30%', border: '1px dashed var(--guide)', borderRadius: 4 }} />
                <span style={{ right: '6%', top: '35.8%' }}>headline zone</span>
                <div style={{ left: '39%', top: '55.5%', width: '31%', height: '31.5%', border: '1px dotted var(--guide-keepout)', borderRadius: 6 }} />
                <Crosshair x="50%" y="71%" />
                <span style={{ right: '6%', bottom: '5.8%' }}>safe area · 5%</span>
              </div>
            )}
          </Frame>
          <Cap a="03 · Feed · 4:5" b="object-position 20% 50%" />
        </figure>

        {/* 04 GRID */}
        <figure style={{ width: 'min(340px,100%)' }}>
          <Frame aspect="aspect-square" pos="8% 50%" label="Grid 1:1" ringSize="120cqw">
            <div className="wz-glass" style={{ position: 'absolute', left: '7%', top: '7%', display: 'flex', alignItems: 'center', gap: '1.8cqw', padding: '2cqw 4cqw', fontSize: '3.4cqw', fontWeight: 500, letterSpacing: '.14em', textTransform: 'uppercase' }}>
              <span className="wz-dot" style={{ width: '1.6cqw', height: '1.6cqw' }} />{c.eyebrow}
            </div>
            {guides && (
              <div className="wz-guides" style={{ fontSize: 8 }}>
                <div style={{ left: '5%', right: '5%', top: '5%', bottom: '5%', border: '1px solid var(--guide)', borderRadius: 4 }} />
                <div style={{ left: '5%', width: '50%', top: '5%', height: '16%', border: '1px dashed var(--guide)', borderRadius: 4 }} />
                <span style={{ right: '6%', top: '6%' }}>tag zone</span>
                <div style={{ left: '41%', top: '55.5%', width: '26%', height: '31.5%', border: '1px dotted var(--guide-keepout)', borderRadius: 6 }} />
                <Crosshair x="50%" y="71%" />
              </div>
            )}
          </Frame>
          <Cap a="04 · Grid · 1:1" b="object-position 8% 50%" />
        </figure>

        {/* 05 THUMB */}
        <figure style={{ width: 160 }}>
          <Frame aspect="" pos="8% 50%" label="Thumbnail 160 px" ringSize="120cqw" style={{ width: 160, height: 160 }}>
            {guides && (
              <div className="wz-guides">
                <div style={{ left: '6%', right: '6%', top: '6%', bottom: '6%', border: '1px solid var(--guide)', borderRadius: 3 }} />
                <Crosshair x="50%" y="71%" size={16} />
              </div>
            )}
          </Frame>
          <Cap a="05 · Thumb · 160px" b={language === Language.EN ? 'image only' : 'yalnızca görsel'} />
        </figure>
      </div>
    </div>
  );
};

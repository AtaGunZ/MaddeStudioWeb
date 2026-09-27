import React, { useEffect, useRef, useState } from 'react';
import { PROJECTS, TEXTS } from '../constants';
import { Language, Project } from '../types';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { GlassHover } from './GlassHover';

interface WorksProps {
  language: Language;
}


// Emphasis ripples across the words with a short horizontal blur, like the Studio disciplines,
// but sizes stay fixed so the row never grows
const BLUR_MS = 420, BLUR_MAX = 3;
// Key words: names, numbers and longer words; the small connecting words stay quiet
const isKey = (w: string) => /\d/.test(w) || /^[A-ZÇĞİÖŞÜ]/.test(w.replace(/^[^\p{L}\d]+/u, '')) || w.replace(/[^\p{L}]/gu, '').length >= 8;

const Description: React.FC<{ text: string; active: boolean; id: string }> = ({ text, active, id }) => {
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
      <p ref={box} className="max-w-md flex flex-wrap items-baseline gap-x-[0.28em] text-base leading-snug" aria-label={text}>
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

const WorkRow: React.FC<{ project: Project; language: Language; onOpen: () => void }> = ({ project, language, onOpen }) => {
  const [hover, setHover] = useState(false);


  return (
    <div
      className="group relative border-b border-gray-200 dark:border-gray-800 last:border-b-0 cursor-pointer"
      onClick={onOpen}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Background Image Fade In on Hover (Desktop) */}
      <div className={`hidden lg:block fixed inset-0 z-0 pointer-events-none transition-opacity duration-700 opacity-0 group-hover:opacity-20 ${project.heroFit === 'contain' ? 'bg-neutral-900 dark:bg-black' : ''}`}>
        <img src={project.image} alt="" style={{ objectPosition: project.heroPosition }} className={`w-full h-full ${project.heroFit === 'contain' ? 'object-contain p-24' : 'object-cover grayscale'}`} />
      </div>

      <GlassHover className="hidden lg:block" />

      <div className="relative z-10 px-6 md:px-12 py-12 md:py-24 flex flex-col md:flex-row md:items-end justify-between bg-transparent">
        <div className="mb-6 md:mb-0">
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 group-hover:translate-x-4 transition-transform duration-500">
            {project.title}
          </h3>
          <Description text={project.description[language]} active={hover} id={`wk-blur-${project.id}`} />
        </div>

        <div className="overflow-hidden">
          <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 font-mono text-xs uppercase tracking-widest">
            {language === Language.EN ? 'More' : 'Daha Fazlası'} &rarr;
          </div>
        </div>
      </div>

      {/* Mobile Image */}
      <div className={`lg:hidden w-full h-64 overflow-hidden ${project.heroFit === 'contain' ? 'bg-neutral-900 dark:bg-black' : ''}`}>
        <img src={project.image} alt={project.title} style={{ objectPosition: project.heroPosition }} className={`w-full h-full ${project.heroFit === 'contain' ? 'object-contain p-8' : 'object-cover'}`} />
      </div>
    </div>
  );
};

export const Works: React.FC<WorksProps> = ({ language }) => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="px-6 md:px-12 mb-16">
        <h2 className="text-sm font-bold uppercase tracking-widest">
          {TEXTS.works.title[language]}
        </h2>
      </div>

      <div className="flex flex-col">
        {PROJECTS.slice(0, 3).map((project) => (
          <WorkRow key={project.id} project={project} language={language} onOpen={() => navigate(`/works/${project.id}`)} />
        ))}
      </div>

      <div className="flex justify-end px-6 md:px-12 mt-8">
        <button onClick={() => navigate('/works')} className="group flex items-center gap-4">
          <span className="text-lg font-medium group-hover:text-madde-gray transition-colors uppercase tracking-widest text-sm">
            {language === Language.EN ? 'More' : 'Daha Fazlası'}
          </span>
          <div className="h-px w-12 bg-gray-300 dark:bg-gray-700 relative overflow-hidden">
            <motion.div className="absolute top-0 left-0 h-full w-full bg-current -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </div>
          <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
        </button>
      </div>
    </section>
  );
};

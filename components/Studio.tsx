import React, { useEffect, useState } from 'react';
import { LayoutGroup, motion, useReducedMotion } from 'framer-motion';
import { Language } from '../types';
import { TEXTS, SERVICES, TEAM } from '../constants';

interface StudioProps {
  language: Language;
}

// Skills with their associated disciplines (some overlap)
// Format: { en, tr, categories[] }
const ALL_SKILLS = [
  { en: '3D Modeling', tr: '3D Modelleme', categories: ['realisticVis', 'dynamicMotion'] },
  { en: '3D Rendering', tr: '3D Render', categories: ['realisticVis'] },
  { en: 'Animation', tr: 'Animasyon', categories: ['dynamicMotion', 'storyProcess'] },
  { en: 'Architectural Visualization', tr: 'Mimari Görselleştirme', categories: ['realisticVis'] },
  { en: 'Art Direction', tr: 'Sanat Yönetmenliği', categories: ['storyProcess', 'realisticVis'] },
  { en: 'Brand Strategy', tr: 'Marka Stratejisi', categories: ['storyProcess'] },
  { en: 'Concept Development', tr: 'Konsept Geliştirme', categories: ['storyProcess', 'dynamicMotion'] },
  { en: 'Creative Direction', tr: 'Yaratıcı Yönetmenlik', categories: ['storyProcess'] },
  { en: 'Kinetic Typography', tr: 'Kinetik Tipografi', categories: ['dynamicMotion'] },
  { en: 'Lighting Design', tr: 'Aydınlatma Tasarımı', categories: ['realisticVis', 'dynamicMotion'] },
  { en: 'Material Design', tr: 'Malzeme Tasarımı', categories: ['realisticVis'] },
  { en: 'Motion Graphics', tr: 'Motion Graphics', categories: ['dynamicMotion'] },
  { en: 'Photorealistic CGI', tr: 'Fotorealistik CGI', categories: ['realisticVis'] },
  { en: 'Product Visualization', tr: 'Ürün Görselleştirme', categories: ['realisticVis'] },
  { en: 'Storyboarding', tr: 'Storyboard', categories: ['storyProcess', 'dynamicMotion'] },
  { en: 'UI/UX Design', tr: 'UI/UX Tasarım', categories: ['storyProcess'] },
  { en: 'VFX', tr: 'VFX', categories: ['dynamicMotion', 'realisticVis'] },
  { en: 'Video Production', tr: 'Video Prodüksiyon', categories: ['dynamicMotion'] },
  { en: 'Visual Effects', tr: 'Görsel Efektler', categories: ['dynamicMotion'] },
];

// Emphasis of a skill: 2 = primary for the hovered card, 1 = related, 0 = unrelated
const getSkillLevel = (categories: string[], hovered: string | null): number => {
  if (!hovered) return categories.length > 1 ? 1 : 0;
  if (categories[0] === hovered) return 2;
  return categories.includes(hovered) ? 1 : 0;
};

// Words slide into their new size and place; a horizontal blur smears them while they move
const SKILL_MOVE_MS = 550;
const SKILL_EASE = [0.22, 1, 0.36, 1] as const;

const SKILL_LEVEL_CLASSES = [
  'text-[11px] md:text-xs font-light text-madde-gray dark:text-zinc-500',
  'text-sm md:text-base font-medium text-madde-black/80 dark:text-white/80',
  'text-xl md:text-2xl font-semibold text-madde-black dark:text-white',
];

export const Studio: React.FC<StudioProps> = ({ language }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const hoveredIndex = ['realisticVis', 'dynamicMotion', 'storyProcess'].indexOf(hoveredCard ?? '');
  const skillsLabel = hoveredIndex >= 0 ? SERVICES[hoveredIndex].title[language] : TEXTS.studio.allDisciplines[language];
  const reduceMotion = useReducedMotion();
  const [skillsMoving, setSkillsMoving] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    setSkillsMoving(true);
    const timer = window.setTimeout(() => setSkillsMoving(false), SKILL_MOVE_MS);
    return () => window.clearTimeout(timer);
  }, [hoveredCard, reduceMotion]);

  // Map service index to category
  const getCategoryFromIndex = (index: number): string => {
    const categories = ['realisticVis', 'dynamicMotion', 'storyProcess'];
    return categories[index] || '';
  };

  return (
    <motion.div
      key="studio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-madde-white dark:bg-madde-black text-madde-black dark:text-madde-white"
    >
      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col px-6 md:px-12 overflow-hidden">
        {/* Background Forms (Subtle) - Similar to Landing Page with added Square */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-5 dark:opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute -right-1/4 -top-1/4 w-[80vw] h-[80vw] border border-current rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
            className="absolute -left-1/4 -bottom-1/4 w-[60vw] h-[60vw] border border-current rounded-full"
          />
          {/* Additional rotating square */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] border border-current"
          />
        </div>

        {/* Centered Text */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="w-full max-w-[1920px] mx-auto">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none max-w-5xl"
            >
              {TEXTS.studio.hero[language]}
            </motion.h1>
          </div>
        </div>

        {/* Scroll Indicator - Same as Landing Page */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="pb-8 flex justify-center animate-bounce"
        >
          <div className="w-px h-12 bg-current" />
        </motion.div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-32 md:py-48 px-6 md:px-12 border-t border-black/10 dark:border-white/10">
        <div className="max-w-[1920px] mx-auto">

          {/* Section title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter mb-20 md:mb-32"
          >
            {TEXTS.studio.philosophyTitle[language]}
          </motion.h2>

          {/* Paragraphs — centered, fade in one by one */}
          <div className="flex flex-col items-center space-y-10 md:space-y-14">
            {(TEXTS.studio as any).philosophyBlocks.map((block: any, index: number) => {
              const isLast = index === (TEXTS.studio as any).philosophyBlocks.length - 1;

              return (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-5%' }}
                  transition={{ duration: 1.4, ease: 'easeInOut' }}
                  className={
                    isLast
                      ? 'text-sm md:text-base font-light italic text-center opacity-40 max-w-md'
                      : 'text-sm md:text-base leading-[1.85] text-madde-gray dark:text-gray-400 font-light text-center max-w-2xl'
                  }
                >
                  {block[language]}
                </motion.p>
              );
            })}
          </div>

        </div>
      </section>


      {/* DISCIPLINES SECTION - Redesigned */}
      <section className="py-32 md:py-48 px-6 md:px-12 border-t border-black/10 dark:border-white/10">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

            {/* Left Side - Title and Skills */}
            <div className="lg:col-span-5">
              {/* Big Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter mb-16"
              >
                {TEXTS.studio.disciplines[language]}
              </motion.h2>

              {/* Skills List — words re-type and resize for the hovered card */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <svg width="0" height="0" className="absolute" aria-hidden="true">
                  <filter id="skill-motion-blur">
                    <feGaussianBlur stdDeviation="3 0" />
                  </filter>
                </svg>
                <p className="text-sm font-bold mb-4">{skillsLabel}:</p>
                <LayoutGroup>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 min-h-[14rem]">
                    {ALL_SKILLS.map((skill, index) => {
                      const level = getSkillLevel(skill.categories, hoveredCard);
                      return (
                        <motion.span
                          key={index}
                          layout
                          transition={{ layout: { duration: reduceMotion ? 0 : SKILL_MOVE_MS / 1000, ease: SKILL_EASE } }}
                          style={{
                            filter: skillsMoving ? 'url(#skill-motion-blur)' : 'none',
                            opacity: skillsMoving ? 0.75 : 1,
                          }}
                          className={`leading-snug whitespace-nowrap cursor-default transition-[color,opacity] duration-500 ${SKILL_LEVEL_CLASSES[level]}`}
                        >
                          {language === Language.EN ? skill.en : skill.tr}
                        </motion.span>
                      );
                    })}
                  </div>
                </LayoutGroup>
              </motion.div>
            </div>

            {/* Right Side - Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {SERVICES.map((service, index) => {
                  const category = getCategoryFromIndex(index);
                  const isHovered = hoveredCard === category;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      onMouseEnter={() => setHoveredCard(category)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className="relative h-[400px] md:h-[500px] overflow-hidden cursor-pointer group"
                    >
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-cover transition-all duration-700"
                        style={{
                          backgroundImage: `url(${service.image})`,
                          backgroundPosition: index === 0 ? '50% 40%' : 'center',
                          filter: isHovered ? 'grayscale(0%) brightness(1)' : 'grayscale(100%) brightness(0.7)',
                          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                        }}
                      />

                      {/* Overlay */}
                      <div
                        className="absolute inset-0 transition-all duration-500"
                        style={{
                          background: isHovered
                            ? 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
                            : 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%)',
                        }}
                      />

                      {/* Content */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                        <motion.span
                          className="text-xs font-mono uppercase tracking-widest mb-2 opacity-70"
                          animate={{ y: isHovered ? -10 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          0{index + 1}
                        </motion.span>

                        <motion.h3
                          className="text-2xl md:text-3xl font-bold tracking-tight mb-3"
                          animate={{ y: isHovered ? -10 : 0 }}
                          transition={{ duration: 0.3, delay: 0.05 }}
                        >
                          {service.title[language]}
                        </motion.h3>

                        <motion.p
                          className="text-xs font-mono uppercase tracking-widest opacity-60"
                          animate={{
                            y: isHovered ? -10 : 0,
                            opacity: isHovered ? 1 : 0.6,
                          }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {service.process[language]}
                        </motion.p>

                        {/* Hover indicator line */}
                        <motion.div
                          className="mt-4 h-px bg-white"
                          initial={{ width: 0 }}
                          animate={{ width: isHovered ? '100%' : '0%' }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TEAM SECTION - Unified */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-t border-black/10 dark:border-white/10">
        <div className="max-w-[1920px] mx-auto">
          {/* Top Section: Title (Left) and Leads (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">

            {/* Left: Title */}
            <div className="lg:col-span-3">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter mb-12 lg:mb-0"
              >
                {TEXTS.studio.team[language]}
              </motion.h2>
            </div>

            {/* Right: Leads (Partners) */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {TEAM.filter(m => m.isLead).map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group"
                  >
                    <div className="aspect-square mb-6 bg-gray-100 dark:bg-gray-800 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                      <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                    </div>

                    <h3 className="text-xl font-medium mb-1">{member.name}</h3>

                    <div className="mb-4 h-px w-8 bg-black/20 dark:bg-white/20" />

                    <p className="text-[10px] md:text-xs leading-relaxed text-madde-gray dark:text-gray-400 font-light opacity-80 text-justify">
                      {member.bio?.[language]}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section: Rest of Team (Full Width) */}
          <div className="border-t border-black/5 dark:border-white/5 pt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12">
              {TEAM.filter(m => !m.isLead).map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index, duration: 0.4 }}
                >
                  <h4 className="text-base font-medium mb-1">{member.name}</h4>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-madde-gray opacity-60">
                    {member.role[language]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

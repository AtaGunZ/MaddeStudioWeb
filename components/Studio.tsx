import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { TEXTS, SERVICES, TEAM } from '../constants';
import { useApp } from '../contexts/AppContext';

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

export const Studio: React.FC<StudioProps> = ({ language }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const { darkMode } = useApp();

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
      <section className="py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-madde-gray block mb-4 sticky top-32">
              {TEXTS.studio.philosophyTitle[language]}
            </span>
          </div>
          <div className="md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-16"
            >
              {TEXTS.studio.description[language]}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl leading-relaxed text-madde-gray dark:text-gray-400 max-w-3xl"
            >
              {TEXTS.studio.philosophy[language]}
            </motion.p>
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
                className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-16"
              >
                {TEXTS.studio.disciplines[language]}
              </motion.h2>

              {/* Skills List */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-wrap gap-x-6 gap-y-3"
              >
                {ALL_SKILLS.map((skill, index) => {
                  const isActive = hoveredCard ? skill.categories.includes(hoveredCard) : false;
                  return (
                    <motion.span
                      key={index}
                      initial={false}
                      animate={{
                        fontWeight: isActive ? 700 : 400,
                        opacity: hoveredCard && !isActive ? 0.3 : 1,
                        scale: isActive ? 1.05 : 1,
                        color: isActive ? (darkMode ? '#FFFFFF' : '#000000') : (darkMode ? '#A1A1AA' : '#71717A')
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 25,
                        mass: 1
                      }}
                      className="text-sm leading-relaxed whitespace-nowrap cursor-default origin-left"
                    >
                      {language === Language.EN ? skill.en : skill.tr}
                    </motion.span>
                  );
                })}
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
                        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                        style={{
                          backgroundImage: `url(${service.image})`,
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
              <span className="text-3xl md:text-4xl font-light tracking-tight block sticky top-32">
                {TEXTS.studio.team[language]}
              </span>
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

import React, { useState } from 'react';
import { PROJECTS, TEXTS } from '../constants';
import { Language, Project } from '../types';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { GlassHover } from './GlassHover';
import { EmphasisText } from './EmphasisText';

interface WorksProps {
  language: Language;
}


const WorkRow: React.FC<{ project: Project; language: Language; onOpen: () => void }> = ({ project, language, onOpen }) => {
  const [hover, setHover] = useState(false);


  return (
    <div
      className="group relative border-b border-gray-200 dark:border-gray-800 last:border-b-0 cursor-pointer"
      onClick={onOpen}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Background image fades in on hover (desktop) or while the row crosses mid-screen (touch, via is-active) */}
      {/* leaving is quick (150 ms) and arriving soft (700 ms), so moving between rows never stacks two images */}
      <div className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-150 lg:group-hover:duration-700 group-[.is-active]:duration-700 opacity-0 lg:group-hover:opacity-20 group-[.is-active]:opacity-20 ${project.heroFit === 'contain' ? 'bg-neutral-900 dark:bg-black' : ''}`}>
        <img loading="lazy" decoding="async" src={project.image} alt="" style={{ objectPosition: project.heroPosition }} className={`w-full h-full ${project.heroFit === 'contain' ? 'object-contain p-24' : 'object-cover grayscale'}`} />
      </div>

      <GlassHover />

      <div className="relative z-10 px-6 md:px-12 py-12 md:py-24 flex flex-col md:flex-row md:items-end justify-between bg-transparent">
        <div className="mb-6 md:mb-0">
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 lg:group-hover:translate-x-4 transition-transform duration-500">
            {project.title}
          </h3>
          <EmphasisText text={project.description[language]} active={hover} id={`wk-blur-${project.id}`} />
        </div>

        <div className="overflow-hidden">
          <div className="transform lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500 font-mono text-xs uppercase tracking-widest">
            {language === Language.EN ? 'More' : 'Daha Fazlası'} &rarr;
          </div>
        </div>
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

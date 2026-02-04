import React, { useState } from 'react';
import { PROJECTS, TEXTS } from '../constants';
import { Language, Page } from '../types';
import { useApp } from '../contexts/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

interface WorksProps {
  language: Language;
}

export const Works: React.FC<WorksProps> = ({ language }) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const { setPage, setSelectedProjectId } = useApp();

  return (
    <section className="pt-24 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="px-6 md:px-12 mb-16">
        <h2 className="text-sm font-bold uppercase tracking-widest">
          {TEXTS.works.title[language]}
        </h2>
      </div>

      <div className="flex flex-col">
        {PROJECTS.slice(0, 3).map((project) => (
          <div
            key={project.id}
            className="group relative border-b border-gray-200 dark:border-gray-800 last:border-b-0 cursor-pointer"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => {
              setSelectedProjectId(project.id);
              setPage(Page.PROJECT_DETAIL);
            }}
          >
            {/* Background Image Fade In on Hover (Desktop) */}
            <div className="hidden lg:block fixed inset-0 z-0 pointer-events-none transition-opacity duration-700 opacity-0 group-hover:opacity-20">
              <img src={project.image} alt="" className="w-full h-full object-cover grayscale" />
            </div>

            <div className="relative z-10 px-6 md:px-12 py-12 md:py-24 flex flex-col md:flex-row md:items-end justify-between bg-transparent transition-colors duration-300 group-hover:bg-white/5">
              <div className="mb-6 md:mb-0">
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 group-hover:translate-x-4 transition-transform duration-500">
                  {project.title}
                </h3>
                <p className="text-madde-gray dark:text-gray-400 max-w-md group-hover:text-black dark:group-hover:text-white transition-colors">
                  {project.description[language]}
                </p>
              </div>

              <div className="overflow-hidden">
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 font-mono text-xs uppercase tracking-widest">
                  {language === Language.EN ? 'More' : 'Daha Fazlası'} &rarr;
                </div>
              </div>
            </div>

            {/* Mobile Image */}
            <div className="lg:hidden w-full h-64 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end px-6 md:px-12 mt-8">
        <button
          onClick={() => setPage(Page.WORKS)}
          className="group flex items-center gap-4"
        >
          <span className="text-lg font-medium group-hover:text-madde-gray transition-colors uppercase tracking-widest text-sm">
            {language === Language.EN ? 'More' : 'Daha Fazlası'}
          </span>
          <div className="h-px w-12 bg-gray-300 dark:bg-gray-700 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full w-full bg-current -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
            />
          </div>
          <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">
            →
          </span>
        </button>
      </div>
    </section>
  );
};
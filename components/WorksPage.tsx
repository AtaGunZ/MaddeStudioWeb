import React from 'react';
import { motion } from 'framer-motion';
import { Language, Page } from '../types';
import { PROJECTS, TEXTS } from '../constants';
import { useApp } from '../contexts/AppContext';

interface WorksPageProps {
  language: Language;
}

export const WorksPage: React.FC<WorksPageProps> = ({ language }) => {
  const { setPage, setSelectedProjectId } = useApp();

  return (
    <motion.section
      key="works-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-48 pb-24 px-6 md:px-12 min-h-screen"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => {
              setSelectedProjectId(project.id);
              setPage(Page.PROJECT_DETAIL);
            }}
          >
            <div className={`w-full aspect-square overflow-hidden mb-4 ${project.heroFit === 'contain' ? 'bg-neutral-900 dark:bg-black' : 'bg-transparent'}`}>
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full ${project.heroFit === 'contain' ? 'object-contain p-8' : 'object-cover'} opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0`}
              />
            </div>
            <div className="flex flex-col border-t border-gray-300 dark:border-gray-700 pt-3">
              <h4 className="text-lg font-medium group-hover:translate-x-1 transition-transform mb-1">
                {project.title}
              </h4>
              <p className="text-xs text-madde-gray dark:text-gray-400 line-clamp-2">
                {project.description[language]}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

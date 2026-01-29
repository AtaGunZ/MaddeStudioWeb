import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { Works } from './Works';

interface WorksPageProps {
  language: Language;
}

export const WorksPage: React.FC<WorksPageProps> = ({ language }) => {
  return (
    <motion.div
      key="works-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <Works language={language} />
    </motion.div>
  );
};

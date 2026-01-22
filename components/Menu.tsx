import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, Page } from '../types';

interface MenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  setPage: (page: Page) => void;
  currentPage: Page;
  language: Language;
}

export const Menu: React.FC<MenuProps> = ({ isOpen, setIsOpen, setPage, currentPage, language }) => {
  const menuItems = [
    { page: Page.HOME, label: { [Language.EN]: "Index", [Language.TR]: "İndeks" } },
    { page: Page.FRAGMENTS, label: { [Language.EN]: "Fragments", [Language.TR]: "Parçalar" } },
    { page: Page.CONTACT, label: { [Language.EN]: "Contact", [Language.TR]: "İletişim" } },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-40 bg-madde-white dark:bg-madde-black text-madde-black dark:text-madde-white flex flex-col justify-center px-6 md:px-12"
        >
          <nav className="flex flex-col gap-6 md:gap-10">
            {menuItems.map((item) => (
              <motion.button
                key={item.page}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                onClick={() => {
                  setPage(item.page);
                  setIsOpen(false);
                }}
                className={`text-5xl md:text-8xl font-bold tracking-tighter text-left transition-colors duration-300 hover:text-madde-gray ${currentPage === item.page ? 'opacity-100' : 'opacity-30 hover:opacity-100'}`}
              >
                {item.label[language]}
              </motion.button>
            ))}
          </nav>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-12 left-6 md:left-12 text-sm font-mono text-madde-gray"
          >
            Madde Studio © {new Date().getFullYear()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
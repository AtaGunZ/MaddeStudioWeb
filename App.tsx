import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Services } from './components/Services';
import { Works } from './components/Works';
import { Clients } from './components/Clients';
import { WorksPage } from './components/WorksPage';
import { ProjectDetail } from './components/ProjectDetail';
import { FragmentDetail } from './components/FragmentDetail';
import { Studio } from './components/Studio';
import { Fragments } from './components/Fragments';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TEXTS } from './constants';
import { AnimatePresence, motion } from 'framer-motion';
import { useApp } from './contexts/AppContext';

const App: React.FC = () => {
  const { language, darkMode, page } = useApp();
  const [loading, setLoading] = useState(true);

  // Fake Loading Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center transition-colors duration-300 bg-madde-white text-madde-black dark:bg-madde-black dark:text-madde-white">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-12 h-12 bg-current animate-spin"
          style={{ borderRadius: "20%" }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full relative selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Navbar />

      <main className="w-full">
        <AnimatePresence mode='wait'>
          {page === Page.HOME && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero text={TEXTS.hero.slogan} currentLang={language} />
              <Manifesto language={language} />
              <Services language={language} />
              <Clients language={language} />
              <Works language={language} />
            </motion.div>
          )}

          {page === Page.WORKS && (
            <WorksPage key="works" language={language} />
          )}

          {page === Page.PROJECT_DETAIL && (
            <ProjectDetail key="project-detail" language={language} />
          )}

          {page === Page.FRAGMENT_DETAIL && (
            <FragmentDetail key="fragment-detail" language={language} />
          )}

          {page === Page.STUDIO && (
            <Studio key="studio" language={language} />
          )}

          {page === Page.FRAGMENTS && (
            <Fragments key="fragments" language={language} />
          )}

          {page === Page.CONTACT && (
            <Contact key="contact" language={language} />
          )}
        </AnimatePresence>
      </main>

      <Footer />

      {/* Smooth Scroll Noise Overlay (Optional Texture) */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[30]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
    </div>
  );
};

export default App;
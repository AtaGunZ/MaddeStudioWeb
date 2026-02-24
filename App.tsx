import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import { CustomCursor } from './components/CustomCursor';
import { TEXTS } from './constants';
import { AnimatePresence, motion } from 'framer-motion';
import { useApp } from './contexts/AppContext';
import { Language } from './types';

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Separate component so useLocation is inside Router context,
// and AnimatePresence gets a stable, changing key per route
function AnimatedRoutes({ language }: { language: Language }) {
  const location = useLocation();

  const homePage = (
    <div>
      <Hero text={TEXTS.hero.slogan} currentLang={language} />
      <Manifesto language={language} />
      <Services language={language} />
      <Clients language={language} />
      <Works language={language} />
    </div>
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/*
          Passing `location` snapshot to Routes is critical:
          it locks each keyed motion.div to its OWN route snapshot
          so the exiting div doesn't immediately re-render the new route.
        */}
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <Routes location={location as any}>
          <Route path="/" element={homePage} />
          <Route path="/studio" element={<Studio language={language} />} />
          <Route path="/works" element={<WorksPage language={language} />} />
          <Route path="/works/:projectId" element={<ProjectDetail language={language} />} />
          <Route path="/fragments" element={<Fragments language={language} />} />
          <Route path="/fragments/:fragmentId" element={<FragmentDetail language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
          <Route path="*" element={homePage} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

const App: React.FC = () => {
  const { language } = useApp();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-madde-white text-madde-black dark:bg-madde-black dark:text-madde-white">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-12 h-12 bg-current animate-spin"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full relative selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <ScrollToTop />
      <Navbar />
      <main className="w-full">
        <AnimatedRoutes language={language} />
      </main>
      <Footer />
      <CustomCursor />
      {/* Noise overlay */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-[30]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
      />
    </div>
  );
};

export default App;
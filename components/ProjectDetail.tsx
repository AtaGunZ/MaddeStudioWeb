import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, TEXTS } from '../constants';
import { Language, Page } from '../types';
import { useApp } from '../contexts/AppContext';

interface ProjectDetailProps {
    language: Language;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ language }) => {
    const { selectedProjectId, setSelectedProjectId, setPage } = useApp();
    const [project, setProject] = useState(PROJECTS.find(p => p.id === selectedProjectId));

    useEffect(() => {
        if (selectedProjectId) {
            setProject(PROJECTS.find(p => p.id === selectedProjectId));
        }
    }, [selectedProjectId]);

    const [isNextHovered, setIsNextHovered] = useState(false);

    if (!project) return null;

    const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
    const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

    const handleNextProject = () => {
        setSelectedProjectId(nextProject.id);
        window.scrollTo(0, 0);
        setIsNextHovered(false);
    };

    return (
        <motion.article
            className="min-h-screen bg-madde-white dark:bg-madde-black text-madde-black dark:text-madde-white pt-32 md:pt-48 pb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            {/* Back Button */}
            <div className="fixed top-24 left-6 md:left-12 z-50">
                <button
                    onClick={() => setPage(Page.WORKS)}
                    className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity"
                >
                    <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
                    {TEXTS.projectDetail.back[language]}
                </button>
            </div>

            {/* Hero Section */}
            <div className="px-6 md:px-12 mb-24 md:mb-48">
                <div className="max-w-[1920px] mx-auto">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none mb-12 lg:-ml-2"
                    >
                        {project.title}
                    </motion.h1>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 border-t border-black/10 dark:border-white/10 pt-8">
                        {/* Column 1: Metadata */}
                        <div className="col-span-1 md:col-span-3 flex flex-col gap-8">
                            <div>
                                <span className="block text-xs text-madde-gray uppercase tracking-widest mb-2">{TEXTS.projectDetail.client[language]}</span>
                                <span className="text-lg md:text-xl font-medium">{project.client}</span>
                            </div>
                            <div>
                                <span className="block text-xs text-madde-gray uppercase tracking-widest mb-2">{TEXTS.projectDetail.year[language]}</span>
                                <span className="text-lg md:text-xl font-medium">{project.year}</span>
                            </div>
                            <div>
                                <span className="block text-xs text-madde-gray uppercase tracking-widest mb-2">{TEXTS.projectDetail.services[language]}</span>
                                <ul className="flex flex-col gap-1">
                                    {project.services?.map((s, i) => (
                                        <li key={i} className="text-lg md:text-xl font-medium">{s}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Column 2: Challenge & Solution */}
                        <div className="col-span-1 md:col-span-6 md:col-start-6 flex flex-col gap-16">
                            <div>
                                <span className="block text-xs text-madde-gray uppercase tracking-widest mb-4">{TEXTS.projectDetail.challenge[language]}</span>
                                <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
                                    {project.challenge?.[language]}
                                </p>
                            </div>

                            <div>
                                <span className="block text-xs text-madde-gray uppercase tracking-widest mb-4">{TEXTS.projectDetail.solution[language]}</span>
                                <p className="text-xl md:text-2xl leading-relaxed text-madde-gray dark:text-gray-300">
                                    {project.solution?.[language]}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Image Hero */}
            <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden mb-24 md:mb-48 px-6 md:px-12">
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-sm md:rounded-lg"
                />
            </div>

            {/* Gallery Grid */}
            <div className="px-6 md:px-12 mb-24">
                <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                    {project.gallery?.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`aspect-[4/5] md:aspect-[3/4] overflow-hidden ${index % 3 === 0 ? 'md:col-span-2 md:aspect-[16/9]' : ''}`}
                        >
                            <img src={img} alt={`Gallery ${index}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Next Project (Loop) */}
            <div
                className="relative px-6 md:px-12 py-32 md:py-48 border-t border-black/5 dark:border-white/5 overflow-hidden transition-colors duration-500"
                onMouseEnter={() => setIsNextHovered(true)}
                onMouseLeave={() => setIsNextHovered(false)}
            >
                {/* Background Preview */}
                <div
                    className={`absolute inset-0 z-0 transition-opacity duration-700 ${isNextHovered ? 'opacity-20' : 'opacity-0'}`}
                >
                    <img src={nextProject.image} alt="" className="w-full h-full object-cover grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-t from-madde-white via-transparent to-transparent dark:from-madde-black" />
                </div>

                <div className="relative z-10 max-w-[1920px] mx-auto flex flex-col items-end">
                    <span className="text-xs text-madde-gray uppercase tracking-widest mb-8">
                        {TEXTS.projectDetail.nextProject[language]}
                    </span>
                    <button
                        onClick={handleNextProject}
                        className="group flex items-center gap-4 md:gap-8 text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter"
                    >
                        <span className="group-hover:translate-x-4 transition-transform duration-500 will-change-transform">
                            {nextProject.title}
                        </span>
                        <span className="group-hover:translate-x-8 transition-transform duration-500 delay-75 text-madde-red">→</span>
                    </button>
                </div>
            </div>
        </motion.article>
    );
};

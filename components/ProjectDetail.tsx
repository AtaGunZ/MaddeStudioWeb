import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, TEXTS, SERVICE_TRANSLATIONS } from '../constants';
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
            // Force scroll to top with a slight delay to ensure render is complete
            setTimeout(() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }, 10);
        }
    }, [selectedProjectId]);

    const [isNextHovered, setIsNextHovered] = useState(false);

    if (!project) return null;

    const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
    const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

    const handleNextProject = () => {
        setSelectedProjectId(nextProject.id);
        // Scroll immediately on click as well
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        setIsNextHovered(false);
    };

    return (
        <motion.article
            key={project.id}
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
                {/* Fixed Hero Background */}
                {/* Fixed Hero Background */}
                {/* Fixed Hero Background */}
                <div className="fixed top-0 left-0 w-full h-[80vh] z-0 overflow-hidden pointer-events-none">
                    {/* 1. The Image Layer: Grayscale and dark for both modes, slightly lighter opacity in light mode to maintain visibility against text */}
                    <img
                        src={project.image}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-40 dark:opacity-40 grayscale"
                    />
                    {/* 2. The Gradient Mask: Fades out the bottom */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-madde-white dark:via-black/80 dark:to-madde-black" />
                </div>

                <div className="relative z-10 pt-32 md:pt-48 pb-12 md:pb-24 px-6 md:px-12 max-w-[1920px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-24 md:mb-32"
                    >
                        {/* Title and Metadata */}
                        <div className="md:col-span-12 flex flex-col items-center text-center relative z-20">
                            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 md:mb-12">
                                {project.title}
                            </h1>

                            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-sm font-mono uppercase tracking-widest text-madde-gray dark:text-gray-400">
                                {project.clientLogo ? (
                                    <img
                                        src={project.clientLogo}
                                        alt={project.client}
                                        className={`h-8 md:h-12 w-auto object-contain grayscale dark:invert opacity-90 transition-transform 
                                            ${project.client === 'Hiltar' ? 'scale-125' : ''}
                                            ${(project.client === 'North' || project.client === 'Mehaz') ? 'scale-50' : ''}`}
                                    />
                                ) : (
                                    <span>{project.client}</span>
                                )}
                                <span>{project.year}</span>
                                <span>
                                    {project.services.map(s => SERVICE_TRANSLATIONS[s]?.[language] || s).join(' / ')}
                                </span>
                            </div>
                        </div>

                        {/* Left Column: Challenge */}
                        <div className="md:col-span-5 md:col-start-2">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-madde-red dark:text-madde-red">
                                        {language === Language.EN ? 'The Challenge' : 'Zorluk'}
                                    </h3>
                                    <p className="text-xl md:text-2xl leading-relaxed text-madde-black dark:text-madde-white font-light">
                                        {project.challenge?.[language]}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Solution */}
                        <div className="md:col-span-5">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-madde-red dark:text-madde-red">
                                        {language === Language.EN ? 'The Solution' : 'Çözüm'}
                                    </h3>
                                    <p className="text-xl md:text-2xl leading-relaxed text-madde-gray dark:text-gray-300">
                                        {project.solution?.[language]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Full Image Hero */}
            {project.id !== 'north-keyboard' && project.id !== 'octopus-bridge' && project.id !== 'age-soft' && (
                <div className="relative z-10 w-full h-[60vh] md:h-[80vh] overflow-hidden mb-4 md:mb-8 px-6 md:px-12">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full ${project.heroFit === 'contain' ? 'object-contain p-12 bg-neutral-900 dark:bg-black' : 'object-cover'} rounded-sm md:rounded-lg`}
                    />
                </div>
            )}

            {/* Gallery Grid */}

            {/* Gallery Grid */}

            {/* Gallery Grid */}
            <div className="relative z-10 px-6 md:px-12 mb-24">
                <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {project.gallery?.map((item, index) => {
                        // Default to full width (2 columns) unless specific colSpan is provided
                        const colSpan = item.colSpan ?? 2;
                        const isWide = colSpan === 2;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={isWide ? 'md:col-span-2' : ''}
                            >
                                {item.type === 'image' ? (
                                    <div className={`overflow-hidden w-full`}>
                                        <img
                                            src={item.src}
                                            alt={`Gallery ${index}`}
                                            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                ) : item.type === 'video' ? (
                                    <div className={`overflow-hidden w-full ${isWide ? 'aspect-[16/9]' : 'aspect-[4/5] md:aspect-[3/4]'}`}>
                                        <video
                                            src={item.src}
                                            poster={item.poster}
                                            autoPlay={item.autoPlay ?? true}
                                            loop={item.loop ?? true}
                                            muted={item.muted ?? true}
                                            playsInline
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ) : item.type === 'group' ? (
                                    <div className={`grid grid-cols-2 ${item.cols === 4 ? 'md:grid-cols-4' : ''} gap-4 md:gap-8 h-full`}>
                                        {item.items.map((subItem, i) => (
                                            <div key={i} className="overflow-hidden w-full">
                                                <img
                                                    src={subItem.src}
                                                    alt={`Group ${index}-${i}`}
                                                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex flex-col justify-center h-full py-12 md:px-12 bg-gray-50 dark:bg-zinc-900 rounded-sm">
                                        {item.title && (
                                            <h3 className="text-xl font-bold mb-4">{item.title[language]}</h3>
                                        )}
                                        <p className="text-xl md:text-3xl font-light leading-relaxed text-madde-black dark:text-madde-white">
                                            {item.content[language]}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Next Project (Loop) */}
            <div
                className="relative z-10 px-6 md:px-12 py-32 md:py-48 border-t border-black/5 dark:border-white/5 overflow-hidden transition-colors duration-500 bg-madde-white dark:bg-madde-black"
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
        </motion.article >
    );
};

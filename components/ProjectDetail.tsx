import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS, TEXTS, SERVICE_TRANSLATIONS } from '../constants';
import { Language } from '../types';
import { GalleryVideo } from './GalleryVideo';
import { GalleryMedia } from './GalleryMedia';
import { SudiCaseStudy } from './SudiCaseStudy';
import { WizepodAICaseStudy } from './WizepodAICaseStudy';
import { GlassHover } from './GlassHover';
import { usePageTitle } from './usePageTitle';
import { BarcodeField } from './BarcodeField';
import { BallDivider, DividerBudget, dividerCount, pickSlots } from './BallDivider';
import { useApp } from '../contexts/AppContext';
import { useNavigate, useParams } from 'react-router-dom';

// First sentence as the lead; handles '.', '?' and '!' followed by a space
const splitLead = (text: string): [string, string] => {
    const m = text.match(/^(.+?[.?!])\s+(.+)$/s);
    return m ? [m[1], m[2]] : [text, ''];
};

interface ProjectDetailProps {
    language: Language;
}

// Title size: 60px / 128px at most, smaller when its longest word would not fit the width
// (about 0.5em per letter in the tight bold face; 96px / 192px of side padding)
const titleSize = (title: string) => {
    const n = Math.max(...title.split(/\s+/).map(w => w.length)) * 0.53;
    return { '--h1': `min(3.75rem, calc((100vw - 96px) / ${n}))`, '--h1md': `min(8rem, calc((100vw - 192px) / ${n}))` } as React.CSSProperties;
};

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ language }) => {
    const { projectId } = useParams<{ projectId: string }>();
    const navigate = useNavigate();
    const { scrollY } = useScroll();
    const blur = useTransform(scrollY, [0, 800], ["blur(0px)", "blur(12px)"]);
    const heroFade = useTransform(scrollY, [0, 800, 1400], [0.4, 0.12, 0]);
    const fine = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const { darkMode } = useApp();

    // Derive directly — no useState so there's never a stale/undefined frame
    const project = PROJECTS.find(p => p.id === projectId);
    const [isNextHovered, setIsNextHovered] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);
    const tintRef = useRef<HTMLImageElement>(null);
    const [budget, setBudget] = useState(0);
    useEffect(() => {
        const el = bodyRef.current;
        if (!el) return;
        // re-measure whenever the body grows (lazy images and videos arrive as the page is read)
        const ro = new ResizeObserver(() => setBudget(dividerCount(el.offsetHeight)));
        ro.observe(el);
        return () => { ro.disconnect(); setBudget(0); };
    }, [projectId]);
    usePageTitle(project?.title);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [projectId]);

    if (!project) return null;

    const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
    const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

    // gallery items 1..n-1 are candidate spots for a divider (before that item)
    const gallerySlots = pickSlots((project.gallery?.length ?? 1) - 1, budget);

    const handleNextProject = () => {
        navigate(`/works/${nextProject.id}`);
    };

    return (
        <motion.article
            key={project.id}
            className="min-h-screen bg-madde-white dark:bg-madde-black text-madde-black dark:text-madde-white pt-32 md:pt-48 pb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            {/* Hero Section */}
            <div className="relative px-6 md:px-12">
                <div className="fixed top-0 left-0 w-full h-[80vh] z-0 overflow-hidden pointer-events-none">
                    <motion.img
                        style={fine ? { filter: blur } : { opacity: heroFade }}
                        src={project.image}
                        alt=""
                        className={`absolute inset-0 w-full h-full object-cover grayscale ${fine ? 'opacity-40' : ''}`}
                    />
                    {/* the same image in colour and slightly magnified, like seen through glass: shown only inside the cards (clipped by BarcodeField) */}
                    <motion.img
                        ref={tintRef}
                        style={{ ...(fine ? { filter: blur } : { opacity: heroFade }), clipPath: 'polygon(0 0, 0 0, 0 0)' }}
                        src={project.image}
                        alt=""
                        className={`absolute inset-0 w-full h-full object-cover scale-[1.05] ${fine ? 'opacity-40' : ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-madde-white dark:via-black/80 dark:to-madde-black" />
                </div>

                <div className="relative z-10 pt-24 md:pt-40 pb-4 md:pb-8 px-6 md:px-12 max-w-[1920px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-x-12 md:gap-x-16 gap-y-10 md:gap-y-16"
                    >
                        {/* Title and Metadata */}
                        <div className="md:col-span-12 flex flex-col items-center text-center relative z-20">
                            <h1 className="text-[length:var(--h1)] md:text-[length:var(--h1md)] leading-[1.05] font-bold tracking-tighter mb-8 md:mb-12" style={titleSize(project.title)}>
                                {project.title}
                            </h1>

                            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-sm font-mono uppercase tracking-widest text-madde-gray dark:text-gray-400">
                                {project.clientLogo ? (
                                    <img loading="lazy" decoding="async"
                                        src={project.clientLogo}
                                        alt={project.client}
                                        className={`h-8 md:h-12 w-auto object-contain grayscale dark:invert opacity-90 transition-transform 
                                            ${project.client === 'Hiltar' ? 'scale-125' : ''}
                                            ${(project.client === 'North' || project.client === 'Mehaz') ? 'scale-75' : ''}
                                            ${project.id === 'acl-reconstruction' ? 'scale-[2]' : ''}`}
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

                        {/* Barcode cards stand on this line; the logo's circle, split in two, is the scroll cue */}
                        <BallDivider
                            page
                            className="md:col-span-12 -mx-12 md:-mx-24"
                            onClick={() => contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                            label={language === Language.EN ? 'Scroll to the work' : 'İşe in'}
                        >
                            <div className="absolute left-0 right-0 bottom-1/2 h-[140vh] pointer-events-none">
                                <BarcodeField dark={darkMode} tint={tintRef} className="absolute inset-0 w-full h-full" />
                                {/* soft shadow rising from the line */}
                                <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-madde-white/70 dark:from-madde-black/80 to-transparent" />
                            </div>
                        </BallDivider>

                        {/* Challenge / Solution: the first sentence leads, the rest is quieter body copy */}
                        {([
                            [language === Language.EN ? 'The Challenge' : 'Zorluk', project.challenge?.[language], 'md:col-start-2'],
                            [language === Language.EN ? 'The Solution' : 'Çözüm', project.solution?.[language], ''],
                        ] as const).map(([label, text, start]) => {
                            const [lead, rest] = splitLead(text ?? '');
                            return (
                                <div key={label} className={`md:col-span-5 ${start}`}>
                                    <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-madde-red dark:text-madde-red">{label}</h3>
                                    <p className="text-xl md:text-2xl leading-snug tracking-tight text-madde-black dark:text-madde-white">{lead}</p>
                                    {rest && <p className="mt-4 text-base md:text-lg leading-relaxed text-madde-gray dark:text-gray-400">{rest}</p>}
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>

            <div ref={contentRef} className="scroll-mt-24 mb-8 md:mb-12" />

            {/* Full Image Hero */}
            {project.id !== 'north-keyboard' && project.id !== 'octopus-bridge' && project.id !== 'acl-reconstruction' && project.id !== 'age-soft' && project.id !== 'hiltar-sutas' && project.id !== 'sudi-reels' && (
                <div className="relative z-10 w-full h-[60vh] md:h-[80vh] overflow-hidden mb-4 md:mb-8 px-6 md:px-12">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src={project.image}
                        alt={project.title}
                        style={{ objectPosition: project.heroPosition }}
                        className={`w-full h-full ${project.heroFit === 'contain' ? 'object-contain p-12 bg-neutral-900 dark:bg-black' : 'object-cover'} rounded-sm md:rounded-lg`}
                    />
                </div>
            )}

            <DividerBudget.Provider value={budget}>
            <div ref={bodyRef} key={project.id}>
            {project.id === 'sudi-reels' ? <SudiCaseStudy language={language} /> : project.id === 'wizepod' ? <WizepodAICaseStudy language={language} /> : (
            <div className="relative z-10 px-6 md:px-12 mb-24">
                <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {project.gallery?.map((item, index) => {
                        const colSpan = item.colSpan ?? 2;
                        const isWide = colSpan === 2;

                        return (
                            <React.Fragment key={index}>
                            {gallerySlots.has(index) && <BallDivider className="md:col-span-2 -mx-6 md:-mx-12 my-8 md:my-12" />}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={isWide ? 'md:col-span-2' : ''}
                            >
                                {item.type === 'image' ? (
                                    <div className="overflow-hidden w-full">
                                        <GalleryMedia src={item.src} alt={`Gallery ${index}`} className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700" />
                                    </div>
                                ) : item.type === 'video' ? (
                                    <GalleryVideo item={item} isWide={isWide} language={language} />
                                ) : item.type === 'group' ? (
                                    <div className={`grid grid-cols-2 ${item.cols === 4 ? 'md:grid-cols-4' : ''} gap-4 md:gap-8 h-full`}>
                                        {item.items.map((subItem, i) => (
                                            <div key={i} className="overflow-hidden w-full">
                                                <GalleryMedia src={subItem.src} alt={`Group ${index}-${i}`} className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700" />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex flex-col justify-center h-full py-12 md:px-12 bg-gray-50 dark:bg-zinc-900 rounded-sm">
                                        {item.title && <h3 className="text-xl font-bold mb-4">{item.title[language]}</h3>}
                                        <p className="text-xl md:text-3xl font-light leading-relaxed text-madde-black dark:text-madde-white">
                                            {item.content[language]}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
            )}

            </div>
            </DividerBudget.Provider>

            <BallDivider className="mb-0" />

            {/* Next Project: same behaviour as the home works rows. On hover (mouse only) the next
                project's image fades in behind the page and the row turns to frosted glass; the whole
                row is one link, so a single tap on a phone navigates. */}
            <div
                role="link"
                tabIndex={0}
                onClick={handleNextProject}
                onKeyDown={e => { if (e.key === 'Enter') handleNextProject(); }}
                className="group relative z-10 overflow-x-clip px-6 md:px-12 py-32 md:py-48 border-t border-black/5 dark:border-white/5 cursor-pointer"
                onMouseEnter={() => fine && setIsNextHovered(true)}
                onMouseLeave={() => setIsNextHovered(false)}
            >
                <div className={`hidden lg:block fixed inset-0 z-0 pointer-events-none transition-opacity duration-700 ${isNextHovered ? 'opacity-20' : 'opacity-0'} ${nextProject.heroFit === 'contain' ? 'bg-neutral-900 dark:bg-black' : ''}`}>
                    <img loading="lazy" decoding="async" src={nextProject.image} alt="" style={{ objectPosition: nextProject.heroPosition }} className={`w-full h-full ${nextProject.heroFit === 'contain' ? 'object-contain p-24' : 'object-cover grayscale'}`} />
                </div>
                <GlassHover className="hidden lg:block" />

                <div className="relative z-10 max-w-[1920px] mx-auto flex flex-col items-end">
                    <span className="text-xs text-madde-gray uppercase tracking-widest mb-8">
                        {TEXTS.projectDetail.nextProject[language]}
                    </span>
                    <span className="flex items-center gap-4 md:gap-8 text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-right">
                        <span className="lg:group-hover:translate-x-4 transition-transform duration-500">
                            {nextProject.title}
                        </span>
                        <span className="lg:group-hover:translate-x-8 transition-transform duration-500 delay-75 text-madde-red">→</span>
                    </span>
                </div>
            </div>
        </motion.article>
    );
};

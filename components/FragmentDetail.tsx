import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FRAGMENTS, TEXTS } from '../constants';
import { Language, Page } from '../types';
import { useApp } from '../contexts/AppContext';

interface FragmentDetailProps {
    language: Language;
}

export const FragmentDetail: React.FC<FragmentDetailProps> = ({ language }) => {
    const { selectedFragmentId, setPage } = useApp();
    const [fragment, setFragment] = useState(FRAGMENTS.find(f => f.id === selectedFragmentId));

    useEffect(() => {
        if (selectedFragmentId) {
            setFragment(FRAGMENTS.find(f => f.id === selectedFragmentId));
        }
    }, [selectedFragmentId]);

    if (!fragment) return null;

    return (
        <motion.article
            className="min-h-screen bg-madde-white dark:bg-madde-black text-madde-black dark:text-madde-white pt-32 md:pt-48 pb-24 px-6 md:px-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            {/* Back Button */}
            <div className="fixed top-24 left-6 md:left-12 z-50">
                <button
                    onClick={() => setPage(Page.FRAGMENTS)}
                    className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity"
                >
                    <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
                    {TEXTS.fragmentDetail.back[language]}
                </button>
            </div>

            <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
                {/* Header & Meta */}
                <div className="col-span-1 md:col-span-12 mb-12">
                    <span className="inline-block px-3 py-1 mb-6 text-xs font-mono border border-black dark:border-white rounded-full uppercase">
                        {fragment.type}
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-4 max-w-5xl">
                        {fragment.title}
                    </h1>
                    <span className="text-sm font-mono text-madde-gray">
                        {fragment.date}
                    </span>
                </div>

                {/* Main Content Area */}
                <div className="col-span-1 md:col-span-8 flex flex-col gap-16">
                    {/* Image */}
                    <div className="w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-sm md:rounded-lg">
                        <img
                            src={fragment.image}
                            alt={fragment.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="max-w-3xl">
                        <p className="text-xl md:text-2xl leading-relaxed text-madde-gray dark:text-gray-300">
                            {fragment.content?.[language]}
                        </p>
                    </div>
                </div>

                {/* Sidebar (Optional - for future use or simple navigation) */}
                <div className="col-span-1 md:col-span-3 md:col-start-10 hidden md:block border-l border-black/5 dark:border-white/5 pl-8 md:sticky md:top-48 h-fit">
                    <span className="block text-xs uppercase tracking-widest mb-6 opacity-40">{TEXTS.fragmentDetail.previous[language]}</span>
                    <ul className="flex flex-col gap-4">
                        {FRAGMENTS.filter(f => f.id !== fragment.id).slice(0, 3).map(f => (
                            <li key={f.id} className="group cursor-pointer" onClick={() => {
                                // We probably want to implement navigation here later
                            }}>
                                <span className="block text-sm font-medium group-hover:opacity-60 transition-opacity truncate">{f.title}</span>
                                <span className="text-xs text-madde-gray">{f.date}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.article>
    );
};

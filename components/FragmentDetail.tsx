import React from 'react';
import { motion } from 'framer-motion';
import { FRAGMENTS, TEXTS } from '../constants';
import { FragmentBlock, Language } from '../types';
import { useNavigate, useParams } from 'react-router-dom';

interface FragmentDetailProps {
    language: Language;
}

export const FragmentDetail: React.FC<FragmentDetailProps> = ({ language }) => {
    const { fragmentId } = useParams<{ fragmentId: string }>();
    const navigate = useNavigate();

    // Derive directly — no useState so there's never a stale/undefined frame
    const fragment = FRAGMENTS.find(f => f.id === fragmentId);

    if (!fragment) return null;

    const renderBlock = (block: FragmentBlock, i: number) => {
        switch (block.kind) {
            case 'text':
                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-6%' }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full"
                    >
                        {block.content[language].split('\n\n').map((para, pi) => (
                            <p key={pi} className="text-base md:text-lg leading-[1.9] text-madde-gray dark:text-gray-300 font-light mb-6 last:mb-0 whitespace-pre-line">
                                {para}
                            </p>
                        ))}
                    </motion.div>
                );

            case 'image':
                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        {...(i === 0
                            ? { animate: { opacity: 1 } }
                            : { whileInView: { opacity: 1 }, viewport: { once: true, margin: '-4%' } }
                        )}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className="w-full overflow-hidden"
                    >
                        <img src={block.src} alt="" className="w-full h-auto object-cover" />
                    </motion.div>
                );

            case 'image-pair':
                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: '-4%' }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className="grid grid-cols-2 gap-3 md:gap-5 w-full"
                    >
                        {block.srcs.map((src, si) => (
                            <div key={si} className="overflow-hidden">
                                <img src={src} alt="" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </motion.div>
                );

            case 'credits':
                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="pt-8 border-t border-black/10 dark:border-white/10 w-full"
                    >
                        {block.content[language].split('\n').map((line, li) => (
                            <p key={li} className="text-xs font-mono text-madde-gray opacity-60 leading-relaxed">
                                {line}
                            </p>
                        ))}
                    </motion.div>
                );

            default:
                return null;
        }
    };

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
                    onClick={() => navigate('/fragments')}
                    className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity"
                >
                    <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
                    {TEXTS.fragmentDetail.back[language]}
                </button>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col gap-16 md:gap-24">

                {/* Header */}
                <div>
                    <span className="inline-block px-3 py-1 mb-6 text-xs font-mono border border-black dark:border-white rounded-full uppercase">
                        {fragment.type[language]}
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-4">
                        {fragment.title[language]}
                    </h1>
                    <span className="text-sm font-mono text-madde-gray">
                        {fragment.date}
                    </span>
                </div>

                {/* Rich blocks */}
                {fragment.blocks?.map((block, i) => renderBlock(block, i))}

                {/* Fallback: legacy single-content fragments */}
                {!fragment.blocks && fragment.content?.[language] && (
                    <p className="text-base md:text-lg leading-[1.9] text-madde-gray dark:text-gray-300 font-light">
                        {fragment.content[language]}
                    </p>
                )}

            </div>
        </motion.article>
    );
};

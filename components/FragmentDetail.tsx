import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FRAGMENTS, TEXTS } from '../constants';
import { FragmentBlock, Language } from '../types';
import { useParams } from 'react-router-dom';
import { usePageTitle } from './usePageTitle';

interface FragmentDetailProps {
    language: Language;
}

export const FragmentDetail: React.FC<FragmentDetailProps> = ({ language }) => {
    const { fragmentId } = useParams<{ fragmentId: string }>();

    // Derive directly — no useState so there's never a stale/undefined frame
    const fragment = FRAGMENTS.find(f => f.id === fragmentId);
    usePageTitle(fragment?.title[language]);

    // Table of contents: built from heading blocks, active item follows the scroll
    const headings = (fragment?.blocks ?? []).filter(
        (b): b is Extract<FragmentBlock, { kind: 'heading' }> => b.kind === 'heading'
    );
    const hasToc = headings.length > 0;
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        if (!hasToc) return;
        const els = headings.map(h => document.getElementById(h.id)).filter(Boolean) as HTMLElement[];
        const onScroll = () => {
            const line = window.innerHeight * 0.3;
            let current: string | null = els[0]?.id ?? null;
            for (const el of els) {
                if (el.getBoundingClientRect().top <= line) current = el.id;
            }
            setActiveId(current);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fragmentId, hasToc]);

    const goTo = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (!el) return;
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: 'smooth' });
    };

    const activeSection = activeId ? activeId.split('-')[0] : null;
    const tocRef = useRef<HTMLUListElement>(null);

    // keep the active entry in view inside the contents list, without moving the page
    useEffect(() => {
        const list = tocRef.current;
        if (!list || !activeId) return;
        const item = list.querySelector<HTMLElement>(`[data-toc="${activeId}"]`);
        if (!item) return;
        const top = item.offsetTop - list.offsetTop;
        const pad = list.clientHeight * 0.3;
        if (top < list.scrollTop + pad || top + item.offsetHeight > list.scrollTop + list.clientHeight - pad) {
            list.scrollTo({ top: Math.max(0, top - pad), behavior: 'smooth' });
        }
    }, [activeId]);
    const tocLabel = language === Language.TR ? 'İçindekiler' : 'Contents';

    if (!fragment) return null;

    // [label](https://...) becomes a link; everything else stays plain text
    const inline = (txt: string) => {
        const out: React.ReactNode[] = [];
        const re = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
        let last = 0; let m: RegExpExecArray | null; let k = 0;
        while ((m = re.exec(txt))) {
            if (m.index > last) out.push(txt.slice(last, m.index));
            out.push(
                <a key={k++} href={m[2]} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-black/30 dark:decoration-white/30 hover:decoration-current">
                    {m[1]}
                </a>
            );
            last = m.index + m[0].length;
        }
        if (last < txt.length) out.push(txt.slice(last));
        return out;
    };

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
                        {block.content[language].split('\n\n').map((para, pi) => {
                            const lines = para.split('\n');
                            if (lines.every(l => l.startsWith('- '))) {
                                return (
                                    <ul key={pi} className="list-none mb-6 last:mb-0 space-y-2">
                                        {lines.map((l, li) => (
                                            <li key={li} className="relative pl-5 text-base md:text-lg leading-[1.8] text-madde-gray dark:text-gray-300 font-light before:content-['–'] before:absolute before:left-0">
                                                {inline(l.slice(2))}
                                            </li>
                                        ))}
                                    </ul>
                                );
                            }
                            return (
                                <p key={pi} className="text-base md:text-lg leading-[1.9] text-madde-gray dark:text-gray-300 font-light mb-6 last:mb-0 whitespace-pre-line">
                                    {inline(para)}
                                </p>
                            );
                        })}
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
                        <img loading="lazy" decoding="async" src={block.src} alt="" className="w-full h-auto object-cover" />
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
                                <img loading="lazy" decoding="async" src={src} alt="" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </motion.div>
                );

            case 'figure':
                return (
                    <motion.figure
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: '-4%' }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className="w-full"
                    >
                        <a href={block.src[language]} target="_blank" rel="noopener" className="block cursor-zoom-in">
                            <img decoding="async" src={block.src[language]} alt={block.caption?.[language] ?? ''} className="w-full h-auto" />
                        </a>
                        {block.caption && (
                            <figcaption className="mt-3 text-xs font-mono text-madde-gray leading-relaxed">
                                {block.caption[language]}
                            </figcaption>
                        )}
                    </motion.figure>
                );

            case 'heading': {
                const sub = block.level === 3;
                return (
                    <h2
                        key={i}
                        id={block.id}
                        className={sub
                            ? 'scroll-mt-28 text-xl md:text-2xl font-bold tracking-tight pt-4 -mb-2'
                            : 'scroll-mt-28 text-2xl md:text-4xl font-bold tracking-tighter mt-10 md:mt-16 pt-10 md:pt-14 border-t border-black/10 dark:border-white/10'}
                    >
                        {block.title[language]}
                    </h2>
                );
            }

            case 'specs':
                return (
                    <dl key={i} className="w-full border-t border-black/10 dark:border-white/10 font-mono text-sm">
                        {block.rows.map((row, ri) => (
                            <div key={ri} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-4 py-3 border-b border-black/10 dark:border-white/10">
                                <dt className="text-madde-gray">{row.label[language]}</dt>
                                <dd className="text-madde-black dark:text-madde-white">{row.value[language]}</dd>
                            </div>
                        ))}
                    </dl>
                );

            case 'table':
                return (
                    <figure key={i} className="w-full">
                        <div className="w-full overflow-x-auto">
                            <table className="w-full min-w-[34rem] text-left font-mono text-xs md:text-[13px] leading-relaxed border-collapse">
                                <thead>
                                    <tr className="border-b border-black/20 dark:border-white/20">
                                        {block.columns.map((c, ci) => (
                                            <th key={ci} className="py-3 pr-4 font-normal uppercase tracking-wider text-madde-gray align-bottom">{c[language]}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {block.rows.map((row, ri) => (
                                        <tr key={ri} className="border-b border-black/10 dark:border-white/10 align-top">
                                            {row.map((cell, ci) => (
                                                <td key={ci} className={`py-3 pr-4 ${ci === 0 ? 'text-madde-black dark:text-madde-white' : 'text-madde-gray dark:text-gray-300'}`}>{inline(cell[language])}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {block.caption && (
                            <figcaption className="mt-3 text-xs font-mono text-madde-gray leading-relaxed">{block.caption[language]}</figcaption>
                        )}
                    </figure>
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
            className="min-h-screen bg-madde-paper dark:bg-madde-black text-madde-black dark:text-madde-white pt-32 md:pt-48 pb-24 px-6 md:px-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <div className={hasToc ? 'max-w-6xl mx-auto lg:grid lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-16' : ''}>
            <div className={`max-w-4xl mx-auto w-full flex flex-col ${hasToc ? 'gap-8 md:gap-10' : 'gap-16 md:gap-24'}`}>

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

                {hasToc && (
                    <details className="lg:hidden -mt-8 border-y border-black/10 dark:border-white/10 font-mono text-sm">
                        <summary className="cursor-pointer py-4 uppercase tracking-widest text-xs text-madde-gray">{tocLabel}</summary>
                        <ul className="pb-4">
                            {headings.filter(h => h.level !== 3).map(h => (
                                <li key={h.id}>
                                    <a href={`#${h.id}`} onClick={goTo(h.id)} className={`block py-1.5 text-madde-gray hover:text-madde-black dark:hover:text-madde-white ${h.level === 3 ? 'pl-4' : ''}`}>
                                        {h.title[language]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </details>
                )}

                {/* Rich blocks */}
                {fragment.blocks?.map((block, i) => renderBlock(block, i))}

                {/* Fallback: legacy single-content fragments */}
                {!fragment.blocks && fragment.content?.[language] && (
                    <p className="text-base md:text-lg leading-[1.9] text-madde-gray dark:text-gray-300 font-light">
                        {fragment.content[language]}
                    </p>
                )}

            </div>

            {hasToc && (
                <aside className="hidden lg:block">
                    <nav className="sticky top-32 font-mono text-xs" aria-label={tocLabel}>
                        <p className="uppercase tracking-widest text-madde-gray mb-4">{tocLabel}</p>
                        <ul ref={tocRef} className="relative border-l border-black/10 dark:border-white/10 max-h-[calc(100vh-12rem)] overflow-y-auto overscroll-contain pb-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [mask-image:linear-gradient(to_bottom,black_calc(100%-4rem),transparent)]">
                            {headings.map(h => {
                                if (h.level === 3 && h.id.split('-')[0] !== activeSection) return null;
                                const on = activeId === h.id;
                                return (
                                    <li key={h.id} data-toc={h.id}>
                                        <a
                                            href={`#${h.id}`}
                                            onClick={goTo(h.id)}
                                            title={h.title[language]}
                                            className={`block py-1.5 -ml-px border-l transition-colors ${h.level === 3 ? 'pl-7 text-[11px] truncate' : 'pl-4'} ${on
                                                ? 'border-madde-black dark:border-madde-white text-madde-black dark:text-madde-white'
                                                : 'border-transparent text-madde-gray hover:text-madde-black dark:hover:text-madde-white'}`}
                                        >
                                            {h.title[language]}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </aside>
            )}
            </div>
        </motion.article>
    );
};

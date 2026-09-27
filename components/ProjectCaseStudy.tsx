import React from 'react';
import { motion } from 'framer-motion';
import { ContentText, GalleryItem, Language, Project } from '../types';
import { SERVICE_TRANSLATIONS } from '../constants';
import { BallDivider, pickSlots, useDividerBudget } from './BallDivider';
import { GalleryMedia } from './GalleryMedia';
import { GalleryVideo } from './GalleryVideo';
import { StackCards } from './StackCards';

// Case-study body for every project without a hand-written one (Sudi and Wizepod have their
// own). Same design language: numbered sections, mono labels, captioned media and a stack of
// cards, all built from the project's own data. The shared header and Next Project stay in ProjectDetail.

const ACCENT = 'text-madde-red';
const LINE = 'border-black/10 dark:border-white/10';
const MONO = 'font-mono text-[11px] uppercase tracking-widest';
const MUTED = 'text-madde-gray dark:text-gray-400';

type Kind = 'film' | 'loop' | 'still';
type Media = { src: string; kind: Kind; index: number };
type Block = { title?: ContentText; lead?: ContentText; items: GalleryItem[] };

// films are gallery videos; loops are former GIFs (short .mp4 or animated .webp); the rest are stills
const kindOf = (src: string): Kind => {
  const file = src.split('/').pop()!.toLowerCase();
  return file.endsWith('.mp4') || /gif|anim/.test(file) ? 'loop' : 'still';
};

const LABEL: Record<Kind, ContentText> = {
  film: { [Language.EN]: 'Film', [Language.TR]: 'Film' },
  loop: { [Language.EN]: 'Loop', [Language.TR]: 'Döngü' },
  still: { [Language.EN]: 'Still', [Language.TR]: 'Kare' },
};
const PLURAL: Record<Kind, ContentText> = {
  film: { [Language.EN]: 'Films', [Language.TR]: 'Filmler' },
  loop: { [Language.EN]: 'Loops', [Language.TR]: 'Döngüler' },
  still: { [Language.EN]: 'Stills', [Language.TR]: 'Kareler' },
};
const pad = (n: number) => String(n).padStart(2, '0');

const Reveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 0.8 }} className={className}>
    {children}
  </motion.div>
);

const SectionHead: React.FC<{ num: number; total: number; title: string; kicker?: string; lead?: string }> = ({ num, total, title, kicker, lead }) => {
  const ball = pickSlots(total - 1, useDividerBudget()).has(num - 1);
  return (
    <>
      {ball && <BallDivider className="-mx-6 md:-mx-12 mb-4" />}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-end pt-6 ${ball ? '' : `border-t ${LINE}`}`}>
        <div>
          <div className={`flex gap-3 ${MONO}`}>
            <span className={ACCENT}>{pad(num)}</span>
            {kicker && <span className={MUTED}>{kicker}</span>}
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-none">{title}</h2>
        </div>
        {lead && <p className="text-lg md:text-xl leading-relaxed max-w-2xl">{lead}</p>}
      </div>
    </>
  );
};

const Caption: React.FC<{ file: string; note?: string }> = ({ file, note }) => (
  <figcaption className={`mt-2 flex flex-wrap justify-between gap-2 ${MONO} ${MUTED}`}>
    <span className="text-madde-black dark:text-madde-white normal-case tracking-wider">{file}</span>
    {note && <span>{note}</span>}
  </figcaption>
);

export const ProjectCaseStudy: React.FC<{ project: Project; language: Language }> = ({ project, language }) => {
  const t = (c: ContentText) => c[language];
  const isEN = language === Language.EN;

  // number every piece of media by kind, in gallery order
  const media = new Map<string, Media>();
  const count: Record<Kind, number> = { film: 0, loop: 0, still: 0 };
  const add = (src: string, kind: Kind) => { if (!media.has(src)) media.set(src, { src, kind, index: ++count[kind] }); };
  for (const item of project.gallery ?? []) {
    if (item.type === 'video') add(item.src, 'film');
    else if (item.type === 'image') add(item.src, kindOf(item.src));
    else if (item.type === 'group') item.items.forEach(i => add(i.src, kindOf(i.src)));
  }
  const all = [...media.values()];
  const kinds = (['film', 'loop', 'still'] as Kind[]).filter(k => count[k] > 0);

  // the gallery splits into sections at every titled text block; untitled ones stay inline as notes
  const blocks: Block[] = [{ items: [] }];
  for (const item of project.gallery ?? []) {
    if (item.type === 'text' && item.title) blocks.push({ title: item.title, lead: item.content, items: [] });
    else blocks[blocks.length - 1].items.push(item);
  }
  const work = blocks.filter(b => b.items.length || b.title);
  const total = 2 + work.length;

  const scope = project.services.map(s => SERVICE_TRANSLATIONS[s]?.[language] ?? s);
  const delivered = kinds.map(k => `${count[k]} ${(count[k] === 1 ? LABEL[k] : PLURAL[k])[language].toLowerCase()}`).join(' · ');

  const caption = (src: string) => {
    const m = media.get(src)!;
    return <Caption file={`${t(LABEL[m.kind])} ${pad(m.index)}`} note={`${pad(m.index)} / ${pad(count[m.kind])}`} />;
  };

  const renderItem = (item: GalleryItem, key: number) => {
    const wide = (item.colSpan ?? 2) === 2;
    const span = wide ? 'md:col-span-2' : '';
    if (item.type === 'video') return (
      <figure key={key} className={span}>
        <GalleryVideo item={item} isWide={wide} language={language} />
        {caption(item.src)}
      </figure>
    );
    if (item.type === 'image') return (
      <figure key={key} className={span}>
        <div className="overflow-hidden"><GalleryMedia src={item.src} alt="" className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700" /></div>
        {caption(item.src)}
      </figure>
    );
    if (item.type === 'group') return (
      <div key={key} className={`${span} grid grid-cols-2 ${item.cols === 4 ? 'md:grid-cols-4' : ''} gap-4 md:gap-8 content-start`}>
        {item.items.map(i => (
          <figure key={i.src}>
            <div className="overflow-hidden"><GalleryMedia src={i.src} alt="" className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700" /></div>
            {caption(i.src)}
          </figure>
        ))}
      </div>
    );
    return (
      <div key={key} className={`${span} border-t ${LINE} pt-4 flex flex-col gap-4`}>
        <div className={`${MONO} ${MUTED}`}>{isEN ? 'Note' : 'Not'}</div>
        <p className="text-xl md:text-2xl leading-snug tracking-tight">{t(item.content)}</p>
      </div>
    );
  };

  const cards: React.ReactNode[] = [
    ...kinds.map(k => {
      const list = all.filter(m => m.kind === k);
      return (
        <div key={k} className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <div className={`basis-32 shrink-0 ${MONO} ${MUTED}`}>{t(PLURAL[k])}</div>
          <div className="basis-12 shrink-0 font-mono text-sm">{count[k]}</div>
          <div className="flex-1 min-w-[16rem] flex flex-wrap gap-1.5">
            {k === 'still'
              ? list.slice(0, 8).map(m => <img key={m.src} loading="lazy" decoding="async" src={m.src} alt="" className="h-12 w-16 object-cover bg-neutral-900" />)
              : list.map(m => <span key={m.src} className="bg-black/5 dark:bg-white/5 px-2 py-1 font-mono text-[11px]">{t(LABEL[k])} {pad(m.index)}</span>)}
            {k === 'still' && list.length > 8 && <span className={`self-center ${MONO} ${MUTED}`}>+{list.length - 8}</span>}
          </div>
        </div>
      );
    }),
    <div key="scope" className="flex flex-wrap items-center gap-x-4 gap-y-3">
      <div className={`basis-32 shrink-0 ${MONO} ${MUTED}`}>{isEN ? 'Scope' : 'Kapsam'}</div>
      <div className="basis-12 shrink-0 font-mono text-sm">{scope.length}</div>
      <div className="flex-1 min-w-[16rem] flex flex-wrap gap-1.5">
        {scope.map(s => <span key={s} className={`border ${LINE} px-2 py-1 font-mono text-[10px] uppercase tracking-widest`}>{s}</span>)}
      </div>
    </div>,
  ];

  return (
    <div className="relative z-10 px-6 md:px-12 mb-24">
      <div className="max-w-[1920px] mx-auto space-y-24 md:space-y-40">

        {/* 01 BRIEF */}
        <Reveal>
          <SectionHead num={1} total={total} title="Brief" />
          <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              [isEN ? 'Client' : 'Müşteri', `${project.client} · ${project.year}`],
              [isEN ? 'Scope' : 'Kapsam', scope.join(' · ')],
              [isEN ? 'Delivered' : 'Teslim', delivered],
            ].map(([label, body]) => (
              <div key={label} className={`border-t ${LINE} pt-4`}>
                <div className={`${MONO} ${MUTED}`}>{label}</div>
                <p className="mt-4 text-lg md:text-xl leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 02 DELIVERABLES */}
        <Reveal>
          <SectionHead num={2} total={total} title={isEN ? 'Deliverables' : 'Teslimler'} kicker={delivered} />
          <StackCards className="mt-8 md:mt-16">{cards}</StackCards>
        </Reveal>

        {/* 03… THE WORK, split at titled text blocks */}
        {work.map((b, i) => (
          <Reveal key={i}>
            <SectionHead
              num={3 + i}
              total={total}
              title={b.title ? t(b.title) : (isEN ? 'The Work' : 'İş')}
              lead={b.lead ? t(b.lead) : undefined}
            />
            {b.items.length > 0 && (
              <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12">
                {b.items.map(renderItem)}
              </div>
            )}
          </Reveal>
        ))}

      </div>
    </div>
  );
};

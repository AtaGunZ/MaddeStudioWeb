import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ContentText, Language } from '../types';
import { GalleryVideo } from './GalleryVideo';

// Case-study body for the 'sudi-reels' project. The shared header (title, meta,
// challenge / solution) and the Next Project footer stay in ProjectDetail.

const DIR = '/works/Sudi_Reels';
const ACCENT = 'text-[#E84142]';
const LINE = 'border-black/10 dark:border-white/10';
const MONO = 'font-mono text-[11px] uppercase tracking-widest';
const MUTED = 'text-madde-gray dark:text-gray-400';

const L = (en: string, tr: string): ContentText => ({ [Language.EN]: en, [Language.TR]: tr });

const SHOTS = [
  { id: 'kofte', name: L('Köfte', 'Köfte') },
  { id: 'barg', name: L('Barg kebab', 'Barg kebap') },
  { id: 'cocuk', name: L('Child', 'Çocuk') },
  { id: 'top', name: L('Table', 'Masa') },
  { id: 'nar', name: L('Pomegranate', 'Nar') },
  { id: 'kadin', name: L('Diner', 'Misafir') },
];

const RULES = [
  { text: L('Food is only ever taken by spoon or fork, never trimmed away or shrinking by itself.', 'Yemek yalnızca kaşık ya da çatalla alınır; asla kendiliğinden eksilmez ya da küçülmez.'), tags: ['Blockout', 'Prompt', 'Negative prompt'] },
  { text: L('The camera is locked off in the top-down reel; dish changes are clean stop-motion swaps at fixed times (4.8 s, 9.0 s, 13.3 s).', 'Tepeden reel\'de kamera sabittir; tabak değişimleri belirli anlarda (4,8 sn, 9,0 sn, 13,3 sn) temiz stop-motion geçişlerle olur.'), tags: ['Blockout', 'Prompt', 'Negative prompt'] },
  { text: L('Hands only, entering from the frame edges; natural weight and contact.', 'Yalnızca eller, kadrajın kenarlarından girer; doğal ağırlık ve temas.'), tags: ['Blockout', 'Prompt', 'Negative prompt'] },
  { text: L('No music in the generation; sound is designed in the edit.', 'Üretimde müzik yok; ses kurguda tasarlanır.'), tags: ['Prompt', 'Negative prompt'] },
  { text: L('Herbs, dishes and table setting must match the reference photos.', 'Yeşillikler, tabaklar ve masa düzeni referans fotoğraflarla birebir eşleşmelidir.'), tags: ['Prompt'] },
];

// Mean colors sampled from output_raw_grade.jpg and output_final_grade.jpg
const GRADE_SWATCHES = [
  { area: L('White plate', 'Beyaz tabak'), raw: '#C2BDAE', final: '#C7BDAC' },
  { area: L('Marble', 'Mermer'), raw: '#211F20', final: '#1E1A18' },
];

const PROMPT_ORDER = ['Video reference', 'Camera & lighting', 'Set', 'Subject', 'Hands', 'Motion', 'Audio', 'Timeline', 'Negative prompt'];

const Reveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 0.8 }} className={className}>
    {children}
  </motion.div>
);

const SectionHead: React.FC<{ num: string; title: string; kicker?: string; lead?: string }> = ({ num, title, kicker, lead }) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-end pt-6 border-t ${LINE}`}>
    <div>
      <div className={`flex gap-3 ${MONO}`}>
        <span className={ACCENT}>{num}</span>
        {kicker && <span className={MUTED}>{kicker}</span>}
      </div>
      <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-none">{title}</h2>
    </div>
    {lead && <p className="text-lg md:text-xl leading-relaxed max-w-2xl">{lead}</p>}
  </div>
);

const Caption: React.FC<{ file: string; note?: string }> = ({ file, note }) => (
  <figcaption className={`mt-2 flex flex-wrap justify-between gap-2 ${MONO} ${MUTED}`}>
    <span className="text-madde-black dark:text-madde-white normal-case tracking-wider">{file}</span>
    {note && <span>{note}</span>}
  </figcaption>
);

// Drag (or arrow keys) to reveal the right-hand image over the left-hand one
const BeforeAfter: React.FC<{ before: string; after: string; beforeLabel: string; afterLabel: string; className?: string }> = ({ before, after, beforeLabel, afterLabel, className }) => {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const setFrom = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100)));
  };
  return (
    <div
      role="slider"
      tabIndex={0}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      aria-label={`${beforeLabel} / ${afterLabel}`}
      onPointerDown={e => { dragging.current = true; e.currentTarget.setPointerCapture(e.pointerId); setFrom(e); }}
      onPointerMove={e => { if (dragging.current) setFrom(e); }}
      onPointerUp={() => { dragging.current = false; }}
      onPointerCancel={() => { dragging.current = false; }}
      onKeyDown={e => {
        if (e.key === 'ArrowLeft') setPos(p => Math.max(0, p - 5));
        if (e.key === 'ArrowRight') setPos(p => Math.min(100, p + 5));
      }}
      className={`relative aspect-[9/16] overflow-hidden bg-neutral-900 select-none touch-pan-y cursor-ew-resize outline-none focus-visible:ring-1 focus-visible:ring-madde-white ${className ?? ''}`}
    >
      <img src={before} alt="" draggable={false} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <img src={after} alt="" draggable={false} className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ clipPath: `inset(0 0 0 ${pos}%)` }} />
      <div className="absolute top-0 bottom-0 w-px bg-madde-white pointer-events-none" style={{ left: `${pos}%` }} />
      <div className="absolute top-1/2 -mt-4 -ml-4 w-8 h-8 rounded-full border border-madde-white bg-black/60 flex items-center justify-center text-madde-white text-xs pointer-events-none" style={{ left: `${pos}%` }}>↔</div>
      <span className={`absolute top-3 left-3 px-2 py-1 bg-black/60 text-madde-white ${MONO} text-[10px] pointer-events-none`}>{beforeLabel}</span>
      <span className={`absolute top-3 right-3 px-2 py-1 bg-black/60 text-madde-white ${MONO} text-[10px] pointer-events-none`}>{afterLabel}</span>
    </div>
  );
};

// Reels UI zones drawn over a 9:16 frame (layout study, not a screenshot)
// Hatched fill so the UI zones read even over a dark photo
const UI_ZONE = { background: 'repeating-linear-gradient(135deg, rgba(255,255,255,.12) 0 6px, transparent 6px 12px), rgba(0,0,0,.7)' };

const SafeZoneFrame: React.FC<{ src: string; zoneLabels: { top: string; actions: string; bottom: string; clear: string; dish: string } }> = ({ src, zoneLabels }) => (
  <div className="relative aspect-[9/16] overflow-hidden bg-neutral-900 text-madde-white">
    <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div style={UI_ZONE} className={`absolute inset-x-0 top-0 h-[14%] border-b border-dashed border-white/60 flex items-end px-3 pb-2 ${MONO} text-[10px]`}>{zoneLabels.top}</div>
    <div style={UI_ZONE} className="absolute right-0 top-[14%] bottom-[35%] w-[16%] border-l border-dashed border-white/60 flex items-center justify-center">
      <span className={`${MONO} text-[10px] [writing-mode:vertical-rl]`}>{zoneLabels.actions}</span>
    </div>
    <div style={UI_ZONE} className={`absolute inset-x-0 bottom-0 h-[35%] border-t border-dashed border-white/60 px-3 pt-2 ${MONO} text-[10px]`}>{zoneLabels.bottom}</div>
    <div className="absolute left-0 top-[14%] right-[16%] bottom-[35%] outline outline-1 -outline-offset-1 outline-white">
      <span className={`absolute left-2 top-2 px-1.5 py-0.5 bg-madde-white text-madde-black ${MONO} text-[10px]`}>{zoneLabels.clear}</span>
    </div>
    <div className="absolute left-[23%] top-[34%] w-[54%] h-[31%] border border-dashed border-white">
      <span className={`absolute right-0 -bottom-5 ${MONO} text-[10px]`}>{zoneLabels.dish}</span>
    </div>
    <Crosshair />
  </div>
);

const Crosshair: React.FC = () => (
  <div className="absolute left-1/2 top-1/2 w-7 h-7 -ml-3.5 -mt-3.5 rounded-full border border-white pointer-events-none">
    <div className="absolute left-1/2 -top-2 -bottom-2 w-px bg-white" />
    <div className="absolute top-1/2 -left-2 -right-2 h-px bg-white" />
  </div>
);

export const SudiCaseStudy: React.FC<{ language: Language }> = ({ language }) => {
  const t = (c: ContentText) => c[language];
  const isEN = language === Language.EN;

  return (
    <div className="relative z-10 px-6 md:px-12 mb-24">
      <div className="max-w-[1920px] mx-auto space-y-24 md:space-y-40">

        {/* REELS */}
        <Reveal>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
            {[
              { src: 'sudi_reel_02.mp4', poster: 'poster_02.jpg', note: L('33 s · cinematic', '33 sn · sinematik') },
              { src: 'sudi_reel_01.mp4', poster: 'poster_01.jpg', note: L('22 s · top-down, one shot', '22 sn · tepeden, tek plan') },
            ].map(v => (
              <figure key={v.src} className="w-full md:w-[calc(85vh*9/16)] max-w-full">
                <GalleryVideo
                  item={{ type: 'video', src: `${DIR}/${v.src}`, poster: `${DIR}/${v.poster}`, customAspect: 'aspect-[9/16]', soundToggle: true, playOnView: true }}
                  isWide={false}
                  language={language}
                />
                <Caption file={v.src} note={t(v.note)} />
              </figure>
            ))}
          </div>
        </Reveal>

        {/* 01 BRIEF */}
        <Reveal>
          <SectionHead num="01" title={isEN ? 'Brief' : 'Brief'} />
          <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              [L('Objective', 'Amaç'), L('Two Instagram Reels meant to drive table reservations and profile visits, and to introduce the menu.', 'Masa rezervasyonu ve profil ziyareti getirmesi, menüyü tanıtması amaçlanan iki Instagram Reels.')],
              [L('Constraint', 'Kısıt'), L('Two days, no raw footage of the brand; only its Instagram feed and website.', 'İki gün; markaya ait ham görüntü yok, yalnızca Instagram hesabı ve web sitesi.')],
              [L('Output', 'Çıktı'), L('Two vertical reels (22 s and 33 s), finished in Premiere.', 'Premiere\'de bitirilen iki dikey reel (22 sn ve 33 sn).')],
            ].map(([label, body]) => (
              <div key={label[Language.EN]} className={`border-t ${LINE} pt-4`}>
                <div className={`${MONO} ${MUTED}`}>{t(label)}</div>
                <p className="mt-4 text-lg md:text-xl leading-relaxed">{t(body)}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 02 PIPELINE */}
        <Reveal>
          <SectionHead num="02" title={isEN ? 'Pipeline' : 'Süreç'} />
          <div className="mt-8 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              ['Blender blockout', L('Decides camera and timing.', 'Kamerayı ve zamanlamayı belirler.')],
              ['Upload package', L('Decides the identity of food and set.', 'Yemeğin ve setin kimliğini belirler.')],
              ['Seedance 2.5 Omni Reference', L('Generation (Dreamina / CapCut).', 'Üretim (Dreamina / CapCut).')],
              ['Premiere finish', L('Decides the cut, grade and end card.', 'Kurguyu, renk düzeltmesini ve kapanış kartını belirler.')],
            ].map(([step, body], i) => (
              <div key={step as string} className="border-t border-madde-black dark:border-madde-white pt-4 flex flex-col gap-4">
                <div className={`flex justify-between ${MONO} ${MUTED}`}><span>{isEN ? 'Step' : 'Adım'} {i + 1}</span><span>{i < 3 ? '→' : '■'}</span></div>
                <div className="font-mono text-sm uppercase tracking-wider font-medium">{step as string}</div>
                <p className={`text-base leading-relaxed ${MUTED}`}>{t(body as ContentText)}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 03 BLOCKOUT → FRAME */}
        <Reveal>
          <SectionHead
            num="03"
            kicker={isEN ? 'Compositional control' : 'Kompozisyon kontrolü'}
            title={isEN ? 'Blockout → Frame' : 'Blockout → Kare'}
            lead={isEN
              ? 'The blockout decides what AI usually gets wrong: where the camera goes, what the hand touches and how much food is left.'
              : 'AI\'ın genelde yanlış yaptığı şeylere blockout karar verir: kamera nereye gider, el neye dokunur, tabakta ne kadar yemek kalır.'}
          />
          <div className={`mt-8 md:mt-16 flex justify-end ${MONO} ${MUTED}`}>{isEN ? 'Drag to compare' : 'Karşılaştırmak için sürükleyin'}</div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {SHOTS.map((s, i) => (
              <figure key={s.id}>
                <BeforeAfter before={`${DIR}/blockout_${s.id}.jpg`} after={`${DIR}/output_${s.id}.jpg`} beforeLabel="Blockout" afterLabel={isEN ? 'Frame' : 'Kare'} />
                <Caption file={`${String(i + 1).padStart(2, '0')} · ${t(s.name)}`} note={`blockout_${s.id} / output_${s.id}`} />
              </figure>
            ))}
          </div>
        </Reveal>

        {/* 04 THE PROMPT */}
        <Reveal>
          <SectionHead
            num="04"
            title={isEN ? 'The Prompt' : 'Prompt'}
            lead={isEN
              ? 'The real upload package of one shot: frames of the motion reference, six image references and an excerpt of the prompt. The model gets all three together.'
              : 'Tek bir çekimin gerçek yükleme paketi: hareket referansından kareler, altı referans görsel ve prompt\'tan bir bölüm. Model üçünü birlikte alır.'}
          />
          <figure className="mt-8 md:mt-16">
            <img src={`${DIR}/prompt_paket.jpg`} alt={isEN ? 'Upload package of one shot' : 'Tek çekimin yükleme paketi'} className="w-full h-auto" />
            <Caption file="prompt_paket.jpg" note="sudi_v4/YUKLE_TEK_SEFER" />
          </figure>
          <div className="mt-12 md:mt-24">
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tighter">{isEN ? 'Per shot' : 'Çekim başına'}</h3>
            <div className={`mt-6 border-t ${LINE}`}>
              {[
                [L('Motion ref', 'Hareket ref.'), '1', <p key="m">{isEN ? 'An MP4 rendered from the Blender blockout: camera, hands, timing, dish swaps.' : 'Blender blockout\'undan alınmış MP4: kamera, eller, zamanlama, tabak değişimleri.'}</p>],
                [L('Image refs', 'Görsel ref.'), '3–6', (
                  <div key="i" className="flex flex-col gap-2">
                    {[[L('Dish photos', 'Yemek fotoğrafları'), L('Weight · high', 'Ağırlık · yüksek')], [L('Table / venue', 'Masa / mekân'), L('Weight · medium', 'Ağırlık · orta')], [L('Sleeve or character', 'Kol ya da karakter'), L('Weight · low', 'Ağırlık · düşük')]].map(([a, b]) => (
                      <div key={a[Language.EN]} className="flex justify-between gap-4"><span>{t(a)}</span><span className={`${MONO} ${MUTED}`}>{t(b)}</span></div>
                    ))}
                  </div>
                )],
                [L('Prompt', 'Prompt'), '1', (
                  <div key="p" className="flex flex-col gap-3">
                    <p>{isEN ? 'Up to 11.5k characters, always in the same order:' : '11,5 bin karaktere kadar, her zaman aynı sırayla:'}</p>
                    <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider">
                      {PROMPT_ORDER.map((p, i) => (
                        <React.Fragment key={p}>
                          <span className={`border ${LINE} px-1.5 py-1`}>{p}</span>
                          {i < PROMPT_ORDER.length - 1 && <span className={MUTED}>→</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )],
                [L('Storage', 'Saklama'), '1', (
                  <div key="s" className="flex flex-col gap-3">
                    <p>{isEN ? 'Stored together in one folder per shot:' : 'Her çekim için tek bir klasörde birlikte saklanır:'}</p>
                    <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                      {['1_HAREKET.mp4', '2_YEMEK.png', '3_MASA.png…', 'PROMPT.txt'].map(f => <span key={f} className="bg-black/5 dark:bg-white/5 px-2 py-1">{f}</span>)}
                    </div>
                  </div>
                )],
              ].map(([label, count, body]) => (
                <div key={(label as ContentText)[Language.EN]} className={`flex flex-wrap gap-x-4 gap-y-2 py-5 border-b ${LINE}`}>
                  <div className={`basis-32 shrink-0 ${MONO} ${MUTED}`}>{t(label as ContentText)}</div>
                  <div className="basis-12 shrink-0 font-mono text-sm">{count as string}</div>
                  <div className="flex-1 min-w-[16rem] text-base leading-relaxed">{body as React.ReactNode}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 05 PRODUCTION RULES */}
        <Reveal>
          <SectionHead num="05" title={isEN ? 'Production rules' : 'Üretim kuralları'} />
          <div className={`mt-8 md:mt-16 flex justify-end ${MONO} ${MUTED}`}>{isEN ? 'Enforced in' : 'Uygulandığı yer'}</div>
          <div className={`mt-4 border-t ${LINE}`}>
            {RULES.map((r, i) => (
              <div key={i} className={`flex flex-wrap items-baseline gap-x-8 gap-y-3 py-6 border-b ${LINE}`}>
                <span className={`flex items-center gap-2.5 font-mono text-[11px] tracking-widest ${ACCENT}`}>
                  <span className="w-2 h-2 bg-[#E84142] inline-block" />R{String(i + 1).padStart(2, '0')}
                </span>
                <p className="flex-1 basis-[26rem] text-lg md:text-2xl leading-snug">{t(r.text)}</p>
                <div className="flex flex-wrap gap-1.5">
                  {r.tags.map(tag => <span key={tag} className={`border ${LINE} px-2 py-1 font-mono text-[10px] uppercase tracking-widest`}>{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 06 REPEATABLE */}
        <Reveal>
          <SectionHead
            num="06"
            kicker={isEN ? 'Consistency across runs' : 'Koşular arası tutarlılık'}
            title={isEN ? 'Repeatable, Not Lucky' : 'Şans Değil, Tekrarlanabilir'}
            lead={isEN
              ? 'Four runs of the same opening shot, made across three revisions of the package. The dish, the bowl, the black marble table and the warm light hold in every run, because the reference images are fixed. What changes is the camera, which follows the blockout of each revision. The prompt was refined between runs.'
              : 'Aynı açılış planının, paketin üç farklı sürümüyle yapılmış dört koşusu. Yemek, kase, siyah mermer masa ve sıcak ışık her koşuda aynı kalıyor, çünkü referans görseller sabit. Değişen kamera; o da her sürümün blockout\'unu izliyor. Prompt koşular arasında iyileştirildi.'}
          />
          <div className="mt-8 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[1, 2, 3, 4].map(n => (
              <figure key={n}>
                <img src={`${DIR}/repeat_0${n}.jpg`} alt="" className="w-full aspect-[9/16] object-cover bg-neutral-900" />
                <Caption file={`repeat_0${n}.jpg`} note={`${isEN ? 'Run' : 'Koşu'} ${n}`} />
              </figure>
            ))}
          </div>
        </Reveal>

        {/* 07 OUTPUT → FINAL */}
        <Reveal>
          <SectionHead
            num="07"
            title={isEN ? 'Output → Final' : 'Çıktı → Final'}
            lead={isEN
              ? 'Raw generation against the finished frame. Drag across each frame to compare. Finishing was done in Premiere only.'
              : 'Ham üretim ile bitmiş kare. Karşılaştırmak için karenin üzerinde sürükleyin. Bitirme işlemleri yalnızca Premiere\'de yapıldı.'}
          />
          <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <figure className="w-full max-w-[34rem] order-2">
              <BeforeAfter before={`${DIR}/output_raw_grade.jpg`} after={`${DIR}/output_final_grade.jpg`} beforeLabel={isEN ? 'Raw' : 'Ham'} afterLabel="Final" />
              <Caption file="output_raw_grade / output_final_grade" note={isEN ? 'Same frame' : 'Aynı kare'} />
              <div className="mt-4 grid grid-cols-2 gap-4">
                {GRADE_SWATCHES.map(sw => (
                  <div key={sw.area[Language.EN]}>
                    <div className={`${MONO} ${MUTED}`}>{t(sw.area)}</div>
                    <div className="mt-2 flex">
                      {[[isEN ? 'Raw' : 'Ham', sw.raw], ['Final', sw.final]].map(([label, hex]) => (
                        <div key={label} className="flex-1">
                          <div className={`h-12 border ${LINE}`} style={{ background: hex }} />
                          <div className={`mt-1 ${MONO} ${MUTED} text-[10px]`}>{label} · {hex}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className={`mt-4 pt-4 border-t ${LINE} text-base leading-relaxed`}>
                {isEN
                  ? 'A subtle warm grade in Premiere: the white plate shifts toward cream and the marble loses its cool cast. Measured across the frame: blue −10, green −8, red −5 (0–255).'
                  : 'Premiere\'de hafif, sıcak bir renk düzeltmesi: beyaz tabak kırık beyaza kayar, mermerin soğuk tonu kaybolur. Tüm karede ölçülen değişim: mavi −10, yeşil −8, kırmızı −5 (0–255).'}
              </p>
            </figure>
            <figure className="w-full max-w-[34rem] order-1 md:justify-self-end">
              <BeforeAfter before={`${DIR}/output_raw.jpg`} after={`${DIR}/output_final.jpg`} beforeLabel={isEN ? 'Raw' : 'Ham'} afterLabel="Final" />
              <Caption file="output_raw / output_final" note={isEN ? 'Closing shot' : 'Kapanış planı'} />
              <p className={`mt-4 pt-4 border-t ${LINE} text-base leading-relaxed`}>
                {isEN ? 'The closing shot, with a blur ramp and the logo end card added in Premiere.' : 'Kapanış planı; Premiere\'de bulanıklık rampası ve logolu kapanış kartı eklendi.'}
              </p>
            </figure>
          </div>
        </Reveal>

        {/* 08 LAYOUT CHECK */}
        <Reveal>
          <SectionHead
            num="08"
            kicker={isEN ? 'Layout study · UI/UX' : 'Yerleşim çalışması · UI/UX'}
            title={isEN ? 'Layout check' : 'Yerleşim kontrolü'}
            lead={isEN
              ? 'The frame checked where it will live: inside the Reels interface and as grid thumbnails. The bowl and both forks sit in the clear zone, just above the caption area.'
              : 'Kare, yayınlanacağı yerde kontrol edildi: Reels arayüzünün içinde ve ızgara küçük görseli olarak. Kase ve iki çatal, alt yazı alanının hemen üstünde, boş alanda kalıyor.'}
          />
          <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <figure className="w-full max-w-[32rem] md:justify-self-center">
              <SafeZoneFrame
                src={`${DIR}/poster_01.jpg`}
                zoneLabels={isEN
                  ? { top: 'UI · top 14%', actions: 'UI · actions', bottom: 'UI · caption, audio, nav · bottom 35%', clear: 'Clear zone', dish: 'Dish' }
                  : { top: 'Arayüz · üst %14', actions: 'Arayüz · butonlar', bottom: 'Arayüz · açıklama, ses, menü · alt %35', clear: 'Boş alan', dish: 'Yemek' }}
              />
              <Caption file="poster_01.jpg" note={isEN ? '9:16 · Reels frame · layout study' : '9:16 · Reels karesi · yerleşim çalışması'} />
            </figure>
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-2 gap-4 md:gap-8 items-end">
                {[['aspect-square', '1:1'], ['aspect-[4/5]', '4:5']].map(([cls, label]) => (
                  <figure key={label}>
                    <div className={`relative ${cls} overflow-hidden bg-neutral-900`}>
                      <img src={`${DIR}/poster_01.jpg`} alt="" className="absolute inset-0 w-full h-full object-cover" />
                      <Crosshair />
                    </div>
                    <Caption file={label} note={isEN ? 'Grid thumb' : 'Izgara görseli'} />
                  </figure>
                ))}
              </div>
              <div className={`border-t ${LINE}`}>
                {[
                  [L('Top UI zone', 'Üst arayüz alanı'), '0–14%'],
                  [L('Bottom UI zone', 'Alt arayüz alanı'), '65–100%'],
                  [L('Action column', 'Buton sütunu'), isEN ? 'Right 16%' : 'Sağ %16'],
                  [L('Dish', 'Yemek'), 'Y 34–65% · X 23–77%'],
                  [L('Focal point', 'Odak noktası'), isEN ? '50 / 50 · holds in 1:1 and 4:5' : '50 / 50 · 1:1 ve 4:5\'te korunuyor'],
                ].map(([k, v]) => (
                  <div key={(k as ContentText)[Language.EN]} className={`flex justify-between gap-4 py-3.5 border-b ${LINE} ${MONO}`}>
                    <span className={MUTED}>{t(k as ContentText)}</span><span>{v as string}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* 09 WITH REAL BRAND DATA */}
        <Reveal>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start pt-6 border-t ${LINE}`}>
            <div>
              <div className={MONO}><span className={ACCENT}>09</span></div>
              <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-none">{isEN ? 'With real brand data' : 'Gerçek marka verisiyle'}</h2>
            </div>
            <div className="md:mt-7 flex flex-col gap-4 text-lg md:text-xl leading-relaxed max-w-2xl">
              <p>{isEN ? 'The dish photos acted as product references.' : 'Yemek fotoğrafları ürün referansı görevi gördü.'}</p>
              <p>{isEN ? 'With owned photography of the product and the venue, the same package holds product fidelity even tighter.' : 'Ürünün ve mekânın kendi çekimleriyle aynı paket, ürüne sadakati daha da sıkı tutar.'}</p>
              <p>{isEN ? 'The folder structure becomes a reusable reference library for a team.' : 'Klasör yapısı, bir ekip için yeniden kullanılabilir bir referans kütüphanesine dönüşür.'}</p>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
};

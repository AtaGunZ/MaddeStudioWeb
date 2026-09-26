import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ContentText, Language } from '../types';
import { GalleryVideo } from './GalleryVideo';

// Body of the 'wizepod' project: the 3D film and renders woven together with the AI case
// study they fed. The shared header (title, meta, challenge / solution) and the Next
// Project footer stay in ProjectDetail.

const DIR = '/works/Wizepod_AI';
const DIR3D = '/works/Wizepod';
const ACCENT = 'text-[#5F7D38] dark:text-[#97B36C]';
const LINE = 'border-black/10 dark:border-white/10';
const MONO = 'font-mono text-[11px] uppercase tracking-widest';
const MUTED = 'text-madde-gray dark:text-gray-400';

const L = (en: string, tr: string): ContentText => ({ [Language.EN]: en, [Language.TR]: tr });

// The fixed product block, word for word as it goes into every product prompt
const PRODUCT_BLOCK = `### PRODUCT (fixed block; identical in every image) ###
The Wizepod CGM applicator and sensor, reproduced exactly from the product images.
Applicator:
- Body: a truncated cone that widens toward the base, matte white medical plastic with a soft satin sheen.
- Base: a slightly wider collar ring, then a base cap with evenly spaced vertical ribs all the way around.
- Top: flat, a wide white ring around ONE large round light-green push button (about #97B36C) that fills about two thirds of the top's diameter, centered and slightly recessed.
- Side: an embossed hummingbird mark and the word WIZEPOD, white on white, read only through light and shadow.
Sensor:
- A low white matte disc with rounded edges.
- Its top has exactly ONE small dark rounded-rectangle slot between the center and the edge.
Size:
- The applicator is about 7 cm tall and 4.5 cm wide at the base.
- The disc is about 2 cm across.`;

const PROMPT_ORDER = ['References', 'Product (fixed)', 'Scale', 'Perspective', 'Light', 'Keep'];

// Mean color of the button pixels in each final frame, against the brand green
const BUTTON_SWATCHES = [
  { area: L('Lifestyle scene', 'Yaşam sahnesi'), out: '#9BAC7C', de: '12.3' },
  { area: L('E-commerce hero', 'E-ticaret hero'), out: '#B4C387', de: '10.5' },
  { area: L('Application', 'Uygulama'), out: '#99B07E', de: '11.0' },
];

const FAILS = [
  { src: 'fidelity_fail.jpg', label: L('Product in the prompt only', 'Ürün sadece prompt\'ta'), note: L('Redrawn from scratch: about 21 cm tall instead of 7, the top turned toward the camera.', 'Sıfırdan çizildi: 7 yerine yaklaşık 21 cm, tepe kameraya dönük.') },
  { src: 'fail_guide.jpg', label: L('Flat grey guide, one model', 'Düz gri kılavuz, tek model'), note: L('The guide was ignored: about 16 cm, the top still seen from above.', 'Kılavuz yok sayıldı: yaklaşık 16 cm, tepe hâlâ yukarıdan.') },
  { src: 'fail_collage.jpg', label: L('Pasted render, AI relight', 'Yapıştırılmış render, AI ışığı'), note: L('Right size, but an eye-level render in a scene seen from above, lit like a studio in a sunlit room.', 'Boyut doğru; ama yukarıdan bakan bir sahnede göz hizası render, güneşli odada stüdyo ışığı.') },
];

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
const BeforeAfter: React.FC<{ before: string; after: string; beforeLabel: string; afterLabel: string; aspect?: string }> = ({ before, after, beforeLabel, afterLabel, aspect = 'aspect-[3/2]' }) => {
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
      className={`relative ${aspect} overflow-hidden bg-neutral-900 select-none touch-pan-y cursor-ew-resize outline-none focus-visible:ring-1 focus-visible:ring-madde-white`}
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

const Film: React.FC<{ src: string; language: Language; aspect?: string }> = ({ src, language, aspect = 'aspect-video' }) => (
  <GalleryVideo item={{ type: 'video', src: `${DIR3D}/${src}`, customAspect: aspect, autoPlay: true, loop: true, muted: true, playOnView: true }} isWide language={language} />
);

const Crosshair: React.FC<{ x?: string; y?: string }> = ({ x = '50%', y = '50%' }) => (
  <div className="absolute w-7 h-7 -ml-3.5 -mt-3.5 rounded-full border border-white pointer-events-none" style={{ left: x, top: y }}>
    <div className="absolute left-1/2 -top-2 -bottom-2 w-px bg-white" />
    <div className="absolute top-1/2 -left-2 -right-2 h-px bg-white" />
  </div>
);

// Product sits at about x 36%, y 71% of ecom_hero.jpg; the box at x 82%

// Shop copy set over the frames (layout study, not a live page)
const SERIF: React.CSSProperties = { fontFamily: "'Fraunces', Georgia, serif", fontOpticalSizing: 'auto' };
const GLASS = 'rounded-full bg-white/25 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.6)] text-madde-black';

const COPY = {
  eyebrow: 'Wizepod CGM',
  title: L('Your glucose, <i>quietly</i> in the background.', 'Şekeriniz, <i>sessizce</i> arka planda.'),
  short: L('<i>Quietly</i>, in the background.', '<i>Sessizce</i>, arka planda.'),
  body: L('A small sensor on the upper arm, applied at home with a single press.', 'Üst kola takılan küçük bir sensör; evde, tek bir basışla uygulanır.'),
  buy: L('Buy now', 'Satın al'),
  how: L('How it works', 'Nasıl çalışır'),
  box: L('In the box · applicator + sensor', 'Kutuda · aplikatör + sensör'),
};

// Title strings carry one <i> for the soft italic accent; nothing user-supplied goes through here
const Title: React.FC<{ html: string; className?: string }> = ({ html, className }) => (
  <div className={className} style={SERIF} dangerouslySetInnerHTML={{ __html: html }} />
);

const GlassButton: React.FC<{ label: string; className?: string }> = ({ label, className }) => (
  <span className={`${GLASS} inline-flex items-center gap-2 font-medium tracking-tight ${className ?? ''}`}>
    {label}<span aria-hidden className="opacity-60">→</span>
  </span>
);

const DesktopHero: React.FC<{ isEN: boolean; t: (c: ContentText) => string }> = ({ isEN, t }) => (
  <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900 text-madde-black">
    <img src={`${DIR}/ecom_hero.jpg`} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '50% 70%' }} />
    <div className="absolute inset-x-0 top-0 h-[40%] border-b border-dashed border-black/15" />
    <div className="absolute left-[6%] top-[8%] max-w-[44%]">
      <div className="flex items-center gap-2 text-[9px] sm:text-[11px] md:text-xs tracking-wide opacity-70">
        <span className="w-1.5 h-1.5 rounded-full bg-[#97B36C]" />{COPY.eyebrow}
      </div>
      <Title html={t(COPY.title)} className="mt-1.5 md:mt-3 text-xl sm:text-3xl lg:text-5xl font-light leading-[1.02] tracking-[-0.02em] [&_i]:font-normal" />
      <p className="hidden sm:block mt-2 md:mt-4 max-w-[80%] text-[11px] md:text-sm lg:text-base font-light leading-relaxed opacity-75">{t(COPY.body)}</p>
      <div className="mt-2 md:mt-6 flex items-center gap-3 md:gap-5">
        <GlassButton label={t(COPY.buy)} className="px-3 py-1 text-[10px] sm:px-4 sm:py-1.5 sm:text-xs md:px-6 md:py-2.5 md:text-sm" />
        <span className="hidden sm:inline text-[10px] md:text-sm underline underline-offset-4 decoration-black/30 opacity-80">{t(COPY.how)}</span>
      </div>
    </div>
    <span className={`${GLASS} absolute right-[5%] bottom-[7%] px-2 py-0.5 text-[8px] sm:px-3 sm:py-1 sm:text-[10px] md:text-xs`}>{t(COPY.box)}</span>
    <span className={`absolute right-2 top-2 px-1.5 py-0.5 bg-black/50 text-madde-white ${MONO} text-[9px]`}>{isEN ? 'Headline zone · top 40%' : 'Başlık alanı · üst %40'}</span>
  </div>
);

// object-position that puts the product (x 36% of the 3:2 image) in the middle of a narrower crop
const IMG_ASPECT = 3 / 2;
const centerOn = (frameAspect: number, fx = 0.36) =>
  `${Math.max(0, Math.min(1, (fx * IMG_ASPECT - frameAspect / 2) / (IMG_ASPECT - frameAspect))) * 100}% 50%`;

const CropFrame: React.FC<{ aspect: string; ratio: number; label: string; note: string; children?: React.ReactNode }> = ({ aspect, ratio, label, note, children }) => (
  <figure>
    <div className={`relative ${aspect} overflow-hidden bg-neutral-900 text-madde-black`}>
      <img src={`${DIR}/ecom_hero.jpg`} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: centerOn(ratio) }} />
      {children}
    </div>
    <Caption file={label} note={note} />
  </figure>
);

const Eyebrow: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex items-center gap-1.5 tracking-wide opacity-70 ${className ?? ''}`}>
    <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#97B36C]" />{COPY.eyebrow}
  </div>
);

export const WizepodAICaseStudy: React.FC<{ language: Language }> = ({ language }) => {
  const t = (c: ContentText) => c[language];
  const isEN = language === Language.EN;

  return (
    <div className="relative z-10 px-6 md:px-12 mb-24">
      <div className="max-w-[1920px] mx-auto space-y-24 md:space-y-40">

        {/* OPENING: the 3D film, then the same product in AI scenes */}
        <Reveal>
          <figure>
            <Film src="videohero.mp4" language={language} />
            <Caption file="videohero.mp4" note={isEN ? '3D product film' : '3D ürün filmi'} />
          </figure>
          <figure className="mt-4 md:mt-8">
            <img src={`${DIR}/scene_wide.jpg`} alt={isEN ? 'Wizepod applicator and sensor on a living room table' : 'Salon masasında Wizepod aplikatörü ve sensörü'} className="w-full h-auto" />
            <Caption file="scene_wide.jpg" note={isEN ? 'AI lifestyle scene · same product' : 'AI yaşam sahnesi · aynı ürün'} />
          </figure>
          <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              ['ecom_hero.jpg', L('E-commerce hero', 'E-ticaret hero')],
              ['apply_final.jpg', L('Application moment', 'Uygulama anı')],
              ['worn_sensor.jpg', L('Sensor worn', 'Kolda sensör')],
            ].map(([src, note]) => (
              <figure key={src as string}>
                <img src={`${DIR}/${src}`} alt="" className="w-full aspect-[3/2] object-cover bg-neutral-900" />
                <Caption file={src as string} note={t(note as ContentText)} />
              </figure>
            ))}
          </div>
        </Reveal>

        {/* 01 BRIEF */}
        <Reveal>
          <SectionHead num="01" title="Brief" />
          <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              [L('Objective', 'Amaç'), L('A 3D film and render set that present the Wizepod CGM with trust and precision, then the same product placed into AI-generated scenes without losing fidelity.', 'Wizepod CGM\'i güven ve hassasiyetle sunan bir 3D film ve render seti; ardından aynı ürünün sadakatini kaybetmeden AI ile üretilmiş sahnelere yerleştirilmesi.')],
              [L('Constraint', 'Kısıt'), L('No photo shoot. For the AI scenes, the only product reference is our own 3D model, its renders and frames of the film.', 'Fotoğraf çekimi yok. AI sahneleri için tek ürün referansı kendi 3D modelimiz, render\'ları ve filmden kareler.')],
              [L('Output', 'Çıktı'), L('A 3D product film, application and exploded animations, stills; a lifestyle scene, an e-commerce hero, two application moments and a layout study.', '3D ürün filmi, uygulama ve patlatılmış animasyonlar, görseller; bir yaşam sahnesi, bir e-ticaret hero\'su, iki uygulama anı ve bir yerleşim çalışması.')],
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
          <div className="mt-8 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8">
            {[
              ['3D model', L('The product is modeled, lit and animated in 3D. Its renders become the four-view product sheet.', 'Ürün 3D\'de modellenir, ışıklanır ve canlandırılır. Render\'ları dört görünümlü ürün föyüne dönüşür.')],
              ['Empty plate', L('The scene is generated without the product (GPT Image in Firefly, Seedream for the studio). It fixes the camera, the light and a scale reference: a short tumbler.', 'Sahne ürünsüz üretilir (Firefly\'da GPT Image, stüdyo için Seedream). Kamerayı, ışığı ve ölçek referansını sabitler: kısa bir su bardağı.')],
              ['Scale guide', L('A grey placeholder at true size, measured from the tumbler: 8 cm = 220 px, so a 7 cm applicator = 225 px.', 'Bardaktan ölçülen gerçek boyda gri bir yer tutucu: 8 cm = 220 px, yani 7 cm\'lik aplikatör = 225 px.')],
              ['Product pass', L('Seedream 5.0 (Dreamina) replaces the placeholder, guided by the product sheet and a fixed product block.', 'Seedream 5.0 (Dreamina), ürün föyü ve sabit ürün bloğuyla yer tutucunun yerine ürünü çizer.')],
              ['Retouch', L('Photoshop: cleanup, and critical areas masked back from the product render where the model drifted.', 'Photoshop: temizlik ve modelin kaydığı kritik bölgelerin ürün render\'ından maskeyle geri getirilmesi.')],
            ].map(([step, body], i) => (
              <div key={step as string} className="border-t border-madde-black dark:border-madde-white pt-4 flex flex-col gap-4">
                <div className={`flex justify-between ${MONO} ${MUTED}`}><span>{isEN ? 'Step' : 'Adım'} {i + 1}</span><span>{i < 4 ? '→' : '■'}</span></div>
                <div className="font-mono text-sm uppercase tracking-wider font-medium">{step as string}</div>
                <p className={`text-base leading-relaxed ${MUTED}`}>{t(body as ContentText)}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <figure>
              <Film src="video1.mp4" language={language} />
              <Caption file="video1.mp4" note={isEN ? 'Step 1 · the 3D model, part by part' : 'Adım 1 · 3D model, parça parça'} />
            </figure>
            <figure>
              <img src={`${DIR3D}/1.png`} alt="" className="w-full aspect-video object-cover bg-neutral-900" />
              <Caption file="1.png" note={isEN ? 'Step 1 · render' : 'Adım 1 · render'} />
            </figure>
          </div>
        </Reveal>

        {/* 03 SCENE FIRST */}
        <Reveal>
          <SectionHead
            num="03"
            kicker={isEN ? 'Compositional control' : 'Kompozisyon kontrolü'}
            title={isEN ? 'Scene first, product second' : 'Önce sahne, sonra ürün'}
            lead={isEN
              ? 'The model never decides the camera or the size. The plate decides the camera, the placeholder decides size and position; the model only draws the product into that space.'
              : 'Kameraya ve boyuta model karar vermez. Kamerayı sahne, boyutu ve yeri yer tutucu belirler; model ürünü yalnızca o boşluğa çizer.'}
          />
          <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <figure>
              <Film src="video3.mp4" language={language} />
              <Caption file="video3.mp4" note={isEN ? '3D film · the brand\'s room' : '3D film · markanın odası'} />
            </figure>
            <figure>
              <img src={`${DIR}/plate_wide.jpg`} alt="" className="w-full aspect-video object-cover bg-neutral-900" />
              <Caption file="plate_wide.jpg" note={isEN ? 'AI plate · same room, generated from its frames' : 'AI sahnesi · aynı oda, karelerinden üretildi'} />
            </figure>
          </div>
          <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              ['plate_wide.jpg', L('1 · Empty plate, tumbler as scale', '1 · Boş sahne, ölçek su bardağı')],
              ['guide_wide.jpg', L('2 · Placeholder at 7 cm', '2 · 7 cm\'de yer tutucu')],
              ['scene_wide.jpg', L('3 · Product drawn into it', '3 · Ürün içine çizildi')],
            ].map(([src, note]) => (
              <figure key={src as string}>
                <img src={`${DIR}/${src}`} alt="" className="w-full aspect-[3/2] object-cover bg-neutral-900" />
                <Caption file={src as string} note={t(note as ContentText)} />
              </figure>
            ))}
          </div>
          <div className={`mt-12 md:mt-24 flex justify-end ${MONO} ${MUTED}`}>{isEN ? 'Drag to compare' : 'Karşılaştırmak için sürükleyin'}</div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <figure>
              <BeforeAfter before={`${DIR}/guide_wide.jpg`} after={`${DIR}/scene_wide.jpg`} beforeLabel={isEN ? 'Placeholder' : 'Yer tutucu'} afterLabel={isEN ? 'Frame' : 'Kare'} />
              <Caption file="guide_wide / scene_wide" note={isEN ? 'Grey placeholder at true scale' : 'Gerçek ölçekte gri yer tutucu'} />
            </figure>
            <figure>
              <BeforeAfter before={`${DIR}/plate_ecom.jpg`} after={`${DIR}/ecom_hero.jpg`} beforeLabel={isEN ? 'Plate' : 'Sahne'} afterLabel={isEN ? 'Frame' : 'Kare'} />
              <Caption file="plate_ecom / ecom_hero" note={isEN ? 'Studio plate, products added' : 'Stüdyo sahnesi, ürünler eklendi'} />
            </figure>
          </div>
        </Reveal>

        {/* 04 FIDELITY */}
        <Reveal>
          <SectionHead
            num="04"
            kicker={isEN ? 'Product sheet · measured' : 'Ürün föyü · ölçüldü'}
            title={isEN ? 'Fidelity' : 'Sadakat'}
            lead={isEN
              ? 'Every output is checked against the product sheet: the reference silhouette laid over the frame, the button color sampled, the proportions measured against the tumbler.'
              : 'Her çıktı ürün föyüne karşı kontrol edilir: referans silüeti karenin üstüne bindirilir, buton rengi ölçülür, oranlar bardağa göre hesaplanır.'}
          />
          <div className="mt-8 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
            <figure>
              <img src={`${DIR}/ref_package.jpg`} alt={isEN ? 'Wizepod product sheet with four views' : 'Dört görünümlü Wizepod ürün föyü'} className="w-full h-auto" />
              <Caption file="ref_package.jpg" note={isEN ? 'Product sheet · built from our renders' : 'Ürün föyü · render\'larımızdan kuruldu'} />
              <div className="mt-4 md:mt-8 grid grid-cols-3 gap-4 md:gap-8">
                {['2.png', '3.png', '4.png'].map(f => (
                  <figure key={f}>
                    <img src={`${DIR3D}/${f}`} alt="" className="w-full aspect-square object-cover bg-neutral-900" />
                    <Caption file={f} note="3D" />
                  </figure>
                ))}
              </div>
            </figure>
            <div className="flex flex-col gap-8">
              <figure>
                <img src={`${DIR}/fidelity_overlay.jpg`} alt="" className="w-full h-auto" />
                <Caption file="fidelity_overlay.jpg" note={isEN ? 'Reference · output · silhouette overlay' : 'Referans · çıktı · silüet bindirme'} />
              </figure>
              <div className={`border-t ${LINE}`}>
                {[
                  [L('Height (target 7 cm)', 'Yükseklik (hedef 7 cm)'), isEN ? '≈ 7.7 cm · +11%' : '≈ 7,7 cm · +%11'],
                  [L('Silhouette', 'Silüet'), isEN ? 'Body and collar within the outline' : 'Gövde ve yaka kontur içinde'],
                  [L('Ribbed base cap', 'Yivli taban'), isEN ? 'Kept, even spacing' : 'Korundu, eşit aralık'],
                  [L('Embossed mark', 'Kabartma logo'), isEN ? 'Tonal ✓ · lettering drifted to “WIZEPOID” ✗' : 'Tonal ✓ · yazı “WIZEPOID”e kaydı ✗'],
                  [L('Surface', 'Yüzey'), isEN ? 'Matte ✓' : 'Mat ✓'],
                  [L('Sensor slot', 'Sensör yuvası'), isEN ? 'Exactly one ✓' : 'Tam bir tane ✓'],
                ].map(([k, v]) => (
                  <div key={(k as ContentText)[Language.EN]} className={`flex flex-wrap justify-between gap-x-4 gap-y-1 py-3.5 border-b ${LINE} ${MONO}`}>
                    <span className={MUTED}>{t(k as ContentText)}</span><span className="normal-case tracking-wider">{v as string}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-24">
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tighter">{isEN ? 'Button green, measured' : 'Buton yeşili, ölçüldü'}</h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
              {BUTTON_SWATCHES.map(sw => (
                <div key={sw.area[Language.EN]}>
                  <div className={`${MONO} ${MUTED}`}>{t(sw.area)}</div>
                  <div className="mt-2 flex">
                    {[[isEN ? 'Brand' : 'Marka', '#97B36C'], [isEN ? 'Frame' : 'Kare', sw.out]].map(([label, hex]) => (
                      <div key={label} className="flex-1">
                        <div className={`h-12 border ${LINE}`} style={{ background: hex }} />
                        <div className={`mt-1 ${MONO} ${MUTED} text-[10px]`}>{label} · {hex}</div>
                      </div>
                    ))}
                  </div>
                  <div className={`mt-2 ${MONO}`}>ΔE76 {sw.de}</div>
                </div>
              ))}
            </div>
            <p className={`mt-6 pt-4 border-t ${LINE} text-base leading-relaxed max-w-3xl`}>
              {isEN
                ? 'Mean color of the button pixels in each frame. The shift comes from warm window light and sun on the plastic, so it is read per scene, not corrected to a single value.'
                : 'Her karede buton piksellerinin ortalama rengi. Sapma plastiğe düşen sıcak pencere ışığından ve güneşten geliyor; bu yüzden tek bir değere zorlanmaz, sahneye göre okunur.'}
            </p>
          </div>

          <div className="mt-12 md:mt-24">
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tighter">{isEN ? 'Where fidelity broke' : 'Sadakatin bozulduğu yerler'}</h3>
            <p className={`mt-4 text-base leading-relaxed max-w-3xl ${MUTED}`}>
              {isEN ? 'Kept on purpose: the earlier attempts that led to the placeholder method.' : 'Bilerek saklandı: yer tutucu yöntemine götüren önceki denemeler.'}
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {FAILS.map(f => (
                <figure key={f.src}>
                  <img src={`${DIR}/${f.src}`} alt="" className="w-full aspect-[3/2] object-cover bg-neutral-900" />
                  <Caption file={f.src} note={t(f.label)} />
                  <p className="mt-3 text-base leading-relaxed">{t(f.note)}</p>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 05 THE PROMPT */}
        <Reveal>
          <SectionHead
            num="05"
            title={isEN ? 'The Prompt' : 'Prompt'}
            lead={isEN
              ? 'The product block is the same text in every image. What changes between frames is the scene, the scale anchor and the light.'
              : 'Ürün bloğu her görselde aynı metindir. Kareden kareye değişen; sahne, ölçek referansı ve ışık.'}
          />
          <div className="mt-8 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
            <pre className={`whitespace-pre-wrap font-mono text-[12px] md:text-[13px] leading-relaxed bg-black/5 dark:bg-white/5 p-5 md:p-8 border-l-2 border-[#97B36C]`}>{PRODUCT_BLOCK}</pre>
            <div className={`border-t ${LINE}`}>
              {[
                [L('Order', 'Sıra'), (
                  <div key="o" className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider">
                    {PROMPT_ORDER.map((p, i) => (
                      <React.Fragment key={p}>
                        <span className={`border ${LINE} px-1.5 py-1`}>{p}</span>
                        {i < PROMPT_ORDER.length - 1 && <span className={MUTED}>→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                )],
                [L('References', 'Referanslar'), (
                  <div key="r" className="flex flex-col gap-2">
                    {[[L('Plate or placeholder frame', 'Sahne ya da yer tutuculu kare'), L('Sets camera · light', 'Kamera · ışık')], [L('Product sheet, four views', 'Dört görünümlü ürün föyü'), L('Weight · high', 'Ağırlık · yüksek')], [L('Packaging', 'Ambalaj'), L('Hero only', 'Sadece hero')]].map(([a, b]) => (
                      <div key={a[Language.EN]} className="flex justify-between gap-4"><span>{t(a)}</span><span className={`${MONO} ${MUTED}`}>{t(b)}</span></div>
                    ))}
                  </div>
                )],
                [L('Scale', 'Ölçek'), <p key="s">{isEN ? 'Anchored to objects already in the plate: “about as tall as the stone block, half the bottle”, never to the frame.' : 'Sahnede zaten olan nesnelere bağlanır: “taş blok boyunda, şişenin yarısı”; kadraja asla.'}</p>],
                [L('Two lengths', 'İki uzunluk'), <p key="l">{isEN ? 'The same prompt in two lengths: up to 4,000 characters for Dreamina, under 1,024 for Firefly.' : 'Aynı prompt iki uzunlukta: Dreamina için 4.000, Firefly için 1.024 karakterin altında.'}</p>],
                [L('Storage', 'Saklama'), (
                  <div key="st" className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                    {['Image1_plate.png', 'Image2_sheet.png…', 'PROMPT.txt', 'PROMPT_2_Firefly.txt'].map(f => <span key={f} className="bg-black/5 dark:bg-white/5 px-2 py-1">{f}</span>)}
                  </div>
                )],
              ].map(([label, body]) => (
                <div key={(label as ContentText)[Language.EN]} className={`flex flex-wrap gap-x-4 gap-y-2 py-5 border-b ${LINE}`}>
                  <div className={`basis-28 shrink-0 ${MONO} ${MUTED}`}>{t(label as ContentText)}</div>
                  <div className="flex-1 min-w-[16rem] text-base leading-relaxed">{body as React.ReactNode}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 06 REPEATABLE */}
        <Reveal>
          <SectionHead
            num="06"
            kicker={isEN ? 'Consistency across scenes' : 'Sahneler arası tutarlılık'}
            title={isEN ? 'One product, render to scene' : 'Tek ürün, render\'dan sahneye'}
            lead={isEN
              ? 'The 3D render first, then four AI scenes built from it. The shape, the ribbed base, the green button, the embossed mark and the single-slot sensor hold; the light, the angle and the context change.'
              : 'Önce 3D render, sonra ondan kurulan dört AI sahnesi. Form, yivli taban, yeşil buton, kabartma logo ve tek yuvalı sensör korunuyor; ışık, açı ve bağlam değişiyor.'}
          />
          <div className="mt-8 md:mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
            {[L('3D render', '3D render'), L('Lifestyle', 'Yaşam'), L('E-commerce', 'E-ticaret'), L('Application', 'Uygulama'), L('Worn', 'Kolda')].map((label, i) => (
              <figure key={i} className={i === 0 ? 'col-span-2 md:col-span-1' : ''}>
                <img src={`${DIR}/product_0${i}.jpg`} alt="" className="w-full aspect-[4/5] object-cover bg-neutral-900" />
                <Caption file={`product_0${i}.jpg`} note={t(label)} />
              </figure>
            ))}
          </div>
        </Reveal>

        {/* 07 RAW → FINAL */}
        <Reveal>
          <SectionHead
            num="07"
            title={isEN ? 'Application: film and frame' : 'Uygulama: film ve kare'}
            lead={isEN
              ? 'The AI frame gets one correction pass: the sensor that appeared on the arm before the application is removed and the underarm is cleaned. Below, each 3D animation sits next to the AI frame it informed.'
              : 'AI karesi tek düzeltme turundan geçti: uygulamadan önce kolda beliren sensör kaldırıldı, koltuk altı temizlendi. Altta her 3D animasyon, beslediği AI karesinin yanında.'}
          />
          <figure className="mt-8 md:mt-16">
            <BeforeAfter before={`${DIR}/apply_raw.jpg`} after={`${DIR}/apply_final.jpg`} beforeLabel={isEN ? 'Raw' : 'Ham'} afterLabel="Final" />
            <Caption file="apply_raw / apply_final" note={isEN ? 'Same frame · edit prompt, no reshoot' : 'Aynı kare · düzeltme prompt\'u, yeniden üretim yok'} />
          </figure>
          <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <figure>
              <Film src="video2.mp4" language={language} />
              <Caption file="video2.mp4" note={isEN ? '3D · application, as designed' : '3D · uygulama, tasarlandığı gibi'} />
            </figure>
            <figure>
              <img src={`${DIR}/apply_final.jpg`} alt="" className="w-full aspect-video object-cover bg-neutral-900" />
              <Caption file="apply_final.jpg" note={isEN ? 'AI · application, in a real room' : 'AI · uygulama, gerçek bir odada'} />
            </figure>
            <figure>
              <Film src="5.mp4" language={language} />
              <Caption file="5.mp4" note={isEN ? '3D · worn' : '3D · kolda'} />
            </figure>
            <figure>
              <img src={`${DIR}/worn_sensor.jpg`} alt="" className="w-full aspect-video object-cover bg-neutral-900" />
              <Caption file="worn_sensor.jpg" note={isEN ? 'AI · worn, everyday' : 'AI · kolda, gündelik'} />
            </figure>
          </div>
        </Reveal>

        {/* 08 LAYOUT STUDY */}
        <Reveal>
          <SectionHead
            num="08"
            kicker={isEN ? 'Layout study · UI/UX' : 'Yerleşim çalışması · UI/UX'}
            title={isEN ? 'Layout study' : 'Yerleşim çalışması'}
            lead={isEN
              ? 'The e-commerce hero checked where it will live: behind a shop headline and a buy button on desktop, and cropped for mobile and social formats. The product stays in frame in every crop.'
              : 'E-ticaret hero\'su yayınlanacağı yerde kontrol edildi: masaüstünde mağaza başlığı ve satın al butonunun arkasında, mobil ve sosyal formatlar için kırpılmış halde. Ürün her kırpımda kadrajda kalıyor.'}
          />
          <figure className="mt-8 md:mt-16">
            <DesktopHero isEN={isEN} t={t} />
            <Caption file="ecom_hero.jpg" note={isEN ? '16:9 · desktop hero · layout study' : '16:9 · masaüstü hero · yerleşim çalışması'} />
          </figure>
          <div className="mt-4 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-end">
            <CropFrame aspect="aspect-[9/16]" ratio={9 / 16} label="9:16" note={isEN ? 'Mobile' : 'Mobil'}>
              <div className="absolute left-[8%] right-[8%] top-[7%]">
                <Eyebrow className="text-[9px] md:text-[11px]" />
                <Title html={t(COPY.title)} className="mt-1.5 text-lg md:text-2xl lg:text-3xl font-light leading-[1.05] tracking-[-0.02em] [&_i]:font-normal" />
                <p className="mt-2 text-[10px] md:text-xs font-light leading-relaxed opacity-75">{t(COPY.body)}</p>
              </div>
              <div className="absolute inset-x-[8%] bottom-[4%] flex">
                <GlassButton label={t(COPY.buy)} className="w-full justify-center py-1.5 md:py-2.5 text-[11px] md:text-sm" />
              </div>
            </CropFrame>
            <CropFrame aspect="aspect-[4/5]" ratio={4 / 5} label="4:5" note={isEN ? 'Feed' : 'Akış'}>
              <div className="absolute left-[7%] right-[7%] top-[7%]">
                <Eyebrow className="text-[8px] md:text-[10px]" />
                <Title html={t(COPY.short)} className="mt-1 text-base md:text-xl lg:text-2xl font-light leading-[1.05] tracking-[-0.02em] [&_i]:font-normal" />
              </div>
            </CropFrame>
            <CropFrame aspect="aspect-square" ratio={1} label="1:1" note={isEN ? 'Grid' : 'Izgara'}>
              <span className={`${GLASS} absolute left-[6%] top-[6%] px-2 py-0.5 text-[8px] md:px-3 md:py-1 md:text-[11px]`}>{COPY.eyebrow}</span>
            </CropFrame>
            <div>
              <div className="w-1/2">
                <CropFrame aspect="aspect-square" ratio={1} label="Thumb" note="160 px" />
              </div>
              <div className={`mt-6 border-t ${LINE}`}>
                {[
                  [L('Headline zone', 'Başlık alanı'), isEN ? 'Top 40%' : 'Üst %40'],
                  [L('Focal point', 'Odak noktası'), 'X 36% · Y 71%'],
                  [L('Box', 'Kutu'), isEN ? 'X 82% · desktop only' : 'X %82 · sadece masaüstü'],
                ].map(([k, v]) => (
                  <div key={(k as ContentText)[Language.EN]} className={`flex justify-between gap-4 py-3 border-b ${LINE} ${MONO}`}>
                    <span className={MUTED}>{t(k as ContentText)}</span><span>{v as string}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
};

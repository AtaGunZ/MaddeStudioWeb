import React from 'react';
import { motion } from 'framer-motion';
import { TEXTS } from '../constants';
import { Language } from '../types';

interface ManifestoProps {
  language: Language;
}

// The manifesto simply comes in: each paragraph fades up once as it reaches the screen.
const LINES: { key: 'p1' | 'p2' | 'p3'; className: string }[] = [
  { key: 'p1', className: 'mb-8' },
  { key: 'p2', className: 'mb-8 md:pl-24 text-madde-black/60 dark:text-madde-white/60' },
  { key: 'p3', className: 'md:pl-48 text-madde-gray dark:text-gray-400' },
];

export const Manifesto: React.FC<ManifestoProps> = ({ language }) => (
  <div className="w-full overflow-x-clip">
    <section className="py-24 md:py-48 px-6 md:px-12 max-w-5xl mx-auto flex flex-col justify-center min-h-[50vh]">
      <div className="text-2xl md:text-4xl font-light leading-relaxed tracking-tight">
        {LINES.map(({ key, className }, i) => (
          <motion.p
            key={key}
            className={className}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -15% 0px' }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {TEXTS.manifesto[key][language]}
          </motion.p>
        ))}
      </div>
    </section>
  </div>
);

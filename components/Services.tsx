import React from 'react';
import { SERVICES, TEXTS } from '../constants';
import { Language } from '../types';

interface ServicesProps {
  language: Language;
}

export const Services: React.FC<ServicesProps> = ({ language }) => {
  return (
    <section className="py-24 px-6 md:px-12 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col md:flex-row mb-16 items-baseline justify-between">
        <h2 className="text-sm font-bold uppercase tracking-widest mb-4 md:mb-0">
          {TEXTS.services.title[language]}
        </h2>
        <p className="text-sm text-madde-gray">
          {TEXTS.services.subtitle[language]}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {SERVICES.map((service, index) => (
          <div key={index} className="group cursor-default">
            <h3 className="text-2xl font-semibold mb-4 group-hover:translate-x-2 transition-transform duration-300">
              {service.title}
            </h3>
            <div className="w-8 h-px bg-current mb-4 opacity-50 group-hover:w-16 transition-all duration-300" />
            <p className="text-madde-gray dark:text-gray-400 text-sm font-mono uppercase tracking-wide">
              {service.process[language]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
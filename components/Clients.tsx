import React from 'react';
import { motion } from 'framer-motion';
import { CLIENTS, TEXTS } from '../constants';
import { Language } from '../types';

interface ClientsProps {
    language: Language;
}

export const Clients: React.FC<ClientsProps> = ({ language }) => {
    // Triple the list to ensure smooth infinite scrolling for most screen sizes
    const items = [...CLIENTS, ...CLIENTS, ...CLIENTS];

    return (
        <section className="py-12 overflow-hidden relative">
            <div className="px-6 md:px-12 mb-12">
                <h2 className="text-sm font-bold uppercase tracking-widest">
                    {TEXTS.clients.title[language]}
                </h2>
            </div>

            <div
                className="flex w-full"
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}
            >
                <motion.div
                    className="flex gap-16 md:gap-32 items-center min-w-max px-8"
                    initial={{ x: 0 }}
                    animate={{ x: "-33.33%" }} // Moves exactly one full set width (since we have 3 sets, 1/3 is one set)
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {items.map((client, index) => (
                        <div
                            key={`${client.id}-${index}`}
                            className="w-40 md:w-56 h-24 md:h-32 flex items-center justify-center flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-grab active:cursor-grabbing"
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                className={`w-auto h-auto max-w-full max-h-12 md:max-h-20 object-contain select-none pointer-events-none grayscale dark:invert transition-transform duration-300
                                ${client.id === 'hiltar' ? 'scale-125' : ''}
                                ${(client.id === 'north' || client.id === 'mehaz') ? 'scale-75' : ''}
                                ${client.id === 'o3' ? 'scale-110' : ''}`}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

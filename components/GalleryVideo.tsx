import React, { useEffect, useRef, useState } from 'react';
import { TEXTS } from '../constants';
import { GalleryItem, Language } from '../types';

type VideoItem = Extract<GalleryItem, { type: 'video' }>;

// Only one gallery video plays sound at a time
const SOUND_EVENT = 'madde:gallery-sound';

const SpeakerIcon: React.FC<{ muted: boolean }> = ({ muted }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 5 6 9H2v6h4l5 4V5z" />
        {muted ? (
            <path d="m23 9-6 6M17 9l6 6" />
        ) : (
            <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" />
        )}
    </svg>
);

export const GalleryVideo: React.FC<{ item: VideoItem; isWide: boolean; language: Language }> = ({ item, isWide, language }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [muted, setMuted] = useState(item.muted ?? true);

    useEffect(() => {
        if (videoRef.current) videoRef.current.muted = muted;
    }, [muted]);

    // Start once the video scrolls into view, then keep playing
    useEffect(() => {
        const video = videoRef.current;
        if (!video || !item.playOnView) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                video.play().catch(() => {});
                observer.disconnect();
            }
        }, { threshold: 0.5 });
        observer.observe(video);
        return () => observer.disconnect();
    }, [item.playOnView]);

    useEffect(() => {
        const onSound = (e: Event) => {
            if ((e as CustomEvent).detail !== videoRef.current) setMuted(true);
        };
        window.addEventListener(SOUND_EVENT, onSound);
        return () => window.removeEventListener(SOUND_EVENT, onSound);
    }, []);

    const toggleSound = () => {
        const video = videoRef.current;
        if (!video) return;
        if (muted) {
            // Reels open with a hook, so sound starts from the first frame
            video.currentTime = 0;
            window.dispatchEvent(new CustomEvent(SOUND_EVENT, { detail: video }));
        }
        setMuted(!muted);
    };

    return (
        <div className={`relative overflow-hidden w-full ${item.customAspect ? item.customAspect : (isWide ? 'aspect-[16/9]' : 'aspect-[4/5] md:aspect-[3/4]')}`}>
            <video ref={videoRef} src={item.src} poster={item.poster} autoPlay={item.playOnView ? false : (item.autoPlay ?? true)} preload={item.playOnView ? 'auto' : undefined} loop={item.loop ?? true} muted={muted} playsInline className="w-full h-full object-cover" />
            {item.soundToggle && (
                <button
                    onClick={toggleSound}
                    aria-pressed={!muted}
                    className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-mono uppercase tracking-widest hover:bg-black/80 transition-colors"
                >
                    <SpeakerIcon muted={muted} />
                    {muted ? TEXTS.projectDetail.soundOff[language] : TEXTS.projectDetail.soundOn[language]}
                </button>
            )}
        </div>
    );
};

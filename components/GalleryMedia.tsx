import React, { useEffect, useRef, useState } from 'react';
import { MEDIA_SIZES } from './mediaSizes';

// A gallery still or a looping clip (former GIFs, now small MP4s). Clips download only near
// the viewport and play only while visible; stills load lazily. Both keep their shape.

export const GalleryMedia: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
    if (!src.endsWith('.mp4')) {
        return <img loading="lazy" decoding="async" src={src} alt={alt} className={className} />;
    }
    return <LoopClip src={src} className={className} />;
};

const LoopClip: React.FC<{ src: string; className?: string }> = ({ src, className }) => {
    const ref = useRef<HTMLVideoElement>(null);
    const [near, setNear] = useState(false);
    const size = MEDIA_SIZES[src];

    useEffect(() => {
        const v = ref.current;
        if (!v) return;
        const nearObs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setNear(true); nearObs.disconnect(); } }, { rootMargin: '600px 0px' });
        const playObs = new IntersectionObserver(([e]) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); }, { threshold: 0.2 });
        nearObs.observe(v); playObs.observe(v);
        return () => { nearObs.disconnect(); playObs.disconnect(); };
    }, []);

    return (
        <video
            ref={ref}
            src={near ? src : undefined}
            preload={near ? 'auto' : 'none'}
            muted
            loop
            playsInline
            aria-hidden
            className={className}
            style={size ? { aspectRatio: `${size[0]} / ${size[1]}` } : undefined}
        />
    );
};

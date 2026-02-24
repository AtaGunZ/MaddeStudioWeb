import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { useApp } from '../contexts/AppContext';

export const CustomCursor: React.FC = () => {
    const { darkMode } = useApp();
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Raw position stored in a ref — updated on every mousemove event
    // (not capped by rAF, but also not tied to render cycle)
    const mousePos = useRef({ x: -100, y: -100 });
    const rafId = useRef<number>(0);

    // Detect touch/mobile — coarse pointer means no custom cursor
    const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

    useEffect(() => {
        if (isTouchDevice) return;

        const onMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', onMouseMove);

        // rAF loop — syncs motion values to display refresh rate (144Hz, 120Hz, 60Hz, etc.)
        const loop = () => {
            cursorX.set(mousePos.current.x);
            cursorY.set(mousePos.current.y);
            rafId.current = requestAnimationFrame(loop);
        };
        rafId.current = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(rafId.current);
        };
    }, [cursorX, cursorY, isTouchDevice]);

    const [isClicked, setIsClicked] = useState(false);
    useEffect(() => {
        if (isTouchDevice) return;
        const mouseDown = () => setIsClicked(true);
        const mouseUp = () => setIsClicked(false);
        window.addEventListener('mousedown', mouseDown);
        window.addEventListener('mouseup', mouseUp);
        return () => {
            window.removeEventListener('mousedown', mouseDown);
            window.removeEventListener('mouseup', mouseUp);
        };
    }, [isTouchDevice]);

    if (isTouchDevice) return null;

    return (
        <>
            <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
            <motion.div
                className={`fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999] origin-center -ml-2 -mt-2 border ${darkMode ? 'bg-white border-black' : 'bg-black border-white'
                    }`}
                style={{
                    x: cursorX,
                    y: cursorY,
                    scale: isClicked ? 0.8 : 1,
                }}
            />
        </>
    );
};

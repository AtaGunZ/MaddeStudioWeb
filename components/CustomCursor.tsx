import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useApp } from '../contexts/AppContext';

export const CustomCursor: React.FC = () => {
    const { darkMode } = useApp();
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Track mouse movement
    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY]);

    // Handle click animations (optional, but adds nice feedback)
    const [isClicked, setIsClicked] = useState(false);
    useEffect(() => {
        const mouseDown = () => setIsClicked(true);
        const mouseUp = () => setIsClicked(false);

        window.addEventListener('mousedown', mouseDown);
        window.addEventListener('mouseup', mouseUp);

        return () => {
            window.removeEventListener('mousedown', mouseDown);
            window.removeEventListener('mouseup', mouseUp);
        };
    }, []);

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

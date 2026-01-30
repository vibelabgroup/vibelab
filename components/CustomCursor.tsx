import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only active on devices with fine pointer
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      // Just set left/top.
      // The CSS handles the translate(-50%, -50%).
      // We must NOT set transform inline, otherwise we break the hover scale effect defined in CSS.
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the hovered element or its parents are interactive
      if (target.closest('a, button, .glass-panel, input, textarea, select, .magnetic-wrap')) {
        document.body.classList.add('cursor-hover');
      } else {
        document.body.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('cursor-hover');
    };
  }, []);

  return <div id="custom-cursor" ref={cursorRef} className="hidden md:block"></div>;
};

export default CustomCursor;
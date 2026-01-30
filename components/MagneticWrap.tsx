import React, { useRef, useEffect } from 'react';

interface MagneticWrapProps {
  children: React.ReactNode;
  className?: string;
}

const MagneticWrap: React.FC<MagneticWrapProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const wrap = ref.current;
    if (!wrap) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      // Multiplier 0.35 from original script
      const moveX = (e.clientX - centerX) * 0.35;
      const moveY = (e.clientY - centerY) * 0.35;
      wrap.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    };

    const handleMouseLeave = () => {
      wrap.style.transform = `translate3d(0px, 0px, 0)`;
    };

    wrap.addEventListener('mousemove', handleMouseMove);
    wrap.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      wrap.removeEventListener('mousemove', handleMouseMove);
      wrap.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={ref} className={`magnetic-wrap ${className}`}>
      {children}
    </div>
  );
};

export default MagneticWrap;
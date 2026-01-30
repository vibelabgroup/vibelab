import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, className = '' }) => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`fade-in ${className}`}>
      {children}
    </div>
  );
};

export default FadeIn;
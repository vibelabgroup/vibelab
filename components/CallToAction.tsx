import React from 'react';
import FadeIn from './FadeIn';
import MagneticWrap from './MagneticWrap';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 md:py-72 px-6 relative overflow-hidden text-center border-t border-slate-200 dark:border-white/10">
      <FadeIn className="max-w-7xl mx-auto relative z-10">
        <h2 className="outcome-title font-display font-black tracking-tighter mb-12">
          BUILD <br /><span className="opacity-10 italic">OUTCOMES.</span>
        </h2>
        <p className="text-lg md:text-5xl font-display font-light mb-16 md:mb-32 italic opacity-70 px-4">
          Incredible projects deserve world-class technical absolute.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-16 relative z-20">
          <MagneticWrap>
            <a 
              href="https://calendly.com/vibelabgroup/discovery-call" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 md:px-12 md:py-6 bg-brand-dark dark:bg-white text-white dark:text-brand-dark font-display font-black text-[12px] md:text-[16px] uppercase tracking-[0.2em] md:tracking-[0.4em] rounded-xl md:rounded-[30px] hover:bg-brand-primary hover:text-white dark:hover:bg-brand-primary transition-all shadow-2xl block whitespace-nowrap"
            >
              Contact Us
            </a>
          </MagneticWrap>
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="text-brand-primary font-bold text-[9px] md:text-[11px] uppercase tracking-[0.4em] animate-pulse">Now Enrolling Q1 2026</span>
            <span className="opacity-30 font-mono text-[8px] md:text-[10px] uppercase">Highly Selective Entry</span>
          </div>
        </div>
      </FadeIn>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full opacity-[0.02] pointer-events-none select-none">
        <div className="text-[35vw] font-display font-black leading-none -mb-32 whitespace-nowrap text-brand-primary uppercase italic">VIBE LAB</div>
      </div>
    </section>
  );
};

export default CallToAction;
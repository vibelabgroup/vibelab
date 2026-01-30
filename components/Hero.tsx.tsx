import React from 'react';
import FadeIn from './FadeIn';

const Hero: React.FC = () => {
  const scrollToExpertise = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('expertise');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 pt-24 md:pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <FadeIn className="space-y-6 md:space-y-10 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
            <span className="text-brand-primary font-bold text-[8px] md:text-[10px] uppercase tracking-[0.4em]">Global Technical Studio 2026</span>
          </div>
          <h1 className="font-display font-black hero-title tracking-tighter">
            AWESOME <br />
            <span className="gradient-text italic">THINGS.</span>
          </h1>
        </FadeIn>

        <FadeIn className="grid lg:grid-cols-2 gap-8 md:gap-24 items-end">
          <p className="text-lg md:text-4xl font-display font-light leading-snug max-w-2xl opacity-80">
            Architecting <span className="font-bold opacity-100 italic">incredible projects</span> for global brands that refuse to settle.
          </p>
          <div className="flex justify-start md:justify-end">
            <a 
              href="#expertise" 
              onClick={scrollToExpertise}
              className="group px-8 py-4 md:px-12 md:py-8 rounded-full border border-slate-200 dark:border-white/10 hover:border-brand-primary transition-all text-[9px] md:text-[11px] font-bold uppercase tracking-[0.4em] glass-panel"
            >
              View Laboratory &rarr;
            </a>
          </div>
        </FadeIn>
      </div>
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 right-0 w-64 h-64 md:w-[600px] md:h-[600px] bg-brand-primary/10 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
};

export default Hero;
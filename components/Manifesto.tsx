import React from 'react';
import FadeIn from './FadeIn';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 md:py-64 px-6 bg-brand-dark/5 dark:bg-white/[0.01] scroll-mt-32">
      <FadeIn className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12">
        <span className="font-mono text-[9px] tracking-[0.8em] opacity-40 uppercase">Selection Protocol</span>
        <h2 className="text-3xl md:text-8xl font-display font-bold tracking-tighter leading-tight">
          Selection is <br className="md:hidden" /> a feature. <br />
          <span className="opacity-15 italic font-light">Quality is the only KPI.</span>
        </h2>
        <div className="h-0.5 w-16 md:w-32 bg-brand-primary mx-auto rounded-full"></div>
        <p className="text-lg md:text-4xl font-light leading-relaxed max-w-4xl mx-auto opacity-70">
          We accept exactly <span className="font-bold opacity-100">three intensive projects</span> per cycle to maintain a standard that "agencies" cannot replicate.
        </p>
      </FadeIn>
    </section>
  );
};

export default Manifesto;
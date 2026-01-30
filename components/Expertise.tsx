import React from 'react';
import FadeIn from './FadeIn';

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-20 md:py-48 px-4 md:px-8 overflow-hidden scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-16 md:mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12">
          <div className="space-y-4 text-center lg:text-left">
            <span className="text-brand-primary font-bold text-[9px] uppercase tracking-[0.6em]">Systemic Assets</span>
            <h2 className="section-title font-display font-black tracking-tighter leading-none">
              The <br /><span className="opacity-10 italic">Assets.</span>
            </h2>
          </div>
          <div className="text-[10px] md:text-lg font-mono italic border-l-2 md:border-l-4 border-brand-primary pl-4 md:pl-10 py-2 opacity-50 mx-auto lg:mx-0">
            Deploying proprietary <br />
            digital systems built <br />
            for scale.
          </div>
        </FadeIn>

        {/* Responsive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10">
          
          {/* Performance Marketing */}
          <FadeIn className="md:col-span-8 glass-panel bento-card p-6 md:p-20 group">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="w-10 h-10 md:w-20 md:h-20 rounded-xl md:rounded-[40px] bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 md:mb-16 shadow-lg">
                  <i className="fa-solid fa-chart-line text-lg md:text-4xl"></i>
                </div>
                <h3 className="text-2xl md:text-7xl font-display font-black mb-4 md:mb-8 tracking-tighter uppercase italic">Performance Marketing</h3>
                <p className="text-xs md:text-3xl leading-snug font-light opacity-80">
                  Architecting global revenue moats through elite affiliate systems and influencer networks.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2 md:gap-4">
                <span className="text-[8px] md:text-[10px] py-1.5 px-3 md:px-5 rounded-full bg-brand-dark dark:bg-white text-white dark:text-brand-dark font-bold uppercase tracking-widest">Global Scale</span>
              </div>
            </div>
          </FadeIn>

          {/* AI Infrastructure */}
          <FadeIn className="md:col-span-4 glass-panel bento-card p-6 md:p-12 group bg-gradient-to-br from-brand-cyan/5 to-transparent">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-6 md:mb-10">
                  <i className="fa-solid fa-microchip text-sm md:text-2xl"></i>
                </div>
                <h3 className="text-xl md:text-3xl font-display font-black mb-4 tracking-tight italic uppercase">AI <br />Infrastructure</h3>
                <p className="text-[10px] md:text-base leading-relaxed opacity-70">
                  Autonomous logic layers managing global sales and support logic 24/7.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Web Development */}
          <FadeIn className="md:col-span-5 glass-panel bento-card p-6 md:p-12">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-6 md:mb-8">
                  <i className="fa-solid fa-terminal text-sm md:text-xl"></i>
                </div>
                <h3 className="text-xl md:text-3xl font-display font-black mb-4 tracking-tight italic uppercase">Aesthetic <br />Engineering</h3>
                <p className="text-[10px] md:text-base opacity-70 leading-relaxed">
                  Shopify Plus & Headless builds meeting world-class architectural standards.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Technical SEO */}
          <FadeIn className="md:col-span-7 glass-panel bento-card p-6 md:p-16 flex flex-col justify-center">
            <h3 className="text-xl md:text-5xl font-display font-black mb-4 tracking-tighter italic uppercase">Technical SEO</h3>
            <p className="text-[10px] md:text-lg opacity-70 max-w-md leading-relaxed">
              Search as an owned moat. Architecting foundations that capture organic intent globally.
            </p>
          </FadeIn>

          {/* Institutional Advisory */}
          <FadeIn className="md:col-span-12 glass-panel bento-card p-6 md:p-20 flex flex-col lg:flex-row items-center gap-10 md:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl md:text-7xl font-display font-black tracking-tighter mb-4 uppercase italic">Institutional Growth</h3>
              <p className="text-sm md:text-2xl font-light opacity-70 max-w-2xl mx-auto lg:mx-0">
                Strategic technical upskilling and engineering roadmaps for leadership.
              </p>
            </div>
            <div className="w-full lg:w-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 md:p-10 border border-slate-200 dark:border-white/10 rounded-[20px] md:rounded-[32px] text-center">
                <div className="text-4xl md:text-6xl font-black opacity-10 mb-2 italic">01</div>
                <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest opacity-60">Coaching</div>
              </div>
              <div className="p-6 md:p-10 border border-slate-200 dark:border-white/10 rounded-[20px] md:rounded-[32px] text-center">
                <div className="text-4xl md:text-6xl font-black opacity-10 mb-2 italic">02</div>
                <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest opacity-60">Consulting</div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Expertise;
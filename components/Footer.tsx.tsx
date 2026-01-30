import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-20 px-6 md:px-10 border-t border-slate-200 dark:border-white/10 text-[9px] font-bold uppercase tracking-[0.5em] opacity-40 text-center md:text-left bg-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-brand-dark dark:bg-white flex items-center justify-center">
            <span className="text-white dark:text-brand-dark font-display font-black italic text-xl">V</span>
          </div>
          <span>Vibe Lab &bull; Studio &bull; MMXXVI</span>
        </div>
        <div className="flex gap-10">
          <a href="#" className="hover:text-brand-primary transition-colors">LinkedIn</a>
          <a href="mailto:hello@vibelab.cloud" className="hover:text-brand-primary transition-colors">Contact</a>
        </div>
        <div className="font-mono">Technical Excellence Worldwide</div>
      </div>
    </footer>
  );
};

export default Footer;
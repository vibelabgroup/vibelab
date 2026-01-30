import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Navigation: React.FC = () => {
  const { toggleTheme } = useTheme();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-3 md:top-4 left-0 w-full z-[100] transition-all duration-500">
      <div className="nav-container max-w-7xl glass-panel px-3 py-2.5 md:px-8 md:py-4 flex justify-between items-center shadow-2xl">
        <div 
          className="flex items-center gap-2 md:gap-3 group cursor-pointer" 
          onClick={handleScrollTop}
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12">
            <span className="text-white font-black text-lg md:text-xl italic font-display">V</span>
          </div>
          <div className="leading-none">
            <span className="block font-display font-bold text-sm md:text-xl uppercase tracking-tighter">Vibe Lab</span>
            <span className="block text-[7px] md:text-[8px] text-brand-primary uppercase tracking-[0.4em] font-bold">Studio</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
          <div className="hidden lg:flex items-center gap-8 text-[9px] font-black uppercase tracking-[0.4em] opacity-40">
            <a 
              href="#expertise" 
              onClick={(e) => handleNavClick(e, 'expertise')}
              className="hover:text-brand-primary transition-all"
            >
              Services
            </a>
            <a 
              href="#manifesto" 
              onClick={(e) => handleNavClick(e, 'manifesto')}
              className="hover:text-brand-primary transition-all"
            >
              Ethos
            </a>
          </div>
          
          <button 
            onClick={toggleTheme} 
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-brand-surface transition-all"
            aria-label="Toggle theme"
          >
            <i className="fa-solid fa-moon dark:hidden text-xs md:text-sm"></i>
            <i className="fa-solid fa-sun hidden dark:block text-xs md:text-sm"></i>
          </button>
          
          <a href="https://calendly.com/vibelabgroup/discovery-call" target="_blank" rel="noopener noreferrer" className="px-3.5 py-2 md:px-6 md:py-3 bg-brand-dark dark:bg-white text-white dark:text-brand-dark rounded-xl text-[8px] md:text-[10px] font-extrabold uppercase tracking-tight md:tracking-[0.3em] hover:bg-brand-primary hover:text-white transition-all whitespace-nowrap shadow-md">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
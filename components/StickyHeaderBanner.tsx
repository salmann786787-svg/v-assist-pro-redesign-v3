import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import logoDark from '../logo-dark.png';
import logoLight from '../logo-light.png';
import CountdownTimer from './CountdownTimer';

interface StickyHeaderBannerProps {
  isDarkMode: boolean;
  onOpenProtocol?: () => void;
}

const StickyHeaderBanner: React.FC<StickyHeaderBannerProps> = ({ isDarkMode, onOpenProtocol }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-cream/95 dark:bg-dark/95 backdrop-blur-md border-b border-dark/5 dark:border-white/10 py-3 transition-colors duration-500"
    >
      <div className="w-full px-0 flex items-center justify-between gap-4 relative">
        {/* Inner Corner Fillet (Architectural concave transition) */}
        <div className="hidden md:block absolute top-full left-[80px] w-[50px] h-[50px] pointer-events-none overflow-hidden">
          <div className="w-full h-full rounded-tl-[40px] shadow-[-20px_-20px_0_0_rgba(253,251,247,0.95)] dark:shadow-[-20px_-20px_0_0_rgba(15,15,15,0.95)]" />
          {/* Subtle accent border on the curve */}
          <div className="absolute inset-0 rounded-tl-[40px] border-t border-l border-white/10 dark:border-white/5" />
        </div>
        <div className="md:hidden absolute top-full left-[64px] w-6 h-6 pointer-events-none overflow-hidden">
          <div className="w-full h-full rounded-tl-[16px] shadow-[-12px_-12px_0_0_rgba(253,251,247,0.95)] dark:shadow-[-12px_-12px_0_0_rgba(15,15,15,0.95)]" />
        </div>

        {/* Left - Logo & Est (Aligned with Sidebar width) */}
        <div className="flex flex-col items-center justify-center w-16 md:w-20 lg:w-28 flex-shrink-0 relative">
          <img
            src={isDarkMode ? logoDark : logoLight}
            alt="V-Assist Pro"
            className="h-8 md:h-10 w-auto object-contain"
          />
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold text-dark/30 dark:text-white/30" style={{ fontFamily: 'Lato, sans-serif' }}>
            EST. 2008
          </span>
        </div>

        {/* Center - Exclusive Onboarding, Urgency & Timer Pill */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <div className="flex items-center gap-2 border-r border-dark/10 dark:border-white/10 pr-6 xl:pr-8">
            <Lock size={12} className="text-accent" />
            <span className="text-dark dark:text-white text-[11px] xl:text-[12px] uppercase tracking-[0.2em] font-bold whitespace-nowrap" style={{ fontFamily: 'Lato, sans-serif' }}>
              Exclusive Onboarding
            </span>
          </div>

          {/* The Pill */}
          <div className="flex items-center gap-4 xl:gap-6 bg-dark/5 dark:bg-white/5 border border-dark/10 dark:border-white/10 rounded-full px-5 py-1.5 shadow-inner">
            <span className="text-[9px] xl:text-[10px] uppercase tracking-[0.2em] font-black text-accent/80 whitespace-nowrap">Q1 CLOSES SOON</span>
            <div className="w-px h-3 bg-dark/20 dark:bg-white/20" />
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              <span className="text-[10px] xl:text-[11px] uppercase tracking-widest font-black text-red-500" style={{ fontFamily: 'Lato, sans-serif' }}>
                Limited Slots
              </span>
            </div>
            <div className="w-px h-4 bg-dark/10 dark:border-white/10" />
            <div className="shrink-0 scale-90">
              <CountdownTimer compact={true} />
            </div>
          </div>
        </div>

        {/* Right - Waitlist status with Join Now button */}
        <div className="flex items-center gap-4 xl:gap-8 px-8 text-gray-700 dark:text-white/70 text-sm flex-shrink-0" style={{ fontFamily: 'Lato, sans-serif' }}>
          <div className="hidden md:flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(25,171,228,0.5)]" />
            <span className="uppercase tracking-[0.1em] text-[10px] xl:text-[11px] font-bold text-dark/60 dark:text-white/60 whitespace-nowrap">Waitlist Active</span>
          </div>
          <button
            onClick={onOpenProtocol}
            className="px-6 xl:px-10 py-2.5 bg-accent text-white uppercase tracking-widest text-[10px] xl:text-[11px] font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-accent/30 whitespace-nowrap"
          >
            Join Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyHeaderBanner;

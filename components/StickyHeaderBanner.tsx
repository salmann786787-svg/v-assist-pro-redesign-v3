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
      <div className="w-full px-8 flex items-center justify-between gap-4">
        {/* Left - Logo & Est */}
        <div className="flex flex-col items-start gap-0.5 flex-shrink-0 relative">
          <img
            src={isDarkMode ? logoDark : logoLight}
            alt="V-Assist Pro"
            className="h-8 md:h-9 w-auto object-contain"
            style={{ marginLeft: '-10px' }}
          />
          <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-dark/40 dark:text-white/30 ml-[-4px]" style={{ fontFamily: 'Lato, sans-serif' }}>
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
        <div className="flex items-center gap-4 xl:gap-6 text-gray-700 dark:text-white/70 text-sm flex-shrink-0" style={{ fontFamily: 'Lato, sans-serif' }}>
          <div className="hidden md:flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(25,171,228,0.5)]" />
            <span className="uppercase tracking-[0.1em] text-[10px] xl:text-[11px] font-bold text-dark/60 dark:text-white/60 whitespace-nowrap">Waitlist Active</span>
          </div>
          <button
            onClick={onOpenProtocol}
            className="px-5 xl:px-6 py-2 bg-accent text-white uppercase tracking-widest text-[10px] xl:text-[11px] font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-accent/20 whitespace-nowrap"
          >
            Join Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyHeaderBanner;

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
      className="sticky top-0 z-40 bg-cream/90 dark:bg-dark/90 backdrop-blur-md border-b border-dark/5 dark:border-white/5 py-4 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 md:pl-28 pr-4 flex items-center justify-between gap-4">
        {/* Left - Logo & Est */}
        <div className="flex flex-col items-start gap-1 flex-shrink-0">
          <img
            src={isDarkMode ? logoDark : logoLight}
            alt="V-Assist Pro"
            className="h-7 md:h-8 w-auto object-contain"
            style={{ marginLeft: '-4px' }}
          />
          <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-dark/30 dark:text-white/30" style={{ fontFamily: 'Lato, sans-serif' }}>
            EST. 2008
          </span>
        </div>

        {/* Center - Exclusive Onboarding & Timer */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          <div className="flex items-center gap-2 pr-4 xl:pr-8 border-r border-dark/5 dark:border-white/10 shrink-0">
            <Lock size={11} className="text-accent" />
            <span className="text-dark dark:text-white text-[10px] xl:text-[11px] uppercase tracking-[0.2em] font-bold whitespace-nowrap" style={{ fontFamily: 'Lato, sans-serif' }}>
              Exclusive Onboarding
            </span>
          </div>

          <div className="shrink-0 scale-90 xl:scale-100 origin-left">
            <CountdownTimer compact={true} />
          </div>
        </div>

        {/* Right - Waitlist status with Join Now button */}
        <div className="flex items-center gap-3 xl:gap-5 text-gray-700 dark:text-white/70 text-xs flex-shrink-0" style={{ fontFamily: 'Lato, sans-serif' }}>
          <div className="hidden md:flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(25,171,228,0.5)]" />
            <span className="uppercase tracking-[0.1em] text-[9px] font-bold text-dark/60 dark:text-white/60 whitespace-nowrap">Waitlist Active</span>
          </div>
          <button
            onClick={onOpenProtocol}
            className="px-4 xl:px-6 py-2 bg-accent text-white uppercase tracking-widest text-[9px] xl:text-[10px] font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-accent/20 whitespace-nowrap"
          >
            Join Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyHeaderBanner;

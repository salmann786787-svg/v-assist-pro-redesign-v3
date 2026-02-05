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
      className="fixed top-0 left-0 right-0 z-[60] bg-cream/95 dark:bg-dark/95 backdrop-blur-md border-b border-dark/5 dark:border-white/10 py-5 transition-colors duration-500"
    >
      <div className="w-full px-8 flex items-center justify-between gap-4">
        {/* Left - Logo & Est */}
        <div className="flex flex-col items-start gap-1 flex-shrink-0 relative">
          <img
            src={isDarkMode ? logoDark : logoLight}
            alt="V-Assist Pro"
            className="h-10 md:h-12 w-auto object-contain"
            style={{ marginLeft: '-10px' }}
          />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-dark/40 dark:text-white/30 ml-[-4px]" style={{ fontFamily: 'Lato, sans-serif' }}>
            EST. 2008
          </span>
        </div>

        {/* Center - Exclusive Onboarding, Urgency & Timer Pill */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-14">
          <div className="flex items-center gap-3 border-r border-dark/10 dark:border-white/10 pr-6 xl:pr-14">
            <Lock size={14} className="text-accent" />
            <span className="text-dark dark:text-white text-[13px] xl:text-[14px] uppercase tracking-[0.2em] font-bold whitespace-nowrap" style={{ fontFamily: 'Lato, sans-serif' }}>
              Exclusive Onboarding
            </span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] xl:text-[11px] uppercase tracking-[0.4em] font-black text-accent/80 animate-pulse">Q1 CLOSES SOON</span>
            {/* The Pill */}
            <div className="flex items-center gap-6 bg-dark/5 dark:bg-white/5 border border-dark/10 dark:border-white/10 rounded-full px-6 py-2 shadow-inner">
              <div className="flex items-center gap-2 shrink-0">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                <span className="text-[11px] xl:text-[12px] uppercase tracking-widest font-black text-red-500" style={{ fontFamily: 'Lato, sans-serif' }}>
                  Limited Slots
                </span>
              </div>
              <div className="w-px h-5 bg-dark/10 dark:bg-white/10" />
              <div className="shrink-0">
                <CountdownTimer compact={true} />
              </div>
            </div>
          </div>
        </div>

        {/* Right - Waitlist status with Join Now button */}
        <div className="flex items-center gap-4 xl:gap-6 text-gray-700 dark:text-white/70 text-sm flex-shrink-0" style={{ fontFamily: 'Lato, sans-serif' }}>
          <div className="hidden md:flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(25,171,228,0.6)]" />
            <span className="uppercase tracking-[0.1em] text-[11px] xl:text-[12px] font-bold text-dark/70 dark:text-white/70 whitespace-nowrap">Waitlist Active</span>
          </div>
          <button
            onClick={onOpenProtocol}
            className="px-6 xl:px-8 py-3 bg-accent text-white uppercase tracking-widest text-[11px] xl:text-[12px] font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-accent/25 hover:shadow-accent/40 whitespace-nowrap"
          >
            Join Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyHeaderBanner;

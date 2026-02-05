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
      className="sticky top-0 z-40 bg-cream/90 dark:bg-dark/90 backdrop-blur-md border-b border-dark/5 dark:border-white/5 py-4 md:py-6 transition-colors duration-500"
    >
      <div className="container mx-auto px-6 md:pl-28 pr-6 flex items-center gap-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={isDarkMode ? logoDark : logoLight}
            alt="V-Assist Pro"
            className="h-8 md:h-10 w-auto object-contain"
            style={{ margin: '0 auto 0 -5px' }}
          />
        </div>

        {/* Center - Exclusive Onboarding */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <div className="flex items-center gap-2">
            <Lock size={12} style={{ color: 'rgba(208, 2, 27, 1)' }} />
            <span className="text-gray-900 dark:text-white text-xs uppercase tracking-[0.15em]" style={{ fontFamily: 'Lato, sans-serif', fontWeight: '400' }}>
              Exclusive Onboarding
            </span>
          </div>

          <CountdownTimer />
        </div>

        {/* Right side - Waitlist status with Join Now button */}
        <div className="hidden md:flex items-center gap-4 text-gray-700 dark:text-white/70 text-xs flex-shrink-0" style={{ fontFamily: 'Lato, sans-serif' }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="uppercase tracking-wider">Waitlist Active</span>
          </div>
          <button
            onClick={onOpenProtocol}
            className="px-4 py-2 bg-accent/20 hover:bg-accent/30 text-accent uppercase tracking-wider text-xs font-semibold rounded-lg transition-all duration-300 border border-accent/50 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            Join Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyHeaderBanner;

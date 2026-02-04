import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Lock } from 'lucide-react';

interface MobileHeroProps {
  onOpenProtocol?: () => void;
}

const MobileHero: React.FC<MobileHeroProps> = ({ onOpenProtocol }) => {
  return (
    <section className="relative min-h-screen flex flex-col bg-cream dark:bg-dark transition-colors duration-500 pb-24 pt-24">
      {/* Simplified Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-cream dark:from-dark dark:via-charcoal dark:to-dark" />

        {/* Subtle dot grid for mobile */}
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none dark:hidden"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(25, 171, 228, 0.4) 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <motion.div
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none hidden dark:block"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(25, 171, 228, 0.3) 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Single gradient orb for mobile */}
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 15, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -right-[15%] w-[300px] h-[300px] rounded-full opacity-30 blur-[80px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(25, 171, 228, 0.4) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Scarcity Banner - Sticky at top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-40 px-4 py-2 cursor-pointer group overflow-hidden border-b border-dark/5 dark:border-white/5 backdrop-blur-md bg-cream/70 dark:bg-dark/80"
      >
        <div className="flex flex-col gap-2">
          {/* Logo Section - compact */}
          <div className="flex flex-col items-center py-1">
            <img
              src="/logo-dark.png"
              alt="V Assist Pro"
              className="h-6 w-auto object-contain hidden dark:block"
            />
            <img
              src="/logo-light.png"
              alt="V Assist Pro"
              className="h-6 w-auto object-contain block dark:hidden"
            />
          </div>

          {/* Top row - Exclusive Onboarding */}
          <div className="flex items-center gap-2 justify-center">
            <Lock size={10} style={{ color: 'rgba(208, 2, 27, 1)' }} />
            <span className="text-dark dark:text-white text-[9px] uppercase tracking-[0.1em]" style={{ fontFamily: 'Lato, sans-serif', fontWeight: '400' }}>
              Exclusive Onboarding
            </span>
          </div>

          {/* Bottom row - Slot countdown */}
          <div className="flex items-center gap-2 justify-center">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-500 text-[9px] uppercase tracking-wider" style={{ fontFamily: 'Lato, sans-serif', fontWeight: '600' }}>
              1 Slot Left — Q1 Closes Soon
            </span>
          </div>

          {/* Waitlist status with Join Now button */}
          <div className="flex flex-col items-center gap-2 py-1">
            <div className="flex items-center justify-center gap-2 text-dark/70 dark:text-white/70 text-[8px]" style={{ fontFamily: 'Lato, sans-serif' }}>
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
              <span className="uppercase tracking-wider">Waitlist Active</span>
            </div>
            <button
              onClick={onOpenProtocol}
              className="px-2 py-1 bg-accent/20 hover:bg-accent/30 text-accent uppercase tracking-wider text-[8px] font-semibold rounded-sm transition-all duration-300 border border-accent/50 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              Join Now
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center px-4 relative z-10">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <Sparkles size={14} className="animate-pulse" style={{ color: 'var(--color-accent)' }} />
          <span style={{ letterSpacing: '2px', fontSize: '10px', fontWeight: '700', color: '#17aee7', fontFamily: 'Lato, sans-serif', textTransform: 'uppercase' }}>
            Human Intelligence
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8"
        >
          <h1 className="font-serif text-dark dark:text-cream">
            <p style={{ font: '600 48px/48px Playfair Display, serif', letterSpacing: '-2px', marginBottom: '8px' }}>
              Your focus,
            </p>
            <div className="italic block">
              <p style={{ font: '600 44px/48px Playfair Display, serif', letterSpacing: '-2px', color: 'var(--color-accent)' }}>
                Uninterrupted.
              </p>
            </div>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 max-w-sm"
        >
          <p
            className="text-gray-700 dark:text-white/90 text-center"
            style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '16px',
              fontWeight: '300',
              lineHeight: '24px',
            }}
          >
            We handle your customer communications and operational coordination so you can stay focused on growth and strategy.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={onOpenProtocol}
          className="group relative px-8 py-3 flex items-center gap-3 overflow-hidden rounded-lg border-2 border-accent/40 backdrop-blur-sm shadow-lg transition-all duration-500 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] mb-12"
          style={{
            backgroundColor: 'rgba(var(--color-accent-rgb), 0.7)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
          <span
            className="relative z-20 uppercase tracking-[0.15em] text-xs font-bold text-white"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Secure Your Slot
          </span>
          <ArrowRight className="relative z-20 w-4 h-4 group-hover:translate-x-1 transition-all duration-500 text-white" />
        </motion.button>

        {/* Feature Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="bg-white/80 dark:bg-charcoal/80 backdrop-blur-3xl border border-dark/5 dark:border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.12)] rounded-xl group w-full max-w-sm"
          style={{ padding: '24px 20px' }}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all flex-shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div className="flex-1">
              <h4
                className="text-gray-800 dark:text-white mb-2"
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '16px',
                  fontWeight: '500',
                  fontStyle: 'italic',
                }}
              >
                Human Intelligence
              </h4>
              <p
                className="text-gray-600 dark:text-white/80 text-sm"
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: '300',
                  lineHeight: '18px',
                }}
              >
                We are a boutique firm of people, not software. Your partner is a real human who learns your voice.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileHero;

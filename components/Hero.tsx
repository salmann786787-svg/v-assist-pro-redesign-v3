import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Activity, Sparkles, ShieldCheck, Download } from 'lucide-react';
import logoDark from '../logo-dark.png';
import logoLight from '../logo-light.png';
import CountdownTimer from './CountdownTimer';
import LeadMagnetGuide from './LeadMagnetGuide';

const heroStyles = `
  .hero-title {
    font-family: "Playfair Display", serif;
  }

  @keyframes wave-flow-1 {
    0% {
      transform: translateX(-100%) translateY(0);
    }
    100% {
      transform: translateX(100%) translateY(0);
    }
  }

  @keyframes wave-flow-2 {
    0% {
      transform: translateX(100%) translateY(0);
    }
    100% {
      transform: translateX(-100%) translateY(0);
    }
  }

  @keyframes wave-float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  .wave-container {
    animation: wave-float 8s ease-in-out infinite;
  }

  .wave-path-1 {
    animation: wave-flow-1 12s linear infinite;
  }

  .wave-path-2 {
    animation: wave-flow-2 15s linear infinite;
  }

  .wave-path-3 {
    animation: wave-flow-1 18s linear infinite;
    animation-delay: 3s;
  }

  @media (max-width: 991px) {
    .hero-uninterrupted {
      color: #1c90be;
    }
    .hero-description {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

interface HeroProps {
  onOpenProtocol?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenProtocol }) => {
  const [isGuideOpen, setIsGuideOpen] = React.useState(false);
  React.useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = heroStyles;
    document.head.appendChild(styleTag);
    return () => styleTag.remove();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col bg-cream dark:bg-dark transition-colors duration-500 pb-20 md:pb-0">

      {/* Dark Premium Banner - Fixed & Glassmorphic */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-16 md:left-20 right-0 z-40 py-3 px-6 flex items-center cursor-pointer group overflow-hidden backdrop-blur-md border-b border-dark/5 dark:border-white/5 bg-cream/70 dark:bg-dark/80"
      >
        {/* Left - Logo */}
        <div className="flex flex-col items-center">
          <img
            src={logoLight}
            alt="VAssist Pro"
            className="h-8 w-auto object-contain dark:hidden"
            style={{ marginTop: '3px' }}
          />
          <img
            src={logoDark}
            alt="VAssist Pro"
            className="h-8 w-auto object-contain hidden dark:block"
            style={{ marginTop: '3px' }}
          />
          <span className="text-dark/60 dark:text-white/60 text-xs tracking-widest font-light" style={{ fontFamily: 'Lato, sans-serif', fontSize: '9px', marginTop: '2px', letterSpacing: '0.1em' }}>EST. 2008</span>
        </div>

        {/* Center content */}
        <div className="flex-1 flex items-center justify-center gap-8">
          {/* Exclusive Onboarding */}
          <div className="flex items-center gap-2">
            <Lock size={12} style={{ color: 'rgba(208, 2, 27, 1)' }} />
            <span className="text-dark dark:text-white text-xs uppercase tracking-[0.15em]" style={{ fontFamily: 'Lato, sans-serif', fontWeight: '400' }}>
              Exclusive Onboarding
            </span>
          </div>

          {/* Countdown Timer */}
          <CountdownTimer />
        </div>

        {/* Right side - Waitlist status with Join Now button */}
        <div className="hidden md:flex items-center gap-4 text-dark/70 dark:text-white/70 text-xs" style={{ fontFamily: 'Lato, sans-serif' }}>
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
      </motion.div>

      {/* Spacer for Fixed Banner */}
      <div className="h-14 md:h-16" />

      {/* Main Hero Content & Background Elements */}
      <div className="flex-1 flex items-center relative">
        {/* Premium Background - Breathing Dot Grid & Gradient Orbs */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Base gradient layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-cream dark:from-dark dark:via-charcoal dark:to-dark" />

          {/* ===== BREATHING DOT GRID ===== */}
          {/* Unified grid - visible in both light and dark modes */}
          <motion.div
            animate={{ opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(25, 171, 228, 0.5) 2px, transparent 2px)`,
              backgroundSize: '60px 60px',
            }}
          />

          {/* ===== GRADIENT ORBS - Soft depth elements ===== */}
          {/* Large orb - top right */}
          <motion.div
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.08, 0.95, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[15%] -right-[5%] w-[700px] h-[700px] rounded-full opacity-50 blur-[130px] pointer-events-none hidden lg:block"
            style={{
              background: 'radial-gradient(circle, rgba(25, 171, 228, 0.5) 0%, rgba(6, 182, 212, 0.2) 35%, transparent 60%)',
            }}
          />

          {/* Secondary orb - bottom left */}
          <motion.div
            animate={{
              x: [0, -30, 25, 0],
              y: [0, 25, -20, 0],
              scale: [1, 0.95, 1.05, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute -bottom-[10%] -left-[8%] w-[550px] h-[550px] rounded-full opacity-40 blur-[110px] pointer-events-none hidden lg:block"
            style={{
              background: 'radial-gradient(circle, rgba(14, 165, 233, 0.45) 0%, rgba(8, 145, 178, 0.15) 35%, transparent 55%)',
            }}
          />

          {/* Accent orb - center area */}
          <motion.div
            animate={{
              opacity: [0.15, 0.3, 0.15],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 8 }}
            className="absolute top-[35%] left-[35%] w-[450px] h-[450px] rounded-full blur-[100px] pointer-events-none hidden lg:block"
            style={{
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 45%)',
            }}
          />

          {/* Small floating highlight orb */}
          <motion.div
            animate={{
              x: [0, 50, -40, 0],
              y: [0, -40, 50, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 12 }}
            className="absolute top-[20%] right-[30%] w-[250px] h-[250px] rounded-full blur-[70px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 50%)',
            }}
          />
        </div>

        {/* Subtle noise texture for premium feel */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          }}
        />

        {/* Animated SVG Wave Paths */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
          {/* Wave 1 - Top position */}
          <motion.svg
            className="wave-container absolute top-[5%] left-0 w-[200%] h-48 opacity-15 dark:opacity-7"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              className="wave-path-1"
              d="M0,100 Q250,60 500,100 T1000,100 T1500,100"
              stroke="url(#wave-gradient-1)"
              strokeWidth="1.5"
              fill="none"
            />
          </motion.svg>

          {/* Wave 2 - Middle position */}
          <motion.svg
            className="wave-container absolute top-[35%] left-0 w-[200%] h-48 opacity-12 dark:opacity-6"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <path
              className="wave-path-2"
              d="M0,80 Q250,110 500,80 T1000,80 T1500,80"
              stroke="url(#wave-gradient-2)"
              strokeWidth="1.2"
              fill="none"
            />
          </motion.svg>

          {/* Wave 3 - Bottom position */}
          <motion.svg
            className="wave-container absolute bottom-[10%] left-0 w-[200%] h-56 opacity-15 dark:opacity-7"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <path
              className="wave-path-3"
              d="M0,120 Q250,80 500,120 T1000,120 T1500,120"
              stroke="url(#wave-gradient-3)"
              strokeWidth="1.5"
              fill="none"
            />
          </motion.svg>

          {/* SVG Gradient Definitions */}
          <svg width="0" height="0">
            <defs>
              <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#19abe4', stopOpacity: 0 }} />
                <stop offset="50%" style={{ stopColor: '#19abe4', stopOpacity: 0.5 }} />
                <stop offset="100%" style={{ stopColor: '#19abe4', stopOpacity: 0 }} />
              </linearGradient>
              <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#06b4d4', stopOpacity: 0 }} />
                <stop offset="50%" style={{ stopColor: '#06b4d4', stopOpacity: 0.35 }} />
                <stop offset="100%" style={{ stopColor: '#06b4d4', stopOpacity: 0 }} />
              </linearGradient>
              <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 0 }} />
                <stop offset="50%" style={{ stopColor: '#22d3ee', stopOpacity: 0.4 }} />
                <stop offset="100%" style={{ stopColor: '#22d3ee', stopOpacity: 0 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-6 md:pl-32 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-8 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center" style={{ gap: 'var(--sp-xl)', marginBottom: 'var(--sp-lg)' }}>
                  <Sparkles size={16} className="animate-pulse" style={{ color: 'var(--color-accent)' }} />
                  <div className="h-[1px] w-12 bg-accent/30"></div>
                  <span style={{ letterSpacing: '3px', fontSize: '11px', fontWeight: '700', color: '#17aee7', fontFamily: 'Lato, sans-serif', textTransform: 'uppercase' }}>Customer Communications & Executive Operations, Handled</span>
                </div>

                <h1 className="font-serif text-dark dark:text-cream hero-title">
                  <p style={{ font: '600 115px/115px Playfair Display, serif', letterSpacing: '-4px' }}>Your focus,</p>
                  <div className="italic block hero-uninterrupted">
                    <p><span style={{ font: '600 100px/72px Playfair Display, serif', letterSpacing: '-4px', color: 'var(--color-accent)' }}>Uninterrupted.</span></p>
                  </div>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="lg:max-w-2xl border-l border-dark/5 dark:border-white/5"
                style={{ paddingLeft: 'var(--sp-4xl)', marginTop: 'var(--sp-3xl)' }}
              >
                <div className="hero-description text-gray-700 dark:text-white" style={{ fontFamily: 'Lato, sans-serif', fontSize: '20px', fontWeight: '300', lineHeight: '28px', marginBottom: '48px' }}>
                  <div style={{ fontWeight: '300' }}>
                    <p className="mb-4">
                      Whether you run a limo fleet, manage a family office, or close million-dollar deals, one problem persists: <span className="font-semibold italic">operational noise drowns out what matters.</span>
                    </p>
                    <p className="text-accent font-bold uppercase tracking-widest text-sm mb-6">
                      Save 15+ hours/week • Reduce operational noise by 70%
                    </p>
                    <p>
                      We handle your customer communications and operational coordination so you can stay focused on growth and strategy.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-6">
                  {/* Primary CTA */}
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex flex-col gap-4">
                      <button
                        onClick={onOpenProtocol}
                        className="group relative px-10 py-4 flex items-center gap-4 overflow-hidden rounded-lg border-2 border-accent/40 backdrop-blur-sm shadow-xl transition-all duration-500 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                        style={{
                          backgroundColor: 'rgba(var(--color-accent-rgb), 0.7)',
                          boxShadow: 'hover:shadow-[0_20px_40px_rgba(0,180,216,0.25)]'
                        }}
                      >
                        {/* Glow background on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                        <span className="relative z-20 uppercase tracking-[0.2em] text-xs font-bold transition-colors duration-300 text-white">Secure Your Slot</span>
                        <ArrowRight className="relative z-20 w-4 h-4 group-hover:translate-x-2 transition-all duration-500 text-white" />
                      </button>

                      {/* Trust Indicators */}
                      <div className="flex items-center gap-4 px-2 opacity-60">
                        <div className="flex items-center gap-1.5">
                          <ShieldCheck size={12} className="text-accent" />
                          <span className="text-[10px] uppercase tracking-wider font-bold">100% Confidential</span>
                        </div>
                        <div className="w-1 h-1 bg-dark/20 dark:bg-white/20 rounded-full" />
                        <div className="flex items-center gap-1.5">
                          <Lock size={12} className="text-accent" />
                          <span className="text-[10px] uppercase tracking-wider font-bold">30-Day Guarantee</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      {/* Secondary CTA - Free Guide */}
                      <button
                        onClick={() => setIsGuideOpen(true)}
                        className="group relative px-8 py-4 flex items-center gap-3 rounded-lg border-2 border-accent/40 hover:border-accent transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                        style={{
                          backgroundColor: 'transparent',
                          color: 'var(--color-accent)'
                        }}
                      >
                        <Download size={16} className="group-hover:scale-110 transition-transform" />
                        <span className="uppercase tracking-[0.15em] text-xs font-bold transition-colors duration-300">Get Free Guide</span>
                      </button>

                      {/* Consultation Link */}
                      <button
                        onClick={() => window.open('https://calendly.com', '_blank')}
                        className="flex flex-col items-start group px-2"
                      >
                        <span className="text-[9px] uppercase tracking-[0.2em] text-accent/70 font-bold mb-1 group-hover:text-accent transition-colors">Low Commitment</span>
                        <span className="text-[11px] font-medium border-b border-dark/10 dark:border-white/10 group-hover:border-accent transition-colors">Schedule Consultation</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center lg:justify-start relative" style={{ gap: "16px" }}>

              {/* Human Intelligence Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="bg-white/80 dark:bg-charcoal/80 backdrop-blur-3xl border border-dark/5 dark:border-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.15)] relative z-10 group rounded-xl"
                style={{ padding: "30px 40px", marginTop: "7px" }}
              >
                <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--color-accent)' }}>
                  <Activity size={20} className="animate-pulse" />
                </div>

                <div className="flex items-start gap-5 mb-8">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <ShieldCheck size={35} />
                  </div>
                  <div className="text-gray-700 dark:text-white" style={{ fontWeight: '400' }}>
                    <h4 className="text-gray-800 dark:text-white" style={{ marginBottom: '12px', font: 'italic 400 20px/28px Lato, sans-serif' }}>Human Intelligence</h4>
                    <div className="text-gray-600 dark:text-white" style={{ font: '400 17px/19.5px Lato, sans-serif' }}>
                      <p style={{ fontWeight: '300', lineHeight: '20.5px', fontSize: '18px' }}>
                        We are a boutique firm of people, not software. We learn your voice and preferences, and the rhythm of your business.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Conversion Path Indicator - Floating Bottom */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden xl:flex items-center gap-12 px-12 py-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl z-20">
          {[
            { label: 'Secure Slot', status: 'Current' },
            { label: 'Qualification Call', status: 'Pending' },
            { label: 'Onboarding', status: 'Pending' }
          ].map((step, i) => (
            <React.Fragment key={step.label}>
              <div className="flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border transition-colors ${i === 0 ? 'bg-accent border-accent text-white shadow-[0_0_20px_rgba(25,171,228,0.4)]' : 'border-white/20 text-white/40'}`}>
                  {i + 1}
                </div>
                <span className={`text-[9px] uppercase tracking-widest font-bold ${i === 0 ? 'text-accent' : 'text-white/40'}`}>{step.label}</span>
              </div>
              {i < 2 && <div className="w-8 h-[1px] bg-white/10" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Lead Magnet Modal */}
      <LeadMagnetGuide isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Activity, Sparkles, ShieldCheck, Download } from 'lucide-react';
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
      color: inherit;
    }
  }

  /* Light mode fixes */
  .light .hero-title {
    color: #111827 !important;
  }

  .light .hero-uninterrupted {
    color: #19abe4 !important;
  }

  .light .hero-description {
    color: #111827 !important;
  }

  /* Light mode fixes for the floating onboarding card */
  .light {
    --tw-text-opacity: 1;
  }

  .light .text-white\/30,
  .light .text-white\/40,
  .light .text-white\/50 {
    color: rgba(17, 24, 39, 0.85) !important;
  }

  .light .border-white\/10 {
    border-color: rgba(17, 24, 39, 0.15) !important;
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
    <section className="relative min-h-screen flex flex-col bg-cream dark:bg-dark transition-colors duration-500 pb-20 md:pb-0 overflow-hidden min-h-[100vh]" id="home">
      {/* Premium Background - Breathing Dot Grid & Gradient Orbs (Covering entire section) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-cream dark:from-dark dark:via-charcoal dark:to-dark" />

        {/* ===== BREATHING DOT GRID ===== */}
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(25, 171, 228, 0.35) 1px, transparent 1px), radial-gradient(circle, rgba(0, 0, 0, 0.12) 1px, transparent 1px)`,
            backgroundSize: '32px 32px, 32px 32px',
            backgroundPosition: '0 0, 0 0',
          }}
        />

        {/* ===== GRADIENT ORBS - Soft depth elements ===== */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] dark:bg-cyan-500/5 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] dark:bg-blue-500/5" />
      </div>


      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative pt-16 pb-40">

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

                <h1 className="font-serif text-gray-900 dark:text-cream hero-title">
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
                className="lg:max-w-2xl"
                style={{ paddingLeft: 'var(--sp-4xl)', marginTop: 'var(--sp-3xl)', borderLeft: '0.2px solid rgba(25, 171, 228, 0.8)' }}
              >
                <div className="hero-description text-gray-900 dark:text-white" style={{ fontFamily: 'Lato, sans-serif', fontSize: '20px', fontWeight: '400', lineHeight: '28px', marginBottom: '48px' }}>
                  <div style={{ fontWeight: '400' }}>
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

                <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-8 mt-12">
                  {/* Primary Path */}
                  <div className="flex flex-col gap-4">
                    <button
                      onClick={onOpenProtocol}
                      className="group relative h-16 px-10 flex items-center gap-4 overflow-hidden rounded-lg border-2 border-accent/40 backdrop-blur-sm shadow-xl transition-all duration-500 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                      style={{
                        backgroundColor: 'rgba(var(--color-accent-rgb), 0.8)',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                      <span className="relative z-20 uppercase tracking-[0.2em] text-xs font-bold text-white">Secure Your Slot</span>
                      <ArrowRight className="relative z-20 w-4 h-4 group-hover:translate-x-2 transition-all duration-500 text-white" />
                    </button>

                    {/* Trust Indicators */}
                    <div className="flex items-center gap-4 px-2 text-gray-600 dark:text-cream/50">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck size={12} className="text-accent" />
                        <span className="text-[10px] uppercase tracking-wider font-bold">100% Confidential</span>
                      </div>
                      <div className="w-1 h-1 bg-gray-300 dark:bg-white/20 rounded-full" />
                      <div className="flex items-center gap-1.5">
                        <Lock size={12} className="text-accent" />
                        <span className="text-[10px] uppercase tracking-wider font-bold">30-Day Guarantee</span>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Path */}
                  <div className="flex flex-col gap-4">
                    <button
                      onClick={() => setIsGuideOpen(true)}
                      className="group relative h-16 px-8 flex items-center gap-3 rounded-lg border-2 border-accent/40 hover:border-accent transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent bg-transparent"
                    >
                      <Download size={16} className="text-accent group-hover:scale-110 transition-transform" />
                      <span className="uppercase tracking-[0.15em] text-xs font-bold text-accent">Get Free Guide</span>
                    </button>
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
                className="bg-white/95 dark:bg-charcoal/80 backdrop-blur-3xl border border-gray-300 dark:border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_40px_80px_rgba(0,0,0,0.15)] relative z-10 group rounded-xl"
                style={{ padding: "30px 40px", marginTop: "7px" }}
              >
                <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--color-accent)' }}>
                  <Activity size={20} className="animate-pulse" />
                </div>

                <div className="flex items-start gap-5 mb-8">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <ShieldCheck size={35} />
                  </div>
                  <div className="text-gray-900 dark:text-white" style={{ fontWeight: '500' }}>
                    <h4 className="text-gray-900 dark:text-white" style={{ marginBottom: '12px', font: 'italic 600 20px/28px Lato, sans-serif' }}>Human Intelligence</h4>
                    <div className="text-gray-800 dark:text-white" style={{ font: '500 17px/19.5px Lato, sans-serif' }}>
                      <p style={{ fontWeight: '400', lineHeight: '20.5px', fontSize: '18px' }}>
                        We are a boutique firm of people, not software. We learn your voice and preferences, and the rhythm of your business.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      {/* Floating Onboarding Protocol - Restored Premium Design */}
      < div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-30 hidden md:flex" >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-12 px-12 py-6 rounded-3xl bg-white/5 dark:bg-dark/10 border border-white/10 dark:border-white/5 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
        >
          {[
            { label: 'Secure Slot', status: 'Current' },
            { label: 'Qualification Call', status: 'Pending' },
            { label: 'Onboarding', status: 'Pending' }
          ].map((step, i) => (
            <React.Fragment key={step.label}>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border transition-all duration-500 ${i === 0 ? 'bg-accent border-accent text-white shadow-[0_0_25px_rgba(25,171,228,0.5)] scale-110' : 'border-white/10 text-white/40 group-hover:border-white/30 group-hover:text-white/60'}`}>
                  {i + 1}
                </div>
                <div className="flex flex-col">
                  <span className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors ${i === 0 ? 'text-white' : 'text-white/30 group-hover:text-white/50'}`}>
                    {step.label}
                  </span>
                  {i === 0 && <span className="text-[8px] text-accent font-bold uppercase tracking-tighter animate-pulse">Action Required</span>}
                </div>
              </div>
              {i < 2 && <ArrowRight size={14} className="text-white/10" />}
            </React.Fragment>
          ))}
        </motion.div>
      </div >
      <LeadMagnetGuide isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </section >
  );
};

export default Hero;

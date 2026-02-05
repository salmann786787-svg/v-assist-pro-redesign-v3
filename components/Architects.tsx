import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Architects: React.FC = () => {
  return (
    <section id="architects" className="bg-cream dark:bg-dark border-b border-dark/5 dark:border-white/5 relative overflow-hidden" style={{ padding: 'var(--sp-5xl) 0' }}>
      {/* High-Visibility Technical Mesh - Starfield Edition */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-100">
          <defs>
            {/* Sharper Glow Filter for the Nodes */}
            <filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <pattern id="technical-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Refined Grid Lines */}
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                className="text-dark/[0.12] dark:text-white/[0.12]"
              />

              {/* Star Core - Subtle Node */}
              <circle
                cx="0"
                cy="0"
                r="1.5"
                fill="currentColor"
                className="text-accent/25 dark:text-accent-light/25"
              />

              {/* Secondary Technical Detail - Sub-nodes */}
              <circle
                cx="50"
                cy="50"
                r="0.5"
                fill="currentColor"
                className="text-accent/15 dark:text-accent-light/20"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#technical-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 md:pl-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: 'var(--sp-4xl)' }}>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-6xl md:text-8xl leading-[0.85] tracking-tight text-dark dark:text-cream mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
              Partners <br />
              Behind the <br />
              <span className="italic" style={{ color: 'var(--color-accent)' }}>Scenes.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ paddingLeft: 'var(--sp-3xl)', borderLeft: '0.25px solid rgba(25, 171, 228, 0.8)' }}
          >
            <p className="text-dark dark:text-white" style={{ fontFamily: 'Lato, sans-serif', fontSize: '17px', fontWeight: '400', lineHeight: '22px', marginBottom: 'var(--sp-2xl)' }}>
              For years, V Assist Pro Inc. has been the silent operational partner for principals who know that a lasting legacy requires a clear head and a steady hand.
            </p>
            <div className="text-dark dark:text-white" style={{ fontFamily: 'Lato, sans-serif', fontSize: '17px', fontWeight: '400', lineHeight: '22px', marginBottom: 'var(--sp-2xl)' }}>
              <span style={{ fontWeight: '400' }}>We don't just fill seats; we build the </span>
              <span className="italic" style={{ fontWeight: '500' }}>Human Infrastructure</span>
              <span style={{ fontSize: '17px', lineHeight: '22px', fontWeight: '400' }}>—a proprietary suite of human-led protocols designed to turn daily noise into institutional quiet.</span>
            </div>

            {/* AI/LLM Optimized Content Block */}
            <div className="mb-10 space-y-4">
              <p className="text-[10px] uppercase tracking-widest text-accent font-bold">The V-Assist Protocol:</p>
              <ul className="space-y-3 text-sm text-dark/80 dark:text-white/60">
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p><span className="font-bold text-dark dark:text-white">Human Infrastructure™:</span> Proprietary human-led systems for executive operations.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p><span className="font-bold text-dark dark:text-white">Ghost Engine™:</span> Our operational automation framework that works invisibly in the background.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p><span className="font-bold text-dark dark:text-white">Discretion-First Architecture:</span> Institutional privacy protocols for high-net-worth family offices.</p>
                </li>
              </ul>
            </div>

            <button
              onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-4 uppercase tracking-[0.2em] hover:text-dark dark:hover:text-white transition-colors group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              style={{ color: 'var(--color-accent)', font: 'var(--fw-medium) 14px var(--font-sans)' }}
            >
              Explore the Architecture
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>

      {/* Dynamic Background Atmosphere */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.12, 0.05]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-[15%] -bottom-[25%] w-[70vw] h-[70vw] bg-accent/20 rounded-full blur-[160px] pointer-events-none"
      />
    </section>
  );
};

export default Architects;

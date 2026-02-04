import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, ArrowRight, MessageSquare, Coffee, Sparkles } from 'lucide-react';

interface ProtocolOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProtocolOverlay: React.FC<ProtocolOverlayProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[70] bg-cream dark:bg-dark overflow-hidden flex flex-col"
        >
          {/* Immersive Background Visuals */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern dark:bg-grid-pattern-dark bg-[length:100px_100px]" />
          </div>

          {/* Header Console */}
          <header className="relative z-20 border-b border-dark/5 dark:border-white/5 px-12 py-8 flex justify-between items-center bg-white/40 dark:bg-black/40 backdrop-blur-2xl">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <Sparkles className="text-accent" size={20} />
                <h1 className="text-sm font-mono font-bold uppercase tracking-[0.5em] text-dark dark:text-cream">Private Consultation Briefing</h1>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-4 hover:bg-accent hover:text-white rounded-full transition-all duration-300 flex items-center gap-3 group"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Return to Home</span>
              <X size={24} />
            </button>
          </header>

          {/* Main Console Content */}
          <div className="flex-grow overflow-y-auto relative z-10 no-scrollbar">
            <div className="container mx-auto px-12 py-20 max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

                {/* Visual Side (Left) */}
                <div className="lg:col-span-5 space-y-16">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="font-serif text-6xl md:text-8xl leading-none text-dark dark:text-cream tracking-tighter mb-10">
                      Let's Find <br />
                      <span className="italic text-accent">Your Focus.</span>
                    </h2>
                    <p className="text-xl font-light text-gray-600 dark:text-white leading-relaxed border-l-2 border-accent pl-8" style={{ fontFamily: 'Lato, sans-serif' }}>
                      Transitioning to a silent operational layer starts with a conversation. This briefing helps us understand where the noise is coming from.
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="p-6 bg-white dark:bg-white/5 border border-dark/5 dark:border-white/5 rounded-lg">
                      <MessageSquare size={20} className="text-accent mb-4" />
                      <h4 className="text-[10px] font-bold uppercase tracking-widest mb-2">Human Connect</h4>
                      <p className="text-[10px] text-gray-500 dark:text-white/70 uppercase leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>No bots. Just a conversation between partners.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-white/5 border border-dark/5 dark:border-white/5 rounded-lg">
                      <Coffee size={20} className="text-accent mb-4" />
                      <h4 className="text-[10px] font-bold uppercase tracking-widest mb-2">Bespoke Audit</h4>
                      <p className="text-[10px] text-gray-500 dark:text-white/70 uppercase leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>We map your business rhythm, not a template.</p>
                    </div>
                  </div>
                </div>

                {/* Form Side (Right) */}
                <div className="lg:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/80 dark:bg-charcoal/80 backdrop-blur-3xl p-10 md:p-16 border border-dark/5 dark:border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.1)] rounded-2xl"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                      <div className="space-y-3">
                        <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent font-bold">How should we address you?</label>
                        <input type="text" placeholder="YOUR NAME" className="w-full bg-transparent border-b-2 border-dark/10 dark:border-white/10 py-4 text-xl focus:outline-none focus:border-accent transition-colors placeholder:text-gray-300 dark:placeholder:text-gray-700 font-serif" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent font-bold">Best way to reach you?</label>
                        <input type="email" placeholder="EMAIL OR PHONE" className="w-full bg-transparent border-b-2 border-dark/10 dark:border-white/10 py-4 text-xl focus:outline-none focus:border-accent transition-colors placeholder:text-gray-300 dark:placeholder:text-gray-700 font-serif" />
                      </div>
                    </div>

                    <div className="mb-12 space-y-3">
                      <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent font-bold">Your Theatre of Operation</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        {['Luxury Fleet', 'Private Wealth', 'Other'].map(sector => (
                          <button key={sector} className="py-4 border border-dark/10 dark:border-white/10 text-[10px] font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-all rounded-lg">
                            {sector}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 mb-12">
                      <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent font-bold">What is currently stealing your focus?</label>
                      <textarea rows={4} placeholder="Tell us about the noise in your day-to-day..." className="w-full bg-black/5 dark:bg-white/5 border border-dark/5 dark:border-white/5 rounded-xl p-6 text-sm focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-gray-400"></textarea>
                    </div>

                    <div className="flex items-center justify-between gap-12 pt-8 border-t border-dark/5 dark:border-white/5">
                      <div className="hidden md:flex items-center gap-4">
                        <ShieldCheck size={20} className="text-accent" />
                        <span className="text-[9px] font-mono text-gray-500 dark:text-white/70 uppercase tracking-widest">Discretion & Privacy <br /> Guaranteed by Protocol</span>
                      </div>

                      {/* Liquid Glass Submit Button */}
                      <button className="flex-grow md:flex-grow-0 group relative px-12 py-6 overflow-hidden rounded-xl border border-dark/10 dark:border-white/10 shadow-xl transition-all duration-500 hover:border-accent/50 hover:shadow-accent/20">
                        <div className="absolute inset-0 bg-dark dark:bg-white backdrop-blur-2xl group-hover:bg-accent transition-colors duration-500" />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                          <div className="absolute -inset-[100%] rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                        </div>
                        <div className="relative z-10 flex items-center justify-between gap-8">
                          <span className="uppercase tracking-[0.4em] text-xs font-bold text-cream dark:text-dark group-hover:text-white transition-colors duration-300">Submit Briefing</span>
                          <ArrowRight className="w-5 h-5 text-cream dark:text-dark group-hover:text-white group-hover:translate-x-3 transition-all duration-500" />
                        </div>
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProtocolOverlay;
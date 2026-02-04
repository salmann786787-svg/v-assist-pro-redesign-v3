import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Linkedin,
  Twitter,
  ShieldCheck,
  Activity,
  Lock,
  Globe,
  Sparkles
} from 'lucide-react';

import { SECTORS } from '../constants';

interface FooterProps {
  onOpenProtocol?: () => void;
  onSelectSector?: (id: number) => void;
  onSelectLocation?: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenProtocol, onSelectSector, onSelectLocation }) => {
  const handleScroll = (id: string) => {
    if (onSelectSector) {
      onSelectSector(null as any); // Type cast if necessary or use 0/null
    }

    // Small delay to allow home content to mount if we were on a subpage
    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-dark text-cream pt-48 pb-12 overflow-hidden relative">
      {/* Ghost Aura Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_20%,_rgba(25,171,228,0.15),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:pl-28 relative z-10">

        {/* Cinematic CTA Section */}
        <div className="flex flex-col items-start mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center gap-4"
          >
            <Sparkles size={14} className="text-accent animate-pulse" />
            <div className="h-[1px] w-8 bg-accent/40"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-medium" style={{ fontFamily: 'Lato, sans-serif' }}>Ready to reclaim your focus?</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1]" style={{ fontFamily: '"Playfair Display", serif' }}>
              Stop managing <span className="italic text-white/50">the noise.</span>
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] italic text-accent mt-1" style={{ fontFamily: '"Playfair Display", serif' }}>
              Claim Focus.
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 w-full">
            {/* CTA Button */}
            <button
              onClick={onOpenProtocol}
              className="group relative px-10 py-5 flex items-center gap-6 overflow-hidden rounded-xl border border-white/20 shadow-xl transition-all duration-500 hover:border-accent/50 hover:shadow-accent/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl z-0" />
              <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-accent transition-transform duration-500 ease-out z-0" />
              <span className="relative z-10 text-sm md:text-base tracking-[0.3em] font-bold uppercase text-white">Secure Your Slot</span>
              <ArrowRight className="relative z-10 w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" />
            </button>

            <div />
          </div>
        </div>

        {/* Navigation Readout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 pb-32 border-b border-white/5">
          <div className="space-y-8">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F5197203d26324a14a7c754f2f94e8a71%2F9089607cf9e440629092c9b67d4b2b1c" alt="VAssist Pro" className="h-10 w-auto object-contain" />
            <p className="text-gray-600 dark:text-white leading-relaxed max-w-xs font-light" style={{ fontFamily: 'Lato, sans-serif' }}>
              <p>
                We handle your customer communications and operational coordination so you can stay focused on growth and strategy.
              </p>
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold" style={{ font: '700 12px/16px Lato, sans-serif' }}>Sectors</h4>
            <ul className="space-y-4 font-light text-gray-600 dark:text-white" style={{ fontFamily: 'Lato, sans-serif' }}>
              {SECTORS.map((sector) => (
                <li key={sector.id}>
                  <button
                    onClick={() => {
                      if (onSelectSector) onSelectSector(sector.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] text-left"
                  >
                    <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {sector.title.split(' & ')[0].split(' - ')[0]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold" style={{ font: '700 12px/16px Lato, sans-serif' }}>Command</h4>
            <ul className="space-y-4 font-light text-gray-600 dark:text-white" style={{ fontFamily: 'Lato, sans-serif' }}>
              {[
                { name: 'Home', id: 'home' },
                { name: 'The Methodology', id: 'methodology' },
                { name: 'The Engine Room', id: 'integrations' },
                { name: 'Private Evidence', id: 'evidence' },
                { name: 'Principal Support', id: 'faq' }
              ].map((link) => (
                <li key={link.name}>
                  <button onClick={() => handleScroll(link.id)} className="hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]">
                    <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold" style={{ font: '700 12px/16px Lato, sans-serif' }}>Regional</h4>
            <ul className="space-y-4 font-light text-gray-600 dark:text-white" style={{ fontFamily: 'Lato, sans-serif' }}>
              {[
                { name: 'Florida Operations', id: 'florida' },
                { name: 'Miami Luxury market', id: 'miami' },
                { name: 'US National Support', id: 'us' }
              ].map((loc) => (
                <li key={loc.id}>
                  <button
                    onClick={() => onSelectLocation?.(loc.id)}
                    className="hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] text-left"
                  >
                    <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {loc.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold" style={{ font: '700 12px/16px Lato, sans-serif' }}>Private Comms</h4>
            <div className="space-y-4">
              <a
                href="tel:+19416234590"
                className="text-gray-700 dark:text-white text-2xl font-light block hover:text-accent transition-colors"
                aria-label="Call (941) 623-4590"
              >
                (941) 623-4590
              </a>
              <a
                href="mailto:info@vassistproinc.com"
                className="text-gray-600 dark:text-white hover:text-accent transition-colors cursor-pointer block text-sm"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                info@vassistproinc.com
              </a>

              <div className="flex flex-col gap-3 pt-4">
                <div className="inline-flex items-center gap-4 px-4 py-2 bg-accent/10 border border-accent/20 rounded-sm w-fit">
                  <Activity className="w-4 h-4 text-accent animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest text-accent font-bold" style={{ font: '700 12px/16px Lato, sans-serif' }}>Boutique Capacity: Stable</span>
                </div>

                <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-white/40 font-bold">
                  <ShieldCheck size={12} className="text-accent/50" />
                  <span>US-Based • 100% Confidential</span>
                </div>
              </div>

              {/* Mobile Mobile Quick Call Button */}
              <div className="md:hidden pt-6">
                <a
                  href="tel:+19416234590"
                  className="w-full py-4 bg-accent/20 border border-accent/40 rounded-lg flex items-center justify-center gap-3 text-accent font-bold uppercase tracking-widest text-xs"
                >
                  <Globe size={16} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col md:row justify-between items-center gap-12 text-[10px] uppercase tracking-[0.4em] opacity-40" style={{ font: '700 10px/15px Lato, sans-serif' }}>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Globe size={12} className="text-accent" />
              <span>Global Presence</span>
            </div>
          </div>

          <p className="text-center">© 2024 V Assist Pro Inc. • Private Operations Division</p>

          <div className="flex gap-8">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

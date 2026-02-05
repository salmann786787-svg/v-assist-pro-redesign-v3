import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
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
    <footer className="bg-dark text-cream pt-24 pb-12 overflow-hidden relative">
      {/* Ghost Aura Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_20%,_rgba(25,171,228,0.15),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:pl-28 relative z-10 flex flex-col" style={{ maxWidth: '768px', margin: '0 auto' }}>

        {/* Cinematic CTA Section */}
        <div className="flex flex-col items-start" style={{ margin: '0 auto 128px' }}>
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
            <h2 style={{ fontFamily: '"Playfair Display", serif', font: '400 36px/48px "Playfair Display", serif', letterSpacing: '-0.9px' }}>
              <div style={{ fontSize: '60px' }}>Stop managing </div>
              <div style={{ display: 'inline', color: 'white', fontStyle: 'italic', fontWeight: '400', fontSize: '60px' }}>the noise.</div>
            </h2>
            <div style={{ color: 'var(--color-accent)', letterSpacing: '-0.9px', marginTop: '4px', font: 'italic 400 60px/40px "Playfair Display", serif' }}>
              Claim Focus.
            </div>
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
        <div className="grid grid-cols-3 gap-5 pb-24 border-b border-white/5">
          <div className="space-y-8">
            <div className="space-y-6">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F5197203d26324a14a7c754f2f94e8a71%2F9089607cf9e440629092c9b67d4b2b1c" alt="VAssist Pro" className="h-10 w-auto object-contain" />
              <p className="text-white leading-relaxed font-light text-sm" style={{ fontFamily: 'Lato, sans-serif' }}>
                We handle your customer communications and operational coordination so you can stay focused on growth and strategy.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Private Comms</h4>
              <a href="tel:+19416234590" className="text-white text-xl font-light block hover:text-accent transition-colors">(941) 623-4590</a>
              <a href="mailto:info@vassistproinc.com" className="text-white hover:text-accent transition-colors block text-xs underline underline-offset-4">info@vassistproinc.com</a>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold" style={{ font: '700 12px/16px Lato, sans-serif' }}>Sectors</h4>
            <ul className="font-light text-white" style={{ fontFamily: 'Lato, sans-serif', marginTop: '22px', gap: '11px', display: 'flex', flexDirection: 'column' }}>
              <li className="flex items-baseline" style={{ display: 'flex', alignItems: 'baseline', fontWeight: '300', height: '16px', listStyle: 'none' }}>
                <button
                  onClick={() => {
                    if (onSelectSector) onSelectSector(1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-all duration-300 flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] text-left py-0"
                  style={{ display: 'flex', alignItems: 'center', fontWeight: '300', gap: '12px', backgroundColor: 'transparent', borderColor: 'transparent' }}
                >
                  <div style={{ display: 'block', fontSize: '14px', fontWeight: '300', lineHeight: '21px', listStyle: 'none', marginRight: '10px', padding: '0 15px 15px 0' }}>
                    <p>Luxury Ground Transport / Limo Services </p>
                  </div>
                </button>
              </li>
              <li className="flex items-baseline" style={{ display: 'flex', alignItems: 'baseline', fontWeight: '300', height: '16px', listStyle: 'none', marginTop: '16px' }}>
                <button
                  onClick={() => {
                    if (onSelectSector) onSelectSector(2);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-all duration-300 flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] text-left py-0"
                  style={{ display: 'flex', alignItems: 'center', fontWeight: '300', gap: '12px', backgroundColor: 'transparent', borderColor: 'transparent' }}
                >
                  <div style={{ display: 'block', fontSize: '14px', fontWeight: '300', lineHeight: '10px', listStyle: 'none' }}>
                    High-Discretion Real Estate
                  </div>
                </button>
              </li>
              <li className="flex items-baseline" style={{ display: 'flex', alignItems: 'baseline', fontWeight: '300', height: '16px', listStyle: 'none', marginTop: '16px' }}>
                <button
                  onClick={() => {
                    if (onSelectSector) onSelectSector(3);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-all duration-300 flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] text-left py-0"
                  style={{ display: 'flex', alignItems: 'center', fontWeight: '300', gap: '12px', backgroundColor: 'transparent', borderColor: 'transparent' }}
                >
                  <div style={{ display: 'block', fontSize: '14px', fontWeight: '300', lineHeight: '10px', listStyle: 'none', marginTop: '-4px' }}>
                    <p>Private &amp; Family Offices</p>
                  </div>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] uppercase tracking-[0.4em] opacity-50" style={{ font: '700 10px/15px Lato, sans-serif' }}>
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

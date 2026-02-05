import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode?: boolean;
  onOpenProtocol?: () => void;
}

const links = [
  { name: "Home", number: "00", id: "home" },
  { name: "Verticals", number: "01", id: "verticals" },
  { name: "Methodology", number: "02", id: "methodology" },
  { name: "Integrations", number: "03", id: "integrations" },
  { name: "Evidence", number: "04", id: "evidence" },
];

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose, isDarkMode, onOpenProtocol }) => {
  const handleScroll = (id: string) => {
    onClose();
    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const handleAction = () => {
    onClose();
    if (onOpenProtocol) onOpenProtocol();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Deep Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-md"
          />

          {/* Half-width Liquid Glass Panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-full md:w-1/2 min-w-[320px] z-[60] flex flex-col bg-white/80 dark:bg-black/60 backdrop-blur-3xl shadow-[20px_0_100px_rgba(0,0,0,0.2)] dark:shadow-[80px_0_120px_rgba(0,0,0,0.6)] border-r border-white/20 dark:border-white/10 overflow-hidden"
          >
            {/* Liquid Background Accents */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 pointer-events-none" />
            <div className="absolute -top-[20%] -left-[20%] w-[80%] h-[80%] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-[20%] -right-[20%] w-[60%] h-[60%] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Close Button Inside Panel */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 p-3 hover:scale-110 hover:rotate-90 transition-all duration-500 rounded-full bg-black/5 dark:bg-white/10 text-dark dark:text-cream z-20"
            >
              <X size={24} />
            </button>

            <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-20 py-12 relative z-10 text-dark dark:text-cream h-full max-h-screen">
              {/* Logo / Title Area (Optional height reduction) */}
              <div className="mb-8 md:mb-12">
                <p className="text-[10px] font-bold tracking-[0.6em] text-accent uppercase opacity-50">Private Terminal</p>
              </div>

              <div className="grid gap-2 md:gap-4 lg:gap-6">
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.08, type: "spring", stiffness: 100, damping: 25 }}
                    onClick={() => handleScroll(link.id)}
                    className="group cursor-pointer flex items-baseline border-b border-dark/5 dark:border-white/5 pb-3 md:pb-4 hover:border-accent/40 transition-colors"
                  >
                    <span className="text-[10px] md:text-xs mr-6 md:mr-10 opacity-50 dark:opacity-30 group-hover:text-accent group-hover:opacity-100 transition-all font-bold tracking-widest text-dark dark:text-cream" style={{ fontFamily: 'Lato, sans-serif' }}>{link.number}</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic tracking-tight leading-none group-hover:translate-x-3 transition-transform duration-700 group-hover:text-accent" style={{ fontFamily: '"Playfair Display", serif' }}>
                      {link.name}
                    </h2>
                  </motion.div>
                ))}
              </div>

              {/* Compressed Footer to avoid scrollbar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 md:mt-16 grid grid-cols-1 gap-6 md:gap-8"
              >
                <div style={{ fontFamily: 'Lato, sans-serif' }} className="space-y-1">
                  <p className="text-lg md:text-xl font-medium">(941) 623-4590</p>
                  <div className="text-lg md:text-xl hover:text-accent cursor-pointer transition-colors text-dark/80 dark:text-cream/80" style={{ fontWeight: '500' }}>
                    <p>info@vassistproinc.com</p>
                  </div>
                </div>

                <div>
                  <button
                    onClick={handleAction}
                    className="group relative bg-dark dark:bg-white text-cream dark:text-dark px-8 py-4 font-bold tracking-[0.3em] uppercase text-[10px] hover:bg-accent dark:hover:bg-accent hover:text-white transition-all duration-500 overflow-hidden"
                  >
                    <span className="relative z-10 font-[700]">Secure Your Slot</span>
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;

import React from 'react';
import { Moon, Sun, Plus, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import MenuOverlay from './MenuOverlay';

interface MobileSidebarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  onOpenProtocol: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  isDarkMode,
  toggleTheme,
  onOpenProtocol,
}) => {
  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 h-20 flex items-center justify-between px-6 bg-white/80 dark:bg-black/60 backdrop-blur-3xl border-t border-dark/[0.08] dark:border-white/10 z-40 md:hidden">
        {/* Menu Button */}
        <button
          className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-dark/5 dark:hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Toggle menu"
        >
          <Menu size={24} className="text-accent dark:text-accent-light" />
        </button>

        {/* Center - Logo placeholder or empty space */}
        <div className="flex-1" />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-dark/5 dark:hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
          {isDarkMode ? (
            <Sun size={20} className="text-accent dark:text-accent-light" />
          ) : (
            <Moon size={20} className="text-accent dark:text-accent-light" />
          )}
        </button>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenProtocol}
          className="ml-3 w-10 h-10 bg-accent dark:bg-accent-light text-white rounded-lg flex items-center justify-center shadow-lg transition-all"
        >
          <Plus size={20} />
        </motion.button>
      </nav>

      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        isDarkMode={isDarkMode}
        onOpenProtocol={onOpenProtocol}
      />
    </>
  );
};

export default MobileSidebar;

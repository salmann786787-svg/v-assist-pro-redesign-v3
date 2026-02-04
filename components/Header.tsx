import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import MenuOverlay from './MenuOverlay';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'py-4 bg-cream/90 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-serif text-2xl font-bold tracking-tighter">
            V<span className="text-accent">Assist</span>Pro
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <button onClick={() => setIsMenuOpen(true)} className="group flex items-center gap-2 hover:opacity-70 transition-opacity">
               <span className="uppercase text-xs tracking-widest">Menu</span>
               <div className="bg-dark text-cream p-2 rounded-full group-hover:bg-accent transition-colors">
                 <Menu size={16} />
               </div>
            </button>
          </div>

          <div className="md:hidden">
             <button onClick={() => setIsMenuOpen(true)} className="p-2">
               <Menu />
             </button>
          </div>
        </div>
      </header>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
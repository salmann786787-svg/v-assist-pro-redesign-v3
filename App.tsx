import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MobileSidebar from './components/MobileSidebar';
import Hero from './components/Hero';
import MobileHero from './components/MobileHero';
import Architects from './components/Architects';
import Integrations from './components/Integrations';
import IndustrySelector from './components/IndustrySelector';
import MobileIndustrySelector from './components/MobileIndustrySelector';
import SectorDetail from './components/SectorDetail';
import ProcessHorizontal from './components/ProcessHorizontal';
import MobileProcessHorizontal from './components/MobileProcessHorizontal';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ProtocolOverlay from './components/ProtocolOverlay';
import { SECTORS } from './constants';
import { AnimatePresence } from 'framer-motion';
import { useDeviceDetection } from './hooks/useDeviceDetection';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isProtocolOpen, setIsProtocolOpen] = useState(false);
  const [selectedSectorId, setSelectedSectorId] = useState<number | null>(null);
  const { isMobile } = useDeviceDetection();

  // Initialize theme based on preference or local storage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleOpenProtocol = () => setIsProtocolOpen(true);

  const selectedSector = SECTORS.find(s => s.id === selectedSectorId);

  return (
    <div className="bg-cream dark:bg-dark min-h-screen transition-colors duration-500 relative">

      {isMobile ? (
        <MobileSidebar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          onOpenProtocol={handleOpenProtocol}
        />
      ) : (
        <Sidebar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          onOpenProtocol={handleOpenProtocol}
        />
      )}

      <ProtocolOverlay
        isOpen={isProtocolOpen}
        onClose={() => setIsProtocolOpen(false)}
      />

      <main>
        <AnimatePresence mode="wait">
          {selectedSector ? (
            <SectorDetail
              key="detail"
              sector={selectedSector}
              onBack={() => setSelectedSectorId(null)}
              onOpenProtocol={handleOpenProtocol}
            />
          ) : (
            <div key="home">
              {isMobile ? <MobileHero onOpenProtocol={handleOpenProtocol} /> : <Hero onOpenProtocol={handleOpenProtocol} />}
              <Architects />
              {isMobile ? <MobileIndustrySelector onSelectSector={setSelectedSectorId} /> : <IndustrySelector onSelectSector={setSelectedSectorId} />}
              <Integrations />
              {isMobile ? <MobileProcessHorizontal /> : <ProcessHorizontal />}
              <FAQ />
            </div>
          )}
        </AnimatePresence>
      </main>

      <Footer onOpenProtocol={handleOpenProtocol} onSelectSector={setSelectedSectorId} />
    </div>
  );
};

export default App;

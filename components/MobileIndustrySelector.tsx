import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Car, Landmark, Briefcase, Building } from 'lucide-react';
import { SECTORS } from '../constants';

const icons = {
  car: Car,
  landmark: Landmark,
  briefcase: Briefcase,
  building: Building,
};

interface MobileIndustrySelectorProps {
  onSelectSector: (id: number) => void;
}

const MobileIndustrySelector: React.FC<MobileIndustrySelectorProps> = ({ onSelectSector }) => {
  return (
    <section id="verticals" className="bg-cream dark:bg-dark px-4 pt-16 pb-8 relative">
      <div className="mb-12">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono uppercase tracking-[0.3em] mb-4 font-bold"
          style={{ color: 'var(--color-accent)' }}
        >
          Service Lines
        </motion.h4>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl text-dark dark:text-cream leading-tight tracking-tighter mb-6"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Built for <span className="italic" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-serif)' }}>Your Industry.</span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base font-light leading-relaxed text-gray-700 dark:text-white/90"
          style={{ fontSize: '17px', lineHeight: '22px' }}
        >
          From customer communication outsourcing to executive operations management, we provide specialized support tailored to your industry.
        </motion.p>
      </div>

      {/* Mobile Cards Grid */}
      <div className="space-y-4 pb-8">
        {SECTORS.map((sector, index) => {
          const IconComponent = icons[sector.icon];

          return (
            <motion.button
              key={sector.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => onSelectSector(sector.id)}
              className="w-full text-left bg-white dark:bg-charcoal border border-dark/10 dark:border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)] p-6 flex flex-col gap-4 transition-all duration-500 hover:border-accent hover:scale-[1.02] relative overflow-hidden group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] rounded-lg"
            >
              <div className="absolute inset-0 bg-white dark:bg-charcoal opacity-100 z-0" />

              {/* Icon */}
              <div className="relative z-10 flex items-center gap-4">
                <div
                  className="w-16 h-16 bg-cream dark:bg-dark border border-dark/5 dark:border-white/10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-accent group-hover:border-accent flex-shrink-0"
                  style={{ color: 'var(--color-accent)' }}
                >
                  <IconComponent size={28} strokeWidth={1} className="transition-colors duration-500 group-hover:text-white" />
                </div>

                {/* Title and Badge */}
                <div className="flex-1">
                  <h4
                    className="text-xl transition-colors duration-500 group-hover:text-accent"
                    style={{ fontFamily: 'var(--font-serif)', fontWeight: '600', color: '#19abe4' }}
                  >
                    {sector.title}
                  </h4>
                </div>
              </div>

              {/* Description */}
              <p
                className="text-sm font-light italic relative z-10 leading-relaxed text-dark dark:text-cream/90"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                "{sector.subtitle}"
              </p>

              {/* Arrow */}
              <div className="flex justify-end relative z-10 mt-2">
                <ArrowRight size={20} className="text-dark dark:text-cream group-hover:text-accent transition-all" />
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
};

export default MobileIndustrySelector;

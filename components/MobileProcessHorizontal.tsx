import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Telescope,
  DraftingCompass,
  Cpu,
  ShieldCheck,
  CircleDot
} from 'lucide-react';
import { PROCESS_STEPS } from '../constants';

const icons = {
  "01": Telescope,
  "02": DraftingCompass,
  "03": Cpu,
  "04": ShieldCheck
};

const MobileProcessHorizontal: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={targetRef} id="methodology" className="relative bg-cream dark:bg-dark text-dark dark:text-cream py-16 px-4">
      {/* Animated Progress Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-dark/10 dark:bg-white/10 z-0" />
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-1/2 top-0 w-[1px] bg-accent shadow-[0_0_15px_rgba(25,171,228,0.6)] z-0 pointer-events-none"
      />

      {/* Header */}
      <div className="mb-16 max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-4xl font-serif text-dark dark:text-cream" style={{ fontFamily: '"Playfair Display", serif' }}>
            The <span className="text-white" style={{ color: 'rgba(255, 255, 255, 1)' }}>Methodology</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-accent flex-shrink-0 mt-1">
              <CircleDot size={18} className="animate-pulse" />
            </div>
            <div>
              <p className="text-base md:text-lg font-light leading-relaxed" style={{ fontFamily: 'Lato, sans-serif', color: 'rgba(255, 255, 255, 1)' }}>
                <span style={{ color: 'rgba(255, 255, 255, 1)' }}>Talent is a variable. </span>
                <span className="text-dark dark:text-white italic font-medium" style={{ color: 'rgba(25, 171, 228, 1)' }}>Infrastructure is a constant.</span>
              </p>
              <p className="text-base font-light leading-relaxed mt-2" style={{ fontFamily: 'Lato, sans-serif', color: 'rgba(255, 255, 255, 1)' }}>
                We replace hero-dependency with the <span className="text-dark dark:text-white font-medium">Ghost Engine</span>—a custom-engineered system of elite personnel and human-led protocols.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Steps */}
      <div className="space-y-6 max-w-2xl mx-auto pb-8 relative z-10">
        {PROCESS_STEPS.map((step, index) => {
          const IconComponent = icons[step.number as keyof typeof icons];

          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-charcoal border border-dark/10 dark:border-white/5 rounded-lg p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] group hover:border-accent/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover Background Gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="flex items-start gap-4 relative z-10">
                {/* Icon Circle with Animated Rings */}
                <div className="flex-shrink-0 relative">
                  <motion.div
                    className="absolute inset-0 border border-accent/30 rounded-2xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-2 border border-dashed border-accent/20 rounded-2xl"
                    animate={{ scale: [1.1, 1, 1.1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />

                  <div className="w-16 h-16 bg-cream dark:bg-dark border border-dark/10 dark:border-white/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <IconComponent strokeWidth={1.5} size={28} />
                  </div>

                  {/* Pulsing Dots */}
                  <motion.div
                    className="absolute top-0 right-0 w-2 h-2 bg-accent rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-white/20 rounded-full" />

                  {/* Step Number Badge */}
                  <div
                    className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className="text-xl md:text-2xl font-serif mb-2 tracking-tight group-hover:text-accent transition-colors duration-500"
                    style={{ fontFamily: '"Playfair Display", serif', color: '#19abe4' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm md:text-base font-light leading-relaxed"
                    style={{ fontFamily: 'Lato, sans-serif', color: 'rgba(255, 255, 255, 1)' }}
                  >
                    {step.description}
                  </p>

                  {/* Engine Synchronizing message on hover */}
                  <motion.div
                    className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {[1, 2, 3].map(i => (
                      <motion.div
                        key={i}
                        className="w-1 h-1 bg-accent rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                    <span className="text-[10px] font-mono uppercase tracking-widest text-accent ml-2">Engine Synchronizing...</span>
                  </motion.div>
                </div>
              </div>

              {/* Progress indicator - show connecting line to next step */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="ml-8 mt-4 h-6 border-l-2 border-accent/30" />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default MobileProcessHorizontal;

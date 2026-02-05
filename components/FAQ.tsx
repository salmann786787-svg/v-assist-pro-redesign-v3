import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="evidence" className="bg-cream dark:bg-dark py-32 border-t border-dark/10 dark:border-white/10 transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-5xl md:pl-28 pb-24">
        <div className="text-left mb-20">
          <h4 className="text-xs uppercase tracking-[0.3em] mb-4 text-accent font-bold" style={{ font: '700 12px/16px Lato, sans-serif' }}>Operational Intelligence</h4>
          <h2 className="text-5xl md:text-7xl font-serif text-dark dark:text-cream leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
            Institutional <span className="text-accent">clarity.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-900 dark:text-white max-w-2xl" style={{ fontFamily: 'Lato, sans-serif', fontWeight: '300', lineHeight: '22px' }}>
            We operate with radical transparency. If your question isn't addressed here, our principals are available for direct inquiry.
          </p>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-dark/30 dark:border-white/20 transition-all duration-500 ${activeIndex === index ? 'bg-white/50 dark:bg-white/5' : ''}`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-10 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] group"
              >
                <span className={`text-xl md:text-2xl font-serif transition-colors duration-300 ${activeIndex === index ? 'text-accent font-medium' : 'text-dark dark:text-cream group-hover:text-accent'}`} style={{ fontFamily: '"Playfair Display", serif' }}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-8 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-accent text-white rotate-180' : 'bg-dark/10 dark:bg-white/10 text-dark dark:text-cream group-hover:bg-accent group-hover:text-white'}`}>
                  {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-gray-900 dark:text-cream/80 leading-relaxed font-light" style={{ fontFamily: 'Lato, sans-serif' }}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

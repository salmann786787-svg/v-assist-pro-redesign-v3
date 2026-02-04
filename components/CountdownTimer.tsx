import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Q1 2026 ends on March 31, 2026 at 11:59 PM EST
      const targetDate = new Date('2026-03-31T23:59:59-05:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setIsActive(false);
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isActive) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-4 md:gap-6 text-white text-sm md:text-base"
    >
      {/* Countdown Display */}
      <div className="flex items-center gap-2 md:gap-3">
        <div className="text-center">
          <div className="font-bold text-lg md:text-2xl font-serif" style={{ color: 'rgba(25, 171, 228, 1)' }}>
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="text-xs uppercase tracking-wider opacity-70">Days</div>
        </div>

        <span className="font-serif opacity-50">:</span>

        <div className="text-center">
          <div className="font-bold text-lg md:text-2xl font-serif" style={{ color: 'rgba(25, 171, 228, 1)' }}>
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-xs uppercase tracking-wider opacity-70">Hrs</div>
        </div>

        <span className="font-serif opacity-50">:</span>

        <div className="text-center">
          <div className="font-bold text-lg md:text-2xl font-serif" style={{ color: 'rgba(25, 171, 228, 1)' }}>
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-xs uppercase tracking-wider opacity-70">Min</div>
        </div>

        <span className="font-serif opacity-50">:</span>

        <div className="text-center">
          <div className="font-bold text-lg md:text-2xl font-serif" style={{ color: 'rgba(25, 171, 228, 1)' }}>
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-xs uppercase tracking-wider opacity-70">Sec</div>
        </div>
      </div>

      {/* Warning pulse indicator */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"
      />
    </motion.div>
  );
};

export default CountdownTimer;

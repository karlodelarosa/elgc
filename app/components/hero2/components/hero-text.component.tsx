'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { QuantumButton } from '@/components/button';
import { useState, useEffect } from 'react';

export type HeroTextProps = {
  lines?: string[];
  buttonLabel?: string;
};

export function HeroText({
  lines = ["Experience God's love in a community that welcomes you", ''],
  buttonLabel = 'Enter Experience',
}: HeroTextProps) {
  const [currentLine, setCurrentLine] = useState(0);

  // Cycle lines every 4 seconds (fade in/out)
  useEffect(() => {
    if (lines.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % lines.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [lines]);

  return (
    <div className="absolute bottom-24 z-30 w-full text-center px-6 flex flex-col items-center gap-6">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentLine} // triggers fade for new line
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl text-zinc-300"
        >
          {lines[currentLine]}
        </motion.p>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <QuantumButton label={buttonLabel} />
      </motion.div>
    </div>
  );
}

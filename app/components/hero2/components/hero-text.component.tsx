// HeroText.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ScrollButton } from '../../ui/scroll-button/scroll-button.component';

export type HeroTextProps = {
  lines?: string[];
};

export function HeroText({
  lines = ["Experience God's love in a community that welcomes you", ''],
}: HeroTextProps) {
  const [currentLine, setCurrentLine] = useState(0);

  // Cycle lines every 10 seconds (fade in/out)
  useEffect(() => {
    if (lines.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % lines.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [lines]);

  const scrollToSection = () => {
    const el = document.getElementById('church-intro');
    if (el) {
      const yOffset = -50; // 50px above
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute bottom-28 lg:bottom-24 z-30 w-full text-center px-6 flex flex-col items-center gap-6">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentLine} // triggers fade for new line
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="text-2xl md:text-3xl text-zinc-300"
        >
          {lines[currentLine]}
        </motion.p>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4 }}
        className="flex flex-col items-center justify-center gap-6"
      >
        <ScrollButton onClick={scrollToSection} />
      </motion.div>
    </div>
  );
}

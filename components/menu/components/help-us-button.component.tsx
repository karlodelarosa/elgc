'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function HelpUsButton() {
  return (
    <motion.div
      className="flex flex-row items-center gap-2 px-4 py-2 rounded-lg border-2 border-pink-500 text-pink-400 font-semibold cursor-pointer select-none text-sm md:text-sm"
      whileHover={{
        backgroundColor: 'rgba(255,192,203,0.1)',
        color: '#ff80bf',
        textShadow: '0 0 6px rgba(255,192,203,0.6)',
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Heart className="w-4 h-4 md:w-5 md:h-5" />
      <span>Help Us</span>
    </motion.div>
  );
}

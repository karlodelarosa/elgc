'use client';

import { motion } from 'framer-motion';

export type EventCTAProps = {
  title: string;
  countdown: string;
};

export function EventCTA({ title, countdown }: EventCTAProps) {
  return (
    <motion.div className="flex-shrink-0 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold shadow-lg flex flex-col md:flex-row md:items-center md:gap-2">
      <span className="block md:hidden font-bold text-sm">{title}</span>
      <span className="hidden md:block font-bold text-sm">
        {title} • {countdown}
      </span>
    </motion.div>
  );
}

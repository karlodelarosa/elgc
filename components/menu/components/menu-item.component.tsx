'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface MenuItemProps {
  label: string;
  Icon: LucideIcon;
  refCallback?: (el: HTMLDivElement | null) => void;
}

export function MenuItem({ label, Icon, refCallback }: MenuItemProps) {
  return (
    <motion.div
      ref={refCallback}
      className="flex flex-row items-center gap-1 md:gap-2 cursor-pointer text-white/90 rounded-lg px-3 py-2 select-none relative text-sm md:text-sm"
      whileHover={{
        color: '#f472b6',
        textShadow: '0 0 8px rgba(255,192,203,0.6)',
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon
        className="w-4 h-4 md:w-5 md:h-5"
        style={{
          background: 'linear-gradient(45deg, #f472b6, #a5b4fc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      />
      <span className="text-xs md:text-sm font-medium">{label}</span>
    </motion.div>
  );
}

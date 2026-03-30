'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowDown } from 'lucide-react';

type ScrollButtonProps = {
  onClick?: () => void;
};

export function ScrollButton({ onClick }: ScrollButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = ref.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const aura = document.createElement('div');

    aura.className = 'absolute rounded-full border border-white/30 pointer-events-none';

    aura.style.left = `${x - 15}px`;
    aura.style.top = `${y - 15}px`;
    aura.style.width = '30px';
    aura.style.height = '30px';

    btn.appendChild(aura);

    gsap.to(aura, {
      scale: 10,
      opacity: 0,
      duration: 1.8,
      delay: 4.5,
      ease: 'power2.out',
      filter: 'blur(10px)',
      onComplete: () => aura.remove(),
    });

    onClick?.();
  };

  return (
    <motion.button
      ref={ref}
      onClick={handleClick}
      className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/40 text-white"
      animate={{
        boxShadow: [
          '0 0 0px rgba(255,255,255,0.2)',
          '0 0 15px rgba(255,255,255,0.4)',
          '0 0 0px rgba(255,255,255,0.2)',
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <ArrowDown size={16} />
      </motion.div>
    </motion.button>
  );
}

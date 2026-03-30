'use client';

import { motion } from 'framer-motion';

export function Blobs() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Blob 1 */}
      <motion.div
        className="absolute top-20 left-16 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute bottom-24 right-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 50, 0],
          y: [0, 60, -40, 0],
          scale: [1, 1.05, 1, 1],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 40, -60, 0],
          y: [0, 30, -50, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

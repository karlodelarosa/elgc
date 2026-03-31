'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sequence = ['‘Immanu’el', 'עִמָּנוּאֵל', 'Emmanuel'];

const scrambleChars = 'アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function HeroHeadline() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let seqIndex = 0;

    const scrambleTo = (target: string, speed = 50) => {
      let frame = 0;

      const interval = setInterval(() => {
        const newText = target
          .split('')
          .map((char, i) => {
            if (frame > i * 2) return char;

            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          })
          .join('');

        setText(newText);
        frame++;

        if (frame > target.length * 2) {
          clearInterval(interval);
          setText(target);

          setTimeout(() => {
            seqIndex++;

            if (seqIndex < sequence.length) {
              scrambleTo(sequence[seqIndex], 45);
              setIndex(seqIndex);
            }
          }, 3500);
        }
      }, speed);
    };

    // slow matrix intro before first word
    const intro = () => {
      let frame = 0;

      const introInterval = setInterval(() => {
        const random = Array.from({ length: 10 })
          .map(() => scrambleChars[Math.floor(Math.random() * scrambleChars.length)])
          .join('');

        setText(random);
        frame++;

        if (frame > 35) {
          clearInterval(introInterval);
          scrambleTo(sequence[0], 55);
        }
      }, 80);
    };

    intro();
  }, []);

  return (
    <motion.div
      className="hero-content flex justify-center items-center mb-10 pointer-events-none select-none"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1
        className="
        font-bold
        tracking-tight
        text-center
        text-3xl
        sm:text-4xl
        md:text-6xl
        lg:text-7xl
        bg-gradient-to-r
        from-pink-400
        via-purple-400
        to-cyan-400
        bg-clip-text
        text-transparent
        drop-shadow-[0_0_25px_rgba(168,85,247,0.65)]
        animate-emmanuel-glow
      "
      >
        {text}
      </h1>
    </motion.div>
  );
}

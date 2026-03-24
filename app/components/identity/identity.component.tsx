import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GradientHeading } from '@/components/heading-gradient';

const identityTexts = [
  "This is more than a church",
  "This is a community",
  "This is a movement",
  "This is where lives are transformed",
  ""
];

export function IdentitySection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      ref={containerRef}
      className="min-h-screen w-full py-32 px-6 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full space-y-24">
        {identityTexts.map((text, index) => {
          const start = index / identityTexts.length;
          const end = (index + 1) / identityTexts.length;
          
          const opacity = useTransform(
            scrollYProgress,
            [start, start + 0.1, end - 0.1, end],
            [0, 1, 1, 0.3]
          );
          
          const y = useTransform(
            scrollYProgress,
            [start, end],
            [50, -50]
          );

          return (
            <motion.h3
              key={index}
              style={{ opacity, y }}
              className="text-4xl md:text-6xl lg:text-7xl text-white text-center tracking-tight"
            >
              <GradientHeading>
              {text}
              </GradientHeading>
            </motion.h3>
          );
        })}
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { GradientHeading } from '@/components/heading-gradient';

const identityTexts = [
  'This is more than a church',
  'This is a community',
  'This is a movement',
  'This is where lives are transformed',
  '',
];

export function IdentitySection() {
  const containerRef = useRef<HTMLElement>(null);

  // scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Define transforms **separately** using top-level hooks
  const opacity0 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [0, 1, 1, 0.3]);
  const y0 = useTransform(scrollYProgress, [0, 0.25], [50, -50]);

  const opacity1 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.5], [0, 1, 1, 0.3]);
  const y1 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  const opacity2 = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.75], [0, 1, 1, 0.3]);
  const y2 = useTransform(scrollYProgress, [0.45, 0.75], [50, -50]);

  const opacity3 = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1], [0, 1, 1, 0.3]);
  const y3 = useTransform(scrollYProgress, [0.7, 1], [50, -50]);

  const opacity4 = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  const y4 = useTransform(scrollYProgress, [0.9, 1], [50, -50]);

  const transforms: { opacity: MotionValue<number>; y: MotionValue<number> }[] = [
    { opacity: opacity0, y: y0 },
    { opacity: opacity1, y: y1 },
    { opacity: opacity2, y: y2 },
    { opacity: opacity3, y: y3 },
    { opacity: opacity4, y: y4 },
  ];

  return (
    <section
      ref={containerRef}
      className="min-h-screen w-full py-32 px-6 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full space-y-24">
        {identityTexts.map((text, index) => (
          <motion.h3
            key={text || `identity-${index}`}
            style={transforms[index]}
            className="text-4xl md:text-6xl lg:text-7xl text-white text-center tracking-tight"
          >
            <GradientHeading>{text}</GradientHeading>
          </motion.h3>
        ))}
      </div>
    </section>
  );
}

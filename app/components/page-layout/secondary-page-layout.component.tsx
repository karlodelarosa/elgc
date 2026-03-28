import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type SecondaryPageLayoutProps = {
  headline: string;
  subheadline: string;
  children: ReactNode;
  heroHeight?: string; // optional prop
};

const SecondaryPageLayout = ({
  headline,
  subheadline,
  children,
  heroHeight = '60vh', // default height
}: SecondaryPageLayoutProps) => {
  return (
    <div className="w-full bg-black text-white relative overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full flex flex-col justify-center items-center text-center px-6"
        style={{ height: heroHeight }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {headline}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {subheadline}
        </motion.p>
      </section>

      {children}
    </div>
  );
};

export { SecondaryPageLayout };

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { GradientHeading } from '@/components/heading-gradient';

const locations = [
  {
    label: 'coffee shop',
    image:
      'https://images.unsplash.com/photo-1541976844346-f18aeac57b06?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    label: 'local park',
    image:
      'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    label: 'family home',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    label: 'community center',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
];

export function ChurchIntro() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((prev) => (prev + 1) % locations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="w-full h-screen flex flex-col md:flex-row items-center justify-center bg-black relative px-6 overflow-hidden">
      {/* Left column: Crossfading Images */}
      <div className="md:w-1/2 w-full h-1/2 md:h-full relative flex items-center justify-center">
        {/* Previous Image */}
        <motion.img
  key={current}
  src={locations[current].image}
  alt={locations[current].label}
  className="absolute w-full h-full object-cover z-10"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2 }}
/>
<motion.img
  key={prev}
  src={locations[prev].image}
  alt={locations[prev].label}
  className="absolute w-full h-full object-cover z-0"
  initial={{ opacity: 1 }}
  animate={{ opacity: 0 }}
  transition={{ duration: 1.2 }}
/>
      </div>

      {/* Right column: Text */}
      <div className="md:w-1/2 w-full h-1/2 md:h-full flex flex-col justify-center items-start px-8 md:px-16 z-10">
        <h2 className="text-5xl md:text-6xl text-white mb-6">
          <GradientHeading>We are the body of Christ,</GradientHeading>
        </h2>

        <p className="text-4xl md:text-5xl text-zinc-300">
          meeting in a{' '}
          <AnimatePresence mode="wait">
  <motion.span
    key={locations[current].label}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.8 }}
    className="inline-block bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent rounded-xl px-3 py-1"
  >
    {locations[current].label}
  </motion.span>
</AnimatePresence>
        </p>
      </div>

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </section>
  );
}
'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Hero from './index';
import { HomeIcon, UserIcon, MusicIcon, Heart } from 'lucide-react';

const menuItems = [
  { label: 'Home', icon: HomeIcon },
  { label: 'About', icon: UserIcon },
  { label: 'Music', icon: MusicIcon },
];

function AnimatedMenu() {
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [showMenu, setShowMenu] = useState(false);

  const nextEvent = {
    title: 'Family Day – June 13',
    countdown: '3 days left!',
    gradient: 'from-pink-500 to-purple-500',
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setShowMenu(true);
      else setShowMenu(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    menuRefs.current.forEach((ref, i) => {
      if (!ref) return;
      gsap.fromTo(
        ref,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.12,
          ease: 'back.out(1.6)',
        },
      );
    });
  }, [showMenu]);

  return (
    <motion.div
      className={`fixed inset-x-0 top-0 z-[999] backdrop-blur-xl bg-black/50 transition-all ${
        showMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: showMenu ? 1 : 0, y: showMenu ? 0 : -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="pt-3 text-center xl:hidden">
        <h1 className="text-sm md:text-base tracking-[.50em] uppercase font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
          <span className="lg:hidden">ELGC</span>
          <span className="hidden lg:inline">Emmanuel&apos;s Living Gospel Church</span>
        </h1>
      </div>

      <div className="mx-auto px-6 py-4 flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row justify-between items-center gap-2 md:gap-2 lg:gap-2 xl:gap-4 2xl:gap-6">
        {/* Left: Event CTA */}
        <motion.div className="flex-shrink-0 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold shadow-lg flex flex-col md:flex-row md:items-center md:gap-2">
          <span className="block md:hidden font-bold text-sm">Family Day – June 13</span>
          <span className="hidden md:block font-bold text-sm">
            {nextEvent.title} • {nextEvent.countdown}
          </span>
        </motion.div>

        {/* Middle: Church Name */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-sm md:text-base tracking-[.50em] uppercase font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            <span className="hidden xl:inline 2xl:hidden">ELGC</span>
            <span className="hidden 2xl:inline">Emmanuel&apos;s Living Gospel Church</span>
          </h1>
        </div>

        {/* Right: Menu + Help Us */}
        <div className="flex flex-row items-center gap-2 md:gap-3 lg:gap-4">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                ref={(el) => {
                  menuRefs.current[idx] = el;
                  return null;
                }}
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
                <span className="text-xs md:text-sm font-medium">{item.label}</span>
              </motion.div>
            );
          })}

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
        </div>
      </div>
    </motion.div>
  );
}

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <AnimatedMenu />
      <Hero />
    </div>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

import { QuantumButton } from '../button/button.component';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRefs = useRef<HTMLDivElement[]>([]);

  // === INITIALIZE ORBS AND ANIMATION ===
  useEffect(() => {
    orbRefs.current.forEach((orb) => {
      // 🌀 Random scattered start positions
      const startX = Math.random() * window.innerWidth - window.innerWidth / 2;
      const startY = Math.random() * window.innerHeight - window.innerHeight / 2;

      gsap.set(orb, { x: startX, y: startY });

      // 🌊 Continuous floating motion per orb
      const animateOrb = () => {
        gsap.to(orb, {
          x: `+=${Math.random() * 1000 - 200}`, // Move horizontally (-250 to +250px)
          y: `+=${Math.random() * 300 - 150}`, // Move vertically (-150 to +150px)
          duration: 2 + Math.random() * 5, // 🎛️ Duration per drift cycle (5–10s)
          ease: 'sine.inOut', // Smooth motion
          yoyo: true, // Reverse motion for looping
          repeat: -1, // Infinite animation
        });
      };
      animateOrb();
    });
  }, []);

  // === MOUSE INTERACTION PARALLAX ===
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5 range
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      // 🎯 Move orbs slightly in response to mouse
      gsap.to(orbRefs.current, {
        xPercent: x * 25, // Increase to make movement stronger (try 40 or 50)
        yPercent: y * 25,
        ease: 'power2.out',
        duration: 1.2,
      });
    };

    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);
    return () => container?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col justify-center items-start h-screen overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* === BACKGROUND ORBS === */}
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) orbRefs.current[i] = el;
          }}
          className="absolute rounded-full blur-3xl opacity-65"
          style={{
            background: [
              'radial-gradient(circle at 30% 30%, #a855f7, transparent 70%)',
              'radial-gradient(circle at 30% 30%, #ec4899, transparent 70%)',
              'radial-gradient(circle at 30% 30%, #f97316, transparent 70%)',
              'radial-gradient(circle at 30% 30%, #ef4444, transparent 70%)',
              'radial-gradient(circle at 30% 30%,rgb(44, 206, 221), transparent 70%)',
              'radial-gradient(circle at 30% 30%, #c026d3, transparent 70%)',
              'radial-gradient(circle at 30% 30%, #fb7185, transparent 70%)',
            ][i % 7],
            width: 580 + Math.random() * 220,
            height: 580 + Math.random() * 220,
            mixBlendMode: 'screen',
          }}
        />
      ))}

      {/* === GLASS OVERLAY === */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90 backdrop-blur-[4px]" />

      {/* === HERO TEXT CONTENT === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="relative z-10 px-6 lg:px-16 w-full"
      >
        {/* ✨ Title */}
        <motion.h1
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-2xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Something’s Stirring Here
          <br />
          And You’re Meant to Feel It
        </motion.h1>

        {/* 🕊️ Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-lg text-gray-300 max-w-xl"
        >
          Encounter. Love. Grow. Connect
        </motion.p>

        <div className="pt-6">
          <QuantumButton label="Enter Experience" />
        </div>
      </motion.div>
    </section>
  );
}

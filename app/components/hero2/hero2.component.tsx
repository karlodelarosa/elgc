'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { HeroText } from './components/hero-text.component';

gsap.registerPlugin(ScrollTrigger);

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const heroTextData = {
  lines: [
    "Experience God's love in a community that welcomes you",
    'Join us and grow in faith together',
    'Worship, serve, and connect with others',
    "Discover purpose and hope through God's Word",
    'Be part of a journey that transforms lives',
  ],
  buttonLabel: 'Enter Experience',
};

export function Hero2() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  // State to control particle count for mobile
  const [particleCount, setParticleCount] = useState(30);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setParticleCount(window.innerWidth < 768 ? 0 : 30); // 0 for mobile
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 100, rotationX: -90 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1.2,
            ease: 'power4.out',
            transformOrigin: 'bottom center',
          },
        );
      }

      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.5, delay: 0.8, ease: 'power3.out' },
        );
      }

      gsap.to('.hero-content', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=50%',
          scrub: true,
        },
        opacity: 0,
        y: -50,
        ease: 'none',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Elegant gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{ scale: [1, 1.2, 1], x: [-50, 50, -50], y: [-50, 50, -50] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{ scale: [1.2, 1, 1.2], x: [50, -50, 50], y: [50, -50, 50] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.25) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating particles */}
      {particleCount > 0 &&
        [...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              left: `${mulberry32(1337 + i * 101)() * 100}%`,
              top: `${mulberry32(7331 + i * 131)() * 100}%`,
            }}
            animate={{ y: [0, -100, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: mulberry32(9001 + i * 71)() * 5 + 3,
              repeat: Infinity,
              delay: mulberry32(4242 + i * 97)() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(167, 139, 250, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167, 139, 250, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* ELGC Background Text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{
          fontFamily: 'var(--font-six-caps)',
          fontWeight: 400,
          fontSize: 'calc(100vh + 10rem)',
          lineHeight: 1,
          color: 'rgba(255,255,255,0.03)',
          textTransform: 'uppercase',
          letterSpacing: '-0.05em',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <span className="bg-gradient-to-r from-pink-400 md:hidden via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-color-shift opacity-20">
          ELGC
        </span>
        <span className="bg-gradient-to-r from-pink-400 hidden md:inline via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-color-shift opacity-20">
          ELGCHURCH
        </span>
      </motion.div>

      {/* Content */}
      <HeroText lines={heroTextData.lines} />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
        }}
      />
    </section>
  );
}

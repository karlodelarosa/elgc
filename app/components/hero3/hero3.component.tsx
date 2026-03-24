import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useMotionValue, useTransform } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export function HeroCinematicELGC() {
  const heroRef = useRef<HTMLDivElement>(null);
  const initialsRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);

  // Parallax values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const translateX = useTransform(mouseX, [-100, 100], [-30, 30]);
  const translateY = useTransform(mouseY, [-100, 100], [-30, 30]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.fromTo(
        initialsRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.8, ease: 'power4.out' }
      );

      gsap.fromTo(
        nameRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, delay: 0.4, duration: 1.2, ease: 'power3.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (e.clientX - rect.left) - rect.width / 2;
    const y = (e.clientY - rect.top) - rect.height / 2;

    mouseX.set(x / (rect.width / 2) * 100);
    mouseY.set(y / (rect.height / 2) * 100);
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-black text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Layered ambient gradients */}
      <motion.div
        style={{ x: translateX, y: translateY }}
        className="absolute inset-0 bg-gradient-to-t from-purple-900 via-black to-black opacity-60 pointer-events-none"
      />

      <motion.div
        style={{ x: translateX, y: translateY }}
        className="absolute -top-1/4 -left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-purple-700 to-pink-500 blur-2xl opacity-30 pointer-events-none"
      />

      {/* Cinematic particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-[50%] opacity-30"
          style={{
            width: `${Math.random() * 6}px`,
            height: `${Math.random() * 6}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [-20, 20, -20] }}
          transition={{ repeat: Infinity, duration: Math.random() * 6 + 4 }}
        />
      ))}

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          ref={initialsRef}
          className="font-black text-[16rem] md:text-[20rem] lg:text-[24rem] tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage:
              'linear-gradient(90deg, #a78bfa 0%, #f472b6 50%, #fb923c 100%)',
            perspective: '1000px',
          }}
        >
          ELGC
        </motion.div>

        <motion.div
          ref={nameRef}
          className="text-3xl md:text-5xl text-zinc-200 font-light tracking-wide mt-4"
        >
          Emmanuel’s Living Gospel Church
        </motion.div>
      </div>

      {/* Cinematic vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.9) 100%)',
        }}
      />
    </section>
  );
}
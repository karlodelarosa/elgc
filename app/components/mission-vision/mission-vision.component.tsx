'use client';

import React from 'react';
import { Heart, Eye, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function MissionVisionValues() {
  const sections = [
    {
      icon: Heart,
      title: 'MISSION',
      description:
        'Reaching the lost from all walks of life, mentoring and discipling according to Scripture, raising servant leaders to serve both God and humanity for His glory.',
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      icon: Eye,
      title: 'VISION',
      description:
        'To be a God-fearing church, transforming lives through the Word, creating Christ-like disciples actively advancing God’s Kingdom on earth.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Star,
      title: 'CORE VALUES',
      description:
        'Faithfulness to God, Commitment to Ministry, Devotion to Serve, Willingness to Support.',
      gradient: 'from-purple-500 to-indigo-500',
    },
  ];

  return (
    <section className="w-full pb-32 lg:pb-0 lg:h-screen flex flex-col md:flex-row overflow-hidden relative bg-black">
      {/* Optional background blobs for immersive effect */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Content Columns */}
      <div className="relative z-10 flex flex-1 w-full h-full flex-col lg:flex-row">
        {sections.map((section, idx) => {
          const IconComp = section.icon;
          return (
            <motion.div
              key={idx}
              className="flex-1 flex flex-col justify-center items-center text-center px-6 py-12 lg:py-0 border-t md:border-t-0 md:border-l border-white/5"
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className={`inline-flex p-6 rounded-3xl mb-6 bg-gradient-to-r ${section.gradient}`}
                whileHover={{ opacity: 1 }}
              >
                <IconComp size={48} className="text-white" />
              </motion.div>

              <motion.h2
                className={`text-5xl md:text-6xl font-bold uppercase bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent mb-6`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              >
                {section.title}
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-zinc-300 max-w-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 }}
              >
                {section.description}
              </motion.p>
            </motion.div>
          );
        })}
      </div>

      {/* Floating Learn More Button */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <Link href="/about">
          <motion.button
            className="
    px-4 py-2 rounded-lg border border-white/40
    text-white/50 text-sm font-medium
    backdrop-blur-sm
    transition-all duration-300
    opacity-70
  "
            whileHover={{ opacity: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </Link>
      </div>
    </section>
  );
}

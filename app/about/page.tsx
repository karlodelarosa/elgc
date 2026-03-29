'use client';

import React from 'react';
import { Heart, Eye, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const sections = [
    {
      icon: Heart,
      title: 'MISSION',
      description:
        'Reaching the lost from all walks of life, mentoring and discipling according to Scripture, raising servant leaders to serve both God and humanity for His glory.',
      gradient: 'from-rose-500 to-pink-500',
      image: '/img/mission.jpg',
    },
    {
      icon: Eye,
      title: 'VISION',
      description:
        'To be a God-fearing church, transforming lives through the Word, creating Christ-like disciples actively advancing God’s Kingdom on earth.',
      gradient: 'from-blue-500 to-cyan-500',
      image: '/img/vision.jpg',
    },
    {
      icon: Star,
      title: 'CORE VALUES',
      description:
        'Faithfulness to God, Commitment to Ministry, Devotion to Serve, Willingness to Support.',
      gradient: 'from-purple-500 to-indigo-500',
      image: '/img/core.jpg',
    },
  ];

  const stats = [
    { number: '15+', label: 'Years Serving' },
    { number: '200+', label: 'Members' },
    { number: '10+', label: 'Ministries' },
  ];

  return (
    <div className="w-full bg-black text-white relative overflow-hidden pt-32">
      {/* BELIEFS FIRST (important for visitors) */}
      <motion.section
        className="w-full py-20 px-6 flex flex-col items-center text-center space-y-6 bg-black/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">
          Our Beliefs
        </h2>

        <p className="text-white/80 max-w-3xl text-lg md:text-xl">
          Our faith centers on Jesus Christ as our King, Lord, and Savior. We believe in the gospel:
          that Jesus died on the cross for our sins, rose again on the third day, ascended into
          heaven, and promised that He will come again.
          <br />
          <br />
          Because of this, everything we do flows from our desire to glorify Him and make Him known.
          We stand on the truth of the Bible, seek the guidance of the Holy Spirit, and pursue a
          growing relationship with God in our everyday lives.
          <br />
          <br />
          As a church, we are committed to loving people, serving our community, and sharing the
          hope of the gospel so that more lives may be transformed through Jesus Christ.
        </p>
      </motion.section>

      {/* Mission / Vision / Core Values */}
      <section className="w-full py-20 px-6 flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {sections.map((section, idx) => {
          const IconComp = section.icon;

          return (
            <motion.div
              key={idx}
              className="flex-1 min-w-[280px] max-w-[350px] flex flex-col items-center text-center bg-black/60 rounded-xl shadow-2xl border border-white/10 backdrop-blur-sm overflow-hidden hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: idx * 0.2 }}
            >
              <div className="relative w-full h-48">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div
                  className={`inline-flex p-3 mb-5 rounded-full bg-gradient-to-r ${section.gradient} text-white shadow-lg`}
                >
                  <IconComp size={28} />
                </div>

                <h3
                  className={`text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${section.gradient}`}
                >
                  {section.title}
                </h3>

                <p className="text-white/80 text-base">{section.description}</p>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* History */}
      <section className="w-full py-20 px-6 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        <div className="flex-1 text-white/90 space-y-4 text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our History & Purpose</h2>

          <p className="text-lg md:text-xl">
            For over 15 years, ELGC has been rooted in a passion for sharing Jesus Christ and
            serving the community. We started as a small group of believers and have grown into a
            vibrant church family, committed to making disciples and transforming lives through
            God's Word.
          </p>

          <p className="text-lg md:text-xl">
            Every ministry, outreach, and program we run stems from our desire to honor God, serve
            others, and build a community where everyone experiences the love of Christ.
          </p>
        </div>
      </section>

      {/* Future Church Building */}
      <section className="w-full py-20 px-6 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto bg-black/40 rounded-xl shadow-lg">
        <div className="flex-1 text-white/90 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Our Church Vision</h2>

          <p className="text-lg md:text-xl">
            We desire a new, bigger church building to better serve our growing congregation and
            community. This vision is already underway, as we have started fundraising initiatives
            to make this dream a reality.
          </p>

          <p className="text-lg md:text-xl">
            Every contribution brings us closer to a place where more lives can be touched,
            disciples trained, and God glorified.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full py-20 flex flex-wrap justify-center items-center gap-12 px-6 relative z-10">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: idx * 0.2 }}
          >
            <span className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
              {stat.number}
            </span>

            <span className="text-lg md:text-xl text-white/80 mt-2">{stat.label}</span>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <div className="relative w-full flex justify-center py-16 z-20">
        <Link href="/visit">
          <motion.button
            className="px-4 py-2 rounded-lg border border-white/40 text-white/60 text-sm font-medium opacity-70 hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Plan Your Visit
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

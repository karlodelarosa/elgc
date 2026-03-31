'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/ui/image-with-fallback/image-with-fallback';

gsap.registerPlugin(ScrollTrigger);

const businesses = [
  {
    slug: 'burger-stand',
    title: 'ELGC Burger Stand',
    description:
      'Freshly grilled burgers made with love by our church community. Perfect after Sunday service.',
    image:
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=952&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tag: 'Food Ministry',
  },
  {
    slug: 'merch',
    title: 'ELGC Merch',
    description:
      'Support the church through custom mugs, tote bags, shirts, and other community merchandise.',
    image:
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=952&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tag: 'Church Merch',
  },
];

export default function BusinessPage() {
  useEffect(() => {
    gsap.fromTo(
      '.business-card',
      { opacity: 0, y: 80, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.business-grid',
          start: 'top 80%',
        },
      },
    );
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-36">
      {/* HERO */}
      <div className="container mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Support Our{' '}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Church Businesses
          </span>
        </h1>

        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          Every purchase or reservation supports ministries, outreach programs, and church community
          activities.
        </p>
      </div>

      {/* GRID */}
      <div className="container mx-auto px-6 pb-24">
        <div className="business-grid grid md:grid-cols-2 gap-12">
          {businesses.map((business) => (
            <Link key={business.slug} href={`/business/${business.slug}`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="business-card group relative overflow-hidden rounded-3xl cursor-pointer"
              >
                {/* IMAGE */}
                <div className="relative h-[420px] overflow-hidden">
                  <ImageWithFallback
                    src={business.image}
                    alt={business.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 p-8">
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full mb-3 inline-block">
                    {business.tag}
                  </span>

                  <h2 className="text-3xl font-bold mb-3">{business.title}</h2>

                  <p className="text-zinc-300 mb-6 max-w-md">{business.description}</p>

                  <div className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-4 transition-all">
                    Explore
                    <ArrowRight size={18} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

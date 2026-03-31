'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Filter } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/ui/image-with-fallback/image-with-fallback';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

interface MerchItem {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
}

const CATEGORIES = ['All', 'Mugs', 'Tote Bags', 'Shirts'];

const merchItems: MerchItem[] = [
  {
    id: 1,
    title: 'ELGC Coffee Mug',
    price: '₱180 Suggested Donation',
    category: 'Mugs',
    image:
      'https://images.unsplash.com/photo-1714928829549-b6d9964e7459?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Faith Tote Bag',
    price: '₱220 Suggested Donation',
    category: 'Tote Bags',
    image:
      'https://plus.unsplash.com/premium_photo-1726754536800-0acef93c5ad3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'ELGC Worship Shirt',
    price: '₱350 Suggested Donation',
    category: 'Shirts',
    image:
      'https://images.unsplash.com/photo-1758502033995-e52a218738ee?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'Scripture Mug',
    price: '₱180 Suggested Donation',
    category: 'Mugs',
    image:
      'https://images.unsplash.com/photo-1714928829549-b6d9964e7459?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    title: 'Community Tote',
    price: '₱220 Suggested Donation',
    category: 'Tote Bags',
    image:
      'https://plus.unsplash.com/premium_photo-1726754536800-0acef93c5ad3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    title: 'ELGC Coffee Mug',
    price: '₱180 Suggested Donation',
    category: 'Mugs',
    image:
      'https://images.unsplash.com/photo-1714928829549-b6d9964e7459?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 7,
    title: 'Faith Tote Bag',
    price: '₱220 Suggested Donation',
    category: 'Tote Bags',
    image:
      'https://plus.unsplash.com/premium_photo-1726754536800-0acef93c5ad3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 8,
    title: 'ELGC Worship Shirt',
    price: '₱350 Suggested Donation',
    category: 'Shirts',
    image:
      'https://images.unsplash.com/photo-1758502033995-e52a218738ee?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 9,
    title: 'Scripture Mug',
    price: '₱180 Suggested Donation',
    category: 'Mugs',
    image:
      'https://images.unsplash.com/photo-1714928829549-b6d9964e7459?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10,
    title: 'Community Tote',
    price: '₱220 Suggested Donation',
    category: 'Tote Bags',
    image:
      'https://plus.unsplash.com/premium_photo-1726754536800-0acef93c5ad3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 11,
    title: 'ELGC Coffee Mug',
    price: '₱180 Suggested Donation',
    category: 'Mugs',
    image:
      'https://images.unsplash.com/photo-1714928829549-b6d9964e7459?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 12,
    title: 'Faith Tote Bag',
    price: '₱220 Suggested Donation',
    category: 'Tote Bags',
    image:
      'https://plus.unsplash.com/premium_photo-1726754536800-0acef93c5ad3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 13,
    title: 'ELGC Worship Shirt',
    price: '₱350 Suggested Donation',
    category: 'Shirts',
    image:
      'https://images.unsplash.com/photo-1758502033995-e52a218738ee?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 14,
    title: 'Scripture Mug',
    price: '₱180 Suggested Donation',
    category: 'Mugs',
    image:
      'https://images.unsplash.com/photo-1714928829549-b6d9964e7459?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 15,
    title: 'Community Tote',
    price: '₱220 Suggested Donation',
    category: 'Tote Bags',
    image:
      'https://plus.unsplash.com/premium_photo-1726754536800-0acef93c5ad3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function MerchPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? merchItems
      : merchItems.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    gsap.fromTo(
      '.merch-item',
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.07,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.merch-grid',
          start: 'top 80%',
        },
      },
    );
  }, [filteredItems]);

  return (
    <div className="min-h-screen bg-black text-white pt-36">
      {/* HERO */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Church{' '}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Merch
          </span>
        </h1>

        <p className="text-zinc-400 max-w-2xl mx-auto">
          Support ELGC through community merchandise. Every item helps fund ministries, outreach,
          and church programs.
        </p>
      </div>

      {/* FILTER */}
      <div className="container mx-auto px-6 mb-10 flex items-center gap-4 flex-wrap">
        <Filter size={18} className="text-zinc-400" />

        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="container mx-auto px-6 pb-24">
        <div className="merch-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {filteredItems.map((item) => (
            <Link key={item.id} href={`/business/merch/${item.id}`} className="block">
              <motion.div
                key={item.id}
                className="merch-item group cursor-pointer aspect-[328/494] rounded-2xl overflow-hidden border border-zinc-800 hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)]"
                transition={{ duration: 0.25 }}
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-full w-full overflow-hidden bg-zinc-900">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* category badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 text-[11px] bg-black/60 backdrop-blur rounded-full border border-white/10">
                    {item.category}
                  </div>

                  {/* INFO PANEL */}
                  <div className="absolute bottom-0 left-0 w-full p-1">
                    <div className="p-4 rounded-xl bg-gradient-to-b from-zinc-900/90 to-zinc-900/70 backdrop-blur border border-white/5 shadow-lg">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-sm font-medium text-white leading-tight">
                            {item.title}
                          </h3>

                          <div className="mt-1">
                            <span className="text-xl font-semibold text-white">
                              {item.price.split(' ')[0]}
                            </span>

                            <span className="text-xs text-zinc-400 ml-1">Suggested Donation</span>
                          </div>
                        </div>

                        <button className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-purple-500 transition group-hover:rotate-90 duration-300">
                          +
                        </button>
                      </div>
                    </div>
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

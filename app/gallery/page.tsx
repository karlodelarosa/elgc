'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Filter, Grid3x3, Grid2x2, LayoutGrid, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
  date: string;

  sermonTitle?: string;
  verse?: string;
  message?: string;
  speaker?: string;
  takeaway?: string;
}

const CATEGORIES = {
  ALL: 'All',
  WORSHIP: 'Worship',
  COMMUNITY: 'Community',
  YOUTH: 'Youth',
  CHILDREN: 'Children',
  PRAYER: 'Prayer',
  OUTREACH: 'Outreach',
  EDUCATION: 'Education',
  SPECIAL_EVENTS: 'Special Events',
} as const;

const CATEGORY_VALUES = Object.values(CATEGORIES);

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: '/img/sunday1.JPG',
    title: 'Sunday Worship Service',
    category: 'Worship',
    date: '2026-03-15',
  },
  {
    id: 3,
    url: '/img/fellowship1.jpg',
    title: 'Youth Group Night',
    category: 'Youth',
    date: '2026-03-08',
  },
  {
    id: 4,
    url: '/img/worship1.jpg',
    title: 'Youth Worship Service',
    category: 'Worship',
    date: '2026-03-01',
  },
  {
    id: 8,
    url: '/img/bs-household1.jpg',
    title: 'Bible Study Group',
    category: 'Education',
    date: '2026-03-18',
  },
  {
    id: 10,
    url: '/img/vacation2.jpg',
    title: 'Outdoor Event',
    category: 'Community',
    date: '2025-06-12',
  },
  {
    id: 12,
    url: '/img/hiking1.jpg',
    title: 'Music Team Hiking',
    category: 'Special Events',
    date: '2025-12-25',
  },
  {
    id: 13,
    url: '/img/youth-retreat1.jpg',
    title: 'Youth Retreat',
    category: 'Special Events',
    date: '2025-10-05',
  },
  {
    id: 17,
    url: '/img/mission1.jpg',
    title: 'Mission Trip',
    category: 'Outreach',
    date: '2026-01-15',
  },
  {
    id: 18,
    url: '/img/alab1.JPG',
    title: 'ALAB ticket Dissemination ',
    category: 'Community',
    date: '2026-03-18',
  },
  {
    id: 24,
    url: '/img/yp1.jpg',
    title: 'Young Professional Fellowship',
    category: 'Community',
    date: '2026-03-11',
  },
  {
    id: 28,
    url: '/img/youth-outdoor1.jpg',
    title: 'Youth Outdoor Fellowship',
    category: 'Youth',
    date: '2026-02-12',
  },
  {
    id: 29,
    url: '/img/family-visitation1.jpg',
    title: 'Family Visitation & Prayer',
    category: 'Outreach',
    date: '2026-03-24',
  },
  {
    id: 30,
    url: '/img/sunday2.jpg',
    title: 'Sunday Worship Service',
    category: 'Worship',
    date: '2026-03-29',
    sermonTitle: 'God Is With Us',
    verse: 'Matthew 1:23',
    message:
      'No matter what season of life you are in, remember that God is present. His presence gives peace, direction, and hope for tomorrow.',
    takeaway:
      'God’s promise of Emmanuel reminds us that we are never alone. In every season, whether joyful or difficult. His presence remains constant. He guides our steps, strengthens our hearts, and fills us with peace. Our hope does not depend on circumstances but on the faithful God who walks with us.',
    speaker: 'Bishop Charlie Rosal',
  },
  {
    id: 31,
    url: '/img/training2.jpg',
    title: '16 Fundamental Training',
    category: 'Training',
    date: '2026-03-29',
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'date-desc' | 'date-asc' | 'title'>('date-desc');
  const [gridSize, setGridSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredImages = galleryImages
    .filter((img) => selectedCategory === 'All' || img.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'date-desc') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === 'date-asc') return new Date(a.date).getTime() - new Date(b.date).getTime();
      return a.title.localeCompare(b.title);
    });

  useEffect(() => {
    gsap.fromTo(
      '.gallery-item',
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gallery-grid',
          start: 'top 80%',
        },
      },
    );
  }, [filteredImages, gridSize]);

  const gridClasses = {
    small: 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4',
    medium: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6',
    large: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
  };

  return (
    <div className="min-h-screen bg-black text-white pt-36">
      {/* Controls */}

      <div className="container mx-auto px-6 py-8 sticky top-0 z-40 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10"
            >
              <Filter size={18} />
              <span className="hidden sm:inline">Filters</span>
            </button>

            <div className={`flex-wrap gap-2 ${showFilters ? 'flex' : 'hidden md:flex'}`}>
              {CATEGORY_VALUES.map((category) => (
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
          </div>

          <div className="flex items-center gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date-desc' | 'date-asc' | 'title')}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 text-white cursor-pointer transition-colors"
            >
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
              <option value="title">Title A-Z</option>
            </select>

            <div className="flex gap-1 p-1 bg-white/5 rounded-lg border border-white/10">
              <button
                onClick={() => setGridSize('small')}
                className={`p-2 rounded transition-colors ${
                  gridSize === 'small' ? 'bg-white/20 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Grid3x3 size={18} />
              </button>

              <button
                onClick={() => setGridSize('medium')}
                className={`p-2 rounded transition-colors ${
                  gridSize === 'medium'
                    ? 'bg-white/20 text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Grid2x2 size={18} />
              </button>

              <button
                onClick={() => setGridSize('large')}
                className={`p-2 rounded transition-colors ${
                  gridSize === 'large' ? 'bg-white/20 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <LayoutGrid size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}

      <div className="container mx-auto px-6 py-12">
        <div className="mb-6 text-zinc-400">
          Showing {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
        </div>

        <div className={`gallery-grid grid ${gridClasses[gridSize]}`}>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              className="gallery-item group cursor-pointer relative overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(image)}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-square overflow-hidden bg-zinc-900 group">
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw, 25vw"
                  className="transition-transform duration-500 group-hover:scale-110 object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold text-white mb-1">{image.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                      {image.category}
                    </span>
                    <span>
                      {new Date(image.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-7xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden">
                <div className="relative w-full h-[70vh]">
                  <Image
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-start p-10 items-start">
                  {/* IMAGE TITLE */}

                  <h2 className="text-3xl font-bold text-white mb-4">{selectedImage.title}</h2>

                  {/* CATEGORY + DATE */}

                  <div className="flex items-center gap-4 text-sm text-zinc-400 mb-6">
                    <span className="px-3 py-1 bg-white/10 rounded-full">
                      {selectedImage.category}
                    </span>

                    <span>
                      {new Date(selectedImage.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  {/* SERMON CONTENT */}

                  {selectedImage.sermonTitle && (
                    <h3 className="text-xl font-semibold text-purple-400 mb-2">
                      {selectedImage.sermonTitle}
                    </h3>
                  )}

                  {selectedImage.verse && (
                    <p className="text-zinc-400 italic mb-4">{selectedImage.verse}</p>
                  )}

                  {selectedImage.message && (
                    <p className="text-zinc-300 leading-relaxed mb-6">{selectedImage.message}</p>
                  )}

                  {/* SPEAKER */}

                  {selectedImage.speaker && (
                    <div className="border-t border-white/10 pt-4 w-full mb-6">
                      <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">
                        Speaker
                      </p>

                      <p className="text-lg font-medium text-white">{selectedImage.speaker}</p>
                    </div>
                  )}

                  {/* KEY TAKEAWAY */}

                  {selectedImage.takeaway && (
                    <div className="w-full bg-white/5 border border-white/10 rounded-xl p-5">
                      <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
                        Key Takeaway
                      </p>

                      <p className="text-zinc-300 leading-relaxed">{selectedImage.takeaway}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

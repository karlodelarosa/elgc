'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { bibleBooks } from '@/lib/bible-books';
import Link from 'next/link';
import { slugify } from '@/lib/slugify';

export default function BibleReadingLensPage() {
  const [search, setSearch] = useState('');
  const [testament, setTestament] = useState('All');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();

    return bibleBooks.filter((b) => {
      const matchSearch =
        b.title.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q) ||
        b.lens.toLowerCase().includes(q);

      const matchTestament = testament === 'All' || b.testament === testament;

      const matchCategory = category === 'All' || b.category === category;

      return matchSearch && matchTestament && matchCategory;
    });
  }, [search, testament, category]);

  const categories = [
    'All',
    'Law',
    'History',
    'Wisdom',
    'Poetry',
    'Prophets',
    'Gospels',
    'Epistles',
    'Prophecy',
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-36">
      {/* Header */}
      <div className="container mx-auto px-6 text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">How to Read the Bible</h1>

        <p className="text-zinc-400 max-w-2xl mx-auto mb-6">
          Learn the mental picture behind every book of Scripture so you can read the Bible as
          story, history, poetry, and revelation — not just text.
        </p>

        {/* Search */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search book, lens, or theme..."
          className="w-full max-w-md mx-auto block bg-white/5 border border-white/10 rounded-lg px-4 py-3"
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {['All', 'Old Testament', 'New Testament'].map((t) => (
            <button
              key={t}
              onClick={() => setTestament(t)}
              className={`px-3 py-1 rounded-full border text-sm transition ${
                testament === t
                  ? 'bg-purple-500/20 border-purple-400'
                  : 'border-white/10 text-zinc-300'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1 rounded-full border text-sm transition ${
                category === c
                  ? 'bg-purple-500/20 border-purple-400'
                  : 'border-white/10 text-zinc-300'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((b, i) => (
            <Link key={b.title} href={`/bible-reading/${slugify(b.title)}`}>
              <motion.div
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
              >
                {/* CATEGORY (subtle) */}
                <div className="text-xs text-zinc-400 uppercase tracking-wider mb-2">
                  {b.category}
                </div>

                {/* BOOK NAME (MAIN HERO) */}
                <h3 className="text-2xl font-bold text-white mb-1">{b.title}</h3>

                {/* LENS (secondary highlight) */}
                <div className="text-sm text-purple-300 mb-3">{b.lens}</div>

                {/* DESCRIPTION (balanced 30–50 words) */}
                <p className="text-zinc-300 text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

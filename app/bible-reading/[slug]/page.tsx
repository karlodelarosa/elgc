'use client';

import React, { useMemo } from 'react';
import { notFound, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { bibleBooks } from '@/lib/bible-books';
import { slugify } from '@/lib/slugify';

import { BookOpen, AlertTriangle, Compass, Heart } from 'lucide-react';

export default function BibleBookDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const book = useMemo(() => {
    return bibleBooks.find((b) => slugify(b.title) === slug);
  }, [slug]);

  if (!book) return notFound();

  const { readingExperience } = book;

  return (
    <div className="min-h-screen bg-black text-white py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">{book.category}</div>

          <h1 className="text-4xl font-bold mb-2">{book.title}</h1>

          <div className="text-purple-300 text-lg mb-4">{book.lens}</div>

          <p className="text-zinc-300 leading-relaxed">{book.description}</p>
        </motion.div>

        {/* HOW TO READ */}
        <motion.section className="mb-14">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Compass className="w-5 h-5 text-purple-300" />
            How to Read This Book
          </h2>

          <p className="text-zinc-300 mb-4">
            <span className="text-zinc-500 uppercase text-xs block mb-1">Mindset</span>
            {readingExperience.readingGuide.mindset}
          </p>

          <p className="text-zinc-300 mb-4">
            <span className="text-zinc-500 uppercase text-xs block mb-1">Approach</span>
            {readingExperience.readingGuide.approach}
          </p>

          <p className="text-zinc-300">
            <span className="text-zinc-500 uppercase text-xs block mb-1">Focus</span>
            {readingExperience.readingGuide.focus}
          </p>
        </motion.section>

        {/* COMMON MISTAKES */}
        <motion.section className="mb-14">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-purple-300" />
            Common Mistakes
          </h2>

          <ul className="space-y-2 text-zinc-300 list-disc pl-5">
            {readingExperience.commonMistakes.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section className="mb-14">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-purple-300" />
            Reading Experience
          </h2>

          <p className="text-zinc-300 mb-6">{readingExperience.immersion}</p>

          <div className="border-l border-purple-500/30 pl-4 mb-6">
            <p className="text-xs text-zinc-500 uppercase mb-1">Reflective Question</p>
            <p className="text-white">{readingExperience.question}</p>
          </div>
        </motion.section>

        {/* REFLECTION */}
        <motion.section>
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-purple-300" />
            Reflection
          </h2>

          <div className="space-y-3 text-zinc-300">
            <p>{readingExperience.question}</p>

            <p>
              What is God revealing about His character in{' '}
              <span className="text-white font-medium">{book.title}</span>?
            </p>

            <p>How should this shape my obedience today?</p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

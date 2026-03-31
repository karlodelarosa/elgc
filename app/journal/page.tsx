'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Blobs } from '../components/ui/blobs/blobs.component';

interface JournalEntry {
  date: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
}

interface SummaryItem {
  title: string;
  count: number;
}

const journalData: Record<number, JournalEntry[]> = {
  2026: [
    {
      date: '2026-01-05',
      title: 'Community Service',
      description: 'Cleaned the park and donated supplies.',
      image:
        'https://images.unsplash.com/photo-1615856210162-9ae33390b1a2?q=80&w=1742&auto=format&fit=crop',
      link: '/vlogs/community-service',
    },
    {
      date: '2026-02-12',
      title: 'Storage Room Completed',
      description: 'Organized and stocked storage room.',
      image:
        'https://images.unsplash.com/photo-1615856210162-9ae33390b1a2?q=80&w=1742&auto=format&fit=crop',
    },
    {
      date: '2026-03-03',
      title: 'Youth Fellowship',
      description: 'Games, worship & teaching.',
      image:
        'https://images.unsplash.com/photo-1615856210162-9ae33390b1a2?q=80&w=1742&auto=format&fit=crop',
      link: '/gallery/youth-fellowship',
    },
    {
      date: '2026-04-05',
      title: 'Community Service',
      description: 'Cleaned the park and donated supplies.',
      image:
        'https://images.unsplash.com/photo-1615856210162-9ae33390b1a2?q=80&w=1742&auto=format&fit=crop',
      link: '/vlogs/community-service',
    },
    {
      date: '2026-05-12',
      title: 'Storage Room Completed',
      description: 'Organized and stocked storage room.',
      image:
        'https://images.unsplash.com/photo-1615856210162-9ae33390b1a2?q=80&w=1742&auto=format&fit=crop',
    },
    {
      date: '2026-06-03',
      title: 'Youth Fellowship',
      description: 'Games, worship & teaching.',
      image:
        'https://images.unsplash.com/photo-1615856210162-9ae33390b1a2?q=80&w=1742&auto=format&fit=crop',
      link: '/gallery/youth-fellowship',
    },
    {
      date: '2026-07-05',
      title: 'Community Service',
      description: 'Cleaned the park and donated supplies.',
      image:
        'https://images.unsplash.com/photo-1615856210162-9ae33390b1a2?q=80&w=1742&auto=format&fit=crop',
      link: '/vlogs/community-service',
    },
    {
      date: '2026-08-12',
      title: 'Storage Room Completed',
      description: 'Organized and stocked storage room.',
      image:
        'https://images.unsplash.com/photo-1615856210162-9ae33390b1a2?q=80&w=1742&auto=format&fit=crop',
    },
    {
      date: '2026-09-03',
      title: 'Youth Fellowship',
      description: 'Games, worship & teaching.',
      image:
        'https://images.unsplash.com/photo-1615856210162-9ae33390b1a2?q=80&w=1742&auto=format&fit=crop',
      link: '/gallery/youth-fellowship',
    },
  ],
  2025: [
    {
      date: '2025-12-15',
      title: 'Christmas Outreach',
      description: 'Distributed gifts and held a small celebration.',
      image: '/images/christmas.jpg',
    },
  ],
};

const summaryData: SummaryItem[] = [
  { title: 'Projects Done', count: 2 },
  { title: 'Visitations', count: 5 },
  { title: 'Bible Studies', count: 4 },
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function JournalPage() {
  const currentYear = 2026;
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const entries = journalData[selectedYear] || [];
  const entriesByMonth = months.map((_, idx) =>
    entries.filter((e) => new Date(e.date).getMonth() === idx),
  );

  const currentMonth = new Date().getMonth();
  const progressPercent = Math.min(100, ((currentMonth + 1) / 12) * 100);

  return (
    <div>
      <Blobs />

      <div className="relative flex flex-col px-6 md:px-12 py-12 max-w-7xl mx-auto gap-12">
        {/* ================= Header Hero Section ================= */}
        <section className="relative w-full flex flex-col justify-center items-center text-center px-6 pt-24 pb-12">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            Journal
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
          >
            Stay updated with our weekly and monthly church activities, including services, Bible
            study, training, and life groups.
          </motion.p>
        </section>

        {/* ================= Milestones & Timeline ================= */}
        <section className="flex flex-col lg:flex-row gap-12">
          {/* ================= Milestones & Timeline ================= */}
          <div className="flex-1 relative">
            {/* Timeline Line */}
            <div className="absolute left-16 top-0 h-full w-1 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full z-0"></div>

            {/* Floating Year Filter (Left Side) */}
            <div className="absolute -left-24 top-0 flex flex-col gap-3 z-30">
              {[2026, 2025].map((y) => (
                <button
                  key={y}
                  onClick={() => setSelectedYear(y)}
                  className={`px-4 py-2 rounded-xl font-medium transition backdrop-blur-sm  hover:bg-gray-800/50 ${
                    selectedYear === y ? 'bg-gray-800/50 text-white' : 'text-zinc-300'
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>

            {/* Timeline Cards */}
            <div className="ml-20 space-y-12 relative z-10">
              {entriesByMonth.map(
                (monthEntries, idx) =>
                  monthEntries.length > 0 && (
                    <div key={idx} className="relative">
                      <div className="absolute -left-16 top-0 text-sm text-zinc-400 font-semibold">
                        {months[idx]}
                      </div>

                      <div className="space-y-6">
                        {monthEntries.map((entry, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex flex-col md:flex-row gap-6 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-2xl transition relative z-20"
                          >
                            {/* Image */}
                            <div className="relative w-full md:w-48 h-36 flex-shrink-0 rounded-xl overflow-hidden">
                              <Image
                                src={
                                  entry.image ||
                                  'https://images.unsplash.com/photo-1615856210162-9ae33390b1a2?q=80&w=1742&auto=format&fit=crop'
                                }
                                alt={entry.title}
                                fill
                                className="object-cover w-full h-full"
                              />
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col justify-between">
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <h3 className="text-lg font-semibold text-white">
                                    {entry.title}
                                  </h3>
                                  <span className="text-sm text-zinc-400">
                                    {new Date(entry.date).toDateString()}
                                  </span>
                                </div>
                                <p className="text-zinc-300 text-sm">{entry.description}</p>
                              </div>

                              {entry.link && (
                                <a
                                  href={entry.link}
                                  target="_blank"
                                  className="inline-flex items-center gap-2 mt-3 w-fit rounded-full border border-purple-400/40 bg-purple-500/20 px-6 py-2 text-purple-200 hover:border-purple-300 hover:bg-purple-500/30 hover:text-white transition"
                                >
                                  View More
                                  <ArrowRight size={18} />
                                </a>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ),
              )}
            </div>
          </div>

          {/* Sidebar: Statistics & Progress */}
          <div className="flex flex-col gap-8 w-full md:w-80">
            {/* Statistics Card */}
            <div className="grid grid-cols-1 gap-4 bg-white/5 backdrop-blur-md rounded-2xl p-4 shadow-lg text-center">
              {summaryData.map((item, idx) => (
                <div key={idx}>
                  <p className="text-xl font-bold text-white">{item.count}</p>
                  <p className="text-sm text-zinc-300">{item.title}</p>
                </div>
              ))}
            </div>

            {/* Year Progress */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 shadow-lg text-center">
              <p className="text-sm text-zinc-300 mb-2">Year Progress</p>
              <div className="w-full h-6 bg-white/10 rounded-full overflow-hidden mb-1">
                <div
                  className="h-full bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <p className="text-xs text-zinc-300">{progressPercent.toFixed(0)}% complete</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

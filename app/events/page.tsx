'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Clock3, MapPin, Search } from 'lucide-react';

const events = [
  {
    id: 'alab-illuminate',
    title: 'ALAB: Illuminate',
    date: 'April 10',
    time: '6:30 PM',
    location: 'ELGC Main Sanctuary',
    category: 'Youth event',
    description:
      'A night of worship, creative arts, and life-giving messages designed for the next generation.',
  },
  {
    id: 'dvbs',
    title: 'DVBS (Daily Vacation Bible School)',
    date: 'May 6 - May 9',
    time: '9:00 AM - 12:00 PM',
    location: 'ELGC Kids Hall',
    category: 'Kids ministry',
    description:
      'Fun-filled days of Bible stories, games, songs, and activities for children in our community.',
  },
  {
    id: 'prayer-fasting-family-day',
    title: 'Prayer and Fasting for Family Day',
    date: 'May 27',
    time: '7:00 PM',
    location: 'ELGC Main Sanctuary',
    category: 'Prayer gathering',
    description:
      'A dedicated evening of prayer and fasting as families prepare their hearts together in faith.',
  },
  {
    id: 'family-day',
    title: 'Family Day',
    date: 'June 13',
    time: '10:00 AM',
    location: 'ELGC Fellowship Grounds',
    category: 'Church-wide',
    description:
      'A celebration for every household with fellowship, food, and activities that strengthen family bonds.',
  },
  {
    id: 'teachers-training-2',
    title: "Teacher's Training 2",
    date: 'July 26',
    time: '9:00 AM',
    location: 'ELGC Training Room',
    category: 'Leaders development',
    description:
      'An equipping session for teachers and ministry workers focused on practical teaching and discipleship.',
  },
  {
    id: 'technical-training',
    title: 'Technical Training',
    date: 'August 8',
    time: '1:00 PM',
    location: 'ELGC Media Booth',
    category: 'Skills training',
    description:
      'Hands-on training for sound, presentation, livestream, and production support teams.',
  },
  {
    id: 'buwan-ng-wika',
    title: 'Buwan ng Wika',
    date: 'August 29',
    time: '4:00 PM',
    location: 'ELGC Fellowship Grounds',
    category: 'Church-wide',
    description:
      'A cultural celebration featuring Filipino language, songs, presentations, and fellowship.',
  },
  {
    id: 'youth-anniversary',
    title: 'Youth Anniversary',
    date: 'September 10',
    time: '6:00 PM',
    location: 'ELGC Main Sanctuary',
    category: 'Youth event',
    description:
      'A joyful gathering to celebrate God’s faithfulness in the youth ministry through worship and testimonies.',
  },
  {
    id: 'march-for-jesus',
    title: 'March for Jesus',
    date: 'September 26',
    time: '8:00 AM',
    location: 'City Proper Route',
    category: 'Community outreach',
    description:
      'A public declaration of faith through prayer, worship, and united community participation.',
  },
  {
    id: 'crusade',
    title: 'Crusade',
    date: 'October 10',
    time: '5:30 PM',
    location: 'Open Grounds',
    category: 'Evangelism',
    description:
      'An evening outreach with worship, gospel preaching, and prayer for the community.',
  },
  {
    id: 'workers-fellowship',
    title: 'Workers Fellowship',
    date: 'October 31',
    time: '2:00 PM',
    location: 'ELGC Fellowship Hall',
    category: 'Church workers',
    description:
      'A refreshing fellowship for ministry workers with encouragement, alignment, and thanksgiving.',
  },
  {
    id: 'christmas-service',
    title: 'Christmas Service',
    date: 'December 20',
    time: '9:00 AM',
    location: 'ELGC Main Sanctuary',
    category: 'Church-wide',
    description:
      'A special Christmas celebration centered on worship, gratitude, and the message of Christ.',
  },
  {
    id: 'prayer-night',
    title: 'Prayer and Worship Night',
    date: 'Every last Friday of the month',
    time: '7:00 PM',
    location: 'ELGC Main Sanctuary',
    category: 'Prayer gathering',
    description:
      'An extended evening of prayer, worship, and intercession as we seek God together as one church.',
  },
];

export default function EventsPage() {
  const [searchText, setSearchText] = useState('');

  const filteredEvents = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    if (!query) return events;

    return events.filter((event) => event.title.toLowerCase().includes(query));
  }, [searchText]);

  return (
    <div className="w-full bg-black text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(168,85,247,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.25) 1px, transparent 1px)',
          backgroundSize: '110px 110px',
        }}
      />

      <section className="relative w-full h-[50vh] flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          Church Events
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl text-zinc-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
        >
          Stay connected with our upcoming gatherings, ministry activities, and church-wide events.
        </motion.p>
      </section>

      <section className="w-full px-6 pb-24 max-w-7xl mx-auto relative z-10">
        <motion.div
          className="rounded-3xl border border-purple-400/20 bg-zinc-900/70 backdrop-blur-xl px-6 py-7 md:px-10 md:py-8 mb-14 shadow-2xl shadow-purple-500/10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-purple-300/80 mb-2">
                Find events
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Browse by event title</h2>
            </div>

            <label className="relative w-full lg:w-[420px]">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
              />
              <input
                type="text"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                placeholder="Search title (e.g. Family Day)"
                className="w-full rounded-xl border border-white/15 bg-black/40 py-3.5 pl-11 pr-4 text-white placeholder:text-zinc-500 outline-none focus:border-purple-300/60 focus:ring-2 focus:ring-purple-400/20 transition"
              />
            </label>
          </div>
        </motion.div>

        <div className="mb-8 px-1">
          <p className="text-white/60 text-sm md:text-base">
            Showing <span className="text-white font-semibold">{filteredEvents.length}</span> of{' '}
            <span className="text-white font-semibold">{events.length}</span> events
          </p>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-purple-300/25 bg-zinc-900/40 px-8 py-16 text-center">
            <p className="text-white text-xl font-semibold mb-2">No events found</p>
            <p className="text-zinc-400">Try a different title keyword.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredEvents.map((event, idx) => (
              <motion.article
                key={event.id}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-black/80 backdrop-blur-xl p-8 md:p-10 lg:p-12 shadow-xl shadow-black/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.05 }}
              >
                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">
                  <div className="max-w-3xl">
                    <p className="inline-flex w-fit rounded-full border border-purple-300/30 bg-purple-500/10 px-3 py-1 text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-purple-200 mb-3">
                      {event.category}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {event.title}
                    </h3>
                    <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
                      {event.description}
                    </p>
                  </div>

                  <div className="xl:min-w-[320px] rounded-2xl border border-purple-300/20 bg-purple-500/[0.08] px-5 py-5 space-y-3">
                    <p className="inline-flex items-center gap-2 text-sm md:text-base text-zinc-200 pr-2">
                      <CalendarDays size={17} className="text-purple-300" />
                      {event.date}
                    </p>
                    <p className="inline-flex items-center gap-2 text-sm md:text-base text-zinc-200">
                      <Clock3 size={17} className="text-purple-300" />
                      {event.time}
                    </p>
                    <p className="inline-flex items-center gap-2 text-sm md:text-base text-zinc-200">
                      <MapPin size={17} className="text-purple-300" />
                      {event.location}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

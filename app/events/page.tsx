'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Clock3, MapPin, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { events } from '@/lib/events';

export default function EventsPage() {
  const [searchText, setSearchText] = useState('');

  const filteredEvents = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    if (!query) return events;

    return events.filter(
      (event) =>
        event.title.toLowerCase().includes(query) || event.category.toLowerCase().includes(query),
    );
  }, [searchText]);

  return (
    <div className="min-h-screen bg-black text-white pt-36">
      {/* Header */}
      <div className="container mx-auto px-6 py-8 sticky top-0 z-40 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Church Events</h1>
            <p className="text-zinc-400 text-sm">Stay connected with our upcoming gatherings.</p>
          </div>

          <div className="relative w-full sm:w-[360px]">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search event title or category"
              className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-11 pr-4 text-white placeholder:text-zinc-500 outline-none focus:border-purple-400 transition"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8 text-zinc-400">
          Showing {filteredEvents.length} of {events.length} events
        </div>

        {filteredEvents.length === 0 ? (
          <div className="rounded-xl border border-dashed border-white/10 p-12 text-center">
            <p className="text-xl font-semibold mb-2">No events found</p>
            <p className="text-zinc-400">Try another keyword.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, idx) => {
              const Card = (
                <motion.article
                  className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden flex flex-col transition hover:bg-white/10 cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  {/* Thumbnail */}
                  <div className="relative h-[180px] w-full overflow-hidden">
                    <Image
                      src={event.image || '/img/event-placeholder.jpg'}
                      alt={event.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    {/* Badge */}
                    <div className="mb-3 flex justify-end">
                      <span className="text-xs px-2 py-1 rounded-md bg-purple-500/20 text-purple-300">
                        View Details →
                      </span>
                    </div>

                    <span className="text-xs uppercase tracking-wider text-purple-300 mb-3">
                      {event.category}
                    </span>

                    <h3 className="text-xl font-semibold mb-3">{event.title}</h3>

                    <p className="text-zinc-400 text-sm mb-6 flex-grow">{event.content.intro}</p>

                    <div className="space-y-2 text-sm text-zinc-300">
                      <div className="flex items-center gap-2">
                        <CalendarDays size={16} className="text-purple-300" />
                        {event.date}
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock3 size={16} className="text-purple-300" />
                        {event.time}
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-purple-300" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );

              return (
                <Link key={event.id} href={`/events/${event.id}`}>
                  {Card}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MapPin, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Blobs } from '@/app/components/ui/blobs/blobs.component';
import { Event } from '@/lib/events';

export function EventDetailPage({ event }: { event: Event }) {
  const router = useRouter();

  return (
    <div className="relative px-6 md:px-12 py-14 max-w-6xl mx-auto space-y-12">
      <Blobs />

      {/* HERO IMAGE */}
      <div className="relative w-full h-[340px] rounded-2xl overflow-hidden border border-white/10">
        <Image src={event.image} alt={event.title} fill priority className="object-cover" />
      </div>

      {/* BACK BUTTON */}
      <div className="flex justify-start">
        <button
          onClick={() => router.push('/events')}
          className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition"
        >
          <ArrowLeft size={16} />
          Back to Events
        </button>
      </div>

      {/* TITLE */}
      <section className="text-center space-y-3">
        <motion.h1
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-pink-400 to-orange-600"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {event.title}
        </motion.h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-2xl mx-auto space-y-5 text-zinc-300 leading-relaxed">
        <p>{event.content.intro}</p>

        {event.content.theme && (
          <p>
            <strong>Theme:</strong> {event.content.theme}
          </p>
        )}

        {event.content.themeVerse && (
          <p>
            <strong>Theme Verse:</strong> {event.content.themeVerse}
            {event.content.verseReference && <span> – {event.content.verseReference}</span>}
          </p>
        )}

        {event.content.who && (
          <p>
            <strong>Who:</strong> {event.content.who}
          </p>
        )}

        {event.content.where && (
          <p>
            <strong>Where:</strong> {event.content.where}
          </p>
        )}

        {event.content.when && (
          <p>
            <strong>When:</strong> {event.content.when}
          </p>
        )}

        {event.content.body && <p>{event.content.body}</p>}
      </section>

      {/* DETAILS */}
      <section className="border-y border-white/10 py-6">
        <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
          <div className="flex items-center gap-3 text-zinc-300">
            <Calendar size={18} />
            <div>
              <p className="text-xs text-zinc-400">Date & Time</p>
              <p className="text-white font-medium">
                {event.date} — {event.time}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-zinc-300">
            <MapPin size={18} />
            <div>
              <p className="text-xs text-zinc-400">Location</p>
              <p className="text-white font-medium">{event.location}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

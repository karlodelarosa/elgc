'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';
import { Blobs } from '@/app/components/ui/blobs/blobs.component';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ALAB: Illuminate | ELGC Church',
  description:
    "ALAB: Illuminate is a fundraising event supporting Family Day participants and church renovation at Emmanuel's Living Gospel Church.",

  openGraph: {
    title: 'ALAB: Illuminate',
    description: 'Fundraising event supporting Family Day participants and church renovation.',
    url: 'https://elgchurch.com/events/alab-illuminate',
    siteName: "Emmanuel's Living Gospel Church",
    images: [
      {
        url: 'https://elgchurch.com/img/alab-tix.jpeg',
        width: 1200,
        height: 630,
        alt: 'ALAB: Illuminate Event',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ALAB: Illuminate',
    description: 'Fundraising event supporting Family Day participants and church renovation.',
    images: ['https://elgchurch.com/img/alab-tix.jpeg'],
  },
};

export default function AlabEventPage() {
  return (
    <div className="relative px-6 md:px-12 py-14 max-w-6xl mx-auto space-y-12">
      {/* Background */}
      <Blobs />

      {/* HERO IMAGE */}
      <div className="relative w-full h-[340px] rounded-2xl overflow-hidden border border-white/10">
        <Image
          src="/img/alab-tix.jpeg"
          alt="ALAB Fundraising Event"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* EVENT NAME */}
      <section className="text-center space-y-3">
        <motion.h1
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-pink-400 to-orange-600"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ALAB: Illuminate
        </motion.h1>
      </section>

      {/* PURPOSE */}
      <section className="max-w-2xl mx-auto space-y-4 text-zinc-300 leading-relaxed">
        <p>
          The <strong>ALAB</strong> event is a fundraising initiative dedicated to supporting our
          church community. Funds raised will help support participants of the upcoming{' '}
          <strong>Family Day</strong> and contribute to important{' '}
          <strong>church renovation projects</strong>.
        </p>

        <p>
          Through this gathering, we hope to strengthen fellowship while giving members and
          supporters the opportunity to participate in building and improving the future of our
          church.
        </p>
      </section>

      {/* EVENT DETAILS */}
      <section className="border-y border-white/10 py-6">
        <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
          <div className="flex items-center gap-3 text-zinc-300">
            <Calendar size={18} />
            <div>
              <p className="text-xs text-zinc-400">Date & Time</p>
              <p className="text-white font-medium">April 10, 2026 — 6:00 PM</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-zinc-300">
            <MapPin size={18} />
            <div>
              <p className="text-xs text-zinc-400">Location</p>
              <p className="text-white font-medium">ELGC Barracks</p>
            </div>
          </div>
        </div>
      </section>

      {/* TICKETS */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-white text-center">Ticket Options</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center transition hover:border-purple-400/40">
            <p className="text-zinc-400 text-xs uppercase tracking-wider">Student Entry</p>
            <p className="text-3xl font-bold text-white mt-2">₱10</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center transition hover:border-pink-400/40">
            <p className="text-zinc-400 text-xs uppercase tracking-wider">Sponsor</p>
            <p className="text-3xl font-bold text-white mt-2">₱100</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center transition hover:border-pink-400/40">
            <p className="text-zinc-400 text-xs uppercase tracking-wider">Sponsor</p>
            <p className="text-3xl font-bold text-white mt-2">₱200</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center transition hover:border-pink-400/40">
            <p className="text-zinc-400 text-xs uppercase tracking-wider">Sponsor</p>
            <p className="text-3xl font-bold text-white mt-2">₱300</p>
          </div>
        </div>
      </section>
    </div>
  );
}

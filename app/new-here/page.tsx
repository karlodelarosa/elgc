'use client';

import { motion } from 'framer-motion';
import { HeartHandshake, MapPin, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import { Blobs } from '../components/ui/blobs/blobs.component';

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function NewHerePage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-32">
      <Blobs />

      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {/* Hero */}
        <motion.section
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            New Here?
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            We&apos;re glad you found us. Whether you&apos;re exploring faith, looking for a church
            family, or simply curious, you are welcome here.
          </p>
        </motion.section>

        {/* What to Expect */}
        <motion.section
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="flex gap-4">
            <HeartHandshake className="text-pink-300 mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-2">A Welcoming Community</h3>
              <p className="text-gray-400">
                We are a church that values relationships. You don&apos;t need to have everything
                figured out — just come as you are.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Users className="text-purple-300 mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-2">Spirit-Led Worship</h3>
              <p className="text-gray-400">
                Our gatherings focus on worship, prayer, and hearing from God&apos;s Word. We
                believe the Holy Spirit leads our time together.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="text-indigo-300 mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-2">Service Schedule</h3>
              <p className="text-gray-400">
                Our Sunday service usually lasts about 2 hours and includes worship, prayer, and a
                message from the Bible.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <MapPin className="text-pink-300 mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-2">Visit Us</h3>
              <p className="text-gray-400">
                We would love to meet you in person. Feel free to drop by during one of our
                services.
              </p>
            </div>
          </div>
        </motion.section>

        {/* What Happens on Sunday */}
        <motion.section
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-neutral-900/50 border border-white/10 rounded-3xl px-6 py-8 lg:p-10 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">What Happens on Sunday?</h2>

          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our Sunday gathering begins with worship and prayer as we prepare our hearts before God.
            After that, we listen to a message from the Bible that helps us grow in our faith and
            live it out in our daily lives.
          </p>

          <p className="text-gray-400 mt-4">
            After the service, many people stay to talk, connect, and build friendships.
          </p>
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-6"
        >
          <h2 className="text-2xl font-semibold">We&apos;d Love to Meet You</h2>

          <p className="text-gray-400 max-w-xl">
            If you&apos;re planning to visit or have questions, feel free to reach out. We&apos;d be
            happy to connect with you.
          </p>

          <Link
            href="/contact-us"
            className="px-6 py-3 rounded-lg border border-pink-500 text-pink-400 font-semibold hover:bg-pink-500/10 transition"
          >
            Contact Us
          </Link>
        </motion.section>
      </div>
    </div>
  );
}

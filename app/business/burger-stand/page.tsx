'use client';

import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

export default function BurgerStandPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-10">
      {/* HERO IMAGE */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img src="/images/business/burger.jpg" className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
          <div>
            <Coffee size={40} className="mx-auto mb-4 text-orange-300" />
            <h1 className="text-5xl font-bold">ELGC Burger Stand</h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.p
          className="text-lg text-white/80 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our burger stand serves delicious burgers made with love. Every purchase helps support our
          church ministries, outreach programs, and building projects.
        </motion.p>

        <div className="mt-10">
          <a
            href="https://maps.google.com"
            className="px-8 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold"
          >
            Visit Our Location
          </a>
        </div>
      </section>
    </div>
  );
}

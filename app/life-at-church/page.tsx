'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CalendarClock, Church, Users } from 'lucide-react';

const lifeGroups = [
  { name: 'Youth fellowship', schedule: 'Friday · 7:00 PM' },
  { name: 'Youth pro', schedule: 'Every 3rd Sunday · After service' },
  { name: 'Ladies fellowship', schedule: 'Thursday · 5:00 PM' },
  { name: 'Mens Fellowship', schedule: 'Sunday · 5:00 PM' },
  { name: 'Childrens Fellowship', schedule: 'Sunday · 9:00 AM' },
];

const householdBibleStudies = [
  {
    householdName: 'Household 1',
    when: 'Wednesday',
    time: '2:00 PM',
    place: 'Amparo, Caloocan City',
  },
  {
    householdName: 'Household 2',
    when: 'Wednesday',
    time: '3:00 PM',
    place: 'Barracks, Caloocan City',
  },
  {
    householdName: 'Household 3',
    when: 'Wednesday',
    time: '3:00 PM',
    place: 'Barracks, Caloocan City',
  },
  {
    householdName: 'Household 4',
    when: 'Saturday',
    time: '3:00 PM',
    place: 'Tala, Caloocan City',
  },
];

const trainings = [
  { name: "Teacher's Training", schedule: 'Ongoing', note: 'After church service' },
  { name: '16th Fundamentals', schedule: 'Ongoing', note: 'After church service' },
  { name: 'Worship team training', schedule: 'TBD', note: null },
];

export default function LifeAtChurchPage() {
  return (
    <div className="w-full bg-black text-white relative overflow-hidden">
      <section className="relative w-full h-[50vh] flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          Life at Church
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

      {/* Sunday Worship — emphasized */}
      <section className="w-full px-6 pb-8 max-w-6xl mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-2xl border-2 border-transparent bg-gradient-to-br from-purple-600/30 via-indigo-600/25 to-cyan-600/20 p-[2px] shadow-[0_0_60px_-12px_rgba(168,85,247,0.45)]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
        >
          <div className="rounded-[14px] bg-gradient-to-br from-zinc-950 via-black to-zinc-950 px-6 py-10 md:px-12 md:py-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-start gap-4">
                <div className="inline-flex p-3 md:p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg shrink-0">
                  <Church size={28} className="md:w-8 md:h-8" strokeWidth={1.75} />
                </div>

                <div>
                  <p className="text-purple-300/90 text-xs md:text-sm font-semibold tracking-widest uppercase mb-2">
                    Main Gathering
                  </p>

                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
                    Sunday Worship Service
                  </h2>

                  <p className="text-white/75 text-sm md:text-lg max-w-xl leading-relaxed">
                    Our central weekly worship with praise, prayer, and preaching. Come expectant to
                    meet with God together as a church family.
                  </p>

                  {/* Mobile schedule */}
                  <div className="mt-4 md:hidden">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm text-white/90">
                      <span className="font-semibold text-white">Sunday</span>
                      <span className="text-white/50">·</span>
                      <span className="text-purple-200 font-medium">9:00 AM</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Desktop schedule */}
              <div className="hidden md:flex flex-col items-end gap-2 text-right shrink-0">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm text-white/90">
                  <span className="font-semibold text-white">Sunday</span>
                  <span className="text-white/50">·</span>
                  <span className="text-purple-200 font-medium">9:00 AM</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Life groups */}
      <section className="w-full py-10 px-6 max-w-6xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex p-2.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white shadow-lg">
            <Users size={22} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 to-purple-300">
            Life groups
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {lifeGroups.map((group, idx) => (
            <motion.div
              key={group.name}
              className="rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm p-5 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.06 }}
            >
              <p className="text-lg font-semibold text-white">{group.name}</p>
              <p className="text-white/60 text-sm mt-2">{group.schedule}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Household Bible studies */}
      <section className="w-full py-10 px-6 max-w-6xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex p-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-lg">
            <BookOpen size={22} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-teal-300">
            Household Bible studies
          </h2>
        </motion.div>
        <motion.div
          className="rounded-xl border border-emerald-500/25 bg-emerald-950/20 p-6 md:p-8"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <ul className="space-y-4">
            {householdBibleStudies.map((row, i) => (
              <li
                key={`hbs-${i}-${row.when}-${row.time}-${row.place}`}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3"
              >
                <div className="flex-1">
                  <p className="text-base sm:text-lg font-semibold text-white leading-tight">
                    {row.householdName}
                  </p>
                  <p className="text-white/60 text-sm mt-1">
                    {row.when} · {row.time}
                  </p>
                </div>
                <span className="text-white/70 text-sm sm:text-right">{row.place}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Trainings */}
      <section className="w-full py-10 px-6 pb-20 max-w-6xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex p-2.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg">
            <CalendarClock size={22} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-orange-300">
            Trainings
          </h2>
        </motion.div>
        <div className="space-y-4">
          {trainings.map((t, idx) => (
            <motion.div
              key={t.name}
              className="rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm p-5 md:p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
            >
              <p className="text-lg font-semibold text-white mb-1">{t.name}</p>
              <p className="text-amber-200/90 font-medium">{t.schedule}</p>
              {t.note ? <p className="text-white/70 text-sm mt-2">{t.note}</p> : null}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

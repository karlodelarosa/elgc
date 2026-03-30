'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '../components/contact/components/contact-form.component';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-16 flex items-center justify-center">
      <motion.div
        className="flex flex-col md:flex-row gap-12 max-w-7xl w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >

        {/* LEFT COLUMN */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-center md:items-start gap-8 text-center md:text-left"
          variants={item}
        >

          <motion.h1
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400"
            variants={item}
          >
            Message Us
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-xl"
            variants={item}
          >
            We'd love to hear from you. Whether you have a question,
            a prayer request, or simply want to connect, feel free
            to send us a message and our team will respond soon.
          </motion.p>

          {/* CONTACT DETAILS */}
          <motion.div className="flex flex-col gap-6 mt-4" variants={item}>

            <div className="flex items-start gap-4">
              <MapPin className="text-purple-400 mt-1" size={22} />
              <div>
                <p className="font-medium">
                  Emmanuel's Living Gospel Church
                </p>
                <p className="text-zinc-400">
                  1948 Saint Joseph Avenue, Caloocan  
                  Metro Manila, Philippines
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-purple-400 mt-1" size={22} />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-zinc-400">
                  elgcchurch@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-purple-400 mt-1" size={22} />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-zinc-400">
                  +63 919 061 8179
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-purple-400 mt-1" size={22} />
              <div>
                <p className="font-medium">Service Schedule</p>
                <p className="text-zinc-400 mb-1">
                  Sunday Worship Service — 9:00 AM
                </p>
                <a
                  href="/life-at-church"
                  className="text-xs text-zinc-400 underline underline-offset-4"
                >
                  View all schedules
                </a>
              </div>
            </div>

          </motion.div>

        </motion.div>

        {/* RIGHT COLUMN (FORM) */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-center w-full"
          variants={item}
        >
          <motion.div
            className="w-full max-w-md bg-neutral-900/50 backdrop-blur-md rounded-3xl p-8 shadow-lg flex flex-col"
            variants={item}
          >
            <motion.h2
              className="text-2xl font-semibold mb-6 text-pink-400 text-center"
              variants={item}
            >
              Send a Message
            </motion.h2>

            <ContactForm />

          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
}
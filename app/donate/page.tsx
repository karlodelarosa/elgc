'use client';

import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

export default function DonatePage() {
  const [state, handleSubmit] = useForm('xjgpgdnv'); // your Formspree ID

  // Motion variants
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
    <div className="min-h-screen w-full bg-black text-white px-6 py-16 flex items-center justify-center mt-6">
      <motion.div
        className="flex flex-col md:flex-row gap-12 max-w-7xl w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Left Column: Info */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-center md:items-start gap-6 text-center md:text-left"
          variants={item}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400"
            variants={item}
          >
            Support Our Vision
          </motion.h1>

          <motion.p className="text-gray-300 text-lg md:text-xl max-w-xl" variants={item}>
            Our church is growing, and we are believing God for a bigger space to serve our
            community. We also continue to support ministries that reach people of all ages.
            <br />
            <br />
            If you feel led to support this vision — through prayer, volunteering, resources, or
            financial help — we would love to hear from you.
          </motion.p>
        </motion.div>

        {/* Right Column: Contact / Support Form */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-center w-full"
          variants={item}
        >
          <motion.div
            className="w-full max-w-md bg-neutral-900/50 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-lg flex flex-col"
            variants={item}
          >
            <motion.h2
              className="text-2xl font-semibold mb-6 text-pink-400 text-center"
              variants={item}
            >
              Get Involved
            </motion.h2>

            {state.succeeded ? (
              <motion.div
                className="w-full max-w-md bg-neutral-900/50 backdrop-blur-md rounded-3xl p-8 shadow-lg flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2
                  className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Message Sent!
                </motion.h2>
                <motion.p
                  className="text-gray-300 text-center text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Thank you for reaching out! We will connect with you soon ❤️
                </motion.p>
              </motion.div>
            ) : (
              <motion.form onSubmit={handleSubmit} className="flex flex-col gap-4" variants={item}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="p-3 rounded-lg bg-black/40 border border-zinc-700 focus:outline-none focus:border-pink-500 text-white"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="p-3 rounded-lg bg-black/40 border border-zinc-700 focus:outline-none focus:border-pink-500 text-white"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <textarea
                  name="message"
                  placeholder="Let us know how you’d like to support or get involved"
                  rows={5}
                  className="p-3 rounded-lg bg-black/40 border border-zinc-700 focus:outline-none focus:border-pink-500 text-white resize-none"
                  required
                />

                {/* Submit Button */}
                <motion.div
                  className="flex flex-row items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-pink-500 text-pink-400 font-semibold cursor-pointer select-none text-sm md:text-base mt-2 mx-auto"
                  whileHover={{
                    backgroundColor: 'rgba(255,192,203,0.1)',
                    color: '#ff80bf',
                    textShadow: '0 0 6px rgba(255,192,203,0.6)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.querySelector('form')?.requestSubmit()}
                >
                  <Heart className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Send Message</span>
                </motion.div>
              </motion.form>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

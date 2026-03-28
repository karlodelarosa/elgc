'use client'

import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'

export default function DonatePage() {
  const [state, handleSubmit] = useForm('xjgpgdnv') // your Formspree ID

  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-16 flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-12 max-w-7xl w-full">
        
        {/* Left Column: Info */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400">
            Support Our Vision
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-xl">
            Your interest and encouragement help us move forward in our mission: 
            building a new church space, supporting ministries, and reaching the community. 
            Let us know how you’d like to get involved.
          </p>

          {/* <ul className="flex flex-col gap-4 text-gray-400 text-lg mt-4">
            <li>• K2K – New Church Building Project</li>
            <li>• Support ongoing ministries and outreach programs</li>
            <li>• Church renovations and maintenance</li>
          </ul>

          <div className="mt-6 flex flex-col gap-4 text-center md:text-left">
            <p className="text-gray-300">Other ways to support us:</p>
            <ul className="flex flex-col gap-2 text-gray-400 text-base">
              <li>• Bank Transfer: <span className="text-pink-400">[Bank Placeholder]</span></li>
              <li>• GCash: <span className="text-pink-400">[GCash Placeholder]</span></li>
            </ul>
            <p className="text-gray-500 mt-2 italic">Online support via other platforms will be available soon!</p>
          </div> */}
        </div>

        {/* Right Column: Contact / Support Form */}
        <div className="flex-1 flex flex-col justify-center items-center w-full">
          <div className="w-full max-w-md bg-neutral-900/50 backdrop-blur-md rounded-3xl p-8 shadow-lg flex flex-col">
            <h2 className="text-2xl font-semibold mb-6 text-pink-400 text-center">Get Involved</h2>

            {state.succeeded ? (
              <p className="text-green-500 font-medium text-center mt-4 text-lg">
                Thank you for reaching out! We’ll connect with you soon ❤️
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
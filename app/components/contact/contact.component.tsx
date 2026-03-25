import { MapPin, Mail, Phone, Facebook, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactSection() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-zinc-950 text-white">
      {/* Background blobs */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-purple-400 tracking-widest uppercase text-sm mb-4">Contact Us</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">We'd Love to Hear From You</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Have questions or want to connect with our church community? Send us a message or visit
            us in person.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info + Map */}
          <div className="space-y-8">
            <motion.div
              className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-black/20 backdrop-blur-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl mb-6 font-semibold">Church Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="text-purple-400 mt-1" />
                  <div>
                    <p className="text-zinc-300">Your Church Address Here</p>
                    <p className="text-zinc-400 text-sm">City, Province</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-purple-400" />
                  <p className="text-zinc-300">+63 XXX XXX XXXX</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-purple-400" />
                  <p className="text-zinc-300">church@email.com</p>
                </div>
              </div>
              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                <a
                  href="#"
                  className="p-3 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 hover:scale-105 transition-transform"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 hover:scale-105 transition-transform"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              className="rounded-3xl overflow-hidden border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps?q=Manila&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="p-10 rounded-3xl bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-black/20 backdrop-blur-lg border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-6 font-semibold">Send Us a Message</h3>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-black/40 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 bg-black/40 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-500"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full p-3 bg-black/40 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 hover:scale-105 transition-transform font-medium"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

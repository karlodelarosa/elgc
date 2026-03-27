import { MapPin, Phone, Facebook, Instagram } from 'lucide-react';
import { ContactForm } from './components/contact-form.component';
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
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            We&apos;d Love to Hear From You
          </h2>
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
                    <p className="text-zinc-300">1948 St. Joseph Ave., Tala</p>
                    <p className="text-zinc-400 text-sm">Caloocan City, Philippines</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-purple-400" />
                  <p className="text-zinc-300">+639190618179</p>
                </div>
                {/* <div className="flex items-center gap-4">
                  <Mail className="text-purple-400" />
                  <p className="text-zinc-300">church@email.com</p>
                </div> */}
              </div>
              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/elgchurchofficial/"
                  className="p-3 rounded-lg bg-[#1877F2] hover:scale-105 transition-transform"
                >
                  <Facebook size={20} color="white" />
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@elgchurch"
                  className="p-3 rounded-lg bg-black hover:scale-105 transition-transform flex items-center justify-center border border-gray-800"
                >
                  <svg
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.977,15.532a2.791,2.791,0,0,0,2.791,2.792,2.859,2.859,0,0,0,2.9-2.757L12.7,3h2.578A4.8,4.8,0,0,0,19.7,7.288v2.995h0c-.147.014-.295.022-.443.022a4.8,4.8,0,0,1-4.02-2.172v7.4a5.469,5.469,0,1,1-5.469-5.469c.114,0,.226.01.338.017v2.7a2.909,2.909,0,0,0-.338-.034A2.791,2.791,0,0,0,6.977,15.532Z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/elgc.official/"
                  className="p-3 rounded-lg bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#515BD4] hover:scale-105 transition-transform"
                >
                  <Instagram size={20} color="white" />
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.6465189929157!2d121.0702778!3d14.7656285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397af9449e6f0dd%3A0xd76f8e81d74fc657!2sEmmanuel's%20Living%20Gospel%20Church!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
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
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

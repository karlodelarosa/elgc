import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      name: 'Sunday Worship',
      day: 'Sunday',
      time: '9:00 AM',
      description: 'Our main weekly worship gathering with praise, prayer, and preaching.',
      highlight: true,
    },
    {
      name: 'Sunday School (Children)',
      day: 'Sunday',
      time: '9:00 AM',
      description: 'Bible learning and fun activities for children during the Sunday service.',
    },
    {
      name: 'Youth Service',
      day: 'Friday',
      time: '7:00 PM',
      description: 'A gathering for youth with worship, teaching, and fellowship.',
    },
    {
      name: 'Ladies Fellowship',
      day: 'Thursday',
      time: '3:00 PM',
      description: 'Encouragement, prayer, and fellowship for women.',
    },
    {
      name: 'Mens Fellowship',
      day: 'Sunday',
      time: '5:00 PM',
      description: 'A time for men to grow spiritually together.',
    },
    {
      name: 'Young Professionals',
      day: 'Every 3rd Sunday',
      time: 'After Service',
      description: 'Community and discussions for young working adults.',
    },
  ];

  return (
    <section id="services" className="py-28 bg-black text-white relative overflow-hidden">
      {/* Background blobs for immersive effect */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-12 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 tracking-widest uppercase text-sm mb-4">
            Weekly Gatherings
          </p>

          <h2 className="text-4xl md:text-5xl mb-6 font-semibold">Join Us This Week</h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Our church meets throughout the week for worship, fellowship, and spiritual growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08 }}
              className={`p-5 lg:p-7 rounded-2xl border transition-transform duration-300 hover:scale-105 hover:shadow-lg ${
                service.highlight
                  ? 'bg-gradient-to-br from-purple-700/40 to-indigo-700/40 border-purple-500'
                  : 'bg-zinc-900 border-zinc-800'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{service.name}</h3>

                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <Calendar size={16} />
                    {service.day}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-purple-300 font-medium">
                  <Clock size={16} />
                  {service.time}
                </div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bible Study CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-8 lg:p-10 max-w-3xl mx-auto hover:shadow-lg transition">
            <Users className="mx-auto mb-4 text-purple-400" size={40} />

            <h3 className="text-2xl mb-4">Bible Study & Household Groups</h3>

            <p className="text-zinc-400 mb-6">
              Join one of our household Bible study groups throughout the week.
            </p>

            <a
              href="/life-at-church"
              className="inline-block px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 transition font-medium"
            >
              View Bible Study Schedule
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

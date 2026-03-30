'use client';

import { SecondaryPageLayout } from '../components/page-layout/secondary-page-layout.component';
import Image from 'next/image';
import { Heart, Home, RefreshCw, Users, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  icon: LucideIcon;
  img: string;
};

const projects: Project[] = [
  {
    title: 'K2K – New Church Building',
    description:
      'Our flagship project: raising funds and building a new church space to accommodate our growing congregation and ministries.',
    icon: Home,
    img: 'https://plus.unsplash.com/premium_photo-1726877098040-3745503673b4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Church Renovation',
    description:
      'Upgrade and maintain our current church facilities to provide a welcoming, safe, and functional environment for worship and activities.',
    icon: RefreshCw,
    img: 'https://plus.unsplash.com/premium_photo-1682597000374-9cfb5a0bdf98?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Outreach Fundraising Support',
    description:
      'Support our outreach programs by raising funds to help the community, including local missions, events, and aid for those in need.',
    icon: Users,
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function ProjectsPage() {
  return (
    <SecondaryPageLayout
      headline="Our Projects"
      subheadline="See the initiatives we are passionate about and how you can get involved."
      heroHeight="50vh"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-20">
        {/* K2K Highlight */}
        <motion.div
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={projects[0].img}
            alt={projects[0].title}
            width={1200}
            height={600}
            className="w-full h-[36rem] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end px-4 py-6 lg:p-12">
            {/* Icon */}
            {(() => {
              const K2KIcon = projects[0].icon;
              return <K2KIcon className="w-14 h-14 text-white mb-4" />;
            })()}

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{projects[0].title}</h2>
            <p className="text-white/80 max-w-2xl mb-6">{projects[0].description}</p>

            {/* Call-to-action button */}
            <motion.div
              className="flex flex-row items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 bg-pink-500 border-pink-500 text-white font-semibold cursor-pointer select-none text-sm md:text-base mt-6"
              whileHover={{
                backgroundColor: 'rgba(255,192,203,0.1)',
                color: '#ff80bf',
                textShadow: '0 0 6px rgba(255,192,203,0.6)',
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = '/donate')}
            >
              <Heart className="w-4 h-4 md:w-5 md:h-5" />
              <span>Help Us</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Other projects */}
        <div className="flex flex-col md:flex-row gap-12">
          {projects.slice(1).map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={i}
                className="flex-1 relative rounded-2xl overflow-hidden shadow-lg flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex flex-col gap-4 bg-neutral-900/60">
                  <Icon className="w-10 h-10 text-cyan-400" />
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>

                  {/* Donate button */}
                  <motion.div
                    className="flex flex-row items-center gap-2 px-4 py-2 rounded-lg border-2 border-pink-500 text-pink-400 font-semibold cursor-pointer select-none text-sm md:text-sm mt-4 self-start"
                    whileHover={{
                      backgroundColor: 'rgba(255,192,203,0.1)',
                      color: '#ff80bf',
                      textShadow: '0 0 6px rgba(255,192,203,0.6)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => (window.location.href = '/donate')}
                  >
                    <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    <span>Help Us</span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SecondaryPageLayout>
  );
}

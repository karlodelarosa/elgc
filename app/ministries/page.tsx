'use client';

import { SecondaryPageLayout } from '../components/page-layout/secondary-page-layout.component';
import Image from 'next/image';
import { Music, Image as ImageIcon, Users, BookOpen, Speaker, type LucideIcon } from 'lucide-react';

type Ministry = {
  title: string;
  description: string;
  icon: LucideIcon;
  img: string;
};

const ministries: Ministry[] = [
  {
    title: 'Worship Team',
    description: 'Lead hearts in praise and worship through music and song.',
    icon: Music,
    img: 'https://images.unsplash.com/photo-1611513940806-80d6ed9fd7cc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // placeholder, replace later
  },
  {
    title: 'Creative Arts',
    description: 'Bring visuals and stage design to life with multimedia creativity.',
    icon: ImageIcon,
    img: 'https://plus.unsplash.com/premium_photo-1663040316559-8684ca45d7e9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Ushering & Hospitality',
    description: 'Welcome and guide everyone with a warm heart and smile.',
    icon: Users,
    img: 'https://images.unsplash.com/photo-1560265036-021b3652b490?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Audio Technician',
    description:
      'Ensure clear, high-quality sound during worship and events. Manage microphones, speakers, and mixing boards.',
    icon: Speaker,
    img: 'https://images.unsplash.com/photo-1618609377864-68609b857e90?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // placeholder
  },
  {
    title: 'Teaching Team',
    description: 'Share knowledge and spiritual guidance through teaching.',
    icon: BookOpen,
    img: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?q=80&w=1422&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Outreach & Mission Team',
    description: 'Serve the community and spread God’s love through local and global missions.',
    icon: Users,
    img: 'https://images.unsplash.com/photo-1461532257246-777de18cd58b?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function MinistriesPage() {
  return (
    <SecondaryPageLayout
      headline="Join Our Ministries"
      subheadline="Be part of the work of God. All ministries are open — just reach out to get involved!"
      heroHeight="50vh"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {ministries.map((ministry, i) => {
          const Icon = ministry.icon;
          return (
            <div
              key={i}
              className="bg-neutral-900/50 backdrop-blur-md rounded-3xl overflow-hidden flex flex-col items-center text-center shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                <Image src={ministry.img} alt={ministry.title} fill className="object-cover" />
                {/* Overlay gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col items-center">
                <div className="p-4 mb-4 bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 rounded-full">
                  <Icon className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-2xl font-semibold mb-2">{ministry.title}</h2>
                <p className="text-gray-300">{ministry.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SecondaryPageLayout>
  );
}

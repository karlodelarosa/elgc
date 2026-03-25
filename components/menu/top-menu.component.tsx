'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { HomeIcon, UserIcon, MusicIcon } from 'lucide-react';

import { Brand } from './components/brand.component';
import { EventCTA } from './components/event-cta.component';
import { MenuItem } from './components/menu-item.component';
import { HelpUsButton } from './components/help-us-button.component';

const menuItems = [
  { label: 'Home', icon: HomeIcon },
  { label: 'About', icon: UserIcon },
  { label: 'Music', icon: MusicIcon },
];

export function TopMenu() {
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [showMenu, setShowMenu] = useState(false);

  const nextEvent = {
    title: 'Family Day – June 13',
    countdown: '3 days left!',
  };

  useEffect(() => {
    const onScroll = () => setShowMenu(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    menuRefs.current.forEach((ref, i) => {
      if (!ref) return;
      gsap.fromTo(
        ref,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: i * 0.12, ease: 'back.out(1.6)' },
      );
    });
  }, [showMenu]);

  return (
    <motion.div
      className={`fixed inset-x-0 top-0 z-[999] backdrop-blur-xl bg-black/50 transition-all ${
        showMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: showMenu ? 1 : 0, y: showMenu ? 0 : -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Brand */}
      <Brand />

      {/* Menu wrapper */}
      <div className="mx-auto px-6 py-4 flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row justify-between items-center gap-2 md:gap-2 lg:gap-2 xl:gap-4 2xl:gap-6">
        {/* Left */}
        <EventCTA title={nextEvent.title} countdown={nextEvent.countdown} />

        {/* Right menu */}
        <div className="flex flex-row items-center gap-2 md:gap-3 lg:gap-4">
          {menuItems.map((item, idx) => (
            <MenuItem
              key={item.label}
              label={item.label}
              Icon={item.icon}
              refCallback={(el) => (menuRefs.current[idx] = el)}
            />
          ))}
          <HelpUsButton />
        </div>
      </div>
    </motion.div>
  );
}

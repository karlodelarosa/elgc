'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const [showMenu, setShowMenu] = useState(true);

  const nextEvent = {
    title: 'Family Day – June 13',
    countdown: '3 days left!',
  };

  // useEffect(() => {
  //   const onScroll = () => setShowMenu(window.scrollY > 50);
  //   window.addEventListener('scroll', onScroll);
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, []);

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[999] backdrop-blur-xl bg-black/50 transition-all"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: showMenu ? 1 : 0, y: showMenu ? 0 : -20 }}
      transition={{ duration: 0.2, ease: 'linear' }}
    >
      <Brand />

      <div className="mx-auto px-6 py-4 flex flex-col xl:flex-row justify-between items-center gap-4">

        <EventCTA title={nextEvent.title} countdown={nextEvent.countdown} />

        <div className="flex flex-row items-center gap-4">
          {menuItems.map((item) => (
            <MenuItem key={item.label} label={item.label} Icon={item.icon} />
          ))}
          <HelpUsButton />
        </div>
      </div>
    </motion.div>
  );
}
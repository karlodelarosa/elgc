'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HomeIcon,
  UserIcon,
  MusicIcon,
  MenuIcon,
  CalendarIcon,
  ImageIcon,
  BookIcon,
  UsersIcon,
  LucideIcon,
} from 'lucide-react';

import { Brand } from './components/brand.component';
import { EventCTA } from './components/event-cta.component';
import { MenuItem } from './components/menu-item.component';
import { HelpUsButton } from './components/help-us-button.component';
import { Drawer } from './components/drawer.component';

export interface MenuItemType {
  label: string;
  icon: LucideIcon;
  href?: string;
}

const primaryMenu: MenuItemType[] = [
  { label: 'Home', icon: HomeIcon },
  { label: 'About', icon: UserIcon },
  { label: 'Music', icon: MusicIcon },
];

const drawerMenu: MenuItemType[] = [
  { label: 'Events', icon: CalendarIcon },
  { label: 'Gallery', icon: ImageIcon },
  { label: 'Blog', icon: BookIcon },
  { label: 'Ministries', icon: UsersIcon },
  { label: 'Life Groups', icon: UsersIcon },
  { label: 'Projects', icon: UsersIcon },
];

export function TopMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const nextEvent = {
    title: 'Family Day – June 13',
    countdown: '3 days left!',
  };

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[999] backdrop-blur-xl bg-black/50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Brand />

        <div className="mx-auto px-6 py-4 flex justify-between items-center">
          {/* LEFT */}
          <EventCTA title={nextEvent.title} countdown={nextEvent.countdown} />

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            {primaryMenu.map((item) => (
              <MenuItem key={item.label} label={item.label} Icon={item.icon} />
            ))}

            <HelpUsButton />

            <button
              onClick={() => setDrawerOpen(true)}
              className="p-2 rounded-lg text-slate-900 dark:text-white hover:bg-white/10 transition"
              aria-label="Open navigation drawer"
            >
              <MenuIcon size={22} className="text-inherit" />
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {drawerOpen && <Drawer menu={drawerMenu} onClose={() => setDrawerOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

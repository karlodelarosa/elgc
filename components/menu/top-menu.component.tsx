'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HomeIcon,
  UserIcon,
  MusicIcon,
  CalendarIcon,
  ImageIcon,
  BookIcon,
  UsersIcon,
  LucideIcon,
} from 'lucide-react';

import { Drawer } from './components/drawer.component';
import { MobileMenu } from './components/mobile-menu.component';
import { DesktopMenu } from './components/desktop-menu.component';

export interface MenuItemType {
  label: string;
  icon: LucideIcon;
  href?: string;
}

const primaryMenu: MenuItemType[] = [
  // { label: 'Home', icon: HomeIcon },
  { label: 'About', icon: UserIcon },
  { label: 'Gallery', icon: ImageIcon },
];

const drawerMenu: MenuItemType[] = [
  { label: 'Events', icon: CalendarIcon },
  // { label: 'Music', icon: MusicIcon },
  // { label: 'Blog', icon: BookIcon },
  { label: 'Ministries', icon: UsersIcon },
  { label: 'Life at Church', icon: UsersIcon },
  { label: 'Projects', icon: UsersIcon },
];

export function TopMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollY = useRef(0);
  const targetEventDate = new Date(2026, 5, 13);
  const now = new Date();
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const daysLeft = Math.ceil((targetEventDate.getTime() - now.getTime()) / millisecondsPerDay);

  const nextEvent = {
    title: 'Family Day – June 13',
    countdown:
      daysLeft > 0
        ? `${daysLeft} day${daysLeft === 1 ? '' : 's'} left!`
        : daysLeft === 0
          ? 'Today!'
          : 'Event has passed',
  };

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 0) {
        setIsMenuVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Ignore tiny scroll changes to prevent jittery show/hide transitions.
      if (Math.abs(delta) < 8) {
        return;
      }

      if (delta > 0 && currentScrollY > 80) {
        setIsMenuVisible(false);
      } else if (delta < 0) {
        setIsMenuVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      setIsMenuVisible(true);
    }
  }, [drawerOpen]);

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth < 768);
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const mobileDrawerMenu = [...primaryMenu, ...drawerMenu];
  const activeDrawerMenu = isMobile ? mobileDrawerMenu : drawerMenu;

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[999] backdrop-blur-xl bg-black/50"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMenuVisible ? 1 : 0,
          y: isMenuVisible ? 0 : -110,
        }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      >
        <MobileMenu onOpenDrawer={() => setDrawerOpen(true)} />
        <DesktopMenu
          primaryMenu={primaryMenu}
          eventTitle={nextEvent.title}
          eventCountdown={nextEvent.countdown}
          onOpenDrawer={() => setDrawerOpen(true)}
        />
      </motion.div>

      <AnimatePresence>
        {drawerOpen && <Drawer menu={activeDrawerMenu} onClose={() => setDrawerOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Heart } from 'lucide-react';
import Link from 'next/link';

// TikTok Icon as a React component
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.977,15.532a2.791,2.791,0,0,0,2.791,2.792,2.859,2.859,0,0,0,2.9-2.757L12.7,3h2.578A4.8,4.8,0,0,0,19.7,7.288v2.995h0c-.147.014-.295.022-.443.022a4.8,4.8,0,0,1-4.02-2.172v7.4a5.469,5.469,0,1,1-5.469-5.469c.114,0,.226.01.338.017v2.7a2.909,2.909,0,0,0-.338-.034A2.791,2.791,0,0,0,6.977,15.532Z" />
  </svg>
);

// Your menus
const primaryMenu = [
  { label: 'About', url: '/about' },
  { label: 'Gallery', url: '/gallery' },
];

const drawerMenu = [
  { label: 'Events', url: '/events' },
  { label: 'Ministries', url: '/ministries' },
  { label: 'Life at Church', url: '/life-at-church' },
  { label: 'Projects', url: '/projects' },
];

// Socials (with TikTok instead of Twitter)
const socialLinks = [
  { icon: Facebook, url: 'https://www.facebook.com/elgchurchofficial/' },
  { icon: Instagram, url: 'https://www.instagram.com/elgc.official/' },
  { icon: TikTokIcon, url: 'https://www.tiktok.com/@elgchurch' },
];

export function Footer() {
  return (
    <footer className="relative bg-black/50 backdrop-blur-lg text-white py-16 px-6">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-purple-500/20 via-pink-400/20 to-cyan-400/20 filter blur-3xl animate-animate-slow" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-pink-500/20 via-purple-400/20 to-cyan-400/20 filter blur-3xl animate-animate-slow" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Column 1: Logo / Church Info */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            ELGC
          </h2>
          <p className="text-gray-300 text-sm">
            Emmanuel's Living Gospel Church
            <br />
            1948 Saint Joseph Avenue, Caloocan, Metro Manila
          </p>
          <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400 text-sm">
            <MapPin size={18} /> Sunday Worship — 9:00 AM
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400 text-sm">
            <Mail size={18} /> elgcchurch@gmail.com
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400 text-sm">
            <Phone size={18} /> +63 919 061 8179
          </div>
        </div>

        {/* Column 2: Primary Menu */}
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-lg font-semibold text-pink-400">Quick Links</h3>
          <ul className="space-y-1">
            {primaryMenu.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.url}
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Drawer Menu / Ministries */}
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-lg font-semibold text-pink-400">Explore</h3>
          <ul className="space-y-1">
            {drawerMenu.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.url}
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Social + Newsletter */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-lg font-semibold text-pink-400">Connect With Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            {socialLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Emmanuel's Living Gospel Church. All rights reserved.
      </div>
    </footer>
  );
}

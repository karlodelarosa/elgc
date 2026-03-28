'use client';

import { motion } from 'framer-motion';
import { X as XIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export interface MenuItemType {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  url?: string; // added optional url
}

interface DrawerProps {
  menu: MenuItemType[];
  onClose: () => void;
}

export function Drawer({ menu, onClose }: DrawerProps) {
  const router = useRouter();

  const handleNavigate = (url?: string) => {
    if (url) {
      router.push(url);
      onClose(); // close drawer after navigation
    }
  };

  return (
    <>
      {/* Background Overlay */}
      <motion.button
        aria-label="Close menu"
        className="fixed left-0 right-0 bottom-0 top-[68px] md:top-[104px] xl:top-[88px] z-[998] bg-black/15"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <motion.div
        className="fixed right-0 top-[68px] md:top-[104px] xl:top-[88px] h-[calc(100vh-68px)] md:h-[calc(100vh-104px)] xl:h-[calc(100vh-88px)] w-[320px] z-[999] p-8 flex flex-col border-l border-white/15 backdrop-blur-2xl bg-white/5 text-white shadow-[0_0_35px_rgba(0,0,0,0.45)]"
        initial={{ x: 340, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 340, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 240, damping: 24 }}
      >
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(244,114,182,0.22),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.22),transparent_45%)]" />

        {/* Header */}
        <div className="relative flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold tracking-wide bg-gradient-to-r from-pink-300 via-fuchsia-200 to-indigo-200 bg-clip-text text-transparent">
            Explore
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-white/90 hover:bg-white/10 hover:text-white transition"
          >
            <XIcon />
          </button>
        </div>

        {/* Menu items */}
        <div className="relative flex flex-col gap-2">
          {menu.map((item, index) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-3 cursor-pointer text-white/90 hover:text-white transition text-base font-medium rounded-xl px-3 py-2 hover:bg-white/10"
              initial={{ x: 14, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.05 * index, duration: 0.25 }}
              whileHover={{ x: 3 }}
              onClick={() => handleNavigate(item.url)}
            >
              <item.icon className="h-5 w-5 text-pink-200" />
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-auto pt-8 relative">
          <button
            onClick={() => router.push('/donate')}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-fuchsia-500/70 to-indigo-500/70 text-white font-semibold border border-white/20 hover:from-fuchsia-500/90 hover:to-indigo-500/90 transition"
          >
            Help Us Build
          </button>
        </div>
      </motion.div>
    </>
  );
}

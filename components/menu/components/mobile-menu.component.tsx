'use client';

import Link from 'next/link';
import { MenuIcon } from 'lucide-react';

type MobileMenuProps = {
  onOpenDrawer: () => void;
};

export function MobileMenu({ onOpenDrawer }: MobileMenuProps) {
  return (
    <div className="mx-auto px-6 py-4 flex items-center justify-between md:hidden">
      <Link href="/" className="text-sm tracking-[.50em] uppercase font-bold text-cyan-200">
        ELGC
      </Link>

      <button
        onClick={onOpenDrawer}
        className="p-2 rounded-lg text-slate-900 dark:text-white hover:bg-white/10 transition"
        aria-label="Open navigation drawer"
      >
        <MenuIcon size={22} className="text-inherit" />
      </button>
    </div>
  );
}

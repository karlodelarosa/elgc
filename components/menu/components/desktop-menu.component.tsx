'use client';

import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { Brand } from './brand.component';
import { EventCTA } from './event-cta.component';
import { HelpUsButton } from './help-us-button.component';
import type { MenuItemType } from '../top-menu.component';

type DesktopMenuProps = {
  primaryMenu: MenuItemType[];
  eventTitle: string;
  eventCountdown: string;
  onOpenDrawer: () => void;
};

export function DesktopMenu({
  primaryMenu,
  eventTitle,
  eventCountdown,
  onOpenDrawer,
}: DesktopMenuProps) {
  return (
    <>
      <div className="hidden md:block">
        <Brand />
      </div>

      <div className="mx-auto px-6 py-4 hidden md:flex justify-between items-center">
        <EventCTA title={eventTitle} countdown={eventCountdown} />

        <div className="flex items-center gap-4">
          {primaryMenu.map((item) => (
            <Link
              key={item.label}
              href={item.url ?? '#'}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition"
            >
              <item.icon className="w-5 h-5 text-pink-200" />
              <span>{item.label}</span>
            </Link>
          ))}

          <HelpUsButton />

          <button
            onClick={onOpenDrawer}
            className="p-2 rounded-lg text-slate-900 dark:text-white hover:bg-white/10 transition"
            aria-label="Open navigation drawer"
          >
            <MenuIcon size={22} className="text-inherit" />
          </button>
        </div>
      </div>
    </>
  );
}

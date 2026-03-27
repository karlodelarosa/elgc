'use client';

import { MenuIcon } from 'lucide-react';
import { Brand } from './brand.component';
import { EventCTA } from './event-cta.component';
import { MenuItem } from './menu-item.component';
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
            <MenuItem key={item.label} label={item.label} Icon={item.icon} />
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

'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

export type BrandProps = {
  className?: string;
};

export function Brand({ className }: BrandProps) {
  return (
    <Link href="/">
      {/* Mobile/Tablet */}
      <div className={cn('pt-3 text-center xl:hidden', className)}>
        <h1 className="text-sm md:text-base tracking-[.50em] uppercase font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
          <span className="lg:hidden">ELGC</span>
          <span className="hidden lg:inline">Emmanuel&apos;s Living Gospel Church</span>
        </h1>
      </div>

      {/* Desktop XL+ */}
      <div
        className={cn(
          'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center',
          className,
        )}
      >
        <h1 className="text-sm md:text-base tracking-[.50em] uppercase font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
          <span className="hidden xl:inline 2xl:hidden">ELGC</span>
          <span className="hidden 2xl:inline">Emmanuel&apos;s Living Gospel Church</span>
        </h1>
      </div>
    </Link>
  );
}

import React from 'react';
import { cn } from '@/lib/utils'; // optional if you use a cn utility

import { JSX } from 'react';

interface AnimatedHeadingProps {
  children: React.ReactNode;
  headingAs?: keyof JSX.IntrinsicElements;
  className?: string;
  asChild?: boolean;
}

export const GradientHeading = ({
  children,
  headingAs = 'h2',
  className,
}: AnimatedHeadingProps) => {
  const Comp: any = headingAs;

  return (
    <Comp
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent animate-gradient',
        'from-pink-400 via-purple-400 to-cyan-400',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

import { ReactNode, ElementType } from 'react';
import { cn } from '@/lib/utils';

interface GradientHeadingProps {
  children: ReactNode;
  headingAs?: ElementType;
  className?: string;
}

export const GradientHeading = ({
  children,
  headingAs: Comp = 'h2',
  className,
}: GradientHeadingProps) => {
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

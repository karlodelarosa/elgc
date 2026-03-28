'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
  className?: string;
}

export function ImageWithFallback({ src, alt, className, ...rest }: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);

  const handleError = () => setDidError(true);

  // separate out `fill` so it doesn't get passed to DOM on fallback
  const { fill, ...imgProps } = rest;

  return didError ? (
    <div
      className={`relative w-full h-full bg-gray-100 flex items-center justify-center ${className}`}
    >
      <img src={ERROR_IMG_SRC} alt="Error loading image" className="w-20 h-20 object-contain" />
    </div>
  ) : fill ? (
    <div className={`relative w-full h-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        onError={handleError}
        {...imgProps}
        className="object-cover"
      />
    </div>
  ) : (
    <Image
      src={src}
      alt={alt}
      onError={handleError}
      className={`object-cover ${className}`}
      {...imgProps}
    />
  );
}

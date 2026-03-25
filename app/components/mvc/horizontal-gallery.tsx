'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  // Repeat lots of images for testing
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80',
  'https://images.unsplash.com/photo-1523978591478-c753949ff840?w=800&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80',
  'https://images.unsplash.com/photo-1523978591478-c753949ff840?w=500&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80',
  'https://images.unsplash.com/photo-1523978591478-c753949ff840?w=800&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80',
  'https://images.unsplash.com/photo-1523978591478-c753949ff840?w=500&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80',
  'https://images.unsplash.com/photo-1523978591478-c753949ff840?w=800&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80',
  'https://images.unsplash.com/photo-1523978591478-c753949ff840?w=500&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80',
  'https://images.unsplash.com/photo-1523978591478-c753949ff840?w=800&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80',
  'https://images.unsplash.com/photo-1523978591478-c753949ff840?w=500&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80',

  // copy 3 times
  ...Array(20).fill('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80'),
];

const COLUMNS = 4;

export default function HorizontalMasonryGSAP() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Split images into masonry columns
  const columns = Array.from({ length: COLUMNS }, () => []);
  IMAGES.forEach((img, i) => columns[i % COLUMNS].push(img));

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper) return;

    let totalWidth = wrapper.scrollWidth;

    gsap.to(wrapper, {
      x: -(totalWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-neutral-900">
      <div
        ref={wrapperRef}
        className="absolute top-0 left-0 flex gap-8 p-16"
        style={{
          height: '100vh',
        }}
      >
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-6">
            {col.map((src, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={src}
                  width={500}
                  height={700}
                  className="rounded-xl object-cover"
                  alt="masonry"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageWithFallback } from '../ui/image-with-fallback/image-with-fallback';

gsap.registerPlugin(ScrollTrigger);

export function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const horizontalSection = horizontalRef.current;
      if (!horizontalSection) return;

      const images = gsap.utils.toArray('.gallery-image');

      gsap.to(images, {
        xPercent: -100 * (images.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (images.length - 1),
          end: () => '+=' + horizontalSection.offsetWidth,
        },
      });

      images.forEach((img: any, index) => {
        gsap.from(img, {
          scrollTrigger: {
            trigger: img,
            containerAnimation: ScrollTrigger.getById('gallery-scroll'),
            start: 'left right',
            end: 'right left',
            scrub: true,
          },
          clipPath: 'inset(100% 0% 0% 0%)',
        });

        gsap.fromTo(
          img.querySelector('img'),
          { scale: 1.5 },
          {
            scale: 1,
            scrollTrigger: {
              trigger: img,
              containerAnimation: ScrollTrigger.getById('gallery-scroll'),
              start: 'left right',
              end: 'right left',
              scrub: true,
            },
          }
        );
      });

      gsap.to('.gallery-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
        },
        x: -200,
        opacity: 0,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const images = [
    { url: 'https://images.unsplash.com/photo-1729089049653-24312fdca908?q=80&w=1080', title: 'Worship Experience' },
    { url: 'https://images.unsplash.com/photo-1667068114532-97a1ce6d0a52?q=80&w=1080', title: 'Prayer Meeting' },
    { url: 'https://images.unsplash.com/photo-1760319726429-fcda77d3cb05?q=80&w=1080', title: 'Community' },
    { url: 'https://images.unsplash.com/photo-1550541231-56ddb7f844ec?q=80&w=1080', title: 'Fellowship' },
    { url: 'https://images.unsplash.com/photo-1681992155294-278fd9357c84?q=80&w=1080', title: 'Events' },
  ];

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative h-screen bg-black overflow-hidden"
    >
      {/* Background blobs only */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-24 right-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Title */}
      <div className="absolute top-32 left-12 z-20">
        <h2 className="gallery-title pl-32 text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
          Our Moments
        </h2>
        <p className="text-2xl text-zinc-400 mt-4">Scroll horizontally →</p>
      </div>

      {/* Horizontal images */}
      <div ref={horizontalRef} className="flex h-full items-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-image flex-shrink-0 w-screen h-screen px-12 flex items-center justify-center"
          >
            <div className="relative w-full max-w-5xl h-[70vh] rounded-3xl overflow-hidden">
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12">
                <h3 className="text-6xl bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  {image.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-12 right-12 text-zinc-500 text-lg">
        Horizontal Scroll Gallery
      </div>
    </section>
  );
}
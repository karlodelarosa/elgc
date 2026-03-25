import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.headline', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.headline',
          start: 'top 80%',
          end: 'bottom 50%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.image-stack div', {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.image-stack',
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const posters = ['/poster1.jpg', '/poster2.jpg', '/poster3.jpg'];

  return (
    <section ref={sectionRef} className="py-32 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="headline text-4xl font-bold mb-8">Discover Your Story</h2>

        <div className="image-stack grid grid-cols-1 md:grid-cols-3 gap-8">
          {posters.map((src, idx) => (
            <div key={idx} className="relative w-full h-80">
              <Image
                src={src}
                alt={`Poster ${idx + 1}`}
                fill
                className="object-cover rounded-lg"
                priority={idx === 0} // optional: prioritize first image for faster LCP
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

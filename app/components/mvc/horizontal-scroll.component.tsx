'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const slidesData = [
  {
    title: 'Project Alpha',
    description:
      'The initial concept and discovery phase. Laying the foundational structure for success.',
  },
  {
    title: 'Phase Two Beta',
    description:
      "Development and iteration in progress. We're refining the user experience and core features.",
  },
  {
    title: 'Final Launch Gamma',
    description:
      'Ready for deployment! The culmination of months of hard work, now live for the world to see.',
  },
];

const HorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const pusherRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const setupGSAP = () => {
      const container = containerRef.current;
      const slides = sectionRefs.current.filter((el): el is HTMLDivElement => Boolean(el));
      const pusher = pusherRef.current;

      if (!container || slides.length === 0 || !pusher) return;

      const totalScrollWidth = slides.reduce((acc, slide) => acc + slide.offsetWidth, 0);
      const totalScrollDistance = totalScrollWidth - window.innerWidth;
      if (totalScrollDistance <= 0) return;

      const SCROLL_SPEED_MULTIPLIER = 1.5;
      const TOTAL_END_DISTANCE = totalScrollDistance * SCROLL_SPEED_MULTIPLIER;

      pusher.style.height = `${TOTAL_END_DISTANCE}px`;

      const horizontalScroll = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 0.5,
          start: 'top top',
          end: `+=${TOTAL_END_DISTANCE}`,
        },
      });

      horizontalScroll.to(container, { x: -totalScrollDistance, ease: 'none' }, 0);
      horizontalScroll.to(glowRef.current, { x: 500, ease: 'none' }, 0);

      slides.forEach((slide) => {
        const title = slide.querySelector('h2');
        const desc = slide.querySelector('p');
        if (!title || !desc) return;

        const slideStartPos = slide.offsetLeft;
        const timelineStart = slideStartPos / totalScrollDistance;
        const timelineEnd = (slideStartPos + window.innerWidth) / totalScrollDistance;

        gsap.set(title, { x: 150 });
        gsap.set(desc, { x: 50 });

        horizontalScroll.fromTo(
          title,
          { x: 150, opacity: 0.5 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          timelineStart,
        );
        horizontalScroll.fromTo(
          desc,
          { x: 50, opacity: 0.5 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          timelineStart,
        );
        horizontalScroll.to(title, { x: -150, opacity: 0.5, ease: 'power2.in' }, timelineEnd);
        horizontalScroll.to(desc, { x: -50, opacity: 0.5, ease: 'power2.in' }, timelineEnd);
      });

      return () => {
        horizontalScroll.scrollTrigger?.kill();
      };
    };

    const timer = setTimeout(setupGSAP, 0);
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="horizontal-scroll-wrapper">
      <section ref={containerRef} className="horizontal-container">
        <div ref={glowRef} className="background-glow" />
        {slidesData.map((slide, index) => (
          <div
            key={index}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="slide"
          >
            <div className="content-box">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </section>
      <div ref={pusherRef} className="pusher-section" />
    </div>
  );
};

export default HorizontalScroll;

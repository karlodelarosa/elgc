import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contentSections = [
  {
    title: 'Rooted in Scripture',
    description:
      'Our foundation is built on the living Word of God, guiding our community, worship, and service.',
    color: '#a855f7',
  },
  {
    title: 'Empowered by Prayer',
    description:
      'We believe in the transformative power of communication with God, lifting our needs and gratitude to Him.',
    color: '#f97316',
  },
  {
    title: 'Community & Fellowship',
    description:
      'Finding strength in unity. We are a family called to encourage, support, and grow together in faith.',
    color: '#2ccedd',
  },
  {
    title: 'Mission & Outreach',
    description:
      'Called to serve. We actively extend God’s love and grace to our neighbors, locally and globally.',
    color: '#ef4444',
  },
];

const ScrollRotate = () => {
  const mainSectionRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const centerCoreRef = useRef<HTMLDivElement>(null);

  const numSections = contentSections.length;
  const SCROLL_SPEED_MULTIPLIER = 2.0;
  const totalScrollDistanceVH = numSections * 100 * SCROLL_SPEED_MULTIPLIER;
  const contentTravel = (numSections - 1) * 100;

  useEffect(() => {
    // Client-only check
    if (typeof window === 'undefined') return;

    // Kill previous ScrollTriggers to avoid duplicates
    ScrollTrigger.getAll().forEach((t) => t.kill());

    if (!mainSectionRef.current || !contentWrapperRef.current || !centerCoreRef.current) {
      return;
    }

    const mainSection = mainSectionRef.current;
    const contentWrapper = contentWrapperRef.current;
    const centerCore = centerCoreRef.current;

    const items = gsap.utils.toArray<HTMLElement>(contentWrapper.children);

    const allTextElements = gsap.utils.toArray([
      ...items.map((item) => item.querySelector('h2')),
      ...items.map((item) => item.querySelector('p')),
    ]);

    const masterScroll = gsap.timeline({
      scrollTrigger: {
        trigger: mainSection,
        pin: true,
        scrub: 0.5,
        start: 'top top',
        end: `+=${totalScrollDistanceVH}vh`,
      },
    });

    // --- Background & Text Color Animations ---
    masterScroll.to(
      mainSection,
      {
        backgroundColor: '#f5f5f5',
        boxShadow: '0 0 200px 50px rgba(255, 255, 200, 0.8) inset',
        duration: 0.1,
        ease: 'power2.in',
      },
      0,
    );

    masterScroll.to(
      centerCore,
      {
        color: '#222222',
        textShadow: '0 0 0px rgba(0,0,0,0)',
        duration: 0.1,
        ease: 'power2.in',
      },
      0,
    );

    masterScroll.to(
      allTextElements,
      {
        color: '#222222',
        duration: 0.1,
        ease: 'power2.in',
      },
      0,
    );

    // Stage 2 & 3: Glow shift
    masterScroll.to(
      mainSection,
      {
        boxShadow: '0 0 200px 50px rgba(44, 206, 221, 0.4) inset',
        duration: 0.5,
        ease: 'power1.inOut',
      },
      0.1,
    );

    masterScroll.to(
      mainSection,
      {
        boxShadow: '0 0 200px 50px rgba(249, 115, 22, 0.4) inset',
        duration: 0.4,
        ease: 'power2.out',
      },
      0.6,
    );

    // Content vertical slide
    masterScroll.to(
      contentWrapper,
      {
        y: `-${contentTravel}vh`,
        ease: 'none',
      },
      0,
    );

    // Individual item animations
    items.forEach((item, index) => {
      const segmentStart = index / numSections;
      const segmentEnd = (index + 1) / numSections;

      const title = item.querySelector('h2') as HTMLElement | null;
      const description = item.querySelector('p') as HTMLElement | null;

      const TITLE_PARALLAX_X = 100;
      const DESCRIPTION_PARALLAX_X = 50;

      // Animate item itself
      masterScroll.fromTo(
        item,
        { opacity: 0.3, y: '10vh' },
        { opacity: 1, y: '0vh', duration: 0.05, ease: 'power2.out' },
        segmentStart,
      );

      if (title) {
        masterScroll.fromTo(
          title,
          { x: TITLE_PARALLAX_X },
          { x: 0, duration: 0.05, ease: 'power2.out' },
          segmentStart,
        );
      }

      if (description) {
        masterScroll.fromTo(
          description,
          { x: DESCRIPTION_PARALLAX_X },
          { x: 0, duration: 0.05, ease: 'power2.out' },
          segmentStart,
        );
      }

      // Exit animations
      masterScroll.to(
        item,
        { opacity: 0.3, y: '-10vh', duration: 0.05, ease: 'power2.in' },
        segmentEnd - 0.05,
      );

      if (title) {
        masterScroll.to(
          title,
          { x: TITLE_PARALLAX_X * 2, duration: 0.05, ease: 'power2.in' },
          segmentEnd - 0.05,
        );
      }

      if (description) {
        masterScroll.to(
          description,
          { x: DESCRIPTION_PARALLAX_X * 2, duration: 0.05, ease: 'power2.in' },
          segmentEnd - 0.05,
        );
      }
    });

    return () => {
      masterScroll.scrollTrigger?.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [totalScrollDistanceVH, contentTravel, numSections]);

  return (
    <div className="scroll-rotate-wrapper">
      <section ref={mainSectionRef} className="pin-section">
        <div className="center-wrapper">
          <div ref={centerCoreRef} className="center-core">
            Divine
            <br />
            Guidance
          </div>
        </div>

        <div className="scrolling-content-container">
          <div ref={contentWrapperRef} className="content-wrapper">
            {contentSections.map((section, index) => (
              <div key={`scroll-item-${index}`} className="content-item">
                <div className="content-card">
                  <span style={{ color: section.color }}>{`0${index + 1}`}</span>
                  <h2>{section.title}</h2>
                  <p className="description-text-white">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollRotate;

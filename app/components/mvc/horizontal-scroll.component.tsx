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
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const glowRef = useRef(null);
  const pusherRef = useRef(null);

  useEffect(() => {
    // 1. Initial cleanup
    ScrollTrigger.getAll().forEach((t) => t.kill());

    // Defer the main logic until the DOM has rendered all slides and calculated their width.
    const setupGSAP = () => {
      const container = containerRef.current;
      const slides = sectionRefs.current.filter(Boolean); // Filter out any null refs
      const pusher = pusherRef.current;

      if (!container || slides.length === 0 || !pusher) {
        console.warn('GSAP setup failed: Missing references.');
        return;
      }

      // Calculate the total width of all slides (Slides.length * 100vw)
      const containerScrollWidth = slides.reduce((acc, slide) => acc + slide.offsetWidth, 0);

      // The distance the container needs to move is:
      // Total Width - One Viewport Width (since the last slide only needs to align its right edge)
      const totalScrollDistance = containerScrollWidth - window.innerWidth;

      if (totalScrollDistance <= 0) {
        console.warn('Total scroll distance is zero or negative. Check slide width calculations.');
        return;
      }

      // 2. Control Scroll Speed and Pusher Height
      const SCROLL_SPEED_MULTIPLIER = 1.5;
      const TOTAL_END_DISTANCE = totalScrollDistance * SCROLL_SPEED_MULTIPLIER;

      // *** FIX 1: Set the pusher height (in pixels) to enable vertical scroll ***
      pusher.style.height = `${TOTAL_END_DISTANCE}px`;

      // 3. Main Horizontal ScrollTimeline
      const horizontalScroll = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 0.5,
          start: 'top top',
          // The trigger end distance must match the pusher height
          end: `+=${TOTAL_END_DISTANCE}`,
        },
      });

      // Animate the Container Translation across the timeline
      horizontalScroll.to(
        container,
        {
          x: -totalScrollDistance, // The actual movement distance
          ease: 'none',
        },
        0,
      );

      // 4. Background Glow Animation
      const GLOW_TRAVEL_DISTANCE = 500;

      horizontalScroll.to(
        glowRef.current,
        {
          x: GLOW_TRAVEL_DISTANCE,
          ease: 'none',
        },
        0,
      );

      // 5. Inner Parallax Effect
      slides.forEach((slide) => {
        const title = slide.querySelector('h2');
        const description = slide.querySelector('p');

        const slideStartPos = slide.offsetLeft;

        // Calculate the start/end ratio based on the total *movement* distance
        const timelineStart = slideStartPos / totalScrollDistance;
        const timelineEnd = (slideStartPos + window.innerWidth) / totalScrollDistance;

        const TITLE_PARALLAX_X = 150;
        const DESCRIPTION_PARALLAX_X = 50;

        // Ensure initial positions are set BEFORE the timeline starts
        gsap.set(title, { x: TITLE_PARALLAX_X });
        gsap.set(description, { x: DESCRIPTION_PARALLAX_X });

        // ITEM ENTERING: Parallax Leftward into place (x: 0)
        horizontalScroll.fromTo(
          title,
          { x: TITLE_PARALLAX_X, opacity: 0.5 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          timelineStart,
        );
        horizontalScroll.fromTo(
          description,
          { x: DESCRIPTION_PARALLAX_X, opacity: 0.5 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          timelineStart,
        );

        // ITEM EXITING: Parallax Rightward out of place (x: -X)
        horizontalScroll.to(
          title,
          { x: -TITLE_PARALLAX_X, opacity: 0.5, ease: 'power2.in' },
          timelineEnd,
        );
        horizontalScroll.to(
          description,
          { x: -DESCRIPTION_PARALLAX_X, opacity: 0.5, ease: 'power2.in' },
          timelineEnd,
        );
      });

      // Cleanup function to kill the trigger when component unmounts
      return () => {
        horizontalScroll.scrollTrigger?.kill();
      };
    }; // End of setupGSAP function

    // *** FIX 2: Defer execution to ensure DOM measurements are accurate ***
    const timer = setTimeout(setupGSAP, 0);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="horizontal-scroll-wrapper">
      <section ref={containerRef} className="horizontal-container">
        {/* The Subtly Animated Background Glow Element */}
        <div ref={glowRef} className="background-glow" />

        {slidesData.map((slide, index) => (
          <div key={index} ref={(el) => (sectionRefs.current[index] = el)} className="slide">
            <div className="content-box">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </section>
      {/* *** The Pusher Section uses the ref *** */}
      <div ref={pusherRef} className="pusher-section" />
    </div>
  );
};

export default HorizontalScroll;

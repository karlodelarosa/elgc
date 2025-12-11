import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contentSections = [
  { 
    title: "Rooted in Scripture", 
    description: "Our foundation is built on the living Word of God, guiding our community, worship, and service.",
    color: '#a855f7' 
  },
  { 
    title: "Empowered by Prayer", 
    description: "We believe in the transformative power of communication with God, lifting our needs and gratitude to Him.",
    color: '#f97316' 
  },
  { 
    title: "Community & Fellowship", 
    description: "Finding strength in unity. We are a family called to encourage, support, and grow together in faith.",
    color: '#2ccedd' 
  },
  { 
    title: "Mission & Outreach", 
    description: "Called to serve. We actively extend God’s love and grace to our neighbors, locally and globally.",
    color: '#ef4444' 
  },
];

const ScrollRotate = () => {
  const mainSectionRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const centerCoreRef = useRef(null); // *** NEW REF for Center Core Text ***

  const numSections = contentSections.length;
  const SCROLL_SPEED_MULTIPLIER = 2.0; 
  const totalScrollDistanceVH = numSections * 100 * SCROLL_SPEED_MULTIPLIER; 
  const contentTravel = (numSections - 1) * 100; 

  useEffect(() => {
    ScrollTrigger.getAll().forEach(t => t.kill());

    if (!mainSectionRef.current || !contentWrapperRef.current || !centerCoreRef.current) {
        return;
    }

    const mainSection = mainSectionRef.current;
    const contentWrapper = contentWrapperRef.current;
    const centerCore = centerCoreRef.current; // Get the center core element
    const items = gsap.utils.toArray(contentWrapper.children); 

    // Find all dynamic text elements within the scrolling content for color inversion
    const allTextElements = gsap.utils.toArray([
        ...items.map(item => item.querySelector('h2')),
        ...items.map(item => item.querySelector('p'))
    ]);


    // --- Master ScrollTimeline ---
    const masterScroll = gsap.timeline({
      scrollTrigger: {
        trigger: mainSection,
        pin: true,
        scrub: 0.5, 
        start: "top top", 
        end: `+=${totalScrollDistanceVH}vh`, 
      }
    });

    // 1. INVERSION ANIMATION (Background & Text Colors)
    
    // A. Background Inversion (Fast initial transition to white/light)
    masterScroll.to(mainSection, {
        backgroundColor: "#f5f5f5", // Light Off-White
        boxShadow: "0 0 200px 50px rgba(255, 255, 200, 0.8) inset", // Inner glow for luminous feel
        duration: 0.1, 
        ease: "power2.in"
    }, 0); 

    // B. Text Inversion (Simultaneously switch text to dark gray/black)
    // Darken the fixed center core text
    masterScroll.to(centerCore, {
        color: "#222222", // Dark Gray/Black
        textShadow: "0 0 0px rgba(0, 0, 0, 0)", // Remove glow effect
        duration: 0.1, 
        ease: "power2.in"
    }, 0); 
    
    // Darken the scrolling content text
    masterScroll.to(allTextElements, {
        color: "#222222", 
        duration: 0.1, 
        ease: "power2.in"
    }, 0); 

    // 2. STAGE 2 & 3: Maintain the light background but shift the hue/shadow for visual interest
    
    // Stage 2: Subtle shift towards Cyan/Blue shadow (0.1 to 0.6)
    masterScroll.to(mainSection, {
        boxShadow: "0 0 200px 50px rgba(44, 206, 221, 0.4) inset", // Cyan/Blue glow
        duration: 0.5, 
        ease: "power1.inOut"
    }, 0.1); 
    
    // Stage 3: Subtle shift towards Gold/Orange shadow (0.6 to 1.0)
    masterScroll.to(mainSection, {
        boxShadow: "0 0 200px 50px rgba(249, 115, 22, 0.4) inset", // Gold/Orange glow
        duration: 0.4, 
        ease: "power2.out"
    }, 0.6); 


    // 3. CONTENT MOVEMENT (Vertical Slide of the wrapper)
    masterScroll.to(contentWrapper, {
      y: `-${contentTravel}vh`, 
      ease: "none"
    }, 0);


    // 4. ITEM ANIMATIONS (Opacity and Parallax) - Parallax logic remains correct
    items.forEach((item, index) => {
        const segmentStart = index / numSections; 
        const segmentEnd = (index + 1) / numSections;
        
        const title = item.querySelector('h2');
        const description = item.querySelector('p');

        const TITLE_PARALLAX_X = 100; 
        const DESCRIPTION_PARALLAX_X = 50; 
        
        // ITEM ENTERING: Fade In, Parallax Leftward into place (x: 0)
        masterScroll.fromTo(item, 
            { opacity: 0.3, y: '10vh' }, 
            { opacity: 1, y: '0vh', duration: 0.05, ease: 'power2.out' }, 
            segmentStart
        );
        masterScroll.fromTo(title, { x: TITLE_PARALLAX_X }, { x: 0, duration: 0.05, ease: 'power2.out' }, segmentStart);
        masterScroll.fromTo(description, { x: DESCRIPTION_PARALLAX_X }, { x: 0, duration: 0.05, ease: 'power2.out' }, segmentStart);
        
        // ITEM EXITING: Fade Out, Parallax Rightward out of place (x: +X)
        masterScroll.to(item, 
            { opacity: 0.3, y: '-10vh', duration: 0.05, ease: 'power2.in' }, 
            segmentEnd - 0.05 
        );
        masterScroll.to(title, { x: TITLE_PARALLAX_X * 2, duration: 0.05, ease: 'power2.in' }, segmentEnd - 0.05);
        masterScroll.to(description, { x: DESCRIPTION_PARALLAX_X * 2, duration: 0.05, ease: 'power2.in' }, segmentEnd - 0.05);
    });

    // Cleanup
    return () => {
        masterScroll.scrollTrigger?.kill();
        ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [totalScrollDistanceVH]); 

  return (
    <div className="scroll-rotate-wrapper">
      <section ref={mainSectionRef} className="pin-section">
        
        {/* Fixed Center Title (Adding ref) */}
        <div className="center-wrapper">
          <div ref={centerCoreRef} className="center-core">
            Divine<br/>Guidance
          </div>
        </div>

        {/* Scrolling Text Content */}
        <div className="scrolling-content-container">
            <div ref={contentWrapperRef} className="content-wrapper">
              {contentSections.map((section, index) => (
                <div key={index} className="content-item">
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
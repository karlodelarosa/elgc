'use client';

import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GradientHeading } from '@/components/heading-gradient/index'; // Assuming this path is correct

// 1. Framer Motion Helper: Parallax transform
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// 2. Data Structure
const sectionData = [
  {
    title: 'MISSION',
    content:
      'To empower individuals and organizations through innovative technology solutions, driving meaningful change globally.',
  },
  {
    title: 'VISION',
    content:
      'To be the leading catalyst for digital transformation, creating a smarter, more connected and sustainable future for all.',
  },
  {
    title: 'CORE VALUES',
    content:
      'INTEGRITY: Acting with honor and strong moral principles. \nCOLLABORATION: Succeeding together by pushing boundaries. \nEXCELLENCE: Achieving the highest quality in every endeavor.',
  },
];

// 3. Section Component with Dual-Speed Parallax
function MvCItem({ title, content, index }: { title: string; content: string; index: number }) {
  const ref = useRef(null);

  // Get scroll progress specific to this section's visibility
  const { scrollYProgress } = useScroll({
    target: ref,
    // Track the full scroll past the section
    offset: ['start end', 'end start'],
  });

  // --- Dual-Speed Parallax Effects ---
  // The reduced distance (e.g., 120vh item height) means the parallax needs to be more aggressive

  // 1. Title Effect (Slower/Opposite Direction) - Less aggressive movement
  const titleY = useParallax(scrollYProgress, index % 2 === 0 ? 100 : -100);

  // 2. Content Effect (Faster/Same Direction) - More aggressive movement
  const contentY = useParallax(scrollYProgress, index % 2 === 0 ? -350 : 350);

  // Opacity for the entire block (fades it in and out quickly)
  // Adjusting the fade range for the tighter scroll: [start fade, full opaque, end fade]
  const opacity = useTransform(scrollYProgress, [0.05, 0.45, 0.95], [0, 1, 0]);

  return (
    // Reduced height creates a much smaller gap between sections
    <section ref={ref} className="mvc-section-item">
      <motion.div className="section-content-container" style={{ opacity }}>
        {/* Title moves slower/differently, using GradientHeading */}
        <motion.div style={{ y: titleY }} className="title-wrapper">
          <GradientHeading
            headingAs="h2"
            className="text-8xl lg:text-[10rem] font-extrabold tracking-tighter"
          >
            {title}
          </GradientHeading>
        </motion.div>

        {/* Content moves faster/differently */}
        <motion.div className="content-block" style={{ y: contentY }}>
          {content.split('\n').map((line, i) => (
            <p key={i} className="content">
              {line}
            </p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// 4. Main Component
export default function MvCSection() {
  const sectionCount = sectionData.length;
  // Set a moderate height (e.g., 150vh per item)
  const itemHeightVH = 150;
  const totalScrollHeight = `${sectionCount * itemHeightVH}vh`;

  return (
    <div
      id="mvc-parallax-section"
      className="bg-[#0a0a0a] bg-[radial-gradient(ellipse_at_top,_var(--tw-color-purple-950)_10%,_transparent_70%)] text-white relative"
    >
      <h1 className="section-header">Our Foundation</h1>

      {/* Div to provide the necessary vertical scroll space */}
      <div style={{ height: totalScrollHeight }}>
        {sectionData.map((data, index) => (
          <MvCItem key={data.title} title={data.title} content={data.content} index={index} />
        ))}
      </div>

      <StyleSheet itemHeightVH={itemHeightVH} />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */

function StyleSheet({ itemHeightVH }: { itemHeightVH: number }) {
  return (
    <style jsx global>{`
      /* Global/Container Styles */
      .mvc-section-item {
        /* Dynamically set height to reduce gap */
        min-height: ${itemHeightVH}vh;
        height: ${itemHeightVH}vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        /* Ensures sections stack tightly without padding/margin influencing scroll */
      }

      .section-header {
        font-family: 'Arial Black', sans-serif;
        font-size: 5rem;
        text-align: center;
        padding-top: 10vh;
        color: #a855f7;
        margin-bottom: 5vh;
        text-shadow: 0 0 10px rgba(168, 85, 247, 0.4);
      }

      /* Content Positioning and Movement */
      .section-content-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        max-width: 1000px;
        padding: 0 20px;
        z-index: 10;
        pointer-events: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
      }

      /* Title Wrapper */
      .title-wrapper {
        position: relative;
        margin-bottom: 2rem;
        /* Ensure large text doesn't flow outside the bounds too much */
        overflow: hidden;
      }

      /* Content Block Wrapper */
      .content-block {
        position: relative;
        margin-top: 2rem;
        max-width: 700px;
        /* Add a subtle top border for separation, matching the neon theme */
        border-top: 1px solid rgba(0, 255, 200, 0.2);
        padding-top: 1.5rem;
      }

      /* Content Paragraphs */
      .section-content-container .content {
        font-family: 'Space Mono', monospace;
        font-size: 2rem;
        line-height: 1.6;
        font-weight: 300;
        color: #e5e5e5;
        margin: 0.5rem 0; /* Reduced margin to tighten content */
      }

      /* Responsive adjustments */
      @media (max-width: 1024px) {
        .section-content-container .title {
          font-size: 6rem;
        }
        .section-content-container .content {
          font-size: 1.25rem;
        }
      }
      @media (max-width: 768px) {
        .section-header {
          font-size: 3rem;
        }
        .section-content-container .title {
          font-size: 3.5rem;
        }
        .section-content-container .content {
          font-size: 1rem;
        }
      }
    `}</style>
  );
}

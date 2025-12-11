"use client"

import {
    motion,
    MotionValue,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion"
import { useRef } from "react"
import { GradientHeading } from "@/components/heading-gradient/index" // Import your gradient component

// 1. Data Structure: The Spiritual Journey Narrative
const journeyData = [
    {
        title: "ENCOUNTER",
        subtitle: "The Moment of Connection",
        content: "Where the past meets the present. This is the initial spark—a profound, personal realization that shifts your perspective and opens the door to something greater than yourself.",
    },
    {
        title: "TRANSFORMATION",
        subtitle: "The Process of Becoming",
        content: "A continuous, challenging, and rewarding journey of growth. We move from who we were to who we are meant to be, fueled by community and deep reflection.",
    },
    {
        title: "PURPOSE",
        subtitle: "The Outward Mission",
        content: "Finding your place in the world. Your gifts, experiences, and transformation are channeled into action, bringing light and service to the community and beyond.",
    },
]

// 2. Individual Content Card
function JourneyCard({ title, subtitle, content, index }: typeof journeyData[0] & { index: number }) {
    const cardRef = useRef(null);
    
    // Get scroll progress relative to this specific card's position in the horizontal track
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["center center", "end end"] 
    })
    
    // 💡 Parallax Effect within the Card: Emphasizes the title rising as the content stabilizes
    // Map scroll progress (0 to 1) to a slight vertical translation
    const titleParallaxY = useTransform(scrollYProgress, [0, 1], index % 2 === 0 ? [80, -80] : [-80, 80])
    
    // Content moves slower, or is locked, to feel like the anchor
    const contentParallaxY = useTransform(scrollYProgress, [0, 1], [0, 0])


    return (
        <div ref={cardRef} className="horizontal-card-wrapper">
            <motion.div className="journey-card">
                
                {/* Title moves with Parallax */}
                <motion.div 
                    style={{ y: titleParallaxY }}
                    className="title-container"
                >
                    <GradientHeading 
                        headingAs="h2" 
                        className="text-7xl lg:text-[8rem] font-extrabold tracking-tighter"
                    >
                        {title}
                    </GradientHeading>
                    <p className="subtitle">{subtitle}</p>
                </motion.div>

                {/* Content block is stable or moves very little */}
                <motion.div
                    style={{ y: contentParallaxY }}
                    className="card-content-block"
                >
                    <p className="content">{content}</p>
                </motion.div>
            </motion.div>
        </div>
    )
}

// 3. Main Horizontal Section Component
export default function TheJourneySection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: containerRef })
    
    const numberOfCards = journeyData.length
    // Shift by -200% for 3 cards
    const xOffset = -(numberOfCards - 1) * 100 
    
    // Horizontal Scroll Transformation
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `${xOffset}%`])

    // Optional Scroll Indicator (for visual debugging/premium feel)
    const { scrollYProgress: overallProgress } = useScroll()
    const scaleX = useSpring(overallProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <section ref={containerRef} className="horizontal-scroll-container">
            {/* Scroll Spacer (300vh height for 3 cards) */}
            <div className="scroll-spacer">
                
                {/* Pinned Wrapper */}
                <div className="horizontal-pinned-wrapper">
                    <h1 className="section-header">Your Digital Faith Journey</h1>
                    
                    {/* Content Track */}
                    <motion.div 
                        className="horizontal-track" 
                        style={{ x }} 
                    >
                        {journeyData.map((data, index) => (
                            <JourneyCard 
                                key={data.title} 
                                {...data} 
                                index={index} 
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            <motion.div className="progress" style={{ scaleX }} />
            <StyleSheet numberOfCards={numberOfCards} />
        </section>
    )
}

/**
 * ==============   Styles   ================
 */

function StyleSheet({ numberOfCards }: { numberOfCards: number }) {
    const trackWidth = `${numberOfCards * 100}%`;
    const spacerHeight = `${numberOfCards * 100}vh`; 

    return (
        <style jsx global>{`
            /* ------------------ 1. Container and Pinning Setup ------------------ */

            .horizontal-scroll-container {
                position: relative;
                width: 100%;
                background-color: #0a0a0a;
            }

            .scroll-spacer {
                height: ${spacerHeight}; 
            }

            .horizontal-pinned-wrapper {
                height: 100vh;
                width: 100%;
                position: sticky;
                top: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                overflow: hidden;
            }
            
            /* ------------------ 2. Horizontal Track & Card Layout ------------------ */

            .horizontal-track {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: ${trackWidth};
                display: flex;
                align-items: center;
            }

            .horizontal-card-wrapper {
                height: 100vh;
                width: calc(100% / ${numberOfCards});
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 5vw;
            }
            
            .journey-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                max-width: 900px;
                padding: 3rem;
                pointer-events: none;
                
                /* Out-of-the-box styling: Dark, structured container */
                background: rgba(255, 255, 255, 0.03); 
                backdrop-filter: blur(4px); 
                border: 1px solid rgba(255, 255, 255, 0.1); 
                border-radius: 1rem;
                box-shadow: 0 0 40px rgba(168, 85, 247, 0.2); /* Subtle glow around the card */
            }
            
            /* ------------------ 3. Typography and Details ------------------ */
            
            .section-header {
                position: absolute;
                top: 10vh;
                font-family: 'Arial Black', sans-serif;
                font-size: 5rem;
                text-align: center;
                color: #A855F7;
                text-shadow: 0 0 10px rgba(168, 85, 247, 0.4);
                z-index: 20;
            }

            .title-container {
                margin-bottom: 1rem;
            }

            .subtitle {
                font-family: 'Space Mono', monospace; 
                font-size: 1.5rem;
                color: #00ffc8; /* Neon accent color for subtitle */
                margin-bottom: 2rem;
            }

            .card-content-block {
                margin-top: 1rem;
                padding-top: 1rem;
                border-top: 1px solid rgba(0, 255, 200, 0.2);
            }
            
            .content {
                font-family: 'Space Mono', monospace; 
                font-size: 1.5rem; 
                line-height: 1.6;
                font-weight: 300;
                color: #e5e5e5;
                margin: 0.5rem 0;
            }

            /* Optional: Progress bar style */
            .progress {
                position: fixed;
                left: 0;
                right: 0;
                height: 5px;
                background: #00ffc8;
                bottom: 50px;
                z-index: 100;
                transform-origin: 0%;
            }

            /* Responsive adjustments */
            @media (max-width: 1024px) {
                .section-header { font-size: 3rem; }
                .journey-card h2 { font-size: 4rem; }
                .subtitle { font-size: 1.2rem; }
                .content { font-size: 1.2rem; }
            }
            @media (max-width: 768px) {
                .journey-card { padding: 2rem 1rem; }
                .journey-card h2 { font-size: 3rem; }
                .subtitle { font-size: 1rem; }
                .content { font-size: 1rem; }
            }
        `}</style>
    )
}
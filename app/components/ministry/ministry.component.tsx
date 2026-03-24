import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Baby, GraduationCap, Heart, Globe, Music } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Ministries() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.ministry-card');

      // Pin the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: true,
        start: 'top top',
        end: () => `+=${cards.length * 100}%`,
        pinSpacing: true,
      });

      // Stack cards animation
      cards.forEach((card: any, index) => {
        const isLast = index === cards.length - 1;
        
        gsap.to(card, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: () => `top+=${index * 100} top`,
            end: () => `+=${isLast ? 0 : 100}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
          y: isLast ? 0 : -100,
          opacity: isLast ? 1 : 0.3,
          scale: isLast ? 1 : 0.9,
          ease: 'none',
        });
      });

      // Text scramble effect on title
      const title = document.querySelector('.ministries-title');
      if (title) {
        const originalText = title.textContent || '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top center',
          onEnter: () => {
            let iteration = 0;
            const interval = setInterval(() => {
              title.textContent = originalText
                .split('')
                .map((char, index) => {
                  if (char === ' ') return ' ';
                  if (index < iteration) return originalText[index];
                  return chars[Math.floor(Math.random() * chars.length)];
                })
                .join('');
              
              iteration += 1/3;
              if (iteration >= originalText.length) {
                clearInterval(interval);
                title.textContent = originalText;
              }
            }, 30);
          },
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const ministries = [
    {
      icon: Baby,
      title: 'Children',
      description: 'Fun, engaging programs that teach kids about Jesus through games, stories, and activities.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Youth',
      description: 'Dynamic gatherings where teens build friendships, explore faith, and discover their purpose.',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: GraduationCap,
      title: 'Young Adults',
      description: 'A vibrant community for college and career-aged individuals navigating faith and life.',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Heart,
      title: 'Women',
      description: 'Empowering women to grow spiritually through Bible studies, mentorship, and fellowship.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Users,
      title: 'Men',
      description: 'Building strong, godly men through accountability, mentorship, and service.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Globe,
      title: 'Missions',
      description: 'Local and global outreach initiatives that share God\'s love with communities in need.',
      gradient: 'from-purple-500 to-violet-500',
    },
  ];

  return (
    <section
      id="ministries"
      ref={sectionRef}
      className="relative h-screen bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden"
    >
      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <h2 className="ministries-title text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent mb-20 text-center">
          Ministries
        </h2>

        <div ref={containerRef} className="relative max-w-6xl mx-auto w-full h-[500px]">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="ministry-card absolute inset-0 flex items-center justify-center"
              style={{ zIndex: ministries.length - index }}
            >
              <div className="relative w-full bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-16 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${ministry.gradient} opacity-10`}></div>
                
                <div className="relative z-10 flex items-center gap-12">
                  <div className={`flex-shrink-0 p-8 bg-gradient-to-r ${ministry.gradient} rounded-3xl`}>
                    <ministry.icon size={80} className="text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className={`text-6xl md:text-7xl bg-gradient-to-r ${ministry.gradient} bg-clip-text text-transparent mb-6`}>
                      {ministry.title}
                    </h3>
                    <p className="text-zinc-300 text-2xl leading-relaxed">
                      {ministry.description}
                    </p>
                  </div>
                </div>

                <div className="absolute top-8 right-8 text-9xl opacity-5">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 text-zinc-500">
          Scroll to explore each ministry
        </div>
      </div>
    </section>
  );
}

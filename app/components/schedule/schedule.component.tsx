import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Clock, MapPin, Coffee, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Schedule() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline line growth
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 1,
          },
        },
      );

      // Animate schedule items
      const items = gsap.utils.toArray('.schedule-item');
      items.forEach((item: any, index) => {
        const isLeft = index % 2 === 0;

        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
          },
          x: isLeft ? -200 : 200,
          opacity: 0,
          rotate: isLeft ? -15 : 15,
          scale: 0.8,
        });
      });

      // Pulsing dots
      gsap.to('.timeline-dot', {
        scale: 1.5,
        opacity: 0.5,
        duration: 1,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Magnetic title effect
      const title = document.querySelector('.schedule-title');
      if (title) {
        gsap.to(title, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
          x: (i, target) => {
            return ScrollTrigger.maxScroll(window) * 0.1;
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scheduleItems = [
    {
      time: '9:00 AM',
      day: 'Sunday',
      title: 'Early Morning Service',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      time: '11:00 AM',
      day: 'Sunday',
      title: 'Main Worship Service',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      time: '6:00 PM',
      day: 'Sunday',
      title: 'Evening Service',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      time: '7:00 PM',
      day: 'Wednesday',
      title: 'Midweek Bible Study',
      gradient: 'from-green-500 to-emerald-500',
    },
    { time: '7:30 PM', day: 'Friday', title: 'Youth Night', gradient: 'from-cyan-500 to-blue-500' },
    {
      time: '10:00 AM',
      day: 'Saturday',
      title: 'Prayer Gathering',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section
      id="schedule"
      ref={sectionRef}
      className="relative py-40 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <h2 className="schedule-title text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent mb-6 inline-block">
            Join Us
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -ml-px">
            <div className="timeline-line w-full h-full bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500"></div>
          </div>

          {/* Schedule items */}
          <div className="space-y-32">
            {scheduleItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="schedule-item relative">
                  {/* Dot on timeline */}
                  <div className="timeline-dot absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full z-10 shadow-lg shadow-purple-500/50"></div>

                  {/* Content card */}
                  <div className={`relative ${isLeft ? 'mr-auto pr-16' : 'ml-auto pl-16'} w-1/2`}>
                    <div
                      className={`relative bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 ${isLeft ? 'text-right' : 'text-left'}`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-5 rounded-3xl`}
                      ></div>

                      <div className="relative z-10">
                        <div
                          className={`inline-flex items-center gap-3 mb-4 ${isLeft ? 'flex-row-reverse' : ''}`}
                        >
                          <Clock className={`text-${item.gradient.split('-')[1]}-400`} size={28} />
                          <span className="text-3xl text-zinc-400">{item.time}</span>
                        </div>

                        <h3
                          className={`text-5xl bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-3`}
                        >
                          {item.title}
                        </h3>

                        <p className="text-zinc-500 text-xl">{item.day}</p>
                      </div>

                      {/* Connecting line to timeline */}
                      <div
                        className={`absolute top-1/2 ${isLeft ? 'right-0' : 'left-0'} w-16 h-px bg-gradient-to-r ${isLeft ? 'from-white/20 to-transparent' : 'from-transparent to-white/20'}`}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Info section */}
        <div className="grid md:grid-cols-3 gap-8 mt-40 max-w-5xl mx-auto">
          {[
            { icon: MapPin, title: 'Location', text: '123 Faith Street, Grace City' },
            { icon: Coffee, title: 'Free Coffee', text: 'Refreshments at every service' },
            { icon: Users, title: 'Kids Ministry', text: 'Safe childcare available' },
          ].map((info, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl mb-6">
                <info.icon size={48} className="text-purple-400" />
              </div>
              <h4 className="text-3xl text-white mb-3">{info.title}</h4>
              <p className="text-zinc-400 text-lg">{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

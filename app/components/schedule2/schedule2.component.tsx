import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, MapPin, Coffee, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Schedule2() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate timeline line
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        },
      );

      // Animate schedule items
      gsap.utils.toArray<HTMLElement>('.schedule-item').forEach((item, index) => {
        const isLeft = index % 2 === 0;

        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
          x: isLeft ? -60 : 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        });
      });

      // Subtle pulsing dots
      gsap.to('.timeline-dot', {
        scale: 1.2,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2,
      });
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
      className="relative py-32 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden"
    >
      {/* subtle grid background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent mb-4">
            Join Us
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            You&apos;re welcome to join us for any of our weekly gatherings.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -ml-px">
            <div className="timeline-line w-full h-full bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500" />
          </div>

          <div className="space-y-24">
            {scheduleItems.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="schedule-item relative">
                  {/* timeline dot */}
                  <div className="timeline-dot absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full z-10 shadow-md shadow-purple-500/40" />

                  {/* card */}
                  <div className={`relative ${isLeft ? 'mr-auto pr-16' : 'ml-auto pl-16'} w-1/2`}>
                    <div
                      className={`bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 ${
                        isLeft ? 'text-right' : 'text-left'
                      }`}
                    >
                      <div
                        className={`inline-flex items-center gap-3 mb-3 ${
                          isLeft ? 'flex-row-reverse' : ''
                        }`}
                      >
                        <Clock size={22} className="text-purple-400" />
                        <span className="text-xl text-zinc-300">{item.time}</span>
                      </div>

                      <h3
                        className={`text-3xl bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2`}
                      >
                        {item.title}
                      </h3>

                      <p className="text-zinc-400">{item.day}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Extra info */}
        <div className="grid md:grid-cols-3 gap-10 mt-32 max-w-5xl mx-auto">
          {[
            { icon: MapPin, title: 'Location', text: '123 Faith Street, Grace City' },
            { icon: Coffee, title: 'Free Coffee', text: 'Refreshments available after service' },
            { icon: Users, title: 'Kids Ministry', text: 'Safe childcare during services' },
          ].map((info, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex p-5 bg-purple-500/10 rounded-xl mb-5">
                <info.icon size={36} className="text-purple-400" />
              </div>

              <h4 className="text-2xl text-white mb-2">{info.title}</h4>
              <p className="text-zinc-400">{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

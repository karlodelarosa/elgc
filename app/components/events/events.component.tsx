import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export function UpcomingEvents() {
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

      // Animate event items
      gsap.utils.toArray<HTMLElement>('.event-item').forEach((item, index) => {
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

      // Animate timeline dots
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

  const events = [
    {
      date: 'April 10',
      title: 'ALAB: Illuminate',
      description: 'A night of youth worship, creative arts, and powerful messages.',
      image: '/img/alab-poster.png',
      link: '/events/alab-illuminate',
      gradient: 'from-orange-500 to-pink-500',
    },
    {
      date: 'May 6 – 9',
      title: 'DVBS (Daily Vacation Bible School)',
      description: 'Fun-filled days of learning, games, and Bible adventures for kids.',
      link: '/events/dvbs',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      date: 'June 13',
      title: 'Family Day',
      description: 'A celebration for families with food, games, and fellowship.',
      image:
        'https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop',
      link: '/events/family-day',
      gradient: 'from-blue-500 to-purple-500',
    },
  ];

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden"
    >
      {/* Grid background */}
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
            Upcoming Events
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Stay connected with special gatherings and upcoming activities in our church community.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto grid gap-16">
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -ml-px">
              <div className="timeline-line w-full h-full bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500" />
            </div>

            <div className="space-y-24">
              {events.map((event, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div key={index} className="event-item relative">
                    {/* Timeline dot */}
                    <div className="timeline-dot absolute left-1/2 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full z-10 shadow-md shadow-purple-500/40" />

                    {/* Event card */}
                    <div
                      className={`relative w-full md:w-1/2 ${
                        isLeft
                          ? 'md:mr-auto md:pr-16 text-left md:text-right'
                          : 'md:ml-auto md:pl-16 text-left'
                      }`}
                    >
                      <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                        {event.image && (
                          <div className="h-64 relative w-full">
                            <Image
                              src={event.image}
                              alt={event.title}
                              fill
                              className="object-cover hover:scale-105 transition duration-500"
                            />
                          </div>
                        )}

                        <div className="p-8">
                          <div
                            className={`inline-flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}
                          >
                            <Calendar size={22} className="text-purple-400" />
                            <span className="text-xl text-zinc-300">{event.date}</span>
                          </div>

                          <h3
                            className={`text-3xl bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent mb-3`}
                          >
                            {event.title}
                          </h3>

                          <p className="text-zinc-400 mb-4">{event.description}</p>

                          {event.link && (
                            <a
                              href={event.link}
                              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
                            >
                              Learn More
                              <ArrowRight size={18} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center mt-24">
            <a
              href="/events"
              className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-6 py-3 text-purple-200 transition hover:border-purple-300 hover:bg-purple-500/20 hover:text-white"
            >
              View Full Event Schedule
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

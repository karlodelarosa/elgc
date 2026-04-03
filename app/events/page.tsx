'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Clock3, MapPin, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const events = [
  {
    id: 'alab-illuminate',
    title: 'ALAB: Illuminate',
    date: 'April 10',
    time: '6:30 PM',
    location: 'ELGC Main Sanctuary',
    category: 'Youth event',
    description:
      'A night of worship, creative arts, and life-giving messages designed for the next generation.',
    url: 'alab-illuminate',
    image: "/img/alab-poster.png"
  },
  {
    id: 'dvbs',
    title: 'DVBS (Daily Vacation Bible School)',
    date: 'May 6 - May 9',
    time: '9:00 AM - 12:00 PM',
    location: 'ELGC Kids Hall',
    category: 'Kids ministry',
    description:
      'Fun-filled days of Bible stories, games, songs, and activities for children in our community.',
    image: "https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 'prayer-fasting-family-day',
    title: 'Prayer and Fasting for Family Day',
    date: 'May 27',
    time: '7:00 PM',
    location: 'ELGC Main Sanctuary',
    category: 'Prayer gathering',
    description:
      'A dedicated evening of prayer and fasting as families prepare their hearts together in faith.',
    image: "https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 'family-day',
    title: 'Family Day',
    date: 'June 13',
    time: '10:00 AM',
    location: 'Infanta, Quezon',
    category: 'Church-wide',
    description:
      'A celebration for every household with fellowship, food, and activities that strengthen family bonds.',
    image: "https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 'teachers-training-2',
    title: "Teacher's Training 2",
    date: 'July 26',
    time: '9:00 AM',
    location: 'ELGC Training Room',
    category: 'Leaders development',
    description:
      'An equipping session for teachers and ministry workers focused on practical teaching and discipleship.',
    image: "https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 'technical-training',
    title: 'Technical Training',
    date: 'August 8',
    time: '1:00 PM',
    location: 'ELGC Media Booth',
    category: 'Skills training',
    description:
      'Hands-on training for sound, presentation, livestream, and production support teams.',
    image: "https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 'buwan-ng-wika',
    title: 'Buwan ng Wika',
    date: 'August 29',
    time: '4:00 PM',
    location: 'ELGC Fellowship Grounds',
    category: 'Church-wide',
    description:
      'A cultural celebration featuring Filipino language, songs, presentations, and fellowship.',
    image: "https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 'youth-anniversary',
    title: 'Youth Anniversary',
    date: 'September 10',
    time: '6:00 PM',
    location: 'ELGC Main Sanctuary',
    category: 'Youth event',
    description:
      'A joyful gathering to celebrate God’s faithfulness in the youth ministry through worship and testimonies.',
    image: "https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 'march-for-jesus',
    title: 'March for Jesus',
    date: 'September 26',
    time: '8:00 AM',
    location: 'City Proper Route',
    category: 'Community outreach',
    description:
      'A public declaration of faith through prayer, worship, and united community participation.',
    image: "https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 'crusade',
    title: 'Crusade',
    date: 'October 10',
    time: '5:30 PM',
    location: 'Open Grounds',
    category: 'Evangelism',
    description:
      'An evening outreach with worship, gospel preaching, and prayer for the community.',
    image: "https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 'workers-fellowship',
    title: 'Workers Fellowship',
    date: 'October 31',
    time: '2:00 PM',
    location: 'ELGC Fellowship Hall',
    category: 'Church workers',
    description:
      'A refreshing fellowship for ministry workers with encouragement, alignment, and thanksgiving.',
    image: "https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 'christmas-service',
    title: 'Christmas Service',
    date: 'December 20',
    time: '9:00 AM',
    location: 'ELGC Main Sanctuary',
    category: 'Church-wide',
    description:
      'A special Christmas celebration centered on worship, gratitude, and the message of Christ.',
    image: "https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop"
  },
  {
    id: 'prayer-night',
    title: 'Prayer and Worship Night',
    date: 'Every last Friday of the month',
    time: '7:00 PM',
    location: 'ELGC Main Sanctuary',
    category: 'Prayer gathering',
    description:
      'An extended evening of prayer, worship, and intercession as we seek God together as one church.',
    image: "https://plus.unsplash.com/premium_photo-1667113478916-7765913368f9?q=80&w=774&auto=format&fit=crop"
  },
];

export default function EventsPage() {
  const [searchText, setSearchText] = useState('');

  const filteredEvents = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    if (!query) return events;

    return events.filter((event) => event.title.toLowerCase().includes(query));
  }, [searchText]);

  return (
    <div className="min-h-screen bg-black text-white pt-36">
      {/* Controls Bar */}
      <div className="container mx-auto px-6 py-8 sticky top-0 z-40 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Church Events</h1>
            <p className="text-zinc-400 text-sm">
              Stay connected with our upcoming gatherings.
            </p>
          </div>

          <div className="relative w-full sm:w-[360px]">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

            <input
              type="text"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Search event title"
              className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-11 pr-4 text-white placeholder:text-zinc-500 outline-none focus:border-purple-400 transition"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">

        <div className="mb-8 text-zinc-400">
          Showing {filteredEvents.length} of {events.length} events
        </div>

        {filteredEvents.length === 0 ? (
          <div className="rounded-xl border border-dashed border-white/10 p-12 text-center">
            <p className="text-xl font-semibold mb-2">No events found</p>
            <p className="text-zinc-400">Try another keyword.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredEvents.map((event, idx) => {

              const hasDetails =
                idx === 0 &&
                event.url &&
                event.url.trim() !== '';

                const Card = (
                  <motion.article
                    className={`group rounded-2xl border border-white/10 bg-white/5 overflow-hidden flex flex-col transition
                    ${hasDetails ? 'hover:bg-white/10 cursor-pointer' : 'opacity-70 cursor-default'}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                  >
                
                    {/* Thumbnail */}
                    <div className="relative h-[180px] w-full overflow-hidden">
                      <Image
                        src={event.image || '/img/event-placeholder.jpg'}
                        alt={event.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                
                    <div className="p-6 flex flex-col flex-grow">
                
                      {/* Badge */}
                      <div className="mb-3 flex justify-end">
                        {hasDetails ? (
                          <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-purple-500/20 text-purple-300">
                            View Details →
                          </span>
                        ) : (
                          <span className="text-xs px-2 py-1 rounded-md bg-white/10 text-zinc-400">
                            Upcoming
                          </span>
                        )}
                      </div>
                
                      <span className="text-xs uppercase tracking-wider text-purple-300 mb-3">
                        {event.category}
                      </span>
                
                      <h3 className="text-xl font-semibold mb-3">
                        {event.title}
                      </h3>
                
                      <p className="text-zinc-400 text-sm mb-6 flex-grow">
                        {event.description}
                      </p>
                
                      <div className="space-y-2 text-sm text-zinc-300">
                        <div className="flex items-center gap-2">
                          <CalendarDays size={16} className="text-purple-300" />
                          {event.date}
                        </div>
                
                        <div className="flex items-center gap-2">
                          <Clock3 size={16} className="text-purple-300" />
                          {event.time}
                        </div>
                
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-purple-300" />
                          {event.location}
                        </div>
                      </div>
                
                    </div>
                  </motion.article>
                );

              return hasDetails ? (
                <Link key={event.id} href={`/events/${event.id}`}>
                  {Card}
                </Link>
              ) : (
                <div key={event.id}>{Card}</div>
              );

            })}

          </div>
        )}
      </div>
    </div>
  );
}
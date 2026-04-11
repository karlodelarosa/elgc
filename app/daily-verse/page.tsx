'use client';

import { useEffect, useState } from 'react';

type DevotionalData = {
  verse: {
    text: string;
    reference: string;
    version: string;
    verseurl: string;
  };
  reflection: {
    text: string[];
    spiritualInsight: string[];
    actions: string[];
  };
};

export default function DevotionalPage() {
  const [data, setData] = useState<DevotionalData | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/devotional');
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error('Failed to load devotional:', err);
      }
    }

    load();
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f0f10] text-gray-400">
        Loading daily verse...
      </div>
    );
  }

  const { verse, reflection } = data;

  return (
    <div className="min-h-screen bg-[#0f0f10] text-gray-200">
      {/* HERO IMAGE */}
      <div className="relative w-full h-[420px] overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${new Date().toDateString()}/1600/900`}
          className="w-full h-full object-cover"
          alt="Daily verse background"
        />

        {/* DARK GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-black/10" />

        {/* HERO TEXT */}
        <div className="absolute bottom-10 left-6 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">Daily Verse</h1>

          <p className="text-gray-200 mt-2 text-sm md:text-base">
            Word for today • {new Date().toDateString()}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* VERSE */}
        <div className="border-l-4 border-blue-500 pl-5 mb-10">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-100">“{verse?.text}”</p>

          <p className="mt-4 text-gray-400">
            {verse?.reference} ({verse?.version})
          </p>
        </div>

        {/* REFLECTION */}
        <div className="text-gray-300 leading-relaxed">
          <h2 className="text-xl font-semibold text-white mb-3">Reflection</h2>

          {reflection?.text?.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>

        {/* SPIRITUAL INSIGHT */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-white mb-3">Spiritual Insight</h3>

          <div className="text-gray-300 leading-relaxed">
            {reflection?.spiritualInsight?.map((s, i) => (
              <p key={i}>{s}</p>
            ))}
          </div>
        </div>

        {/* TODAY’S WALK */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-white mb-3">Today’s Walk</h3>

          <ul className="list-disc pl-5 text-gray-300">
            {reflection?.actions?.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>

        {/* FOOT NOTE */}
        <p className="mt-10 text-xs text-gray-500">Powered by OurManna + Devotional Engine</p>
      </div>
    </div>
  );
}

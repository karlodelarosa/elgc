import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Music2, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function Music() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Featured song card entrance
      gsap.fromTo(
        featuredRef.current,
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 40%',
            scrub: 1,
          },
        },
      );

      // Text split reveal
      const words = textRef.current?.querySelectorAll('.word');
      if (words) {
        gsap.from(words, {
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 75%',
            end: 'top 40%',
            scrub: 1,
          },
          opacity: 0,
          y: 50,
          rotateX: -90,
          stagger: 0.05,
          transformOrigin: 'top center',
        });
      }

      // Waveform animation
      const bars = gsap.utils.toArray<HTMLElement>('.wave-bar');
      bars.forEach((bar, i) => {
        gsap.to(bar, {
          scaleY: 'random(0.3, 1.5)',
          duration: 'random(0.5, 1.5)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.05,
        });
      });

      // Vinyl rotation
      gsap.to('.vinyl', {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: 'none',
      });

      // Platform icons animation
      const platformIcons = gsap.utils.toArray<HTMLElement>('.platform-icon');
      platformIcons.forEach((icon, i) => {
        gsap.from(icon, {
          scrollTrigger: {
            trigger: featuredRef.current,
            start: 'top 60%',
          },
          scale: 0,
          rotation: 180,
          duration: 0.6,
          delay: 1 + i * 0.15,
          ease: 'back.out(2)',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const description = 'Experience powerful worship that touches hearts and lifts spirits';

  return (
    <section
      id="music"
      ref={sectionRef}
      className="relative py-40 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden"
    >
      {/* Animated vinyl record background */}
      <div className="vinyl absolute top-20 right-20 w-96 h-96 opacity-10">
        <div className="relative w-full h-full rounded-full border-[50px] border-purple-500/30">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-purple-500/50"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <Music2 className="text-purple-400 mb-8" size={64} />
            <h2 className="text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 bg-clip-text text-transparent mb-12 leading-none">
              Worship & Music
            </h2>
            <div ref={textRef} className="text-3xl text-zinc-400 mb-16 leading-relaxed">
              {description.split(' ').map((word, i) => (
                <span key={i} className="word inline-block mr-3" style={{ perspective: '1000px' }}>
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Song Section - 2 Columns */}
          <div ref={featuredRef} className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* LEFT COLUMN - Featured Song Player */}
            <div className="relative">
              <h3 className="text-5xl text-white mb-8 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Featured Song
              </h3>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
                <iframe
                  className="relative rounded-2xl w-full"
                  src="https://open.spotify.com/embed/track/2soTJd8yfOrsxy49NDSvnJ?utm_source=generator&theme=0"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Featured Song"
                ></iframe>
              </div>
            </div>

            {/* RIGHT COLUMN - Details and Platform Links */}
            <div className="space-y-8">
              <div>
                <h4 className="text-3xl text-white mb-4">Listen Everywhere</h4>
                <p className="text-zinc-400 text-xl mb-8">
                  Stream this powerful worship song on your favorite platform
                </p>

                <div className="space-y-4">
                  {/* Spotify */}
                  <a
                    href="https://open.spotify.com/track/2soTJd8yfOrsxy49NDSvnJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="platform-icon flex items-center gap-4 p-6 bg-gradient-to-r from-green-500/10 to-green-600/10 hover:from-green-500/20 hover:to-green-600/20 rounded-2xl border border-green-500/30 transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="white">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-2xl">Spotify</p>
                      <p className="text-zinc-400 text-sm">Stream now</p>
                    </div>
                    <ExternalLink className="text-green-400" size={24} />
                  </a>

                  {/* YouTube Music */}
                  <a
                    href="https://www.youtube.com/@ELGCWorship"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="platform-icon flex items-center gap-4 p-6 bg-gradient-to-r from-red-500/10 to-red-600/10 hover:from-red-500/20 hover:to-red-600/20 rounded-2xl border border-red-500/30 transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="white">
                        <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-11.88c-2.628 0-4.776 2.148-4.776 4.776S9.372 16.776 12 16.776s4.776-2.148 4.776-4.776S14.628 7.224 12 7.224zM9.6 12l4.2-2.4v4.8L9.6 12z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-2xl">YouTube Music</p>
                      <p className="text-zinc-400 text-sm">Watch & listen</p>
                    </div>
                    <ExternalLink className="text-red-400" size={24} />
                  </a>

                  {/* Apple Music */}
                  <a
                    href="https://music.apple.com/us/artist/elgc-worship/1861429602"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="platform-icon flex items-center gap-4 p-6 bg-gradient-to-r from-pink-500/10 to-rose-600/10 hover:from-pink-500/20 hover:to-rose-600/20 rounded-2xl border border-pink-500/30 transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="white">
                        <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.003-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208c-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18-.006.097-.01.193-.01.29V18.01c.003.097.006.192.01.288.01.396.04.788.1 1.18.07.483.17.96.362 1.407.565 1.328 1.53 2.25 2.865 2.78.702.278 1.445.358 2.192.4.152.01.303.017.455.026h12.036c.152-.01.303-.017.455-.026.747-.042 1.49-.122 2.192-.4 1.335-.53 2.3-1.452 2.865-2.78.192-.447.292-.924.362-1.407.06-.392.09-.784.1-1.18.004-.096.007-.191.01-.288V5.988c0-.097-.006-.192-.01-.29-.007-.38-.035-.76-.09-1.138-.004-.024-.003-.05-.006-.074zM8.4 18.884c-1.993 0-3.612-1.62-3.612-3.613s1.62-3.613 3.612-3.613c1.992 0 3.612 1.62 3.612 3.613s-1.62 3.613-3.612 3.613zm10.355-8.322c-.088.086-.186.148-.3.192-.116.045-.234.068-.355.068-.12 0-.24-.023-.355-.068-.116-.044-.214-.106-.3-.192L15.4 8.515v6.358c0 .99-.804 1.794-1.794 1.794s-1.794-.804-1.794-1.794V5.206c0-.99.804-1.794 1.794-1.794s1.794.804 1.794 1.794v2.906l2.045-2.045c.172-.172.4-.258.628-.258s.456.086.628.258c.346.346.346.91 0 1.256l-2.673 2.673 2.673 2.673c.346.346.346.91 0 1.256z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-2xl">Apple Music</p>
                      <p className="text-zinc-400 text-sm">Listen now</p>
                    </div>
                    <ExternalLink className="text-pink-400" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Waveform visualization */}
          <div className="flex items-end gap-2 h-32 mb-12">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="wave-bar flex-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full"
                style={{
                  height: `${30 + mulberry32(2026 + i * 97)() * 70}%`,
                  transformOrigin: 'bottom',
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

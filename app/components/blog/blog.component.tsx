import { ArrowRight, PenTool } from 'lucide-react';

export function Blog() {
  const posts = [
    {
      title: 'How we grow together',
      excerpt: 'A short look at discipleship, community, and next steps for new friends.',
      tag: 'Life Together',
    },
    {
      title: 'Serving with purpose',
      excerpt: 'Discover how our ministries help people connect, heal, and move forward.',
      tag: 'Ministries',
    },
    {
      title: 'Upcoming event highlights',
      excerpt: 'What to expect and how to prepare for the next gathering.',
      tag: 'Events',
    },
  ];

  return (
    <section id="blog" className="relative py-28 bg-black/60 overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-10 left-10 w-[360px] h-[360px] bg-purple-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[460px] h-[460px] bg-pink-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <PenTool className="w-4 h-4 text-pink-300" />
            <span className="text-sm text-zinc-300">Blog</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mt-6 mb-4 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Latest Updates
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Short articles and resources to help you stay connected with ELGC.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-3xl border border-white/10 bg-zinc-950/60 p-7 hover:bg-zinc-950/80 transition-colors"
            >
              <div className="text-sm text-zinc-400">{post.tag}</div>
              <h3 className="text-2xl font-semibold mt-4 mb-3 text-white/95">{post.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{post.excerpt}</p>
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors cursor-pointer">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


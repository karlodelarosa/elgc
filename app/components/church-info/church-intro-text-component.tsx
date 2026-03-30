import { GradientHeading } from '@/components/heading-gradient';

export function ChurchIntroText() {
  return (
    <section
      id="church-intro"
      className="w-full py-32 lg:py-64 px-6 flex items-center justify-center bg-black"
    >
      <div className="max-w-4xl text-center space-y-8">
        <div className="text-5xl md:text-6xl text-white pb-6">
          <GradientHeading headingAs="h1">Emmanuel’s Living Gospel Church</GradientHeading>
        </div>
        <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
          Emmanuel&apos;s Living Gospel Church is a Full Gospel, Bible-believing Christian community
          in Caloocan City, Metro Manila. Join our worship services, youth gatherings, and
          ministries as we grow together in faith.
        </p>
        <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
          Our church is devoted to worship, discipleship, and spreading God&apos;s love. We aim to
          nurture spiritual growth and a heart for service, welcoming everyone to experience faith,
          hope, and unity in Christ.
        </p>

        <div className="flex justify-center pt-16">
          <a
            href="/new-here"
            className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 text-sm bg-purple-500/10 px-6 py-3 text-purple-200 transition hover:border-purple-300 hover:bg-purple-500/20 hover:text-white"
          >
            New Here?
          </a>
        </div>
      </div>
    </section>
  );
}

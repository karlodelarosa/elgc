import { GradientHeading } from '@/components/heading-gradient';

export function ChurchIntroText() {
  return (
    <section
      id="church-intro"
      className="w-full py-32 lg:py-64 px-6 flex items-center justify-center bg-black"
    >
      <div className="max-w-4xl text-center space-y-8">
        <div className="text-5xl md:text-6xl text-white">
          <GradientHeading>Emmanuel’s Living Gospel Church</GradientHeading>
        </div>
        <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
          Emmanuel’s Living Gospel Church is a community devoted to worship, discipleship, and
          spreading God’s love. Founded to cultivate spiritual growth and service, we welcome
          everyone to join us in pursuing faith, hope, and unity in Christ.
        </p>

        <div className="flex justify-center pt-24">
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

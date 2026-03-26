import { GradientHeading } from '@/components/heading-gradient';

export function ChurchIntroText() {
  return (
    <section className="w-full py-64 px-6 flex items-center justify-center bg-black">
      <div className="max-w-4xl text-center space-y-8">
        <div className="text-5xl md:text-6xl text-white">
          <GradientHeading>Emmanuels Living Gospel Church</GradientHeading>
        </div>
        <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
          Emmanuels Living Gospel Church is a community devoted to worship, discipleship, and
          spreading God’s love. Founded to cultivate spiritual growth and service, we welcome
          everyone to join us in pursuing faith, hope, and unity in Christ.
        </p>
      </div>
    </section>
  );
}

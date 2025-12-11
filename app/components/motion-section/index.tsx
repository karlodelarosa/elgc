import { motion, useScroll, useTransform } from "framer-motion";

export default function MotionSection() {
  const { scrollYProgress } = useScroll();

  const yMove = useTransform(scrollYProgress, [0.2, 0.8], ["50px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      <motion.h2
        style={{ opacity, y: yMove }}
        className="text-4xl font-bold text-center mb-16"
      >
        Animated on Scroll
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.img
          style={{ y: yMove, opacity }}
          src="/poster1.jpg"
          alt="Poster"
          className="w-full"
        />
        <motion.img
          style={{ y: yMove, opacity }}
          src="/poster2.jpg"
          alt="Poster"
          className="w-full"
        />
        <motion.img
          style={{ y: yMove, opacity }}
          src="/poster3.jpg"
          alt="Poster"
          className="w-full"
        />
      </div>
    </section>
  );
}

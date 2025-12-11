import Hero from "./components/hero/hero.component";
import { GradientHeading } from "@/components/heading-gradient/index";
import MvCSection from "./components/mvc/index.component";
import HorizontalScroll from "./components/mvc/horizontal-scroll.component";
import ScrollRotate from "./components/mvc/scroll-rotate";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="h-screen bg-gradient-to-b from-black to-black/90">
        <div className="container mx-auto py-20">
          <GradientHeading headingAs="h2" className="text-xl md:text-4xl tracking-light uppercase">
            Welcome home
          </GradientHeading>
        </div>
        
      </div>
      
      <HorizontalScroll />
      <ScrollRotate />
    </div>
  );
}
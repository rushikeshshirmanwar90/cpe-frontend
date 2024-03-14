import { ScrollHeroSection } from "@/components/custom/paller-scroll";
import { HeroHomeSection } from "@/components/custom/hero-section";
import About_1 from "@/components/home_page/About_1";
import TextChange from "@/components/home_page/text-change";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <>
      <TracingBeam className="">
        <HeroHomeSection />
        <About_1 />
        <TextChange />
        <ScrollHeroSection />
      </TracingBeam>
    </>
  );
}

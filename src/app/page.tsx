import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { BookSection } from "@/components/sections/BookSection";
import { CareSection } from "@/components/sections/CareSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { WhySection } from "@/components/sections/WhySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfbfb] text-zinc-900">
      <Hero />
      <IntroSection />
      <WhySection />
      <CareSection />
      <BookSection />
      <SiteFooter />
    </div>
  );
}

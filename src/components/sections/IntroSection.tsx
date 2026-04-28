import { SectionBackground } from "@/components/sections/SectionBackground";
import { introCopy } from "@/components/sections/copy";

const INTRO_GRADIENT =
  "radial-gradient(ellipse at 0% 90%, rgba(224,122,90,0.38) 0%, rgba(224,122,90,0) 66%), radial-gradient(ellipse at 100% 94%, rgba(212,200,74,0.34) 0%, rgba(212,200,74,0) 60%), radial-gradient(ellipse at 50% 108%, rgba(232,144,106,0.18) 0%, rgba(232,144,106,0) 72%), linear-gradient(180deg, #fffefa 0%, #fdf5ec 55%, #f5ddc8 100%)";

const introTextStyle: React.CSSProperties = {
  fontFamily: "Satoshi, var(--font-sans)",
  fontSize: "clamp(22px, 3.2vw, 40px)",
  lineHeight: "clamp(28px, 3.6vw, 44px)",
};

export function IntroSection() {
  return (
    <section
      aria-label="Intro"
      className="relative min-h-[100svh] overflow-hidden"
    >
      <SectionBackground
        gradient={INTRO_GRADIENT}
        overlayClassName="bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.40)_0%,rgba(255,255,255,0.18)_42%,rgba(255,255,255,0)_74%)]"
        topFadeClassName="bg-gradient-to-b from-[#fbfbfb] via-[#fbfbfb]/50 to-transparent"
        bottomFadeClassName="bg-gradient-to-t from-[#fbfbfb] via-[#fbfbfb]/50 to-transparent"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl items-center px-2">
        <div className="mx-auto max-w-6xl py-16 sm:py-20">
          <p
            className="text-center font-medium tracking-normal text-zinc-900 [text-wrap:balance]"
            style={introTextStyle}
          >
            <span className="text-[#e27a2a]">{introCopy.brand}</span>
            <span>
              {" "}
              {introCopy.primary}{" "}
            </span>
            <span className="text-zinc-500">
              {introCopy.secondary}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}


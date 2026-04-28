import Image from "next/image";
import { SectionBackground } from "@/components/sections/SectionBackground";

const WHY_GRADIENT =
  "radial-gradient(ellipse at 0% 55%, #a8d8ea 0%, transparent 45%), radial-gradient(ellipse at 100% 60%, #d4b8e0 0%, transparent 40%), radial-gradient(ellipse at 15% 100%, #e8896a 0%, transparent 40%), radial-gradient(ellipse at 55% 100%, #e8956e 0%, transparent 45%), radial-gradient(ellipse at 100% 100%, #f0d96a 0%, transparent 35%), linear-gradient(180deg, #fffefa 0%, #fdf8f4 50%, #f5e8dc 100%)";

const glassBase = "rounded-[24px] backdrop-blur-xl";

const glassStyle: React.CSSProperties = {
  background: "#FFFFFF0A",
  border: "5.29px solid #FFFFFF03",
  boxShadow: "0px 2px 20px 0px #0000001A",
  opacity: 1,
};

export function WhySection() {
  return (
    <section
      id="why"
      className="relative min-h-[100svh] overflow-hidden bg-[#fbfbfb]"
    >
      <SectionBackground
        gradient={WHY_GRADIENT}
        overlayClassName="bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.25)_38%,rgba(255,255,255,0)_72%)]"
        topFadeClassName="bg-gradient-to-b from-[#fbfbfb] via-[#fbfbfb]/40 to-transparent"
        bottomFadeClassName="bg-gradient-to-t from-[#fbfbfb] via-[#fbfbfb]/40 to-transparent"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl items-center px-6 py-12 sm:py-16">
        <div className="w-full">
          <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch lg:[grid-auto-rows:1fr] lg:h-[min(720px,calc(100svh-8rem))]">
            {/* Column 1: 2 equal rows */}
            <div className="grid gap-6 lg:grid-rows-2">
              <div
                className={`${glassBase} p-8 transition will-change-transform motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)]`}
                style={glassStyle}
              >
                <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                  Beyond Visits
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-700">
                  Traditional care treats moments. Joyzen manages the entire
                  journey continuously, not occasionally.
                </p>
              </div>

              <div
                className={`${glassBase} p-8 transition will-change-transform motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)]`}
                style={glassStyle}
              >
                <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                  Focused on Root, Not Symptoms
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-700">
                  Hormones, lifestyle, fertility, long-term health, everything
                  connected, everything managed.
                </p>
              </div>
            </div>

            {/* Column 2: 3 rows */}
            <div className="grid gap-6 lg:grid-rows-[1fr_auto_0.85fr]">
              <div
                className={`${glassBase} p-8 transition will-change-transform motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)]`}
                style={glassStyle}
              >
                <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                  Integrated Care
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  Doctors, lifestyle, and emotional support, working together as
                  one system.
                </p>
              </div>

              <div className="hidden items-center justify-center py-2 lg:flex">
                <div className="rounded-full bg-white/35 px-6 py-4 backdrop-blur-xl ring-1 ring-white/45 shadow-sm">
                  <Image
                    src="/logo.png"
                    alt="Joyzen"
                    width={140}
                    height={32}
                    className="h-7 w-auto"
                  />
                </div>
              </div>

              <div
                className={`${glassBase} relative min-h-[220px] overflow-hidden transition will-change-transform motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)]`}
                style={glassStyle}
              >
                <Image
                  src="/why_2.jpg"
                  alt="Care guidance"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
            </div>

            {/* Column 3: 2 equal rows */}
            <div className="grid gap-6 lg:grid-rows-2">
              <div
                className={`${glassBase} relative overflow-hidden transition will-change-transform motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)]`}
                style={glassStyle}
              >
                <Image
                  src="/why_1.jpg"
                  alt="Care consult"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  priority={false}
                />
              </div>

              <div
                className={`${glassBase} p-8 transition will-change-transform motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)]`}
                style={glassStyle}
              >
                <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                  Designed for Better Outcomes
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-700">
                  Not more visits. Not more confusion. Clear direction.
                  Continuous support. Real results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


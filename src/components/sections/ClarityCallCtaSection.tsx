import Image from "next/image";
import Link from "next/link";
import { SectionBackground } from "@/components/sections/SectionBackground";
import { clarityCallCtaCopy } from "@/components/sections/copy";

const CLARITY_CALL_GRADIENT =
  "radial-gradient(ellipse at 0% 55%, #a8d8ea 0%, transparent 45%), radial-gradient(ellipse at 100% 60%, #d4b8e0 0%, transparent 40%), radial-gradient(ellipse at 15% 100%, #e8896a 0%, transparent 40%), radial-gradient(ellipse at 55% 100%, #e8956e 0%, transparent 45%), radial-gradient(ellipse at 100% 100%, #f0d96a 0%, transparent 35%), linear-gradient(180deg, #fffefa 0%, #fdf8f4 50%, #f5e8dc 100%)";

const glassStyle: React.CSSProperties = {
  background: "#FFFFFF0A",
  border: "5.29px solid #FFFFFF03",
  boxShadow: "0px 2px 20px 0px #0000001A",
  opacity: 1,
};

export type ClarityCallCtaSectionProps = Readonly<
  Partial<{
  sectionId: string;
  heading: string;
  body: string;
  ctaHref: string;
  ctaLabel: string;
  showBrandMark: boolean;
  brandMarkAlt: string;
}>
>;

export function ClarityCallCtaSection({
  sectionId = "book",
  heading = clarityCallCtaCopy.heading,
  body = clarityCallCtaCopy.body,
  ctaHref = clarityCallCtaCopy.ctaHref,
  ctaLabel = clarityCallCtaCopy.ctaLabel,
  showBrandMark = true,
  brandMarkAlt = "Joyzen",
}: ClarityCallCtaSectionProps) {
  return (
    <section
      id={sectionId}
      aria-labelledby="clarity-call-heading"
      className="relative min-h-[100svh] overflow-hidden"
    >
      <SectionBackground
        gradient={CLARITY_CALL_GRADIENT}
        overlayClassName="bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.25)_38%,rgba(255,255,255,0)_72%)]"
        topFadeClassName="bg-gradient-to-b from-[#fbfbfb] via-[#fbfbfb]/25 to-transparent"
        bottomFadeClassName="bg-gradient-to-t from-[#fbfbfb] via-[#fbfbfb]/25 to-transparent"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl items-start px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-[100px]">
        <div className="mx-auto w-full">
          <div
            className="relative mx-auto w-full max-w-[1064px] overflow-hidden rounded-[24px] px-6 py-10 backdrop-blur-xl sm:px-12 sm:py-12 md:min-h-[400px]
              before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/10 before:to-white/5
              after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-white/50"
            style={glassStyle}
          >
            <div className="relative grid h-full items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
              <div className="max-w-xl">
                <h3
                  id="clarity-call-heading"
                  className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
                >
                  {heading}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-zinc-700 sm:mt-4 sm:text-base sm:leading-7">
                  {body}
                </p>

                <div className="mt-6">
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2.5 text-xs font-semibold text-zinc-900 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/10 backdrop-blur transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/25 focus-visible:ring-offset-2"
                  >
                    <span>{ctaLabel}</span>
                    <span
                      className="inline-flex h-7 w-7 items-center justify-center"
                      aria-hidden="true"
                    >
                      <Image
                        src="/Group.svg"
                        alt=""
                        width={14}
                        height={14}
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </div>
              </div>

              {showBrandMark ? (
                <div className="relative hidden items-center justify-end md:flex md:pr-8 lg:pr-10">
                  <Image
                    src="/small_logo_purple.png"
                    alt={brandMarkAlt}
                    width={160}
                    height={160}
                    className="h-64 w-auto object-contain opacity-80"
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


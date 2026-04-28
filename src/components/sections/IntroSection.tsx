export function IntroSection() {
  return (
    <section
      aria-label="Intro"
      className="relative min-h-[100svh] overflow-hidden"
    >
      <div className="absolute inset-0">
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(ellipse at 0% 90%, rgba(224,122,90,0.38) 0%, rgba(224,122,90,0) 66%), radial-gradient(ellipse at 100% 94%, rgba(212,200,74,0.34) 0%, rgba(212,200,74,0) 60%), radial-gradient(ellipse at 50% 108%, rgba(232,144,106,0.18) 0%, rgba(232,144,106,0) 72%), linear-gradient(180deg, #fffefa 0%, #fdf5ec 55%, #f5ddc8 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.40)_0%,rgba(255,255,255,0.18)_42%,rgba(255,255,255,0)_74%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#fbfbfb] via-[#fbfbfb]/50 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#fbfbfb] via-[#fbfbfb]/50 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl items-center px-2">
        <div className="mx-auto max-w-6xl py-16 sm:py-20">
          <p
            className="text-center font-medium tracking-normal text-zinc-900 [text-wrap:balance]"
            style={{
              fontFamily: "Satoshi, var(--font-sans)",
              fontSize: "clamp(22px, 3.2vw, 40px)",
              lineHeight: "clamp(28px, 3.6vw, 44px)",
            }}
          >
            <span className="text-[#e27a2a]">Joyzen</span>
            <span>
              {" "}
              replaces fragmented care with a continuous system
            where hormones, fertility, and long-term health are managed
            together. Online or in clinic, it&apos;s the same person guiding your
            care. Tracking your progress.{" "}
            </span>
            <span className="text-zinc-500">
              Adjusting your treatment. Moving you forward. Joyzen connects you
              to the right doctor{" "}
              <span>
                and keeps your care continuous across every step. Always
                accessible speak to your doctor anytime not just during
                appointment.
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}


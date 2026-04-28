export function CareSection() {
  return (
    <section id="care" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(ellipse at 10% 100%, rgba(168,207,224,0.65) 0%, rgba(168,207,224,0) 62%), radial-gradient(ellipse at 95% 100%, rgba(45,122,69,0.40) 0%, rgba(45,122,69,0) 68%), linear-gradient(180deg, #fdfdf8 0%, #f4f5ed 60%, #e3ece3 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.05)_40%,rgba(255,255,255,0)_72%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#fbfbfb] via-[#fbfbfb]/45 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#fbfbfb] via-[#fbfbfb]/45 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
            Built for
            <br />
            <span className="font-semibold">Modern Life</span>
          </h2>
        </div>

        <div className="mt-10 flex flex-col items-center gap-5">
          <div className="relative h-28 w-28 overflow-hidden rounded-full bg-zinc-800/10 ring-4 ring-white/90 shadow-[0_18px_50px_rgba(0,0,0,0.10)]">
            <div className="absolute inset-0 bg-[url('/face.png')] bg-cover bg-[center_82%]" />
          </div>

          <div className="max-w-xl">
            <p className="text-base font-semibold text-zinc-900 sm:text-lg">
              Focused on Root, Not Symptoms
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-700 sm:text-base sm:leading-7">
              Joyzen was built on a simple realization: life has changed, but
              healthcare hasn&apos;t kept up. Care still begins too late. Joyzen
              enables earlier understanding, proactive care, and continuous
              guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


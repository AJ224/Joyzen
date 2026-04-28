import Image from "next/image";

export function BookSection() {
  return (
    <section id="book" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(ellipse at 0% 55%, #a8d8ea 0%, transparent 45%), radial-gradient(ellipse at 100% 60%, #d4b8e0 0%, transparent 40%), radial-gradient(ellipse at 15% 100%, #e8896a 0%, transparent 40%), radial-gradient(ellipse at 55% 100%, #e8956e 0%, transparent 45%), radial-gradient(ellipse at 100% 100%, #f0d96a 0%, transparent 35%), linear-gradient(180deg, #fffefa 0%, #fdf8f4 50%, #f5e8dc 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.25)_38%,rgba(255,255,255,0)_72%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#fbfbfb] via-[#fbfbfb]/25 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#fbfbfb] via-[#fbfbfb]/25 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl items-start px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-[100px]">
        <div className="mx-auto w-full">
          <div
            className="relative mx-auto w-full max-w-[1064px] overflow-hidden rounded-[24px] px-6 py-10 backdrop-blur-xl sm:px-12 sm:py-12 md:h-[400px]
              before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/10 before:to-white/5
              after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-white/50"
            style={{
              background: "#FFFFFF0A",
              border: "5.29px solid #FFFFFF03",
              boxShadow: "0px 2px 20px 0px #0000001A",
              opacity: 1,
            }}
          >
            <div className="relative grid h-full items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
              <div className="max-w-xl">
                <h3 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                  Book a clarity call
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-zinc-700 sm:mt-4 sm:text-base sm:leading-7">
                  If you would like to understand your reproductive health
                  better or learn how Joyzen can support your journey, you can
                  schedule a conversation with our care team.
                </p>

                <div className="mt-6">
                  <a
                    href="/schedule"
                    className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2.5 text-xs font-semibold text-zinc-900 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/10 backdrop-blur transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/25 focus-visible:ring-offset-2"
                  >
                    <span>Book Clarity Call</span>
                    <span
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/70 ring-1 ring-black/10"
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
                  </a>
                </div>
              </div>

              {/* Right icon */}
              <div className="relative hidden md:flex items-center justify-end pr-10">
                <Image
                  src="/small_logo_purple.png"
                  alt=""
                  width={160}
                  height={160}
                  className="h-64 w-auto object-contain opacity-80"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


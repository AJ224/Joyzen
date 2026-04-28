import { Navbar } from "@/components/Navbar";

export function Hero() {
  return (
    <header className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="h-[100svh] w-full bg-[url('/hero.png')] bg-cover bg-no-repeat bg-[40%_28%] sm:bg-[center_25%] md:bg-[center_28%]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.20)_0%,rgba(255,255,255,0.10)_35%,rgba(255,255,255,0)_70%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/5"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#fbfbfb]/40 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#fbfbfb] sm:h-48 md:h-56"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col px-6">
        <Navbar />

        <div className="flex flex-1 items-end pb-14 sm:pb-16 md:pb-20">
          <div className="max-w-2xl sm:-ml-1">
            <h1 className="text-3xl font-semibold tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)] sm:text-5xl md:text-6xl">
              A New Health System
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/85 sm:mt-4 sm:text-base sm:leading-7">
              Joyzen is not a clinic. It&apos;s a new way of delivering
              reproductive healthcare.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}


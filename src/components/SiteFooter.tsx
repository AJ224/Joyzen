export function SiteFooter() {
  return (
    <footer id="contact" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-[url('/footer_bg.jpg')] bg-contain bg-no-repeat bg-center md:bg-cover"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.18)_38%,rgba(255,255,255,0)_72%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#fbfbfb] via-[#fbfbfb]/35 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#fbfbfb] via-[#fbfbfb]/35 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col px-6 py-10 text-[11px] leading-5 text-zinc-900/85 sm:text-xs">
        <div className="flex items-start justify-end gap-6">
          <p className="whitespace-nowrap">
            Email:{" "}
            <a className="underline-offset-2 hover:underline" href="mailto:info@joyzenlife.com">
              info@joyzenlife.com
            </a>
          </p>
          <p className="whitespace-nowrap">
            Instagram:{" "}
            <a className="underline-offset-2 hover:underline" href="https://instagram.com/joyzen.in">
              @joyzen.in
            </a>
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <p>© {new Date().getFullYear()} Joyzen. Built for healthcare. Designed for trust.</p>
          <p className="sm:text-right">Designed and Developed by TIC Global Services</p>
        </div>
      </div>
    </footer>
  );
}


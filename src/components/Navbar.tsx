"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

const glassBase = "backdrop-blur-xl";

const glassStyle: React.CSSProperties = {
  background: "#FFFFFF0A",
  border: "5.29px solid #FFFFFF03",
  boxShadow: "0px 2px 20px 0px #0000001A",
  opacity: 1,
};

type NavbarLink = {
  label: string;
  href: string;
};

const links: NavbarLink[] = [
  { label: "About", href: "#why" },
  { label: "Programs", href: "#care" },
  { label: "Who It's For", href: "#care" },
  { label: "Products", href: "#book" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("#why");
  const panelId = useId();
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const syncFromHash = () => {
      const h = globalThis.location?.hash;
      if (h) setActiveHref(h);
    };
    syncFromHash();
    globalThis.addEventListener("hashchange", syncFromHash);
    return () => globalThis.removeEventListener("hashchange", syncFromHash);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    globalThis.addEventListener("keydown", onKeyDown);
    return () => globalThis.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open) {
      if (!el.open) el.showModal();
      return;
    }
    if (el.open) el.close();
  }, [open]);

  return (
    <div className="flex items-center justify-between py-6">
      <Link
        href="/"
        className="inline-flex items-center gap-3"
        aria-label="Joyzen home"
      >
        <Image
          src="/logo.png"
          alt="Joyzen"
          width={120}
          height={28}
          priority
          className="h-6 w-auto md:h-7"
        />
      </Link>

      <button
        type="button"
        className={`md:hidden inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20 ${glassBase}`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        style={glassStyle}
      >
        Menu
      </button>

      <nav className="hidden md:block">
        <div className="flex items-center gap-1 rounded-full px-2 py-1 text-sm text-white/90">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                activeHref === l.href ? glassBase : ""
              }`}
              style={activeHref === l.href ? glassStyle : undefined}
              aria-current={activeHref === l.href ? "page" : undefined}
              onClick={() => setActiveHref(l.href)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>

      <a
        href="#book"
        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20 ${glassBase}`}
        style={glassStyle}
      >
        <span>Book Clarity Call</span>
        <span
          className="inline-flex h-7 w-7 items-center justify-center"
          aria-hidden="true"
        >
          <Image
            src="/Group.svg"
            alt=""
            width={14}
            height={14}
            className="h-3.5 w-3.5 brightness-0 invert"
            aria-hidden="true"
          />
        </span>
      </a>

      {/* Mobile panel */}
      <dialog
        ref={dialogRef}
        id={panelId}
        className="md:hidden fixed m-0 w-auto max-w-none rounded-[24px] p-0 text-white backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] motion-fade-up"
        onClose={() => setOpen(false)}
        style={glassStyle}
      >
        <div className="w-[calc(100vw-2rem)] max-w-[520px] p-3">
          <div className="flex items-center justify-between px-2 py-1">
            <p className="text-sm font-semibold text-white/90">Navigate</p>
            <button
              type="button"
              className="rounded-full px-3 py-2 text-sm font-semibold text-white/85 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <div className="mt-2 grid gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                  activeHref === l.href ? glassBase : ""
                }`}
                style={activeHref === l.href ? glassStyle : undefined}
                aria-current={activeHref === l.href ? "page" : undefined}
                onClick={() => {
                  setActiveHref(l.href);
                  setOpen(false);
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </dialog>
    </div>
  );
}


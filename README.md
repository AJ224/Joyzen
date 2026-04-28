## Project overview

This is a mobile-responsive marketing landing page implemented with **Next.js (App Router)** and **Tailwind CSS**, based on the provided Figma design.

## Submission links

- **GitHub repo**: (add link)
- **Deployed link (Vercel)**: (add link)

## What’s implemented

- **Marketing page composition** (`src/app/page.tsx`) with primary sections (Intro, Why, Care, CTA) and a footer.
- **Mobile + desktop navigation** (`src/components/Navbar.tsx`)
  - mobile menu via a modal `<dialog>`
  - desktop nav with **active item** styling (`aria-current`)
  - “Book Clarity Call” CTA with icon (`public/Group.svg`)
- **Reusable section background system** (`src/components/sections/SectionBackground.tsx`) used across sections for consistent layered gradients.
- **Configurable CTA section** (`src/components/sections/ClarityCallCtaSection.tsx`) with props + defaults.
- **Centralized marketing copy** (`src/components/sections/copy.ts`) to keep content changes isolated from layout code.

## Architecture & strategies (why it’s structured this way)

### Separation of concerns (SRP / SOLID-ish frontend)

- **Background rendering** is isolated into `SectionBackground` so sections don’t own the complexity of layered gradient chrome.
- **Content vs configuration**: copy is extracted to `copy.ts`, while components focus on composition/layout.
- **Composable sections**: `ClarityCallCtaSection` supports overrides via props (heading/body/CTA href/label) while keeping defaults for simple usage.

This keeps components small, testable, and easier to evolve (Open/Closed: new sections or variants require configuration, not copy/paste).

### DRY: a shared 4-layer background model

Several sections share the same conceptual background stack:

- base gradient layer
- center radial overlay layer
- top fade
- bottom fade

To prevent copy/paste drift, sections provide:

- a module-level `*_GRADIENT` constant (the only inline style needed)
- Tailwind classNames for overlay + fades

### Why gradients are implemented as code (not image assets)

Gradients were intentionally implemented as CSS (radial + linear), not exported PNG/JPEG backgrounds:

- **Responsiveness**: gradients scale naturally to any viewport (no multiple exports for breakpoints).
- **Performance**: avoids extra image requests + decode cost for large background assets.
- **Maintainability**: quicker iteration on stops/positions/colors and easier sharing across sections.
- **Visual fidelity**: crisp on high-DPI screens; no compression artifacts.

### Next.js + frontend best practices

- **Client-side navigation**: internal routes use `next/link` (avoids full reloads).
- **Image optimization**: raster assets use `next/image`; decorative icons use `alt=""` and `aria-hidden`.
- **Style performance**: heavy objects and gradient strings are hoisted to module constants (keeps diffs clean and avoids recreating objects per render).
- **Lint/build discipline**: verified with `npm run lint` and `npm run build`.

## Mobile responsiveness (what was done)

This implementation is **mobile-first** and scales using Tailwind breakpoints.

- **Viewport-safe sizing**: sections use `min-h-[100svh]` (better behavior on mobile browser chrome than `100vh`).
- **Breakpoint-driven layout**:
  - mobile: single-column, content-first
  - `md`/`lg`: grids progressively enhance to multi-column layouts
  - decorative elements use `hidden md:flex` when appropriate to keep mobile clean
- **No fixed-height traps**: fixed desktop heights were avoided; where a baseline is helpful, `min-height` is used (e.g. `md:min-h-[400px]`) so longer copy won’t overflow.
- **Typography**: key hero/intro text uses `clamp(...)` to stay readable across phone → desktop without abrupt jumps.
- **Navigation**: mobile menu is explicit (`md:hidden`), desktop nav appears at `md+`.

## Accessibility notes

- **Landmark naming**: key sections are labeled via `aria-labelledby` tied to the section heading.
- **Active navigation**: active link uses `aria-current="page"` for screen readers.
- **Decorative media**: purely decorative icons/images use `alt=""` and `aria-hidden` to avoid noisy announcements.
- **Reduced motion**: hover/transition effects use `motion-safe:*` patterns where applicable so reduced-motion users aren’t forced into animations.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

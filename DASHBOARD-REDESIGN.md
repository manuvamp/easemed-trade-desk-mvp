# Dashboard redesign brief (for an AI or developer taking over)

Goal: redesign the UI of the `/dashboard` route. The public landing page (`web/app/page.tsx`) was just redesigned — do not restructure it; use it as the design-language reference.

## Where things live

- `web/app/dashboard/page.tsx` — the entire dashboard (~2,400 lines, `"use client"`). Role switcher, inventory, documents, transactions, connectors all live here.
- `web/app/globals.css` — all styling. The **dashboard block is lines 1–2698** (scoped, older indigo `#3a48f1` theme). Landing styles start at line 2699 under `.landing-page` — don't touch those.
- `web/app/layout.tsx` — root layout + metadata (Satoshi font from Fontshare).
- `web/tests/rendered-html.test.mjs` — SSR smoke tests.

## Stack constraints

- **vinext** (Next.js-compatible App Router on Vite 8), React 19, TypeScript.
- **No UI libraries.** All styling is plain hand-authored CSS in `globals.css`. Match that approach; don't introduce Tailwind/UI kits.
- Node >= 22.13.

## Run / verify

```bash
cd web
npm install
npm run dev      # http://localhost:3000/dashboard
npm test         # build + SSR smoke tests
```

## Hard constraints

1. **Keep the role model**: Business owner / Sales / Warehouse / Logistics switcher with role-scoped views. This is the product's core demo concept.
2. **Tests assert dashboard strings.** `web/tests/rendered-html.test.mjs` requires identifiers like `activeRole`, `sectionsForRole`, `SimpleOverviewSection`, `ProductInventoryPanel`, `IncomingOrdersSection`, `ApprovalActions`, `OrderDetailModal`, `Create order`, `Add product`. Either keep these strings/identifiers or update the test file in the same change. `npm test` must pass.
3. **Keep demo data flows working**: inventory, orders, approvals, transactions, carrier connectors, info modals.
4. Don't regress the landing page (`web/app/page.tsx` + landing CSS block).

## Design direction (recommended)

- Align the dashboard with the landing identity instead of the old indigo theme:
  - Ink `#101828`, body `#4a5565`, canvas `#ffffff` / soft `#fafafa`
  - Primary purple `#6f6bad` (dark `#57538c`, bright `#918dd4`, soft `rgba(111,107,173,0.07)`)
  - Navy bands `#1a1830` / cards `#232140`; hairlines `#e5e7eb`
  - Font: Satoshi (already loaded), headings 700, tight letter-spacing (-0.01em to -0.035em)
  - Pill buttons (999px radius), 12–20px card radii, shadows like `0 16px 40px -20px rgba(111,107,173,0.28)`
- Motion vocabulary on the landing page: scroll reveals via `data-animate` + IntersectionObserver + `.in-view`, `cubic-bezier(0.16,1,0.3,1)` easing, pulsing live dots, grow-in bars. Reuse sparingly; respect `prefers-reduced-motion`.
- The dashboard is a **demo for investors/pilot customers** — it should feel like a real product: dense but clean, obvious hierarchy, live-feeling status.

## Deploy (after redesign, if requested)

```powershell
cd web
$env:NITRO_PRESET = "vercel"
npm run build
npx --yes vercel@latest deploy --prebuilt --prod --yes --scope infotiks-projects
```

Production: https://easemed-trade-desk.vercel.app/dashboard

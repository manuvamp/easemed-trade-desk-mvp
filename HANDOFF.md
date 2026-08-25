# EaseMed MVP handoff

Updated: 2026-08-25

## Current state

The EaseMed procurement MVP is implemented and pushed to GitHub.

- GitHub repository: <https://github.com/manuvamp/easemed-trade-desk-mvp>
- GitHub visibility: public
- Default branch: `main`
- Latest commit: `4516cd4 chore: add vercel nitro deployment adapter`
- Vercel production site: <https://easemed-trade-desk.vercel.app/>
- Dashboard route: <https://easemed-trade-desk.vercel.app/dashboard>
- Existing OpenAI Sites preview: <https://easemed-trade-desk.infotikk-4135.chatgpt.site/>

The Vercel production deployment was smoke-tested for both `/` and `/dashboard`. The landing page renders its hero, platform sections, testimonials, founder section, and CTA. The dashboard renders the role switcher, inventory copy, and logistics view without browser console errors.

## Product scope already built

- FireAI-inspired EaseMed landing page with rewritten copy and visual system.
- Landing-page sections for platform workflow, audiences, partner/network examples, sample testimonials, founder story, and demo CTA.
- Dashboard at `/dashboard` with demo data and quick role switching for Business owner, Sales, Warehouse, and Logistics.
- Role-focused actionable dashboard views from the earlier MVP requirements.
- Existing demo inventory, order, approval, transaction, and carrier-connector flows.
- UI responsive fixes for desktop, tablet, medium desktop, and mobile breakpoints.
- Vercel deployment adapter for the `vinext` build.

## Important files

All application code is under `web/`.

- `web/app/page.tsx` — public landing page.
- `web/app/dashboard/page.tsx` — interactive dashboard MVP.
- `web/app/globals.css` — landing page and dashboard styling.
- `web/app/layout.tsx` — metadata and root layout.
- `web/vite.config.ts` — Cloudflare/Sites build path locally and Nitro/Vercel path when `NITRO_PRESET=vercel` or `VERCEL=1`.
- `web/vercel.json` — Vercel build command and output configuration.
- `web/tests/rendered-html.test.mjs` — server-rendering smoke tests for landing page and dashboard.
- `web/lib/supabase.ts` — existing Supabase client connection point.
- `web/.openai/hosting.json` — existing Sites project metadata; keep it intact.

## Local setup

From the repository root:

```powershell
Set-Location ".\web"
npm install
npm test
npm run lint
npm run dev
```

The local dev URL is `http://localhost:3000/`.

## Vercel deployment

The app uses `vinext`. Its normal build output is Cloudflare-oriented, so Vercel must use Nitro and the Vercel build output. The adapter is already committed.

From `web/` in PowerShell:

```powershell
$env:NITRO_PRESET = "vercel"
npm run build
npx --yes vercel@latest deploy --prebuilt --prod --yes --scope infotiks-projects
```

The Vercel project is `infotiks-projects/easemed-trade-desk`. Keep the production alias `https://easemed-trade-desk.vercel.app/` after redeploying.

## Git workflow

```powershell
Set-Location "E:\ai\proqurement dashboard ''"
git status
git add web
git commit -m "describe the change"
git push github main
```

Do not use `git reset --hard` or overwrite unrelated user changes. The repository has both a `github` remote and a `sites` remote; GitHub is the public source-control repository.

## Known limitations / next work

- This is still an MVP using demo data. Supabase persistence, SSO, WhatsApp Business notifications, real carrier APIs, and CSV inventory persistence are not fully connected.
- The dashboard should remain role-minimal: business owner has visibility, Sales handles product/order/payment work, Warehouse handles inventory, and Logistics handles approval/routing.
- Replace illustrative partner names, testimonial copy, founder details, and placeholder metrics with approved content before public marketing use.
- If the user later asks for the Vercel site itself to be public, check and change Vercel Deployment Protection separately; making the GitHub repository public does not change Vercel access protection.
- Before a production data rollout, add environment variables and backend security/RLS, then run end-to-end tests for order state propagation across Sales, Warehouse, and Logistics.

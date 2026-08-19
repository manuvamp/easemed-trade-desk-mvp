# Procurement dashboard

This repository contains the requirements, transcription, reuse-first repository research, implementation plan, and MVP for the procurement, inventory, fulfillment, notification, and WhatsApp tracking dashboard.

Start with [artifacts/dashboard-plan.md](artifacts/dashboard-plan.md).

The current MVP lives in [`web/`](web/) and is intentionally demo-first:

- populated dummy trade packs, document readiness, activity, and connector data;
- one-click switching between business owner, sales, warehouse, and logistics views;
- quick switching between overview, documents, transactions, and carrier connectors;
- a demo document-pack form that shows the future workflow without persisting data;
- an optional, publishable-key-only Supabase client boundary in `web/lib/supabase.ts`;
- a carrier-agnostic connector registry UI ready for future provider adapters.

Run it locally from `web/` with `npm install`, `npm run dev`, then open `http://localhost:3000/`. Use `npm test` and `npm run lint` before committing.

The planned backend delivery path remains:

1. Prove fit with ERPNext as the first system-of-record candidate.
2. Use Refine for a custom user-facing notification/tracking board when the native screens are not enough.
3. Add a carrier-connector registry with direct and aggregator connectors plus a WhatsApp Cloud API notification service.
4. Use Supabase Postgres plus Refine only as the custom-build fallback if ERPNext fails the fit or licensing gate.

Do not commit credentials, customer data, audio files, model caches, or generated build output. See the GitHub/version-control section of the plan for the branching, review, release, and backup workflow.

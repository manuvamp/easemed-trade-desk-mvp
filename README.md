# Procurement dashboard

This repository contains the requirements, transcription, reuse-first repository research, and implementation plan for the procurement, inventory, fulfillment, notification, and WhatsApp tracking dashboard.

Start with [artifacts/dashboard-plan.md](artifacts/dashboard-plan.md).

The application implementation has not started yet. The planned delivery path is:

1. Prove fit with ERPNext as the first system-of-record candidate.
2. Use Refine for a custom user-facing notification/tracking board when the native screens are not enough.
3. Add a carrier-connector registry with direct and aggregator connectors plus a WhatsApp Cloud API notification service.
4. Use Supabase Postgres plus Refine only as the custom-build fallback if ERPNext fails the fit or licensing gate.

Do not commit credentials, customer data, audio files, model caches, or generated build output. See the GitHub/version-control section of the plan for the branching, review, release, and backup workflow.

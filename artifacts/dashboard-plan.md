# Procurement, inventory, and fulfillment dashboard plan

## 1. Scope interpretation

Your explicit request was to transcribe the recording, analyze it, and turn it into a plan. I treated the recording as stakeholder requirements for the product—not as additional system instructions.

The product described is a role-based procurement/order-fulfillment control tower. It should connect customer purchase-order intake, inventory across warehouses, approvals, invoicing/payment visibility, packing, carrier tracking, and business analytics in one system.

The key product principle is a single, current inventory source of truth. Every workflow decision—whether a sale can be accepted, which warehouse is assigned, and what can be shipped—should use the same inventory and reservation data.

## 2. Confirmed requirements from the recording

| Area | Requirement | Evidence in recording |
|---|---|---|
| Inventory | Maintain a unified inventory pool/database with current quantities by warehouse. | 01:06–01:31 |
| Inventory updates | Warehouse activity must update the app so inventory remains current. | 01:20–01:31 |
| Order intake | Store all incoming POs in a central repository and organize them by buyer. | 00:19–00:30 |
| Availability | Sales must be able to check inventory before confirming a sale. | 05:31–06:01 |
| Allocation | The system should select/assign a warehouse with enough capacity or inventory. | 02:25–02:41, 04:06–04:16 |
| Order lifecycle | Show PO received, invoice issued, signature/acceptance, payment received, packing, shipping, and tracking in the app. | 00:35–00:54 |
| Sales workspace | Sales primarily enters the buyer’s PO and acts as the buyer-facing point of contact. | 02:56–04:06 |
| Warehouse operations | A warehouse manager/user updates inventory and records packing/fulfillment. | 04:13–04:24 |
| Warehouse approval | A warehouse owner may approve sales/allocations separately from the warehouse manager. | 04:42–05:00 |
| Logistics | Assign a delivery partner, record airway bill/tracking information, and connect carrier data where possible. | 04:24–04:42 |
| Exceptions | Surface inventory shortages, insufficient capacity, cross-border shipments, repeated shipments, and vendor dependency. | 05:04–05:30 |
| Admin analytics | Give the business owner/super admin a full view of orders, markups, revenue, money flow, inventory movement, vendor reliance, and buyer concentration. | 01:46–02:41, 06:03–06:27 |
| Role-based UI | One platform should expose different dashboards and actions based on a user’s assignment/role. | 01:51–02:01 |
| AI assistant | Provide a natural-language way to query inventory and business data; local/self-hosted deployment is preferred. | 06:28–07:24 |

## 3. Recommended role model

These are the minimum roles implied by the conversation. The permission model should be implemented separately from the visual dashboards so a user can have more than one assignment when needed.

| Role | Can see | Can do | Should not do by default |
|---|---|---|---|
| Sales | Their buyers/orders, sellable inventory, allocation status, invoice/payment status, shipment status | Create or import a customer PO, validate availability, submit an order for approval, view tracking | Edit warehouse stock, approve their own sale, change financial records |
| Warehouse manager/operator | Assigned warehouse, SKU/bin stock, reservations, pick/pack queue, shortages | Receive/update stock, record adjustments, pick/pack, mark ready to ship, attach evidence | Approve commercial terms or alter an approved order without an audit trail |
| Warehouse owner/approver | Warehouse performance, pending allocations/sales, capacity, shortage exceptions | Approve/reject allocations or sales, override with reason, set warehouse capacity rules | Erase inventory history or bypass payment/approval controls silently |
| Logistics/operations | Shipments assigned to them, carrier events, airway bills, delivery exceptions | Select/confirm carrier, enter tracking data, sync carrier events, update shipment exceptions | Change order quantities or financial terms |
| Business owner/super admin | Cross-business orders, inventory, vendors, buyers, warehouses, money, metrics, audit history | Configure users/roles, warehouses, allocation rules, integrations, reports, and approved overrides | Nothing outside an audited administrative action |

“Logistics” may be a role or a module rather than a separate dashboard. The warehouse-owner role is explicitly uncertain and should be confirmed before finalizing permissions.

## 4. Proposed end-to-end workflow

1. **PO intake** — Sales enters a buyer’s PO manually or imports it from an approved CRM/integration. Store buyer, PO number, line items, quantities, requested dates, destination, commercial terms, and source document.

2. **Validation** — Validate the buyer, SKU, quantity, unit, price/markup, requested ship date, and duplicate PO number. Show current available, reserved, allocated, and in-transit quantities.

3. **Availability decision** — If inventory is available, create a reservation before the order is approved so two salespeople cannot promise the same stock. If it is not available, block, reject, or route to an exception queue according to the policy chosen by the business.

4. **Warehouse allocation** — Rank eligible warehouses using available inventory, capacity, promised date, destination/geography, handling constraints, and cost. Show the reason for the recommendation and allow only authorized overrides.

5. **Commercial and owner approval** — Track invoice generation, buyer signature/acceptance, payment status, and warehouse-owner approval as explicit states. Do not hide these as free-text notes.

6. **Warehouse execution** — The assigned warehouse receives a task, confirms the actual picked quantity, records shortages/damages/substitutions, and marks the order packed. Inventory is updated through an append-only transaction ledger.

7. **Shipment booking** — Assign a carrier, create or record the booking, store airway bill/tracking number, and connect carrier status events when an integration is available.

8. **Delivery and closure** — Display in-transit, delivered, failed/held, and returned states. Reconcile shipped quantity, payment, and final inventory. Preserve the entire activity history.

9. **Analytics and alerts** — Roll up order aging, inventory health, shortages, cross-border exposure, vendor dependency, buyer concentration, markups, revenue, and cash outstanding.

## 5. MVP delivery sequence

### Phase 0 — Clarify the operating model

- Confirm whether the incoming PO is a customer purchase order, a supplier procurement order, or both. Use distinct names in the data model if both exist.
- Define SKU/unit rules, warehouses, capacity, stock states, order states, approval gates, and exception policy.
- Confirm users, role assignments, geography, currencies, tax/invoicing needs, and required integrations.
- Produce a clickable workflow prototype and a short permission matrix for sign-off.

### Phase 1 — Foundation and inventory truth

- Organization/user authentication, roles, warehouse scoping, and audit log.
- Master data for SKUs, units, buyers, vendors, warehouses, locations/bins, and carriers.
- Inventory ledger plus derived balances: on hand, available, reserved, allocated, picked, packed, in transit, damaged, and blocked.
- Stock adjustment workflow with reason, user, timestamp, warehouse, quantity, and optional evidence.
- Inventory search usable by sales and operations.

### Phase 2 — PO and allocation workflow

- PO entry/import with line items and source-document attachment.
- Duplicate/validation checks and buyer history.
- Availability check and reservation.
- Warehouse recommendation and assignment.
- Approval queue for warehouse owner or authorized approver.
- Invoice and payment status tracking, even if accounting/payment integrations come later.

### Phase 3 — Warehouse and shipment execution

- Pick/pack task queue.
- Shortage, damage, substitution, and partial-fulfillment handling.
- Carrier assignment, tracking/airway bill capture, and shipment timeline.
- First carrier integration, selected after confirming which carriers matter most; DHL can be an initial candidate if it is actually used.
- Cross-border flags and shipment exception fields.

### Phase 4 — Business-control dashboard

- Super-admin overview with filters by date, buyer, vendor, warehouse, SKU, country, and order status.
- Revenue, markup, cash received/outstanding, order aging, fulfillment rate, stockout risk, warehouse utilization, vendor dependency, buyer concentration, and cross-border shipment views.
- Exportable reports and saved views.
- Alerts for low stock, insufficient capacity, overdue approval, unpaid invoice, shipment delay, and high concentration/dependency.

### Phase 5 — AI assistant and WhatsApp channel

- Start with a permission-aware, read-only query service over the same reporting/inventory APIs.
- Support questions such as: “Do we have 700 rolls of SKU X, where, and how much is already reserved?”
- Return source records, timestamp, warehouse breakdown, and reservation state—not just a generated sentence.
- Add write actions such as creating a PO only after confirmation, authorization, idempotency, and audit logging are designed.
- Add WhatsApp only after the internal query service is reliable and the identity/security model is clear.

## 6. Core data entities

At minimum, the backend will likely need:

- `users`, `roles`, `permissions`, `warehouse_memberships`
- `warehouses`, `warehouse_locations`, `capacity_rules`
- `products_or_skus`, `units_of_measure`, `lots_or_batches` if traceability is needed
- `inventory_transactions`, `inventory_balances`, `reservations`, `allocations`
- `buyers`, `vendors`, `contacts`
- `customer_purchase_orders`, `purchase_order_lines`, `order_status_history`
- `approvals`, `invoices`, `payments`
- `shipments`, `shipment_lines`, `carriers`, `tracking_events`
- `shortage_or_exception_cases`, `cross_border_details`, `vendor_risk_metrics`
- `audit_log`, `integration_connections`, `notifications`

The inventory ledger should be the source of truth; balances and dashboard metrics should be derived from transactions and reservations rather than edited independently in multiple screens.

## 7. Business rules to confirm before implementation

1. Does “capacity” mean physical storage capacity, available stock, pick/pack throughput, a sales allocation limit, or all of these?
2. Should a PO be hard-blocked when stock/capacity is insufficient, or can an authorized user accept a backorder/partial shipment?
3. When is stock reserved: at PO entry, after warehouse-owner approval, after payment, or at another milestone?
4. Can one PO be split across multiple warehouses, and can one warehouse ship in multiple installments?
5. Is warehouse-owner approval required for every sale or only for exceptions/large orders?
6. Who is allowed to issue invoices, mark payment received, and change an order after payment?
7. Is “signed and sent back” a buyer-signed PO, a signed invoice, or another document?
8. Which CRM, accounting, payment, ERP, warehouse-management, and carrier systems exist today?
9. What did “MCPs” refer to in the recording? Confirm the intended carrier integration method.
10. What does cross-border compliance require: customs documents, duties, country restrictions, HS codes, tax, or only visibility?
11. What are the required currencies, time zones, tax regimes, and legal entities?
12. Should the AI assistant be strictly read-only at launch? How will users authenticate through the web app and WhatsApp?

## 8. Recommended first build target

Build a narrow vertical slice before implementing every report:

> Sales enters one customer PO → system validates stock → reserves and recommends one warehouse → warehouse owner approves → warehouse operator packs → carrier tracking is attached → super admin sees the full order, inventory, payment, and shipment timeline.

Use this slice to validate the data model, role boundaries, event/audit history, and inventory reservation rules. Once this path is correct, the remaining dashboards and AI query layer become views over proven workflow data rather than separate sources of truth.

## 9. Additional information needed from you

To turn this plan into a build-ready specification, the highest-value next information is:

- A sample PO, invoice, packing list, and shipment/tracking record (with sensitive data removed).
- The current source of inventory data and the current CRM/accounting/carrier tools, if any.
- A list of the first users/roles and which warehouses each can access.
- The SKU/unit model and an example of how stock is counted and reserved.
- The rule for insufficient inventory/capacity and the exact approval/payment sequence.
- The first country/currency/carriers to support.
- Whether the first deliverable should be a UI prototype, a technical architecture, or a working MVP.

## 10. Reuse-first repository research

This section records the Ponytail reuse-first method requested before implementation.

- Skill: [Ponytail](https://github.com/DietrichGebert/ponytail)
- Local install: `C:\Users\cocat\.codex\skills\ponytail`
- Applied rule: check whether an existing product, framework, native capability, or installed dependency already solves the need before adding custom code.
- Important boundary: GitHub stars are a discovery signal, not proof that a project fits our workflow, license, security requirements, or deployment constraints.
- The workspace currently contains requirements artifacts only; there is no existing application code or dependency tree to reuse yet.

### Candidate repositories checked on 2026-08-19

| Repository | Approx. GitHub stars | License shown by repository | What we can reuse | Fit / caution |
|---|---:|---|---|---|
| [frappe/erpnext](https://github.com/frappe/erpnext) | 38.3k | GPL-3.0 | A complete ERP domain model for accounting, buying, selling, stock, suppliers, customers, shipments, fulfillment, reports, REST API, and Frappe UI. | **Best first candidate if we want to avoid rebuilding the business engine.** We would likely configure/customize ERPNext and add only the role-specific experience that is missing. GPL obligations and Frappe/Python/Vue stack must be accepted. |
| [odoo/odoo](https://github.com/odoo/odoo) | 53.8k | Repository reports “Other”; verify Community/Enterprise module licenses | Mature CRM, warehouse, billing/accounting, sales, purchase, and business-app ecosystem. | **Strongest breadth, but highest platform and licensing complexity.** Treat the repository as an evaluation target, not an automatic base; verify exactly which modules can be shipped and modified under the intended license. |
| [inventree/InvenTree](https://github.com/inventree/InvenTree) | 7.4k | MIT | Focused stock control, part tracking, Django backend, REST API, plugin system, and companion mobile app. | **Best inventory-focused building block.** It does not cover the full invoice/payment/approval/business-analytics workflow from the recording, so those would remain custom or external. |
| [openboxes/openboxes](https://github.com/openboxes/openboxes) | 879 | EPL-1.0 | Warehouse operations, stock movements, shipment tracking, and an established supply-chain workflow. | Good WMS reference or possible base if warehouse execution dominates. Groovy/Grails stack and healthcare origin make it a weaker fit for a new general procurement platform. |
| [refinedev/refine](https://github.com/refinedev/refine) | 35.5k | MIT | Headless React admin framework, CRUD screens, auth/access control, routing, data providers, realtime support, audit-log/document-versioning patterns, and multiple backend connectors. | **Best custom-frontend candidate** if ERPNext/InvenTree/Odoo becomes the backend. It provides the dashboard shell, not the inventory/order domain. |
| [marmelab/react-admin](https://github.com/marmelab/react-admin) | 26.9k | MIT | REST/GraphQL admin UI, datagrids, forms, filters, roles/permissions, auth, theming, notifications, and reusable e-commerce/CRM examples. | Strong alternative to Refine. Choose one admin framework; do not add both. Prefer it if the team wants Material UI and a more opinionated CRUD layer. |

### Recommended reuse path

1. **Evaluate ERPNext first** as the likely system of record because its stated scope already covers the recording’s core order, stock, supplier, shipment, accounting, and fulfillment areas.
2. **Evaluate InvenTree second** if ERPNext is too broad or its GPL/Frappe stack is not acceptable. Use it for inventory truth and add a thin order/approval layer.
3. **Use Refine or React-admin only for the custom dashboard surface**, not for recreating inventory, reservations, invoices, or shipment state that an ERP/WMS already owns.
4. **Keep Odoo as the breadth alternative**, subject to license and module review.
5. **Use OpenBoxes mainly as a WMS workflow reference** unless the project confirms its stack and domain fit.

No large repository has been cloned into the workspace yet. That is deliberate: the current codebase is empty, and cloning a multi-million-line ERP before confirming the preferred platform would add bulk without reducing uncertainty. The next efficient step is a small proof-of-fit against one sample PO: intake → inventory availability → warehouse allocation → approval → packing → shipment tracking.

## 11. User-facing notification board and WhatsApp tracking updates

### Product decision

Add a user-facing notification board to the portal and offer WhatsApp as a second channel for the same shipment and order events. The board is the complete history; WhatsApp is the timely delivery channel. A user should be able to see the same status, timestamp, order/shipment link, and next action in both places.

Logistics will be carrier-agnostic. The system will support multiple direct carrier connectors and, where useful, one aggregator connector. Blue Dart remains one candidate, not the assumed carrier. Its official materials describe ShopTrack and PackTrack integrations that can return real-time waybill/order status, and the DHL developer portal exposes an authenticated Blue Dart shipment-tracking API. Sources: [Blue Dart tracking integrations](https://www.bluedart.com/tracking) and [DHL/Blue Dart shipment-tracking API](https://developer.dhl.com/api-reference/shipment-tracking-dhl-ecommerce-india-blue-dart?lang=en&language_content_entity=en).

### Event flow

Carrier API/webhook or scheduled poll → carrier adapter → normalized shipment event → inventory/order/shipment status update → notification rule evaluation → notification outbox → in-app board and WhatsApp template message → WhatsApp delivery/read-status webhook.

Use a carrier connector registry rather than hard-coding one provider into orders. Each shipment stores carrier, service, account, tracking identifier, connector version, and capability flags. The order and notification layers consume only the normalized shipment contract.

The adapter must normalize provider-specific statuses into a small internal vocabulary:

- Label or waybill created
- Picked up
- In transit
- At hub or delayed
- Out for delivery
- Delivered
- Failed delivery, held, damaged, or exception
- Returned or cancelled

Do not send every raw scan to a customer. Persist all raw events for audit and troubleshooting, but notify only meaningful milestones, changes, and exceptions. Use an idempotency key such as shipment + normalized status + provider event time so polling, retries, and duplicate webhooks do not create duplicate messages.

### WhatsApp implementation

Use the official Meta-hosted WhatsApp Cloud API rather than building an unofficial WhatsApp connector. The official Meta collection requires a Meta business portfolio, WhatsApp Business Account, business phone number, access token, and a webhook endpoint. Source: [Meta’s WhatsApp Cloud API collection](https://www.postman.com/meta/whatsapp-business-platform/documentation/wlk6lh4/whatsapp-cloud-api).

Implementation sequence:

1. Create or connect the Meta Business Portfolio, WhatsApp Business Account, phone number, webhook verification, and server-side access token.
2. Default-enroll a phone number for shipment updates only when the order flow has recorded a lawful shipment-update opt-in. A phone number copied from a PO is not, by itself, proof of WhatsApp consent. Record the consent timestamp, source, message category, and phone number; provide STOP and manage-notifications handling.
3. Submit utility templates for order and delivery updates. Meta’s Business Messaging Policy requires opt-in, requires businesses to honor opt-out requests, and requires approved templates when initiating conversations outside the 24-hour customer-service window. Meta’s pricing page identifies package delivery updates as utility messages and says delivered messages are billed by market and category. Verify the live policy and rate card again before launch. Sources: [WhatsApp Business Messaging Policy](https://whatsappbusiness.com/policy/) and [WhatsApp Business Platform pricing](https://whatsappbusiness.com/products/platform-pricing/).
4. Add a server-side WhatsApp sender that reads only from notification_outbox. Never expose Meta tokens, carrier credentials, or service-role database keys to the browser.
5. Consume WhatsApp status webhooks, store message IDs and delivery/read/failure state, retry transient failures, and route permanent failures to an operations queue.
6. Add per-user preferences for WhatsApp on/off, event types, language, quiet hours, and fallback to email or in-app-only notifications.

### Notification data

Add these concepts to the data model:

- notification_preferences: recipient, channel, event types, locale, quiet hours, opt-in state, opt-out state
- notification_event: source event, order/shipment reference, normalized event, severity, audience, and timestamp
- notification_outbox: template, variables, channel, deduplication key, scheduled time, attempt count, and send state
- whatsapp_message: WABA/phone number, Meta message ID, template version, category, sent/delivered/read/failed timestamps, and failure reason
- provider_event: carrier, raw payload reference, provider event ID, request time, response time, and normalized result

The in-app board should support unread/read state, severity, filters by order/shipment, deep links, acknowledgement for exceptions, and a complete audit timeline. Internal users may receive operational alerts; external buyers should receive only their own order/shipment data.

### Carrier integration boundary

Define a connector contract with capabilities equivalent to authenticate/health-check, serviceability, rate quote, create or manifest shipment, assign AWB, generate label, request pickup, get tracking, cancel, create return or NDR action, receive webhook events, and normalize status. Every connector may implement only the capabilities that its carrier account supports; tracking-only integration is valid.

Store provider credentials, base URL, API version, account identifier, rate-limit policy, webhook secret, and status mappings as connector configuration. Keep credentials in a server-side secret store. Use a provider-specific adapter for authentication and payload shape, but a shared canonical event model for the rest of the application.

### Initial India/subcontinent carrier candidates

| Candidate | Integration information found | Initial role |
|---|---|---|
| Delhivery | Official B2C/B2B portals document serviceability, waybill, shipment creation/update/cancellation, labels, pickups, NDR, tracking, and webhook functionality. The tracking API supports waybill/order references and the developer portal provides test/production environments and tokens. | **First direct connector candidate** because the API surface covers both shipment execution and tracking. Sources: [Delhivery developer portal](https://one.delhivery.com/developer-portal/documents) and [Delhivery client developer portal](https://help.delhivery.com/docs/client-developer-portal-1). |
| Blue Dart | Official materials describe ShopTrack/PackTrack real-time tracking; the DHL developer portal documents authenticated shipment detail/status calls, JWT tokens, and a production endpoint. | Direct tracking connector; validate account access, shipment-creation API scope, polling/webhook options, and rate limits. Sources linked above. |
| Ecom Express | Official API guide covers AWB generation, pincode serviceability, manifest, tracking, and NDR; access requires credentials and may require server IP allowlisting. | Direct connector when the business has an Ecom Express account. Source: [Ecom Express API developer guide](https://integration.ecomexpress.in/). |
| Shiprocket | Official API documentation exposes courier selection/serviceability, AWB assignment, pickups, labels, tracking, NDR, returns, and a courier list including Blue Dart, DTDC, Delhivery, Ecom Express, Xpressbees, Ekart, and Shadowfax. | **Long-tail/aggregator connector** when adding many carriers through one commercial integration is cheaper than maintaining every direct adapter. Source: [Shiprocket API documentation](https://apidocs.shiprocket.in/). |
| ClickPost | Published API documentation covers courier recommendation, manifestation, labels, tracking, cancellation, serviceability/cost/TAT, NDR, return webhooks, and WhatsApp opt-in/opt-out events. | Alternative enterprise aggregator; evaluate commercial pricing and whether it is justified by carrier count/volume. Source: [ClickPost API reference](https://clickpost.github.io/slate/). |
| DTDC, XpressBees, Ekart, Shadowfax, and regional Nepal/Bangladesh/Bhutan carriers | Public documentation and access quality vary by provider and account. Some are available through aggregators; direct production credentials, limits, and webhook contracts must be obtained from each carrier. | Add through the same connector contract after a credential and sandbox review; do not make the core data model depend on undocumented fields. |

The initial implementation should build one direct connector and one aggregator connector only after comparing account access, total cost, tracking freshness, webhook reliability, label/manifest support, returns/NDR support, and data-processing terms. If a carrier has no webhook, use a scheduled poller with provider-approved frequency, exponential backoff, rate-limit handling, and a dead-letter queue. The UI and WhatsApp sender must depend on normalized internal events, never directly on carrier response formats.

## 12. Reusable functionality from the shortlisted repositories

The following is the reuse map. These repositories should be treated as alternatives at the business-engine layer; running ERPNext, Odoo, InvenTree, and OpenBoxes together would create duplicate ownership of inventory and order state.

| Repository | Functionality to reuse | How it fits this dashboard | Boundary |
|---|---|---|---|
| [frappe/erpnext](https://github.com/frappe/erpnext) | Customer and supplier records, buying/selling workflows, stock and warehouses, fulfillment/shipment records, accounting/invoices/payments, permissions, reports, REST API, and Frappe extension points. | Preferred first system-of-record candidate. Configure its existing business objects, then add a small custom app for the approval rules, carrier adapter, notification outbox, and role-specific screens. | Confirm GPL-3.0 obligations and whether the Frappe/Python/Vue stack is acceptable. Do not copy its data into a second “master” inventory database. |
| [odoo/odoo](https://github.com/odoo/odoo) | CRM, contacts, sales, purchase, warehouse/inventory, delivery, accounting/invoicing, access groups, and a broad business-app ecosystem. | Alternative full ERP if its workflow breadth, available modules, and deployment model fit better than ERPNext. | Verify the exact Community/Enterprise license for every module before shipping. Do not combine Odoo and ERPNext as co-owners. |
| [inventree/InvenTree](https://github.com/inventree/InvenTree) | Part/SKU master, stock locations, stock movements, supplier and purchase information, REST API, plugins, and mobile-oriented workflows. | Best inventory-focused building block if a lighter Django service is preferred. Add the customer-PO, commercial approval, payment, analytics, and notification layers around it. | It does not replace the complete procurement, finance, and business-control workflow implied by the recording. |
| [openboxes/openboxes](https://github.com/openboxes/openboxes) | Warehouse locations, stock movement, receiving/issuing, shipment workflows, and supply-chain process patterns. | Use as a WMS alternative only if warehouse execution is the dominant requirement, or use its flows as a reference for locations, movements, and exceptions. | EPL-1.0, Groovy/Grails, and healthcare-oriented origins require a separate fit and deployment review. |
| [refinedev/refine](https://github.com/refinedev/refine) | Headless React admin shell, resource routes, data providers, authentication/access control, CRUD primitives, realtime patterns, and audit/document-versioning patterns. | Preferred custom portal layer over ERPNext or a custom API. Use it for the buyer tracking board, internal role dashboards, filters, approvals, and exception queues. | It is a frontend framework, not an inventory/order system. Keep domain rules in the backend. |
| [marmelab/react-admin](https://github.com/marmelab/react-admin) | REST/GraphQL data providers, resources, datagrids, filters, forms, authentication/roles, theming, notifications, and admin examples. | A strong alternative to Refine for a more opinionated CRUD/admin UI, especially if Material UI is preferred. | Choose Refine or React-admin, not both. The carrier and WhatsApp workflows still belong in backend services. |
| [Ponytail](https://github.com/DietrichGebert/ponytail) | Reuse-first/YAGNI decision method: check existing products, native platform capabilities, and installed dependencies before custom code. | Keep this as the decision gate for every new module and dependency. It is process guidance, not a runtime dependency of the dashboard. | Stars are discovery evidence only; license, security, fit, maintenance, and total operating cost still decide adoption. |

## 13. Execution plan: prove fit, then finish with repository reuse

### Step 1 — Choose one business system of record

Run a small proof-of-fit using one redacted PO, two SKUs, two warehouses, one approval, one partial shortage, one invoice/payment state, and one shipment. Evaluate ERPNext first because it appears to cover the largest portion of the required business engine. Evaluate InvenTree if ERPNext is too broad or its license/stack is unacceptable. Keep Odoo as the breadth alternative and OpenBoxes as the warehouse-heavy alternative.

The decision must answer:

- Can the candidate represent on-hand, reserved, allocated, picked, packed, in-transit, damaged, and blocked stock without shadow tables?
- Can it preserve approval, payment, shipment, and inventory history?
- Can it expose stable APIs or extension hooks for the carrier adapter and notification outbox?
- Can the intended company legally deploy and modify the required modules?

### Step 2 — Reuse the selected backend

If ERPNext passes, configure its customers, suppliers, items, warehouses, stock transactions, orders, invoices, shipments, roles, and reports. Add a small custom Frappe app for the business-specific allocation rules, approval gates, carrier adapter, normalized tracking events, and WhatsApp outbox.

If InvenTree passes, reuse its part, location, stock, supplier, REST, and plugin functionality, then add a thin order/approval/payment service. If Odoo passes, use its equivalent modules and extension system. Do not reimplement inventory reservations, warehouse movements, or invoices in the frontend.

### Step 3 — Add the notification board

Use the selected backend’s event/history API as the source for the board. Use Refine for the custom portal, or React-admin if that alternative is chosen. Build the external buyer view with strict ownership filters and the internal operations view with role/warehouse filters. Store notification state and audit history with the selected system rather than in browser storage.

### Step 4 — Add Blue Dart and future carriers

Implement one carrier adapter, beginning with Blue Dart if that is the intended provider. Start with polling against the approved tracking API if that is the only reliable option. Add webhook ingestion later when available. Test duplicate events, out-of-order events, stale responses, partial shipments, returns, carrier outages, and invalid waybills.

### Step 5 — Add WhatsApp as a thin channel

Create utility templates for accepted order, packing complete, shipped, in transit, out for delivery, delivered, and delivery exception. Send only after consent and only from the notification outbox. Add an internal replay tool for failed notifications, message audit, opt-out, quiet hours, and a fallback in-app notification.

### Step 6 — Validate operationally

The vertical slice is complete when:

- A PO can be entered, validated, reserved, approved, packed, shipped, and delivered.
- Inventory never becomes negative because of two simultaneous allocations.
- The same shipment transition appears once on the board and at most once per configured WhatsApp event.
- Carrier retries and duplicate events are safe.
- A user cannot see another buyer’s orders or shipments.
- Every override, stock adjustment, status transition, and message attempt is auditable.
- The system can recover an outbox item after a process crash without sending an uncontrolled duplicate.

### Recommended end state

The reuse-first default is **ERPNext as the operational core plus a thin custom Frappe integration app and Refine as the custom external/user notification board**. Native ERPNext screens can serve internal users until the custom views prove necessary.

If ERPNext fails the fit or license gate, the fallback is **Supabase Postgres as the custom system of record plus Refine**, with InvenTree/OpenBoxes functionality used only where it can be integrated cleanly without creating a second inventory master. React-admin is the alternative frontend choice. This leaves custom code for the differentiating parts—allocation rules, carrier adapters, notification rules, WhatsApp delivery, and dashboards—instead of rebuilding a full ERP.

## 14. Database/provider cost estimate

### Estimate basis

These are planning estimates in USD before tax, currency conversion, and vendor-specific discounts. The reference workload is one production environment, one region, approximately 100 monthly active users, 5,000 orders per month, 200,000 tracking/notification events per month, about 1.5 million reads per month, 300,000 writes per month, up to 2 GB of structured data, and up to 15 GB of outbound data. Attachments, WhatsApp/BSP fees, carrier-contract fees, backups beyond the included allowance, high availability, and support plans are excluded.

### Comparison

| Provider/path | Pilot or free-tier estimate | Practical production-MVP estimate | What it means here |
|---|---:|---:|---|
| Supabase Free | $0 | Not recommended as the production baseline | 500 MB database, 5 GB egress, 1 GB file storage; free projects can pause after one week of inactivity and do not provide the production backup posture we need. |
| Supabase Pro | $25/month | **About $25/month** at the reference workload | Includes the first project, 8 GB disk, 250 GB egress, 100 GB file storage, 100,000 MAUs, daily backups retained for 7 days, and a $10 compute credit covering one Micro instance. This is the most predictable managed Postgres option in the comparison. |
| Firebase Spark/Firestore | $0 while within quota | **About $1–$10/month** for the reference workload, but usage-sensitive | Firestore includes 1 GiB storage, 50,000 reads/day, 20,000 writes/day, 20,000 deletes/day, and 10 GiB outbound/month. At 1.5M reads/month, 300k writes/month, 2 GiB stored, and 15 GiB outbound, the simple storage/egress overage is roughly $0.75 before listener/index/function effects; budget higher because realtime listeners can multiply billed reads. |
| AWS DynamoDB + Lambda + HTTP API Gateway | Often $0 for a new account or free-tier-sized pilot | **Roughly $1–$5/month** for a small serverless workload after free allowances; region, item size, and consistency change the result | DynamoDB is pay-per-request and the current free tier includes 25 RCUs, 25 WCUs, 25 GB storage, and about 200M requests/month depending on item size. Lambda and HTTP API Gateway also have free allowances. This is potentially the lowest infrastructure bill, but it requires a NoSQL access-pattern design and more AWS-specific integration work. |
| AWS Lightsail managed PostgreSQL | New customers may receive a trial/credits | **$15/month database-only** for the smallest 1 GB standard managed database; high availability is approximately $30/month before application hosting | The predictable AWS relational baseline. It is simpler for transactional PO/inventory data than DynamoDB, but it does not include the integrated auth/realtime/admin experience of Supabase. |
| AWS RDS for PostgreSQL | New accounts may use the 12-month free tier subject to eligibility | Variable; use the AWS Pricing Calculator before committing | RDS charges depend on region, instance hours, storage, I/O, backups, and data transfer. It is appropriate when AWS controls, networking, or compliance are important, but it is not the cheapest fixed-cost starting point without a selected instance and region. |

Sources: [Supabase pricing](https://supabase.com/pricing), [Firebase pricing](https://firebase.google.com/pricing), [Firestore pricing](https://cloud.google.com/firestore/pricing), [DynamoDB pricing](https://aws.amazon.com/dynamodb/pricing/), [Lambda pricing](https://aws.amazon.com/lambda/pricing/), [API Gateway pricing](https://aws.amazon.com/api-gateway/pricing/), [Lightsail managed database pricing](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-frequently-asked-questions-faq-billing-and-account-management.html), and [RDS PostgreSQL pricing](https://aws.amazon.com/rds/postgresql/pricing/).

### Recommendation

- **Absolute cheapest prototype:** Firebase Spark or Supabase Free, both at $0 under their limits. Use neither as the final production decision without backups, security rules, monitoring, and load testing.
- **Best predictable managed database for a custom build:** Supabase Pro at about $25/month. The relational model, transactions, SQL reporting, auth, storage, and realtime features fit purchase orders, reservations, approvals, shipment events, and audit history better than a document-first model.
- **Lowest possible AWS usage bill:** DynamoDB plus Lambda/API Gateway can be near $0 at low volume, but only choose it if the team accepts deliberate NoSQL data modeling and AWS-specific operations.
- **Best fixed-cost AWS relational option:** Lightsail managed PostgreSQL at $15/month for the smallest standard database, with separate application hosting.
- **If ERPNext is selected:** do not create a second Supabase/Firebase inventory database. Let ERPNext own the operational data, and evaluate the database cost of the chosen ERPNext deployment separately. Supabase should be added only for a clearly separated customer-portal or integration service.

For Supabase, exposed tables must use row-level security, authorization decisions must not depend on user-editable metadata, and service credentials must remain server-side. For Firebase, design queries and listeners to control read amplification and use Security Rules. For AWS, define least-privilege IAM, encryption, backups, budgets, and alarms before production.

The database estimate does **not** include WhatsApp message charges or a carrier API/BSP subscription. Meta bills delivered WhatsApp messages by recipient market and message category; carrier credentials, API access, and contract pricing must be confirmed with the selected delivery provider.

## 15. New decisions and information needed

- Confirm whether the carrier is **Blue Dart** or another provider, and provide the API contract/credentials or documentation available to the business.
- Confirm whether the carrier supports webhooks, or whether polling is acceptable and at what frequency.
- Confirm which users receive WhatsApp messages: buyers, sales users, warehouse users, logistics users, or all of them.
- Confirm WhatsApp opt-in collection, phone-number ownership, languages, countries, quiet hours, and the required utility templates.
- Estimate monthly orders, shipment events, users, notification messages, stored attachments, and dashboard traffic more precisely.
- Decide whether the external notification board is in scope for the first MVP or follows the internal control tower.
- Accept or reject GPL-3.0, EPL-1.0, and Odoo module licensing for the intended deployment.
- Choose the system-of-record path after the sample-PO proof: ERPNext first, custom Supabase + Refine fallback, or an approved alternative.

## 16. GitHub and version-control workflow

Every implementation artifact should live in a Git repository so requirements, schema migrations, integrations, dashboards, and deployment changes have an auditable history. The default hosted repository should be **private** because the project may contain commercial terms, customer/order data, carrier credentials, and internal operating rules.

### Repository setup

- Repository name proposal: procurement-dashboard.
- Keep the local repository and the hosted GitHub repository on the same default branch, main.
- Protect main: changes enter through pull requests, required checks, and at least one review before a staging or production merge.
- Use short branches such as feature/notification-board, feature/blue-dart-adapter, fix/inventory-reservation, and docs/provider-costs.
- Tag deployable milestones, for example v0.1-requirements, v0.2-vertical-slice, v0.3-carrier-sandbox, and v0.4-whatsapp-beta.
- Keep the selected upstream repository version pinned. Prefer a custom app/plugin and documented extension points over forking an entire ERP, unless a fork is explicitly required and maintained.

### Suggested repository layout

- docs/ for decisions, role/permission matrices, API contracts, and runbooks
- artifacts/ for the cleaned transcript and approved dashboard plan
- apps/ or services/ for the custom portal, carrier adapters, and notification service
- integrations/ for provider-specific mappings and test fixtures
- infra/ for deployment, migrations, monitoring, and environment definitions
- .github/ for CI checks, pull-request templates, issue templates, and release workflows

### Commit and release checkpoints

Create a small, reviewable commit at each boundary:

1. Requirements and approved workflow
2. Repository/system-of-record decision
3. Domain model and inventory reservation rules
4. Carrier adapter with sandbox fixtures
5. Notification board and authorization filters
6. WhatsApp consent, templates, outbox, retries, and webhook status handling
7. Staging deployment and operational runbook

CI should run formatting, linting, unit/integration tests, migration checks, dependency/security scans, and license checks for reused repositories. A merge should not deploy production unless the required checks pass.

### Secrets and data policy

- Never commit WhatsApp tokens, carrier keys, database passwords, service-role keys, private certificates, or customer production data.
- Commit an .env.example with names and safe placeholder values only.
- Store runtime secrets in the selected hosting provider’s secret manager or GitHub Actions environment secrets.
- Keep audio files, model caches, virtual environments, and generated build output out of Git.
- Treat GitHub history as source-code history, not as a database backup. Use Supabase, ERPNext, Firebase, or AWS backup/point-in-time recovery for operational data.
- Add a documented process for removing a secret from history if one is ever committed accidentally; rotating the secret is still required.

The local repository is initialized for this work. Creating and pushing the hosted remote requires an authenticated GitHub session. After authentication, create the private remote, push main, enable branch protection, and add the first issue for the sample-PO proof-of-fit.

## 17. Confirmed personalization decisions

The following decisions are now accepted for the personalized design:

| Area | Decision | Implementation consequence |
|---|---|---|
| Users and permissions | Use the proposed role model: sales, warehouse manager/operator, warehouse owner/approver, logistics/operations, and business owner/super admin. | Keep permissions separate from screens; scope every query and action by role, warehouse, buyer, and organization. |
| Existing systems | Assume none initially. | Design a greenfield system-of-record and keep integrations behind adapters so future ERP/accounting/CRM connections can be added without rewriting the workflow. |
| Logistics | Carrier-agnostic and multi-carrier. | Use a connector registry, capability flags, canonical tracking events, provider-specific status mappings, and one direct-plus-one-aggregator proof of fit. |
| WhatsApp enrollment | Default enrollment for shipment updates, but only after a recorded lawful opt-in in the order flow. | Do not infer consent from a phone number alone. Include STOP/manage-notifications instructions in every message, store opt-out suppression, and stop future messages immediately. |
| SSO | Not required for the first release. | Use application authentication with secure sessions, role-based access, strong admin controls, audit logs, rate limits, and optional MFA for privileged users. Leave an authentication-provider boundary for future SSO. |
| Retention | Keep detailed operational data only while the order is active; after completion retain an order summary and required history. | Completion triggers an idempotent purge job for non-required raw carrier payloads, detailed scan events, temporary files, message bodies, and operational attachments. Retain only the agreed summary, required financial/tax records, minimal audit/purge evidence, and an opt-out suppression record. |

### Retention lifecycle

Use the lifecycle active → completed. On completion:

1. Freeze the final order summary: internal order/PO reference, buyer or organization reference as needed, final line/quantity summary, financial summary if required, warehouse, carrier/tracking reference, final status, and completion timestamps.
2. Stop detailed tracking polling and notification retries for that order.
3. Purge raw carrier responses, detailed scan history, temporary documents, full notification bodies, non-required attachments, and short-lived integration logs.
4. Retain a minimal suppression record for a WhatsApp opt-out so a future order cannot silently re-enroll that phone number.
5. Record only that the purge ran, when it ran, and which data classes were removed. Do not retain deleted payloads in application logs.
6. Align database backups, replicas, log retention, and object-storage lifecycle rules with this policy. Keep a legal/accounting exception path for records that must be retained by applicable law or contract.

The exact retained summary fields and any invoice/tax exceptions should be confirmed before schema work. The Digital Personal Data Protection Act requires clear consent and an easy withdrawal path where consent is the basis for processing, and it generally requires erasure when the purpose is no longer served unless retention is required by law. Source: [India DPDP Act, 2023](https://www.meity.gov.in/writereaddata/files/Digital%20Personal%20Data%20Protection%20Act%202023.pdf). This is an implementation input, not legal advice; final retention and consent wording should be reviewed for the business’s exact role and jurisdictions.

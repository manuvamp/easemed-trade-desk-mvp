"use client";

import { FormEvent, useMemo, useState } from "react";
import { isSupabaseConfigured } from "../lib/supabase";

type RoleId = "owner" | "sales" | "warehouse" | "logistics";
type SectionId = "overview" | "documents" | "transactions" | "connectors";

type Role = {
  id: RoleId;
  label: string;
  short: string;
  eyebrow: string;
  heading: string;
  description: string;
  metrics: { label: string; value: string; change: string; tone: string }[];
};

type DocumentRecord = {
  name: string;
  family: string;
  owner: string;
  status: "Ready" | "Needs review" | "Draft";
  updated: string;
  dependency: string;
  required: boolean;
};

type TransactionRecord = {
  id: string;
  title: string;
  buyer: string;
  route: string;
  mode: string;
  status: string;
  progress: number;
  value: string;
  next: string;
};

type ConnectorRecord = {
  name: string;
  region: string;
  status: string;
  capability: string;
  note: string;
  accent: string;
};

const roles: Role[] = [
  {
    id: "owner",
    label: "Business owner",
    short: "BO",
    eyebrow: "Trade control tower",
    heading: "See every transaction before it becomes a fire drill.",
    description:
      "A high-level view of document readiness, shipment health, cash exposure, and the exceptions that need a decision.",
    metrics: [
      { label: "Open trade packs", value: "24", change: "+4 this week", tone: "teal" },
      { label: "Document readiness", value: "86%", change: "↑ 8.2% vs last week", tone: "blue" },
      { label: "In transit value", value: "$412k", change: "18 active shipments", tone: "gold" },
      { label: "Needs attention", value: "07", change: "3 high priority", tone: "coral" },
    ],
  },
  {
    id: "sales",
    label: "Sales",
    short: "SA",
    eyebrow: "Commercial desk",
    heading: "Move buyers from enquiry to a complete pack.",
    description:
      "Create the first transaction record, keep the commercial documents together, and hand over a clean pack to operations.",
    metrics: [
      { label: "Active enquiries", value: "11", change: "+3 since Monday", tone: "teal" },
      { label: "Quotes awaiting reply", value: "06", change: "2 due today", tone: "blue" },
      { label: "Packs ready to hand off", value: "09", change: "94% field-complete", tone: "gold" },
      { label: "Buyer follow-ups", value: "04", change: "Next 24 hours", tone: "coral" },
    ],
  },
  {
    id: "warehouse",
    label: "Warehouse",
    short: "WH",
    eyebrow: "Warehouse execution",
    heading: "Know what is arriving, moving, and waiting.",
    description:
      "A focused queue for receipts, batch evidence, packing instructions, dispatch documents, and stock exceptions.",
    metrics: [
      { label: "Inbound today", value: "08", change: "2 need inspection", tone: "teal" },
      { label: "Ready to dispatch", value: "17", change: "6 priority orders", tone: "blue" },
      { label: "Batch records missing", value: "03", change: "Upload before release", tone: "gold" },
      { label: "Stock exceptions", value: "05", change: "1 shortage", tone: "coral" },
    ],
  },
  {
    id: "logistics",
    label: "Logistics",
    short: "LO",
    eyebrow: "Logistics desk",
    heading: "Track the handoff across every carrier.",
    description:
      "A multi-carrier workspace for booking, airway bills, bills of lading, tracking events, exceptions, and proof of delivery.",
    metrics: [
      { label: "Shipments in motion", value: "18", change: "4 arriving today", tone: "teal" },
      { label: "On-time forecast", value: "94%", change: "+2.4% vs last month", tone: "blue" },
      { label: "Awaiting carrier event", value: "04", change: "Poll again in 40 min", tone: "gold" },
      { label: "Delivery exceptions", value: "03", change: "1 needs escalation", tone: "coral" },
    ],
  },
];

const sections: { id: SectionId; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "⌂" },
  { id: "documents", label: "Document master", icon: "▤" },
  { id: "transactions", label: "Transactions", icon: "↗" },
  { id: "connectors", label: "Carrier connectors", icon: "⌁" },
];

const documentRecords: DocumentRecord[] = [
  {
    name: "Commercial Invoice",
    family: "Finance",
    owner: "Sales",
    status: "Ready",
    updated: "Today, 09:42",
    dependency: "Sales order + buyer",
    required: true,
  },
  {
    name: "Packing List",
    family: "Packaging",
    owner: "Warehouse",
    status: "Ready",
    updated: "Today, 09:15",
    dependency: "Packed quantities",
    required: true,
  },
  {
    name: "Certificate of Origin",
    family: "Origin",
    owner: "CHA / Export",
    status: "Needs review",
    updated: "Yesterday, 16:08",
    dependency: "HS code + origin",
    required: true,
  },
  {
    name: "Certificate of Analysis",
    family: "Quality",
    owner: "QA",
    status: "Ready",
    updated: "Yesterday, 14:22",
    dependency: "Batch / lot",
    required: false,
  },
  {
    name: "Shipping Instruction",
    family: "Logistics",
    owner: "Logistics",
    status: "Draft",
    updated: "Yesterday, 11:40",
    dependency: "Carrier booking",
    required: true,
  },
  {
    name: "Air Waybill / Bill of Lading",
    family: "Logistics",
    owner: "Carrier",
    status: "Needs review",
    updated: "Mon, 17:10",
    dependency: "Shipment manifest",
    required: true,
  },
  {
    name: "Shipping Bill",
    family: "Customs / CHA",
    owner: "CHA / Export",
    status: "Draft",
    updated: "Mon, 12:18",
    dependency: "Invoice + packing list",
    required: true,
  },
  {
    name: "Insurance Certificate",
    family: "Insurance",
    owner: "Finance",
    status: "Ready",
    updated: "Fri, 15:06",
    dependency: "Cargo value + route",
    required: false,
  },
];

const transactionRecords: TransactionRecord[] = [
  {
    id: "TRD-2408-001",
    title: "Surgical consumables / GCC",
    buyer: "Meditek Gulf",
    route: "Mumbai → Dubai",
    mode: "Air",
    status: "Awaiting COO",
    progress: 78,
    value: "$84,600",
    next: "Review origin declaration",
  },
  {
    id: "TRD-2408-002",
    title: "Diagnostic kits / EU",
    buyer: "Northstar Care",
    route: "Bengaluru → Frankfurt",
    mode: "Air",
    status: "In transit",
    progress: 92,
    value: "$126,400",
    next: "Await carrier scan",
  },
  {
    id: "TRD-2408-003",
    title: "Cold-chain supplies / India",
    buyer: "Aster Labs",
    route: "Hyderabad → Delhi",
    mode: "Road",
    status: "Packing",
    progress: 54,
    value: "$18,950",
    next: "Upload batch receipt",
  },
  {
    id: "TRD-2408-004",
    title: "Hospital equipment / Nepal",
    buyer: "Kantipur Health",
    route: "Kolkata → Kathmandu",
    mode: "Road + Air",
    status: "Customs query",
    progress: 68,
    value: "$62,100",
    next: "CHA response due today",
  },
];

const connectorRecords: ConnectorRecord[] = [
  {
    name: "Delhivery",
    region: "India · direct API",
    status: "Adapter ready",
    capability: "Tracking · webhooks · labels · NDR",
    note: "Connect credentials when the first account is available.",
    accent: "teal",
  },
  {
    name: "Blue Dart",
    region: "India + nearby markets · direct API",
    status: "Adapter stub",
    capability: "Tracking · waybill · shipment detail",
    note: "Polling fallback is ready for providers without push events.",
    accent: "blue",
  },
  {
    name: "Ecom Express",
    region: "India · direct API",
    status: "Adapter stub",
    capability: "AWB · manifest · tracking · NDR",
    note: "Credential and IP-allowlist checks stay outside the UI.",
    accent: "gold",
  },
  {
    name: "Shiprocket",
    region: "India · aggregator",
    status: "Connector ready",
    capability: "Multi-carrier · AWB · labels · tracking",
    note: "Useful long-tail path when direct carrier integrations multiply.",
    accent: "coral",
  },
];

const familyOptions = [
  "All families",
  ...Array.from(new Set(documentRecords.map((item) => item.family))),
];

function statusClass(status: string) {
  return status.toLowerCase().replaceAll(" ", "-").replaceAll("/", "-");
}

export default function Home() {
  const [activeRole, setActiveRole] = useState<RoleId>("owner");
  const [activeSection, setActiveSection] = useState<SectionId>("overview");
  const [docQuery, setDocQuery] = useState("");
  const [docFamily, setDocFamily] = useState("All families");
  const [showPackModal, setShowPackModal] = useState(false);
  const [notice, setNotice] = useState("");

  const role = roles.find((item) => item.id === activeRole) ?? roles[0];
  const isSupabaseReady = isSupabaseConfigured;

  const filteredDocuments = useMemo(() => {
    const normalizedQuery = docQuery.trim().toLowerCase();
    return documentRecords.filter((document) => {
      const matchesFamily =
        docFamily === "All families" || document.family === docFamily;
      const matchesQuery =
        !normalizedQuery ||
        [document.name, document.family, document.owner, document.dependency]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      return matchesFamily && matchesQuery;
    });
  }, [docFamily, docQuery]);

  function handleCreatePack(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowPackModal(false);
    setNotice("Demo pack created — connect Supabase to persist it.");
    setActiveSection("transactions");
  }

  return (
    <main className="trade-app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">E</div>
          <div>
            <strong>EaseMed.ai</strong>
            <span>Trade operations</span>
          </div>
        </div>

        <div className="sidebar-label">Workspace</div>
        <nav className="sidebar-nav" aria-label="Primary navigation">
          {sections.map((section) => (
            <button
              className={
                activeSection === section.id ? "nav-item active" : "nav-item"
              }
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              type="button"
            >
              <span className="nav-icon" aria-hidden="true">
                {section.icon}
              </span>
              {section.label}
              {section.id === "documents" ? (
                <span className="nav-count">48</span>
              ) : null}
            </button>
          ))}
        </nav>

        <div className="sidebar-label">Quick links</div>
        <div className="quick-links">
          <button type="button" onClick={() => setShowPackModal(true)}>
            <span aria-hidden="true">＋</span>
            New document pack
          </button>
          <button type="button" onClick={() => setActiveSection("connectors")}>
            <span aria-hidden="true">⌁</span>
            Connector registry
          </button>
        </div>

        <div className="sidebar-bottom">
          <div className="connector-status">
            <span className="status-dot live" />
            <div>
              <strong>
                {isSupabaseReady ? "Supabase ready" : "Demo data only"}
              </strong>
              <span>
                {isSupabaseReady
                  ? "Connection configured"
                  : "Persistence is not connected"}
              </span>
            </div>
          </div>
          <div className="sidebar-footer">
            <span className="avatar">MP</span>
            <div>
              <strong>Manu P.</strong>
              <span>Demo workspace</span>
            </div>
            <span className="more">•••</span>
          </div>
        </div>
      </aside>

      <section className="content-shell">
        <header className="topbar">
          <div className="breadcrumbs">
            <span>EaseMed</span>
            <span>/</span>
            <strong>Trade desk</strong>
          </div>
          <div className="topbar-actions">
            <span className="demo-pill">
              <span className="status-dot" />
              MVP demo
            </span>
            <button
              className="icon-button"
              type="button"
              aria-label="Open notifications"
              onClick={() =>
                setNotice(
                  "Notifications are represented by the demo activity feed.",
                )
              }
            >
              ♢
            </button>
            <button className="profile-button" type="button">
              <span className="avatar small">MP</span>
              <span>Manu</span>
              <span className="chevron">⌄</span>
            </button>
          </div>
        </header>

        <div className="main-content">
          <div className="page-heading">
            <div>
              <p className="eyebrow">{role.eyebrow}</p>
              <h1>{role.heading}</h1>
              <p className="page-description">{role.description}</p>
            </div>
            <button
              className="primary-button"
              type="button"
              onClick={() => setShowPackModal(true)}
            >
              <span aria-hidden="true">＋</span>
              Start document pack
            </button>
          </div>

          <div className="view-switcher-wrap">
            <div>
              <span className="switcher-label">Preview as</span>
              <span className="switcher-hint">
                Switch roles to explore the same data from a different desk.
              </span>
            </div>
            <div className="role-switcher" aria-label="Switch dashboard role">
              {roles.map((item) => (
                <button
                  className={
                    activeRole === item.id ? "role-tab active" : "role-tab"
                  }
                  key={item.id}
                  onClick={() => setActiveRole(item.id)}
                  type="button"
                >
                  <span className="role-initials">{item.short}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {notice ? (
            <div className="notice" role="status">
              <span>✓</span>
              {notice}
              <button
                type="button"
                onClick={() => setNotice("")}
                aria-label="Dismiss notice"
              >
                ×
              </button>
            </div>
          ) : null}

          {activeSection === "overview" ? (
            <OverviewSection
              role={role}
              onOpenTransactions={() => setActiveSection("transactions")}
            />
          ) : null}

          {activeSection === "documents" ? (
            <DocumentsSection
              documents={filteredDocuments}
              query={docQuery}
              family={docFamily}
              onQueryChange={setDocQuery}
              onFamilyChange={setDocFamily}
              onCreatePack={() => setShowPackModal(true)}
            />
          ) : null}

          {activeSection === "transactions" ? (
            <TransactionsSection
              transactions={transactionRecords}
              onCreatePack={() => setShowPackModal(true)}
            />
          ) : null}

          {activeSection === "connectors" ? <ConnectorsSection /> : null}
        </div>
      </section>

      {showPackModal ? (
        <div className="modal-backdrop">
          <div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pack-title"
          >
            <div className="modal-heading">
              <div>
                <p className="eyebrow">Demo workflow</p>
                <h2 id="pack-title">Start a document pack</h2>
              </div>
              <button
                className="close-button"
                type="button"
                onClick={() => setShowPackModal(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <p className="modal-copy">
              Create the shell now. Later, this will save to Supabase and
              generate the required documents from the transaction rules.
            </p>
            <form onSubmit={handleCreatePack}>
              <label>
                Buyer or importer
                <input required placeholder="e.g. Northstar Care GmbH" />
              </label>
              <div className="form-grid">
                <label>
                  Transaction type
                  <select defaultValue="Export">
                    <option>Export</option>
                    <option>Import</option>
                    <option>Domestic</option>
                  </select>
                </label>
                <label>
                  Transport mode
                  <select defaultValue="Air">
                    <option>Air</option>
                    <option>Sea</option>
                    <option>Road</option>
                    <option>Courier</option>
                  </select>
                </label>
              </div>
              <label>
                Product or shipment reference
                <input
                  required
                  placeholder="e.g. Diagnostic kits · PO-2025-018"
                />
              </label>
              <div className="modal-actions">
                <button
                  className="secondary-button"
                  type="button"
                  onClick={() => setShowPackModal(false)}
                >
                  Cancel
                </button>
                <button className="primary-button" type="submit">
                  Create demo pack
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </main>
  );
}

function OverviewSection({
  role,
  onOpenTransactions,
}: {
  role: Role;
  onOpenTransactions: () => void;
}) {
  return (
    <>
      <div className="metrics-grid">
        {role.metrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <div className="metric-topline">
              <span>{metric.label}</span>
              <span className={"metric-mark " + metric.tone} />
            </div>
            <strong>{metric.value}</strong>
            <span className={"metric-change " + metric.tone}>
              {metric.change}
            </span>
          </article>
        ))}
      </div>

      <div className="overview-grid">
        <section className="panel priority-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Priority queue</p>
              <h2>Work that changes the day</h2>
            </div>
            <button
              className="text-button"
              type="button"
              onClick={onOpenTransactions}
            >
              View transactions <span aria-hidden="true">↗</span>
            </button>
          </div>
          <div className="priority-list">
            <PriorityRow
              icon="01"
              title="TRD-2408-001 · COO review"
              detail="Meditek Gulf · Mumbai → Dubai"
              status="Due today"
              tone="coral"
            />
            <PriorityRow
              icon="02"
              title="TRD-2408-004 · Customs query"
              detail="Kantipur Health · CHA response"
              status="Escalate"
              tone="gold"
            />
            <PriorityRow
              icon="03"
              title="Batch receipt missing"
              detail="Aster Labs · 2 cartons held"
              status="Warehouse"
              tone="teal"
            />
            <PriorityRow
              icon="04"
              title="Carrier scan delayed"
              detail="Northstar Care · Delhivery"
              status="Monitor"
              tone="blue"
            />
          </div>
        </section>

        <section className="panel pulse-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Pack health</p>
              <h2>Documents by readiness</h2>
            </div>
            <span className="period-label">This month</span>
          </div>
          <div className="health-visual">
            <div className="health-ring">
              <strong>86%</strong>
              <span>ready</span>
            </div>
            <div className="health-legend">
              <LegendRow color="teal" label="Ready to release" value="86%" />
              <LegendRow color="gold" label="Needs review" value="09%" />
              <LegendRow color="coral" label="Missing / draft" value="05%" />
            </div>
          </div>
          <div className="health-bar">
            <span className="health-ready" />
            <span className="health-review" />
            <span className="health-draft" />
          </div>
          <p className="panel-footnote">
            Most open packs are waiting on a certificate, not a new document
            template.
          </p>
        </section>
      </div>

      <div className="lower-grid">
        <section className="panel transaction-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Live portfolio</p>
              <h2>Recent document packs</h2>
            </div>
            <span className="count-badge">4 active</span>
          </div>
          <div className="transaction-table">
            {transactionRecords.map((transaction) => (
              <div className="transaction-row" key={transaction.id}>
                <div className="transaction-id">{transaction.id}</div>
                <div className="transaction-main">
                  <strong>{transaction.title}</strong>
                  <span>
                    {transaction.buyer} · {transaction.route}
                  </span>
                </div>
                <div className="transaction-progress">
                  <div className="progress-label">
                    <span>Pack completeness</span>
                    <strong>{transaction.progress}%</strong>
                  </div>
                  <div className="progress-track">
                    <span style={{ width: transaction.progress + "%" }} />
                  </div>
                </div>
                <span
                  className={"status-chip " + statusClass(transaction.status)}
                >
                  {transaction.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="panel activity-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Activity</p>
              <h2>Latest changes</h2>
            </div>
            <span className="live-label">
              <span className="status-dot live" /> Live demo
            </span>
          </div>
          <div className="activity-list">
            <ActivityRow
              initials="QA"
              color="teal"
              title="COA attached"
              detail="TRD-2408-002 · 14 min ago"
            />
            <ActivityRow
              initials="LO"
              color="blue"
              title="Waybill event received"
              detail="TRD-2408-002 · 32 min ago"
            />
            <ActivityRow
              initials="WH"
              color="gold"
              title="Packing list updated"
              detail="TRD-2408-003 · 1 hr ago"
            />
            <ActivityRow
              initials="SA"
              color="coral"
              title="Buyer acceptance recorded"
              detail="TRD-2408-001 · 2 hrs ago"
            />
          </div>
          <button className="activity-link" type="button">
            Open audit timeline <span aria-hidden="true">↗</span>
          </button>
        </section>
      </div>
    </>
  );
}

function DocumentsSection({
  documents,
  query,
  family,
  onQueryChange,
  onFamilyChange,
  onCreatePack,
}: {
  documents: DocumentRecord[];
  query: string;
  family: string;
  onQueryChange: (value: string) => void;
  onFamilyChange: (value: string) => void;
  onCreatePack: () => void;
}) {
  return (
    <>
      <div className="section-heading-row">
        <div>
          <p className="eyebrow">Structured repository</p>
          <h2>Trade document master</h2>
          <p>
            Templates become reusable objects linked to the transaction, not
            isolated files.
          </p>
        </div>
        <button className="secondary-button" type="button" onClick={onCreatePack}>
          ＋ Add template
        </button>
      </div>
      <div className="library-stats">
        <StatCard label="Document types" value="48" note="Across 15 families" />
        <StatCard label="Ready to reuse" value="34" note="71% of master" />
        <StatCard label="Needs ownership" value="06" note="Assign before launch" />
        <StatCard label="Expiring soon" value="03" note="Within 30 days" />
      </div>
      <section className="panel library-panel">
        <div className="library-toolbar">
          <label className="search-field">
            <span aria-hidden="true">⌕</span>
            <input
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search document types, owners, dependencies..."
            />
          </label>
          <select
            value={family}
            onChange={(event) => onFamilyChange(event.target.value)}
            aria-label="Filter by document family"
          >
            {familyOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <span className="result-count">
            {documents.length} of {documentRecords.length} shown
          </span>
        </div>
        <div className="document-table">
          <div className="document-table-header">
            <span>Document type</span>
            <span>Family</span>
            <span>Owner</span>
            <span>Status</span>
            <span>Last updated</span>
            <span />
          </div>
          {documents.map((document) => (
            <div className="document-row" key={document.name}>
              <div className="document-name">
                <span className="doc-icon">▤</span>
                <div>
                  <strong>{document.name}</strong>
                  <span>
                    {document.dependency}
                    {document.required
                      ? " · Required when applicable"
                      : " · Optional"}
                  </span>
                </div>
              </div>
              <span className="family-label">{document.family}</span>
              <span>{document.owner}</span>
              <span className={"status-chip " + statusClass(document.status)}>
                {document.status}
              </span>
              <span className="muted">{document.updated}</span>
              <button
                className="row-more"
                type="button"
                aria-label={"Open " + document.name}
              >
                •••
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function TransactionsSection({
  transactions,
  onCreatePack,
}: {
  transactions: TransactionRecord[];
  onCreatePack: () => void;
}) {
  return (
    <>
      <div className="section-heading-row">
        <div>
          <p className="eyebrow">Transaction workspace</p>
          <h2>Document packs in motion</h2>
          <p>
            Each pack connects commercial, warehouse, quality, logistics,
            customs, and finance records.
          </p>
        </div>
        <button className="primary-button" type="button" onClick={onCreatePack}>
          ＋ New pack
        </button>
      </div>
      <section className="panel full-panel">
        <div className="transaction-toolbar">
          <span className="filter-pill active">
            All active <strong>4</strong>
          </span>
          <span className="filter-pill">
            At risk <strong>2</strong>
          </span>
          <span className="filter-pill">
            In transit <strong>1</strong>
          </span>
          <span className="filter-pill">
            Completed <strong>18</strong>
          </span>
          <span className="toolbar-spacer" />
          <button className="secondary-button small" type="button">
            Export view
          </button>
        </div>
        <div className="transaction-detail-table">
          <div className="transaction-detail-header">
            <span>Pack</span>
            <span>Route</span>
            <span>Value</span>
            <span>Progress</span>
            <span>Next action</span>
            <span />
          </div>
          {transactions.map((transaction) => (
            <div className="transaction-detail-row" key={transaction.id}>
              <div>
                <strong>{transaction.id}</strong>
                <span>
                  {transaction.title}
                  <br />
                  {transaction.buyer}
                </span>
              </div>
              <div>
                <strong>{transaction.route}</strong>
                <span>{transaction.mode} freight</span>
              </div>
              <strong>{transaction.value}</strong>
              <div className="detail-progress">
                <div className="progress-label">
                  <span>{transaction.status}</span>
                  <strong>{transaction.progress}%</strong>
                </div>
                <div className="progress-track">
                  <span style={{ width: transaction.progress + "%" }} />
                </div>
              </div>
              <span className="next-action">{transaction.next}</span>
              <button
                className="row-more"
                type="button"
                aria-label={"Open " + transaction.id}
              >
                •••
              </button>
            </div>
          ))}
        </div>
      </section>
      <div className="callout-card">
        <div className="callout-icon">✦</div>
        <div>
          <strong>Rules layer comes next</strong>
          <p>
            The MVP keeps document requirements visible. The next backend slice
            will determine them from origin, destination, HS code, product,
            mode, Incoterm, and transaction type.
          </p>
        </div>
        <button className="text-button" type="button">
          View rule inputs <span aria-hidden="true">↗</span>
        </button>
      </div>
    </>
  );
}

function ConnectorsSection() {
  return (
    <>
      <div className="section-heading-row">
        <div>
          <p className="eyebrow">Integration boundary</p>
          <h2>Carrier connector registry</h2>
          <p>
            Connect a provider later without changing the document-pack or
            notification model.
          </p>
        </div>
        <span className="connector-count">
          <span className="status-dot" /> 0 live connections
        </span>
      </div>
      <div className="connector-grid">
        {connectorRecords.map((connector) => (
          <article className="connector-card" key={connector.name}>
            <div className="connector-card-top">
              <span className={"connector-logo " + connector.accent}>
                {connector.name.slice(0, 1)}
              </span>
              <span
                className={"status-chip " + statusClass(connector.status)}
              >
                {connector.status}
              </span>
            </div>
            <h3>{connector.name}</h3>
            <span className="muted">{connector.region}</span>
            <div className="capability-line">
              <span aria-hidden="true">⌁</span>
              {connector.capability}
            </div>
            <p>{connector.note}</p>
            <button className="secondary-button small" type="button">
              View connector contract
            </button>
          </article>
        ))}
      </div>
      <section className="panel connector-contract">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Canonical interface</p>
            <h2>One shipment model, many providers</h2>
          </div>
          <span className="count-badge">API-ready</span>
        </div>
        <div className="contract-grid">
          <ContractItem
            label="Serviceability"
            detail="Pincode, route, mode, SLA"
          />
          <ContractItem
            label="Shipment"
            detail="Manifest, AWB, label, pickup"
          />
          <ContractItem
            label="Tracking"
            detail="Poll, webhook, normalized event"
          />
          <ContractItem
            label="Exceptions"
            detail="NDR, return, delay, damage"
          />
        </div>
        <p className="panel-footnote">
          Credential fields, rate limits, webhook secrets, and provider status
          mappings stay server-side. This screen is intentionally a setup
          boundary, not a live API console.
        </p>
      </section>
    </>
  );
}

function PriorityRow({
  icon,
  title,
  detail,
  status,
  tone,
}: {
  icon: string;
  title: string;
  detail: string;
  status: string;
  tone: string;
}) {
  return (
    <div className="priority-row">
      <span className={"priority-icon " + tone}>{icon}</span>
      <div>
        <strong>{title}</strong>
        <span>{detail}</span>
      </div>
      <span className={"priority-status " + tone}>{status}</span>
      <span className="row-arrow">↗</span>
    </div>
  );
}

function LegendRow({
  color,
  label,
  value,
}: {
  color: string;
  label: string;
  value: string;
}) {
  return (
    <div className="legend-row">
      <span className={"legend-dot " + color} />
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function ActivityRow({
  initials,
  color,
  title,
  detail,
}: {
  initials: string;
  color: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="activity-row">
      <span className={"activity-avatar " + color}>{initials}</span>
      <div>
        <strong>{title}</strong>
        <span>{detail}</span>
      </div>
      <span className="activity-mark">✓</span>
    </div>
  );
}

function StatCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <article className="stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{note}</small>
    </article>
  );
}

function ContractItem({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="contract-item">
      <span className="contract-check">✓</span>
      <div>
        <strong>{label}</strong>
        <span>{detail}</span>
      </div>
    </div>
  );
}

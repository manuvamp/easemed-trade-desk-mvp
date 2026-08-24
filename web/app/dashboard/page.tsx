"use client";

import { FormEvent, useMemo, useState } from "react";
import { isSupabaseConfigured } from "../../lib/supabase";

type RoleId = "owner" | "sales" | "warehouse" | "logistics";
type SectionId =
  | "overview"
  | "inventory"
  | "documents"
  | "transactions"
  | "connectors";

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

type ProductRecord = {
  id: string;
  name: string;
  sku: string;
  available: number;
  reserved: number;
  unit: string;
  warehouse: string;
};

type OrderLine = {
  productId: string;
  quantity: string;
};

type InventoryImportResult = {
  records: ProductRecord[];
  created: number;
  updated: number;
};

type OrderDecision = "Approved" | "Denied" | "More info" | "Rerouted";

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
    eyebrow: "Healthcare procurement intelligence",
    heading: "Healthcare procurement, in one operating layer.",
    description:
      "Connect demand, supply, inventory, logistics, and approvals in one auditable workspace.",
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
    eyebrow: "Demand capture",
    heading: "Turn requirements into ready orders.",
    description: "Choose available products, set transport, and complete the commercial handoff.",
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
    eyebrow: "Inventory intelligence",
    heading: "Know what is available, and where it is.",
    description: "Keep stock accurate, upload product records, and prepare approved orders for release.",
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
    eyebrow: "Decision queue",
    heading: "Move approved orders forward.",
    description: "Review requests, route them to the right warehouse, and keep every decision visible.",
    metrics: [
      { label: "Incoming orders", value: "08", change: "Review today", tone: "teal" },
      { label: "Awaiting approval", value: "05", change: "Needs a decision", tone: "blue" },
      { label: "Approved today", value: "12", change: "Ready for fulfilment", tone: "gold" },
      { label: "Needs information", value: "02", change: "Send back to sales", tone: "coral" },
    ],
  },
];

const sections: { id: SectionId; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "⌂" },
  { id: "inventory", label: "Inventory", icon: "▦" },
  { id: "documents", label: "Document master", icon: "▤" },
  { id: "transactions", label: "Transactions", icon: "↗" },
  { id: "connectors", label: "Carrier connectors", icon: "⌁" },
];

function sectionsForRole(role: RoleId) {
  return sections.filter((section) => {
    if (section.id === "inventory") {
      return role === "owner" || role === "sales" || role === "warehouse";
    }
    if (section.id === "documents") return role === "owner";
    if (section.id === "connectors") return role === "owner";
    if (section.id === "transactions") {
      return role === "owner" || role === "sales" || role === "logistics";
    }
    return section.id === "overview";
  });
}

function sectionLabel(section: SectionId, role: RoleId) {
  if (section === "overview" && role !== "owner") return "Home";
  if (section === "transactions" && role === "logistics") return "Incoming orders";
  if (section === "transactions" && role !== "owner") return "Orders";
  if (section === "connectors" && role === "logistics") return "Carriers";
  return sections.find((item) => item.id === section)?.label ?? section;
}

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

const productRecords: ProductRecord[] = [
  {
    id: "diagnostic-kits",
    name: "Diagnostic kits",
    sku: "DX-KIT-240",
    available: 1280,
    reserved: 220,
    unit: "kits",
    warehouse: "Bengaluru",
  },
  {
    id: "surgical-consumables",
    name: "Surgical consumables",
    sku: "SC-GCC-118",
    available: 5400,
    reserved: 640,
    unit: "units",
    warehouse: "Mumbai",
  },
  {
    id: "cold-chain-supplies",
    name: "Cold-chain supplies",
    sku: "CC-SUP-072",
    available: 860,
    reserved: 180,
    unit: "cartons",
    warehouse: "Hyderabad",
  },
  {
    id: "hospital-equipment",
    name: "Hospital equipment",
    sku: "HE-NEP-041",
    available: 46,
    reserved: 8,
    unit: "units",
    warehouse: "Kolkata",
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

function parseCsvRows(text: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (character === '"') {
      if (quoted && text[index + 1] === '"') {
        value += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (character === "," && !quoted) {
      row.push(value.trim());
      value = "";
    } else if ((character === "\n" || character === "\r") && !quoted) {
      if (character === "\r" && text[index + 1] === "\n") index += 1;
      row.push(value.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      value = "";
    } else {
      value += character;
    }
  }

  if (value || row.length) {
    row.push(value.trim());
    if (row.some(Boolean)) rows.push(row);
  }
  return rows;
}

function parseInventoryCsv(text: string, existing: ProductRecord[]): InventoryImportResult {
  const rows = parseCsvRows(text);
  if (rows.length < 2) {
    throw new Error("CSV needs a header row and at least one product row.");
  }

  const headers = rows[0].map((header) =>
    header
      .replace(/^\uFEFF/, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_|_$/g, ""),
  );
  const findColumn = (...names: string[]) =>
    headers.findIndex((header) => names.includes(header));
  const nameColumn = findColumn("name", "product", "product_name", "product_title");
  const skuColumn = findColumn("sku", "product_sku", "code", "item_code");
  const availableColumn = findColumn(
    "available",
    "quantity",
    "stock",
    "available_quantity",
    "on_hand",
  );
  const reservedColumn = findColumn("reserved", "allocated", "reserved_quantity");
  const unitColumn = findColumn("unit", "uom", "units");
  const warehouseColumn = findColumn(
    "warehouse",
    "location",
    "site",
    "warehouse_location",
  );

  if (nameColumn < 0 || skuColumn < 0 || availableColumn < 0 || warehouseColumn < 0) {
    throw new Error("CSV needs name, SKU, available quantity, and warehouse columns.");
  }

  const records = [...existing];
  const indexBySku = new Map(records.map((record, index) => [record.sku.toLowerCase(), index]));
  let created = 0;
  let updated = 0;

  rows.slice(1).forEach((row, rowIndex) => {
    const name = row[nameColumn]?.trim();
    const sku = row[skuColumn]?.trim();
    const available = Number(row[availableColumn]?.replaceAll(",", "").trim());
    const reservedValue = reservedColumn >= 0 ? row[reservedColumn]?.trim() : "0";
    const reserved = Number(reservedValue?.replaceAll(",", "").trim() || "0");
    const unit = unitColumn >= 0 ? row[unitColumn]?.trim() || "units" : "units";
    const warehouse = row[warehouseColumn]?.trim();

    if (
      !name ||
      !sku ||
      !warehouse ||
      !Number.isInteger(available) ||
      available < 0 ||
      !Number.isInteger(reserved) ||
      reserved < 0
    ) {
      throw new Error(`Row ${rowIndex + 2} is missing valid product data.`);
    }

    const normalizedSku = sku.toLowerCase();
    const existingIndex = indexBySku.get(normalizedSku);
    const safeSku = normalizedSku.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || `row-${rowIndex + 2}`;
    const record: ProductRecord = {
      id: existingIndex === undefined ? `inventory-${safeSku}` : records[existingIndex].id,
      name,
      sku,
      available,
      reserved,
      unit,
      warehouse,
    };

    if (existingIndex === undefined) {
      indexBySku.set(normalizedSku, records.length);
      records.push(record);
      created += 1;
    } else {
      records[existingIndex] = record;
      updated += 1;
    }
  });

  return { records, created, updated };
}

export default function Home() {
  const [activeRole, setActiveRole] = useState<RoleId>("owner");
  const [activeSection, setActiveSection] = useState<SectionId>("overview");
  const [docQuery, setDocQuery] = useState("");
  const [docFamily, setDocFamily] = useState("All families");
  const [showPackModal, setShowPackModal] = useState(false);
  const [showInventoryModal, setShowInventoryModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [inventoryRecords, setInventoryRecords] = useState(productRecords);
  const [inventoryImportStatus, setInventoryImportStatus] = useState("");
  const [selectedProductId, setSelectedProductId] = useState(productRecords[0].id);
  const [orderLines, setOrderLines] = useState<OrderLine[]>([
    { productId: productRecords[0].id, quantity: "10" },
  ]);
  const [inventoryChange, setInventoryChange] = useState("10");
  const [inventoryChangeType, setInventoryChangeType] = useState<"add" | "remove">("add");
  const [paymentOrderId, setPaymentOrderId] = useState(transactionRecords[0].id);
  const [paymentAmount, setPaymentAmount] = useState("1000");
  const [paymentMethod, setPaymentMethod] = useState("Bank transfer");
  const [infoOrderId, setInfoOrderId] = useState("");
  const [infoNote, setInfoNote] = useState("");
  const [selectedOrderId, setSelectedOrderId] = useState("");
  const [orderDecisions, setOrderDecisions] = useState<Record<string, OrderDecision>>({});
  const [approvalNotes, setApprovalNotes] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState("");

  const role = roles.find((item) => item.id === activeRole) ?? roles[0];
  const visibleSections = sectionsForRole(activeRole);
  const isSupabaseReady = isSupabaseConfigured;
  const selectedProduct =
    inventoryRecords.find((product) => product.id === selectedProductId) ??
    inventoryRecords[0];
  const selectedOrder = transactionRecords.find((order) => order.id === selectedOrderId);
  const canCreateOrder = activeRole === "sales";
  const canUpdateInventory = activeRole === "warehouse";
  const pendingOrders = transactionRecords.filter(
    (order) => !orderDecisions[order.id],
  ).length;
  const actionAlert =
    activeRole === "logistics" && pendingOrders > 0
      ? {
          message: `${pendingOrders} incoming orders need approval.`,
          action: "Review incoming",
          onClick: () => setActiveSection("transactions"),
        }
      : activeRole === "sales"
        ? {
            message: "2 quotes need a reply today.",
            action: "Review orders",
            onClick: () => setActiveSection("transactions"),
          }
        : null;

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
    const requestedByProduct = new Map<string, number>();
    for (const line of orderLines) {
      const quantity = Number(line.quantity);
      const product = inventoryRecords.find((item) => item.id === line.productId);
      if (!product || !Number.isInteger(quantity) || quantity < 1) {
        setErrorMessage("Choose a product and a whole-number quantity for every line.");
        return;
      }
      const requested = (requestedByProduct.get(product.id) ?? 0) + quantity;
      if (requested > product.available) {
        setErrorMessage(
          `${product.name} has ${product.available.toLocaleString()} ${product.unit} available.`,
        );
        return;
      }
      requestedByProduct.set(product.id, requested);
    }
    setShowPackModal(false);
    setErrorMessage("");
    setOrderLines([{ productId: inventoryRecords[0].id, quantity: "10" }]);
    setActiveSection("transactions");
  }

  function openPackModal() {
    setErrorMessage("");
    setOrderLines([{ productId: inventoryRecords[0].id, quantity: "10" }]);
    setShowPackModal(true);
  }

  function updateOrderLine(index: number, field: keyof OrderLine, value: string) {
    setOrderLines((lines) =>
      lines.map((line, lineIndex) =>
        lineIndex === index ? { ...line, [field]: value } : line,
      ),
    );
  }

  function addOrderLine() {
    const nextProduct = inventoryRecords.find(
      (product) => !orderLines.some((line) => line.productId === product.id),
    );
    if (!nextProduct) return;
    setOrderLines((lines) => [
      ...lines,
      { productId: nextProduct.id, quantity: "1" },
    ]);
  }

  function removeOrderLine(index: number) {
    setOrderLines((lines) => lines.filter((_, lineIndex) => lineIndex !== index));
  }

  function handleInventoryUpdate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const amount = Number(inventoryChange);
    if (!Number.isInteger(amount) || amount < 1) {
      setErrorMessage("Enter a whole number greater than zero.");
      return;
    }
    const current = inventoryRecords.find((product) => product.id === selectedProductId);
    if (!current) return;
    if (inventoryChangeType === "remove" && amount > current.available) {
      setErrorMessage(`Only ${current.available.toLocaleString()} ${current.unit} are available.`);
      return;
    }
    setInventoryRecords((records) =>
      records.map((product) =>
        product.id === selectedProductId
          ? {
              ...product,
              available:
                product.available + (inventoryChangeType === "add" ? amount : -amount),
            }
          : product,
      ),
    );
    setShowInventoryModal(false);
    setErrorMessage("");
  }

  async function handleInventoryImport(file: File) {
    try {
      const result = parseInventoryCsv(await file.text(), inventoryRecords);
      setInventoryRecords(result.records);
      setInventoryImportStatus(
        `${result.created + result.updated} product${result.created + result.updated === 1 ? "" : "s"} imported` +
          (result.updated ? ` · ${result.updated} updated` : ""),
      );
      setErrorMessage("");
    } catch (error) {
      setInventoryImportStatus("");
      setErrorMessage(error instanceof Error ? error.message : "Could not read this CSV file.");
    }
  }

  function handleCreatePayment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const amount = Number(paymentAmount);
    if (!Number.isFinite(amount) || amount <= 0) {
      setErrorMessage("Enter a payment amount greater than zero.");
      return;
    }
    setShowPaymentModal(false);
    setErrorMessage("");
  }

  function handleOrderDecision(id: string, decision: OrderDecision) {
    setOrderDecisions((decisions) => ({ ...decisions, [id]: decision }));
  }

  function handleAskForInfo(id: string) {
    setInfoOrderId(id);
    setInfoNote(approvalNotes[id] ?? "");
    setShowInfoModal(true);
  }

  function handleInfoRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const note = infoNote.trim();
    if (!note) {
      setErrorMessage("Add a note before requesting information.");
      return;
    }
    setApprovalNotes((notes) => ({ ...notes, [infoOrderId]: note }));
    setOrderDecisions((decisions) => ({ ...decisions, [infoOrderId]: "More info" }));
    setShowInfoModal(false);
    setErrorMessage("");
  }

  function openInventoryUpdate(productId?: string) {
    if (productId) setSelectedProductId(productId);
    setShowInventoryModal(true);
  }

  function openOrderDetails(id: string) {
    setSelectedOrderId(id);
    setShowOrderModal(true);
  }

  function handleRoleChange(nextRole: RoleId) {
    setActiveRole(nextRole);
    if (!sectionsForRole(nextRole).some((section) => section.id === activeSection)) {
      setActiveSection("overview");
    }
  }

  return (
    <main className="trade-app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">E</div>
          <div>
            <strong>EaseMed.ai</strong>
          <span>Procurement intelligence</span>
          </div>
        </div>

        <div className="sidebar-label">Workspace</div>
        <nav className="sidebar-nav" aria-label="Primary navigation">
          {visibleSections.map((section) => (
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
              {sectionLabel(section.id, activeRole)}
              {section.id === "documents" ? (
                <span className="nav-count">48</span>
              ) : null}
            </button>
          ))}
        </nav>

        <div className="sidebar-label">Quick links</div>
        <div className="quick-links">
          {canCreateOrder ? (
            <button type="button" onClick={openPackModal}>
              <span aria-hidden="true">＋</span>
              Create order
            </button>
          ) : null}
          {activeRole === "sales" ? (
            <button type="button" onClick={() => setShowPaymentModal(true)}>
              <span aria-hidden="true">＋</span>
              Record payment
            </button>
          ) : null}
          {visibleSections.some((section) => section.id === "connectors") ? (
            <button type="button" onClick={() => setActiveSection("connectors")}>
              <span aria-hidden="true">⌁</span>
              Carrier setup
            </button>
          ) : null}
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
            <strong>Command center</strong>
          </div>
          <div className="topbar-actions">
            <span className="demo-pill">
              <span className="status-dot" />
              Demo workspace
            </span>
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
            {canCreateOrder ? (
              <button
                className="primary-button"
                type="button"
                onClick={openPackModal}
              >
                <span aria-hidden="true">＋</span>
                Create order
              </button>
            ) : null}
          </div>

          <div className="view-switcher-wrap">
            <div>
              <span className="switcher-label">Workspace view</span>
              <span className="switcher-hint">
                Choose a team to see only its actions and signals.
              </span>
            </div>
            <div className="role-switcher" aria-label="Switch dashboard role">
              {roles.map((item) => (
                <button
                  className={
                    activeRole === item.id ? "role-tab active" : "role-tab"
                  }
                  key={item.id}
                  onClick={() => handleRoleChange(item.id)}
                  type="button"
                >
                  <span className="role-initials">{item.short}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {actionAlert ? (
            <div className="action-alert" role="status">
              <span aria-hidden="true">!</span>
              <strong>{actionAlert.message}</strong>
              <button type="button" onClick={actionAlert.onClick}>
                {actionAlert.action} <span aria-hidden="true">↗</span>
              </button>
            </div>
          ) : null}

          {errorMessage ? (
            <div className="error-banner" role="alert">
              <span aria-hidden="true">!</span>
              {errorMessage}
              <button
                type="button"
                onClick={() => setErrorMessage("")}
                aria-label="Dismiss error"
              >
                ×
              </button>
            </div>
          ) : null}

          {activeSection === "overview" ? (
            <OverviewSection
              role={role}
              inventory={inventoryRecords}
              orderDecisions={orderDecisions}
              onOpenTransactions={() => setActiveSection("transactions")}
              onOpenDocuments={() => setActiveSection("documents")}
              onOpenInventory={() => setActiveSection("inventory")}
              onCreateOrder={openPackModal}
              onCreatePayment={() => setShowPaymentModal(true)}
              onUpdateInventory={openInventoryUpdate}
              inventoryImportStatus={inventoryImportStatus}
              onImportInventory={handleInventoryImport}
              onDecision={handleOrderDecision}
              onAskForInfo={handleAskForInfo}
              onOpenOrder={openOrderDetails}
            />
          ) : null}

          {activeSection === "inventory" ? (
            <ProductInventoryPanel
              inventory={inventoryRecords}
              canUpdate={canUpdateInventory}
              onUpdateInventory={openInventoryUpdate}
              importStatus={inventoryImportStatus}
              onImportInventory={handleInventoryImport}
            />
          ) : null}

          {activeSection === "documents" ? (
            <DocumentsSection
              documents={filteredDocuments}
              query={docQuery}
              family={docFamily}
              onQueryChange={setDocQuery}
              onFamilyChange={setDocFamily}
              onCreatePack={canCreateOrder ? openPackModal : undefined}
            />
          ) : null}

          {activeSection === "transactions" ? (
            <TransactionsSection
              transactions={transactionRecords}
              role={activeRole}
              orderDecisions={orderDecisions}
              approvalNotes={approvalNotes}
              onCreatePack={canCreateOrder ? openPackModal : undefined}
              onDecision={handleOrderDecision}
              onAskForInfo={handleAskForInfo}
              onOpenOrder={openOrderDetails}
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
                <h2 id="pack-title">Create an order</h2>
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
              Add the basic order details now. Later, this will save to Supabase
              and generate the required workflow automatically.
            </p>
            <form onSubmit={handleCreatePack}>
              <label>
                Buyer or importer
                <input required placeholder="e.g. Northstar Care GmbH" />
              </label>
              <div className="order-lines">
                <div className="order-lines-heading">
                  <span>Products</span>
                  <span>{orderLines.length} {orderLines.length === 1 ? "line" : "lines"}</span>
                </div>
                {orderLines.map((line, index) => {
                  const lineProduct =
                    inventoryRecords.find((product) => product.id === line.productId) ??
                    inventoryRecords[0];
                  return (
                    <div className="order-line" key={index}>
                      <div className="form-grid">
                        <label>
                          Product
                          <select
                            value={line.productId}
                            onChange={(event) =>
                              updateOrderLine(index, "productId", event.target.value)
                            }
                          >
                            {inventoryRecords.map((product) => (
                              <option
                                key={product.id}
                                value={product.id}
                                disabled={orderLines.some(
                                  (otherLine, otherIndex) =>
                                    otherIndex !== index && otherLine.productId === product.id,
                                )}
                              >
                                {product.name} · {product.warehouse} · {product.available.toLocaleString()} {product.unit} available
                              </option>
                            ))}
                          </select>
                        </label>
                        <label>
                          Quantity
                          <input
                            required
                            type="number"
                            min="1"
                            max={lineProduct.available}
                            value={line.quantity}
                            onChange={(event) =>
                              updateOrderLine(index, "quantity", event.target.value)
                            }
                          />
                        </label>
                      </div>
                      {orderLines.length > 1 ? (
                        <button
                          className="row-remove-button"
                          type="button"
                          onClick={() => removeOrderLine(index)}
                        >
                          Remove
                        </button>
                      ) : null}
                      <div className="inventory-callout compact">
                        <span>Available inventory</span>
                        <strong>{lineProduct.available.toLocaleString()} {lineProduct.unit}</strong>
                        <small>Warehouse: {lineProduct.warehouse} · {lineProduct.sku} · {lineProduct.reserved.toLocaleString()} reserved</small>
                      </div>
                    </div>
                  );
                })}
                <button
                  className="secondary-button small add-product-button"
                  type="button"
                  onClick={addOrderLine}
                  disabled={orderLines.length >= inventoryRecords.length}
                >
                  ＋ Add product
                </button>
              </div>
              <div className="form-grid">
                <label>
                  Sale type
                  <select defaultValue="Export">
                    <option>Export</option>
                    <option>Import</option>
                    <option>Domestic</option>
                  </select>
                </label>
                <label>
                  Transport
                  <select defaultValue="Air">
                    <option>Air</option>
                    <option>Sea</option>
                    <option>Road</option>
                    <option>Courier</option>
                  </select>
                </label>
              </div>
              <div className="modal-actions">
                <button
                  className="secondary-button"
                  type="button"
                  onClick={() => setShowPackModal(false)}
                >
                  Cancel
                </button>
                <button className="primary-button" type="submit">
                  Create demo order
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {showInventoryModal ? (
        <div className="modal-backdrop">
          <div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="inventory-title"
          >
            <div className="modal-heading">
              <div>
                <p className="eyebrow">Warehouse action</p>
                <h2 id="inventory-title">Update inventory</h2>
              </div>
              <button
                className="close-button"
                type="button"
                onClick={() => setShowInventoryModal(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <p className="modal-copy">
              Record a receipt, adjustment, or stock movement for one product.
            </p>
            <form onSubmit={handleInventoryUpdate}>
              <label>
                Product
                <select
                  value={selectedProductId}
                  onChange={(event) => setSelectedProductId(event.target.value)}
                >
                  {inventoryRecords.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name} · {product.available.toLocaleString()} {product.unit}
                    </option>
                  ))}
                </select>
              </label>
              <div className="form-grid">
                <label>
                  Movement
                  <select
                    value={inventoryChangeType}
                    onChange={(event) =>
                      setInventoryChangeType(event.target.value as "add" | "remove")
                    }
                  >
                    <option value="add">Add stock</option>
                    <option value="remove">Remove stock</option>
                  </select>
                </label>
                <label>
                  Quantity
                  <input
                    required
                    type="number"
                    min="1"
                    value={inventoryChange}
                    onChange={(event) => setInventoryChange(event.target.value)}
                  />
                </label>
              </div>
              <div className="inventory-callout">
                <span>Current available</span>
                <strong>{selectedProduct.available.toLocaleString()} {selectedProduct.unit}</strong>
                <small>{selectedProduct.warehouse} · {selectedProduct.sku}</small>
              </div>
              <div className="modal-actions">
                <button
                  className="secondary-button"
                  type="button"
                  onClick={() => setShowInventoryModal(false)}
                >
                  Cancel
                </button>
                <button className="primary-button" type="submit">
                  Save inventory
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {showPaymentModal ? (
        <div className="modal-backdrop">
          <div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-title"
          >
            <div className="modal-heading">
              <div>
                <p className="eyebrow">Sales action</p>
                <h2 id="payment-title">Record payment</h2>
              </div>
              <button
                className="close-button"
                type="button"
                onClick={() => setShowPaymentModal(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <p className="modal-copy">Record the payment against the selected order.</p>
            <form onSubmit={handleCreatePayment}>
              <label>
                Order
                <select
                  value={paymentOrderId}
                  onChange={(event) => setPaymentOrderId(event.target.value)}
                >
                  {transactionRecords.map((transaction) => (
                    <option key={transaction.id} value={transaction.id}>
                      {transaction.id} · {transaction.buyer}
                    </option>
                  ))}
                </select>
              </label>
              <div className="form-grid">
                <label>
                  Amount
                  <input
                    required
                    type="number"
                    min="1"
                    value={paymentAmount}
                    onChange={(event) => setPaymentAmount(event.target.value)}
                  />
                </label>
                <label>
                  Method
                  <select
                    value={paymentMethod}
                    onChange={(event) => setPaymentMethod(event.target.value)}
                  >
                    <option>Bank transfer</option>
                    <option>Letter of credit</option>
                    <option>Card</option>
                    <option>UPI</option>
                  </select>
                </label>
              </div>
              <div className="modal-actions">
                <button
                  className="secondary-button"
                  type="button"
                  onClick={() => setShowPaymentModal(false)}
                >
                  Cancel
                </button>
                <button className="primary-button" type="submit">
                  Save payment
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {showInfoModal ? (
        <div className="modal-backdrop">
          <div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="info-title"
          >
            <div className="modal-heading">
              <div>
                <p className="eyebrow">Approval action</p>
                <h2 id="info-title">Ask for information</h2>
              </div>
              <button
                className="close-button"
                type="button"
                onClick={() => setShowInfoModal(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <p className="modal-copy">
              Tell Sales or the sending warehouse what is missing for {infoOrderId}.
            </p>
            <form onSubmit={handleInfoRequest}>
              <label>
                Note
                <textarea
                  required
                  rows={4}
                  value={infoNote}
                  onChange={(event) => setInfoNote(event.target.value)}
                  placeholder="e.g. Add the batch number and delivery date."
                />
              </label>
              <div className="modal-actions">
                <button
                  className="secondary-button"
                  type="button"
                  onClick={() => setShowInfoModal(false)}
                >
                  Cancel
                </button>
                <button className="primary-button" type="submit">
                  Send request
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {showOrderModal && selectedOrder ? (
        <OrderDetailModal
          order={selectedOrder}
          decision={orderDecisions[selectedOrder.id]}
          note={approvalNotes[selectedOrder.id]}
          onClose={() => setShowOrderModal(false)}
        />
      ) : null}
    </main>
  );
}

function OverviewSection({
  role,
  inventory,
  orderDecisions,
  onOpenTransactions,
  onOpenDocuments,
  onOpenInventory,
  onCreateOrder,
  onCreatePayment,
  onUpdateInventory,
  inventoryImportStatus,
  onImportInventory,
  onDecision,
  onAskForInfo,
  onOpenOrder,
}: {
  role: Role;
  inventory: ProductRecord[];
  orderDecisions: Record<string, OrderDecision>;
  onOpenTransactions: () => void;
  onOpenDocuments: () => void;
  onOpenInventory: () => void;
  onCreateOrder: () => void;
  onCreatePayment?: () => void;
  onUpdateInventory: (productId?: string) => void;
  inventoryImportStatus: string;
  onImportInventory: (file: File) => void;
  onDecision: (id: string, decision: OrderDecision) => void;
  onAskForInfo: (id: string) => void;
  onOpenOrder: (id: string) => void;
}) {
  if (role.id !== "owner") {
    return (
      <SimpleOverviewSection
        role={role}
        inventory={inventory}
        orderDecisions={orderDecisions}
        onOpenTransactions={onOpenTransactions}
        onCreateOrder={onCreateOrder}
        onCreatePayment={onCreatePayment}
        onOpenInventory={onOpenInventory}
        onUpdateInventory={onUpdateInventory}
        inventoryImportStatus={inventoryImportStatus}
        onImportInventory={onImportInventory}
        onDecision={onDecision}
        onAskForInfo={onAskForInfo}
        onOpenOrder={onOpenOrder}
      />
    );
  }

  return (
    <>
      <div className="metrics-grid">
        {role.metrics.map((metric) => (
          <MetricAction
            key={metric.label}
            metric={metric}
            action={metric.label === "Document readiness" ? "Open documents" : "Open queue"}
            onClick={metric.label === "Document readiness" ? onOpenDocuments : onOpenTransactions}
          />
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

function SimpleOverviewSection({
  role,
  inventory,
  orderDecisions,
  onOpenTransactions,
  onCreateOrder,
  onCreatePayment,
  onOpenInventory,
  onUpdateInventory,
  inventoryImportStatus,
  onImportInventory,
  onDecision,
  onAskForInfo,
  onOpenOrder,
}: {
  role: Role;
  inventory: ProductRecord[];
  orderDecisions: Record<string, OrderDecision>;
  onOpenTransactions: () => void;
  onCreateOrder: () => void;
  onCreatePayment?: () => void;
  onOpenInventory: () => void;
  onUpdateInventory: (productId?: string) => void;
  inventoryImportStatus: string;
  onImportInventory: (file: File) => void;
  onDecision: (id: string, decision: OrderDecision) => void;
  onAskForInfo: (id: string) => void;
  onOpenOrder: (id: string) => void;
}) {
  const isSales = role.id === "sales";
  const isWarehouse = role.id === "warehouse";
  const isLogistics = role.id === "logistics";
  const metricActions = isSales
    ? ["View enquiries", "Review quotes", "Open handoffs"]
    : isWarehouse
      ? ["Open inventory", "Open inventory", "Open inventory"]
      : ["Review incoming", "Review incoming", "View approved"];
  const metricClick = isWarehouse ? onOpenInventory : onOpenTransactions;

  return (
    <>
      {!isLogistics ? (
        <div className="metrics-grid compact-metrics">
          {role.metrics.slice(0, 3).map((metric, index) => (
            <MetricAction
              key={metric.label}
              metric={metric}
              action={metricActions[index]}
              onClick={metricClick}
            />
          ))}
        </div>
      ) : null}

      <div className={"simple-overview-grid" + (isLogistics ? " logistics-overview-grid" : "")}>
        {!isLogistics ? (
          <section className="panel simple-action-panel">
            <p className="eyebrow">Next action</p>
            <h2>{isSales ? "Create a sale" : "View inventory"}</h2>
            <p>
              {isSales
                ? "Choose products, set transport, and record payment."
                : "Open a product row when you need to adjust its stock."}
            </p>
            <div className="simple-action-buttons">
              {isSales ? (
                <>
                  <button className="primary-button" type="button" onClick={onCreateOrder}>
                    <span aria-hidden="true">＋</span>
                    Create order
                  </button>
                  <button className="secondary-button" type="button" onClick={onCreatePayment}>
                    Record payment
                  </button>
                </>
              ) : (
                <button className="primary-button" type="button" onClick={onOpenInventory}>
                  View inventory
                </button>
              )}
            </div>
          </section>
        ) : null}

        {!isWarehouse ? (
          <section className="panel simple-orders-panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">{isLogistics ? "Queue" : "Recent"}</p>
                <h2>{isLogistics ? "Incoming orders" : "Orders"}</h2>
              </div>
              <button className="text-button" type="button" onClick={onOpenTransactions}>
                {isLogistics ? "Review all" : "View all"} <span aria-hidden="true">↗</span>
              </button>
            </div>
            <div className="simple-order-list">
              {transactionRecords.slice(0, 3).map((transaction) => {
                const status =
                  orderDecisions[transaction.id] ??
                  (isLogistics ? "Awaiting review" : transaction.status);
                return (
                  <div
                    className={
                      isLogistics
                        ? "simple-order-row simple-incoming-row" +
                          (orderDecisions[transaction.id]
                            ? " approval-" + statusClass(orderDecisions[transaction.id])
                            : "")
                        : "simple-order-row"
                    }
                    key={transaction.id}
                  >
                    <div>
                      <button
                        className="simple-order-link"
                        type="button"
                        onClick={() => onOpenOrder(transaction.id)}
                      >
                        {transaction.id}
                      </button>
                      <span>{transaction.buyer}</span>
                    </div>
                    <span
                      className={
                        "inventory-status " +
                        (orderDecisions[transaction.id]
                          ? "decided " + statusClass(orderDecisions[transaction.id])
                          : "neutral")
                      }
                    >
                      {status}
                    </span>
                    {isLogistics ? (
                      <ApprovalActions
                        orderId={transaction.id}
                        compact
                        onDecision={onDecision}
                        onAskForInfo={onAskForInfo}
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>
        ) : null}
      </div>

      {isSales || isWarehouse ? (
        <ProductInventoryPanel
          inventory={inventory}
          canUpdate={isWarehouse}
          onUpdateInventory={onUpdateInventory}
          importStatus={inventoryImportStatus}
          onImportInventory={onImportInventory}
        />
      ) : null}
    </>
  );
}

function MetricAction({
  metric,
  action,
  onClick,
}: {
  metric: Role["metrics"][number];
  action: string;
  onClick: () => void;
}) {
  return (
    <button className="metric-card metric-card-action" type="button" onClick={onClick}>
      <div className="metric-topline">
        <span>{metric.label}</span>
        <span className={"metric-mark " + metric.tone} />
      </div>
      <strong>{metric.value}</strong>
      <span className={"metric-change " + metric.tone}>{metric.change}</span>
      <span className="metric-action">{action} ↗</span>
    </button>
  );
}

function ProductInventoryPanel({
  inventory,
  canUpdate,
  onUpdateInventory,
  importStatus,
  onImportInventory,
}: {
  inventory: ProductRecord[];
  canUpdate: boolean;
  onUpdateInventory: (productId?: string) => void;
  importStatus?: string;
  onImportInventory?: (file: File) => void;
}) {
  return (
    <section className={"panel product-inventory-panel" + (canUpdate ? " can-update" : "")}>
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Stock view</p>
          <h2>Product inventory</h2>
        </div>
        <div className="inventory-panel-actions">
          {canUpdate && importStatus ? (
            <span className="inventory-import-status" role="status">
              {importStatus}
            </span>
          ) : null}
          {canUpdate && onImportInventory ? (
            <label className="secondary-button small file-upload-button">
              Upload CSV
              <input
                type="file"
                accept=".csv,text/csv"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) onImportInventory(file);
                  event.target.value = "";
                }}
              />
            </label>
          ) : null}
          <span className="count-badge">{inventory.length} products</span>
        </div>
      </div>
      <div className="product-inventory-list">
        {inventory.map((product) => (
          <div className="product-inventory-row" key={product.id}>
            <div>
              <strong>{product.name}</strong>
              <span>{product.sku} · {product.warehouse}</span>
            </div>
            <div className="product-stock-count">
              <strong>{product.available.toLocaleString()}</strong>
              <span>{product.unit} available</span>
            </div>
            <span className="inventory-status neutral">
              {product.reserved.toLocaleString()} reserved
            </span>
            {canUpdate ? (
              <button
                className="secondary-button small inventory-update-button"
                type="button"
                onClick={() => onUpdateInventory(product.id)}
              >
                Update
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </section>
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
  onCreatePack?: () => void;
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
        {onCreatePack ? (
          <button className="secondary-button" type="button" onClick={onCreatePack}>
            ＋ Add template
          </button>
        ) : null}
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
  role,
  orderDecisions,
  approvalNotes,
  onCreatePack,
  onDecision,
  onAskForInfo,
  onOpenOrder,
}: {
  transactions: TransactionRecord[];
  role: RoleId;
  orderDecisions: Record<string, OrderDecision>;
  approvalNotes: Record<string, string>;
  onCreatePack?: () => void;
  onDecision: (id: string, decision: OrderDecision) => void;
  onAskForInfo: (id: string) => void;
  onOpenOrder: (id: string) => void;
}) {
  if (role === "logistics") {
    return (
      <IncomingOrdersSection
        transactions={transactions}
        orderDecisions={orderDecisions}
        approvalNotes={approvalNotes}
        onDecision={onDecision}
        onAskForInfo={onAskForInfo}
        onOpenOrder={onOpenOrder}
      />
    );
  }

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
        {onCreatePack ? (
          <button className="primary-button" type="button" onClick={onCreatePack}>
            ＋ Create order
          </button>
        ) : null}
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
                onClick={() => onOpenOrder(transaction.id)}
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

function IncomingOrdersSection({
  transactions,
  orderDecisions,
  approvalNotes,
  onDecision,
  onAskForInfo,
  onOpenOrder,
}: {
  transactions: TransactionRecord[];
  orderDecisions: Record<string, OrderDecision>;
  approvalNotes: Record<string, string>;
  onDecision: (id: string, decision: OrderDecision) => void;
  onAskForInfo: (id: string) => void;
  onOpenOrder: (id: string) => void;
}) {
  return (
    <>
      <div className="section-heading-row">
        <div>
          <p className="eyebrow">Warehouse approval</p>
          <h2>Incoming orders</h2>
          <p>Open an order, check the request, then approve, deny, ask for information, or reroute it.</p>
        </div>
        <span className="count-badge">{transactions.length} to review</span>
      </div>
      <section className="panel approval-panel">
        <div className="approval-list">
          {transactions.map((transaction) => {
            const decision = orderDecisions[transaction.id];
            return (
              <article
                className={
                  "approval-row" +
                  (decision ? " approval-" + statusClass(decision) : "")
                }
                key={transaction.id}
              >
                <div className="approval-order">
                  <strong>{transaction.id}</strong>
                  <span>{transaction.title}</span>
                  <small>{transaction.buyer} · {transaction.route}</small>
                  <button className="order-info-link" type="button" onClick={() => onOpenOrder(transaction.id)}>
                    View order details
                  </button>
                  {approvalNotes[transaction.id] ? (
                    <small className="approval-note">Note: {approvalNotes[transaction.id]}</small>
                  ) : null}
                </div>
                <span
                  className={
                    "inventory-status " +
                    (decision ? "decided " + statusClass(decision) : "neutral")
                  }
                >
                  {decision ?? "Awaiting approval"}
                </span>
                <ApprovalActions
                  orderId={transaction.id}
                  onDecision={onDecision}
                  onAskForInfo={onAskForInfo}
                />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

function ApprovalActions({
  orderId,
  compact = false,
  onDecision,
  onAskForInfo,
}: {
  orderId: string;
  compact?: boolean;
  onDecision: (id: string, decision: OrderDecision) => void;
  onAskForInfo: (id: string) => void;
}) {
  return (
    <div className={"approval-actions" + (compact ? " compact" : "")}>
      <button
        className="approval-button approve"
        type="button"
        onClick={() => onDecision(orderId, "Approved")}
      >
        Approve
      </button>
      <button
        className="approval-button info"
        type="button"
        onClick={() => onAskForInfo(orderId)}
      >
        Ask for info
      </button>
      <button
        className="approval-button reroute"
        type="button"
        onClick={() => onDecision(orderId, "Rerouted")}
      >
        Send to warehouse
      </button>
      <button
        className="approval-button deny"
        type="button"
        onClick={() => onDecision(orderId, "Denied")}
      >
        Deny
      </button>
    </div>
  );
}

function OrderDetailModal({
  order,
  decision,
  note,
  onClose,
}: {
  order: TransactionRecord;
  decision?: OrderDecision;
  note?: string;
  onClose: () => void;
}) {
  return (
    <div className="modal-backdrop">
      <div
        className="modal-card order-detail-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-detail-title"
      >
        <div className="modal-heading">
          <div>
            <p className="eyebrow">Order details</p>
            <h2 id="order-detail-title">{order.id}</h2>
          </div>
          <button className="close-button" type="button" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="order-detail-summary">
          <strong>{order.title}</strong>
          <span>{order.buyer}</span>
        </div>
        <div className="order-detail-grid">
          <DetailItem label="Route" value={order.route} />
          <DetailItem label="Transport" value={order.mode} />
          <DetailItem label="Value" value={order.value} />
          <DetailItem label="Progress" value={`${order.progress}% complete`} />
          <DetailItem label="Status" value={decision ?? order.status} />
          <DetailItem label="Next action" value={order.next} />
        </div>
        {note ? (
          <div className="order-detail-note">
            <span>Information requested</span>
            <strong>{note}</strong>
          </div>
        ) : null}
        <div className="modal-actions">
          <button className="primary-button" type="button" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="order-detail-item">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
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

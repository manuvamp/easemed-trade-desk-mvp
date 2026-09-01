const navLinks = [
  { href: "#platform", label: "Platform" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#decision-intelligence", label: "Decision trail" },
  { href: "#security", label: "Security" },
  { href: "#faq", label: "FAQ" },
];

const networkRoles = [
  "Hospital procurement",
  "Medical distributors",
  "Manufacturers",
  "Finance teams",
  "Warehouses",
  "Logistics partners",
];

const heroStats = [
  { value: "1 intake", label: "For every purchase request" },
  { value: "4-way", label: "Supplier matching score" },
  { value: "Human", label: "Approval before release" },
  { value: "End-to-end", label: "Decision and delivery trail" },
];

const journeyNodes = [
  {
    icon: "trend",
    tone: "teal",
    title: "Predict",
    text: "AI can flag inventory pressure before a stockout becomes urgent.",
    visual: (
      <div className="pipe-visual">
        <div className="pipe-head">
          <span className="pipe-icon"><Icon name="trend" size={14} /></span>
          <b>Surgical gloves (sterile)</b>
        </div>
        <div className="pipe-stock">
          <span className="pipe-stock-bar"><i style={{ width: "18%" }} /></span>
          <em>18% left</em>
        </div>
        <p className="pipe-note">Reorder 12,000 units by Mar 4</p>
      </div>
    ),
  },
  {
    icon: "users",
    tone: "green",
    title: "Source",
    text: "Supplier options ranked against the same decision criteria.",
    visual: (
      <div className="pipe-visual">
        <div className="pipe-head">
          <span className="pipe-icon"><Icon name="users" size={14} /></span>
          <b>Shortlist</b>
        </div>
        <div className="pipe-list">
          <div className="pipe-row"><span>GulfMed Supplies</span><b>97</b></div>
          <div className="pipe-row"><span>Aster Labs Trading</span><b>91</b></div>
          <div className="pipe-row"><span>Clinova Health</span><b>86</b></div>
        </div>
      </div>
    ),
  },
  {
    icon: "card",
    tone: "blue",
    title: "Pay",
    text: "Carry the approved order into the payment handoff.",
    visual: (
      <div className="pipe-visual">
        <div className="pipe-head">
          <span className="pipe-icon"><Icon name="card" size={14} /></span>
          <b>Invoice #2841</b>
        </div>
        <div className="pipe-pay">
          <span>USD $14,200</span>
          <span className="pipe-arrow" aria-hidden="true">→</span>
          <span>AED 52,150</span>
        </div>
        <p className="pipe-note is-paid">✓ Paid in 2 clicks · fees included</p>
      </div>
    ),
  },
  {
    icon: "pin",
    tone: "navy",
    title: "Track",
    text: "Keep fulfillment status connected to the original decision.",
    visual: (
      <div className="pipe-visual">
        <div className="pipe-head">
          <span className="pipe-icon"><Icon name="pin" size={14} /></span>
          <b>Shipment EM-2210</b>
        </div>
        <div className="pipe-steps">
          <span className="is-done"><i aria-hidden="true" />Packed</span>
          <span className="is-done"><i aria-hidden="true" />In transit</span>
          <span><i aria-hidden="true" />Delivered</span>
        </div>
        <p className="pipe-note">On time · ETA Thursday</p>
      </div>
    ),
  },
];

const capabilityChips = [
  "AI matching",
  "Cost optimization",
  "Intelligent compliance",
  "Forecasting",
  "Insights",
  "Smart allocation",
];

const workflowSteps = [
  {
    number: "01",
    id: "capture",
    tone: "teal",
    label: "Requirement capture",
    title: "Describe it once.",
    description: "AI turns a sentence or document into a structured requirement that teams can review before sourcing.",
    chips: ["Plain language or docs", "Standards-aware fields", "Human review"],
  },
  {
    number: "02",
    id: "matching",
    tone: "green",
    label: "Intelligent matching",
    title: "Meet the right suppliers.",
    description: "Supplier options are compared on compliance, capacity, commercial fit, and delivery reliability.",
    chips: ["4-way comparison", "Reasoning visible", "Evidence attached"],
  },
  {
    number: "03",
    id: "decision",
    tone: "blue",
    label: "Decision & audit trail",
    title: "Approve with confidence.",
    description: "Compare bids, route approval, and preserve the rationale and handoffs behind the decision.",
    chips: ["Side-by-side bids", "Approval routing", "Exportable history"],
  },
];

const decisionStages = [
  {
    id: "requirement",
    label: "Requirement",
    eyebrow: "01 · What is actually needed",
    title: "The buying brief becomes the first source of truth.",
    text: "EaseMed structures the request into quantities, standards, delivery windows, and commercial constraints before suppliers are compared.",
    facts: [
      ["Volume", "12,000 units / quarter"],
      ["Evidence", "ISO 13485 + FDA 510(k)"],
      ["Delivery", "14-day window"],
      ["Benchmark", "≤ $0.42 / unit"],
    ],
  },
  {
    id: "reasoning",
    label: "Supplier reasoning",
    eyebrow: "02 · Why this option ranks higher",
    title: "A score is useful only when the reasoning is visible.",
    text: "Instead of a black-box recommendation, EaseMed shows the dimensions behind the ranking so procurement teams can challenge the result.",
    facts: [
      ["Compliance", "Required evidence present"],
      ["Capacity", "Volume fits stated capacity"],
      ["Commercial", "$0.38 / unit in sample"],
      ["Reliability", "Lead-time history considered"],
    ],
  },
  {
    id: "approval",
    label: "Approval",
    eyebrow: "03 · Who decided and why",
    title: "The recommendation arrives with context, not homework.",
    text: "Approvers see the requirement, supplier comparison, exceptions, and commercial trade-offs in one place before release.",
    facts: [
      ["Decision owner", "Finance approval"],
      ["Exceptions", "Surfaced before release"],
      ["Rationale", "Attached to the decision"],
      ["History", "Exportable event trail"],
    ],
  },
  {
    id: "fulfillment",
    label: "Fulfillment",
    eyebrow: "04 · What happened after approval",
    title: "The decision trail continues past the purchase order.",
    text: "Warehouse, payment, and logistics handoffs stay linked to the approved supplier and original requirement instead of splitting into new threads.",
    facts: [
      ["Payment", "Linked to approved order"],
      ["Warehouse", "Handoff status visible"],
      ["Logistics", "Shipment milestone context"],
      ["Closeout", "Decision and delivery connected"],
    ],
  },
];

const audienceCards = [
  {
    dark: false,
    icon: "users",
    eyebrow: "For health systems",
    title: "Stop hunting. Start deciding.",
    points: [
      "One intake for every buy request",
      "Matched supply with live evidence",
      "Approval history any auditor can trust",
    ],
    cta: "Apply as a health system",
  },
  {
    dark: true,
    icon: "globe",
    eyebrow: "For supplier partners",
    title: "See real demand early.",
    points: [
      "Structured, forecasted demand",
      "Quotations take hours, not days",
      "Repeat business between bids",
    ],
    cta: "Apply as a supplier partner",
  },
];

const securityTiles = [
  {
    icon: "shield",
    badge: "Audit-ready by design",
    detail: "Keep the request, evidence, approvals, and handoffs together.",
  },
  {
    icon: "lock",
    badge: "Role-based access",
    detail: "Each team sees exactly its lane.",
  },
  {
    icon: "fileCheck",
    badge: "Standards-aware requirements",
    detail: "Attach the evidence a supplier needs before a quote is compared.",
  },
];

const securityControls = [
  "Access scoped by role",
  "Evidence attached to each requirement",
  "Human approval before release",
  "Exportable decision history",
];

const complianceBadges = [
  { icon: "shield", label: "Standards-aware" },
  { icon: "fileCheck", label: "Evidence attached" },
  { icon: "lock", label: "Role-based access" },
  { icon: "globe", label: "Cross-border workflow" },
  { icon: "zap", label: "Human-approved" },
];

const outcomeStories = [
  {
    icon: "file",
    eyebrow: "Procurement teams",
    title: "Turn messy requests into a clean buying brief.",
    text: "Start from a sentence, document, or spreadsheet. EaseMed structures the requirement and keeps the supporting evidence beside it.",
    foot: "Request → requirement",
  },
  {
    icon: "target",
    eyebrow: "Supplier decisions",
    title: "Compare the right suppliers on the same evidence.",
    text: "Shortlist and score options on compliance, capacity, price, and reliability before an approver ever opens the decision.",
    foot: "Requirement → shortlist",
  },
  {
    icon: "checkCircle",
    eyebrow: "Finance & operations",
    title: "Keep approvals, payment, and delivery in one trail.",
    text: "The decision does not disappear after approval. Finance, warehouse, and logistics can follow the same order through release and delivery.",
    foot: "Approval → delivery",
  },
];

const faqs = [
  {
    question: "What is EaseMed?",
    answer:
      "The operating layer for healthcare procurement. It structures requirements, compares supplier options, supports approvals, and keeps downstream order handoffs connected in one workflow.",
  },
  {
    question: "Who is it for?",
    answer:
      "Both sides of the purchase. Health systems get structured sourcing; suppliers get verified demand. Each works in its own portal.",
  },
  {
    question: "How does matching work?",
    answer:
      "Supplier options can be compared on compliance, capacity, commercial fit, and delivery reliability. The ranked shortlist keeps the supporting evidence beside the recommendation.",
  },
  {
    question: "Does it replace our systems?",
    answer:
      "No. EaseMed sits on top of what you run today — requirements arrive by text, document, or CSV import.",
  },
  {
    question: "How is compliance handled?",
    answer:
      "Requirements can carry standards and supporting evidence, while approval activity stays connected to the decision history for later review.",
  },
  {
    question: "How do I get early access?",
    answer:
      "Apply as a health system or supplier partner. Meanwhile, the demo workspace is open — no signup.",
  },
];

function Logo({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 6.5v19" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M6.5 16H19" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <circle cx="26" cy="16" r="3.4" fill="#918dd4" />
    </svg>
  );
}

function Brand() {
  return (
    <a className="landing-brand" href="#top" aria-label="EaseMed.ai home">
      <span className="landing-brand-logo">
        <Logo size={28} />
      </span>
      <span>
        EaseMed<span className="landing-brand-muted">.ai</span>
      </span>
    </a>
  );
}

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const content = {
    file: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13h6M9 17h6" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
      </>
    ),
    checkCircle: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 12.3l2.4 2.4 4.6-5" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3c2.6 1.8 5.2 2.6 7.5 2.6v5.1c0 4.6-3 7.9-7.5 9.8-4.5-1.9-7.5-5.2-7.5-9.8V5.6C6.8 5.6 9.4 4.8 12 3z" />
        <path d="M9.2 11.8l2 2 3.6-3.9" />
      </>
    ),
    lock: (
      <>
        <path d="M8.5 10.5V8a3.5 3.5 0 017 0v2.5" />
        <rect x="5.5" y="10.5" width="13" height="9.5" rx="2" />
      </>
    ),
    fileCheck: (
      <>
        <path d="M13.5 3H7.5A1.5 1.5 0 006 4.5v15A1.5 1.5 0 007.5 21h9a1.5 1.5 0 001.5-1.5V8l-4.5-5z" />
        <path d="M9.5 13.8l2 2 3.5-3.8" />
      </>
    ),
    zap: <path d="M13 2L4.5 13.5H11L9.5 22 18 10.5h-6.5L13 2z" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.7 2.6 4 5.7 4 9s-1.3 6.4-4 9c-2.7-2.6-4-5.7-4-9s1.3-6.4 4-9z" />
      </>
    ),
    trend: (
      <>
        <path d="M22 7l-8.5 8.5-5-5L2 17" />
        <path d="M16 7h6v6" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 6-8 11-8 11s-8-5-8-11a8 8 0 0116 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    users: (
      <>
        <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M21 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </>
    ),
    card: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7.5V12l3 1.8" />
      </>
    ),
  } as const;

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {content[name as keyof typeof content]}
    </svg>
  );
}

const revealScript = `(function(){
  document.documentElement.classList.add('js');
  try {
    var els = document.querySelectorAll('[data-animate]');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (entry.isIntersecting) { entry.target.classList.add('in-view'); io.unobserve(entry.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -36px' });
      els.forEach(function(el){ io.observe(el); });
    } else {
      els.forEach(function(el){ el.classList.add('in-view'); });
    }
    var nav = document.querySelector('.landing-nav');
    if (nav) {
      var onScroll = function(){ nav.classList.toggle('scrolled', window.scrollY > 8); };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    var decisionRoot = document.querySelector('[data-decision-tabs]');
    if (decisionRoot) {
      var tabs = Array.from(decisionRoot.querySelectorAll('[role="tab"]'));
      var panels = Array.from(decisionRoot.querySelectorAll('[role="tabpanel"]'));
      var activate = function(nextTab) {
        var target = nextTab.getAttribute('aria-controls');
        tabs.forEach(function(tab){
          var active = tab === nextTab;
          tab.setAttribute('aria-selected', active ? 'true' : 'false');
          tab.setAttribute('tabindex', active ? '0' : '-1');
        });
        panels.forEach(function(panel){
          panel.hidden = panel.id !== target;
          panel.classList.toggle('is-active', panel.id === target);
        });
      };
      tabs.forEach(function(tab, index){
        tab.addEventListener('click', function(){ activate(tab); });
        tab.addEventListener('keydown', function(event){
          if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'Home' && event.key !== 'End') return;
          event.preventDefault();
          var nextIndex = index;
          if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
          if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
          if (event.key === 'Home') nextIndex = 0;
          if (event.key === 'End') nextIndex = tabs.length - 1;
          activate(tabs[nextIndex]);
          tabs[nextIndex].focus();
        });
      });
    }

    var navLinks = document.querySelectorAll('.landing-nav-links a');
    var navSections = Array.from(navLinks).map(function(link){
      var href = link.getAttribute('href');
      return href && href.charAt(0) === '#' ? document.querySelector(href) : null;
    }).filter(Boolean);
    if ('IntersectionObserver' in window && navSections.length) {
      var navIo = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (!entry.isIntersecting) return;
          navLinks.forEach(function(link){
            link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
          });
        });
      }, { rootMargin: '-25% 0px -65% 0px', threshold: 0.01 });
      navSections.forEach(function(section){ navIo.observe(section); });
    }

    if (window.matchMedia && window.matchMedia('(pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[data-spotlight]').forEach(function(card){
        card.addEventListener('pointermove', function(event){
          var rect = card.getBoundingClientRect();
          card.style.setProperty('--mx', (event.clientX - rect.left) + 'px');
          card.style.setProperty('--my', (event.clientY - rect.top) + 'px');
        });
      });
    }
  } catch (e) { document.documentElement.classList.remove('js'); }
})();`;

export default function LandingPage() {
  return (
    <main className="landing-page">
      <header className="landing-nav">
        <div className="landing-nav-inner">
          <Brand />

          <nav className="landing-nav-links" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="landing-nav-actions">
            <a className="landing-nav-login" href="/dashboard">
              Sign in
            </a>
            <a className="landing-button landing-button-primary landing-button-small" href="#cta">
              Get early access
            </a>
          </div>
        </div>
      </header>

      <section className="landing-hero" id="top">
        <div className="landing-hero-inner">
          <div className="landing-hero-status">
            <span className="status-live"><i />Private beta</span>
            <span>Healthcare procurement control tower</span>
          </div>
          <h1>
            Move every medical purchase
            <br />
            <em>from request to delivery.</em>
          </h1>
          <p className="landing-hero-description">
            EaseMed turns a buying request into a structured requirement, ranks the right suppliers,
            and keeps approvals, payment, and delivery in one auditable workflow.
          </p>
          <div className="landing-hero-actions">
            <a className="landing-button landing-button-primary" href="/dashboard">
              Explore the interactive demo
            </a>
            <a className="landing-button landing-button-ghost" href="#cta">
              Request early access
            </a>
          </div>
          <div className="landing-hero-callouts">
            <div><b>01</b><span>Structure the request</span></div>
            <div><b>02</b><span>Rank supplier options</span></div>
            <div><b>03</b><span>Approve with evidence</span></div>
            <div><b>04</b><span>Track through delivery</span></div>
          </div>
        </div>

        <div className="landing-console" aria-label="EaseMed procurement intelligence preview">
          <div className="console-screen">
            <div className="console-topbar">
              <span className="console-topbar-brand">
                <Logo size={16} />
                <b>EaseMed</b>
              </span>
              <span className="console-url">Sample procurement workspace</span>
              <span className="console-live"><i /> Interactive demo</span>
            </div>

            <div className="console-shell">
              <div className="console-grid">
                <article className="console-card console-requirement">
                  <div className="console-card-header">
                    <span className="console-icon"><Icon name="file" size={13} /></span>
                    <span>Requirement captured</span>
                    <b className="console-chip">Locked</b>
                  </div>
                  <h3>Surgical gloves (sterile)</h3>
                  <div className="console-specs">
                    <span><b>12,000</b> units / quarter</span>
                    <span><b>ISO 13485 + FDA 510(k)</b></span>
                    <span><b>14 days</b> delivery window</span>
                    <span><b>≤ $0.42</b> unit benchmark</span>
                  </div>
                  <div className="console-progress"><span /></div>
                  <small>Structured by AI · 2 min ago</small>
                </article>

                <article className="console-card console-match">
                  <div className="console-card-header">
                    <span className="console-icon"><Icon name="target" size={13} /></span>
                    <span>Supplier match</span>
                    <b className="console-chip">Tier-1</b>
                  </div>
                  <div className="console-match-number">97<span>/100</span></div>
                  <p>GulfMed Supplies · best of 3 shortlisted</p>
                  <div className="console-bars" aria-hidden="true">
                    <span style={{ width: "97%" }} /><span style={{ width: "88%" }} /><span style={{ width: "91%" }} />
                  </div>
                  <div className="console-match-labels"><span>Compliance</span><span>Capacity</span><span>Reliability</span></div>
                  <div className="console-chips">
                    <span>~9-day lead time</span>
                    <span>±3.2% vs benchmark</span>
                  </div>
                </article>

                <article className="console-card console-approval">
                  <div className="console-card-header">
                    <span className="console-icon"><Icon name="checkCircle" size={13} /></span>
                    <span>Decision ready</span>
                    <b className="console-chip">$0.38/unit</b>
                  </div>
                  <h3>Release to warehouse</h3>
                  <div className="console-approval-row"><span className="console-avatar">CFO</span><span>Finance approval</span><strong>Pending</strong></div>
                  <div className="console-approval-row"><span className="console-avatar">16</span><span>Audit events recorded</span><strong className="is-done">Complete</strong></div>
                  <div className="console-approval-row"><span className="console-avatar">W</span><span>Warehouse notified</span><strong className="is-done">Queued</strong></div>
                  <button type="button" className="console-review-button">Review decision</button>
                </article>
              </div>

              <div className="console-kpis">
                <div><small>Open orders</small><b>14</b></div>
                <div><small>On-time delivery</small><b>96%</b></div>
                <div><small>Savings · QTD</small><b>$18.4k</b></div>
                <div><small>Suppliers live</small><b>342</b></div>
              </div>

              <div className="console-footer">
                <span><i /> AI-assisted, human-approved</span>
                <span>Last synced just now</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-logos" aria-label="Teams EaseMed connects">
        <div className="landing-logos-inner">
          <p className="landing-logos-label">One workflow across the healthcare supply chain</p>
          <div className="landing-marquee">
            <div className="landing-marquee-track">
              {[0, 1].map((copy) => (
                <div className="landing-marquee-group" key={copy} aria-hidden={copy === 1 || undefined}>
                  {networkRoles.map((role, index) => (
                    <span key={role} className={`landing-logo landing-logo-${index + 1}`}>{role}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <p className="landing-logos-note">Buyer, supplier, finance, warehouse, and logistics teams stay on the same order trail.</p>
        </div>
      </section>

      <section className="landing-stats" aria-label="EaseMed workflow principles">
        <div className="landing-stats-inner" data-animate>
          {heroStats.map((stat) => (
            <div key={stat.label} className="landing-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section landing-journey" id="platform">
        <div className="landing-section-heading landing-centered" data-animate>
          <p className="landing-section-eyebrow">Platform</p>
          <h2>Discovery to delivery.</h2>
          <p className="landing-section-intro">
            EaseMed predicts what to buy — then automates everything after it.
          </p>
        </div>

        <div className="landing-wrap">
          <div className="landing-pipeline" data-animate>
            {journeyNodes.map((node, index) => (
              <article key={node.title} className={`landing-pipeline-node tone-${node.tone}`}>
                <span className="pipe-fig" aria-hidden="true">0{index + 1}</span>
                {node.visual}
                <h3>{node.title}</h3>
                <p>{node.text}</p>
              </article>
            ))}
          </div>

          <div className="landing-cap-chips" data-animate>
            {capabilityChips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>

          <p className="landing-journey-cta" data-animate>
            <a className="landing-text-cta" href="/dashboard">See it live in the demo</a>
          </p>
        </div>
      </section>

      <section className="landing-section landing-workflow" id="how-it-works">
        <div className="landing-section-heading landing-centered" data-animate>
          <p className="landing-section-eyebrow">How it works</p>
          <h2>Three steps. Zero guesswork.</h2>
          <p className="landing-section-intro">
            From a plain sentence to an approved order — one clear path.
          </p>
        </div>

        <div className="landing-wrap">
          <div className="landing-steps">
            {workflowSteps.map((step) => (
              <article className={`landing-step tone-${step.tone}`} data-animate key={step.number}>
                <div className="landing-step-badge">
                  <span>{step.number}</span>
                  {step.label}
                </div>
                <h3>{step.title}</h3>
                <p className="landing-step-description">{step.description}</p>
                <div className="landing-step-chips">
                  {step.chips.map((chip) => (
                    <span key={chip}><i aria-hidden="true">✓</i>{chip}</span>
                  ))}
                </div>

                <div className="landing-step-visual" aria-hidden="true">
                  {step.id === "capture" && (
                    <div className="visual-capture">
                      <p className="visual-request">
                        “Need 12k sterile surgical gloves, FDA-cleared, within 14 days.”
                      </p>
                      <div className="visual-arrow">Parsed by EaseMed AI</div>
                      <div className="visual-card">
                        <div className="visual-card-head">
                          <b>Surgical gloves (sterile)</b>
                          <span className="visual-chip">Requirement locked</span>
                        </div>
                        <div className="visual-specs">
                          <span>12,000 units / quarter</span>
                          <span>ISO 13485 + FDA 510(k)</span>
                          <span>14-day delivery window</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {step.id === "matching" && (
                    <div className="visual-matching">
                      <div className="visual-row">
                        <span>GulfMed Supplies</span>
                        <b>97</b>
                        <i className="visual-chip">Best match</i>
                      </div>
                      <div className="visual-row">
                        <span>Aster Labs Trading</span>
                        <b>91</b>
                        <small>Tier-1 · 11-day lead</small>
                      </div>
                      <div className="visual-row">
                        <span>Clinova Health</span>
                        <b>86</b>
                        <small>Tier-2 · ±3.2% vs benchmark</small>
                      </div>
                    </div>
                  )}
                  {step.id === "decision" && (
                    <div className="visual-decision">
                      <div className="visual-bid is-best">
                        <span>GulfMed Supplies</span>
                        <b>$0.38<small>/unit</small></b>
                        <i className="visual-chip">Lowest</i>
                      </div>
                      <div className="visual-bid">
                        <span>Aster Labs Trading</span>
                        <b>$0.41<small>/unit</small></b>
                      </div>
                      <div className="visual-audit">
                        <span>CFO approval</span>
                        <b>Pending</b>
                      </div>
                      <div className="visual-audit is-done">
                        <span>Compliance score</span>
                        <b>100%</b>
                      </div>
                      <div className="visual-audit is-done">
                        <span>Audit events recorded</span>
                        <b>16</b>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-section landing-decision" id="decision-intelligence">
        <div className="landing-section-heading landing-centered" data-animate>
          <p className="landing-section-eyebrow">Decision intelligence</p>
          <h2>Not another catalog. Not another black-box score.</h2>
          <p className="landing-section-intro">
            The recommendation is only the start. EaseMed keeps the evidence and reasoning visible from the first request through fulfillment.
          </p>
        </div>

        <div className="landing-wrap" data-decision-tabs data-animate>
          <div className="decision-shell" data-spotlight>
            <div className="decision-tabs" role="tablist" aria-label="Decision trail stages">
              {decisionStages.map((stage, index) => (
                <button
                  key={stage.id}
                  id={`decision-tab-${stage.id}`}
                  className="decision-tab"
                  type="button"
                  role="tab"
                  aria-selected={index === 0 ? "true" : "false"}
                  aria-controls={`decision-panel-${stage.id}`}
                  tabIndex={index === 0 ? 0 : -1}
                >
                  <span>0{index + 1}</span>
                  {stage.label}
                </button>
              ))}
            </div>

            <div className="decision-panels">
              {decisionStages.map((stage, index) => (
                <article
                  key={stage.id}
                  id={`decision-panel-${stage.id}`}
                  className={`decision-panel${index === 0 ? " is-active" : ""}`}
                  role="tabpanel"
                  aria-labelledby={`decision-tab-${stage.id}`}
                  hidden={index !== 0}
                >
                  <div className="decision-copy">
                    <p>{stage.eyebrow}</p>
                    <h3>{stage.title}</h3>
                    <span>{stage.text}</span>
                  </div>
                  <div className="decision-evidence" aria-label={`${stage.label} evidence example`}>
                    <div className="decision-evidence-head">
                      <span>Why this decision?</span>
                      <b>Illustrative demo data</b>
                    </div>
                    {stage.facts.map(([label, value], factIndex) => (
                      <div className="decision-fact" key={label} style={{ animationDelay: `${factIndex * 70}ms` }}>
                        <span>{label}</span>
                        <strong>{value}</strong>
                        <i aria-hidden="true"><em /></i>
                      </div>
                    ))}
                    <div className="decision-rationale">
                      <Icon name="checkCircle" size={16} />
                      <span>Evidence stays attached so a human can review, challenge, or approve the recommendation.</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section landing-audiences" id="teams">
        <div className="landing-section-heading landing-centered" data-animate>
          <p className="landing-section-eyebrow">Who it&apos;s for</p>
          <h2>Built for both sides of the purchase.</h2>
        </div>

        <div className="landing-wrap">
          <div className="landing-role-grid">
            {audienceCards.map((card, index) => (
              <article
                className={`landing-role-card${card.dark ? " is-dark" : " is-light"}`}
                key={card.eyebrow}
                data-animate
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <span className="landing-role-icon"><Icon name={card.icon} size={20} /></span>
                <p className="landing-role-eyebrow">{card.eyebrow}</p>
                <h3>{card.title}</h3>
                <ul className="landing-point-list">
                  {card.points.map((point) => (
                    <li key={point}>
                      <Icon name="checkCircle" size={15} />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  className={`landing-button ${card.dark ? "landing-button-light" : "landing-button-primary"}`}
                  href="#cta"
                >
                  {card.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-security" id="security">
        <div className="landing-wrap">
          <div className="landing-security-grid">
            <div className="landing-security-copy" data-animate>
              <p className="landing-section-eyebrow">Trust &amp; compliance</p>
              <h2>Every answer is one click away.</h2>
              <p className="landing-security-sub">
                Procurement decisions carry weight. EaseMed keeps the evidence, the audit
                history, and the access rules in order — by default.
              </p>
              <ul className="landing-control-list">
                {securityControls.map((control) => (
                  <li key={control}><Icon name="checkCircle" size={15} />{control}</li>
                ))}
              </ul>
            </div>

            <div className="landing-security-tiles">
              {securityTiles.map((tile, index) => (
                <article key={tile.badge} data-animate style={{ transitionDelay: `${index * 90}ms` }}>
                  <span className="security-icon"><Icon name={tile.icon} size={19} /></span>
                  <div>
                    <h3>{tile.badge}</h3>
                    <p>{tile.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="landing-compliance-row" data-animate>
            {complianceBadges.map((badge) => (
              <span key={badge.label}><Icon name={badge.icon} size={14} />{badge.label}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-section landing-testimonials" id="customers">
        <div className="landing-section-heading landing-centered" data-animate>
          <p className="landing-section-eyebrow">What changes</p>
          <h2>A cleaner handoff at every step.</h2>
          <p className="landing-section-intro">
            EaseMed is designed to remove the gaps between a request, a supplier decision, and the teams that finish the order.
          </p>
        </div>

        <div className="landing-wrap">
          <div className="landing-testimonial-columns">
            {outcomeStories.map((story, index) => (
              <article
                className={`landing-testimonial-card landing-outcome-card tone-${index % 3}`}
                key={story.title}
                data-animate
                style={{ transitionDelay: `${(index % 3) * 80}ms` }}
              >
                <span className="landing-results-icon"><Icon name={story.icon} size={22} /></span>
                <p className="landing-role-eyebrow">{story.eyebrow}</p>
                <h3>{story.title}</h3>
                <p className="landing-outcome-copy">{story.text}</p>
                <span className="landing-testimonial-tag">{story.foot}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-section landing-results" id="results">
        <div className="landing-section-heading landing-centered" data-animate>
          <p className="landing-section-eyebrow">Designed for the real workflow</p>
          <h2>Fewer systems to chase. More context at the decision.</h2>
          <p className="landing-section-intro">
            The demo focuses on the work that usually gets scattered across inboxes, spreadsheets,
            finance threads, and shipment trackers.
          </p>
        </div>

        <div className="landing-wrap">
          <div className="landing-results-grid">
            <article className="landing-results-card tone-teal" data-animate>
              <span className="landing-results-icon"><Icon name="clock" size={24} /></span>
              <strong>One brief</strong>
              <span>A structured requirement replaces repeated clarification across teams.</span>
            </article>
            <article className="landing-results-card tone-green" data-animate style={{ transitionDelay: "90ms" }}>
              <span className="landing-results-icon"><Icon name="trend" size={24} /></span>
              <strong>One shortlist</strong>
              <span>Supplier options arrive ranked on the same decision criteria.</span>
            </article>
            <article className="landing-results-card tone-blue" data-animate style={{ transitionDelay: "180ms" }}>
              <span className="landing-results-icon"><Icon name="shield" size={24} /></span>
              <strong>One trail</strong>
              <span>Approvals, order status, and delivery handoffs stay connected.</span>
            </article>
          </div>
          <p className="landing-results-note">Explore the live product demo to see the complete buyer and operations flow.</p>
        </div>
      </section>

      <section className="landing-section landing-founder" id="about">
        <div className="landing-wrap">
          <div className="landing-founder-card" data-animate>
            <div className="landing-founder-portrait">
              <img src="/founder.webp" alt="Nikita Akolikar — Founder & CEO, EaseMed.ai" loading="lazy" />
            </div>
            <div className="landing-founder-copy">
              <p className="landing-section-eyebrow">About the founder</p>
              <h2>Built by someone who lived the problem.</h2>
              <p className="landing-founder-bio">
                Nikita Akolikar ran cross-border sourcing operations for 13 years — five of them
                inside healthcare procurement.
              </p>
              <div className="landing-founder-stats">
                <div><b>13+ yrs</b><span>global sourcing</span></div>
                <div><b>4</b><span>continents</span></div>
                <div><b>30+</b><span>clients</span></div>
              </div>
              <blockquote>
                “I see opportunities others miss. EaseMed turns that instinct into infrastructure.”
              </blockquote>
              <div className="landing-founder-signoff">
                <strong>Nikita Akolikar</strong>
                <span>Founder &amp; CEO, EaseMed.ai</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-careers">
        <div className="landing-wrap landing-careers-inner" data-animate>
          <div>
            <p className="landing-section-eyebrow">Careers</p>
            <h2>Build the future of healthcare procurement.</h2>
            <p>We&apos;re hiring across engineering, operations, and partnerships.</p>
          </div>
          <a className="landing-button landing-button-dark" href="mailto:careers@easemed.ai">Join us</a>
        </div>
      </section>

      <section className="landing-section landing-faq" id="faq">
        <div className="landing-section-heading landing-centered" data-animate>
          <p className="landing-section-eyebrow">FAQ</p>
          <h2>Questions, answered.</h2>
        </div>

        <div className="landing-wrap">
          <div className="landing-faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} data-animate style={{ transitionDelay: `${Math.min(index, 3) * 60}ms` }}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-cta" id="cta">
        <div className="landing-wrap">
          <div className="landing-cta-panel" data-animate>
            <span className="landing-cta-mark" aria-hidden="true"><Logo size={40} /></span>
            <h2>Make your next purchase the clearest one yet.</h2>
            <p>Join the early-access wave — or explore the demo first. No signup.</p>
            <div className="landing-cta-actions">
              <a className="landing-button landing-button-light" href="mailto:hello@easemed.ai?subject=EaseMed%20early%20access">
                Get early access
              </a>
              <a className="landing-button landing-button-outline-light" href="/dashboard">Open the demo workspace</a>
            </div>
            <div className="landing-cta-promise">
              <span><Icon name="checkCircle" size={14} />White-glove onboarding</span>
              <span><Icon name="checkCircle" size={14} />Free inventory import</span>
              <span><Icon name="checkCircle" size={14} />No lock-in — cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="landing-wrap">
          <div className="landing-footer-grid">
            <div className="landing-footer-brand">
              <Brand />
              <p>Discovery to delivery for healthcare procurement — predict, source, pay, track.</p>
            </div>
            <nav aria-label="Product links">
              <strong>Product</strong>
              <a href="#platform">Platform</a>
              <a href="#how-it-works">How it works</a>
              <a href="#security">Security</a>
              <a href="/dashboard">Demo workspace</a>
            </nav>
            <nav aria-label="Company links">
              <strong>Company</strong>
              <a href="#about">About</a>
              <a href="mailto:careers@easemed.ai">Careers</a>
              <a href="mailto:hello@easemed.ai">Contact</a>
            </nav>
            <nav aria-label="Legal links">
              <strong>Legal</strong>
              <a href="#faq">Privacy policy</a>
              <a href="#faq">Terms of service</a>
            </nav>
          </div>
          <div className="landing-footer-bottom">
            <span>© 2026 EaseMed.ai — Healthcare procurement intelligence.</span>
            <div className="landing-footer-social">
              <a href="https://www.linkedin.com" aria-label="LinkedIn">LinkedIn</a>
              <a href="https://x.com" aria-label="X">X</a>
              <a href="https://www.instagram.com" aria-label="Instagram">Instagram</a>
            </div>
          </div>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{ __html: revealScript }} />
    </main>
  );
}

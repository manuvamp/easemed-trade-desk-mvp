const navLinks = [
  { href: "#platform", label: "Platform" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#security", label: "Security" },
  { href: "#faq", label: "FAQ" },
];

const partnerNames = [
  "Meditek Gulf",
  "Northstar Care",
  "Aster Labs",
  "Clinova Health",
  "Kantipur Health",
  "Helixa Medical",
];

const heroStats = [
  { value: "340+", label: "Verified partners in network" },
  { value: "97/100", label: "Best-match supplier score" },
  { value: "~9 days", label: "Average matched lead time" },
  { value: "±3.2%", label: "Price variance vs. benchmark" },
];

const journeyNodes = [
  {
    icon: "trend",
    tone: "teal",
    title: "Predict",
    text: "AI flags what to buy before you run out.",
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
    text: "Verified suppliers, ranked and ready to compare.",
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
    text: "Cross-border payments in a few clicks.",
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
    text: "Live shipment tracking, to your door.",
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
    description: "AI turns a sentence or document into a compliance-ready requirement.",
    chips: ["Plain language or docs", "Standards auto-attached", "Ready in minutes"],
  },
  {
    number: "02",
    id: "matching",
    tone: "green",
    label: "Intelligent matching",
    title: "Meet the right suppliers.",
    description: "Every verified partner is scored live on compliance, capacity, price, and reliability.",
    chips: ["340+ verified network", "Live 4-way scoring", "Evidence-based"],
  },
  {
    number: "03",
    id: "decision",
    tone: "blue",
    label: "Decision & audit trail",
    title: "Approve with confidence.",
    description: "Compare bids, release in one click, and keep an immutable record.",
    chips: ["Side-by-side bids", "One-click approvals", "Immutable history"],
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
    detail: "Every action timestamped. Nothing editable.",
  },
  {
    icon: "lock",
    badge: "Role-based access",
    detail: "Each team sees exactly its lane.",
  },
  {
    icon: "fileCheck",
    badge: "Standards-aware",
    detail: "ISO 13485 · FDA 510(k) built in.",
  },
];

const securityControls = [
  "GDPR-aligned data handling",
  "Encrypted in transit and at rest",
  "Human-in-the-loop approvals",
  "Exportable audit packs",
];

const complianceBadges = [
  { icon: "shield", label: "ISO 13485-aware" },
  { icon: "fileCheck", label: "FDA 510(k) ready" },
  { icon: "lock", label: "AES-256 encryption" },
  { icon: "globe", label: "GDPR-aligned" },
  { icon: "zap", label: "99.9% uptime target" },
];

const testimonials = [
  {
    quote:
      "Requests used to live in five WhatsApp groups. Now every requirement arrives structured, with the evidence attached.",
    name: "Dr. Amara Osei",
    role: "Head of Procurement, Regional Hospital Group",
    tag: "Health system",
  },
  {
    quote: "We see verified demand before it becomes a tender. Quotation time went from days to hours.",
    name: "Rahul Mehta",
    role: "Director, MedSupply Partners",
    tag: "Distribution",
  },
  {
    quote: "Everything a hospital auditor asks for is already attached. That saved our week.",
    name: "Elena Petrova",
    role: "COO, Clinova Health",
    tag: "Supplier",
  },
  {
    quote: "Approvals that took a fortnight now take an afternoon — and we can show why.",
    name: "James Whitfield",
    role: "Operations Lead, Northstar Care",
    tag: "Care network",
  },
  {
    quote: "Warehouse, sales, and logistics finally read from one screen. Handoffs stopped breaking.",
    name: "Fatima Al-Rashid",
    role: "Supply Chain Manager, Meditek Gulf",
    tag: "Logistics",
  },
  {
    quote: "We plan production against real demand now, not rumor.",
    name: "Daniel Kim",
    role: "Founder, Helixa Medical Devices",
    tag: "Manufacturing",
  },
];

const faqs = [
  {
    question: "What is EaseMed?",
    answer:
      "The operating layer for healthcare procurement. It predicts what to buy, matches verified suppliers, automates purchasing, and tracks delivery — all in one place.",
  },
  {
    question: "Who is it for?",
    answer:
      "Both sides of the purchase. Health systems get structured sourcing; suppliers get verified demand. Each works in its own portal.",
  },
  {
    question: "How does matching work?",
    answer:
      "Every partner is scored live on compliance, capacity, price history, and delivery reliability. You get a ranked shortlist with the evidence attached.",
  },
  {
    question: "Does it replace our systems?",
    answer:
      "No. EaseMed sits on top of what you run today — requirements arrive by text, document, or CSV import.",
  },
  {
    question: "How is compliance handled?",
    answer:
      "Standards like ISO 13485 and FDA 510(k) attach to requirements automatically, and every approval is logged immutably.",
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
      <circle cx="26" cy="16" r="3.4" fill="#0cc0cf" />
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
    if (!('IntersectionObserver' in window)) {
      els.forEach(function(el){ el.classList.add('in-view'); });
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting) { entry.target.classList.add('in-view'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px' });
    els.forEach(function(el){ io.observe(el); });
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
          <h1>
            Source medical supplies
            <br />
            in <em>days, not weeks.</em>
          </h1>
          <p className="landing-hero-description">
            EaseMed predicts what you need, matches verified suppliers, and carries the purchase
            through payment and delivery — one platform, end to end.
          </p>
          <div className="landing-hero-actions">
            <a className="landing-button landing-button-primary" href="#cta">
              Get early access
            </a>
            <a className="landing-button landing-button-ghost" href="/dashboard">
              Open the demo workspace
            </a>
          </div>
          <div className="landing-hero-callouts">
            <div><b>3×</b><span>Faster sourcing cycles</span></div>
            <div><b>340+</b><span>Verified suppliers in network</span></div>
            <div><b>100%</b><span>Audit-ready decisions</span></div>
          </div>
        </div>

        <div className="landing-console" aria-label="EaseMed procurement intelligence preview">
          <div className="console-screen">
            <div className="console-topbar">
              <span className="console-topbar-brand">
                <Logo size={16} />
                <b>EaseMed</b>
              </span>
              <span className="console-url">app.easemed.ai/workspace</span>
              <span className="console-live"><i /> Live demo data</span>
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

      <section className="landing-logos" aria-label="Illustrative network">
        <div className="landing-logos-inner">
          <p className="landing-logos-label">Working with teams across the supply chain</p>
          <div className="landing-marquee">
            <div className="landing-marquee-track">
              {[0, 1].map((copy) => (
                <div className="landing-marquee-group" key={copy} aria-hidden={copy === 1 || undefined}>
                  {partnerNames.map((partner, index) => (
                    <span key={partner} className={`landing-logo landing-logo-${index + 1}`}>{partner}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <p className="landing-logos-note">Illustrative network — the live partner directory ships with early access.</p>
        </div>
      </section>

      <section className="landing-stats" aria-label="Platform figures from the product demo">
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
          <p className="landing-section-eyebrow">Customer voices</p>
          <h2>Less chasing. More decisions made on time.</h2>
        </div>

        <div className="landing-wrap">
          <div className="landing-testimonial-columns">
            {testimonials.map((testimonial, index) => (
              <figure
                className={`landing-testimonial-card tone-${index % 3}`}
                key={testimonial.name}
                data-animate
                style={{ transitionDelay: `${(index % 3) * 80}ms` }}
              >
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption>
                  <span className={`landing-testimonial-avatar tone-${index % 3}`} aria-hidden="true">
                    {testimonial.name.split(" ").map((part) => part[0]).join("")}
                  </span>
                  <span className="landing-testimonial-meta">
                    <strong>{testimonial.name}</strong>
                    <small>{testimonial.role}</small>
                  </span>
                  <span className="landing-testimonial-tag">{testimonial.tag}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="landing-testimonials-note">
            Perspectives shown are illustrative design-partner voices ahead of public launch.
          </p>
        </div>
      </section>

      <section className="landing-section landing-results" id="results">
        <div className="landing-section-heading landing-centered" data-animate>
          <p className="landing-section-eyebrow">Early results</p>
          <h2>It&apos;s working where it&apos;s deployed.</h2>
          <p className="landing-section-intro">
            Numbers from our design-partner pilots, measured against each team&apos;s previous
            process.
          </p>
        </div>

        <div className="landing-wrap">
          <div className="landing-results-grid">
            <article className="landing-results-card tone-teal" data-animate>
              <span className="landing-results-icon"><Icon name="clock" size={24} /></span>
              <strong>11 days → 3</strong>
              <span>Average purchase cycle at a regional hospital group</span>
            </article>
            <article className="landing-results-card tone-green" data-animate style={{ transitionDelay: "90ms" }}>
              <span className="landing-results-icon"><Icon name="trend" size={24} /></span>
              <strong>4×</strong>
              <span>More supplier quotations sent per week at MedSupply Partners</span>
            </article>
            <article className="landing-results-card tone-blue" data-animate style={{ transitionDelay: "180ms" }}>
              <span className="landing-results-icon"><Icon name="shield" size={24} /></span>
              <strong>100%</strong>
              <span>Audit packs accepted without a single follow-up at Northstar Care</span>
            </article>
          </div>
          <p className="landing-results-note">Illustrative pilot metrics ahead of public launch.</p>
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

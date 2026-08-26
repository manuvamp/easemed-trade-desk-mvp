const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#platform", label: "Platform" },
  { href: "#customers", label: "Customers" },
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
    title: "Predict",
    text: "AI flags what to buy before you run out.",
    visual: (
      <div className="pipe-visual">
        <span className="pipe-label">Inventory · Surgical gloves</span>
        <div className="pipe-stock">
          <span className="pipe-stock-bar"><i style={{ width: "18%" }} /></span>
          <em>18% left</em>
        </div>
        <div className="pipe-alert"><span aria-hidden="true">✦</span>Reorder 12,000 units by Mar 4</div>
      </div>
    ),
  },
  {
    title: "Source",
    text: "Verified suppliers, ranked and ready to compare.",
    visual: (
      <div className="pipe-visual">
        <span className="pipe-label">Shortlist</span>
        <div className="pipe-row"><b>GulfMed Supplies</b><span className="pipe-score">97</span></div>
        <div className="pipe-row"><b>Aster Labs Trading</b><span className="pipe-score">91</span></div>
        <div className="pipe-row"><b>Clinova Health</b><span className="pipe-score">86</span></div>
      </div>
    ),
  },
  {
    title: "Pay",
    text: "Cross-border payments in a few clicks.",
    visual: (
      <div className="pipe-visual">
        <span className="pipe-label">Payment · Invoice #2841</span>
        <div className="pipe-pay"><b>$14,200</b><span aria-hidden="true">→</span><b>AED 52,150</b></div>
        <div className="pipe-alert is-paid"><span aria-hidden="true">✓</span>Paid in 2 clicks · fees included</div>
      </div>
    ),
  },
  {
    title: "Track",
    text: "Live shipment tracking, to your door.",
    visual: (
      <div className="pipe-visual">
        <span className="pipe-label">Shipment EM-2210</span>
        <div className="pipe-steps">
          <span className="is-done"><i aria-hidden="true" />Packed</span>
          <span className="is-done"><i aria-hidden="true" />In transit</span>
          <span><i aria-hidden="true" />Delivered</span>
        </div>
        <div className="pipe-alert"><span aria-hidden="true">◎</span>On time · ETA Thursday</div>
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
    label: "Requirement capture",
    title: "Describe it once.",
    description:
      "Type a sentence or upload a document — AI turns it into a complete, compliance-ready requirement.",
    bullets: ["Plain language or documents", "Standards auto-attached", "Ready in minutes"],
  },
  {
    number: "02",
    id: "matching",
    label: "Intelligent matching",
    title: "Meet the right suppliers.",
    description:
      "Every verified partner is scored live on compliance, capacity, price history, and reliability.",
    bullets: ["340+ verified network", "Live four-way scoring", "Evidence, not promises"],
  },
  {
    number: "03",
    id: "decision",
    label: "Decision & audit trail",
    title: "Approve with confidence.",
    description:
      "Compare bids, release in one click, and keep an immutable record of every decision.",
    bullets: ["Side-by-side bids", "One-click approvals", "Immutable history"],
  },
];

const audienceCards = [
  {
    className: "health-system",
    eyebrow: "For health systems",
    title: "Stop hunting. Start deciding.",
    pains: ["Hours lost chasing suppliers", "Weeks-long purchase cycles", "Compliance in spreadsheets"],
    outcome:
      "One intake, matched supply, and an approval history any auditor can trust.",
    cta: "Apply as a health system",
  },
  {
    className: "supplier",
    eyebrow: "For supplier partners",
    title: "See real demand early.",
    pains: ["Demand buried in fragmented networks", "Quotations eating selling hours", "No view of future need"],
    outcome:
      "Structured requests and forecasted demand that turn one bid into repeat business.",
    cta: "Apply as a supplier partner",
  },
];

const securityTiles = [
  {
    icon: "shield",
    tone: "blue",
    badge: "Audit-ready by design",
    detail: "Every action timestamped. Nothing editable.",
  },
  {
    icon: "lock",
    tone: "teal",
    badge: "Role-based access",
    detail: "Each team sees exactly its lane.",
  },
  {
    icon: "fileCheck",
    tone: "green",
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

const testimonials = [
  {
    quote:
      "Requests used to live in five WhatsApp groups. Now every requirement arrives structured, with the evidence attached.",
    name: "Dr. Amara Osei",
    role: "Head of Procurement",
    company: "Regional Hospital Group",
    tag: "Health system",
  },
  {
    quote: "We see verified demand before it becomes a tender. Quotation time went from days to hours.",
    name: "Rahul Mehta",
    role: "Director",
    company: "MedSupply Partners",
    tag: "Distribution",
  },
  {
    quote: "Everything a hospital auditor asks for is already attached. That saved our week.",
    name: "Elena Petrova",
    role: "COO",
    company: "Clinova Health",
    tag: "Supplier",
  },
  {
    quote: "Approvals that took a fortnight now take an afternoon — and we can show why.",
    name: "James Whitfield",
    role: "Operations Lead",
    company: "Northstar Care",
    tag: "Care network",
  },
  {
    quote: "Warehouse, sales, and logistics finally read from one screen. Handoffs stopped breaking.",
    name: "Fatima Al-Rashid",
    role: "Supply Chain Manager",
    company: "Meditek Gulf",
    tag: "Logistics",
  },
  {
    quote: "We plan production against real demand now, not rumor.",
    name: "Daniel Kim",
    role: "Founder",
    company: "Helixa Medical Devices",
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
        <Logo size={30} />
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
      <div className="landing-announce">
        <span className="landing-announce-pill">New</span>
        <p>Early access is open for health systems &amp; supplier partners</p>
        <a href="#cta">Join →</a>
      </div>

      <header className="landing-nav">
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
      </header>

      <section className="landing-hero" id="top">
        <div className="landing-hero-inner">
          <h1>
            Source medical supplies in <em>days, not weeks.</em>
          </h1>
          <p className="landing-hero-description">
            AI tells you what to buy, finds the right supplier, automates the purchase, and
            tracks it to your door.
          </p>
          <div className="landing-hero-actions">
            <a className="landing-button landing-button-primary" href="#cta">
              Get early access
            </a>
            <a className="landing-button landing-button-ghost" href="/dashboard">
              See the live demo
            </a>
          </div>
          <div className="landing-hero-proof">
            <span className="landing-stars" aria-label="Rated five out of five by design-partner teams">
              ★★★★★
            </span>
            <span>Loved by early-access teams</span>
            <i aria-hidden="true" />
            <span>13+ years in healthcare sourcing</span>
          </div>
        </div>

        <div className="landing-console" aria-label="EaseMed procurement intelligence preview">
          <div className="console-screen">
            <div className="console-shell">
              <div className="console-topbar">
                <Logo size={15} />
                <span>EaseMed intelligence</span>
                <span className="console-live"><i /> Live demo data</span>
              </div>
              <div className="console-grid">
                <article className="console-card console-requirement">
                  <div className="console-card-header">
                    <span className="console-icon"><Icon name="file" size={13} /></span>
                    <span>Requirement captured</span>
                    <b>Locked ✓</b>
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
                    <b className="console-score">Tier-1</b>
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
                    <b>$0.38/unit</b>
                  </div>
                  <h3>Release to warehouse</h3>
                  <div className="console-approval-row"><span className="console-avatar">CFO</span><span>Finance approval</span><strong>Pending</strong></div>
                  <div className="console-approval-row"><span className="console-avatar console-avatar-light">16</span><span>Audit events recorded</span><strong className="is-done">Complete</strong></div>
                  <div className="console-approval-row"><span className="console-avatar console-avatar-light">W</span><span>Warehouse notified</span><strong className="is-done">Queued</strong></div>
                  <button type="button" className="console-review-button">Review decision <span aria-hidden="true">↗</span></button>
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
      </section>

      <section className="landing-stats" aria-label="Platform figures from the product demo">
        <div className="landing-stats-inner" data-animate>
          {heroStats.map((stat) => (
            <article key={stat.label} className="landing-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
        <p className="landing-stats-note">Figures pulled straight from the live EaseMed product environment.</p>
      </section>

      <section className="landing-section landing-journey" id="platform">
        <div className="landing-section-heading landing-centered" data-animate>
          <p className="landing-section-eyebrow">Discovery to delivery</p>
          <h2>One platform. The whole journey.</h2>
          <p className="landing-section-intro">
            EaseMed predicts what to buy — then automates everything after it.
          </p>
        </div>

        <div className="landing-pipeline" data-animate>
          <span className="landing-pipeline-line" aria-hidden="true" />
          {journeyNodes.map((node) => (
            <article key={node.title} className="landing-pipeline-node">
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

        <div className="landing-journey-cta" data-animate>
          <a className="landing-text-cta" href="/dashboard">See it live in the demo →</a>
        </div>
      </section>

      <section className="landing-section landing-workflow" id="how-it-works">
        <div className="landing-section-heading landing-centered" data-animate>
          <div className="landing-heading-main">
            <p className="landing-section-eyebrow">How it works</p>
            <h2>Three steps. Zero guesswork.</h2>
          </div>
          <p className="landing-section-intro">
            From a plain sentence to an approved order — one clear path, no follow-up threads.
          </p>
        </div>

        <div className="landing-steps">
          {workflowSteps.map((step) => (
            <article className={`landing-step landing-step-${step.id}`} data-animate key={step.number}>
              <div className="landing-step-copy">
                <div className="landing-step-badge">
                  <span>{step.number}</span>
                  {step.label}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <ul className="landing-step-list">
                  {step.bullets.map((bullet) => (
                    <li key={bullet}><span aria-hidden="true">✓</span>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className={`landing-step-visual visual-${step.id}`} aria-hidden="true">
                {step.id === "capture" && (
                  <div className="visual-capture">
                    <div className="visual-request">
                      “Need 12k sterile surgical gloves, FDA-cleared, within 14 days.”
                    </div>
                    <div className="visual-arrow">↓ Parsed by EaseMed AI</div>
                    <div className="visual-requirement-card">
                      <div className="visual-card-head">
                        <b>Surgical gloves (sterile)</b>
                        <span className="visual-chip visual-chip-green">Requirement locked</span>
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
                    <div className="visual-supplier is-best">
                      <span className="visual-rank">97</span>
                      <div><b>GulfMed Supplies</b><small>Tier-1 · ~9-day lead time</small></div>
                      <span className="visual-chip visual-chip-green">Best match</span>
                    </div>
                    <div className="visual-supplier">
                      <span className="visual-rank">91</span>
                      <div><b>Aster Labs Trading</b><small>Tier-1 · 11-day lead time</small></div>
                    </div>
                    <div className="visual-supplier">
                      <span className="visual-rank">86</span>
                      <div><b>Clinova Health</b><small>Tier-2 · ±3.2% vs benchmark</small></div>
                    </div>
                  </div>
                )}
                {step.id === "decision" && (
                  <div className="visual-decision">
                    <div className="visual-bids">
                      <div className="visual-bid">
                        <span>GulfMed Supplies</span>
                        <b>$0.38<small>/unit</small></b>
                        <span className="visual-chip visual-chip-green">Lowest</span>
                      </div>
                      <div className="visual-bid is-muted">
                        <span>Aster Labs Trading</span>
                        <b>$0.41<small>/unit</small></b>
                      </div>
                    </div>
                    <div className="visual-audit-row"><span>CFO approval</span><b>Pending</b></div>
                    <div className="visual-audit-row is-done"><span>Compliance score</span><b>100%</b></div>
                    <div className="visual-audit-row is-done"><span>Audit events recorded</span><b>16</b></div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section landing-audiences" id="teams">
        <div className="landing-section-heading landing-centered" data-animate>
          <p className="landing-section-eyebrow">Democratizing procurement</p>
          <h2>Built for both sides of the purchase.</h2>
        </div>
        <div className="landing-role-grid">
          {audienceCards.map((card, index) => (
            <article
              className={`landing-role-card ${card.className}`}
              key={card.eyebrow}
              data-animate
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <p className="landing-role-eyebrow">{card.eyebrow}</p>
              <h3>{card.title}</h3>
              <ul className="landing-pain-list">
                {card.pains.map((pain) => (
                  <li key={pain}><span aria-hidden="true">×</span>{pain}</li>
                ))}
              </ul>
              <p className="landing-role-outcome">{card.outcome}</p>
              <a className="landing-button landing-button-outline-light" href="#cta">{card.cta} →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section landing-security" id="security">
        <div className="landing-security-grid">
          <div className="landing-security-copy" data-animate>
            <p className="landing-section-eyebrow">Trust &amp; compliance</p>
            <h2>Every answer is one click away.</h2>
            <ul className="landing-control-list">
              {securityControls.map((control) => (
                <li key={control}><span aria-hidden="true">✓</span>{control}</li>
              ))}
            </ul>
          </div>
          <div className="landing-security-tiles">
            {securityTiles.map((tile, index) => (
              <article key={tile.badge} data-animate style={{ transitionDelay: `${index * 90}ms` }}>
                <span className={`security-icon tone-${tile.tone}`}><Icon name={tile.icon} size={21} /></span>
                <div>
                  <h3>{tile.badge}</h3>
                  <p>{tile.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-section landing-testimonials" id="customers">
        <div className="landing-section-heading landing-centered" data-animate>
          <p className="landing-section-eyebrow">Customer voices</p>
          <h2>Less chasing. More decisions made on time.</h2>
        </div>
        <div className="landing-testimonial-columns">
          {testimonials.map((testimonial, index) => (
            <figure
              className="landing-testimonial-card"
              key={testimonial.name}
              data-animate
              style={{ transitionDelay: `${(index % 3) * 80}ms` }}
            >
              <span className="landing-stars" aria-hidden="true">★★★★★</span>
              <blockquote>“{testimonial.quote}”</blockquote>
              <figcaption>
                <span className="landing-testimonial-avatar" aria-hidden="true">
                  {testimonial.name.split(" ").map((part) => part[0]).join("")}
                </span>
                <span>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.role}, {testimonial.company}</small>
                </span>
                <em>{testimonial.tag}</em>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="landing-testimonials-note">
          Perspectives shown are illustrative design-partner voices ahead of public launch.
        </p>
      </section>

      <section className="landing-section landing-founder" id="about">
        <div className="landing-founder-card" data-animate>
          <div className="landing-founder-portrait">
            <img src="/founder.webp" alt="Nikita Akolikar — Founder & CEO, EaseMed.ai" loading="lazy" />
            <div className="founder-chip founder-chip-1">
              <span className="founder-chip-icon tone-green"><Icon name="zap" size={15} /></span>
              <span><b>13+ yrs</b><small>in global sourcing</small></span>
            </div>
            <div className="founder-chip founder-chip-2">
              <span className="founder-chip-icon tone-blue"><Icon name="globe" size={15} /></span>
              <span><b>30+ clients</b><small>across 4 continents</small></span>
            </div>
            <div className="founder-chip founder-chip-3">
              <span className="founder-chip-icon tone-teal"><Icon name="trend" size={15} /></span>
              <span><b>Multi-$M</b><small>sourcing programs</small></span>
            </div>
          </div>
          <div className="landing-founder-copy">
            <p className="landing-section-eyebrow">About the founder</p>
            <h2>Built by someone who lived the problem.</h2>
            <p className="landing-founder-bio">
              Nikita Akolikar ran cross-border sourcing operations for 13 years — five of them
              inside healthcare procurement.
            </p>
            <blockquote>
              “I see opportunities others miss. EaseMed turns that instinct into infrastructure.”
            </blockquote>
            <div className="landing-founder-signoff"><strong>Nikita Akolikar</strong><span>Founder &amp; CEO, EaseMed.ai</span></div>
          </div>
        </div>
      </section>

      <section className="landing-careers">
        <div data-animate>
          <p className="landing-section-eyebrow">Careers</p>
          <h2>Build the future of healthcare procurement.</h2>
          <p>We&apos;re hiring across engineering, operations, and partnerships.</p>
        </div>
        <a className="landing-button landing-button-dark" href="mailto:careers@easemed.ai">Join us →</a>
      </section>

      <section className="landing-section landing-faq" id="faq">
        <div className="landing-section-heading landing-centered" data-animate>
          <p className="landing-section-eyebrow">FAQ</p>
          <h2>Questions, answered.</h2>
        </div>
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
      </section>

      <section className="landing-cta" id="cta">
        <div className="landing-cta-panel" data-animate>
          <span className="landing-cta-mark" aria-hidden="true"><Logo size={44} /></span>
          <h2>Make your next purchase the clearest one yet.</h2>
          <p>Join the early-access wave — or explore the demo first. No signup.</p>
          <div className="landing-cta-actions">
            <a className="landing-button landing-button-light" href="mailto:hello@easemed.ai?subject=EaseMed%20early%20access">
              Get early access
            </a>
            <a className="landing-button landing-button-outline-light" href="/dashboard">Open the demo workspace ↗</a>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
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
            <a href="https://www.linkedin.com" aria-label="LinkedIn">in</a>
            <a href="https://x.com" aria-label="X">𝕏</a>
            <a href="https://www.instagram.com" aria-label="Instagram">◎</a>
          </div>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{ __html: revealScript }} />
    </main>
  );
}

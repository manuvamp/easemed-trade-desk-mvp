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
    badge: "Audit-ready by design",
    detail: "Every action timestamped. Nothing editable.",
  },
  {
    badge: "Role-based access",
    detail: "Each team sees exactly its lane.",
  },
  {
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

const founderChips = ["13+ yrs sourcing", "4 continents", "30+ clients", "Multi-$M programs"];

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
      <defs>
        <linearGradient id="em-mark" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1478FF" />
          <stop offset="0.55" stopColor="#0CC0CF" />
          <stop offset="1" stopColor="#0FB981" />
        </linearGradient>
      </defs>
      <path d="M16 6.5v19" stroke="url(#em-mark)" strokeWidth="6" strokeLinecap="round" />
      <path d="M6.5 16H19" stroke="url(#em-mark)" strokeWidth="6" strokeLinecap="round" />
      <circle cx="26" cy="16" r="3.4" fill="#0FB981" />
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
          <p className="landing-hero-kicker">
            <span aria-hidden="true">✦</span> Healthcare procurement, end to end
          </p>
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
          <div className="console-glow console-glow-one" aria-hidden="true" />
          <div className="console-glow console-glow-two" aria-hidden="true" />
          <div className="console-device">
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
                      <span className="console-icon console-icon-blue">✦</span>
                      <span>Requirement captured</span>
                      <b>Locked ✓</b>
                    </div>
                    <h3>Surgical gloves (sterile)</h3>
                    <div className="console-specs">
                      <span><b>12,000</b> units / quarter</span>
                      <span><b>ISO 13485 + FDA 510(k)</b></span>
                      <span><b>14 days</b> delivery window</span>
                    </div>
                    <div className="console-progress"><span /></div>
                    <small>Structured by AI · 2 min ago</small>
                  </article>

                  <article className="console-card console-match">
                    <div className="console-card-header">
                      <span className="console-icon console-icon-green">◎</span>
                      <span>Supplier match</span>
                      <b className="console-score">Tier-1</b>
                    </div>
                    <div className="console-match-number">97<span>/100</span></div>
                    <p>GulfMed Supplies · best of 3 shortlisted</p>
                    <div className="console-bars" aria-hidden="true">
                      <span style={{ width: "97%" }} /><span style={{ width: "88%" }} /><span style={{ width: "91%" }} />
                    </div>
                    <div className="console-match-labels"><span>Compliance</span><span>Capacity</span><span>Reliability</span></div>
                  </article>

                  <article className="console-card console-approval">
                    <div className="console-card-header">
                      <span className="console-icon console-icon-aqua">✓</span>
                      <span>Decision ready</span>
                      <b>$0.38/unit</b>
                    </div>
                    <h3>Release to warehouse</h3>
                    <div className="console-approval-row"><span className="console-avatar">CFO</span><span>Finance approval</span><strong>Pending</strong></div>
                    <div className="console-approval-row"><span className="console-avatar console-avatar-light">16</span><span>Audit events recorded</span><strong className="is-done">Complete</strong></div>
                    <button type="button" className="console-review-button">Review decision <span aria-hidden="true">↗</span></button>
                  </article>
                </div>
                <div className="console-footer">
                  <span><i /> AI-assisted, human-approved</span>
                  <span>Last synced just now</span>
                </div>
              </div>
            </div>
            <div className="console-stand" aria-hidden="true">
              <div className="console-stand-neck" />
              <div className="console-stand-base" />
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
          <p className="landing-section-eyebrow">How it works</p>
          <h2>Three steps. Zero guesswork.</h2>
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
                <span aria-hidden="true">🛡️</span>
                <h3>{tile.badge}</h3>
                <p>{tile.detail}</p>
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
          <div className="landing-founder-portrait" aria-hidden="true">
            <span>NA</span>
          </div>
          <div className="landing-founder-copy">
            <p className="landing-section-eyebrow">About the founder</p>
            <h2>Built by someone who lived the problem.</h2>
            <p className="landing-founder-bio">
              Nikita Akolikar ran cross-border sourcing operations for 13 years — five of them
              inside healthcare procurement.
            </p>
            <div className="landing-founder-chips">
              {founderChips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
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

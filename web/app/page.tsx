const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#teams", label: "Who it's for" },
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

const workflowSteps = [
  {
    number: "01",
    id: "capture",
    label: "Requirement capture",
    title: "Describe it once. EaseMed structures it.",
    description:
      "Type a sentence, paste a spec, or upload a document. AI extracts quantities, standards, and timelines into a complete requirement — before it disappears into an email thread.",
    bullets: ["Natural language or documents", "Clinical specs parsed automatically", "Compliance fields attached up front"],
  },
  {
    number: "02",
    id: "matching",
    label: "Intelligent matching",
    title: "Meet the right suppliers — with receipts.",
    description:
      "Every verified partner is scored live on compliance, capacity, price history, and delivery reliability, so your shortlist arrives with evidence instead of promises.",
    bullets: ["340+ verified supplier network", "Live scoring across four dimensions", "Shortlists in minutes, not days"],
  },
  {
    number: "03",
    id: "decision",
    label: "Decision & audit trail",
    title: "Approve once. Defend it forever.",
    description:
      "Compare bids side by side, release with one click, and give finance and auditors an immutable record of who decided what, when, and why.",
    bullets: ["Side-by-side bid comparison", "One-click approvals and handoffs", "Immutable audit history"],
  },
];

const audienceCards = [
  {
    className: "health-system",
    eyebrow: "For health systems",
    title: "Stop hunting. Start deciding.",
    pains: [
      "Hours lost searching disconnected channels for suppliers",
      "Purchase cycles measured in weeks of follow-ups",
      "Compliance checks living in spreadsheets and inboxes",
    ],
    outcome:
      "One structured intake feeds matched supply, transparent pricing, and an approval history you can hand to any auditor.",
    cta: "Apply as a health system",
  },
  {
    className: "supplier",
    eyebrow: "For supplier partners",
    title: "See real demand early.",
    pains: [
      "Demand signals buried inside fragmented networks",
      "Quotations eating the hours you sell with",
      "No view of where supply is needed next",
    ],
    outcome:
      "Structured requests, forecasted demand, and performance insight that turn one good bid into repeat business.",
    cta: "Apply as a supplier partner",
  },
];

const features = [
  {
    glyph: "✦",
    tone: "blue",
    title: "AI-driven matching",
    description: "Verified suppliers ranked by compliance, capacity, price history, and delivery reliability.",
  },
  {
    glyph: "◈",
    tone: "green",
    title: "Cost optimization",
    description: "Benchmark pricing and variance alerts keep every unit cost defensible before you commit.",
  },
  {
    glyph: "⬢",
    tone: "aqua",
    title: "Intelligent compliance",
    description: "Standards like ISO 13485 and FDA 510(k) are checked while the requirement is still on screen.",
  },
  {
    glyph: "◔",
    tone: "blue",
    title: "Supply-demand forecasting",
    description: "See demand forming across the network before it becomes an urgent purchase order.",
  },
  {
    glyph: "↗",
    tone: "aqua",
    title: "Performance insights",
    description: "Delivery and quality scores for every partner, updated with every completed order.",
  },
  {
    glyph: "⊞",
    tone: "green",
    title: "Smart allocation",
    description: "Route approved orders to the right warehouse and carrier with connected logistics views.",
  },
];

const securityTiles = [
  {
    badge: "Audit-ready by design",
    detail: "Every approval, exception, and handoff is timestamped in an immutable log.",
  },
  {
    badge: "Role-based access control",
    detail: "Business owners, sales, warehouse, and logistics each see exactly their lane.",
  },
  {
    badge: "Standards-aware requirements",
    detail: "ISO 13485 · FDA 510(k) fields are attached to requirements from day one.",
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
      "Requests used to live in five WhatsApp groups. Now every requirement arrives structured, and our committee sees the same evidence I do.",
    name: "Dr. Amara Osei",
    role: "Head of Procurement",
    company: "Regional Hospital Group",
    tag: "Health system",
  },
  {
    quote:
      "We see verified demand before it becomes a tender. Our quotation time went from days to hours.",
    name: "Rahul Mehta",
    role: "Director",
    company: "MedSupply Partners",
    tag: "Distribution",
  },
  {
    quote:
      "The compliance fields alone saved our week. Everything a hospital auditor asks for is already attached.",
    name: "Elena Petrova",
    role: "COO",
    company: "Clinova Health",
    tag: "Supplier",
  },
  {
    quote:
      "Approvals that took a fortnight now take an afternoon — and we can show exactly why each choice was made.",
    name: "James Whitfield",
    role: "Operations Lead",
    company: "Northstar Care",
    tag: "Care network",
  },
  {
    quote:
      "Warehouse, sales, and logistics finally read from one screen. Handoffs just stopped breaking.",
    name: "Fatima Al-Rashid",
    role: "Supply Chain Manager",
    company: "Meditek Gulf",
    tag: "Logistics",
  },
  {
    quote:
      "Forecasting shows us where supply is needed next quarter, so we plan production against reality instead of rumor.",
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
      "EaseMed is the operating layer for healthcare procurement. It captures requirements with AI, matches them against a verified supplier network, and moves every approval through one auditable trail that connects buyers, suppliers, warehouses, and logistics teams.",
  },
  {
    question: "Who is EaseMed for?",
    answer:
      "Both sides of the purchase. Health systems, hospitals, and care networks get structured intake and compliant sourcing; manufacturers and distributors get verified demand, forecasting, and performance insight. Each side works in its own role-specific portal.",
  },
  {
    question: "How does intelligent matching work?",
    answer:
      "Every verified partner is scored live across compliance, capacity, price history, and delivery reliability. Instead of a directory, you get a ranked shortlist with the evidence behind each score — lead times, benchmarks, and certification status included.",
  },
  {
    question: "Does EaseMed replace our existing systems?",
    answer:
      "No. EaseMed sits on top of what you already run. Requirements can arrive from natural language, documents, or imports, and inventory and order data can flow in via CSV or connectors. The demo workspace runs entirely on importable data today.",
  },
  {
    question: "How is compliance handled?",
    answer:
      "Requirements carry standards such as ISO 13485 and FDA 510(k) from the moment they are captured, approvals are logged immutably with named decision-makers, and audit packs can be exported whenever finance or a regulator asks.",
  },
  {
    question: "How do I get early access?",
    answer:
      "Apply as a health system or as a supplier partner and our team will onboard your cohort in waves. In the meantime, the live demo workspace is open — no signup required.",
  },
];

export default function LandingPage() {
  return (
    <main className="landing-page">
      <div className="landing-announce">
        <span className="landing-announce-pill">New</span>
        <p>Early access is now open for health systems &amp; supplier partners</p>
        <a href="#faq">Join the wave →</a>
      </div>

      <header className="landing-nav">
        <a className="landing-brand" href="#top" aria-label="EaseMed.ai home">
          <span className="landing-brand-mark">E</span>
          <span>
            EaseMed<span className="landing-brand-muted">.ai</span>
          </span>
        </a>

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
            <span aria-hidden="true">✦</span> The operating layer for healthcare procurement
          </p>
          <h1>
            The fastest route from clinical need to <em>approved order.</em>
          </h1>
          <p className="landing-hero-description">
            EaseMed captures requirements with AI, matches them against 340+ verified suppliers, and moves
            every approval through one auditable trail — so nothing gets lost between departments again.
          </p>
          <div className="landing-hero-actions">
            <a className="landing-button landing-button-primary" href="#cta">
              Get early access
            </a>
            <a className="landing-button landing-button-ghost" href="/dashboard">
              Explore the live demo
            </a>
          </div>
          <div className="landing-hero-proof">
            <span className="landing-stars" aria-label="Rated five out of five by design-partner teams">
              ★★★★★
            </span>
            <span>Loved by early-access procurement teams</span>
            <i aria-hidden="true" />
            <span>Built on 13+ years of healthcare sourcing</span>
          </div>
        </div>

        <div className="landing-console" aria-label="EaseMed procurement intelligence preview">
          <div className="console-glow console-glow-one" aria-hidden="true" />
          <div className="console-glow console-glow-two" aria-hidden="true" />
          <div className="console-shell">
            <div className="console-topbar">
              <div className="console-window-dots" aria-hidden="true"><i /><i /><i /></div>
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
                <small>Structured from a plain-language request · 2 min ago</small>
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
      </section>

      <section className="landing-logos" aria-label="Illustrative network">
        <p className="landing-logos-label">Working alongside teams across the procurement loop</p>
        <div className="landing-logos-row">
          {partnerNames.map((partner, index) => (
            <span key={partner} className={`landing-logo landing-logo-${index + 1}`}>{partner}</span>
          ))}
        </div>
        <p className="landing-logos-note">Illustrative network preview — the live partner directory ships with early access.</p>
      </section>

      <section className="landing-stats" aria-label="Platform figures from the product demo">
        <div className="landing-stats-inner">
          {heroStats.map((stat) => (
            <article key={stat.label} className="landing-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
        <p className="landing-stats-note">Figures pulled straight from the live EaseMed product environment.</p>
      </section>

      <section className="landing-section landing-workflow" id="how-it-works">
        <div className="landing-section-heading landing-centered">
          <p className="landing-section-eyebrow">How EaseMed works</p>
          <h2>Three steps. Zero guesswork.</h2>
          <p className="landing-section-intro">
            Every purchase follows the same clear path — structured once, matched with evidence, released
            with an audit trail that defends itself.
          </p>
        </div>

        <div className="landing-steps">
          {workflowSteps.map((step, index) => (
            <article className={`landing-step landing-step-${step.id}`} key={step.number}>
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
                {index === 0 && (
                  <div className="visual-capture">
                    <div className="visual-request">
                      “Need 12k sterile surgical gloves, FDA-cleared, delivered within 14 days.”
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
                {index === 1 && (
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
                    <div className="visual-footnote">Scored on compliance, capacity, price history &amp; reliability</div>
                  </div>
                )}
                {index === 2 && (
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
        <div className="landing-section-heading landing-centered">
          <p className="landing-section-eyebrow">Democratizing procurement</p>
          <h2>Built for both sides of the purchase.</h2>
          <p className="landing-section-intro">
            The same operating layer removes friction for the people buying and creates opportunity for the
            people supplying.
          </p>
        </div>
        <div className="landing-role-grid">
          {audienceCards.map((card) => (
            <article className={`landing-role-card ${card.className}`} key={card.eyebrow}>
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

      <section className="landing-section landing-platform" id="platform">
        <div className="landing-section-heading landing-centered">
          <p className="landing-section-eyebrow">The platform</p>
          <h2>Everything the loop needs. Nothing it doesn&apos;t.</h2>
          <p className="landing-section-intro">
            Six capabilities, one connected view — so no team ever rebuilds the same spreadsheet twice.
          </p>
        </div>
        <div className="landing-feature-grid">
          {features.map((feature) => (
            <article className="landing-feature-card" key={feature.title}>
              <span className={`landing-feature-glyph tone-${feature.tone}`} aria-hidden="true">{feature.glyph}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section landing-security" id="security">
        <div className="landing-security-grid">
          <div className="landing-security-copy">
            <p className="landing-section-eyebrow">Trust &amp; compliance</p>
            <h2>Every answer is one click away.</h2>
            <p className="landing-section-intro">
              Healthcare procurement answers to regulators, finance, and patients. EaseMed is engineered so
              the evidence behind every decision is already organized.
            </p>
            <ul className="landing-control-list">
              {securityControls.map((control) => (
                <li key={control}><span aria-hidden="true">✓</span>{control}</li>
              ))}
            </ul>
          </div>
          <div className="landing-security-tiles">
            {securityTiles.map((tile) => (
              <article key={tile.badge}>
                <span aria-hidden="true">🛡️</span>
                <h3>{tile.badge}</h3>
                <p>{tile.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-section landing-testimonials" id="customers">
        <div className="landing-section-heading landing-centered">
          <p className="landing-section-eyebrow">Customer voices</p>
          <h2>Less chasing. More decisions made on time.</h2>
          <p className="landing-section-intro">
            What better visibility feels like for buyers, suppliers, and the teams in between.
          </p>
        </div>
        <div className="landing-testimonial-columns">
          {testimonials.map((testimonial) => (
            <figure className="landing-testimonial-card" key={testimonial.name}>
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
        <div className="landing-founder-card">
          <div className="landing-founder-portrait" aria-hidden="true">
            <span>NA</span>
          </div>
          <div className="landing-founder-copy">
            <p className="landing-section-eyebrow">About the founder</p>
            <h2>Built by someone who has lived the problem.</h2>
            <p>
              Nikita Akolikar spent 13 years running cross-border sourcing operations across four
              continents — including 5+ years inside healthcare procurement, serving 30+ clients and
              architecting multi-million-dollar sourcing programs.
            </p>
            <blockquote>
              “I see opportunities others miss. EaseMed turns that instinct into infrastructure that every
              buyer can use.”
            </blockquote>
            <div className="landing-founder-signoff"><strong>Nikita Akolikar</strong><span>Founder &amp; CEO, EaseMed.ai</span></div>
          </div>
        </div>
      </section>

      <section className="landing-careers">
        <div>
          <p className="landing-section-eyebrow">Careers</p>
          <h2>Build the future of healthcare procurement.</h2>
          <p>We&apos;re hiring across engineering, operations, and partnerships.</p>
        </div>
        <a className="landing-button landing-button-dark" href="mailto:careers@easemed.ai">Join us →</a>
      </section>

      <section className="landing-section landing-faq" id="faq">
        <div className="landing-section-heading landing-centered">
          <p className="landing-section-eyebrow">FAQ</p>
          <h2>Questions, answered.</h2>
        </div>
        <div className="landing-faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
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
        <div className="landing-cta-panel">
          <div>
            <h2>Make your next purchase the clearest one yet.</h2>
            <p>Join the early-access wave, or explore the demo workspace first — no signup required.</p>
          </div>
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
            <a className="landing-brand" href="#top"><span className="landing-brand-mark">E</span><span>EaseMed<span className="landing-brand-muted">.ai</span></span></a>
            <p>The unified intelligence platform connecting facilities, suppliers, and procurement teams — less complexity, faster decisions.</p>
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
    </main>
  );
}

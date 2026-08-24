const platformSteps = [
  {
    number: "01",
    label: "Requirement capture",
    title: "Turn every request into a clear starting point.",
    description:
      "Structure natural-language requirements, clinical specifications, and uploaded documents before they disappear into email threads.",
    signal: "Natural language · Documents · Clinical specs",
  },
  {
    number: "02",
    label: "Intelligent matching",
    title: "See the right supply, with the context to choose it.",
    description:
      "Compare verified partners across compliance, capacity, price history, and delivery reliability in one decision view.",
    signal: "Compliance · Capacity · Delivery",
  },
  {
    number: "03",
    label: "Decision & audit trail",
    title: "Move from shortlist to approved order with confidence.",
    description:
      "Give every approval, exception, and handoff a visible history that teams can act on and leaders can defend.",
    signal: "Approvals · Handoffs · Audit history",
  },
];

const audienceCards = [
  {
    className: "health-system",
    eyebrow: "For health systems",
    title: "Make every purchase defensible.",
    description:
      "Replace manual supplier hunting with a faster, clearer route from clinical need to compliant procurement.",
    items: ["Cost-aware sourcing", "Intelligent compliance", "One approval history"],
  },
  {
    className: "supplier",
    eyebrow: "For supplier partners",
    title: "Turn real demand into growth.",
    description:
      "See structured procurement demand, respond with the right offer, and build a clearer view of where supply is needed next.",
    items: ["Verified demand signals", "Supply-demand forecasting", "Performance insights"],
  },
];

const demoPartners = [
  "Meditek Gulf",
  "Northstar Care",
  "Aster Labs",
  "Clinova Health",
  "Kantipur Health",
];

const testimonials = [
  {
    quote:
      "We can see what is missing before an order becomes urgent. The handoff is finally a shared view, not a chain of follow-ups.",
    role: "Sample buyer perspective",
    company: "Health system procurement",
  },
  {
    quote:
      "A structured request gives our team the context to respond quickly and accurately, without guessing what the facility needs.",
    role: "Sample supplier perspective",
    company: "Medical supply partner",
  },
  {
    quote:
      "Every decision has a next action. That makes routing, approval, and fulfilment much easier to keep moving.",
    role: "Sample logistics perspective",
    company: "Operations and fulfilment",
  },
];

export default function LandingPage() {
  return (
    <main className="landing-page">
      <header className="landing-nav">
        <a className="landing-brand" href="#top" aria-label="EaseMed.ai home">
          <span className="landing-brand-mark">E</span>
          <span>
            EaseMed<span className="landing-brand-muted">.ai</span>
          </span>
        </a>

        <nav className="landing-nav-links" aria-label="Main navigation">
          <a href="#platform">Platform</a>
          <a href="#how-it-works">How it works</a>
          <a href="#audiences">For teams</a>
          <a href="#founder">About</a>
        </nav>

        <div className="landing-nav-actions">
          <a className="landing-nav-login" href="/dashboard">
            Sign in
          </a>
          <a className="landing-button landing-button-small landing-button-primary" href="/dashboard" style={{ color: "#ffffff" }}>
            Open workspace <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <section className="landing-hero" id="top">
        <div className="landing-hero-copy">
          <p className="landing-eyebrow">
            <span className="landing-eyebrow-dot" aria-hidden="true" />
            The operating layer for healthcare procurement
          </p>
          <h1>
            Procurement clarity for every healthcare decision.
          </h1>
          <p className="landing-hero-description">
            Capture requirements, match verified supply, and move approvals with a clear,
            auditable path from need to release.
          </p>
          <div className="landing-hero-actions">
            <a className="landing-button landing-button-primary" href="#platform" style={{ color: "#ffffff" }}>
              Explore the platform <span aria-hidden="true">↗</span>
            </a>
            <a className="landing-button landing-button-ghost" href="/dashboard">
              View demo workspace
            </a>
          </div>
          <div className="landing-proof" aria-label="EaseMed workflow">
            <span><strong>01</strong> Capture demand</span>
            <i aria-hidden="true" />
            <span><strong>02</strong> Find supply</span>
            <i aria-hidden="true" />
            <span><strong>03</strong> Release with confidence</span>
          </div>
        </div>

        <div className="landing-console" aria-label="EaseMed procurement intelligence preview">
          <div className="console-glow console-glow-one" aria-hidden="true" />
          <div className="console-glow console-glow-two" aria-hidden="true" />
          <div className="console-shell">
            <div className="console-topbar">
              <div className="console-window-dots" aria-hidden="true"><i /><i /><i /></div>
              <span>EaseMed intelligence</span>
              <span className="console-live"><i /> Live signal</span>
            </div>
            <div className="console-heading">
              <div>
                <p className="console-kicker">Procurement command center</p>
                <h2>One clear view of what moves next.</h2>
              </div>
              <span className="console-date">This quarter</span>
            </div>
            <div className="console-grid">
              <article className="console-card console-requirement">
                <div className="console-card-header">
                  <span className="console-icon console-icon-purple">✦</span>
                  <span>Requirement captured</span>
                  <b>Ready</b>
                </div>
                <h3>Protective surgical gloves</h3>
                <div className="console-specs">
                  <span><b>12,000</b> units / quarter</span>
                  <span><b>14 days</b> delivery window</span>
                  <span><b>ISO 13485</b> compliance</span>
                </div>
                <div className="console-progress"><span /></div>
                <small>Structured from request · 2 min ago</small>
              </article>

              <article className="console-card console-match">
                <div className="console-card-header">
                  <span className="console-icon console-icon-blue">◎</span>
                  <span>Supplier match</span>
                  <b className="console-score">97 / 100</b>
                </div>
                <div className="console-match-number">340<span>+</span></div>
                <p>verified partners in network</p>
                <div className="console-bars" aria-hidden="true">
                  <span style={{ width: "92%" }} /><span style={{ width: "74%" }} /><span style={{ width: "85%" }} />
                </div>
                <div className="console-match-labels"><span>Compliance</span><span>Capacity</span><span>Reliability</span></div>
              </article>

              <article className="console-card console-approval">
                <div className="console-card-header">
                  <span className="console-icon console-icon-orange">✓</span>
                  <span>Decision ready</span>
                  <b>2 steps</b>
                </div>
                <h3>Release to warehouse</h3>
                <div className="console-approval-row"><span className="console-avatar">AK</span><span>Operations approval</span><strong>Pending</strong></div>
                <div className="console-approval-row"><span className="console-avatar console-avatar-light">16</span><span>Audit events recorded</span><strong className="is-done">Complete</strong></div>
                <button type="button" className="console-review-button">Review decision <span aria-hidden="true">↗</span></button>
              </article>
            </div>
            <div className="console-footer"><span><i /> AI-assisted, human-approved</span><span>Last synced just now</span></div>
          </div>
        </div>
      </section>

      <section className="landing-trust" aria-label="Teams using the platform">
        <p className="landing-trust-label">Built for the full procurement loop</p>
        <div className="landing-trust-items">
          <span>Health systems</span><i aria-hidden="true" />
          <span>Supplier partners</span><i aria-hidden="true" />
          <span>Sales</span><i aria-hidden="true" />
          <span>Warehouse</span><i aria-hidden="true" />
          <span>Logistics</span>
        </div>
      </section>

      <section className="landing-section landing-platform" id="platform">
        <div className="landing-section-heading">
          <div>
            <p className="landing-section-eyebrow">One operating layer</p>
            <h2>From an unclear request to a confident release.</h2>
          </div>
          <p>
            EaseMed gives every team the signal and action they need, without burying the decision in more tools.
          </p>
        </div>
        <div className="landing-steps" id="how-it-works">
          {platformSteps.map((step) => (
            <article className="landing-step-card" key={step.number}>
              <div className="landing-step-top"><span className="landing-step-number">{step.number}</span><span className="landing-step-line" /></div>
              <p className="landing-step-label">{step.label}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <div className="landing-step-signal"><span>→</span>{step.signal}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section landing-audiences" id="audiences">
        <div className="landing-section-heading landing-section-heading-compact">
          <div>
            <p className="landing-section-eyebrow">Designed around the decision</p>
            <h2>Useful to every team. Focused for each role.</h2>
          </div>
          <p>Less noise for the people doing the work. More visibility for the people accountable for the outcome.</p>
        </div>
        <div className="landing-role-grid">
          {audienceCards.map((card) => (
            <article className={`landing-role-card ${card.className}`} key={card.eyebrow}>
              <div className="landing-role-art" aria-hidden="true"><span /><span /><span /></div>
              <p className="landing-role-eyebrow">{card.eyebrow}</p>
              <h3>{card.title}</h3>
              <p className="landing-role-description">{card.description}</p>
              <ul>{card.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section landing-network" id="network">
        <div className="landing-section-heading landing-section-heading-compact">
          <div>
            <p className="landing-section-eyebrow">Works with the workflow</p>
            <h2>One place for every team that moves the order forward.</h2>
          </div>
          <p>Use the view that fits your role while the full order history stays connected underneath.</p>
        </div>
        <div className="landing-partner-grid" aria-label="Illustrative demo network">
          {demoPartners.map((partner, index) => (
            <div className="landing-partner-card" key={partner}>
              <span className={`landing-partner-mark partner-mark-${index + 1}`} aria-hidden="true">{partner.slice(0, 1)}</span>
              <strong>{partner}</strong>
              <small>Illustrative demo partner</small>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section landing-testimonials" id="stories">
        <div className="landing-section-heading landing-section-heading-compact">
          <div>
            <p className="landing-section-eyebrow">What better visibility feels like</p>
            <h2>Less chasing. More decisions made on time.</h2>
          </div>
          <p>Placeholder perspectives for the MVP preview. Replace these with approved customer stories when they are ready.</p>
        </div>
        <div className="landing-testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="landing-testimonial-card" key={testimonial.role}>
              <span className="landing-quote-mark" aria-hidden="true">“</span>
              <p className="landing-testimonial-quote">{testimonial.quote}</p>
              <div className="landing-testimonial-byline">
                <span className="landing-testimonial-avatar" aria-hidden="true">✦</span>
                <span><strong>{testimonial.role}</strong><small>{testimonial.company}</small></span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section landing-founder" id="founder">
        <div className="landing-founder-card">
          <div className="landing-founder-portrait" aria-label="Founder profile placeholder">
            <span>MP</span>
            <i aria-hidden="true" />
            <i aria-hidden="true" />
          </div>
          <div className="landing-founder-copy">
            <p className="landing-section-eyebrow">About the founder</p>
            <h2>EaseMed started with a simple operational question.</h2>
            <p>
              How can healthcare teams spend less time chasing documents, suppliers, and status updates—and more time making the right purchase decision?
            </p>
            <p>
              EaseMed is being built around that answer: a practical operating layer where demand, supply, inventory, logistics, and approvals stay connected from the first request to the final release.
            </p>
            <div className="landing-founder-signoff"><strong>Manu P.</strong><span>Founder, EaseMed.ai</span></div>
          </div>
        </div>
      </section>

      <section className="landing-cta">
        <div>
          <p className="landing-section-eyebrow">Make the next decision visible</p>
          <h2>A clearer operating layer for healthcare procurement.</h2>
          <p>See the MVP workspace and follow the flow from inventory to approval.</p>
        </div>
        <a className="landing-button landing-button-light" href="/dashboard">Open the demo workspace <span aria-hidden="true">↗</span></a>
      </section>

      <footer className="landing-footer">
        <a className="landing-brand" href="#top"><span className="landing-brand-mark">E</span><span>EaseMed<span className="landing-brand-muted">.ai</span></span></a>
        <p>Healthcare procurement intelligence.</p>
        <span>© 2026 EaseMed.ai</span>
      </footer>
    </main>
  );
}

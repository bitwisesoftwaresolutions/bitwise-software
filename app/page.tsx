const clients = [
  {
    index: "01",
    name: "DecodeDev",
    type: "Mobile app",
    description: "Mobile experiences built to feel fast, fluid and familiar on every device.",
    accent: "orange",
  },
  {
    index: "02",
    name: "Moneybadger",
    type: "E-commerce plugins",
    description: "Payment tooling engineered for dependable, frictionless digital commerce.",
    accent: "blue",
  },
  {
    index: "03",
    name: "PagoraEU",
    type: "E-commerce plugins",
    description: "Purpose-built integrations that connect platforms and keep business moving.",
    accent: "lime",
  },
  {
    index: "04",
    name: "JujLiving",
    type: "Mobile app",
    description: "A thoughtful mobile product shaped around simple, everyday interactions.",
    accent: "cream",
  },
  {
    index: "05",
    name: "AUX Studios",
    type: "Mobile app",
    description: "High-quality mobile delivery for ambitious digital product teams.",
    accent: "coral",
  },
  {
    index: "06",
    name: "StoneThree",
    type: "Web app",
    description: "Robust backend systems designed for performance, clarity and scale.",
    accent: "violet",
  },
];

const services = [
  ["01", "Mobile products", "Mobile apps that are polished, maintainable and ready to grow."],
  ["02", "Web platforms", "Modern web applications and APIs built for real operational demands."],
  ["03", "Commerce", "Custom e-commerce plugins and integrations that make transactions simpler."],
  ["04", "Technical delivery", "Senior engineering partnership from the first decision to production."],
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d={diagonal ? "M5 19 19 5M8 5h11v11" : "M5 12h14M14 7l5 5-5 5"} />
    </svg>
  );
}

function Mark() {
  return (
    <svg className="brand-mark" aria-hidden="true" viewBox="0 0 76 100">
      <path className="mark-letter" d="M0 0h15v15H0V0Zm0 50h15v50H0V50ZM20 0h22c18 0 30 11 30 25 0 10-5 18-14 22 11 4 18 13 18 25 0 17-13 28-33 28H20V50h21c10 0 17-6 17-14s-7-13-17-13H20V0Zm0 62v25h22c11 0 18-5 18-13 0-7-7-12-18-12H20Z" />
      <circle className="mark-letter" cx="7.5" cy="32.5" r="7.5" />
      <circle className="mark-dot" cx="41" cy="74" r="9" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Bitwise home">
          <Mark />
          <strong>BITWISE</strong>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </div>
        <a className="nav-cta" href="#contact">
          Start a project <Arrow diagonal />
        </a>
      </nav>

      <section className="hero shell" id="top">
        <h1>We are<br /><em>Bitwise.</em></h1>
        <div className="hero-bottom">
          <div className="orbit" aria-hidden="true">
            <span className="orbit-track" />
            <span className="orbit-dot" />
            <span className="orbit-core"><Mark /></span>
          </div>
          <div className="hero-copy">
            <p>We deliver enterprise software projects <strong>on time, on budget and on spec.</strong></p>
            <p className="muted">Our active client portfolio spans fintech, health, e-commerce and more. Our projects are used by tens of thousands daily, locally and beyond.</p>
            <a className="text-link" href="#work">Explore our work <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Our capabilities">
        <div className="marquee-track">
          <span>Mobile <b>•</b> Web <b>•</b> Fintech <b>•</b> E-commerce <b>•</b> APIs <b>•</b></span>
          <span aria-hidden="true">Mobile <b>•</b> Web <b>•</b> Fintech <b>•</b> E-commerce <b>•</b> APIs <b>•</b></span>
        </div>
      </section>

      <section className="work light-section" id="work">
        <div className="shell">
          <header className="section-heading">
            <div><span className="section-number">01</span><span className="kicker">Selected partnerships</span></div>
            <h2>Work that works<br /><em>in the real world.</em></h2>
            <p>We partner with ambitious teams to turn complex problems into software people rely on.</p>
          </header>
          <div className="client-grid">
            {clients.map((client) => (
              <article className={`client-card ${client.accent}`} key={client.name}>
                <div className="card-top">
                  <span>{client.index}</span>
                  <span className="card-arrow"><Arrow diagonal /></span>
                </div>
                <div className="client-monogram" aria-hidden="true">{client.name.slice(0, 2)}</div>
                <div className="card-copy">
                  <p>{client.type}</p>
                  <h3>{client.name}</h3>
                  <p>{client.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services shell" id="services">
        <header className="services-intro">
          <div><span className="section-number">02</span><span className="kicker">What we do</span></div>
          <h2>From first commit<br />to <em>final release.</em></h2>
        </header>
        <div className="service-list">
          {services.map(([number, title, copy]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="service-icon"><Arrow diagonal /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="shell about-grid">
          <div className="about-art" aria-hidden="true">
            <div className="code-card"><span>BUILD / SHIP</span><b>1010110<br />0110011<br />1101001</b></div>
            <div className="orange-disc"><Mark /></div>
          </div>
          <div className="about-copy">
            <div><span className="section-number">03</span><span className="kicker">How we work</span></div>
            <h2>Small team.<br /><em>Serious output.</em></h2>
            <p>We bring senior thinking, honest communication and disciplined execution to every engagement.</p>
            <div className="principles">
              <span>Clear thinking</span><span>Precise execution</span><span>Long-term partnership</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <div className="eyebrow"><span /> Have a project in mind?</div>
        <h2>Let’s make<br /><em>it happen.</em></h2>
        <div className="contact-row">
          <a href="mailto:hello@bitwisesoftware.co.za">Get in touch <Arrow diagonal /></a>
        </div>
      </section>

      <footer className="shell">
        <a className="brand" href="#top"><Mark /><strong>BITWISE</strong></a>
        <p>Software solutions, precisely delivered.</p>
        <p>© {new Date().getFullYear()} Bitwise Software Solutions</p>
      </footer>
    </main>
  );
}

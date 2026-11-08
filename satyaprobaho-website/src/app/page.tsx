import Link from "next/link";

const services = [
  { icon: "◎", title: "Domain registration", desc: "Learn how domain names work, what to check before registering, and how to protect your online identity.", href: "/domain-registration", label: "Explore domains" },
  { icon: "▤", title: "Web hosting", desc: "Understand hosting types, essential features, renewal costs and the questions to ask before choosing a plan.", href: "/web-hosting", label: "Explore hosting" },
  { icon: "⌘", title: "VPS hosting", desc: "Explore virtual servers, computing resources, server management and common deployment options.", href: "/vps-hosting", label: "Explore VPS" },
  { icon: "◇", title: "Reseller hosting", desc: "Review the fundamentals of offering hosting services to your own customers through a reseller model.", href: "/reseller-hosting", label: "Explore reseller hosting" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <span className="eyebrow">Digital services · Bangladesh</span>
          <h1>Build your online presence with <span>clarity and confidence.</span></h1>
          <p>NEXORA INTERNATIONAL TECHNOLOGY is preparing global-ready digital services, including domain registration, web hosting, VPS and reseller hosting. Explore our information resources and follow launch updates while our fulfilment systems are being prepared.</p>
          <div className="hero-actions">
            <Link className="btn" href="/domain-registration">Explore services <span>→</span></Link>
            <Link className="btn secondary" href="/about">About our company</Link>
          </div>
          <div className="hero-footnote"><strong>For your next step online.</strong> Clear, useful information for individuals, businesses and growing brands.</div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <span className="section-kicker">Explore our topics</span>
          <h2>Digital essentials, made easier.</h2>
          <p>Start with the information you need. Understand the terminology, compare important features and prepare before choosing a provider.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.href}>
              <div className="service-icon" aria-hidden="true">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <Link className="text-link" href={service.href}>{service.label} <span>→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="info-band">
        <div className="container">
          <div>
            <h2>Planning a website or online business?</h2>
            <p>Send us a pre-launch enquiry. We will use it to understand what visitors are looking for as the service platform is prepared.</p>
          </div>
          <Link className="btn" href="/contact">Contact us <span>→</span></Link>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <span className="section-kicker">Our approach</span>
          <h2>Know the details before you commit.</h2>
        </div>
        <div className="feature-grid">
          <article className="feature"><h3>Understand your options</h3><p>Learn the differences between domain registration, shared hosting, VPS and reseller hosting.</p></article>
          <article className="feature"><h3>Compare the full cost</h3><p>Check introductory prices, renewal rates, resource limits, support and important service terms.</p></article>
          <article className="feature"><h3>Get clear status updates</h3><p>We distinguish educational information from services that are actually ready to order.</p></article>
        </div>
      </section>

      <section className="section container" style={{ paddingTop: 0 }}>
        <div className="content-panel">
          <span className="section-kicker">Important launch notice</span>
          <h2>Our service platform is still in preparation.</h2>
          <p>This website currently provides information only. Domain search and registration, hosting orders, VPS provisioning, reseller packages and payment processing are not active. Please do not send money or treat an enquiry as an order.</p>
          <Link className="text-link" href="/contact">View contact and service status information →</Link>
        </div>
      </section>
    </main>
  );
}

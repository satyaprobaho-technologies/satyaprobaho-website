import Link from "next/link";

const services = [
  { icon: "◎", title: "Domain registration", desc: "Understand domain extensions, ownership and renewal before choosing your web address.", href: "/domain-registration", label: "Explore domains" },
  { icon: "▤", title: "Web hosting", desc: "Learn what to compare when choosing a reliable home for your website.", href: "/web-hosting", label: "Explore hosting" },
  { icon: "⌘", title: "VPS hosting", desc: "Discover virtual server resources, control and common deployment use cases.", href: "/vps-hosting", label: "Explore VPS" },
  { icon: "◇", title: "Reseller hosting", desc: "Review the essentials for agencies and entrepreneurs planning hosting services.", href: "/reseller-hosting", label: "Explore reseller" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <span className="eyebrow">Your digital journey starts here</span>
          <h1>Build your online presence with <span>clarity and confidence.</span></h1>
          <p>Explore practical information about domains, web hosting and server solutions—so you can make informed decisions for your business, brand or next big idea.</p>
          <div className="hero-actions"><Link className="btn" href="/domain-registration">Explore services <span>→</span></Link><Link className="btn secondary" href="/about">Discover our company</Link></div>
          <div className="hero-footnote"><strong>Bangladesh focused.</strong> Clear guidance for customers at every stage of their online journey.</div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading"><span className="section-kicker">What we cover</span><h2>Digital essentials, made easier.</h2><p>Start with the service information you need. Compare the basics, understand the terminology and prepare for your next step online.</p></div>
        <div className="service-grid">{services.map((service) => <article className="service-card" key={service.href}><div className="service-icon" aria-hidden="true">{service.icon}</div><h3>{service.title}</h3><p>{service.desc}</p><Link className="text-link" href={service.href}>{service.label} <span>→</span></Link></article>)}</div>
      </section>
      <section className="info-band"><div className="container"><div><h2>Planning your next website?</h2><p>Tell us what you are preparing to build. Our contact page explains the current pre-launch status and how to follow future service updates.</p></div><Link className="btn" href="/contact">View contact information <span>→</span></Link></div></section>
      <section className="section container">
        <div className="section-heading"><span className="section-kicker">Our approach</span><h2>Useful information before you commit.</h2></div>
        <div className="feature-grid">
          <article className="feature"><h3>Understand your options</h3><p>Learn the difference between domains, shared hosting, VPS and reseller services.</p></article>
          <article className="feature"><h3>Compare with confidence</h3><p>Know which costs, renewal terms, resources and support details to check.</p></article>
          <article className="feature"><h3>Know what is available</h3><p>We clearly identify services that are still being prepared and are not open for purchase.</p></article>
        </div>
      </section>
      <section className="section container" style={{paddingTop:0}}>
        <div className="content-panel"><span className="section-kicker">Launch notice</span><h2>Our service platform is in preparation.</h2><p>The website is online as an information site. Domain search, registration, hosting orders, VPS provisioning and payment processing are not active yet. Please do not send payments until an official ordering process is announced.</p><Link className="text-link" href="/contact">Read our contact and service status information →</Link></div>
      </section>
    </main>
  );
}

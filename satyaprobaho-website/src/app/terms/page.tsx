import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using the SATYAPROBAHO TECHNOLOGIES pre-launch information website.",
};

export default function Page() {
  return (
    <main className="wrap section">
      <span className="section-kicker">Please read before using this site</span>
      <h1>Terms of Use</h1>
      <p>ব্যবহারের শর্তাবলি</p>
      <div className="content-panel">
        <h2>Informational website only</h2>
        <p>This website currently provides general information about domain names, web hosting, VPS and reseller hosting. It does not currently offer domain registration, hosting subscriptions, VPS provisioning, reseller accounts, service-level guarantees or paid orders.</p>
        <h2>Enquiry form</h2>
        <p>The contact form is for questions and expressions of interest only. A submitted enquiry is not an order, reservation, contract or guarantee that a service will become available. Do not submit passwords, payment information or other sensitive data.</p>
        <h2>Accuracy and availability</h2>
        <p>Information is provided for general guidance and may change. Service specifications, prices, availability, terms and launch dates will be published only when they have been verified. Do not make a purchase decision based solely on preliminary information on this website.</p>
        <h2>Third-party services</h2>
        <p>References to third-party platforms or providers are informational. Their products and terms are controlled by those providers; users should review the relevant provider's current terms before using a service.</p>
        <h2>Changes</h2>
        <p>These terms may be updated as the website develops. Separate service terms and legally reviewed business details must be published before any paid service is launched.</p>
      </div>
      <p className="muted">Pre-launch terms notice, not a substitute for jurisdiction-specific legal advice or a customer service agreement.</p>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Current payment and refund status for NEXORA INTERNATIONAL TECHNOLOGY.",
};

export default function Page() {
  return (
    <main className="wrap section">
      <span className="section-kicker">Payment status</span>
      <h1>Refund Policy</h1>
      <p>রিফান্ড নীতি</p>
      <div className="content-panel">
        <h2>No payments are currently accepted</h2>
        <p>NEXORA INTERNATIONAL TECHNOLOGY is currently operating this website as a pre-launch information site. Domain registration, web hosting, VPS provisioning, reseller services and payment processing are not available for purchase through this website.</p>
        <h2>Do not send money</h2>
        <p>No payment should be sent to any person or account claiming to accept an order on behalf of this pre-launch website. A contact-form submission does not create a paid order.</p>
        <h2>Before commercial launch</h2>
        <p>If paid services are introduced in the future, a complete refund and cancellation policy—including service-specific exceptions, domain registration rules, eligibility, processing times and verified support contact details—will be published before orders are accepted.</p>
      </div>
      <p className="muted">This page describes the current pre-launch status; it is not a refund promise for transactions made outside this website.</p>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for the SATYAPROBAHO TECHNOLOGIES pre-launch website and enquiry form.",
};

export default function Page() {
  return (
    <main className="wrap section">
      <span className="section-kicker">Website information</span>
      <h1>Privacy Policy</h1>
      <p>গোপনীয়তা নীতি</p>
      <div className="content-panel">
        <h2>Information you submit</h2>
        <p>This website is currently a pre-launch information site. If you submit the contact enquiry form and the form is successfully accepted, the information you provide—your name, email address, selected service and message—may be stored in a Cloudflare D1 database so the enquiry can be reviewed.</p>
        <h2>How information is used</h2>
        <p>Enquiry information is used only to understand and respond to pre-launch questions and expressions of interest. Do not submit passwords, payment-card details, government identification numbers or other sensitive information.</p>
        <h2>Service providers and security</h2>
        <p>The website is hosted on Cloudflare Pages. Enquiry storage, when enabled, uses Cloudflare D1. Access to stored enquiries should be limited to authorised administrators. No payment processing or customer account service is offered through this website.</p>
        <h2>Retention and questions</h2>
        <p>Enquiries should be retained only for as long as reasonably needed to review and follow up on the request, then securely deleted. A dedicated privacy contact channel and formal retention schedule have not yet been published; these must be established before commercial launch.</p>
        <h2>Policy updates</h2>
        <p>This notice describes the current pre-launch website and may change as services are prepared. Any new analytics, cookies, account features or data uses must be disclosed before they are introduced.</p>
      </div>
      <p className="muted">Pre-launch privacy notice. Obtain jurisdiction-appropriate legal review and publish verified business contact details and a formal retention process before accepting customers.</p>
    </main>
  );
}

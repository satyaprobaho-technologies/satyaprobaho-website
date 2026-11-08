import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about NEXORA International Technology's domain, hosting and pre-launch service status.",
};

const items = [
  ["Can I register a domain through NEXORA today?", "Not yet. Domain registration is being prepared. No registrar or reseller API is connected, so this website cannot currently register, reserve or transfer a domain."],
  ["Can I buy web hosting or a VPS now?", "No. The current website is an information and pre-launch enquiry site. Customer hosting infrastructure, VPS provisioning and reseller fulfilment are not active."],
  ["Are prices and packages available?", "Verified packages and renewal prices have not been published. We will publish complete pricing and service limits only after an upstream provider and fulfilment process are confirmed."],
  ["Can I make a payment or place an order?", "No. Payments and orders are disabled. Do not send money to anyone claiming to accept an order on behalf of this pre-launch website."],
  ["How can I contact the team?", "Use the pre-launch enquiry form on the Contact page. Do not submit passwords, payment details, identity documents or other sensitive information."],
  ["When will services launch?", "A launch date has not been confirmed. Updates will be published on this website when the required provider, support and payment arrangements are ready."],
];

export default function Page() {
  return (
    <main className="wrap section">
      <span className="section-kicker">Helpful answers</span>
      <h1>Frequently Asked Questions</h1>
      <p>প্রশ্ন ও উত্তর — NEXORA-এর ডোমেইন ও হোস্টিং সেবা চালুর বর্তমান অবস্থা।</p>
      <div className="content-panel">
        {items.map(([question, answer]) => (
          <section key={question}>
            <h2>{question}</h2>
            <p>{answer}</p>
          </section>
        ))}
      </div>
      <p className="muted">NEXORA is currently a pre-launch information website. No transactions or service orders are enabled.</p>
    </main>
  );
}

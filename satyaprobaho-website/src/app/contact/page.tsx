import type { Metadata } from "next";
import InquiryForm from "./InquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SATYAPROBAHO TECHNOLOGIES and send a pre-launch enquiry about domains, web hosting and server solutions in Bangladesh.",
};

export default function Page() {
  return (
    <main className="wrap section">
      <span className="section-kicker">We would like to hear from you</span>
      <h1>Contact SATYAPROBAHO TECHNOLOGIES</h1>
      <p>আমাদের ডোমেইন ও হোস্টিং সেবা চালুর প্রস্তুতি চলছে। আপনার প্রশ্ন বা আগ্রহের কথা নিচের ফর্মে জানাতে পারেন।</p>
      <p>Our website is currently an information site. Domain registration, web hosting orders, VPS provisioning, reseller services and payment processing are not yet available for purchase.</p>
      <p><strong>Business focus:</strong> Bangladesh</p>
      <InquiryForm />
      <p className="muted">This form is for pre-launch enquiries only. Do not send payments, passwords, payment-card details or other sensitive information. Submitting an enquiry does not create an order, reserve a domain or guarantee service availability.</p>
    </main>
  );
}

import type { Metadata } from "next";
import InquiryForm from "./InquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send a pre-launch service enquiry to SATYAPROBAHO TECHNOLOGIES.",
};

export default function Page() {
  return (
    <main className="wrap section">
      <h1>Contact SATYAPROBAHO TECHNOLOGIES</h1>
      <p>আমাদের ডোমেইন ও হোস্টিং সেবা চালুর প্রস্তুতি চলছে।</p>
      <p>Our website is online, but domain registration, hosting, VPS provisioning and payment services are not yet available for purchase.</p>
      <p><strong>Business location:</strong> Bangladesh</p>
      <InquiryForm />
      <p className="muted">This form is for pre-launch enquiries only. Do not send payments or sensitive personal information. A submitted enquiry does not create an order or guarantee service delivery.</p>
    </main>
  );
}

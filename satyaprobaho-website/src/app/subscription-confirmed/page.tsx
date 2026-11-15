import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscription confirmed",
  description: "NEXORA email subscription confirmation.",
};

export default function SubscriptionConfirmedPage() {
  return (
    <main className="wrap section">
      <span className="section-kicker">Email updates</span>
      <h1>Thank you for confirming</h1>
      <p>Your email subscription confirmation has been processed. You can unsubscribe from future marketing emails at any time using the link in each email.</p>
      <p><a className="btn" href="/">Return to NEXORA</a></p>
    </main>
  );
}

"use client";

import { FormEvent, useState } from "react";

export default function NewsletterSignup() {
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; text: string } | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setResult(null);
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          consent: data.get("consent") === "on",
          website: data.get("website"),
        }),
      });
      const payload = await response.json();
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "We could not start your subscription.");
      }
      form.reset();
      setResult({ ok: true, text: payload.message || "Please check your inbox to confirm your subscription." });
    } catch (error) {
      setResult({
        ok: false,
        text: error instanceof Error ? error.message : "A network error occurred. Please try again.",
      });
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="content-panel inquiry-panel" aria-labelledby="newsletter-heading">
      <span className="section-kicker">Email updates</span>
      <h2 id="newsletter-heading">Get NEXORA updates</h2>
      <p>Subscribe to receive occasional product, domain and hosting service updates. We will email a confirmation link before adding you to the mailing list.</p>
      <form className="inquiry-form" onSubmit={submit}>
        <label>
          Email address
          <input name="email" type="email" autoComplete="email" maxLength={254} required />
        </label>
        <label className="inquiry-consent">
          <input name="consent" type="checkbox" required />
          <span>I agree to receive NEXORA product and service updates by email. I understand that my subscription is not active until I click the confirmation link, and I can unsubscribe at any time. See the <a href="/privacy/">privacy notice</a>.</span>
        </label>
        <label className="inquiry-honeypot" aria-hidden="true">
          Leave this field empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <button className="btn" type="submit" disabled={busy}>{busy ? "Submitting…" : "Subscribe"}</button>
        {result && <p role="status" aria-live="polite" className={result.ok ? "inquiry-success" : "inquiry-error"}>{result.text}</p>}
      </form>
      <p className="muted inquiry-note">Double opt-in is required. Your email is sent to Brevo only to initiate the confirmation process; it is not treated as subscribed until you confirm.</p>
    </section>
  );
}

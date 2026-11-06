"use client";

import { FormEvent, useState } from "react";

const services = [
  ["general", "General question"],
  ["domain", "Domain registration"],
  ["web-hosting", "Web hosting"],
  ["vps", "VPS hosting"],
  ["reseller", "Reseller hosting"],
];

export default function InquiryForm() {
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; text: string } | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setResult(null);
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          service: data.get("service"),
          message: data.get("message"),
          website: data.get("website"),
          consent: data.get("consent") === "on",
        }),
      });
      const payload = await response.json();
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Your enquiry could not be submitted.");
      }
      form.reset();
      setResult({ ok: true, text: payload.message || "Your enquiry was received." });
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
    <section className="content-panel inquiry-panel">
      <span className="section-kicker">Pre-launch enquiry</span>
      <h2>Send a service enquiry</h2>
      <p>Use this form for a question or to register your interest. This is not an order, reservation, payment or confirmation of service availability.</p>
      <form className="inquiry-form" onSubmit={submit}>
        <label>
          Your name
          <input name="name" type="text" autoComplete="name" minLength={2} maxLength={100} required />
        </label>
        <label>
          Email address
          <input name="email" type="email" autoComplete="email" maxLength={254} required />
        </label>
        <label>
          Service you are interested in
          <select name="service" defaultValue="general" required>
            {services.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
          </select>
        </label>
        <label>
          Your question
          <textarea name="message" minLength={10} maxLength={2000} rows={5} required />
        </label>
        <label className="inquiry-consent">
          <input name="consent" type="checkbox" required />
          <span>I agree that my name, email and enquiry may be stored so the company can review this message. I will not include passwords, payment details or other sensitive information.</span>
        </label>
        <label className="inquiry-honeypot" aria-hidden="true">
          Leave this field empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <button className="btn" type="submit" disabled={busy}>{busy ? "Sending…" : "Send enquiry"}</button>
        {result && <p role="status" aria-live="polite" className={result.ok ? "inquiry-success" : "inquiry-error"}>{result.text}</p>}
      </form>
      <p className="muted inquiry-note">Enquiries are stored only after the Cloudflare D1 database is configured. No payment is collected. Please review the <a href="/privacy/">privacy notice</a>.</p>
    </section>
  );
}

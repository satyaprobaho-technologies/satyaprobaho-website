interface PagesEnv {
  BREVO_API_KEY?: string;
  BREVO_LIST_ID?: string;
  BREVO_DOI_TEMPLATE_ID?: string;
  BREVO_REDIRECT_URL?: string;
}

interface PagesContext {
  request: Request;
  env: PagesEnv;
}

const json = (body: Record<string, unknown>, status = 200) =>
  Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });

const clean = (value: unknown, max: number): string =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export const onRequestPost = async ({ request, env }: PagesContext): Promise<Response> => {
  const origin = request.headers.get("Origin");
  if (origin && origin !== new URL(request.url).origin) {
    return json({ ok: false, error: "Request origin is not allowed." }, 403);
  }

  if (!(request.headers.get("Content-Type") || "").toLowerCase().includes("application/json")) {
    return json({ ok: false, error: "Expected a JSON request." }, 415);
  }

  const length = Number(request.headers.get("Content-Length") || "0");
  if (length > 4_000) return json({ ok: false, error: "Request is too large." }, 413);

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: "Invalid request body." }, 400);
  }

  // Silently discard bot submissions caught by the honeypot.
  if (clean(body.website, 200)) {
    return json({ ok: true, message: "If the address is valid, a confirmation email will be sent." }, 202);
  }

  const email = clean(body.email, 254).toLowerCase();
  const consent = body.consent === true;
  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailPattern.test(email) || !consent) {
    return json({ ok: false, error: "Enter a valid email address and accept the email subscription consent." }, 400);
  }

  const listId = Number(env.BREVO_LIST_ID);
  const templateId = Number(env.BREVO_DOI_TEMPLATE_ID);
  let redirect: URL;
  try {
    redirect = new URL(env.BREVO_REDIRECT_URL || "");
  } catch {
    return json({ ok: false, error: "Subscription confirmation is not configured yet. Please try again later." }, 503);
  }

  if (!env.BREVO_API_KEY || !Number.isSafeInteger(listId) || listId < 1 ||
      !Number.isSafeInteger(templateId) || templateId < 1 || redirect.protocol !== "https:") {
    return json({ ok: false, error: "Subscription confirmation is not configured yet. Please try again later." }, 503);
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts/doubleOptinConfirmation", {
      method: "POST",
      headers: {
        "api-key": env.BREVO_API_KEY,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email,
        includeListIds: [listId],
        templateId,
        redirectionUrl: redirect.toString(),
        contactPixelTrackingConsent: false,
      }),
    });

    if (!response.ok) {
      // Do not expose provider responses, credentials, or account details to the browser.
      return json({ ok: false, error: "Brevo could not start confirmation. Please check the subscription configuration and try again." }, 502);
    }

    return json({
      ok: true,
      message: "Please check your inbox and click the confirmation link to complete your subscription.",
    }, 202);
  } catch {
    return json({ ok: false, error: "The subscription service is temporarily unavailable. Please try again later." }, 502);
  }
};

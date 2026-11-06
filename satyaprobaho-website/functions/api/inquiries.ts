interface D1Result {
  meta?: {
    last_row_id?: number;
  };
}

interface D1Database {
  prepare(query: string): {
    bind(...values: unknown[]): { run(): Promise<D1Result> };
  };
}

interface PagesEnv {
  DB?: D1Database;
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
  if (!env.DB) {
    return json(
      { ok: false, error: "Inquiry storage is not configured yet. Please try again later." },
      503,
    );
  }

  const origin = request.headers.get("Origin");
  if (origin && origin !== new URL(request.url).origin) {
    return json({ ok: false, error: "Request origin is not allowed." }, 403);
  }

  const contentType = request.headers.get("Content-Type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return json({ ok: false, error: "Expected a JSON request." }, 415);
  }

  const length = Number(request.headers.get("Content-Length") || "0");
  if (length > 8_000) {
    return json({ ok: false, error: "Request is too large." }, 413);
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: "Invalid request body." }, 400);
  }

  // Honeypot: silently accept automated submissions without storing them.
  if (clean(body.website, 200)) {
    return json({ ok: true, message: "Your enquiry has been received." }, 201);
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 254).toLowerCase();
  const service = clean(body.service, 40);
  const message = clean(body.message, 2_000);
  const consent = body.consent === true;

  const validServices = new Set(["domain", "web-hosting", "vps", "reseller", "general"]);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 2 || !emailPattern.test(email) || !validServices.has(service) ||
      message.length < 10 || !consent) {
    return json({ ok: false, error: "Please check the required fields and consent." }, 400);
  }

  try {
    // The production D1 schema uses INTEGER PRIMARY KEY AUTOINCREMENT.
    // Let SQLite generate the ID instead of inserting a UUID into that column.
    const result = await env.DB.prepare(
      "INSERT INTO inquiries (name, email, service, message, status, created_at) VALUES (?, ?, ?, ?, 'new', CURRENT_TIMESTAMP)",
    ).bind(name, email, service, message).run();

    return json(
      {
        ok: true,
        reference: result.meta?.last_row_id ?? null,
        message: "Your enquiry has been received. We will publish verified support contact details before commercial launch.",
      },
      201,
    );
  } catch {
    return json({ ok: false, error: "We could not save your enquiry. Please try again later." }, 500);
  }
};

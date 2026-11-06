interface PagesContext {
  request: Request;
}

export const onRequestGet = async (_context: PagesContext): Promise<Response> => {
  return Response.json(
    {
      ok: true,
      service: "SATYAPROBAHO TECHNOLOGIES",
      platform: "Cloudflare Pages Functions",
      mode: "serverless",
      note: "Website health endpoint only; no VPS, hosting control panel, or customer provisioning is active.",
      checkedAt: new Date().toISOString(),
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    },
  );
};

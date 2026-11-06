export interface AccessEnv { ACCESS_TEAM_DOMAIN?: string; ACCESS_AUD?: string; ADMIN_EMAIL?: string; }
export interface AccessIdentity { email: string; name?: string; }
const enc = new TextEncoder();
function decodePart(value: string): Uint8Array { const raw = atob(value.replace(/-/g, "+").replace(/_/g, "/")); return Uint8Array.from(raw, c => c.charCodeAt(0)); }
function decodeJson(value: string): Record<string, unknown> { return JSON.parse(new TextDecoder().decode(decodePart(value))) as Record<string, unknown>; }
export async function verifyAdmin(request: Request, env: AccessEnv): Promise<AccessIdentity | null> {
 if (!env.ACCESS_TEAM_DOMAIN || !env.ACCESS_AUD || !env.ADMIN_EMAIL) return null;
 const assertion = request.headers.get("Cf-Access-Jwt-Assertion"); if (!assertion) return null;
 try {
  const parts = assertion.split("."); if (parts.length !== 3) return null;
  const header = decodeJson(parts[0]); const claims = decodeJson(parts[1]); const now = Math.floor(Date.now()/1000);
  const team = env.ACCESS_TEAM_DOMAIN.split("://").pop()?.replaceAll("/", "") || ""; const issuer = `https://${team}`;
  if (header.alg !== "RS256" || typeof header.kid !== "string") return null;
  if (claims.iss !== issuer || !Array.isArray(claims.aud) || !claims.aud.includes(env.ACCESS_AUD)) return null;
  if (typeof claims.exp !== "number" || claims.exp <= now || (typeof claims.nbf === "number" && claims.nbf > now+60)) return null;
  if (typeof claims.email !== "string" || claims.email.toLowerCase() !== env.ADMIN_EMAIL.toLowerCase()) return null;
  const response = await fetch(`${issuer}/cdn-cgi/access/certs`, { cf: { cacheTtl: 300 } } as RequestInit); if (!response.ok) return null;
  const certs = await response.json() as { keys?: (JsonWebKey & { kid?: string })[] }; const jwk = certs.keys?.find(k => k.kid === header.kid); if (!jwk) return null;
  const key = await crypto.subtle.importKey("jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
  const valid = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, decodePart(parts[2]) as BufferSource, enc.encode(`${parts[0]}.${parts[1]}`) as BufferSource); if (!valid) return null;
  return { email: claims.email, name: typeof claims.name === "string" ? claims.name : undefined };
 } catch { return null; }
}
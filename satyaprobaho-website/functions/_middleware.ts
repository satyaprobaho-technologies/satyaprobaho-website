import { verifyAdmin, type AccessEnv } from "./_lib/access";
interface Env extends AccessEnv {}
interface Context { request: Request; env: Env; next(): Promise<Response>; }
export const onRequest = async ({ request, env, next }: Context): Promise<Response> => {
 const path = new URL(request.url).pathname;
 if (!path.startsWith("/admin") && !path.startsWith("/api/admin/")) return next();
 if (!await verifyAdmin(request, env)) return Response.json({ ok:false, error:"Admin access is not configured or this session is not authorized." }, { status:401, headers:{ "Cache-Control":"no-store", "X-Content-Type-Options":"nosniff" } });
 return next();
};
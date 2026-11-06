import { verifyAdmin, type AccessEnv } from "../../_lib/access";
interface Statement { all<T>(): Promise<{ results?: T[] }>; bind(...values: unknown[]): { run(): Promise<unknown> }; }
interface DB { prepare(sql:string): Statement; }
interface Env extends AccessEnv { DB?: DB; }
interface Context { request:Request; env:Env; }
const json=(body:Record<string,unknown>,status=200)=>Response.json(body,{status,headers:{"Cache-Control":"no-store","X-Content-Type-Options":"nosniff"}});
export const onRequestGet=async({request,env}:Context):Promise<Response>=>{
 if(!await verifyAdmin(request,env)) return json({ok:false,error:"Unauthorized."},401);
 if(!env.DB) return json({ok:false,error:"Inquiry database unavailable."},503);
 try { const result=await env.DB.prepare("SELECT id,name,email,service,message,status,created_at FROM inquiries ORDER BY created_at DESC,id DESC LIMIT 200").all<Record<string,unknown>>(); return json({ok:true,inquiries:result.results??[]}); }
 catch { return json({ok:false,error:"Could not load enquiries."},500); }
};
export const onRequestPatch=async({request,env}:Context):Promise<Response>=>{
 if(!await verifyAdmin(request,env)) return json({ok:false,error:"Unauthorized."},401);
 if(!env.DB) return json({ok:false,error:"Inquiry database unavailable."},503);
 let body:{id?:unknown;status?:unknown}; try{body=await request.json() as typeof body;}catch{return json({ok:false,error:"Invalid JSON."},400);}
 const id=Number(body.id); const status=body.status;
 if(!Number.isSafeInteger(id)||id<1||!["new","in_progress","resolved","spam"].includes(String(status))) return json({ok:false,error:"Invalid enquiry ID or status."},400);
 try { await env.DB.prepare("UPDATE inquiries SET status=? WHERE id=?").bind(status,id).run(); return json({ok:true}); }
 catch { return json({ok:false,error:"Could not update enquiry."},500); }
};
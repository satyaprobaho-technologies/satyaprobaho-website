import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://satyaprobaho-website.pages.dev").replace(/\/$/, "");
  return [
    "",
    "/domain-registration",
    "/web-hosting",
    "/vps-hosting",
    "/reseller-hosting",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/refund-policy",
  ].map((path) => ({
    url: `${base}${path}/`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}

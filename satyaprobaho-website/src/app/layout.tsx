import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: { default: "SATYAPROBAHO TECHNOLOGIES | Domains & Web Hosting", template: "%s | SATYAPROBAHO TECHNOLOGIES" },
  description: "Explore domain registration, reliable web hosting, VPS and reseller hosting solutions from SATYAPROBAHO TECHNOLOGIES.",
  applicationName: "SATYAPROBAHO TECHNOLOGIES",
  openGraph: { type: "website", siteName: "SATYAPROBAHO TECHNOLOGIES", title: "SATYAPROBAHO TECHNOLOGIES | Domains & Web Hosting", description: "Pre-launch information about domain registration and web hosting." },
  robots: { index: true, follow: true }
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body>{children}</body></html>;
}
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://satyaprobaho-website.pages.dev").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SATYAPROBAHO TECHNOLOGIES | Domains & Web Hosting",
    template: "%s | SATYAPROBAHO TECHNOLOGIES",
  },
  description:
    "Explore planned domain registration, web hosting, VPS and reseller hosting services from SATYAPROBAHO TECHNOLOGIES. Services are currently in pre-launch.",
  applicationName: "SATYAPROBAHO TECHNOLOGIES",
  openGraph: {
    type: "website",
    siteName: "SATYAPROBAHO TECHNOLOGIES",
    title: "SATYAPROBAHO TECHNOLOGIES | Domains & Web Hosting",
    description:
      "Pre-launch information about planned domain registration and web hosting services.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

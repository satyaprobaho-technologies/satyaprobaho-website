import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://satyaprobaho-website.pages.dev").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "SATYAPROBAHO TECHNOLOGIES | Digital Services", template: "%s | SATYAPROBAHO TECHNOLOGIES" },
  description: "Explore domain registration, web hosting, VPS and reseller hosting information from SATYAPROBAHO TECHNOLOGIES. Service launch updates for Bangladesh.",
  applicationName: "SATYAPROBAHO TECHNOLOGIES",
  openGraph: { type: "website", siteName: "SATYAPROBAHO TECHNOLOGIES", title: "SATYAPROBAHO TECHNOLOGIES", description: "Digital services information and launch updates." },
  robots: { index: true, follow: true },
};

const nav = [
  [ "Domains", "/domain-registration" ],
  [ "Web Hosting", "/web-hosting" ],
  [ "VPS", "/vps-hosting" ],
  [ "Reseller", "/reseller-hosting" ],
  [ "About", "/about" ],
  [ "Contact", "/contact" ],
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="announcement"><div className="container announcement-inner"><span>Digital services for your next step online</span><span className="availability"><i /> Pre-launch information site</span></div></div>
        <header className="site-header">
          <div className="container header-inner">
            <Link className="brand" href="/" aria-label="SATYAPROBAHO TECHNOLOGIES home"><span className="brand-mark">S</span><span className="brand-copy">SATYAPROBAHO<small>TECHNOLOGIES</small></span></Link>
            <nav className="main-nav" aria-label="Main navigation">{nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
            <Link className="header-cta" href="/contact">Get updates <span>↗</span></Link>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container footer-grid">
            <div className="footer-brand"><Link className="brand brand-light" href="/"><span className="brand-mark">S</span><span className="brand-copy">SATYAPROBAHO<small>TECHNOLOGIES</small></span></Link><p>Clear information for domains, hosting and your digital journey.</p><span className="footer-note">Bangladesh · Pre-launch</span></div>
            <div><h3>Explore</h3><Link href="/domain-registration">Domain registration</Link><Link href="/web-hosting">Web hosting</Link><Link href="/vps-hosting">VPS hosting</Link><Link href="/reseller-hosting">Reseller hosting</Link></div>
            <div><h3>Company</h3><Link href="/about">About us</Link><Link href="/contact">Contact</Link><Link href="/terms">Terms of use</Link><Link href="/privacy">Privacy policy</Link><Link href="/refund-policy">Refund policy</Link></div>
            <div className="footer-status"><h3>Service status</h3><p><i /> Website online</p><small>Registration, hosting orders and payment services are not yet available.</small></div>
          </div>
          <div className="container copyright"><span>© {new Date().getFullYear()} SATYAPROBAHO TECHNOLOGIES. All rights reserved.</span><span>Built for a better digital start.</span></div>
        </footer>
      </body>
    </html>
  );
}

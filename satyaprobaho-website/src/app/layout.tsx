import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const logoDataUri = "data:image/webp;base64,UklGRjQQAABXRUJQVlA4WAoAAAAQAAAAXwAAWwAAQUxQSPkHAAABDANp27T+ZW/7LUTEBNDlKQIm1Yvz5sfNhWzM26a/bdvxRl7Tk3qmHdu2bdv2rG3b3rFtr707tm1bnQ6qQZXnfu8fvvf7kmY2IiaAVm3brq0IbUjADqL4AwEYoPEZRWSoO8d4Ya+zdrglICImQEI9omid3q+OWrFp98fPn799+fD+3ZIvn2hZKkL+H2NrPzpr+/V7oF31YcyI3z7jkSrhD1ulYXOPpZGkgdcEJ0mmbP+kVZ6Hp9RLq5NJGkU2GhJnRld/KGI6L0ggjSqgmg2qCjL1z345Q63gC/tBqqrCjSR1JGnYSe4ZEBFK5b86T6rCoyF5Z+eWC3dvt4xTAMiNXUOmyJcJpKrC1ZB6eOHoUbMOpmlCEpYaYn7hkMjx2gUSXkkeHvfKe3/Gg1QHoKrBAB8+vQqBzttJVQ9kwoJHnlkWT1IDDAo8MC0um0rMz6KqmyFPftD5k8MkFYZeDRRQV0/IjdWypdcZQhWwkftfbjcxgQSgabdPb/lj8YJ5C1es3nc5lSSNi6oC5JLnagYvz2w/VR0ADHlgYOOZqTRZ6al3Tq76YdK37z87rFvTcnlFYkq3fnb6jiTSuLiS+DN5vlawGuyiUVWFkzzxTOVvk2hUsx6k3Luf5jd0ZiZf3DTxkaphIr4Kw5dcJY2nEPVf2r+rfHAeTaKqKpxk/BsFhp8jAUAVXg2daSfmds8lIoX7/JBCeil3ff9hriD4PgdVFU7DzLmlqv1NIsiqMKQ5MaqeiEi16XdoPECSxzrH+KZyzqWBwkqubxbz+vsDe5OHh19vXr4QkfJT7tMFevLQtSzGt5XZvH/QwG549enwtrsfHtie+PDf2+YiIk230jj8+m5cjiKdJ19O6DhRZAMVAIwxNIsKlVmcSQ714cGM4iIS/dYDqvp5IlqcBV9a3Su0hWojz/SOee0Wkd0qDmB4ZpCISPtTVD+P57SI5Grl20gFAGPIWXkrbSAB4xYvByjN3IIiUmo1oWkNXDzH/EaFhTcekf43CMCEiFJyXw0RiZ1D5agghM2kWsgNFeVLJZzZY5NaGd9dRCJGk+dyB/Ye4TTEt9F5VhCAgVPQCQW1Q5NJnUVEPgMGBdQv01h4a7gU3ELUKk1HnESlzaROIiJvc60vgCo3CACG22pL8Y1Um1Lb6KNMKxOaiIh8mVXbW8RqAgA5M05yrqciQEdgzhUAL1YWkfAlE7y9TgBg6ksi0YupcFd3uQDcECUisd8W8VI91QDgxTYi8jHh0RH36Bz4pohIwZoewn4nAG4uLyId7xubeCIoTpm7TUVEonxu/Y2B4a8FRKTYWQImUPbAAnClTzzHHSbISVEiInMIC1p7h4VGB3h7nCA+8UlkmLTM8CjQNeDhOC9xR0l9TaTG8+ERa0h1KugacISXYWT6iyLNrw2TrgpQVrCOVSt9btG7mfGISO/b8QXkd6Kcg0XgMmQ0cWum/mdE+t/jD1IxxXiiQbkrmeAEt8n8QKTXPfJZeYcK1EqgB3Oykadibbkuzg2TJok0/sa+TQSs4Ah2Gm1p67Ynj5Q9S/BOkQp3DUxJ7fURKRK1ge/a3msvMasJ8HTEI4SLFVzoKWkttzUSeZcAuEMmZIsVPVZWGY7nsIhUTjSOlbLSi6JWgLQVChcFEmByWZf5VMefEUe9qQCDslJZWo1Gm9uq3TNwrCxwLVhydMIle9lGEZbNFRIDsz4pdPmoJe6Yy4m6QbjTXL1gaZJmbEldbxHOhhvUhs5cKp+zvE61AG9dDYarQNelgssPbvzrQmDjNt3wlGW3m0lKQVAEsonJNHpazhKu/ix1YWqr6oIAJqup5YIHqA1sst0NTCxtOekFLjaps4nFPBptWU8FFOpwvWLSNW2nfhDrJKqrB2AquYf3bP00JEZ1iY2uOjIa20rEm6CwYvUaJ/dH2+QXOvy3Ces9FtfqzAdi9UkfImhcZiLJjDJqyySWc0TU8kn0HtqShhOzCYA0LQE7XCDOx/qLSA9FYBSuYroSOya9qYhPau0oIiK+H6h2QAtAmU1IPUNli7NFRAodWSKOaudoC23pZoAL2mK/4rUyIhL5M7tb+g9Npi1pOJGKhPkW3J4TEd8kno51SN9pb2XiIoMA2mKjPTuXRPokbDT5vljjzi2fkMZF1mwVVFo8WUgkfBR5pZBN3ucfK28JV3fZ4a0WInHzCX4groXjmfwnQAK5F7gyrZdI0VUEzxd0k49pQplw57w7TKTWQarRoeIx/0XyP8H7/UQeSyDAn8XzIxSHk5MVvN5dSv1oqODV8t7CfidCfgmP15BHztEAJqufBFjmMi2myJBFycW8ktPzVV5KAgC/kIC7pBmHxyxjmeGFESW/SCScXBQZmLxF4+1sBZg+o+Erl0l1cE2sBDFsNt08DiZr/ztvniRh5baiEtSYH+hyflbi6iWXSNi5s4gEOfYnArkDzUyKv0vCbri6qAQ9ZiHNHajfrzBwJRfESjZGfQdqyAXI9PfDJHufuctg6QmGZztLtjfbTUJVNaAjaZaUkBCMG5NJA1UFVANzB3lhsIRohy2kKhyqMxsN744tKiEb+dRJEmo/wzDr1/oS0nlfOUpCAU0OIDN/bSMhH/foRiUN9pG8MbeZPJRhLcaeNKQJmqqC5P01zxWThze2w7j9D+g0ARk6E9a+V1Me9shqg75dd/m+YaD+lBN/ft6lqPxfFq7f78OZf+04czn++tVzBzf8NOWt7jVzSYgCAFZQOCAUCAAAsB4AnQEqYABcAD7tWqROqaSjv7m3vbPwHYlsAMOplv6TydXJUHdLv0G1fGktpf5n1TfpfeVeav7gPfF9KX+M9IDqQ95Y8pKsvtuir56A5ZV2zV/KOHJkabU7J5qcwt+jNP3ppLLNfri5Hxnvg6L5L6ft6sfXZh7eIMzrp4l+J4OfV9imf7/29NEYFHe9ucVRJtlLFp7t9Iaez+KVNfVAS57NXKtL7Oro3PHpBnNCEw0vo1Gsg5Uq9kfm1fMr7HsPhwraGKAU5H7haOSXcgVYFvNreX7k8+7deh6P5OEJNks4UeeyUP0QYU5hwrf9RO9BVs4++wp0UrT8aFaM4AAA/vtACyEoius/t/gjGI/13LvnbSoN/GAGI2CUp3GyDWzrkx17NeUeRpZGdM8dzb1mgSmYe0366rz0MOahjGHlWvS5Br2wkJlQiCs38961vFrrWbTaVRwQzb7/nHuDFVGZlr2cX8fXwPwSjFPoGLuyaLltiDUnp22S9RVCVMme+NfAQyndHMk0oQ6LXfINa4HoDlJNAfWCHrwwju2fR1A/X7d2YKBGeEPTQa+/MgQ/g8vADRnnZM33bJcbN0WKIJBeA7wbSv8ZsuWQqqd7aKzHmB9ic+8gmTjeN1KtRiD2tDLpSMxbmF6z5pGFn/be9Vh/z9D4XDOTpQzApmfOfE8CVLYz/YlIDHxdFXombBs6Ol9CvAufR9sE0SLGV6xX1IZ3oPjp3ars+2gFenatUEicBLBdaaiBiIcSy/4bi236ORSfB3R3M3vn0QOlqCK4v54j4yyGmPQBsoLmXqzj5uLbwSkbmdt7Pf8ywzHMQwGv+fEVKrb27vTsFi8sOVnld/kB2oS6ZHEnZkv6ExF0TXebO8uo2Q6Eox8vgGAaGuvuWpWftxQ3JXenThzyr7MMFGspLjtWRc/AmUZjbS4V+TyPSkFtRsuQ8iLxG+2er3R9TGnF3xjZ5Qr5FDg5KyP+JOeI7LkwvEB+ClceAjgRq9sG8LIcWb0YP9DiFhY66dwPeAclwL+nQr9xNts+EKLRYIHGxQtbPsktkKGse6PRElsN0sQLk6VhI5O8IobUJwcJpgVVWNdosiLyEPXtJirrZssxkKb7bjqgffbJmnxmuiCvOAVWFrDnHzz4p8x3qAvyGQrD7omsuVwiJ1hGo72gpyXQZ4snFfAJBICJ4hVJHLlgUDNiEvI15eUhWkv5SnPtgdRkfwJ8ZPhoBmOJs+nq6UKrWDPVWpf2ywvUb4P1QmMbPFQFDMnTlov/O5dxqHt+RVtb6XTEXBeANeV5hR0CqiXSoLK4DbR9NaPOy+nq56wmkl5iuF6SREIK6ao2Z3x8apzkZfs35CaMql8KW8uslGaUC/9llGYDhFzSq70SmNQZZFaLLGAJ+APnzP2QHoFMFn+Uk4Rz86dCdUL2Fsw7zzdoHZSgusGmmO+07GHtMQf+q4zg2cXru8f3e7+a6WzAItJjVOuL33OOIJOOChHu0VVi2oK9kLxL7g8MfnAmY0lsi+scYoznfwXRm5DoDbRZYo0Yf4Wez/fKKwtMbrepBd6HJSfMvExU6qVQLtPMQ0L4j1fRq58J54iZQsiLvcFR3urZ0tnkdBKYEHjgOCpcmZ+aocjdpkFC6xgN0InW0CmnC6CRXSre/TM9oubBrKzNIhhgWNWKiOtvZnlh1KsXOaBcv5bKDi8vp6DAyAeWW9IKHAQAKbUDsUOp6BVcWWS9YnzLghYJn1Ia6+Xu9U0j7CTaem4VYUdbC+fAq+C68woYg+7kfq/URWkMmZbx0x32rFHO2dSZfafZPJyt8wCQOPei2v8FtQuj0vGpeq0wnbjoJxBVoCU1BCBDAyzEeRaHJ2fldA2yZZxXPiD4Da4uxTpYuT7XpHf2DHmkMWAzQdgdLHuy36wrsqUJok4/NuIQ6GORIr164iktCMFS0ivFqg/jh9NnJ2V3XsGSWmpMh9dYiAmAKb6coPm9FUkOKhFYT0oeyB01P2etZ6AD/UAaK3f0xi0POUJ6p+nnK32eiZ8Nj8Cc6mMa5a1ZoKvffRQuNSGzQcRd8CNCQVae6JeV6z5rQeOCiTuHyRMHEMoCHnVEdL5BT6e/TBYSyWuikXWHrjEqyaR86EC+2EgDIeurz86w5Y5RTtPly0e/bzXMhS2iyU0xdnaklmgJQ79ybE76+3BBRFCio7znD2I2rmfMwdHpWKKJH6rcjJkvSDjyymd+T8caZdm4vE93YJy729SvM312jQD2otsE8mXMZpiuOF/Vdl8s1TKbm/yZbz7VT606OyATPe3GfYY5leEi/iE5/I4ye8lNOI4R1e+Nh8vFdhmv6g1TLJT62EUwtuvu/D7rmVXmPLi7LcDWmIm4nFj9OuMuIwiWCDVvTBUAsayIA8sBwKMdkkkk/tcnaRoIupiNY0WWvhBYNql7qh7+8lh1IhfTtNAMpghyDv+xBkmYIuAWrkno7t3SMOcDDMoL/44dBf9yZ/P+3v/+9iapJ4/x4GEchlmkrObaLFKaoZ0rIPUprPSvuxDFyRaoGKudaKCj6jMQSPkJuRcc4Zk4APf16V66hNuL3Jy6LARY8hd7a617zZlL4ptFPGtQsbBUD/G/irM40FDXdf32hdZaakVgeCI6uzaLWR3BejQn+WWJVH4e+eBs09nok3P/Ibb28jvD6utmlV1Q7bAZlP/FYBCqymAj6vA5h7bhin7v6z66azav+tvtnM13/wTv/Hv8Af/83Oq0YMvWfJr9lOWkqFMYEZDcHAAAAA==";
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://satyaprobaho-website.pages.dev").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "NEXORA INTERNATIONAL TECHNOLOGY | Digital Services", template: "%s | NEXORA INTERNATIONAL TECHNOLOGY" },
  description: "Explore domain registration, web hosting, VPS and reseller hosting information from NEXORA INTERNATIONAL TECHNOLOGY. Service launch updates for Bangladesh.",
  applicationName: "NEXORA INTERNATIONAL TECHNOLOGY",
  openGraph: { type: "website", siteName: "NEXORA INTERNATIONAL TECHNOLOGY", title: "NEXORA INTERNATIONAL TECHNOLOGY", description: "Digital services information and launch updates." },
  robots: { index: true, follow: true },
  icons: { icon: [{ url: logoDataUri, type: "image/webp" }] },
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
            <Link className="brand" href="/" aria-label="NEXORA International Technology home"><img className="brand-logo" src={logoDataUri} alt="" width="48" height="46" /><span className="brand-copy">NEXORA<small>INTERNATIONAL TECHNOLOGY</small></span></Link>
            <nav className="main-nav" aria-label="Main navigation">{nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
            <Link className="header-cta" href="/contact">Get updates <span>↗</span></Link>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container footer-grid">
            <div className="footer-brand"><Link className="brand brand-light" href="/"><img className="brand-logo" src={logoDataUri} alt="" width="48" height="46" /><span className="brand-copy">NEXORA<small>INTERNATIONAL TECHNOLOGY</small></span></Link><p>Clear information for domains, hosting and your digital journey.</p><span className="footer-note">Bangladesh · Pre-launch</span></div>
            <div><h3>Explore</h3><Link href="/domain-registration">Domain registration</Link><Link href="/web-hosting">Web hosting</Link><Link href="/vps-hosting">VPS hosting</Link><Link href="/reseller-hosting">Reseller hosting</Link></div>
            <div><h3>Company</h3><Link href="/about">About us</Link><Link href="/contact">Contact</Link><Link href="/terms">Terms of use</Link><Link href="/privacy">Privacy policy</Link><Link href="/refund-policy">Refund policy</Link></div>
            <div className="footer-status"><h3>Service status</h3><p><i /> Website online</p><small>Registration, hosting orders and payment services are not yet available.</small></div>
          </div>
          <div className="container copyright"><span>© {new Date().getFullYear()} NEXORA INTERNATIONAL TECHNOLOGY. All rights reserved.</span><span>Built for a better digital start.</span></div>
        </footer>
      </body>
    </html>
  );
}

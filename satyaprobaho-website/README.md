# SATYAPROBAHO TECHNOLOGIES — pre-launch website

Next.js static-export starter for a planned domain-registration and web-hosting business. The content is intentionally transparent that paid services are not live.

## Run locally
- Install Node.js LTS.
- Run `npm install`, then `npm run dev`.
- Run `npm run build` to create the static `out/` directory.

## Before deployment
1. Create a GitHub repository and upload this folder. The connected GitHub account currently has no repositories visible to the integration; repository creation is not supported by the available GitHub actions.
2. Create a Cloudflare Pages project and connect the GitHub repository, or upload the generated `out/` directory.
3. Set `NEXT_PUBLIC_SITE_URL` to the actual public Pages URL, e.g. `https://YOUR-PROJECT.pages.dev`. Do not use the planned `satyaprobaho.com` until it is purchased and configured.
4. Replace/update company contact details, verify legal pages, and add an actual customer support channel before launch.
5. Verify the live site, sitemap and robots.txt; then add the site to Google Search Console and submit the sitemap. Indexing and rankings are not guaranteed.

## Important status
- `satyaprobaho.com` is a planned domain, not confirmed as purchased or available.
- No VPS has been provisioned; Singapore is the preferred future location.
- HestiaCP is a planned future control panel.
- No domain registration, hosting, VPS or reseller packages are currently sold.
- No payment gateway, customer portal or automated provisioning is implemented.
- Privacy, terms and refund pages are starter drafts and require business-specific/legal review.
- No business email, phone number, street address, pricing or company registration details have been invented.
- This archive has not been built or deployed in this environment.

## Environment
Set `NEXT_PUBLIC_SITE_URL` at build time to the canonical public URL. It controls metadata base, sitemap and robots sitemap reference.

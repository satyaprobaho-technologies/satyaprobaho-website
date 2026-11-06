# SATYAPROBAHO TECHNOLOGIES — website

Next.js static-export website for the planned domain-registration and web-hosting business.

## Current website status
- Source repository: https://github.com/satyaprobaho-technologies/satyaprobaho-website
- Production Pages project: https://satyaprobaho-website.pages.dev
- Latest deployment URL previously confirmed in the Cloudflare dashboard: https://fcc5e9a5.satyaprobaho-website.pages.dev
- GitHub Actions site build: successful on 2026-11-06 (run 42179019930).
- Static pages include home, domain registration, web hosting, VPS hosting, reseller hosting, about, contact, terms, privacy and refund policy.
- Static website hosting on Cloudflare Pages is the currently available free hosting layer. It is not a customer hosting server or a VPS.

## Run locally
- Install Node.js LTS.
- Run `npm install`.
- Run `npm run dev` for local development.
- Run `npm run build` to generate the static `out/` directory.

## Business launch blockers — do not accept orders yet
- `satyaprobaho.com` is a planned domain; purchase and DNS configuration have not been confirmed.
- No Singapore VPS has been provisioned. No server IP, root/SSH login, or HestiaCP administrator login exists.
- No registrar/reseller account or domain-registration API is connected.
- No customer hosting/reseller infrastructure, customer portal, payment gateway, or automated provisioning is implemented.
- No domain, web-hosting, VPS or reseller products are currently available for fulfillment. Do not accept payments or promise delivery until fulfillment is operational.
- Terms, privacy and refund pages are starter drafts and require business-specific and legal review before commercial launch.
- Business contact details, support address, pricing, legal entity and registration details must be supplied and verified; none should be fabricated.

## Next steps when resources are available
1. Purchase and configure the business domain, or continue using the free Pages subdomain.
2. Obtain a suitable Singapore VPS under an explicitly approved budget and provider terms.
3. Install and secure HestiaCP on a fresh supported OS; then verify panel access, DNS, mail and backups.
4. Select a legitimate registrar/reseller provider and connect its API.
5. Configure customer ordering, payment processing, support and fulfillment.
6. Review legal policies, test an end-to-end order, then launch paid services.

## Important
The current site is a public informational/pre-launch website. A successful static-site build does not mean domain sales, hosting fulfillment, or VPS operations are live. Search indexing and ranking are not guaranteed.

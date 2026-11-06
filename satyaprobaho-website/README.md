# SATYAPROBAHO TECHNOLOGIES — website

Next.js static-export website for SATYAPROBAHO TECHNOLOGIES.

## Zero-budget operating model (no Singapore VPS)

The selected alternative is to keep the public website on **Cloudflare Pages** and operate it as a transparent information/pre-launch website. A VPS is not required to serve this static website.

- Public Pages project: https://satyaprobaho-website.pages.dev
- Historical deployment preview URL recorded during setup: `https://fcc5e9a5.satyaprobaho-website.pages.dev` (not independently verified as the current production deployment).
- Source repository: https://github.com/satyaprobaho-technologies/satyaprobaho-website
- Framework: Next.js static export
- Deployment source: GitHub repository, branch main (Cloudflare Pages connection was previously configured)
- No separate server, VPS, HestiaCP, server IP, root password or server-admin account is part of this model.
- Cloudflare Pages Free currently documents up to 500 builds/month, 20,000 files/site and 25 MiB per asset. Static asset requests are free and unlimited. See the official documentation:
  - https://developers.cloudflare.com/pages/platform/limits/
  - https://developers.cloudflare.com/pages/functions/pricing/

## What is currently available

- Public informational pages: home, domain registration, web hosting, VPS hosting, reseller hosting, about, contact, terms, privacy and refund policy.
- Free Pages subdomain for the informational website.
- A Cloudflare Pages Function source file at `functions/api/health.ts` defines a JSON health endpoint at `/api/health`; it becomes live only after a successful Pages deployment that includes the `functions/` directory.
- Educational content to help visitors understand domains and hosting options.

## What is NOT available — do not accept orders or payments

- `satyaprobaho.com` is a planned domain; purchase and DNS configuration have not been confirmed.
- No domain registrar/reseller account or registration API is connected.
- No customer hosting infrastructure, VPS, HestiaCP, customer portal, payment gateway or automated provisioning is implemented.
- No domain, web-hosting, VPS or reseller product is currently available for fulfillment.
- No verified public business support email, telephone number, address, package price or legal registration details have been supplied. Do not invent or publish them.
- Terms, privacy and refund pages are starter drafts and require business-specific and legal review before commercial launch.

**Important:** The free Pages subdomain hosts this company's static website only. It is not a VPS and cannot be represented as customer web-hosting infrastructure. Do not collect payments or promise domain/hosting delivery until a legitimate upstream provider, fulfillment process, support channel and payment process are in place.

## Run locally

- Install Node.js LTS.
- Run `npm install`.
- Run `npm run dev` for local development.
- Run `npm run build` to generate the static `out/` directory.

## Future launch steps (only when resources are available)

1. Register and configure a business domain, or continue using the free Pages subdomain.
2. Choose an authorized domain registrar/reseller and verify its commercial terms.
3. Choose an authorized hosting/VPS upstream provider; do not resell a free instance if its terms prohibit resale.
4. Implement customer ordering, support, payment and fulfillment.
5. Review legal policies and test an end-to-end order before accepting customers.

## Deployment verification

A successful GitHub Actions build confirms that the source builds; it does not by itself prove that the latest Cloudflare production deployment is live. The repository's current GitHub Actions workflow runs a build only; it does not deploy to Cloudflare. Cloudflare Pages must be configured with the app root directory `satyaprobaho-website`, build command `npm run build`, and output directory `out`. Pages Functions are discovered from the app root's `functions/` directory. Verify the current deployment in the Cloudflare Pages dashboard and test `/api/health` after deployment. Search indexing and ranking are not guaranteed.


## Pre-launch enquiries (Cloudflare D1)

The contact page includes a pre-launch enquiry form. It is **not an order form** and must not be used to accept payment or promise service delivery.

To enable persistent enquiry storage in Cloudflare Pages:

1. In Cloudflare Dashboard, open Workers & Pages → D1 SQL Database and create a database named `satyaprobaho-inquiries` (Free plan only; do not select a paid plan).
2. Open the database's Console and execute the SQL in `migrations/0001_create_inquiries.sql`.
3. Open Workers & Pages → `satyaprobaho-website` → Settings → Functions → D1 database bindings.
4. Add a binding with variable name `DB` and select `satyaprobaho-inquiries`.
5. Save and trigger a new production deployment. No API key or database password belongs in the repository.
6. Test the contact form with a non-sensitive test enquiry. Confirm a 201 response and verify the row in the D1 Console. Delete the test row afterwards.

Until the D1 binding is configured, `POST /api/inquiries` intentionally returns HTTP 503 and the form displays a clear setup message. Do not say enquiries are being stored before the test succeeds.

The API validates fields, limits lengths, checks the request origin, uses a honeypot, and stores only name, email, service, message, status and timestamp. It does not store IP addresses. Restrict D1 dashboard access to trusted administrators. Add rate limiting/Turnstile before public launch if abuse becomes a concern.

### D1 migration

Apply `migrations/0001_create_inquiries.sql` once to the production D1 database before binding it.

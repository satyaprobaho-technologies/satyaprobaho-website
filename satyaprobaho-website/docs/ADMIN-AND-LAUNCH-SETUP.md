# Admin and launch setup

## Enquiry dashboard
The `/admin/` page and `/api/admin/inquiries` endpoints are intended to run behind Cloudflare Access. The Pages Functions middleware fails closed until configured.

Set these **production** Pages environment variables:
- `ACCESS_TEAM_DOMAIN`: Access team hostname, e.g. `your-team.cloudflareaccess.com`
- `ACCESS_AUD`: Audience (AUD) tag for the self-hosted Access application
- `ADMIN_EMAIL`: one exact administrator email

Create a Cloudflare Access self-hosted application covering `/admin` and `/api/admin/*`, with an allow policy limited to that email and email OTP or stronger authentication. Add the variables and redeploy. The middleware validates JWT signature, issuer, audience, expiry, and exact email. Until then, requests return 401 and disclose no enquiry data. Never commit passwords or tokens.

## Social promotion
Use `marketing/launch-kit-bn.md` for prepared copy. Account creation and Google Business Profile verification require the owner's signed-in account and accurate real-world business details. Do not invent address, phone, or eligibility.

## Commercial activation gate
Do not accept customer orders or payments until there is a valid registrar/hosting reseller agreement, clear pricing/renewal/refund terms, support contact, and tested fulfilment workflow. Cloudflare Pages is serverless hosting, not a VPS, and cannot run HestiaCP.
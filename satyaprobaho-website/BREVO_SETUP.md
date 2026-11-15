
## Brevo email subscription (Double opt-in)

The contact page includes a separate marketing subscription form. It does not add an address as subscribed immediately. The Pages Function at `functions/api/subscribe.ts` calls Brevo's Double Opt-in endpoint; Brevo sends the confirmation email and only a confirmed subscriber is eligible for the selected list.

Before this feature can work in production:

1. In Brevo, create and activate a **Double opt-in confirmation template**. Record its numeric template ID.
2. Choose the intended destination list ID. Existing lists at the time this integration was prepared: `3` = `NEXORA - Business`; `4` = `Individual List`. Use the list appropriate to the subscriber audience; do not mix audiences without a clear reason.
3. In Cloudflare Pages → `satyaprobaho-website` → Settings → Variables and Secrets, add these **Production** variables:
   - `BREVO_API_KEY` — secret; paste the Brevo API key in Cloudflare only, never in GitHub or chat.
   - `BREVO_LIST_ID` — numeric ID of the chosen destination list.
   - `BREVO_DOI_TEMPLATE_ID` — numeric ID of the active DOI template.
   - `BREVO_REDIRECT_URL` — HTTPS URL on the website shown after the subscriber confirms, e.g. `https://satyaprobaho-website.pages.dev/subscription-confirmed/`.
4. Save the variables and deploy the branch/merged commit to Cloudflare Pages. The Pages project root must remain `satyaprobaho-website`; the `functions/` directory must be included in the deployment.
5. Test with an email address whose owner has explicitly requested updates. Verify the DOI email arrives, click its confirmation link, then verify that the contact appears in the selected Brevo list. Also test invalid input and missing configuration.
6. Do not bulk-import public web addresses. A public business address is not proof of marketing consent. Honour unsubscribes and suppression status.

The API key is read only by the server-side Pages Function. The browser never receives it. DOI is mandatory; pixel/click tracking consent is set to false by default.

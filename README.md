# Tacir Polimer

Corporate polymer trading website using Next.js App Router, React, TypeScript,
Tailwind CSS v4, next-intl and Resend. Headings use Manrope; body text uses Inter.

## Development

Use Bun (the pinned version is in `package.json`):

```sh
bun install
bun run dev
```

The homepage redirects to `/en`. `/de` and `/nl` use the same page and section
components with dictionaries in `src/locales/`. Unknown locale prefixes return 404.
`src/i18n/request.ts` reads the locale through `next/root-params`, supported by
Next.js 16.4. Server sections remain Server Components; only interactive sections
receive translation namespaces in the client provider. The language selector
uses client navigation and preserves the query and hash.

The homepage imports its rendering entry points from `src/sections`. Each
section delegates to a feature under `src/features`, while shared layout
components live in `src/shared` and static definitions in `src/data`.
See `ARCHITECTURE.md` for the directory tree, boundaries and refactor validation.

## Environment and deployment

Copy `.env.example` to a local environment file if needed. Existing local secrets
must remain private and must never be committed.

- `NEXT_PUBLIC_SITE_URL`: verified public origin, including `https://`. Set before
  building production. Without it, pages use `noindex, nofollow` and omit canonical
  and hreflang URLs. No domain is assumed.
- `RESEND_API_KEY`: server-only Resend key.
- `CONTACT_FROM_EMAIL`: sender authorized by your verified Resend domain.

The recipient is fixed to `info@tacirpolimer.com`; `replyTo` uses the validated
visitor email. Missing email configuration returns 503. Provider errors return 502. Neither is reported as a successful submission. DNS/domain verification
and a real delivery test remain production tasks.

The contact API validates payload shapes and lengths, limits streamed request
bodies to 12,000 bytes, rejects honeypot entries and allows five requests per
minute per forwarded address per process. The in-memory limiter is bounded and
best effort: restarts reset it and multiple instances do not share it. Configure
rate limiting at the hosting edge for production, and ensure your trusted proxy
overwrites `X-Forwarded-For`. Do not rely on a client-supplied address for abuse
protection. No additional credentialed service was introduced.

Before launch, arrange a review of privacy information for contact-form data,
data retention, applicable company/legal disclosures and any consent requirements
for analytics or cookies if they are added. Existing LinkedIn destinations and
company contact details are preserved.

## Validation

```sh
bun run lint
bunx tsc --noEmit
bun run build
bun run start
```

Builds require access to Google Fonts unless the font cache already exists.
See `IMPLEMENTATION_REPORT.md` for the change inventory, test results and
remaining verification tasks.

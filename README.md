# Ourivesaria Rinchoa

Institutional website for Ourivesaria Rinchoa, built as a React 19 + TypeScript SPA with Vite and Tailwind CSS.

## Highlights

- Route-based SPA for home, watch restoration, weddings, contacts, and 404 handling.
- Centralized content in `src/content/siteContent.ts` and site-wide SEO/business config in `src/content/siteConfig.ts`.
- Route-level SEO metadata with canonical URLs, Open Graph, Twitter cards, and `LocalBusiness` JSON-LD.
- Optimized WebP image delivery for the public-facing experience, with raw source assets stored in `assets/source-images/`.
- Automated checks for linting, type safety, tests, coverage, bundle size, and Lighthouse.

## Scripts

- `npm run dev` starts the local dev server.
- `npm run lint` runs ESLint.
- `npm run typecheck` runs `tsc --noEmit`.
- `npm run check` runs linting and type-checking together.
- `npm test` runs the Vitest suite.
- `npm run test:coverage` runs tests with V8 coverage output.
- `npm run build` creates the production bundle in `dist/`.
- `npm run preview` previews the production bundle locally.
- `npm run size` checks built JS and CSS bundle budgets.
- `npm run images:optimize` regenerates optimized public WebP assets.

## Deployment

`vercel.json` is configured for the static Vite build output in `dist`.

Typical deploy flow:

1. `npm ci`
2. `npm run images:optimize`
3. `npm run check`
4. `npm run test:coverage`
5. `npm run build`
6. Deploy `dist` through Vercel

## Quality Baseline

The repository includes GitHub Actions for:

- CI checks
- dependency audit
- coverage generation
- bundle size budget checks
- Lighthouse desktop and mobile runs

## License

MIT

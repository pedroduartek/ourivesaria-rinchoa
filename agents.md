# agents.md

## Project Goal

- Keep the Ourivesaria Rinchoa website fast, credible, and easy to maintain.
- Centralize content, SEO, and business data to avoid duplication across pages.
- Preserve a verifiable quality baseline for static deployment on Vercel.

## Chosen Stack

- React 19 with TypeScript.
- Vite 7 for development and builds.
- Tailwind CSS 4 through the official Vite plugin.
- React Router for SPA navigation.
- Vitest, Testing Library, jest-axe, and V8 coverage for tests.
- ESLint for linting and `size-limit` for bundle budgets.
- `sharp` for optimized WebP asset generation.

## Current Architecture

- `src/content/siteContent.ts`: page copy, CTAs, navigation, galleries, and route content.
- `src/content/siteConfig.ts`: canonical domain, business data, default social image, and JSON-LD inputs.
- `src/components/seo/PageSEO.tsx`: title, description, canonical, Open Graph, Twitter, and structured data handling.
- `src/routes/AppRoutes.tsx`: statically imported SPA routes for the public pages that Lighthouse audits.
- `src/layouts/MainLayout.tsx`: shared shell with header, footer, skip link, carousel, scroll restoration, and error boundary.
- `src/components/`: shared building blocks such as `Header`, `Footer`, `Carousel`, `ContactPanel`, and `ActionLink`.
- `assets/source-images/`: original JPG/PNG files used to regenerate web assets.
- `public/images/`: optimized WebP assets served publicly.
- `scripts/optimize-images.mjs`: WebP generation script.
- `.github/workflows/`: CI, bundle-size, and Lighthouse automation.

## Maintenance Workflow

- Update this file whenever architecture or quality expectations change.
- Prefer editing `src/content` over hardcoding copy into components.
- Validate both desktop and mobile behavior for visual changes.
- Keep Lighthouse scores healthy by default through code choices, not by rerunning Lighthouse after every edit.
- Treat these as the standing guardrails:
  - keep the public route shell static and lightweight
  - avoid new third-party scripts, remote fonts, or render-blocking requests
  - give above-the-fold images explicit dimensions and the correct loading priority
  - use responsive assets from `src/content/imageManifest.ts`
  - keep motion limited to opacity/transform and honor `prefers-reduced-motion`
  - preserve the existing bundle-size and CSS-size budgets
- Run Lighthouse only when changing performance-sensitive areas such as the homepage hero, shared layout, routing, fonts, image delivery, SEO metadata, or when preparing a release.
- If a change is not in one of those areas, rely on `check`, `test`, `build`, and `size` instead of spending time and tokens on Lighthouse.
- Do not reintroduce Firebase files or configuration; the deployment target is Vercel.
- Do not create commits or pushes on behalf of the user.

## Local Verification

- `npm run check`
- `npm test`
- `npm run test:coverage`
- `npm run build`
- `npm run size`

## Lighthouse Triggers

- Run Lighthouse before merge/release, or after changes to the homepage hero, global layout, route loading, fonts, image strategy, or SEO-critical markup.
- Prefer a single focused Lighthouse verification pass at the end of a batch over repeated runs during implementation.
- If local Lighthouse on Windows hits temp-directory cleanup errors, use the generated report files for spot checks and rely on CI as the final authority.

## Current Baseline

- Route-level SEO and structured data are in place.
- Primary public images are delivered as WebP.
- Tests cover main routes, navigation, contact actions, SEO, and accessibility.
- Workflows are aligned with this `npm` + Vercel stack.

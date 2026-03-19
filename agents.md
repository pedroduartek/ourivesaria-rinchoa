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
- `src/routes/AppRoutes.tsx`: lazy-loaded SPA routes.
- `src/layouts/MainLayout.tsx`: shared shell with header, footer, skip link, suspense, and error boundary.
- `src/components/`: shared building blocks such as `Header`, `Footer`, `Carousel`, `ContactPanel`, and `ActionLink`.
- `assets/source-images/`: original JPG/PNG files used to regenerate web assets.
- `public/images/`: optimized WebP assets served publicly.
- `scripts/optimize-images.mjs`: WebP generation script.
- `.github/workflows/`: CI, bundle-size, and Lighthouse automation.

## Maintenance Workflow

- Update this file whenever architecture or quality expectations change.
- Prefer editing `src/content` over hardcoding copy into components.
- Validate both desktop and mobile behavior for visual changes.
- Do not reintroduce Firebase files or configuration; the deployment target is Vercel.
- Do not create commits or pushes on behalf of the user.

## Local Verification

- `npm run check`
- `npm test`
- `npm run test:coverage`
- `npm run build`
- `npm run size`

## Current Baseline

- Route-level SEO and structured data are in place.
- Primary public images are delivered as WebP.
- Tests cover main routes, navigation, contact actions, SEO, and accessibility.
- Workflows are aligned with this `npm` + Vercel stack.

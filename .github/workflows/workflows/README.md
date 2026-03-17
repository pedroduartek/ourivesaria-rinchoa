# Ourivesaria Rinchoa

A simple, deploy-ready Single Page Application for Ourivesaria Rinchoa.

Overview
- React + TypeScript SPA built with Vite and Tailwind CSS.
- Centralized content in `src/content/siteContent.ts` used across the app.

Tech stack
- React 19, TypeScript
- Vite, Tailwind CSS
- Vitest + Testing Library for tests

Useful scripts
- `npm run dev` — start dev server
- `npm run build` — create production build (output: `dist`)
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint
- `npm test` — run tests (Vitest)

Deployment (Vercel)
- The project includes `vercel.json` configured to use `dist` as the build output directory.
- Recommended: connect this GitHub repository to Vercel for automatic deploys on push.
- Manual deploy with Vercel CLI:
  1. `npm run build`
  2. `vercel --prod`

Notes
- `dist` and `node_modules` are ignored by default; continuous integration or the hosting platform should build the project.
- See `agents.md` for repository maintenance rules. Do not force-push `master` unless explicitly agreed by the maintainers.

Contact
- Pedro Duarte — pedroduartek@gmail.com

License
- MIT
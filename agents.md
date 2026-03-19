# agents.md

## Objetivo do projeto

- Manter um website institucional rápido, credível e simples de atualizar para a Ourivesaria Rinchoa.
- Centralizar conteúdo, SEO e dados de negócio para evitar duplicação entre páginas.
- Garantir prontidão para deploy estático na Vercel com uma baseline de qualidade verificável.

## Stack decidida

- React 19 com TypeScript.
- Vite 7 para desenvolvimento e build.
- Tailwind CSS 4 via plugin oficial do Vite.
- React Router para navegação SPA.
- Vitest, Testing Library, jest-axe e cobertura V8 para testes.
- ESLint para linting e `size-limit` para budgets de bundle.
- `sharp` para geração de imagens WebP otimizadas.

## Arquitetura atual

- `src/content/siteContent.ts`: copy, CTAs, navegação, galerias e conteúdo de página.
- `src/content/siteConfig.ts`: domínio canónico, dados da loja, imagem social default e dados usados no JSON-LD.
- `src/components/seo/PageSEO.tsx`: gestão de título, descrição, canonical, Open Graph, Twitter e structured data.
- `src/routes/AppRoutes.tsx`: rotas lazy-loaded da SPA.
- `src/layouts/MainLayout.tsx`: shell comum com header, footer, skip link, suspense e error boundary.
- `src/components/`: blocos partilhados como `Header`, `Footer`, `Carousel`, `ContactPanel` e `ActionLink`.
- `assets/source-images/`: originais JPG/PNG usados para regenerar os assets web.
- `public/images/`: assets WebP otimizados para entrega pública.
- `scripts/optimize-images.mjs`: regeneração dos WebP públicos.
- `.github/workflows/`: CI, bundle size e Lighthouse.

## Workflow de manutenção

- Atualizar este ficheiro sempre que a arquitetura ou a baseline de qualidade mudarem.
- Preferir atualizar `src/content` em vez de hardcode em componentes.
- Para alterações visuais, validar desktop e mobile.
- Não reintroduzir ficheiros ou config de Firebase; o alvo atual é Vercel.
- Não criar commits ou pushes em nome do utilizador.

## Verificação local

- `npm run check`
- `npm test`
- `npm run test:coverage`
- `npm run build`
- `npm run size`

## Estado após hardening

- SEO e structured data geridos por rota.
- Imagens públicas principais entregues em WebP.
- Testes cobrem rotas principais, navegação, ações de contacto, SEO e acessibilidade.
- Workflows alinhados com esta stack `npm` + Vercel.

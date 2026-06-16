# USQUARE CONSULTING Landing Page

Corporate landing page for USQUARE CONSULTING, built with Next.js App Router,
React, TypeScript, Tailwind CSS, and shadcn/ui primitives.

## Sections

- Navbar
- Hero
- Enterprise proof
- Services
- NEXTPLATFORM
- Methodology
- Case studies
- Industries
- Technology capabilities
- Final CTA
- Footer

## Content

Landing page copy and structured content live in:

```txt
src/content/landing-page.ts
```

Major page sections live in:

```txt
src/components/sections
```

Shared layout components live in:

```txt
src/components/layout
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Check

```bash
npm run lint
npm run build
```

## Cloudflare Pages

Cloudflare Pages should build from the latest `main` branch commit with Node.js
20 or newer.

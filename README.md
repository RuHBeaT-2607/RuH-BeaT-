# RUH 🫀BeaT

Premium mobile-first cinematic AI quote poster generator built with Next.js 15 and Gemini.

## Features
- Gemini-only quote generation via `@google/generative-ai`
- Mobile-first cinematic UI
- Category/mood/font/sky/background selectors
- Auto-styled quote canvas with grain and watermark
- PWA-ready config with `next-pwa`
- Rate-limited and sanitized API route
- SEO metadata (OpenGraph + Twitter cards)

## Setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Validation
```bash
npm run lint
npm run type-check
npm run build
```

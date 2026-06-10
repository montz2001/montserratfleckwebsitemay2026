# Montserrat Fleck — portfolio site

Personal job-hunt portfolio for Montserrat Fleck (social media strategist, NYC). Built with Next.js 16 and Tailwind CSS v4.

## Development

```bash
npm run dev
```

Open http://localhost:3000. Edit `app/page.tsx` to change the homepage; the résumé lives in `app/resume/`.

## Fonts

Loaded via `next/font/google`: Space Grotesk (sans) and Instrument Serif (serif). See `app/layout.tsx`. The Instrument Serif `.ttf` in `assets/` is used by the Open Graph image generator (`app/opengraph-image.tsx`).

## Build and deploy

```bash
npm run build
```

This is a static export (`output: "export"` in `next.config.ts`). The build writes static HTML/CSS/JS to `out/`, which is rsynced to the server and served by nginx (see `.github/workflows/`). There is no Node.js runtime on the server and no Vercel deploy.

Set `NEXT_PUBLIC_SITE_URL` to the production origin (e.g. `https://montserratfleck.com`) at build time so absolute URLs in metadata and JSON-LD resolve correctly.

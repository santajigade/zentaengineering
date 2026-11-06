# Zenta Engineering

Static site for zentaengineering.com, built with [Astro](https://astro.build) and hosted on Hostinger. The full plan (architecture, categories, URLs, SEO, roadmap) lives in the master plan doc.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at http://localhost:4321 |
| `npm run build` | Build the live site into `dist/` |

## Where things live

| Path | Contents |
| --- | --- |
| `src/data/disciplines.ts` | The 20 disciplines, 5 families and their subcategories. Slugs are permanent once live. |
| `src/data/site.ts` | Site settings: launch switch, review rule, ad slots, author, main menu |
| `src/content.config.ts` | Front matter schemas for articles, tutorials, interview sets, projects, resources |
| `src/content/<type>/` | Content files (Markdown) |
| `src/styles/tokens.css` | Brand colours, type and spacing (Route 1, Blueprint) |
| `design/` | Logo concepts and the brand board |

## Publishing rules

An item is live only when all are true:

1. `draft` is not `true`
2. `pubDate` is today or earlier
3. `reviewedDate` is set (technical review done)

Until `SITE.launched` is set to `true`, every page is `noindex` and `robots.txt` blocks all crawlers.

## Hostinger deployment

`.github/workflows/deploy.yml` builds the site and uploads `dist/` by FTP on every push to `main`, three times a day (06:00, 12:00, 18:00 IST) for scheduled items, and on demand.

Add these GitHub secrets (Settings > Secrets and variables > Actions): `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, from hPanel > Files > FTP Accounts. The FTP account should be rooted at the `public_html` folder of zentaengineering.com.

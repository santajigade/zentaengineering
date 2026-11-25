# Pinterest pins and IndexNow

## Pins
- Images: `/pins/<discipline>/<slug>.jpg`, 1000x1500, made at build time by `src/lib/pins.ts` (satori + resvg + sharp), cached in `.og-cache` (kept between GitHub builds by actions/cache). Only .csv pins (and past scheduled dates, so earlier pins keep their image) get images.
- Schedule: `src/data/pins.json` maps article id to release date, 4 a day from 2026-11-13. Order: pillar articles first, popular disciplines first, round-robin across disciplines. Articles not in the file are pinned the day after their pubDate. Add new articles to the end with `python3 scripts/make-pin-schedule.py` (optional).
- Publishing: weekly .csv bulk upload only (Pinterest Settings > Bulk create Pins). The RSS feed was removed on 2026-11-23.
- Video pins: when an article has `public/videos/<slug>-9x16.mp4`, its CSV row uses that MP4 (Thumbnail `00:03`, the poster frame; frame 0 is blank) instead of the static pin image.
- Manual pins: `src/data/pins-manual.json`. Every article uploaded by .csv; listed articles get images on the next deploy.
- "A lot now": `python3 scripts/pins-bulk.py "BOARD NAME" 10` adds the next 10 scheduled articles to pins-manual.json and writes the bulk-upload CSV; then deploy so the images exist before uploading the CSV.
- Preview a future day locally: `PINS_TODAY=2026-11-20 npx astro build`.
- Check the .csv pin images as Pinterestbot: run the "Check pin images" workflow (`check-feed.yml`). It paces requests because Hostinger's CDN returns 429 after about 30 fast requests.

## IndexNow
- Key file: `public/<32 hex>.txt`.
- After each deploy, `scripts/indexnow.py` hashes the `<main>` content of every sitemap URL, compares with the previous deploy (`.indexnow/hashes.json`, kept by actions/cache) and submits only new or changed URLs. It never fails the deploy.
- Submit everything once: run the "IndexNow (submit all pages)" workflow.

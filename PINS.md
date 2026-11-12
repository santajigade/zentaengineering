# Pinterest pins and IndexNow

## Pins
- Images: `/pins/<discipline>/<slug>.jpg`, 1000x1500, made at build time by `src/lib/pins.ts` (satori + resvg + sharp), cached in `.og-cache` (kept between GitHub builds by actions/cache). Only released or manual pins get images.
- Schedule: `src/data/pins.json` maps article id to release date, 4 a day from 2026-11-13. Order: pillar articles first, popular disciplines first, round-robin across disciplines. Articles not in the file are pinned the day after their pubDate. Add new articles to the end with `python3 scripts/make-pin-schedule.py` (optional).
- Feed: `/pins/feed.xml`, RSS 2.0 with media namespace, latest 60 released pins, UTM-tagged links. Rebuilt daily at 09:00 IST by `.github/workflows/deploy.yml`.
- Manual pins: `src/data/pins-manual.json`. Listed articles get images but never enter the feed, so .csv uploads are not pinned twice.
- "A lot now": `python3 scripts/pins-bulk.py "BOARD NAME" 10` adds the next 10 scheduled articles to pins-manual.json and writes the bulk-upload CSV; then deploy so the images exist before uploading the CSV.
- Preview a future day locally: `PINS_TODAY=2026-11-20 npx astro build`.
- Check the live feed as Pinterestbot: run the "Check pin feed" workflow.

## IndexNow
- Key file: `public/<32 hex>.txt`.
- After each deploy, `scripts/indexnow.py` hashes the `<main>` content of every sitemap URL, compares with the previous deploy (`.indexnow/hashes.json`, kept by actions/cache) and submits only new or changed URLs. It never fails the deploy.
- Submit everything once: run the "IndexNow (submit all pages)" workflow.

# Video backfill run (separate weekday task, added 2026-11-25)

Makes 15 blue-grid explainer videos a day for older articles, on top of the 6 the daily article run makes (DAILY_RUN.md step 2c). Santaji asked on 2026-11-25 to speed up the backlog.

1. Take the first 15 paths in `video-backlog.txt` (it is ordered so upcoming Pinterest pins get their video first). Skip any that already have `public/videos/<slug>-9x16.mp4` and delete those lines.
2. Follow `scripts/video/README.md` exactly for each: write `scripts/video/specs/<slug>.js` from that article's own facts (every number, formula and claim must appear in the .mdx), accurate drawing, motion that follows the real physics, no em or en dashes.
3. `python3 scripts/video/make.py check <slugs>`, open every `/tmp/videocheck/<slug>-*.png` with the Read tool and fix any overlap, clipping or wrong geometry. Repeat until clean.
4. `python3 scripts/video/make.py web <slugs> --jobs 3`, then `python3 scripts/video/insert.py <discipline>/<slug> "How a ... works"` for each.
5. Delete the finished lines from `video-backlog.txt`. If a video cannot be made right, skip it and leave its line.
6. `scripts/deploy.sh "Explainer videos: <N> backlog articles"`, then wait for the "Build and deploy to Hostinger" run to succeed (`gh run list -L1 --workflow deploy.yml`). If it fails, read `gh run view --log-failed`, fix and push again. Never push a failing build.
7. Report: number of videos added, slugs skipped and why, and how many lines are left in `video-backlog.txt`. When the backlog is empty, say so and that this scheduled task can be turned off.

# Daily publishing run

Each day, write and publish the next 5 articles (owner changed from 6 to 5 on 2026-11-20) from `content-queue.txt`. Read `AUTHORING.md` first; every rule there applies. Copy the structure of an existing article in the same discipline (front matter, imports, Key, Example, SVG figure, FAQ, references).

## 1. Pick topics
```
python3 scripts/queue.py next 5
```
Each line: discipline|subcategory|title|slug|format|focus keyword|status.
File path: `src/content/articles/<discipline>/<slug>.mdx`. Skip any slug that already exists.

## 2. Write each article (hard rules)
- 1000 to 1800 words as counted by `scripts/check-article.py`. Aim for about 1400 including the sections below; drafts usually come out short, so include one extra section from the start.
- No em dashes or en dashes anywhere. Hyphens inside words are fine.
- Front matter: pubDate and reviewedDate both = today's date in IST (YYYY-MM-DD). `pillar: false`. `math: true` only if KaTeX is used.
- Authors are set automatically (Electronics: Santaji Gadepatil; Manufacturing: Sandip Gadade; others: Editorial Staff, reviewed by Technical Team). Leave `author` and `reviewedBy` out of front matter.
- SEO: focus keyword in slug, title (60 characters or fewer), description (120 to 150 characters), first paragraph, and at least one H2. At least 3 H2s.
- One accurate SVG diagram, viewBox based, with no overlapping or clipped text. Use `&#123;` and `&#125;` for braces in SVG.
- Animation (default for every article): animate the main diagram wherever any motion, flow, sequence or change can be shown, which is almost every engineering topic: current, fluid, heat, data or signal flow (`anim-flow`, `anim-flow-slow`, `anim-flow-rev` on a light dashed path drawn on top of the coloured line), rotating parts such as motors, pumps, fans, gears and turbines (`anim-spin`), process steps or cycle stages highlighted in order (`anim-blink` with delays `anim-d1` to `anim-d5`), and key points or sources (`anim-pulse`). Put `class="anim"` on the `<figure>`. Only skip animation when nothing in the topic moves or changes. The diagram must be correct when still; text stays static; motion must follow the real physics (correct flow direction, rotation sense). Never use GIF files; the only video in an article is the blue-grid explainer added in step 2c. Example: renewable-energy/how-solar-pv-systems-work.mdx.
- Short answer: the `<Key title="Short answer">` box right after the imports is a direct, self-contained answer to the focus keyword in 40 to 60 words (the featured snippet and AI Overview target). Start with the keyword and a definition; no lists inside.
- Key formulas: when the article uses equations (math: true), add an H2 "Key formulas for <topic>" with a Markdown table: Quantity | Formula | Symbols and units. Formulas must match the article and its references.
- Interview and viva questions: before the end, add an H2 "<Topic> interview and viva questions" with 5 numbered questions, each a bold question followed by a 1 to 2 sentence answer. Answers must be consistent with the article; no new unreferenced numbers.
- A worked Example with Given, Find, Assumptions, Solution, Answer, Limitations. Check the arithmetic by running it in Python.
- FAQ with exactly 3 questions in front matter; 4 or more real references (standards, textbooks, official handbooks).
- Internal links ONLY to articles that already exist in `src/content/` (check with ls). Never link to queued or unwritten slugs.
- instrumentationblog.in: at most 1 link per article, in body text only (never in Related reading), only when it directly helps the reader, and only to URLs listed in `scripts/instrumentationblog-verified.txt`. Most articles need none. See AUTHORING.md, Links.
- Calculator: embed `<Calculator path="category/slug" title="..." />` only when a path in `scripts/zentacalculator-list.txt` directly matches the topic. Otherwise no calculator.
- MDX safety: no curly braces in prose; no "<" followed by a letter in prose; no markdown links inside `<dd>`; imports exactly `import Example from '../../../components/Example.astro';` (same pattern for Key and Calculator), never `':../`.

## 2b. Upgrade 8 existing articles
Take the first 8 file paths in `upgrade-backlog.txt`. For each, bring it up to the current format without changing facts or slug: animate its diagram(s) per the animation rule (no change to geometry or text), rewrite the Short answer box to 40 to 60 words, add the Key formulas table if it uses equations, and add the interview and viva questions section. Use renewable-energy/how-solar-pv-systems-work.mdx as the model. Set `updatedDate` to today. Delete those 8 lines from `upgrade-backlog.txt`. Check them exactly like new articles (missing= must be empty). If the backlog is empty, skip this step.

## 2c. Explainer videos (every new article, plus 6 from the backlog)
Every article must have a blue-grid explainer video. Follow `scripts/video/README.md` exactly; it holds the owner's style rules.
1. For each new article from step 2, and for the first 6 paths in `video-backlog.txt`, write `scripts/video/specs/<slug>.js` (copy an existing spec). Every fact, number and formula must come from that article. The drawing must be an accurate cutaway or schematic, and the motion must follow the real physics.
2. `python3 scripts/video/make.py check <slugs>`, then open every `/tmp/videocheck/<slug>-*.png` with the Read tool and fix any overlap, clipping or wrong geometry. Repeat until clean.
3. `python3 scripts/video/make.py web <slugs> --jobs 3` (writes `public/videos/<slug>-16x9.mp4`, `-9x16.mp4` and posters).
4. `python3 scripts/video/insert.py <discipline>/<slug> "How a ... works"` for each article.
5. Delete the finished backlog lines from `video-backlog.txt`.
If a video cannot be made right, skip it (leave the backlog line, and publish the new article without the video) rather than publish a wrong one. Mention it in the report.

## 3. Check and fix
```
python3 scripts/check-article.py <files>   (new and upgraded files; words 1000 to 1800, dashes=0, missing=[] for each)
python3 scripts/seo-check.py <files>
python3 scripts/render-svgs.py <files>
```
Open each `/tmp/svgcheck/<slug>-0.png` with the Read tool and fix any overlap, clipping or wrong geometry. Repeat until all three checks are clean.

## 4. Publish
```
scripts/deploy.sh "Add <N> articles: <slugs>"
python3 scripts/queue.py done <slug1> <slug2> ...
git add content-queue.txt && git commit -qm "Queue: mark published" && git push -q
gh run list -L1
```
deploy.sh builds featured images, runs the build and the internal link checker, commits and pushes. Pushing to main deploys to Hostinger via GitHub Actions. Wait for the gh run to show success; if it fails, read `gh run view --log-failed`, fix, and push again.

If an article cannot be made to pass all checks, leave it out of the push, keep its status "todo", and publish the rest. Never push a failing build.

## 5. Report
Finish with a short summary: titles published, videos added (new and backlog, with the number left in `video-backlog.txt`), any skipped, and the gh run result. When `scripts/queue.py stats` shows fewer than 12 todo items, say the queue needs refilling.

# Daily publishing run

Each day, write and publish the next 6 articles from `content-queue.txt`. Read `AUTHORING.md` first; every rule there applies. Copy the structure of an existing article in the same discipline (front matter, imports, Key, Example, SVG figure, FAQ, references).

## 1. Pick topics
```
python3 scripts/queue.py next 6
```
Each line: discipline|subcategory|title|slug|format|focus keyword|status.
File path: `src/content/articles/<discipline>/<slug>.mdx`. Skip any slug that already exists.

## 2. Write each article (hard rules)
- 1000 to 1500 words as counted by `scripts/check-article.py`. Aim for about 1300; drafts usually come out short, so include one extra section from the start.
- No em dashes or en dashes anywhere. Hyphens inside words are fine.
- Front matter: pubDate and reviewedDate both = today's date in IST (YYYY-MM-DD). `pillar: false`. `math: true` only if KaTeX is used.
- Authors are set automatically (Electronics: Santaji Gadepatil; others: Editorial Staff, reviewed by Technical Team). Leave `author` and `reviewedBy` out of front matter.
- SEO: focus keyword in slug, title (60 characters or fewer), description (120 to 150 characters), first paragraph, and at least one H2. At least 3 H2s.
- One accurate SVG diagram, viewBox based, with no overlapping or clipped text. Use `&#123;` and `&#125;` for braces in SVG.
- Animation (default for every article): animate the main diagram wherever any motion, flow, sequence or change can be shown, which is almost every engineering topic: current, fluid, heat, data or signal flow (`anim-flow`, `anim-flow-slow`, `anim-flow-rev` on a light dashed path drawn on top of the coloured line), rotating parts such as motors, pumps, fans, gears and turbines (`anim-spin`), process steps or cycle stages highlighted in order (`anim-blink` with delays `anim-d1` to `anim-d5`), and key points or sources (`anim-pulse`). Put `class="anim"` on the `<figure>`. Only skip animation when nothing in the topic moves or changes. The diagram must be correct when still; text stays static; motion must follow the real physics (correct flow direction, rotation sense). Never use GIF or video files. Example: renewable-energy/how-solar-pv-systems-work.mdx.
- A worked Example with Given, Find, Assumptions, Solution, Answer, Limitations. Check the arithmetic by running it in Python.
- FAQ with exactly 3 questions in front matter; 4 or more real references (standards, textbooks, official handbooks).
- Internal links ONLY to articles that already exist in `src/content/` (check with ls). Never link to queued or unwritten slugs.
- instrumentationblog.in: at most 1 link per article, in body text only (never in Related reading), only when it directly helps the reader, and only to URLs listed in `scripts/instrumentationblog-verified.txt`. Most articles need none. See AUTHORING.md, Links.
- Calculator: embed `<Calculator path="category/slug" title="..." />` only when a path in `scripts/zentacalculator-list.txt` directly matches the topic. Otherwise no calculator.
- MDX safety: no curly braces in prose; no "<" followed by a letter in prose; no markdown links inside `<dd>`; imports exactly `import Example from '../../../components/Example.astro';` (same pattern for Key and Calculator), never `':../`.

## 2b. Animate 12 existing articles
Take the first 12 file paths in `anim-backlog.txt`. For each, add animation to its existing diagram(s) using the rules above, without changing the diagram's geometry or text. If nothing in a diagram can sensibly move, leave it static. Delete those 12 lines from `anim-backlog.txt`. Render them with render-svgs.py and check them like new articles. If the backlog is empty, skip this step.

## 3. Check and fix
```
python3 scripts/check-article.py <files>   (new and re-animated files)
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
Finish with a short summary: titles published, any skipped, and the gh run result. When `scripts/queue.py stats` shows fewer than 12 todo items, say the queue needs refilling.

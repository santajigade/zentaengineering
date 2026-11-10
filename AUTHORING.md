# Zenta Engineering authoring guide

Rules for every article, lesson, interview set, project and resource. The public version of these rules is the Editorial Policy page (`src/pages/editorial-policy.md`).

## Audience and voice
- Engineering students (diploma and degree) and working engineers, worldwide. Explain from first principles, then connect to real equipment and practice.
- Plain technical English, short sentences, active voice. International spelling is fine; be consistent within an article.
- **No dashes between phrases.** Never use an em dash or en dash. Use commas, colons, full stops or brackets. Ranges use "to" (`10 to 30 kW`). Hyphens inside words are fine (step-by-step, three-phase, non-destructive).
- SI units first (kW, kPa, °C, m³/h). Add other units only where the topic is region specific.

## Accuracy rules (non-negotiable)
1. Every number, definition and claim must come from a reference listed in `references`. If it cannot be verified, leave it out.
2. Standards: cite number, title and edition year (for example `IEC 60076-1:2011 Power transformers, Part 1: General`). Never copy text from a standard; summarize and cite.
3. No invented case studies, test data, survey results, quotes or "industry statistics".
4. Worked examples always show Given, Find, Assumptions, Solution, Answer (with units) and Limitations.
5. Set `reviewedDate` equal to `pubDate` (owner approved auto publishing on 6 Nov 2026). Do not set `reviewedBy` unless a named person reviewed it.

## Authors and review (approved 6 Nov 2026)
- Electronics Engineering articles: **Santaji Gadepatil** (set automatically for `discipline: electronics-engineering`).
- All other disciplines: **Editorial Staff**.
- Reviewer shown as **Technical Team** unless `reviewedBy` names someone else.
- Leave `author` empty unless an article needs a different author from the rule above.

## File and slug
- Articles: `src/content/articles/<discipline>/<slug>.mdx` (MDX so components such as the calculator can be used). URL becomes `/<discipline>/<slug>/`.
- Slug: lowercase, hyphens, 3 to 6 words, the main search phrase (`transformer-working-principle`). It must not equal a subcategory slug in the same discipline.
- Tutorials: `src/content/tutorials/<series>/<lesson-slug>.md` with `series` and `order`.

## SEO rules (checked by `python3 scripts/seo-check.py`)
- Every article has one `focusKeyword`: the main phrase people search for.
- The slug is built from the focus keyword (`what-is-a-diode`, `buck-converter`).
- The focus keyword appears in the title (ideally near the start), the meta description, the first paragraph and at least one H2.
- Title up to 60 characters so Google shows it in full; description 120 to 160 characters.
- At least 3 H2 sections; use the keyword naturally, never stuffed.
- Do not change a slug after the site launches without adding a 301 redirect in `public/.htaccess`.

## Front matter (articles)
```yaml
---
title: "How a Transformer Works: Principle, Construction and Losses" # max 70
description: "..."                       # max 160, no dashes
pubDate: 2026-12-01
focusKeyword: "transformer working principle"
discipline: electrical-engineering      # slug from src/data/disciplines.ts
subcategory: transformers               # slug from src/data/disciplines.ts
format: working-principle               # fundamentals | working-principle | explanation | troubleshooting | comparison | equipment | application | case-study | tutorial
pillar: false                           # true for the main article of a subcategory cluster
tags: [transformer, emf-equation]
image: { src: /images/featured/<slug>.webp, alt: "..." }
faq:                                    # 3 to 6 genuine questions
  - q: "..."
    a: "..."
references:
  - text: "IEC 60076-1:2011 Power transformers, Part 1: General"
  - text: "S. J. Chapman, Electric Machinery Fundamentals, 5th ed., McGraw-Hill"
---
```

## Body structure
Not every article has the same sections. Start from the outline for its format, then delete or reorder.

| Format | Starting outline |
| --- | --- |
| fundamentals | Short answer, Definition, Key concepts, Equations, Worked example, Applications, FAQ |
| working-principle | Short answer, Principle, Construction, Operation step by step, Equations, Types, Advantages and limitations, Applications, FAQ |
| troubleshooting | Short answer, Symptoms, Likely causes, Diagnostic steps (table: symptom, cause, check, fix), Prevention, Safety, FAQ |
| comparison | Short answer, Comparison table, Differences explained, When to use which, FAQ |
| equipment | Short answer, What it is, Parts, How it works, Selection points, Maintenance, FAQ |

Always:
- Open with a 2 to 3 sentence direct answer.
- `##` for main sections, `###` below them. One `#` only (the title, set by the layout).
- Diagrams as SVG with a caption. Equations in LaTeX (`$$ ... $$`).
- Length: **1,000 to 1,500 words** of body text (FAQ not counted).

## Components (MDX)
```mdx
import Key from '../../../components/Key.astro';
import Example from '../../../components/Example.astro';
import Calculator from '../../../components/Calculator.astro';

<Key title="Short answer"> ... </Key>
<Example> <dl><dt>Given</dt><dd>...</dd> ... </dl> </Example>
<Calculator path="electrical/transformer-turns-ratio" title="Transformer Turns Ratio Calculator" />
```
- `Calculator` embeds a live calculator from zentacalculator.com. `path` is the calculator's `category/slug` there. Check the calculator exists before using it.
- Equations: set `math: true` in front matter and write `$$ ... $$` blocks.
- Diagrams: inline SVG inside `<figure>` with a `<figcaption>`. Check the rendered diagram: no text may overlap lines, shapes or other text.

## Review
- The owner has approved auto publishing: every new article gets `reviewedDate` equal to its `pubDate`, so it shows "Reviewed by Technical Team" and no Draft label.

## Featured image
- Every article gets a 1200x630 featured image: run `python3 scripts/make-featured.py <file.mdx>` after writing. It uses the first SVG in the article, or `scripts/featured-art/<slug>.svg` if present, and adds the `image:` front matter line.

## MDX gotchas
- Curly braces in prose ({u}) are read as code and break the build. Use them only inside $$ math or code.

## Links
- 3 to 6 internal links to related Zenta Engineering articles, with descriptive anchor text. Link only to pages that are already live. Pillar articles link to every article in their cluster.
- ZentaCalculator.com: embed a calculator ONLY when it directly matches the article topic (owner rule, 6 Nov 2026). If no topic calculator exists, embed none. Never embed a loosely related one just to have one.
- InstrumentationBlog.in (owner rule, 8 Nov 2026, to keep cross-site linking natural):
  - At most ONE InstrumentationBlog.in link per article, and only when that page explains something better than a Zenta Engineering page would (sensors, transmitters, analyzers, control valves, loop control, specific circuit topics).
  - Put it in body text where it helps the reader. Never in "Related reading", which is for Zenta Engineering pages only.
  - Skip it when the match is loose. Many articles should have none. Prefer a specific article over a category page, and never write "see more on InstrumentationBlog" style promo sentences.
- External references: link to the publisher or standards body page, not to pirated copies.

## Animated diagrams
Optional, for topics where motion explains the idea (flows, signals, rotation, cycles). Use animated inline SVG, never GIF or video. Add `class="anim"` to the `<figure>`; the page adds a Pause button and respects reduced motion settings. Classes (defined in src/styles/global.css): `anim-flow`, `anim-flow-slow`, `anim-flow-rev`, `anim-pulse`, `anim-spin`, `anim-blink`, delays `anim-d1` to `anim-d3`. Example: renewable-energy/how-solar-pv-systems-work.mdx.

# Blue-grid explainer videos

Every article gets a short animated explainer video, shown inside the article (16:9 on desktop, 9:16 on phones) and also used for social media. One spec file per article drives everything.

## Files
- `blue.html`: the template (grid, header, title, drawing, three step cards, key fact card, end card). Do not edit per article.
- `lib.js`: drawing helpers and colours: `LB` (#7fd3ff outlines), `TL` (#13a89e fills), `NV` (#0e3a5c dark fill), `ring(cx,cy,r1,r2,fill)`, `P(cx,cy,r,deg)` (point on a circle).
- `specs/<slug>.js`: the per-article content. Copy an existing spec as a starting point.
- `make.py`: `check`, `web` and `social` modes (see the docstring).
- `insert.py`: adds `<ArticleVideo>` to the article after the intro paragraph.
- `music.py`: original 124 BPM beat (kick, offbeat hats, bass arpeggio, soft pad), seeded by slug. No copyrighted music.

## Writing a spec
```js
BLUE['<slug>'] = {
  pill: 'MECHANICAL',                       // discipline in capitals
  title: 'How a <em>Centrifugal Pump</em> Works', // key term in <em> (yellow); keep to 2 lines
  svg: `...`,                               // drawing in viewBox 0 0 1000 760
  labels: [[tx, ty, 'Text', ax, ay, 'start'|'middle'|'end'], ...], // label position, then the point the leader line touches
  steps: [['Plain words with <b>key terms</b>.', ['partId', ...]], x3], // each step glows the listed ids
  fact: ['Main formula or number', 'One short supporting sentence.'],
  end: 'What the full article covers (one sentence).',
  caption: 'Social caption.', tags: ['#Tag1', ..., '#ZentaEngineering'],   // 5 hashtags
};
```

Rules (from the owner's blue-grid spec, see the project doc "social-video-style-blue-grid"):
- **Facts only from the article.** Every number, formula and claim in the steps and key fact must appear in the article's .mdx. Never invent.
- **Drawing:** an accurate 2D cutaway or schematic of the equipment. Light blue outlines `LB`, teal fills `TL`, white moving parts, yellow labels (labels are drawn by the template from `labels`). Wrap each top level part in `<g class="part" id="...">` so it builds in and can glow.
- **Motion follows real physics:** correct rotation sense, flow direction and sequence. Classes: `flow` (moving dashes along the path direction, draw the path from source to destination; `style="--p:1s"` sets speed), `spin-cw` / `spin-ccw` (on an inner `<g>`, never on the `.part` group), `pulse`, `finger` (press wave). Arrow markers: `url(#ah)` (colour of the stroke) and `url(#ahw)` (white).
- **Text:** no em or en dashes anywhere. Steps under about 110 characters, key fact line under about 40 characters. No overlapping labels: keep label text outside busy areas, use the leader line to point in.
- Title in the "How a ... Works" style.

## Workflow for one or more articles
```
python3 scripts/video/make.py check <slug> ...       # writes /tmp/videocheck/*.png
```
Open every still with the Read tool (16x9, 9x16 and 1350 sizes) and fix overlap, clipping, wrong geometry or wrong motion. Repeat until clean. Then:
```
python3 scripts/video/make.py web <slug> ... --jobs 3     # public/videos/<slug>-16x9.mp4, -9x16.mp4, posters
python3 scripts/video/insert.py <discipline>/<slug> "How a ... works"
```
`make.py social <slug>` makes the 22 s 1080x1920 and 1080x1350 files in /tmp/social/ when social videos are requested.

Rendering needs Chrome (google-chrome or chromium), ffmpeg, and Python packages playwright, numpy and scipy (`pip install --break-system-packages playwright numpy scipy`). Web rendering takes about 2 to 3 minutes per article.

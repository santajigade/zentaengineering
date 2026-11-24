# Builds a 1200x630 featured image for each article: discipline chip, title, and the article's first SVG diagram
# (or scripts/featured-art/<slug>.svg if present) on a large white card. The diagram is cropped to its content and its
# labels are enlarged (up to 1.4x, smaller if a larger size would overlap other labels, lines or shapes, or clip) so the
# text stays readable (owner request 24 Nov 2026: keep diagrams, but readable).
# Writes public/images/featured/<slug>.webp (shown on the page) and .jpg (social sharing),
# and adds an `image:` line to the article front matter if missing.
# Usage: python3 scripts/make-featured.py [files...]   (default: all articles)  --force to rebuild existing
import re, sys, os, glob, subprocess, html
from PIL import Image
# scripts/queue.py would shadow the stdlib queue module that playwright needs
sys.path = [d for d in sys.path if os.path.abspath(d or '.') != os.path.dirname(os.path.abspath(__file__))]

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'public/images/featured')
TMP = '/tmp/featured'
os.makedirs(OUT, exist_ok=True); os.makedirs(TMP, exist_ok=True)
font = os.path.join(ROOT, 'node_modules/@fontsource-variable/open-sans/files/open-sans-latin-wght-normal.woff2')
mark = re.sub(r' width="64" height="64"', '', open(os.path.join(ROOT, 'public/brand/zenta-engineering-mark.svg')).read())
disc_src = open(os.path.join(ROOT, 'src/data/disciplines.ts')).read()
names = dict(re.findall(r"slug: '([a-z-]+)', name: '([^']+)'", disc_src))


_pw = _br = None
DBG = os.environ.get('FEAT_DEBUG')
# Set label sizes: ks[i] scales the i-th <text> (its tspans follow). Stacked lines of one label (same x and anchor,
# one line apart) share a scale and spread about their centre so they do not collide. Then crop the viewBox to the content.
JS_APPLY = """(ks) => {
  const svg = document.querySelector('.card > svg');
  const tx = [...svg.querySelectorAll('text')];
  if (!svg.dataset.init) {
    svg.dataset.init = 1;
    svg.querySelectorAll('text, tspan').forEach(t => t.dataset.fs = parseFloat(getComputedStyle(t).fontSize));
    const num = v => /^-?[0-9.]+$/.test(v || '');
    const free = tx.filter(t => !t.getAttribute('transform') && num(t.getAttribute('x')) && num(t.getAttribute('y')));
    free.forEach(t => t.dataset.y0 = t.getAttribute('y'));
    let gid = 0; const seen = new Set();
    free.forEach(t => {
      if (seen.has(t)) return;
      const g = [t]; seen.add(t); let grew = true;
      while (grew) { grew = false;
        free.forEach(u => { if (seen.has(u)) return;
          if (Math.abs(+u.getAttribute('x') - +t.getAttribute('x')) < 1.5 && getComputedStyle(u).textAnchor === getComputedStyle(t).textAnchor &&
              g.some(v => Math.abs(+u.dataset.y0 - +v.dataset.y0) <= 1.7 * +v.dataset.fs)) { g.push(u); seen.add(u); grew = true; } }); }
      const c = g.reduce((s, v) => s + +v.dataset.y0, 0) / g.length;
      g.forEach(v => { v.dataset.c = c; v.dataset.g = gid; }); gid++;
    });
    tx.forEach((t, i) => { if (t.dataset.g === undefined) t.dataset.g = 'x' + i; });
  }
  tx.forEach((t, i) => {
    const k = ks[i];
    t.style.fontSize = (t.dataset.fs * k) + 'px';
    t.querySelectorAll('tspan').forEach(s => s.style.fontSize = (s.dataset.fs * k) + 'px');
    if (t.dataset.c !== undefined) t.setAttribute('y', +t.dataset.c + (+t.dataset.y0 - +t.dataset.c) * k);
  });
}"""
JS_FIT = """() => {
  const svg = document.querySelector('.card > svg');
  svg.removeAttribute('viewBox');
  const b = svg.getBBox(), pad = 6;
  svg.setAttribute('viewBox', `${b.x - pad} ${b.y - pad} ${b.width + 2 * pad} ${b.height + 2 * pad}`);
  const box = svg.getBoundingClientRect();
  return Math.min(box.width / (b.width + 2 * pad), box.height / (b.height + 2 * pad));
}"""
JS_INFO = """() => [...document.querySelectorAll('.card > svg text')].map(t => { const r = t.getBoundingClientRect();
  return [r.left, r.top, r.right, r.bottom, +t.dataset.fs, t.dataset.g, t.textContent]; })"""
KMAX, MAXPX = 1.4, 22   # largest label scale, largest median label size in px on the 1200x630 image


def _frac(px, w, h, r):
    """Share of non-white pixels under rect r in the label-free render."""
    x0, y0, x1, y1 = max(0, int(r[0])), max(0, int(r[1])), min(w, int(r[2]) + 1), min(h, int(r[3]) + 1)
    if x1 <= x0 or y1 <= y0:
        return 0.0
    n = sum(1 for y in range(y0, y1) for x in range(x0, x1) if min(px[x, y]) < 240)
    return n / ((x1 - x0) * (y1 - y0))


def _tight(r):   # glyph box without the line gap above and below
    h = (r[3] - r[1]) * 0.14
    return (r[0], r[1] + h, r[2], r[3] - h)


def _hit(a, c):
    return min(a[2], c[2]) - max(a[0], c[0]) > 1 and min(a[3], c[3]) - max(a[1], c[1]) > 1


def render(p, has_svg):
    """Screenshot p.html to p.png with all diagram labels enlarged by the largest common scale (up to KMAX) at which
    no label newly touches another label, a line or shape, or the card edge. Returns that scale."""
    global _pw, _br
    if _pw is None:
        from playwright.sync_api import sync_playwright
        _pw = sync_playwright().start()
        exe = next((x for x in ['/usr/bin/google-chrome', '/usr/bin/chromium'] if os.path.exists(x)), None)
        _br = _pw.chromium.launch(**({'executable_path': exe} if exe else {}))
    pg = _br.new_page(viewport={'width': 1200, 'height': 630})
    pg.goto('file://' + p + '.html')
    pg.evaluate('document.fonts.ready')
    n = pg.evaluate("document.querySelectorAll('.card > svg text').length") if has_svg else 0
    ks = [1.0] * n
    if n:
        card = pg.evaluate("(() => { const r = document.querySelector('.card').getBoundingClientRect(); return [r.left, r.top, r.right, r.bottom]; })()")
        pg.evaluate(JS_APPLY, ks); scale = pg.evaluate(JS_FIT)
        info = pg.evaluate(JS_INFO)
        fs = sorted(i[4] for i in info)
        for k in [x / 10 for x in range(int(KMAX * 10), 10, -1)]:
            if fs[len(fs) // 2] * k * scale > MAXPX:
                continue
            pg.evaluate(JS_APPLY, [k] * n); pg.evaluate(JS_FIT)
            big = pg.evaluate(JS_INFO)
            pg.evaluate(JS_APPLY, [1.0] * n)
            small = pg.evaluate(JS_INFO)
            pg.evaluate(JS_APPLY, [k] * n)
            pg.add_style_tag(content='.card > svg text{visibility:hidden}')
            pg.screenshot(path=p + '-base.png')
            pg.evaluate("(() => { const a = document.querySelectorAll('style'); a[a.length - 1].remove(); })()")
            im = Image.open(p + '-base.png').convert('RGB'); px = im.load(); W, H = im.size
            ok = True
            for i, r in enumerate(big):
                if r[2] - r[0] < 1:
                    continue
                if r[0] < card[0] + 2 or r[1] < card[1] + 2 or r[2] > card[2] - 2 or r[3] > card[3] - 2:
                    ok = False; DBG and print(k, 'clip', r[6]); break
                if abs(_frac(px, W, H, r) - _frac(px, W, H, small[i])) > 0.02:
                    ok = False; DBG and print(k, 'shape', r[6]); break
                if any(big[j][5] != r[5] and _hit(_tight(r), _tight(big[j])) and not _hit(_tight(small[i]), _tight(small[j])) for j in range(i)):
                    ok = False; DBG and print(k, 'text', r[6]); break
            if ok:
                ks = [k] * n
                break
        pg.evaluate(JS_APPLY, ks); pg.evaluate(JS_FIT)
    pg.screenshot(path=p + '.png')
    pg.close()
    return ks[0] if ks else 1.0


args = [a for a in sys.argv[1:] if not a.startswith('--')]
force = '--force' in sys.argv
files = args or sorted(glob.glob(os.path.join(ROOT, 'src/content/articles/*/*.mdx')))

for f in files:
    s = open(f).read()
    fm = s.split('---', 2)[1]
    slug = os.path.basename(f)[:-4]
    if os.path.exists(f'{OUT}/{slug}.webp') and not force and 'image:' in fm:
        continue
    title = re.search(r'^title: "(.*)"$', fm, re.M).group(1)
    disc = re.search(r'^discipline: (\S+)', fm, re.M).group(1)
    custom = os.path.join(ROOT, 'scripts/featured-art', slug + '.svg')
    src = open(custom).read() if os.path.exists(custom) else s.split('---', 2)[2]
    m = re.search(r'<svg.*?</svg>', src, re.S)
    if m:
        art = m.group(0)
        head, rest = art.split('>', 1)
        head = re.sub(r' (width|height)="[^"]*"', '', head)
        art = head.replace('<svg ', '<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" ', 1) + '>' + rest
    else:
        art = mark.replace('<svg ', '<svg width="260" height="260" ', 1)
    page = f"""<html><head><style>
@font-face{{font-family:'Open Sans Variable';src:url(file://{font})}}
*{{box-sizing:border-box;margin:0}} body{{width:1200px;height:630px;font-family:'Open Sans Variable',Arial,sans-serif;display:flex;flex-direction:column;background:#0b2545;overflow:hidden;color:#fff}}
.top{{padding:16px 28px 0;display:flex;align-items:center;gap:16px}}
.chip{{background:#13a89e;font-size:17px;font-weight:600;padding:6px 14px;border-radius:999px}}
.brand{{margin-left:auto;display:flex;align-items:center;gap:10px;font-size:20px}} .brand svg{{width:38px;height:38px}}
.brand b{{font-weight:800}} .brand span{{color:#9fd9d4}}
h1{{padding:6px 28px 0;font-size:34px;line-height:1.15;font-weight:800;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}}
.card{{flex:1;min-height:0;margin:12px 20px 20px;background:#fff;border-radius:14px;padding:8px 12px;border-top:5px solid #f5b800;display:flex;align-items:center;justify-content:center}}
.card > svg{{width:100%;height:100%;display:block}}
</style></head><body>
<div class="top"><div class="chip">{html.escape(names.get(disc, disc))}</div>
<div class="brand">{mark.replace('<svg ', '<svg width="38" height="38" ', 1)}<div><b>Zenta</b> <span>Engineering</span></div></div></div>
<h1>{html.escape(title)}</h1>
<div class="card">{art}</div></body></html>"""
    p = f'{TMP}/{slug}'
    open(p + '.html', 'w').write(page)
    k = render(p, bool(m))
    im = Image.open(p + '.png').convert('RGB')
    im.save(f'{OUT}/{slug}.webp', 'WEBP', quality=82, method=6)
    im.save(f'{OUT}/{slug}.jpg', 'JPEG', quality=85, optimize=True, progressive=True)
    im.resize((600, 315), Image.LANCZOS).save(f'{OUT}/{slug}-thumb.webp', 'WEBP', quality=78, method=6)  # card thumbnail
    if 'image:' not in fm:
        alt = f'{title}: featured diagram'.replace('"', "'")
        line = f'image: {{ src: /images/featured/{slug}.webp, alt: "{alt}" }}'
        s = re.sub(r'^(focusKeyword: .*)$', lambda m: m.group(1) + '\n' + line, s, count=1, flags=re.M)
        open(f, 'w').write(s)
    print(slug, f'text x{k}')
if _pw: _br.close(); _pw.stop()

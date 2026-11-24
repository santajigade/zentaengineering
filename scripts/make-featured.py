# Builds a 1200x630 featured image for each article from its title, discipline and an "In this article" list of
# FEATURED IMAGE LAYOUT IS FIXED (owner decision, 24 Nov 2026): title on the left, "In this article" list of the first 4 H2s on the right. Do not switch to the diagram layout.
# its first 4 sections in large text (diagrams shrunk to this size were unreadable; changed 23 Nov 2026).
# A hand-made scripts/featured-art/<slug>.svg, if present, is used on the right instead.
# Writes public/images/featured/<slug>.webp (shown on the page) and .jpg (social sharing),
# and adds an `image:` line to the article front matter if missing.
# Usage: python3 scripts/make-featured.py [files...]   (default: all articles)  --force to rebuild existing
import re, sys, os, glob, subprocess, html
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'public/images/featured')
TMP = '/tmp/featured'
os.makedirs(OUT, exist_ok=True); os.makedirs(TMP, exist_ok=True)
font = os.path.join(ROOT, 'node_modules/@fontsource-variable/open-sans/files/open-sans-latin-wght-normal.woff2')
mark = re.sub(r' width="64" height="64"', '', open(os.path.join(ROOT, 'public/brand/zenta-engineering-mark.svg')).read())
disc_src = open(os.path.join(ROOT, 'src/data/disciplines.ts')).read()
names = dict(re.findall(r"slug: '([a-z-]+)', name: '([^']+)'", disc_src))

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
    if os.path.exists(custom):
        art = re.search(r'<svg.*?</svg>', open(custom).read(), re.S).group(0)
        head, rest = art.split('>', 1)
        head = re.sub(r' (width|height)="\d+"', '', head)
        art = head.replace('<svg ', '<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" ', 1) + '>' + rest
    else:
        body = s.split('---', 2)[2]
        skip = re.compile(r'related|interview|viva|formula|faq|question|reference|worked example|summary|conclusion', re.I)
        hs = [re.sub(r'[*_`]|\[([^\]]*)\]\([^)]*\)', r'\1', h).strip() for h in re.findall(r'^## (.+)$', body, re.M)]
        hs = [h for h in hs if not skip.search(h)][:4]
        items = ''.join(f'<li><b>{i + 1:02d}</b><span>{html.escape(h)}</span></li>' for i, h in enumerate(hs))
        art = f'<div class="list"><div class="lt">In this article</div><ol>{items}</ol></div>' if hs else mark.replace('<svg ', '<svg width="260" height="260" ', 1)
    page = f"""<html><head><style>
@font-face{{font-family:'Open Sans Variable';src:url(file://{font})}}
*{{box-sizing:border-box;margin:0}} body{{width:1200px;height:630px;font-family:'Open Sans Variable',Arial,sans-serif;display:flex;background:#0b2545;overflow:hidden}}
.l{{width:520px;padding:56px 44px;display:flex;flex-direction:column;color:#fff;position:relative}}
.l:after{{content:'';position:absolute;right:0;top:56px;bottom:56px;width:4px;background:#f5b800;border-radius:2px}}
.chip{{align-self:flex-start;background:#13a89e;color:#fff;font-size:20px;font-weight:600;padding:8px 16px;border-radius:999px}}
h1{{font-size:44px;line-height:1.18;font-weight:800;margin-top:28px}}
.brand{{margin-top:auto;display:flex;align-items:center;gap:14px;font-size:24px}} .brand svg{{width:52px;height:52px}}
.brand b{{font-weight:800}} .brand span{{color:#9fd9d4}}
.r{{flex:1;padding:44px 44px 44px 36px;display:flex}}
.card{{flex:1;background:#fff;border-radius:18px;padding:28px;display:flex;align-items:center;justify-content:center}}
.card svg{{max-width:100%;max-height:100%}}
.list{{width:100%}} .lt{{font-size:20px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#0f8a81;margin-bottom:18px}}
.list ol{{list-style:none;padding:0;display:flex;flex-direction:column;gap:16px}}
.list li{{display:flex;gap:16px;align-items:flex-start;font-size:27px;line-height:1.25;font-weight:700;color:#0b2545}}
.list li b{{flex:none;width:46px;height:46px;border-radius:50%;background:#0b2545;color:#f5b800;font-size:19px;display:flex;align-items:center;justify-content:center;margin-top:-6px}}
.list li span{{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}}
</style></head><body>
<div class="l"><div class="chip">{html.escape(names.get(disc, disc))}</div><h1>{html.escape(title)}</h1>
<div class="brand">{mark.replace('<svg ', '<svg width="52" height="52" ', 1)}<div><b>Zenta</b> <span>Engineering</span></div></div></div>
<div class="r"><div class="card">{art}</div></div></body></html>"""
    p = f'{TMP}/{slug}'
    open(p + '.html', 'w').write(page)
    subprocess.run(['google-chrome', '--headless=new', '--no-sandbox', '--disable-gpu', '--hide-scrollbars',
                    '--window-size=1200,630', f'--screenshot={p}.png', f'file://{p}.html'], capture_output=True)
    im = Image.open(p + '.png').convert('RGB')
    im.save(f'{OUT}/{slug}.webp', 'WEBP', quality=82, method=6)
    im.save(f'{OUT}/{slug}.jpg', 'JPEG', quality=85, optimize=True, progressive=True)
    im.resize((600, 315), Image.LANCZOS).save(f'{OUT}/{slug}-thumb.webp', 'WEBP', quality=78, method=6)  # card thumbnail
    if 'image:' not in fm:
        alt = f'{title}: featured diagram'.replace('"', "'")
        line = f'image: {{ src: /images/featured/{slug}.webp, alt: "{alt}" }}'
        s = re.sub(r'^(focusKeyword: .*)$', lambda m: m.group(1) + '\n' + line, s, count=1, flags=re.M)
        open(f, 'w').write(s)
    print(slug)

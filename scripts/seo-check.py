# SEO check for articles: focus keyword in slug, title, description, intro (first 120 words) and at least one H2.
# Also checks title <= 60 chars (Google display), description 120 to 160 chars, and 3+ H2 headings.
# Usage: python3 scripts/seo-check.py [files...]   (default: all articles)
import re, sys, glob, os
norm = lambda t: re.sub(r'\s+', ' ', re.sub(r"[^a-z0-9 ]", ' ', t.lower().replace("'", '').replace('&', '').replace('-', ' '))).strip()
files = sys.argv[1:] or sorted(glob.glob('src/content/articles/*/*.mdx'))
bad = 0
for f in files:
    s = open(f).read(); fm, body = s.split('---', 2)[1:]
    g = lambda k: (re.search(rf'^{k}: "(.*)"$', fm, re.M) or [None, ''])[1]
    kw, title, desc = g('focusKeyword'), g('title'), g('description')
    slug = os.path.basename(f)[:-4]
    b = re.sub(r'^import .*$', '', body, flags=re.M)
    text = re.sub(r'<svg.*?</svg>|\$\$.*?\$\$', ' ', b, flags=re.S); text = re.sub(r'<[^>]+>', ' ', text)
    intro = ' '.join(norm(text).split()[:120])
    h2 = [norm(h) for h in re.findall(r'^## (.*)$', b, re.M)]
    k = norm(kw); kw_words = k.split()
    issues = []
    if not kw: issues.append('no focusKeyword')
    else:
        if not all(w in slug.split('-') or w in ('and','the','a','of','vs','is','what') for w in kw_words): issues.append('keyword not in slug')
        if k not in norm(title): issues.append('keyword not in title')
        if k not in norm(desc): issues.append('keyword not in description')
        if k not in intro: issues.append('keyword not in intro')
        if not any(k in h for h in h2): issues.append('keyword not in any H2')
    if len(title) > 60: issues.append(f'title {len(title)} chars (>60 may be cut in Google)')
    if not 120 <= len(desc) <= 160: issues.append(f'description {len(desc)} chars')
    if len(h2) < 3: issues.append('fewer than 3 H2')
    if issues: bad += 1
    print(f"{'OK ' if not issues else 'FIX'} {slug}: {'; '.join(issues)}")
print(f'\n{bad} of {len(files)} need fixes')

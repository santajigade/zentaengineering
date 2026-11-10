# Usage: python3 scripts/check-article.py <file.mdx>... : word count (body text, no FAQ), dashes, calculator paths
import re, sys
cal = open('scripts/zentacalculator-list.txt').read()
calc = {f"{l.split(':')[0]}/{s}" for l in cal.splitlines() for s in l.split(':')[1].split()}
for f in sys.argv[1:]:
    s = open(f).read(); fm, body = s.split('---', 2)[1:]
    b = re.sub(r'<svg.*?</svg>', '', body, flags=re.S); b = re.sub(r'\$\$.*?\$\$', '', b, flags=re.S)
    b = re.sub(r'^import .*$', '', b, flags=re.M); b = re.sub(r'<[^>]+>', ' ', b)
    words = len(re.findall(r"[A-Za-z0-9][A-Za-z0-9'.,/%]*", b))
    dashes = len(re.findall('[–—]', s))
    bad = [p for p in re.findall(r'<Calculator path="([^"]+)"', body) if p not in calc]
    sa = re.search(r'<Key title="Short answer">(.*?)</Key>', body, re.S)
    sa_words = len(sa.group(1).split()) if sa else 0
    math = re.search(r'^math:\s*true', fm, re.M)
    missing = [n for n, ok in [
        ('Short answer 40-60 words', 40 <= sa_words <= 60),
        ('interview/viva H2', bool(re.search(r'^## .*(interview|viva)', body, re.M | re.I))),
        ('Key formulas H2', not math or bool(re.search(r'^## .*formula', body, re.M | re.I))),
    ] if not ok]
    print(f"{f.split('/')[-1]}: {words} words, dashes={dashes}, bad calculators={bad}, missing={missing}")

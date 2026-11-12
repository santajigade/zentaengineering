"""IndexNow (Bing, ChatGPT search, DuckDuckGo, Yahoo): tell search engines which pages changed in this publish.

Usage: python3 scripts/indexnow.py <dist_dir> <state_file> [--all]
Hashes the <main> content of every sitemap URL, compares with the hashes saved by the previous
deployed build (state_file, kept between runs by actions/cache) and POSTs only new or changed URLs.
--all submits every sitemap URL. Never fails the deploy: errors are printed and it exits 0.
"""
import sys, os, re, json, glob, hashlib, urllib.request, urllib.error

HOST = 'zentaengineering.com'
KEY = next((os.path.basename(p)[:-4] for p in glob.glob('public/*.txt') if re.fullmatch(r'[0-9a-f]{32}\.txt', os.path.basename(p))), None)

def page_hash(path):
    html = open(path, encoding='utf-8', errors='ignore').read()
    m = re.search(r'<main[\s>].*?</main>', html, re.S)
    body = re.sub(r'/_astro/[^"\')\s]+', '', m.group(0) if m else html)  # ignore asset file name changes
    return hashlib.sha1(body.encode()).hexdigest()

def main():
    dist, state = sys.argv[1], sys.argv[2]
    submit_all = '--all' in sys.argv
    urls = re.findall(r'<loc>(https://[^<]+)</loc>', open(os.path.join(dist, 'sitemap.xml')).read())
    urls = [u for u in urls if not u.endswith(('.webp', '.jpg', '.png'))]
    old = json.load(open(state)) if os.path.exists(state) else None
    new = {}
    for u in urls:
        rel = u.split(HOST, 1)[1].strip('/')
        p = os.path.join(dist, rel, 'index.html') if rel else os.path.join(dist, 'index.html')
        if os.path.exists(p): new[u] = page_hash(p)
    os.makedirs(os.path.dirname(state) or '.', exist_ok=True)
    json.dump(new, open(state, 'w'))
    if submit_all: changed = list(new)
    elif old is None: print('IndexNow: no previous build saved yet; baseline stored, nothing sent'); return
    else: changed = [u for u, h in new.items() if old.get(u) != h]
    print(f'IndexNow: {len(changed)} of {len(new)} sitemap URLs to submit')
    for u in changed[:20]: print('  ', u)
    if not changed or not KEY: return
    body = json.dumps({'host': HOST, 'key': KEY, 'keyLocation': f'https://{HOST}/{KEY}.txt', 'urlList': changed[:10000]}).encode()
    req = urllib.request.Request('https://api.indexnow.org/indexnow', data=body, headers={'Content-Type': 'application/json; charset=utf-8'})
    with urllib.request.urlopen(req, timeout=30) as r: print('IndexNow response:', r.status)

try: main()
except urllib.error.HTTPError as e: print('IndexNow skipped:', e, e.read()[:300])
except Exception as e: print('IndexNow skipped:', e)

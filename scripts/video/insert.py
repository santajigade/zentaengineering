#!/usr/bin/env python3
"""Insert the explainer video into an article, just after the intro (before the first H2).

  python3 scripts/video/insert.py <discipline>/<slug> "How a DC motor works"

Needs public/videos/<slug>-16x9.mp4 and -9x16.mp4 to exist. Safe to re-run (skips if already present).
"""
import os, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
import datetime
TODAY = (datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(hours=5, minutes=30)).date().isoformat()  # IST, for VideoObject uploadDate
IMPORT = "import ArticleVideo from '../../../components/ArticleVideo.astro';"


def insert(path, title):
    slug = path.split('/')[-1]
    f = os.path.join(ROOT, 'src/content/articles', path + '.mdx')
    for o in ('16x9', '9x16'):
        if not os.path.exists(os.path.join(ROOT, 'public/videos', f'{slug}-{o}.mp4')):
            raise SystemExit(f'missing public/videos/{slug}-{o}.mp4')
    s = open(f).read()
    if '<ArticleVideo' in s:
        print('already has video:', path); return
    fm_end = s.index('\n---\n', 4) + 5
    head, body = s[:fm_end], s[fm_end:]
    lines = body.split('\n')
    imports = [i for i, l in enumerate(lines[:20]) if l.startswith('import ')]
    if imports:
        lines.insert(imports[-1] + 1, IMPORT)
    else:
        lines.insert(0, IMPORT)
    body = '\n'.join(lines)
    i = body.index('\n## ')
    title = title.replace('"', "'")
    body = body[:i] + f'\n\n<ArticleVideo slug="{slug}" title="{title}" uploadDate="{TODAY}" />\n' + body[i:]
    open(f, 'w').write(head + body)
    print('inserted:', path)


if __name__ == '__main__':
    if len(sys.argv) != 3:
        print(__doc__); sys.exit(1)
    insert(sys.argv[1], sys.argv[2])

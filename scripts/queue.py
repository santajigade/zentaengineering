#!/usr/bin/env python3
"""Daily queue helper.
  python3 scripts/queue.py next [N]   show next N todo items (default 6)
  python3 scripts/queue.py done slug1 slug2 ...   mark slugs published today (IST)
  python3 scripts/queue.py stats"""
import sys, datetime, os
Q = os.path.join(os.path.dirname(__file__), '..', 'content-queue.txt')
lines = open(Q).read().splitlines()
rows = [l for l in lines if l.strip() and not l.startswith('#')]
cmd = sys.argv[1] if len(sys.argv) > 1 else 'next'
if cmd == 'next':
    n = int(sys.argv[2]) if len(sys.argv) > 2 else 6
    for r in [r for r in rows if r.endswith('|todo')][:n]: print(r)
elif cmd == 'done':
    today = (datetime.datetime.utcnow() + datetime.timedelta(hours=5, minutes=30)).date().isoformat()
    slugs = set(sys.argv[2:]); out = []
    for l in lines:
        f = l.split('|')
        if len(f) == 7 and f[3] in slugs and f[6] == 'todo':
            f[6] = today; l = '|'.join(f)
        out.append(l)
    open(Q, 'w').write('\n'.join(out) + '\n')
    print('marked', len(slugs))
elif cmd == 'stats':
    todo = sum(r.endswith('|todo') for r in rows)
    print(f'{len(rows)-todo} published, {todo} todo')

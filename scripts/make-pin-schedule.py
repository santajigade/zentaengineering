#!/usr/bin/env python3
"""Builds src/data/pins.json: article id -> pin release date (4 a day).
Order: most popular first (pillar articles, popular disciplines first), then round-robin across disciplines.
Existing dates are kept; only articles not yet in the file are appended after the last scheduled day.
Articles published after the schedule was made need no entry: they are pinned the day after they go live.
Usage: python3 scripts/make-pin-schedule.py [start-date YYYY-MM-DD]   (start date only used for a new file)"""
import json, glob, os, re, sys, datetime
PER_DAY = 4
POPULAR = ['electrical-engineering', 'electronics-engineering', 'mechanical-engineering', 'automation-robotics',
           'renewable-energy', 'chemical-engineering', 'civil-engineering', 'computer-science', 'ai-data-engineering']
P = 'src/data/pins.json'
sched = json.load(open(P)) if os.path.exists(P) else {}
if sched: start = datetime.date.fromisoformat(max(sched.values()))
else: start = datetime.date.fromisoformat(sys.argv[1]) if len(sys.argv) > 1 else datetime.date.today() + datetime.timedelta(days=1)
discs = re.findall(r"^    slug: '([a-z-]+)'", open('src/data/disciplines.ts').read(), re.M)
order = POPULAR + [d for d in discs if d not in POPULAR]
groups = {True: {d: [] for d in order}, False: {d: [] for d in order}}
for f in sorted(glob.glob('src/content/articles/*/*.md*')):
    s = open(f).read(); fm = s.split('---')[1]
    if re.search(r'^draft:\s*true', fm, re.M): continue
    d = re.search(r'^discipline:\s*"?([\w-]+)', fm, re.M).group(1)
    pub = re.search(r'^pubDate:\s*"?([\d-]+)', fm, re.M).group(1)
    aid = f'{d}/' + os.path.basename(f).rsplit('.', 1)[0]
    if aid in sched: continue
    groups[bool(re.search(r'^pillar:\s*true', fm, re.M))].setdefault(d, []).append((pub, aid))
queue = []
for pillar in (True, False):
    lists = [sorted(v) for v in groups[pillar].values() if v]
    while any(lists):
        for l in lists:
            if l: queue.append(l.pop(0)[1])
day, n = start, sum(1 for v in sched.values() if v == str(start)) if sched else 0
for aid in queue:
    if n >= PER_DAY: day += datetime.timedelta(days=1); n = 0
    sched[aid] = str(day); n += 1
json.dump(sched, open(P, 'w'), indent=0); open(P, 'a').write('\n')
print(f'{len(queue)} added, {len(sched)} scheduled, last day {max(sched.values())}')

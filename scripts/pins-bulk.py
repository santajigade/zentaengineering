#!/usr/bin/env python3
"""'A lot now': take the next N scheduled pins (not yet released, not already manual), add them to
src/data/pins-manual.json (they get images on the next deploy) and write a
Pinterest bulk-upload CSV. Usage: python3 scripts/pins-bulk.py "BOARD NAME" [N=10]
Weekly mode: python3 scripts/pins-bulk.py "BOARD NAME" --week
  takes every scheduled pin dated up to 6 days ahead that is not yet uploaded; overdue ones publish
  immediately, the rest are scheduled for 09:00 IST on their date (Pinterest allows up to 14 days ahead)."""
import json, csv, re, sys, datetime, os
BOARD = sys.argv[1]; WEEK = '--week' in sys.argv
N = int(sys.argv[2]) if len(sys.argv) > 2 and not WEEK else 10
SITE = 'https://zentaengineering.com'
today = (datetime.datetime.now(datetime.UTC).replace(tzinfo=None) + datetime.timedelta(hours=5, minutes=30)).date().isoformat()
sched = json.load(open('src/data/pins.json')); manual = json.load(open('src/data/pins-manual.json'))
order = sorted(sched.items(), key=lambda x: (x[1], list(sched).index(x[0])))
if WEEK:
    until = (datetime.date.fromisoformat(today) + datetime.timedelta(days=6)).isoformat()
    pick = [k for k, d in order if d <= until and k not in manual]
else:
    pick = [k for k, d in order if d > today and k not in manual][:N]
when = lambda aid: f'{sched[aid]}T03:30:00' if WEEK and sched[aid] > today else ''  # 09:00 IST in UTC
clean = lambda s: re.sub(r'\s*[\[(][^\])]*[\])]', '', s).replace('—', ', ').replace('–', ', ')
rows = []
for aid in pick:
    d, slug = aid.split('/')
    fm = open(next(f for f in [f'src/content/articles/{aid}.mdx', f'src/content/articles/{aid}.md'] if os.path.exists(f))).read().split('---')[1]
    title = re.search(r'^title:\s*"?(.*?)"?\s*$', fm, re.M).group(1)
    desc = re.search(r'^description:\s*"?(.*?)"?\s*$', fm, re.M).group(1)
    kw = re.search(r'^focusKeyword:\s*"?(.*?)"?\s*$', fm, re.M)
    rows.append([clean(title)[:100], f'{SITE}/pins/{d}/{slug}.jpg', BOARD, '', f'{clean(desc)} #engineering #engineeringstudents'[:500],
                 f'{SITE}/{d}/{slug}/?utm_source=pinterest&utm_medium=social&utm_campaign=pins', when(aid),
                 ', '.join(filter(None, [kw.group(1) if kw else '', d.replace('-', ' '), 'engineering']))])
json.dump(manual + pick, open('src/data/pins-manual.json', 'w'), indent=0)
out = f'/tmp/pinterest-bulk-{today}.csv'
with open(out, 'w', newline='') as f:
    w = csv.writer(f); w.writerow(['Title', 'Media URL', 'Pinterest board', 'Thumbnail', 'Description', 'Link', 'Publish date', 'Keywords']); w.writerows(rows)
print(f'{len(pick)} pins added to pins-manual.json; CSV: {out}')

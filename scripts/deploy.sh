#!/bin/bash
# Build, verify and push. Usage: scripts/deploy.sh "commit message"
set -e
cd "$(dirname "$0")/.."
python3 scripts/make-featured.py >/tmp/feat.log 2>&1 || { tail /tmp/feat.log; exit 1; }
python3 scripts/make-169.py
NODE_PATH=$(npm root -g) node scripts/export-diagrams.mjs || exit 1
python3 scripts/plan.py >/dev/null
npm run build > /tmp/build.log 2>&1 || { grep -iE "error|broken" /tmp/build.log | head -20; exit 1; }
tail -1 /tmp/build.log
git add -A
git commit -qm "$1

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
git push -q && echo PUSHED

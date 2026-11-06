// Fails the build if any page links to an internal URL that was not generated.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
const dist = new URL('../dist/', import.meta.url).pathname;
const files = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); });
walk(dist);
const bad = new Set();
for (const f of files) {
  for (const m of readFileSync(f, 'utf8').matchAll(/href="(\/[^"#?]*)/g)) {
    const u = decodeURI(m[1]);
    if (u.startsWith('//')) continue;
    const p = join(dist, u);
    if (!(existsSync(p) && (statSync(p).isFile() || existsSync(join(p, 'index.html'))))) bad.add(`${u}  (in ${f.slice(dist.length)})`);
  }
}
if (bad.size) { console.error(`Broken internal links:\n${[...bad].join('\n')}`); process.exit(1); }
console.log(`Link check: ${files.length} pages, no broken internal links.`);

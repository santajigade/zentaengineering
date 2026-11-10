// Saves every inline <svg> diagram in articles as a still WebP image for Google Images.
// Output: public/images/diagrams/<slug>-<n>.webp and public/images/diagrams/manifest.json,
// keyed by article URL path. Only changed diagrams are re-rendered (content hash).
// Run: NODE_PATH=$(npm root -g) node scripts/export-diagrams.mjs   (needs Playwright + Chromium)
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const sharp = require('sharp');

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const outDir = path.join(root, 'public/images/diagrams');
const manPath = path.join(outDir, 'manifest.json');
fs.mkdirSync(outDir, { recursive: true });
const old = fs.existsSync(manPath) ? JSON.parse(fs.readFileSync(manPath, 'utf8')) : {};
const font = path.join(root, 'node_modules/@fontsource-variable/open-sans/files/open-sans-latin-wght-normal.woff2');

const files = [];
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
  const p = path.join(d, e.name);
  if (e.isDirectory()) walk(p); else if (/\.mdx?$/.test(e.name)) files.push(p);
});
walk(path.join(root, 'src/content/articles'));

const man = {}; const keep = new Set(['manifest.json']);
let browser, page, rendered = 0;
for (const f of files.sort()) {
  const src = fs.readFileSync(f, 'utf8');
  const fm = src.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  if (/^draft:\s*true/m.test(fm)) continue;
  const disc = fm.match(/^discipline:\s*"?([\w-]+)"?/m)?.[1];
  const slug = path.basename(f).replace(/\.mdx?$/, '');
  const key = `/${disc}/${slug}/`;
  const svgs = src.match(/<svg[\s\S]*?<\/svg>/g) || [];
  if (!svgs.length) continue;
  man[key] = [];
  for (let i = 0; i < svgs.length; i++) {
    const svg = svgs[i];
    const hash = crypto.createHash('md5').update(svg).digest('hex').slice(0, 10);
    const name = `${slug}-${i + 1}.webp`;
    const w = +(svg.match(/width="(\d+)"/)?.[1] ?? 600), h = +(svg.match(/height="(\d+)"/)?.[1] ?? 300);
    const alt = (svg.match(/aria-label="([^"]*)"/)?.[1] ?? `${slug.replace(/-/g, ' ')} diagram`).replace(/&amp;/g, '&');
    keep.add(name);
    const prev = old[key]?.[i];
    if (!(prev && prev.hash === hash && fs.existsSync(path.join(outDir, name)))) {
      if (!browser) { browser = await chromium.launch(); page = await browser.newPage({ deviceScaleFactor: 2 }); }
      const html = `<html><head><style>@font-face{font-family:'Open Sans Variable';src:url(file://${font})}body{margin:0;background:#fff}svg{display:block}svg *{animation:none!important}.anim-flow,.anim-flow-slow,.anim-flow-rev{stroke-dasharray:6 12}</style></head><body>${svg}</body></html>`;
      const tmp = `/tmp/zed-${process.pid}.html`; fs.writeFileSync(tmp, html);
      await page.setViewportSize({ width: w, height: h });
      await page.goto(`file://${tmp}`); await page.evaluate(() => document.fonts.ready);
      const png = await page.locator('svg').first().screenshot();
      await sharp(png).flatten({ background: '#ffffff' }).webp({ quality: 85 }).toFile(path.join(outDir, name));
      rendered++;
    }
    man[key].push({ src: `/images/diagrams/${name}`, alt, width: w * 2, height: h * 2, hash });
  }
}
if (browser) await browser.close();
for (const n of fs.readdirSync(outDir)) if (!keep.has(n)) fs.unlinkSync(path.join(outDir, n));
fs.writeFileSync(manPath, JSON.stringify(man, null, 0) + '\n');
console.log(`diagrams: ${Object.values(man).flat().length} total, ${rendered} rendered`);

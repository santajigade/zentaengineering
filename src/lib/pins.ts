// Pinterest pins: release schedule and tall 1000x1500 images (satori + resvg + sharp, cached in .og-cache).
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
import { readFileSync, mkdirSync, existsSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { liveArticles, slugOf, type Article } from './content';
import SCHEDULE from '../data/pins.json';
import MANUAL from '../data/pins-manual.json';

/** Pins uploaded by hand (.csv bulk upload). These get images on the next deploy. */
export const manualPins = new Set(MANUAL as string[]);

/** One colour per discipline (pin backgrounds are multicolour by category). */
export const CAT_COLOR: Record<string, string> = {
  'mechanical-engineering': '#e4572e', 'instrumentation-control': '#0ca678', 'electrical-engineering': '#f5b800', 'electronics-engineering': '#13a89e',
  'civil-engineering': '#8d6e63', 'chemical-engineering': '#8e44ad', 'computer-science': '#3d7cf2',
  'automation-robotics': '#ff8c1a', 'ai-data-engineering': '#d6336c', 'telecommunication-engineering': '#00a6d6',
  'petroleum-engineering': '#a0522d', 'renewable-energy': '#2fb344', 'environmental-engineering': '#4caf50',
  'mining-engineering': '#b8860b', 'manufacturing-engineering': '#5c7cfa', 'materials-engineering': '#7f8c9d',
  'safety-engineering': '#e03131', 'agricultural-engineering': '#82b532', 'aerospace-engineering': '#4263eb',
  'biomedical-engineering': '#e64980', 'marine-engineering': '#1c7ed6',
};
export const pinColor = (d: string) => CAT_COLOR[d] ?? '#13a89e';
export const pinPath = (a: Article) => `/pins/${a.data.discipline}/${slugOf(a)}.jpg`;

export const today = () => process.env.PINS_TODAY ?? istToday();
const istToday = () => new Date(Date.now() + 5.5 * 3600e3).toISOString().slice(0, 10);
const DAY = 864e5;

/** Pins that get images, newest first: every .csv pin, plus earlier scheduled dates (kept so pins already on Pinterest keep their image).
 * Schedule follows src/data/pins.json (4 a day); newer articles are dated the day after they go live. */
export async function pinQueue(): Promise<{ a: Article; date: string }[]> {
  const t = today(); // PINS_TODAY=YYYY-MM-DD previews a future day (testing only)
  const sched = SCHEDULE as Record<string, string>;
  return (await liveArticles())
    .map((a) => ({ a, date: sched[a.id] ?? new Date(a.data.pubDate.valueOf() + DAY).toISOString().slice(0, 10) }))
    .filter((p) => p.date <= t || manualPins.has(p.a.id)) // manual (.csv) pins get images right away
    .sort((x, y) => y.date.localeCompare(x.date) || x.a.id.localeCompare(y.a.id));
}

// ---------- image ----------
const NM = join(process.cwd(), 'node_modules');
const font = (p: string) => readFileSync(join(NM, p));
let FONTS: any[] | null = null;
const fonts = () => (FONTS ??= [
  ...['latin', 'latin-ext', 'greek'].flatMap((s) => [500, 800].map((w) => ({ name: 'Open Sans', data: font(`@fontsource/open-sans/files/open-sans-${s}-${w}-normal.woff`), weight: w, style: 'normal' }))),
  ...['latin', 'greek'].map((s) => ({ name: 'Mono', data: font(`@fontsource/jetbrains-mono/files/jetbrains-mono-${s}-500-normal.woff`), weight: 500, style: 'normal' })),
]);
const MARK = 'data:image/svg+xml;base64,' + Buffer.from(readFileSync(join(process.cwd(), 'public/brand/zenta-engineering-mark.svg'))).toString('base64');

const h = (type: string, style: any, children?: any, extra: any = {}) => ({ type, props: { style, children, ...extra } });
const clean = (t: string) => t.replace(/\s*[\[(][^\])]*[\])]/g, '').replace(/₹\s?/g, 'Rs ').replace(/\s+[–—]\s+/g, ', ').replace(/[–—]/g, '-').trim();
const shade = (hex: string, f: number) => '#' + [1, 3, 5].map((i) => Math.round(parseInt(hex.slice(i, i + 2), 16) * f).toString(16).padStart(2, '0')).join('');

export interface PinInput { title: string; kicker: string; color: string; sub: string; formula?: string; ticks: string[] }

function pin(o: PinInput) {
  const t = clean(o.title);
  const size = t.length > 52 ? 70 : t.length > 36 ? 80 : t.length > 22 ? 92 : 104;
  const tick = (x: string) => h('div', { display: 'flex', alignItems: 'center', gap: 20, fontSize: 34, fontWeight: 500 }, [
    h('div', { width: 46, height: 46, flexShrink: 0, borderRadius: 999, background: '#F5B800', display: 'flex', alignItems: 'center', justifyContent: 'center' },
      h('div', { width: 12, height: 22, borderRight: '5px solid #0b2545', borderBottom: '5px solid #0b2545', transform: 'rotate(45deg) translate(-2px,-3px)' })), x]);
  return h('div', { width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', padding: '78px 76px 76px', fontFamily: 'Open Sans', color: '#fff',
    backgroundColor: shade(o.color, 0.2),
    backgroundImage: `radial-gradient(circle at 100% 0%, ${o.color} 0%, ${o.color}77 36%, transparent 68%), radial-gradient(circle at 0% 100%, #0b2545 0%, transparent 70%)` }, [
    h('div', { display: 'flex', alignItems: 'center', gap: 20 }, [
      h('img', { width: 80, height: 80 }, undefined, { src: MARK, width: 80, height: 80 }),
      h('div', { fontSize: 42, fontWeight: 800, display: 'flex' }, ['Zenta', h('span', { fontWeight: 500, marginLeft: 10, opacity: 0.9 }, 'Engineering')]),
    ]),
    h('div', { display: 'flex', alignSelf: 'flex-start', marginTop: 84, fontSize: 26, fontWeight: 800, letterSpacing: 3, padding: '12px 26px', borderRadius: 999, background: 'rgba(255,255,255,0.14)', border: '2px solid rgba(255,255,255,0.3)', textTransform: 'uppercase' }, o.kicker),
    h('div', { marginTop: 34, fontSize: size, fontWeight: 800, lineHeight: 1.06, letterSpacing: -2 }, t),
    h('div', { marginTop: 36, fontSize: 36, fontWeight: 500, opacity: 0.92, lineHeight: 1.4 }, clean(o.sub)),
    o.formula
      ? h('div', { display: 'flex', alignSelf: 'flex-start', marginTop: 42, fontFamily: 'Mono', fontSize: 46, padding: '20px 32px', borderRadius: 18, background: 'rgba(11,37,69,0.55)', border: '3px solid #F5B800', color: '#ffe08a' }, o.formula)
      : h('div', { display: 'flex' }, ''),
    h('div', { display: 'flex', flexDirection: 'column', gap: 22, marginTop: 'auto' }, o.ticks.map(tick)),
    h('div', { display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 54, padding: '26px 0', borderRadius: 999, background: '#fff', color: '#0b2545', fontSize: 40, fontWeight: 800 }, 'Read it free at zentaengineering.com'),
  ]);
}

const CACHE = join(process.cwd(), '.og-cache');
export async function pinJpg(o: PinInput): Promise<Buffer> {
  const key = createHash('sha1').update(JSON.stringify(o) + 'pin1').digest('hex');
  const f = join(CACHE, key + '.jpg');
  if (existsSync(f)) return readFileSync(f);
  const svg = await satori(pin(o) as any, { width: 1000, height: 1500, fonts: fonts() });
  const jpg = await sharp(new Resvg(svg, { fitTo: { mode: 'width', value: 1000 } }).render().asPng()).jpeg({ quality: 84, mozjpeg: true }).toBuffer();
  mkdirSync(CACHE, { recursive: true }); writeFileSync(f, jpg);
  return jpg;
}

/** Pin content for an article, read from its front matter and body. */
export function pinInput(a: Article, kicker: string): PinInput {
  const body = a.body ?? '';
  const row = body.match(/^## .*formula.*\n+\|.*\n\|[ -|]+\n\|([^|\n]*)\|([^|\n]*)\|/im);
  const f = row?.[2].trim();
  const formula = f && f.length <= 24 && !/[_\\{}]/.test(f) ? f : undefined;
  const sub = a.data.description.split(/(?<=\.)\s/)[0];
  const ticks = [
    /<svg/.test(body) ? 'Clear labelled diagrams' : 'Key points made simple',
    /<Example/.test(body) ? 'Worked example with numbers' : 'Real-world applications',
    /^## .*(interview|viva)/im.test(body) ? 'Interview and viva questions' : 'FAQs and trusted references',
  ];
  return { title: a.data.title, kicker, color: pinColor(a.data.discipline), sub, formula, ticks };
}

import { getDiscipline } from '../data/disciplines';
const KICKER: Record<string, string> = {
  'electronics-engineering': 'Electronics Engineering', 'instrumentation-control': 'Instrumentation and Control', 'civil-engineering': 'Civil Engineering', 'chemical-engineering': 'Chemical Engineering',
  'computer-science': 'Computer Science', 'automation-robotics': 'Automation and Robotics', 'ai-data-engineering': 'AI and Data',
  'telecommunication-engineering': 'Telecom Engineering', 'petroleum-engineering': 'Oil and Gas Engineering', 'renewable-energy': 'Renewable Energy',
  'mining-engineering': 'Mining Engineering', 'manufacturing-engineering': 'Manufacturing', 'materials-engineering': 'Materials Engineering',
  'safety-engineering': 'Safety Engineering', 'agricultural-engineering': 'Agricultural Engineering', 'aerospace-engineering': 'Aerospace Engineering',
  'biomedical-engineering': 'Biomedical Engineering', 'marine-engineering': 'Marine Engineering',
};
/** Category label on pins. */
export const kickerOf = (d: string) => KICKER[d] ?? getDiscipline(d)?.name ?? 'Engineering';

import type { APIRoute } from 'astro';
import { SITE } from '../../data/site';
import { articleUrl } from '../../lib/content';
import { pinQueue, manualPins, pinPath, kickerOf, today } from '../../lib/pins';

// RSS 2.0 feed for Pinterest "Auto-publish from RSS": the latest 60 released article pins.
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const clean = (s: string) => s.replace(/\s*[\[(][^\])]*[\])]/g, '').replace(/\s*[–—]\s*/g, ', ');
const tag = (s: string) => '#' + s.replace(/\band\b/gi, '').replace(/[^A-Za-z0-9]/g, '');

export const GET: APIRoute = async () => {
  const items = (await pinQueue()).filter((p) => !manualPins.has(p.a.id) && p.date <= today()).slice(0, 60).map(({ a, date }) => {
    const cat = kickerOf(a.data.discipline);
    const link = `${SITE.url}${articleUrl(a)}?utm_source=pinterest&utm_medium=social&utm_campaign=pins`;
    const img = `${SITE.url}${pinPath(a)}`;
    const tags = [tag(cat), '#engineering', '#engineeringstudents', '#learnengineering'].join(' ');
    return `<item><title>${esc(clean(a.data.title))}</title><link>${esc(link)}</link><guid isPermaLink="false">ze-pin-${a.id}</guid>
<pubDate>${new Date(date + 'T09:00:00+05:30').toUTCString()}</pubDate><category>${esc(cat)}</category>
<description>${esc(`${clean(a.data.description)} ${tags}`)}</description>
<enclosure url="${img}" type="image/jpeg" length="0"/><media:content url="${img}" medium="image" type="image/jpeg" width="1000" height="1500"/></item>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/"><channel>
<title>${esc(SITE.name)}: engineering explained</title><link>${SITE.url}/</link><description>${esc(SITE.description)}</description><language>en</language>
${items.join('\n')}
</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};

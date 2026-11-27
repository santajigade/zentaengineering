// RSS feed of the latest 50 articles (for Follow in Chrome / Discover and feed readers).
import { liveArticles, articleUrl } from '../lib/content';
import { SITE } from '../data/site';
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export async function GET() {
  const items = (await liveArticles()).sort((a, b) => +b.data.pubDate - +a.data.pubDate).slice(0, 50).map((a) => {
    const url = new URL(articleUrl(a), SITE.url).href;
    const img = a.data.image ? new URL(a.data.image.src.replace(/\.webp$/, '-16x9.jpg'), SITE.url).href : '';
    return `<item><title>${esc(a.data.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${a.data.pubDate.toUTCString()}</pubDate><description>${esc(a.data.description)}</description>${img ? `<enclosure url="${img}" type="image/jpeg" length="0"/>` : ''}</item>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${esc(SITE.name)}</title><link>${SITE.url}</link><description>Engineering articles, worked examples and explainers</description><language>en</language><atom:link href="${new URL('/rss.xml', SITE.url).href}" rel="self" type="application/rss+xml"/>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}

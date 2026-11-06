// Lists only indexable pages (same thresholds as the pages' noindex rules).
import { SITE, AUTHORS, authorFor } from '../data/site';
import { DISCIPLINES } from '../data/disciplines';
import { SERIES } from '../data/series';
import { liveArticles, liveLessons, liveInterview, liveProjects, liveResources, articleUrl, lessonUrl, interviewUrl, projectUrl, resourceUrl, counts, disciplineIndexable, subcategoryIndexable } from '../lib/content';

export async function GET() {
  const urls: [string, Date?][] = [['/'], ['/engineering-categories/'], ['/about/'], ['/editorial-policy/']];
  const articles = await liveArticles(), lessons = await liveLessons(), sets = await liveInterview(), projects = await liveProjects(), res = await liveResources();
  const { byDiscipline, bySub } = await counts();
  for (const d of DISCIPLINES) {
    if (disciplineIndexable(byDiscipline.get(d.slug) ?? 0)) urls.push([`/${d.slug}/`]);
    for (const s of d.subcategories) if (subcategoryIndexable(bySub.get(`${d.slug}/${s.slug}`) ?? 0)) urls.push([`/${d.slug}/${s.slug}/`]);
  }
  const last = (x: { data: { pubDate: Date; updatedDate?: Date } }) => x.data.updatedDate ?? x.data.pubDate;
  articles.forEach((a) => urls.push([articleUrl(a), last(a)]));
  if (lessons.length) urls.push(['/tutorials/']);
  SERIES.filter((s) => lessons.some((l) => l.data.series === s.slug)).forEach((s) => urls.push([`/tutorials/${s.slug}/`]));
  lessons.forEach((l) => urls.push([lessonUrl(l), last(l)]));
  if (sets.length) urls.push(['/interview-questions/']);
  [...new Set(sets.map((s) => s.data.discipline))].forEach((d) => urls.push([`/interview-questions/${d}/`]));
  sets.forEach((s) => urls.push([interviewUrl(s), last(s)]));
  if (projects.length) urls.push(['/projects/']);
  projects.forEach((p) => urls.push([projectUrl(p), last(p)]));
  if (res.length) urls.push(['/resources/']);
  res.forEach((r) => urls.push([resourceUrl(r), last(r)]));
  Object.values(AUTHORS).filter((a) => articles.some((x) => authorFor(x.data).slug === a.slug)).forEach((a) => urls.push([`/author/${a.slug}/`]));
  const body = SITE.launched
    ? urls.map(([u, d]) => `<url><loc>${SITE.url}${u}</loc>${d ? `<lastmod>${d.toISOString().slice(0, 10)}</lastmod>` : ''}</url>`).join('')
    : '';
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>\n`, { headers: { 'Content-Type': 'application/xml' } });
}

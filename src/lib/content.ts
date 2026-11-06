import { getCollection, type CollectionEntry } from 'astro:content';
import { SITE, SHOW_UNREVIEWED } from '../data/site';
import { DISCIPLINES, getDiscipline } from '../data/disciplines';

export type Article = CollectionEntry<'articles'>;
export type Lesson = CollectionEntry<'tutorials'>;
export type InterviewSet = CollectionEntry<'interview'>;
export type Project = CollectionEntry<'projects'>;
export type Resource = CollectionEntry<'resources'>;
export type AnyItem = Article | Lesson | InterviewSet | Project | Resource;

// SHOW_DRAFTS=1 builds a private review preview with unreviewed, draft and future items. Never deploy it.
export const SHOW_DRAFTS = process.env.SHOW_DRAFTS === '1' || process.env.PREVIEW === '1' || SHOW_UNREVIEWED;

type Live = { draft: boolean; pubDate: Date; reviewedDate?: Date };
export const isLive = (d: Live) =>
  SHOW_DRAFTS || (!d.draft && d.pubDate <= new Date() && (!SITE.requireReview || !!d.reviewedDate));

const newestFirst = <T extends { data: { pubDate: Date } }>(a: T, b: T) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf();

/** The last path segment of an entry id is its slug (ids may include folders). */
export const slugOf = (e: { id: string }) => e.id.split('/').pop()!;

export async function liveArticles() {
  const all = (await getCollection('articles', ({ data }) => isLive(data))).sort(newestFirst);
  all.forEach(validate);
  return all;
}
export async function liveLessons() {
  const all = await getCollection('tutorials', ({ data }) => isLive(data));
  all.forEach(validate);
  return all.sort((a, b) => a.data.series.localeCompare(b.data.series) || a.data.order - b.data.order);
}
export async function liveInterview() {
  const all = (await getCollection('interview', ({ data }) => isLive(data))).sort(newestFirst);
  all.forEach(validate);
  return all;
}
export async function liveProjects() {
  const all = (await getCollection('projects', ({ data }) => isLive(data))).sort(newestFirst);
  all.forEach(validate);
  return all;
}
export async function liveResources() {
  const all = (await getCollection('resources', ({ data }) => isLive(data))).sort(newestFirst);
  all.forEach(validate);
  return all;
}

// URLs (master plan, section I)
export const articleUrl = (a: Article) => `/${a.data.discipline}/${slugOf(a)}/`;
export const lessonUrl = (l: Lesson) => `/tutorials/${l.data.series}/${slugOf(l)}/`;
export const interviewUrl = (s: InterviewSet) => `/interview-questions/${s.data.discipline}/${slugOf(s)}/`;
export const projectUrl = (p: Project) => `/projects/${slugOf(p)}/`;
export const resourceUrl = (r: Resource) => `/resources/${r.data.type}/${slugOf(r)}/`;

/** Build stops on an unknown discipline/subcategory or a slug that collides with a subcategory page. */
function validate(e: AnyItem) {
  const d = getDiscipline(e.data.discipline);
  if (!d) throw new Error(`${e.collection}/${e.id}: unknown discipline "${e.data.discipline}"`);
  const sub = e.data.subcategory;
  if (sub && !d.subcategories.some((s) => s.slug === sub))
    throw new Error(`${e.collection}/${e.id}: unknown subcategory "${sub}" in ${d.slug}`);
  if (e.collection === 'articles' && d.subcategories.some((s) => s.slug === slugOf(e)))
    throw new Error(`articles/${e.id}: slug "${slugOf(e)}" equals a subcategory slug in ${d.slug}`);
  for (const x of e.data.alsoIn) if (!getDiscipline(x)) throw new Error(`${e.collection}/${e.id}: unknown alsoIn "${x}"`);
}

/** Live item counts per discipline (all content types) and per discipline/subcategory (articles). */
export async function counts() {
  const items: AnyItem[] = [
    ...(await liveArticles()), ...(await liveLessons()), ...(await liveInterview()),
    ...(await liveProjects()), ...(await liveResources()),
  ];
  const byDiscipline = new Map<string, number>();
  const bySub = new Map<string, number>();
  for (const i of items) {
    byDiscipline.set(i.data.discipline, (byDiscipline.get(i.data.discipline) ?? 0) + 1);
    if (i.collection === 'articles' && i.data.subcategory) { // subcategory archives list articles
      const k = `${i.data.discipline}/${i.data.subcategory}`;
      bySub.set(k, (bySub.get(k) ?? 0) + 1);
    }
  }
  return { byDiscipline, bySub };
}

export const disciplineIndexable = (n: number) => n >= SITE.disciplineMinItems;
export const subcategoryIndexable = (n: number) => n >= SITE.subcategoryMinItems;

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export const ARTICLE_FORMATS: Record<string, string> = {
  fundamentals: 'Fundamentals', 'working-principle': 'Working principle', explanation: 'Explanation',
  troubleshooting: 'Troubleshooting', comparison: 'Comparison', equipment: 'Equipment',
  application: 'Application', 'case-study': 'Case study', tutorial: 'Step-by-step tutorial',
};

export { DISCIPLINES };

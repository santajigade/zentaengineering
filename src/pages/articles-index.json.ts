// URL -> [title, discipline short name], used by the "Popular this week" sidebar box.
import { liveArticles, articleUrl } from '../lib/content';
import { getDiscipline } from '../data/disciplines';
export async function GET() {
  const out: Record<string, [string, string]> = {};
  for (const a of await liveArticles()) out[articleUrl(a)] = [a.data.title, getDiscipline(a.data.discipline)?.short ?? ''];
  return new Response(JSON.stringify(out), { headers: { 'Content-Type': 'application/json' } });
}

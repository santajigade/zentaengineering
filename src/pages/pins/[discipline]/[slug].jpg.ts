import type { APIRoute } from 'astro';
import { slugOf } from '../../../lib/content';

import { pinQueue, pinInput, pinJpg, kickerOf } from '../../../lib/pins';

// Tall Pinterest images, only for articles already released to the pin feed (keeps builds fast).
export async function getStaticPaths() {
  return (await pinQueue()).map(({ a }) => ({
    params: { discipline: a.data.discipline, slug: slugOf(a) },
    props: { o: pinInput(a, kickerOf(a.data.discipline)) },
  }));
}
export const GET: APIRoute = async ({ props }) =>
  new Response(new Uint8Array(await pinJpg((props as any).o)), { headers: { 'Content-Type': 'image/jpeg' } });

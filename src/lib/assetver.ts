// Appends ?v=<content hash> to a public file URL so browsers fetch a fresh copy when the file changes.
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
const cache = new Map<string, string>();
export const ver = (url?: string) => {
  if (!url) return url;
  if (!cache.has(url)) {
    let h = '';
    try { h = createHash('md5').update(readFileSync(join(process.cwd(), 'public', url))).digest('hex').slice(0, 8); } catch {}
    cache.set(url, h ? `${url}?v=${h}` : url);
  }
  return cache.get(url)!;
};

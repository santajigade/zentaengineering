import { SITE } from '../data/site';

// Before launch the site is closed to crawlers. Set SITE.launched = true to open it.
export const GET = () =>
  new Response(
    SITE.launched
      ? `User-agent: *\nAllow: /\nDisallow: /search/\n\nSitemap: ${SITE.url}/sitemap-index.xml\n`
      : `User-agent: *\nDisallow: /\n`,
    { headers: { 'Content-Type': 'text/plain' } },
  );

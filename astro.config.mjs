import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// The sitemap is built by src/pages/sitemap.xml.ts so that only indexable pages are listed.
export default defineConfig({
  site: 'https://zentaengineering.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [mdx()],
  markdown: { remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] },
});

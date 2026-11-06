import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Wraps every Markdown table in a scroll box so wide tables scroll sideways on phones.
const rehypeTableScroll = () => (tree) => {
  const walk = (node) => {
    if (!node.children) return;
    node.children = node.children.map((c) => {
      if (c.type === 'element' && c.tagName === 'table') return { type: 'element', tagName: 'div', properties: { className: ['table-scroll'] }, children: [c] };
      walk(c);
      return c;
    });
  };
  walk(tree);
};

// External links open in a new tab; InstrumentationBlog.in and ZentaCalculator and every other external site get target=_blank with rel=noopener.
const rehypeExternalLinks = () => (tree) => {
  const walk = (n) => {
    if (n.type === 'element' && n.tagName === 'a' && /^https?:\/\//.test(n.properties?.href || '') && !/zentaengineering\.com/.test(n.properties.href)) {
      n.properties.target = '_blank';
      n.properties.rel = ['noopener'];
    }
    (n.children || []).forEach(walk);
  };
  walk(tree);
};

// The sitemap is built by src/pages/sitemap.xml.ts so that only indexable pages are listed.
export default defineConfig({
  site: 'https://zentaengineering.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [mdx()],
  markdown: { remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex, rehypeTableScroll, rehypeExternalLinks] },
});

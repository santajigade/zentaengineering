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

// The sitemap is built by src/pages/sitemap.xml.ts so that only indexable pages are listed.
export default defineConfig({
  site: 'https://zentaengineering.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [mdx()],
  markdown: { remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex, rehypeTableScroll] },
});

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import fs from 'node:fs';

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

// Adds a "Download diagram" link under each article diagram, pointing to its still WebP copy
// (made by scripts/export-diagrams.mjs) so Google Images can find it.
const rehypeDiagramLinks = () => (tree, file) => {
  const fp = String(file.path || '');
  if (!fp.includes('/content/articles/')) return;
  let man = {};
  try { man = JSON.parse(fs.readFileSync('public/images/diagrams/manifest.json', 'utf8')); } catch { return; }
  const disc = file.data?.astro?.frontmatter?.discipline ?? fp.split('/').slice(-2)[0];
  const list = man[`/${disc}/${fp.split('/').pop().replace(/\.mdx?$/, '')}/`];
  if (!list) return;
  let i = 0;
  const tag = (n) => n.tagName ?? n.name; // hast element or MDX JSX element
  const hasSvg = (n) => tag(n) === 'svg' || (n.children || []).some(hasSvg);
  const attr = (name, value) => ({ type: 'mdxJsxAttribute', name, value });
  const walk = (n) => {
    if (tag(n) === 'figure' && hasSvg(n)) {
      const d = list[i++];
      if (d) n.children.push(n.type === 'element'
        ? { type: 'element', tagName: 'a', properties: { className: ['dl-diagram'], href: d.src, download: '' }, children: [{ type: 'text', value: 'Download diagram (WebP)' }] }
        : { type: 'mdxJsxFlowElement', name: 'a', attributes: [attr('class', 'dl-diagram'), attr('href', d.src), attr('download', '')], children: [{ type: 'text', value: 'Download diagram (WebP)' }] });
      return;
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
  markdown: { remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex, rehypeTableScroll, rehypeExternalLinks, rehypeDiagramLinks] },
});

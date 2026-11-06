import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Fields shared by every content type (master plan, sections A and J).
const common = {
  title: z.string().max(70),
  description: z.string().max(160), // meta description, no dashes
  seoTitle: z.string().max(65).optional(), // overrides the <title> when set
  focusKeyword: z.string().optional(), // main search phrase; must appear in slug, title, description, intro and one H2
  pubDate: z.coerce.date(), // goes live on this date (scheduled publishing)
  updatedDate: z.coerce.date().optional(), // only for meaningful edits
  author: z.string().optional(), // empty = rule in authorFor(): Electronics by Santaji Gadepatil, others Editorial Staff
  reviewedBy: z.string().optional(), // empty = 'Technical Team'
  reviewedDate: z.coerce.date().optional(), // set ONLY after a real technical review
  discipline: z.string(), // primary discipline slug: drives URL, breadcrumb, canonical
  subcategory: z.string().optional(),
  alsoIn: z.array(z.string()).default([]), // secondary disciplines, for listing only
  tags: z.array(z.string()).default([]), // used for related content, never indexed
  draft: z.boolean().default(false),
  image: z.object({ src: z.string(), alt: z.string() }).optional(), // 1200x630
  math: z.boolean().default(false), // true loads KaTeX styles for $$ equations
  faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  references: z.array(z.object({ text: z.string(), url: z.string().url().optional() })).default([]),
};

const md = (base: string) => glob({ pattern: '**/*.{md,mdx}', base });

const articles = defineCollection({
  loader: md('./src/content/articles'),
  schema: z.object({
    ...common,
    format: z.enum([
      'fundamentals', 'working-principle', 'explanation', 'troubleshooting', 'comparison',
      'equipment', 'application', 'case-study', 'tutorial',
    ]),
    pillar: z.boolean().default(false), // the main article of a subcategory cluster
  }),
});

const tutorials = defineCollection({
  loader: md('./src/content/tutorials'), // folder per series: tutorials/<series>/<lesson>.md
  schema: z.object({
    ...common,
    series: z.string(),
    order: z.number().int().positive(), // lesson number; slugs never contain "part-n"
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
  }),
});

const interview = defineCollection({
  loader: md('./src/content/interview'),
  schema: z.object({
    ...common,
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('intermediate'),
    experience: z.array(z.enum(['fresher', '1-3', '3-7', 'senior'])).default([]),
    roles: z.array(z.string()).default([]),
    questions: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(), // markdown allowed
          type: z.enum(['descriptive', 'mcq', 'scenario']).default('descriptive'),
          options: z.array(z.string()).optional(), // MCQ only
          correct: z.number().int().nonnegative().optional(), // MCQ only: index into options
          difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
          related: z.string().optional(), // URL of the deeper article
        }),
      )
      .default([]),
  }),
});

const projects = defineCollection({
  loader: md('./src/content/projects'),
  schema: z.object({
    ...common,
    level: z.enum(['diploma', 'undergraduate', 'postgraduate']),
    components: z.array(z.object({ name: z.string(), spec: z.string(), qty: z.number() })).default([]),
  }),
});

const resources = defineCollection({
  loader: md('./src/content/resources'),
  schema: z.object({
    ...common,
    type: z.enum(['notes', 'reference-guides', 'terminology', 'standards-references', 'diagrams', 'software', 'external']),
    file: z.object({ href: z.string(), format: z.string(), sizeKb: z.number(), pages: z.number().optional() }).optional(),
  }),
});

export const collections = { articles, tutorials, interview, projects, resources };

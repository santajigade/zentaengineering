// Site-wide settings. Only true information here.
// PREVIEW=1 builds the private review copy (preview.zentaengineering.com): drafts shown, never indexed.
export const IS_PREVIEW = process.env.PREVIEW === '1';
const LAUNCHED = false; // set true at launch (Phase 6)

export const SITE = {
  name: 'Zenta Engineering',
  url: IS_PREVIEW ? 'https://preview.zentaengineering.com' : 'https://zentaengineering.com',
  tagline: 'Understand the Principles. Explore the Applications. Master Engineering.',
  description:
    'Articles, tutorials, interview preparation and projects across engineering disciplines, for students and working engineers.',
  email: 'contact@zentaengineering.com', // TODO: confirm contact email
  // Until launch: the whole site is noindex and robots.txt blocks crawlers.
  launched: LAUNCHED && !IS_PREVIEW,
  // Items go live only when they have a reviewedDate (technical review before publishing).
  requireReview: true,
  // A discipline page is indexable from this many live items; a subcategory archive from subcategoryMinItems.
  disciplineMinItems: 6,
  subcategoryMinItems: 8,
  // AdSense publisher ID, e.g. 'ca-pub-1234567890123456'. Leave empty until approved.
  adsenseClient: '',
  // Ad slots on or off (master plan, section M). Nothing renders while adsenseClient is empty.
  ads: { inContent1: true, inContent2: true, sidebar: true, endOfArticle: true, categoryList: true },
  // Show dashed placeholders where ads will go (for layout review only; keep false on the live site).
  showAdPlaceholders: false,
  // Newsletter form POST URL from MailerLite or Brevo. The signup box is hidden while empty.
  newsletterAction: '',
  ga4: '', // GA4 measurement ID, e.g. 'G-XXXXXXXXXX'
  // Sister sites: linked only inside content, never in menus.
  sister: {
    calculator: 'https://zentacalculator.com',
    instrumentation: 'https://www.instrumentationblog.in',
  },
  // Homepage "Popular topics" chips and mega menu row: [label, href]
  popularTopics: [
    ['Transformers', '/electrical-engineering/transformers/'],
    ['PLC', '/automation-robotics/plc/'],
    ['Centrifugal pumps', '/mechanical-engineering/pumps-compressors-turbines/'],
    ['Heat exchangers', '/chemical-engineering/heat-exchangers/'],
    ['Solar PV', '/renewable-energy/solar-pv/'],
    ['Power electronics', '/electronics-engineering/power-electronics/'],
  ] as [string, string][],
};

export interface Person {
  slug: string;
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  linkedin?: string;
  photo?: string; // public path; none = brand mark
  isPerson: boolean; // true = a real person (schema Person), false = the publication (schema Organization)
}

export const AUTHORS: Record<string, Person> = {
  'santaji-gadepatil': {
    slug: 'santaji-gadepatil',
    name: 'Santaji Gadepatil',
    role: 'Founder and Editor',
    bio: 'Electronics and Telecommunication engineer working in industrial instrumentation and automation. Writes the Electronics Engineering articles on Zenta Engineering.',
    credentials: ['B.E. Electronics and Telecommunication Engineering'],
    linkedin: 'https://www.linkedin.com/in/santaji-gadepatil6680/',
    photo: '/images/authors/santaji-gadepatil.webp',
    isPerson: true,
  },
  'editorial-staff': {
    slug: 'editorial-staff',
    name: 'Editorial Staff',
    role: 'Zenta Engineering',
    bio: 'Articles written by the Zenta Engineering editorial staff are checked by our technical team against the references listed on each page, following our editorial policy.',
    credentials: [],
    isPerson: false,
  },
};

// Who reviews content (shown as "Reviewed by ...").
export const REVIEWER_DEFAULT = 'Technical Team';

/** Author rule (approved 6 Nov 2026): Electronics articles by Santaji Gadepatil, all others by Editorial Staff. */
export function authorFor(data: { author?: string; discipline: string }): Person {
  if (data.author && AUTHORS[data.author]) return AUTHORS[data.author];
  return data.discipline === 'electronics-engineering' ? AUTHORS['santaji-gadepatil'] : AUTHORS['editorial-staff'];
}

// Main menu: exactly the 7 approved items (master plan, section C).
export const MAIN_NAV = [
  { label: 'Home', href: '/' },
  { label: 'Engineering Categories', href: '/engineering-categories/', mega: true },
  { label: 'Tutorials and Guides', href: '/tutorials/' },
  { label: 'Interview Questions', href: '/interview-questions/' },
  { label: 'Engineering Projects', href: '/projects/' },
  { label: 'Resources', href: '/resources/' },
  { label: 'About Us', href: '/about/' },
];

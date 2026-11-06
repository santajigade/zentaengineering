// Site-wide settings. Only true information here.
export const SITE = {
  name: 'Zenta Engineering',
  url: 'https://zentaengineering.com',
  tagline: 'Engineering explained clearly, from first principles to the plant floor.',
  description:
    'Articles, tutorials, interview preparation and projects across 20 engineering disciplines, for students and working engineers.',
  email: 'contact@zentaengineering.com', // TODO: confirm contact email
  // Until launch: the whole site is noindex and robots.txt blocks crawlers.
  launched: false,
  // Items go live only when they have a reviewedDate (technical review before publishing).
  requireReview: true,
  // Hide a subcategory card and keep its archive noindex until it has this many live items.
  subcategoryMinItems: 8,
  // AdSense publisher ID, e.g. 'ca-pub-1234567890123456'. Leave empty until approved.
  adsenseClient: '',
  // Ad slots on or off (master plan, section M). Nothing renders while adsenseClient is empty.
  ads: { inContent1: true, inContent2: true, sidebar: true, endOfArticle: true, categoryList: true },
  ga4: '', // GA4 measurement ID, e.g. 'G-XXXXXXXXXX'
  // Sister sites: linked only inside content, never in menus.
  sister: {
    calculators: 'https://zentacalculators.com',
    instrumentation: 'https://www.instrumentationblog.in',
  },
};

export const AUTHOR = {
  slug: 'santaji-gadepatil',
  name: 'Santaji Gadepatil',
  role: 'Founder and Editor',
  bio: 'Electronics and Telecommunication engineer working in industrial instrumentation and automation. I write and review Zenta Engineering content for technical accuracy.',
  credentials: ['B.E. Electronics and Telecommunication Engineering'] as string[],
  linkedin: 'https://www.linkedin.com/in/santaji-gadepatil6680/',
};

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

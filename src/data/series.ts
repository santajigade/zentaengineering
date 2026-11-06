// Tutorial series metadata. Lessons live in src/content/tutorials/<series>/ with `series` and `order`.
export interface Series { slug: string; title: string; discipline: string; difficulty: string; description: string }
export const SERIES: Series[] = [
  {
    slug: 'plc-programming', title: 'PLC Programming Tutorial', discipline: 'automation-robotics', difficulty: 'Beginner',
    description: 'Seven lessons from what a PLC is to practical applications, following IEC 61131-3. Each lesson ends with practice questions.',
  },
];
export const getSeries = (slug: string) => SERIES.find((s) => s.slug === slug);

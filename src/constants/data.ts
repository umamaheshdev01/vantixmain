import type {
  CaseStudy,
  Tier,
  MethodStep,
  Testimonial,
  FaqItem,
  Standard,
  StatItem,
  ComparisonRow,
  WorkOutcomeStat,
} from '@/types';

// ----------------------------------------------------------------
// Home — Hero Stats
// ----------------------------------------------------------------
export const HERO_STATS: StatItem[] = [
  { value: 190, suffix: 'M+', label: 'views generated' },
  { value: 4,   suffix: ' yrs', label: 'of brand building' },
  { value: 8000, suffix: '+', label: 'videos created' },
];

// ----------------------------------------------------------------
// Home — Selected Work Cases
// ----------------------------------------------------------------
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-01',
    number: '01',
    client: 'SFD.inc',
    metric: '+150K',
    label: 'views in 45 days',
    gradient: 'linear-gradient(150deg, #17140D, #0E0B06)',
  },
  {
    id: 'case-02',
    number: '02',
    client: 'Piyush pohekar',
    metric: '+8',
    label: 'long form videos in just 28 days',
    gradient: 'linear-gradient(150deg, #0E0B06, #F4BE1B 220%)',
  },
  {
    id: 'case-03',
    number: '03',
    client: 'Disha Methi Khandelwal - TheDMK',
    metric: '+30%',
    label: 'watch-through on long-form',
    gradient: 'linear-gradient(150deg, #241f14, #17140D)',
  },
];

// ----------------------------------------------------------------
// Home — Tiers (preview / 3-col)
// ----------------------------------------------------------------
export const TIERS: Tier[] = [
  {
    id: 'basic',
    number: '01',
    name: 'Basic',
    tag: 'The content engine starter',
    features: [
      'Short-form content (Reels / Shorts / TikTok)',
      'Carousels (X / IG / LinkedIn) - 2 per week',
       'One Long-form (YouTube)',
      'Scripting',
      'Single-platform management',
      'Monthly performance report (1 platform)',
    ],
    isFlagship: false,
    whoFor: 'Early-stage tech teams with expertise to share and no consistent content output yet.',
    subtitle: 'The content engine starter — for teams getting a serious rhythm going.',
  },
  {
    id: 'premium',
    number: '02',
    name: 'Premium',
    tag: 'The growth partner',
    features: [
      'Everything in Basic',
      'Carousels (X / IG / LinkedIn) - 4 per week',
      '4 - Long-form (YouTube)',
      'Multi-platform management',
      'Dedicated project manager',
      'Senior storytelling editors',

    ],
    isFlagship: false,
    whoFor: 'Funded tech companies ready to compound audience across every channel that matters.',
    subtitle: 'The growth partner — a full multi-platform engine with senior craft.',
  },
  {
    id: 'studio',
    number: '03',
    name: 'VGM Studio',
    tag: 'Full-service flagship',
    features: [
      'Everything in Premium',
      'Full shooting — we fly to you',
      'Creative & shoot direction',
      'All-platform management',
      'Top-priority senior team',
    ],
    isFlagship: true,
    whoFor: 'Category leaders who want a studio, not a vendor — full production, direction, and priority.',
    subtitle: 'Full-service flagship — our highest-craft, deepest partnership.',
  },
];

// ----------------------------------------------------------------
// Home — Numbers / Stats
// ----------------------------------------------------------------
export const HOME_STATS: StatItem[] = [
  { value: 190, suffix: 'M+',  label: 'views generated for partners' },
  { value: 14,  suffix: 'k',   label: 'watch-hours produced' },
  { value: 38,  suffix: '%', prefix: '+', label: 'avg. retention lift' },
  { value: 3,   suffix: '',    label: 'partners at a time — by choice' },
];

// ----------------------------------------------------------------
// Home — Method Steps
// ----------------------------------------------------------------
export const METHOD_STEPS: MethodStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'We learn your product/service, your buyer, and what actually moves them — before a single frame is shot.',
  },
  {
    number: '02',
    title: 'Script & Direct',
    description: 'Senior storytellers turn expertise into narrative. Every piece is not just assembled but directed intentionally',
  },
  {
    number: '03',
    title: 'Produce',
    description: 'On-location shoots — we fly to you on your demand — plus editing from people who understand story better than 99% in the segment.',
  },
  {
    number: '04',
    title: 'Report & Compound',
    description: 'Monthly reports of impact on the brand and pipeline. We double down on what works, and the engine compounds.',
  },
];

// ----------------------------------------------------------------
// Home — Testimonials
// ----------------------------------------------------------------
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: '"They didn\'t hand us content. They handed us an audience — and a way to keep it growing."',
    highlightWord: 'audience',
    author: '[ Piyush pohekar ]',
    role: 'HOC ~ Angel One.in',
    alignRight: false,
  },
  {
    quote: '"The only studio that understood our product well enough to make it interesting."',
    highlightWord: 'interesting',
    author: '[ Disha methi khandelwal ]',
    role: 'Founder - Glow Up Academy',
    alignRight: true,
  },
];

// ----------------------------------------------------------------
// Work — Outcome Stats (Case 01)
// ----------------------------------------------------------------
export const WORK_STATS: WorkOutcomeStat[] = [
  { value: 3.1, decimal: 1, suffix: 'M',   label: 'organic views in the first 90 days' },
  { value: 2,              suffix: '×',    label: 'qualified demo requests, quarter over quarter' },
  { value: 47,  prefix: '+', suffix: '%',  label: 'lift in branded search' },
  { value: 11,             suffix: '',     label: 'pieces shipped per month, on average' },
];

// ----------------------------------------------------------------
// Services — Comparison Table
// ----------------------------------------------------------------
export const COMPARISON_ROWS: ComparisonRow[] = [
  { capability: 'Short-form content (Reels / Shorts / TikTok)', basic: 'yes',       premium: 'yes',      studio: 'yes' },
  { capability: 'Carousels (X / IG / LinkedIn)',                basic: '2 / week',  premium: '4 / week', studio: '4 / week' },
  { capability: 'Long-form content (YouTube)',                  basic: '1 / month', premium: '4 / month', studio: '4 / month' },
  { capability: 'Scripting',                                    basic: 'yes',       premium: 'yes',      studio: 'yes' },
  { capability: 'Monthly performance report',                   basic: 'yes',       premium: 'yes',      studio: 'yes' },
  { capability: 'Platform management',                          basic: 'Single',    premium: 'Multi',    studio: 'All' },
  { capability: 'Dedicated project manager',                    basic: '',          premium: 'yes',      studio: 'yes' },
  { capability: 'Senior storytelling editors',                  basic: '',          premium: 'yes',      studio: 'yes' },
  { capability: 'Full shooting — on location',                  basic: '',          premium: '',         studio: 'yes' },
  { capability: 'Creative & shoot direction',                   basic: '',          premium: '',         studio: 'yes' },
  { capability: 'Top-priority senior team',                     basic: '',          premium: '',         studio: 'yes' },
];

// ----------------------------------------------------------------
// Services — FAQ
// ----------------------------------------------------------------
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Do you publish pricing?',
    answer: 'No. Every partnership is scoped to fit — deliverables, cadence, and seniority differ per client. Enquire and we\'ll send a tailored proposal fast.',
  },
  {
    question: 'Why do you only take a few clients?',
    answer: 'Craft doesn\'t scale by volume. Working with a small number of partners is how we keep quality high and stay genuinely invested in each result.',
  },
  {
    question: 'How does shooting work?',
    answer: 'We arrange shoots per project and fly to you — on location, wherever you are. VGM Studio includes full shooting and direction; other tiers can add it per project.',
  },
  {
    question: 'What makes your editors different?',
    answer: 'They\'re storytelling-first. They understand narrative better than anyone in the segment, which is what turns technical detail into content people actually watch.',
  },
  {
    question: 'How do you prove impact?',
    answer: 'A monthly report tying content performance to its effect on the brand and pipeline — not vanity metrics, but outcomes you can act on.',
  },
  {
    question: 'Can we move up a tier later?',
    answer: 'Yes. Most partners start where they are today and deepen the engagement as the engine compounds.',
  },
];

// ----------------------------------------------------------------
// About — Standards
// ----------------------------------------------------------------
export const STANDARDS: Standard[] = [
  {
    number: '01',
    title: 'Story before format',
    description: 'We decide what to say before we decide how to shoot it. The narrative leads; the platform follows.',
  },
  {
    number: '02',
    title: 'Ship what\'s working',
    description: 'If we wouldn\'t stop scrolling for it, we don\'t publish it. The bar is our own attention.',
  },
  {
    number: '03',
    title: 'Measure what matters',
    description: 'Every month, proof of impact on the brand and pipeline — never vanity dashboards.',
  },
  {
    number: '04',
    title: 'Go Deep, not wide',
    description: 'A few partners, known deeply. We\'d rather go further with fewer than thinner with many.',
  },
];

// ----------------------------------------------------------------
// Contact — Tier Options
// ----------------------------------------------------------------
export const TIER_OPTIONS = ['Basic', 'Premium', 'VGM Studio', 'Not sure yet'] as const;
export type TierOption = typeof TIER_OPTIONS[number];

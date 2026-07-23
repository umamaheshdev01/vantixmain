import type { Metadata } from 'next';
import { FAQ_ITEMS } from '@/constants/data';
import { ServicesHero } from '@/components/sections/Services/ServicesHero';
import { TiersDetail } from '@/components/sections/Services/TiersDetail';
import { Differentiators } from '@/components/sections/Services/Differentiators';
import { ComparisonTable } from '@/components/sections/Services/ComparisonTable';
import { EngagementModel } from '@/components/sections/Services/EngagementModel';
import { FAQ } from '@/components/sections/Services/FAQ';

export const metadata: Metadata = {
  title: 'Services & Engagement Tiers',
  description:
    'Video production, content strategy, and full growth engagements for tech companies. Explore VantixGrowth Media service tiers and how we work with partners.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services & Engagement Tiers — VantixGrowth Media',
    description:
      'Video production, content strategy, and full growth engagements for tech companies. Explore VantixGrowth Media service tiers and how we work with partners.',
    url: '/services',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function Services() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ServicesHero />
      <TiersDetail />
      <Differentiators />
      <ComparisonTable />
      <EngagementModel />
      <FAQ />
    </main>
  );
}

import type { Metadata } from 'next';
import { CaseHero } from '@/components/sections/Work/CaseHero';
import { MediaStill } from '@/components/sections/Work/MediaStill';
import { BriefSection } from '@/components/sections/Work/BriefSection';
import { OutcomeNumbers } from '@/components/sections/Work/OutcomeNumbers';
import { MediaGrid } from '@/components/sections/Work/MediaGrid';
import { PullQuote } from '@/components/sections/Work/PullQuote';
import { NextCase } from '@/components/sections/Work/NextCase';
import { FinalCTA } from '@/components/sections/Work/FinalCTA';

export const metadata: Metadata = {
  title: 'Work & Case Studies',
  description:
    'Selected work from VantixGrowth Media — case studies showing how we turn technical products into content engines with measurable growth outcomes.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Work & Case Studies — VantixGrowth Media',
    description:
      'Selected work from VantixGrowth Media — case studies showing how we turn technical products into content engines with measurable growth outcomes.',
    url: '/work',
  },
};

export default function Work() {
  return (
    <main>
      <CaseHero />
      <MediaStill />
      <BriefSection />
      <OutcomeNumbers />
      <MediaGrid />
      <PullQuote />
      <NextCase />
      <FinalCTA />
    </main>
  );
}

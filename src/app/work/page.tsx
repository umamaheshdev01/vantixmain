import { CaseHero } from '@/components/sections/Work/CaseHero';
import { MediaStill } from '@/components/sections/Work/MediaStill';
import { BriefSection } from '@/components/sections/Work/BriefSection';
import { OutcomeNumbers } from '@/components/sections/Work/OutcomeNumbers';
import { MediaGrid } from '@/components/sections/Work/MediaGrid';
import { PullQuote } from '@/components/sections/Work/PullQuote';
import { NextCase } from '@/components/sections/Work/NextCase';
import { FinalCTA } from '@/components/sections/Work/FinalCTA';

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

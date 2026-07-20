import { ServicesHero } from '@/components/sections/Services/ServicesHero';
import { TiersDetail } from '@/components/sections/Services/TiersDetail';
import { Differentiators } from '@/components/sections/Services/Differentiators';
import { ComparisonTable } from '@/components/sections/Services/ComparisonTable';
import { EngagementModel } from '@/components/sections/Services/EngagementModel';
import { FAQ } from '@/components/sections/Services/FAQ';

export default function Services() {
  return (
    <main>
      <ServicesHero />
      <TiersDetail />
      <Differentiators />
      <ComparisonTable />
      <EngagementModel />
      <FAQ />
    </main>
  );
}

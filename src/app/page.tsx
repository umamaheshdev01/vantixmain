import { Hero } from '@/components/sections/Home/Hero';
import { PromiseSection } from '@/components/sections/Home/Promise';
import { SelectedWork } from '@/components/sections/Home/SelectedWork';
import { Tiers } from '@/components/sections/Home/Tiers';
import { Numbers } from '@/components/sections/Home/Numbers';
import { Method } from '@/components/sections/Home/Method';
import { Testimonials } from '@/components/sections/Home/Testimonials';
import { FounderTeaser } from '@/components/sections/Home/FounderTeaser';
import { CTA } from '@/components/sections/Home/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <PromiseSection />
      <SelectedWork />
      <Tiers />
      {/* <Numbers /> */}
      <Method />
      <Testimonials />
      <FounderTeaser />
      <CTA />
    </main>
  );
}

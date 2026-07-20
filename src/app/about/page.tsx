import { AboutHero } from '@/components/sections/About/AboutHero';
import { Philosophy } from '@/components/sections/About/Philosophy';
import { Founder } from '@/components/sections/About/Founder';
import { WhyFew } from '@/components/sections/About/WhyFew';
import { Standards } from '@/components/sections/About/Standards';

export default function About() {
  return (
    <main>
      <AboutHero />
      <Philosophy />
      <Founder />
      <WhyFew />
      <Standards />
    </main>
  );
}

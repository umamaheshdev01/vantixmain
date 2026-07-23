import type { Metadata } from 'next';
import { AboutHero } from '@/components/sections/About/AboutHero';
import { Philosophy } from '@/components/sections/About/Philosophy';
import { Founder } from '@/components/sections/About/Founder';
import { WhyFew } from '@/components/sections/About/WhyFew';
import { Standards } from '@/components/sections/About/Standards';

export const metadata: Metadata = {
  title: 'About',
  description:
    'The philosophy behind VantixGrowth Media: a small, senior team that partners with a limited number of tech companies to build brands people actually watch.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About — VantixGrowth Media',
    description:
      'The philosophy behind VantixGrowth Media: a small, senior team that partners with a limited number of tech companies to build brands people actually watch.',
    url: '/about',
  },
};

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

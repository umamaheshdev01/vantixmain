import type { Metadata } from 'next';
import { ContactForm } from '@/components/sections/Contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Book a Call',
  description:
    'Start a partnership with VantixGrowth Media. Tell us about your product and we\'ll come back with a tailored proposal — fast.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact — VantixGrowth Media',
    description:
      'Start a partnership with VantixGrowth Media. Tell us about your product and we\'ll come back with a tailored proposal — fast.',
    url: '/contact',
  },
};

export default function Contact() {
  return <ContactForm />;
}

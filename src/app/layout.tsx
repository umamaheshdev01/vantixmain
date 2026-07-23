import type { Metadata, Viewport } from 'next';
import { Providers } from './providers';
import '@/styles/globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vantixgrowth.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'VantixGrowth Media — Content Growth Studio for Tech',
    template: '%s — VantixGrowth Media',
  },
  description:
    'A boutique video & content studio for tech companies. We turn technical depth into a brand people actually watch. 190M+ views generated.',
  keywords: [
    'content growth studio',
    'video content agency for tech',
    'tech content marketing',
    'B2B video production',
    'founder-led content',
    'short-form video agency',
    'YouTube growth for startups',
    'technical content strategy',
  ],
  applicationName: 'VantixGrowth Media',
  authors: [{ name: 'VantixGrowth Media', url: SITE_URL }],
  creator: 'VantixGrowth Media',
  publisher: 'VantixGrowth Media',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'VantixGrowth Media',
    title: 'VantixGrowth Media — Content Growth Studio for Tech',
    description:
      'A boutique video & content studio for tech companies. We turn technical depth into a brand people actually watch. 190M+ views generated.',
    locale: 'en_US',
    images: [
      {
        url: '/firstpic.png',
        width: 1536,
        height: 1024,
        alt: 'VantixGrowth Media — content growth studio for tech companies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VantixGrowth Media — Content Growth Studio for Tech',
    description:
      'A boutique video & content studio for tech companies. We turn technical depth into a brand people actually watch. 190M+ views generated.',
    images: ['/firstpic.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/logov.jpeg',
    apple: '/logov.jpeg',
  },
};

export const viewport: Viewport = {
  themeColor: '#17140D',
  width: 'device-width',
  initialScale: 1,
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VantixGrowth Media',
  url: SITE_URL,
  logo: `${SITE_URL}/logov.jpeg`,
  description:
    'A boutique video & content studio for tech companies. We turn technical depth into a brand people actually watch.',
  email: 'connect@vantixgrowth.com',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'connect@vantixgrowth.com',
    contactType: 'sales',
  },
};

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'VantixGrowth Media',
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <div id="root">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}

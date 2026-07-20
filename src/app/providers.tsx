'use client';

import { useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { CursorProvider } from '@/context/CursorContext';
import { ScrollToTop } from '@/components/layout/ScrollToTop/ScrollToTop';
import { PageTransition } from '@/components/layout/PageTransition/PageTransition';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Footer } from '@/components/layout/Footer/Footer';
import { Cursor } from '@/components/ui/Cursor/Cursor';
import { GrainOverlay } from '@/components/ui/GrainOverlay/GrainOverlay';

function RouterSetup({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Theme updates based on route, or let individual sections handle it via IntersectionObserver
    // as implemented in the hooks. We just ensure we scroll to top on route change.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <>
      <Navbar />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </>
  );
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CursorProvider>
      <ScrollToTop />
      <Cursor />
      <GrainOverlay />
      <RouterSetup>{children}</RouterSetup>
    </CursorProvider>
  );
}

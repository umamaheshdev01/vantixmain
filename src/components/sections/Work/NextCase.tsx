'use client';

import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import styles from './NextCase.module.css';

export function NextCase() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="indigo" data-screen-label="Next Case" className={styles.section}>
      <div className={styles.container}>
        <div data-reveal className={styles.label}>Next case →</div>
        <Link href="/work" data-cursor="View" data-reveal className={styles.row}>
          <span className={styles.headline}>Developer-tools startup — <span className={styles.accent}>2× demo requests</span></span>
          <span className={styles.caseNumber}>Case 02 →</span>
        </Link>
      </div>
    </section>
  );
}

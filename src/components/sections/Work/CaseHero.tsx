'use client';

import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import styles from './CaseHero.module.css';

export function CaseHero() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="indigo" data-screen-label="Case Hero" className={styles.hero}>
      <div className={styles.bgGradient} />
      <div className={styles.blob} />
      <div className={styles.container}>
        <Link href="/work" data-cursor="" className={styles.backLink}>← Selected Work</Link>

        <div data-reveal className={styles.metaRow}>
          <span>[ Case 01 ]</span><span>Fintech infrastructure</span><span>Premium partner</span><span>2025 — ongoing</span>
        </div>

        <h1 className={styles.headline}>
          <span data-reveal-line className={styles.line}>3.1M views in 90 days</span>
          <span data-reveal-line className={styles.line}>from a <span className={styles.accent}>standing start</span>.</span>
        </h1>
      </div>
    </section>
  );
}

'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './AboutCTA.module.css';

export function AboutCTA() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="indigo" className={styles.section}>
      <div className={styles.blob} />

      <div className={styles.container}>
        <h2 className={styles.headline}>
          <span data-reveal-line className={styles.line}>Think we'd be a</span>
          <span data-reveal-line className={styles.line}>good fit? <span className={styles.accent}>Let's talk.</span></span>
        </h2>
      </div>
    </section>
  );
}

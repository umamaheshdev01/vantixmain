'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './AboutHero.module.css';

export function AboutHero() {
  const containerRef = useReveal({ immediate: true });

  return (
    <section ref={containerRef as any} data-theme="indigo" data-screen-label="About Hero" className={styles.hero}>
      <div className={styles.blob} />

      <div className={styles.container}>
        <div data-reveal className={styles.eyebrow}>[ About — the studio ]</div>

        <h1 className={styles.headline}>
          <span data-reveal-line className={styles.line}>We build like</span>
          <span data-reveal-line className={styles.line}>craftsmen, not a <span className={styles.accent}>content mill</span>.</span>
        </h1>
      </div>
    </section>
  );
}

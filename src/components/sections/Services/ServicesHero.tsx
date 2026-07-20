'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './ServicesHero.module.css';

export function ServicesHero() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="indigo" data-screen-label="Services Hero" className={styles.hero}>
      <div className={styles.blob} />
      <div className={styles.container}>
        <div data-reveal className={styles.eyebrow}>[ Services — the content growth engine ]</div>
        <h1 className={styles.headline}>
          <span data-reveal-line className={styles.line}>One engine.</span>
          <span data-reveal-line className={styles.line}>Three depths of <span className={styles.accent}>partnership</span>.</span>
        </h1>
        <p data-reveal className={styles.paragraph}>
          Every partner runs the same machine — content that turns technical depth into audience and pipeline. What changes across tiers is scope, seniority, and how deep we go. No public pricing. We scope each partnership to fit.
        </p>
      </div>
    </section>
  );
}

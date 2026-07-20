'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './ServicesCTA.module.css';

export function ServicesCTA() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="indigo" data-screen-label="Services CTA" className={styles.section}>
      <div className={styles.blob} />
      <div className={styles.container}>
        <h2 className={styles.headline}>
          <span data-reveal-line className={styles.line}>Not sure which tier</span>
          <span data-reveal-line className={styles.line}>fits? <span className={styles.accent}>Let's talk.</span></span>
        </h2>
        <p data-reveal className={styles.paragraph}>
          We take a limited number of partners at a time. Tell us where you're headed and we'll scope the right fit.
        </p>
      </div>
    </section>
  );
}

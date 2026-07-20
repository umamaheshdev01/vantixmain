'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './WhyFew.module.css';

export function WhyFew() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="indigo" className={styles.section}>
      <div className={styles.container}>
        <div data-reveal className={styles.eyebrow}>[ 03 ] Why we work with few</div>
        <h2 data-reveal className={styles.headline}>Scarcity isn't a tactic. It's how the work stays good.</h2>
        <p data-reveal className={styles.paragraph}>
          We take a limited number of partners at a time — because craft doesn't scale by adding logos. Fewer clients means we know your product deeply, move fast, and stay genuinely invested. If we can't do your work justice, we'll tell you.
        </p>
      </div>
    </section>
  );
}

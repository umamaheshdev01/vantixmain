'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './EngagementModel.module.css';

export function EngagementModel() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="indigo" className={styles.section}>
      <div className={styles.blob} />
      <div className={styles.container}>
        <div data-reveal className={styles.eyebrow}>[ 04 — How we work ]</div>
        <h2 data-reveal className={styles.headline}>
          We fly to you. We shoot on location, at your comfort — wherever you are.
        </h2>
        <p data-reveal className={styles.paragraph}>
          Shooting is arranged per project. Our team comes to your office, your event, your city — so the work fits your world, not the other way around. It's how we keep production high-craft without turning your calendar upside down.
        </p>
      </div>
    </section>
  );
}

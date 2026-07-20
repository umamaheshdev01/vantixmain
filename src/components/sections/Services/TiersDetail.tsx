'use client';

import { useReveal } from '@/hooks/useReveal';
import { TIERS } from '@/constants/data';
import { Button } from '../../ui/Button/Button';
import styles from './TiersDetail.module.css';

// Feature wording differs slightly from the Home page's tier preview
// (e.g. "Long-form content (YouTube)" vs Home's "Long-form (YouTube)") —
// this is how the source HTML actually authored the Services tiers detail.
const SERVICES_FEATURES: Record<string, string[]> = {
  basic: [
    'Short-form content (Reels / Shorts / TikTok)',
    'Scripting',
    'Clipping',
    'Single-platform management',
    'Monthly performance report',
  ],
  premium: [
    'Everything in Basic',
    'Long-form content (YouTube)',
    'Carousels (X / Instagram / LinkedIn)',
    'Multi-platform management',
    'Dedicated project manager',
    'Senior storytelling editors',
  ],
  studio: [
    'Everything in Premium',
    'Full shooting — we fly to you',
    'Creative & shoot direction',
    'All-platform management',
    'Top-priority senior team',
  ],
};

export function TiersDetail() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="cream" className={styles.section}>
      <div className={styles.container}>
        <div data-reveal className={styles.eyebrow}>[ 01 — The three tiers ]</div>

        <div className={styles.grid}>
          {TIERS.map((tier) => {
            const isFlagship = tier.isFlagship;
            const features = SERVICES_FEATURES[tier.id] ?? tier.features;

            return (
              <div key={tier.id} data-reveal className={`${styles.card} ${isFlagship ? styles.flagship : ''}`}>
                {isFlagship && <span className={styles.flagshipBadge}>Flagship</span>}
                <div className={styles.number}>{tier.number}</div>
                <div className={styles.name}>{tier.name}</div>
                <div className={styles.subtitle}>{tier.subtitle}</div>

                <div className={styles.whoForLabel}>Who it's for</div>
                <p className={styles.whoForText}>{tier.whoFor}</p>

                <div className={styles.features}>
                  {features.map((feature, idx) => (
                    <div key={idx} className={styles.feature}>
                      <span className={styles.check}>✓</span>
                      <span>{idx === 0 && feature.startsWith('Everything in') ? <strong>{feature}</strong> : feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  to="/contact"
                  // variant={tier.id === 'premium' ? 'primary' : 'inverse'}
                  className={`${styles.enquireBtn} ${isFlagship ? styles.enquireFlagship : ''}`}
                  withArrow
                  magnetic
                >
                  Enquire
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

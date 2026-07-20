'use client';

import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import { TIERS } from '@/constants/data';
import { Button } from '../../ui/Button/Button';
import styles from './Tiers.module.css';

export function Tiers() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="indigo" data-screen-label="Tiers" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <div data-reveal className={styles.eyebrow}>[ 03 — What we do ]</div>
            <h2 data-reveal className={styles.headline}>Three ways to<br/>work with us.</h2>
          </div>
          <div data-reveal className={styles.highlights}>
            <div className={styles.highlightItem}>
              <span className={styles.sparkle}>✦</span>
              <p className={styles.highlightDesc}>
                <strong>Storytelling-first editors.</strong> Senior editors who understand narrative better than anyone in the segment.
              </p>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.sparkle}>✦</span>
              <p className={styles.highlightDesc}>
                <strong>Sales-impact reporting.</strong> Monthly proof of how content moved the brand — and the pipeline.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {TIERS.map((tier, i) => {
            const isFlagship = tier.isFlagship;
            return (
              <div key={tier.id} className={`${styles.card} ${isFlagship ? styles.flagship : ''}`}>
                {isFlagship && <span className={styles.flagshipBadge}>Flagship</span>}
                <div className={styles.cardNumber}>0{i + 1}</div>
                <div className={styles.cardName}>{tier.name}</div>
                <div className={styles.cardTag}>{tier.tag}</div>
                <div className={styles.features}>
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className={styles.featureItem}>
                      <span className={styles.check}>✓</span>
                      <span className={styles.featText}>{feat}</span>
                    </div>
                  ))}
                </div>
                <Button
                  to="/contact"
                  variant={isFlagship ? 'outline' : 'primary'}
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

        <p data-reveal className={styles.footnote}>
          No public pricing — enquire only. <Link href="/services" data-cursor="" className={styles.compareLink}>Compare all tiers →</Link>
        </p>
      </div>
    </section>
  );
}

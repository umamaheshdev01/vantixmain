'use client';

import { useReveal } from '@/hooks/useReveal';
import { useCounter } from '@/hooks/useCounter';
import { HOME_STATS } from '@/constants/data';
import styles from './Numbers.module.css';

function StatBlock({ value, suffix, prefix = '', label, decimal = 0 }: any) {
  const counterRef = useCounter(value, decimal);

  return (
    <div className={styles.statBlock}>
      <div className={styles.valueWrap}>
        <span className={styles.affix}>{prefix}</span>
        <span ref={counterRef as any} className={styles.value}>0</span>
        <span className={styles.affix}>{suffix}</span>
      </div>
      <div className={styles.label}>{label}</div>
      <div className={styles.placeholder}>[ placeholder ]</div>
    </div>
  );
}

export function Numbers() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="cream" className={styles.section}>
      <div className={styles.container}>
        <div data-reveal className={styles.eyebrow}>[ 04 — Outcomes, not vanity ]</div>
        <div className={styles.grid}>
          {HOME_STATS.map((stat, idx) => (
            <StatBlock key={idx} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

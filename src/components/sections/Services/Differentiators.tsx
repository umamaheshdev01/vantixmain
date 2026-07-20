'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './Differentiators.module.css';

const DIFFERENTIATORS = [
  {
    number: '01',
    title: 'Storytelling-first editors',
    description: "Our editors understand narrative better than anyone in the segment. That's the difference between content that fills a feed and content people finish, share, and remember.",
  },
  {
    number: '02',
    title: 'Sales-impact reporting',
    description: 'Every month we show how content performed — and its impact on the brand and pipeline. Not vanity dashboards. Proof you can take to a board.',
  },
];

export function Differentiators() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="indigo" className={styles.section}>
      <div className={styles.container}>
        <div data-reveal className={styles.eyebrow}>[ 02 — Why partners stay ]</div>

        <div className={styles.grid}>
          {DIFFERENTIATORS.map((d) => (
            <div key={d.number} data-reveal className={styles.block}>
              <div className={styles.number}>{d.number}</div>
              <h3 className={styles.title}>{d.title}</h3>
              <p className={styles.description}>{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

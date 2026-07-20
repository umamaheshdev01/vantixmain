'use client';

import { useReveal } from '@/hooks/useReveal';
import { STANDARDS } from '@/constants/data';
import styles from './Standards.module.css';

export function Standards() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="cream" className={styles.section}>
      <div className={styles.container}>
        <div data-reveal className={styles.eyebrow}>[ 04 ] The standards we hold</div>

        <div className={styles.grid}>
          {STANDARDS.map((standard, idx) => (
            <div key={idx} data-reveal className={styles.block}>
              <div className={styles.number}>{standard.number}</div>
              <h3 className={styles.title}>{standard.title}</h3>
              <p className={styles.description}>{standard.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

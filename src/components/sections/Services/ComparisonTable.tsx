'use client';

import { Fragment } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { COMPARISON_ROWS } from '@/constants/data';
import styles from './ComparisonTable.module.css';

export function ComparisonTable() {
  const containerRef = useReveal();

  const renderValue = (val: string) => {
    if (val === '') return <span className={styles.dash}>—</span>;
    if (val === 'yes') return <span className={styles.check}>✓</span>;
    return <span className={styles.textVal}>{val}</span>;
  };

  return (
    <section ref={containerRef as any} data-theme="cream" className={styles.section}>
      <div className={styles.container}>
        <div data-reveal className={styles.eyebrow}>[ 03 — The full deliverables menu ]</div>

        <div data-reveal className={styles.tableWrap}>
          <div className={styles.table}>
            <div className={styles.cell}>Capability</div>
            <div className={styles.headerCell}>Basic</div>
            <div className={styles.headerCell}>Premium</div>
            <div className={`${styles.headerCell} ${styles.flagshipHeader}`}>VGM Studio</div>

            {COMPARISON_ROWS.map((row, idx) => (
              <Fragment key={idx}>
                <div className={`${styles.cell} ${styles.rowCell} ${idx % 2 === 1 ? styles.altRow : ''}`}>{row.capability}</div>
                <div className={`${styles.cell} ${styles.valueCell} ${idx % 2 === 1 ? styles.altRow : ''}`}>{renderValue(row.basic)}</div>
                <div className={`${styles.cell} ${styles.valueCell} ${idx % 2 === 1 ? styles.altRow : ''}`}>{renderValue(row.premium)}</div>
                <div className={`${styles.cell} ${styles.valueCell} ${styles.flagshipCol} ${idx % 2 === 1 ? styles.altRow : ''}`}>{renderValue(row.studio)}</div>
              </Fragment>
            ))}
          </div>
        </div>

        <p data-reveal className={styles.footnote}>Exact inclusions are finalised per partnership — this menu is the full capability set.</p>
      </div>
    </section>
  );
}

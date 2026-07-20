'use client';

import Image from 'next/image';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';
import { CASE_STUDIES } from '@/constants/data';
import styles from './SelectedWork.module.css';

export function SelectedWork() {
  const { wrapperRef, trackRef } = useHorizontalScroll();

  return (
    <section 
      ref={wrapperRef as any}
      data-theme="indigo" 
      data-screen-label="Selected Work"
      data-hwrap
      className={styles.section}
    >
      <div data-hsticky className={styles.stickyPanel}>
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>[ 02 — Selected Work ]</div>
            <h2 className={styles.title}>Recent partnerships.</h2>
          </div>
          <span className={styles.scrollHint}>Scroll →</span>
        </div>
        
        <div className={styles.trackContainer}>
          <div ref={trackRef as any} data-htrack className={styles.track}>
            {CASE_STUDIES.map((study) => (
              <div
                key={study.id}
                className={styles.card}
                style={{ background: study.gradient }}
                data-cursor=""
              >
                {study.image && (
                  <>
                    <Image
                      src={study.image}
                      alt={study.client}
                      fill
                      sizes="(max-width: 820px) 90vw, 42vw"
                      className={styles.cardImage}
                    />
                    <div className={styles.scrim} />
                  </>
                )}
                <div className={styles.wipe} />
                <div className={styles.cardNumber}>[{study.number}]</div>
                <div className={styles.cardContent}>
                  <div className={styles.client}>{study.client}</div>
                  <div className={styles.metric}>{study.metric}</div>
                  <div className={styles.metricLabel}>{study.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

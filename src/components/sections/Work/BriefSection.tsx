'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './BriefSection.module.css';

export function BriefSection() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="cream" className={styles.section}>
      <div className={styles.container}>
        <div data-reveal className={styles.block}>
          <div className={styles.label}>[ 01 ] The brief</div>
          <p className={styles.brief}>
            A category-defining product, invisible to its market. Deep expertise, zero audience, and a founder who knew content mattered but had no engine to make it happen.
          </p>
        </div>

        <div data-reveal className={styles.block}>
          <div className={styles.label}>[ 02 ] What we did</div>
          <div>
            <p className={styles.paragraph}>
              We built a short-form engine around the founder's expertise — scripted, shot on location, and edited by our senior storytelling team. Every piece designed to travel, then measured against pipeline.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}><span className={styles.dash}>—</span>Weekly short-form across LinkedIn, X, and Shorts</li>
              <li className={styles.listItem}><span className={styles.dash}>—</span>On-location shoot days, quarterly</li>
              <li className={styles.listItem}><span className={styles.dash}>—</span>Narrative-led scripting on every asset</li>
              <li className={styles.listItem}><span className={styles.dash}>—</span>Monthly report tied to demo requests</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

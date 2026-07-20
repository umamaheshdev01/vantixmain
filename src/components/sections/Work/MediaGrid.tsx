'use client';

import { useReveal } from '@/hooks/useReveal';
import { PlaceholderMedia } from '../../ui/PlaceholderMedia/PlaceholderMedia';
import styles from './MediaGrid.module.css';

export function MediaGrid() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="cream" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div data-reveal>
            <PlaceholderMedia
              aspectRatio="4/5"
              gradient="linear-gradient(150deg, #241f14, #17140D)"
              withGlow={false}
              withCorners
              className={styles.media}
            >
              <div className={styles.label}>[ image1.jpg — placeholder ]</div>
            </PlaceholderMedia>
          </div>
          <div data-reveal>
            <PlaceholderMedia
              aspectRatio="4/5"
              gradient="linear-gradient(150deg, #17140D, #241a0c)"
              glowStyle={{ top: 0, right: 0, width: '60%', height: '60%', background: 'radial-gradient(circle at 70% 30%, rgba(244,190,27,0.4), transparent 62%)' }}
              withCorners
              className={styles.media}
            >
              <div className={styles.label}>[ still — placeholder ]</div>
            </PlaceholderMedia>
          </div>
        </div>
      </div>
    </section>
  );
}

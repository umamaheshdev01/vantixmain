'use client';

import { useReveal } from '@/hooks/useReveal';
import { PlaceholderMedia } from '../../ui/PlaceholderMedia/PlaceholderMedia';
import styles from './MediaStill.module.css';

export function MediaStill() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="cream" className={styles.section}>
      <div className={styles.container}>
        <div data-reveal>
          <PlaceholderMedia
            aspectRatio="16/8"
            gradient="linear-gradient(135deg, #17140D, #0E0B06)"
            glowStyle={{ top: 0, right: 0, width: '55%', height: '70%', background: 'radial-gradient(circle at 70% 30%, rgba(244,190,27,0.4), transparent 60%)' }}
            className={styles.media}
          >
            <div className={styles.playRow}>
              <span data-cursor="Play" className={styles.playBtn}>▶</span>
              <span className={styles.playLabel}>[ video1.mp4 — hero cut · placeholder ]</span>
            </div>
          </PlaceholderMedia>
        </div>
      </div>
    </section>
  );
}

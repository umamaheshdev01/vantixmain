'use client';

import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';
import styles from './Promise.module.css';

export function PromiseSection() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="cream" data-screen-label="Promise" className={styles.section}>
      <div className={styles.container}>
        <div data-reveal>
          <div className={styles.eyebrow}>[ 01 — Why most tech content fails ]</div>
          <div className={styles.mediaWrap}>
            <Image
              src="/firstpic.png"
              alt=""
              fill
              sizes="(max-width: 820px) 100vw, 45vw"
              className={styles.mediaImage}
              priority
            />
            <span aria-hidden="true" className={`${styles.corner} ${styles.tl}`} />
            <span aria-hidden="true" className={`${styles.corner} ${styles.tr}`} />
            <span aria-hidden="true" className={`${styles.corner} ${styles.bl}`} />
            <span aria-hidden="true" className={`${styles.corner} ${styles.br}`} />
          </div>
        </div>
        
        <div>
          <h2 className={styles.headline}>
            <span data-reveal-line className={styles.line}>Great products lose to</span>
            <span data-reveal-line className={styles.line}>worse ones — because</span>
            <span data-reveal-line className={styles.line}>nobody's <span className={styles.highlight}>watching</span>.</span>
          </h2>
          <p data-reveal className={styles.paragraph}>
            We build the content engine that fixes that — video and stories that compound attention into pipeline, month after month. Not campaigns. A machine.
          </p>
        </div>
      </div>
    </section>
  );
}

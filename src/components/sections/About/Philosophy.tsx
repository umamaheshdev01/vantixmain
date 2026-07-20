'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './Philosophy.module.css';

export function Philosophy() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="cream" className={styles.section}>
      <div className={styles.container}>
        <div data-reveal className={styles.eyebrow}>[ 01 ] Philosophy</div>
        <div>
          <p data-reveal className={styles.lead}>
            Most content agencies optimise for volume. We optimise for the piece and volume — and for the compounding effect of doing every piece well.
          </p>
          <p data-reveal className={styles.paragraph}>
            The Craftsman archetype guides everything: quiet, precise, work-obsessed. We'd rather ship fewer things that land than flood a feed with things that don't. That discipline is why our partners' audiences grow instead of churn.
          </p>
          <p data-reveal className={styles.paragraphLast}>
            Understated confidence. Results over noise. That's the whole studio in a sentence.
          </p>
        </div>
      </div>
    </section>
  );
}

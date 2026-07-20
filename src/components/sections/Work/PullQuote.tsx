'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './PullQuote.module.css';

export function PullQuote() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="cream" className={styles.section}>
      <blockquote data-reveal className={styles.quoteBlock}>
        <p className={styles.quote}>
          "They didn't hand us content. They handed us an <span className={styles.highlight}>audience</span> — and a way to keep it growing."
        </p>
        <footer className={styles.footer}>
          — [ Placeholder ] · VP Marketing
        </footer>
      </blockquote>
    </section>
  );
}

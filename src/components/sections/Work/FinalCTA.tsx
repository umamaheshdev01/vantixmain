'use client';

import { useReveal } from '@/hooks/useReveal';
import { Button } from '../../ui/Button/Button';
import styles from './FinalCTA.module.css';

export function FinalCTA() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="indigo" className={styles.section}>
      <div className={styles.blob} />
      <div className={styles.container}>
        <h2 className={styles.headline}>
          <span data-reveal-line className={styles.line}>Want results like</span>
          <span data-reveal-line className={styles.line}>these? <span className={styles.accent}>Let's build.</span></span>
        </h2>
        <div data-reveal className={styles.actionWrap}>
          <Button to="/contact" magnetic withArrow>
            Start a project
          </Button>
        </div>
      </div>
    </section>
  );
}

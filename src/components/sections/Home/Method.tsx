'use client';

import { useReveal } from '@/hooks/useReveal';
import { METHOD_STEPS } from '@/constants/data';
import { Reveal } from '../../ui/Reveal/Reveal';
import styles from './Method.module.css';

export function Method() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="indigo" data-screen-label="Method" className={styles.section}>
      <div className={styles.container}>
        <div data-reveal className={styles.eyebrow}>[ 04 — The Method ]</div>
        <h2 data-reveal className={styles.headline}>Deliberate. Repeatable.<br />Built to compound.</h2>

        <div className={styles.list}>
          {METHOD_STEPS.map((step) => (
            <Reveal key={step.number} className={styles.row}>
              <div className={styles.number}>{step.number}</div>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

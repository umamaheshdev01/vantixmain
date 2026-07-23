'use client';

import { useReveal } from '@/hooks/useReveal';
import { Button } from '../../ui/Button/Button';
import { Reveal } from '../../ui/Reveal/Reveal';
import styles from './CTA.module.css';

const REASONS = [
  {
    number: '01',
    title: 'Deep, not wide',
    description: 'We learn your product like insiders — impossible across a long client list.',
  },
  {
    number: '02',
    title: 'Senior hands only',
    description: 'The people who pitch you are the people who make the work. No juniors, no handoffs.',
  },
  {
    number: '03',
    title: 'Genuinely invested',
    description: 'A short roster means your growth is our portfolio. We win only when you do.',
  },
];

export function CTA() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="indigo" data-screen-label="Final CTA" className={styles.section}>
      <div className={styles.blobWrap}>
        <div className={styles.blob} />
      </div>

      <div className={styles.container}>
        <div data-reveal className={styles.eyebrow}>[ 06 — Limited partnerships ]</div>

        <h2 className={styles.headline}>
          <span data-reveal className={styles.line}>We take a limited number</span>
          <span data-reveal className={styles.line}>of partners at a time.</span>
          <span data-reveal className={styles.line}>If the fit's right, <span className={styles.accent}>let's build</span>.</span>
        </h2>

        <p data-reveal className={styles.paragraph}>
          We cap the roster on purpose. A few partners at a time is the only way to stay obsessed with each one's craft, speed, and outcomes — so we say no far more than we say yes.
        </p>

        <Reveal className={styles.reasons}>
          {REASONS.map((r) => (
            <div key={r.number} className={styles.reason}>
              <div className={styles.reasonNumber}>{r.number}</div>
              <h3 className={styles.reasonTitle}>{r.title}</h3>
              <p className={styles.reasonDesc}>{r.description}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className={styles.actions}>
          <Button to="/contact" magnetic withArrow className={styles.actionBtn}>
            Book a call
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

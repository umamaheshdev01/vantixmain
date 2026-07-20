'use client';

import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';
import { Reveal } from '../../ui/Reveal/Reveal';
import { PlaceholderMedia } from '../../ui/PlaceholderMedia/PlaceholderMedia';
import styles from './Founder.module.css';

export function Founder() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef as any} data-theme="cream" className={styles.section}>
      <div className={styles.container}>
        <Reveal className={styles.mediaWrap}>
          <PlaceholderMedia
            aspectRatio="4/5"
            withGlow={false}
            className={styles.media}
          >
            <Image
              src="/ai3.png"
              alt=""
              fill
              sizes="(max-width: 960px) 100vw, 40vw"
              className={styles.founderImage}
            />
          </PlaceholderMedia>
        </Reveal>

        <div className={styles.content}>
          <div data-reveal className={styles.eyebrow}>[ 02 ] The founder</div>

          <p data-reveal className={styles.quote}>
            "I started VantixGrowth because tech companies deserve content made with the same rigour they put into their product."
          </p>

          <p data-reveal className={styles.paragraph}>
            Years of making video and stories for tech taught one thing: the best work comes from small teams who care. So we kept it small on purpose — and the people who pitch you are the people who make the work.
          </p>

          <div data-reveal className={styles.signature}>
            — [ RajaHarsha ] · Founder &amp; Managing Director
          </div>
        </div>
      </div>
    </section>
  );
}

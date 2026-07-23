'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import { useMagneticRef } from '@/hooks/useMagnetic';
import { Reveal } from '../../ui/Reveal/Reveal';
import { PlaceholderMedia } from '../../ui/PlaceholderMedia/PlaceholderMedia';
import styles from './FounderTeaser.module.css';

export function FounderTeaser() {
  const containerRef = useReveal();
  const linkRef = useMagneticRef<HTMLAnchorElement>();

  return (
    <section ref={containerRef as any} data-theme="cream" className={styles.section}>
      <div className={styles.container}>
        <Reveal className={styles.mediaWrap}>
          <PlaceholderMedia
            aspectRatio="4/5"
            parallaxSpeed={0.06}
            withGlow={false}
            className={styles.media}
          >
            <Image
              src="/ai2.png"
              alt=""
              fill
              sizes="(max-width: 820px) 100vw, 45vw"
              className={styles.founderImage}
            />
          </PlaceholderMedia>
        </Reveal>

        <div>
          <div data-reveal className={styles.eyebrow}>[ 05 — The studio ]</div>
          <p data-reveal className={styles.paragraph}>
            We're a small studio by design. Few partners, deep work, no account-manager theatre. The people who pitch you are the people who make the work — and we only take projects we're sure we can grow.
          </p>
          <Link href="/about" ref={linkRef as any} data-magnetic data-cursor="" className={styles.link}>
            Read our philosophy →
          </Link>
        </div>
      </div>
    </section>
  );
}

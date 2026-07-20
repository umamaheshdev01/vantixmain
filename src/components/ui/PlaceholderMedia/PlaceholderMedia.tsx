'use client';

import { ReactNode, CSSProperties } from 'react';
import styles from './PlaceholderMedia.module.css';
import { useParallax } from '@/hooks/useParallax';
import { useCursor } from '@/hooks/useCursor';

interface PlaceholderMediaProps {
  aspectRatio?: string;
  gradient?: string;
  label?: string;
  sublabel?: string;
  withPlayBtn?: boolean;
  withGlow?: boolean;
  glowStyle?: CSSProperties;
  withCorners?: boolean;
  parallaxSpeed?: number;
  className?: string;
  children?: ReactNode;
}

export function PlaceholderMedia({
  aspectRatio = '4/3',
  gradient = 'linear-gradient(150deg, var(--indigo), var(--indigo-deep))',
  label = '[ media placeholder ]',
  sublabel,
  withPlayBtn = false,
  withGlow = true,
  glowStyle,
  withCorners = true,
  parallaxSpeed = 0,
  className = '',
  children,
}: PlaceholderMediaProps) {
  const parallaxRef = useParallax(parallaxSpeed);
  const cursorRef = useCursor();

  return (
    <div
      ref={(node) => {
        if (parallaxSpeed !== 0) (parallaxRef as any).current = node;
        if (withPlayBtn) (cursorRef as any).current = node;
      }}
      className={`${styles.container} ${className}`}
      style={{ aspectRatio, background: gradient }}
      data-cursor={withPlayBtn ? 'Play' : undefined}
    >
      {withGlow && <div className={styles.glow} style={glowStyle} />}
      
      {withCorners && (
        <>
          <span className={`${styles.corner} ${styles.tl}`} aria-hidden="true" />
          <span className={`${styles.corner} ${styles.tr}`} aria-hidden="true" />
          <span className={`${styles.corner} ${styles.bl}`} aria-hidden="true" />
          <span className={`${styles.corner} ${styles.br}`} aria-hidden="true" />
        </>
      )}

      {children ? (
        children
      ) : (
        <div className={styles.content}>
          {withPlayBtn && (
            <span className={styles.playBtn}>▶</span>
          )}
          <div className={styles.labels}>
            <span className={styles.label}>{label}</span>
            {sublabel && <span className={styles.sublabel}>{sublabel}</span>}
          </div>
        </div>
      )}
    </div>
  );
}

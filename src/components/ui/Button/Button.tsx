'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { useMagneticRef } from '@/hooks/useMagnetic';
import { useCursor } from '@/hooks/useCursor';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  variant?: 'primary' | 'outline' | 'inverse';
  className?: string;
  magnetic?: boolean;
  withArrow?: boolean;
  cursorLabel?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  newTab?: boolean;
}

export function Button({
  children,
  href,
  to,
  variant = 'primary',
  className = '',
  magnetic = true,
  withArrow = false,
  cursorLabel,
  onClick,
  type = 'button',
  disabled = false,
  newTab = false,
}: ButtonProps) {
  const magneticRef = useMagneticRef<HTMLAnchorElement & HTMLButtonElement>();
  const cursorRef = useCursor();

  const combinedRef = (node: HTMLAnchorElement & HTMLButtonElement) => {
    // Note: useMagneticRef returns a ref object. We need to assign to its current.
    if (magnetic) {
      (magneticRef as React.MutableRefObject<HTMLElement | null>).current = node;
    }
    (cursorRef as React.MutableRefObject<HTMLElement | null>).current = node;
  };

  const cssClass = `${styles.btn} ${styles[variant]} ${className} ${disabled ? styles.disabled : ''}`;
  const dataCursor = cursorLabel ?? '';

  const content = (
    <>
      <span className={styles.sweep} aria-hidden="true" />
      <span className={styles.content}>
        {children}
        {withArrow && (
          <span className={styles.arrow} data-arrow aria-hidden="true">
            →
          </span>
        )}
      </span>
    </>
  );

  if (to) {
    return (
      <Link
        href={to}
        ref={combinedRef as any}
        className={cssClass}
        data-cursor={dataCursor}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        ref={combinedRef as any}
        className={cssClass}
        data-cursor={dataCursor}
        onClick={onClick}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      ref={combinedRef as any}
      className={cssClass}
      data-cursor={dataCursor}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

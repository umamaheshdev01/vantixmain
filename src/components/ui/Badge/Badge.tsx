'use client';

import styles from './Badge.module.css';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'brick' | 'outline';
}

export function Badge({ children, className = '', variant = 'brick' }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
}

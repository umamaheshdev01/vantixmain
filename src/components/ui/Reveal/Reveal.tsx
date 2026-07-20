'use client';

import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import styles from './Reveal.module.css';

interface RevealProps {
  children: React.ReactNode;
  variant?: 'fade' | 'line';
  as?: React.ElementType;
  className?: string;
}

export function Reveal({ children, variant = 'fade', as: Tag = 'div', className = '' }: RevealProps) {
  const ref = useReveal();
  
  const dataAttr = variant === 'line' ? { 'data-reveal-line': '' } : { 'data-reveal': '' };

  return (
    <Tag ref={ref as any} {...dataAttr} className={className}>
      {children}
    </Tag>
  );
}

interface RevealGroupProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
}

export function RevealGroup({ children, as: Tag = 'div', className = '' }: RevealGroupProps) {
  const ref = useReveal();

  return (
    <Tag ref={ref as any} data-reveal-group="" className={className}>
      {children}
    </Tag>
  );
}

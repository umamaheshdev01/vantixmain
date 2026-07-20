'use client';

import styles from './SectionLabel.module.css';
import { Reveal } from '../Reveal/Reveal';

interface SectionLabelProps {
  number?: string;
  text: string;
  theme?: 'indigo' | 'cream' | 'brick' | 'light';
  className?: string;
}

export function SectionLabel({ number, text, theme = 'brick', className = '' }: SectionLabelProps) {
  const content = number ? `[ ${number} — ${text} ]` : `[ ${text} ]`;
  
  return (
    <Reveal>
      <div className={`${styles.label} ${styles[theme]} ${className}`}>
        {content}
      </div>
    </Reveal>
  );
}

'use client';

import { useReveal } from '@/hooks/useReveal';
import { TESTIMONIALS } from '@/constants/data';
import { Reveal } from '../../ui/Reveal/Reveal';
import styles from './Testimonials.module.css';

export function Testimonials() {
  const containerRef = useReveal();

  const highlightText = (text: string, highlightWord: string) => {
    if (!highlightWord) return text;
    const parts = text.split(new RegExp(`(${highlightWord})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === highlightWord.toLowerCase() ? (
        <span key={i} className={styles.highlight}>{part}</span>
      ) : part
    );
  };

  return (
    <section ref={containerRef as any} data-theme="cream" className={styles.section}>
      <div className={styles.container}>
        {TESTIMONIALS.map((t, idx) => (
          <Reveal key={idx} as="blockquote" className={`${styles.quoteBlock} ${t.alignRight ? styles.alignRight : ''}`}>
            <p className={styles.quote}>
              {highlightText(t.quote, t.highlightWord)}
            </p>
            <footer className={styles.footer}>
              — {t.author} · {t.role}
            </footer>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

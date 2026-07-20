'use client';

import { useRef, useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { FAQ_ITEMS } from '@/constants/data';
import styles from './FAQ.module.css';

export function FAQ() {
  const containerRef = useReveal();
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (idx: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <section ref={containerRef as any} data-theme="cream" className={styles.section}>
      <div className={styles.container}>
        <div data-reveal className={styles.eyebrow}>[ 05 — Questions ]</div>

        <div data-faq className={styles.list}>
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openSet.has(idx);
            return (
              <div key={idx} className={styles.item}>
                <button
                  className={styles.questionBtn}
                  onClick={() => toggle(idx)}
                  data-cursor=""
                >
                  <span className={styles.question}>{item.question}</span>
                  <span className={styles.icon}>{isOpen ? '–' : '+'}</span>
                </button>

                <div
                  ref={(el) => { panelRefs.current[idx] = el; }}
                  className={styles.answerWrap}
                  style={{ maxHeight: isOpen ? `${panelRefs.current[idx]?.scrollHeight ?? 400}px` : '0' }}
                >
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

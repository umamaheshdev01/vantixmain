'use client';

import { useEffect, useRef, useState } from 'react';
import { useParallax } from '@/hooks/useParallax';
import { useReveal } from '@/hooks/useReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useScrambleTypewriter } from '@/hooks/useScrambleTypewriter';
import { Button } from '../../ui/Button/Button';
import styles from './Hero.module.css';

const HIGHLIGHT_TEXT = 'Actually Watch';

// Traced from the reference marker-underline sketch: mostly straight
// segments with sharp peaks/valleys and a couple of flatter runs, rather
// than a smooth wavy curve.
const UNDERLINE_PATH = 'M0 24 L13 20 L22.4 37 L27.1 50 L33 42 L40 26 L47.1 39 L54.2 36 L61.2 30 '
  + 'L68.3 38 L75.4 38 L82.4 33 L89.5 29 L96.6 22 L101.3 29 L106 30 L110.7 26 L115.4 29 L120.1 28 '
  + 'L127.2 23 L131.9 15 L136.6 11 L139 18 L143.7 21 L148.4 16 L153.1 8 L157.8 3 L160.1 2 L163.7 9 '
  + 'L166 20 L171.9 21 L179 18 L186 12 L188.4 11 L190.8 15 L194.3 29 L200.2 29 L207.2 27 L214.3 22 '
  + 'L219 21 L224.2 21 L240 21';

// Decorative quotation mark rendered from the /public/image1.png asset.
// `flip` mirrors it for the closing side, `rotate` tilts it, `size` sets an
// explicit width/height (defaults to filling the wrapper — same size as
// before), and `x` / `y` nudge its position (number = px, or any CSS length;
// negative y moves it up). `drawn` fades it in with the heading sequence.
function QuoteMark({
  drawn,
  flip = false,
  rotate = 0,
  size,
  x = 0,
  y = -25,
}: {
  drawn: boolean;
  flip?: boolean;
  rotate?: number;
  size?: number | string;
  x?: number | string;
  y?: number | string;
}) {
  const tx = typeof x === 'number' ? `${x}px` : x;
  const ty = typeof y === 'number' ? `${y}px` : y;

  return (
    <img
      src="/image1.png"
      alt=""
      draggable={false}
      style={{
        display: 'block',
        width: size ?? '150%',
        height: size ?? '150%',
        objectFit: 'contain',
        opacity: drawn ? 1 : 0,
        transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: `translate(${tx}, ${ty}) ${flip ? 'scaleX(-1) ' : ''}rotate(${rotate}deg)`,
      }}
    />
  );
}

function PlayBadge() {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ display: 'block' }}>
      <path d="M50.00 16.00 A9.58 9.58 0 0 1 68.38 21.40 A9.58 9.58 0 0 1 80.93 35.88 A9.58 9.58 0 0 1 83.65 54.84 A9.58 9.58 0 0 1 75.70 72.27 A9.58 9.58 0 0 1 59.58 82.62 A9.58 9.58 0 0 1 40.42 82.62 A9.58 9.58 0 0 1 24.30 72.27 A9.58 9.58 0 0 1 16.35 54.84 A9.58 9.58 0 0 1 19.07 35.88 A9.58 9.58 0 0 1 31.62 21.40 A9.58 9.58 0 0 1 50.00 16.00 Z" fill="var(--brick)" />
      <g fill="none" stroke="var(--indigo)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M28 50 C38 38,62 38,72 50 C62 62,38 62,28 50 Z" />
      </g>
      <circle cx="50" cy="50" r="7" fill="var(--indigo)" />
    </svg>
  );
}

function StarBadge() {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ display: 'block' }}>
      <path d="M50.00 16.00 A9.58 9.58 0 0 1 68.38 21.40 A9.58 9.58 0 0 1 80.93 35.88 A9.58 9.58 0 0 1 83.65 54.84 A9.58 9.58 0 0 1 75.70 72.27 A9.58 9.58 0 0 1 59.58 82.62 A9.58 9.58 0 0 1 40.42 82.62 A9.58 9.58 0 0 1 24.30 72.27 A9.58 9.58 0 0 1 16.35 54.84 A9.58 9.58 0 0 1 19.07 35.88 A9.58 9.58 0 0 1 31.62 21.40 A9.58 9.58 0 0 1 50.00 16.00 Z" fill="var(--cream)" />
      <path d="M50 31 L55.9 43.9 70 45.6 59.5 55.1 62.3 69 50 62 37.7 69 40.5 55.1 30 45.6 44.1 43.9 Z" fill="var(--indigo)" />
    </svg>
  );
}

function ReelBadge() {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ display: 'block' }}>
      <path d="M50.00 16.00 A9.58 9.58 0 0 1 68.38 21.40 A9.58 9.58 0 0 1 80.93 35.88 A9.58 9.58 0 0 1 83.65 54.84 A9.58 9.58 0 0 1 75.70 72.27 A9.58 9.58 0 0 1 59.58 82.62 A9.58 9.58 0 0 1 40.42 82.62 A9.58 9.58 0 0 1 24.30 72.27 A9.58 9.58 0 0 1 16.35 54.84 A9.58 9.58 0 0 1 19.07 35.88 A9.58 9.58 0 0 1 31.62 21.40 A9.58 9.58 0 0 1 50.00 16.00 Z" fill="#C99A12" />
      <g fill="none" stroke="var(--indigo)" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round">
        <rect x="29" y="41" width="27" height="19" rx="3" />
      </g>
      <path d="M60 47 L72 41 V60 L60 54 Z" fill="var(--indigo)" />
    </svg>
  );
}

// One continuous sequence for the whole heading:
// reveal (existing, untouched) → quotes draw → underline draws →
// typewriter/scramble → whole heading settles upward into its final spot.
type Phase = 'idle' | 'quotes' | 'underline' | 'typing' | 'settling' | 'done';
type SettleStage = 'rest' | 'from' | 'to';

export function Hero() {
  const containerRef = useReveal();
  const parallaxRef = useParallax(0.25);
  const ghostRef = useParallax(-0.12);
  const reducedMotion = useReducedMotion();

  const line3Ref = useRef<HTMLSpanElement>(null);
  const [phase, setPhase] = useState<Phase>('idle');
  const [settleStage, setSettleStage] = useState<SettleStage>('rest');
  const sequenceStarted = useRef(false);

  const { ref: typedRef, start: startTyping } = useScrambleTypewriter(HIGHLIGHT_TEXT, {
    onDone: () => setPhase('settling'),
  });

  // Reduced motion: skip the whole sequence, show the final state immediately.
  useEffect(() => {
    if (!reducedMotion) return;
    setPhase('done');
    if (typedRef.current) typedRef.current.textContent = HIGHLIGHT_TEXT;
  }, [reducedMotion, typedRef]);

  // Kick off quotes → underline → typewriter once the third heading line's
  // own reveal transition finishes (existing reveal behavior is untouched —
  // this only listens for it to end).
  useEffect(() => {
    if (reducedMotion) return;
    const el = line3Ref.current;
    if (!el) return;

    const onTransitionEnd = (e: TransitionEvent) => {
      if (e.target !== el || sequenceStarted.current) return;
      sequenceStarted.current = true;
      setPhase('quotes');
    };

    el.addEventListener('transitionend', onTransitionEnd);
    return () => el.removeEventListener('transitionend', onTransitionEnd);
  }, [reducedMotion]);

  useEffect(() => {
    if (phase === 'quotes') {
      const t = setTimeout(() => setPhase('underline'), 750);
      return () => clearTimeout(t);
    }
    if (phase === 'underline') {
      const t = setTimeout(() => setPhase('typing'), 680);
      return () => clearTimeout(t);
    }
    if (phase === 'typing') {
      startTyping();
    }
  }, [phase, startTyping]);

  // Final settle: snap the whole heading to a slightly-lower/faded "from"
  // state with no transition, then (after paint) transition it back up into
  // rest — a one-time finishing touch, never repeated.
  useEffect(() => {
    if (phase !== 'settling') return;
    setSettleStage('from');
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        setSettleStage('to');
        setPhase('done');
      });
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [phase]);

  const quotesDrawn = phase === 'quotes' || phase === 'underline' || phase === 'typing' || phase === 'settling' || phase === 'done';
  const underlineDrawn = phase === 'underline' || phase === 'typing' || phase === 'settling' || phase === 'done';
  const headlineClass = [
    styles.headline,
    settleStage === 'from' ? styles.headlineSettleFrom : '',
    settleStage === 'to' ? styles.headlineSettleTo : '',
  ].filter(Boolean).join(' ');

  return (
    <section
      ref={containerRef as any}
      data-theme="indigo"
      data-screen-label="Hero"
      className={styles.hero}
    >
      <div ref={parallaxRef as any} className={styles.paletteBg}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.blobWash} />
      </div>
      <div className={styles.grid} />
      <div ref={ghostRef as any} className={styles.ghostMark}>V</div>

      <div className={styles.container}>
        <div data-reveal className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          [ VantixGrowth Media — Content Growth Studio ]
        </div>

        <h1 className={headlineClass}>
          <span className={styles.quoteOpen} aria-hidden="true">
            <QuoteMark drawn={quotesDrawn} flip rotate={5} y={-8} />
          </span>
          <span data-reveal-line className={styles.line}>We turn technical</span>
          <span data-reveal-line className={styles.line}>depth into a brand</span>
          <span className={styles.lineWrap}>
            {/* Real text + the reveal's own clip-path animation — untouched. */}
            <span data-reveal-line ref={line3Ref} className={styles.line}>
              people <span className={`${styles.accent} ${styles.accentGhost}`} aria-hidden="true">{HIGHLIGHT_TEXT}</span>
            </span>
            {/* Decorations live in a SIBLING overlay, not a descendant of the
                clipped line above — the reveal's clip-path only allows ~12%
                vertical slack, nowhere near enough for the underline's
                offset, so nesting it inside would silently clip it away. */}
            <span className={styles.lineOverlay} aria-hidden="true">
              <span className={styles.overlayGhost}>people </span>
              <span className={styles.accentWrap}>
                <span className={`${styles.accent} ${styles.accentGhost}`}>{HIGHLIGHT_TEXT}</span>
                <span ref={typedRef} className={`${styles.accent} ${styles.accentTyped}`} />
                <svg className={styles.underlineSvg} viewBox="0 0 240 55" preserveAspectRatio="none">
                  <path
                    d={UNDERLINE_PATH}
                    pathLength={1}
                    fill="none"
                    stroke="var(--cream)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.4"
                    transform="translate(0 3)"
                    className={`${styles.underlinePath} ${styles.underlinePathGhost} ${underlineDrawn ? styles.underlinePathDrawn : ''}`}
                  />
                  <path
                    d={UNDERLINE_PATH}
                    pathLength={1}
                    fill="none"
                    stroke="var(--cream)"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`${styles.underlinePath} ${underlineDrawn ? styles.underlinePathDrawn : ''}`}
                  />
                </svg>
              </span>
              <span className={styles.quoteClose}>
                <QuoteMark drawn={quotesDrawn}  x={-25} y={-50} size={'200%'} rotate={-7} />
              </span>
            </span>
            <span className={styles.srOnly}>{HIGHLIGHT_TEXT}</span>
            
          </span>
        </h1>

        <div className={styles.introRow}>
          <p data-reveal className={styles.paragraph}>
            A boutique video &amp; content studio for tech companies. We take on a few partners at a time — and grow each one like it's our own.
          </p>
          <div data-reveal className={styles.ctaGroup}>
            <div className={styles.buttons}>
              <Button to="/contact" magnetic withArrow className={styles.primaryBtn}>
                Start a project
              </Button>
              <Button to="/work" variant="outline" magnetic cursorLabel="Play" className={styles.showreelBtn}>
                <span className={styles.playIcon}>▶</span>
                <span>Watch showreel</span>
              </Button>
            </div>
            <span className={styles.slotsNote}>
              <span className={styles.slotsDot} />
              Currently taking <span>3</span> partners for Q3
            </span>
          </div>
        </div>

        <div data-reveal className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.statIcon}><PlayBadge /></span>
            <span className={styles.statText}>
              <span className={styles.statValue}>150K+</span>
              <span className={styles.statLabel}>views generated per video</span>
            </span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statIcon}><StarBadge /></span>
            <span className={styles.statText}>
              <span className={styles.statValue}>1 year</span>
              <span className={styles.statLabel}>of building Brands</span>
            </span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statIcon}><ReelBadge /></span>
            <span className={styles.statText}>
              <span className={styles.statValue}>80+</span>
              <span className={styles.statLabel}>videos created and published</span>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>Scroll ↓</div>
    </section>
  );
}

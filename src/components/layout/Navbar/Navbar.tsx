'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useNavScroll } from '@/hooks/useNavScroll';
import { useMagneticRef } from '@/hooks/useMagnetic';
import { Button } from '@/components/ui/Button/Button';
import styles from './Navbar.module.css';

export function Navbar() {
  const { scrolled, theme } = useNavScroll();
  const pathname = usePathname();
  const isDarkTheme = theme === 'indigo';
  const isContact = pathname === '/contact';

  const logoRef = useMagneticRef<HTMLAnchorElement>();

  // The Contact page is a single static indigo section — its nav has no
  // scroll-driven theme change, no tagline/avail pill, and no CTA button.
  if (isContact) {
    return (
      <nav className={styles.navContact} data-nav>
        <Link href="/" className={styles.brand} ref={logoRef as any} data-cursor="" data-magnetic>
          <span className={styles.vmark}>V</span>
          <span className={styles.wordmarkContact}>
            VantixGrowth <span className={styles.wordmarkDim}>Media</span>
          </span>
        </Link>
        <div className={styles.linksContainer}>
          <Link href="/services" className={styles.linkContact} data-cursor="">Services</Link>
          <Link href="/about" className={styles.linkContact} data-cursor="">About</Link>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${isDarkTheme ? styles.dark : styles.light}`}
      data-nav
    >
      <div className={styles.brandGroup}>
        <Link
          href="/"
          className={styles.brand}
          ref={logoRef as any}
          data-cursor=""
          data-magnetic
        >
          <span className={styles.vmark} data-nav-mark>V</span>
          <span className={styles.wordmark} data-nav-word>
            VantixGrowth <span className={styles.wordmarkDim}>Media</span>
          </span>
        </Link>
        <span className={styles.divider} data-nav-divider aria-hidden="true" />
        <span className={styles.tagline} data-nav-tagline data-navlink>Content Growth Studio</span>
      </div>

      <div className={styles.linksContainer}>
        <Link
          href="/services"
          className={`${styles.link} ${pathname === '/services' ? styles.active : ''}`}
          data-cursor=""
          data-navlink
        >
          Services
        </Link>
        <Link
          href="/about"
          className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}
          data-cursor=""
          data-navlink
        >
          About
        </Link>
      </div>

      <div className={styles.rightGroup}>
        <span className={styles.avail} data-nav-avail>
          <span className={styles.availDot} />
          <span className={styles.availText} data-navlink>Booking Q3 · 3 slots</span>
        </span>
        <Button to="/contact" className={styles.cta} magnetic>
          Book a call
        </Button>
      </div>
    </nav>
  );
}

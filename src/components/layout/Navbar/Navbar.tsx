'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useNavScroll } from '@/hooks/useNavScroll';
import { useMagneticRef } from '@/hooks/useMagnetic';
import { Button } from '@/components/ui/Button/Button';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
];

export function Navbar() {
  const { scrolled, theme } = useNavScroll();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isDarkTheme = theme === 'indigo';
  const isContact = pathname === '/contact';

  const logoRef = useMagneticRef<HTMLAnchorElement>();

  // Close the mobile menu on route change.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll while the menu is open; close on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const hamburger = (
    <button
      type="button"
      className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
      onClick={() => setMenuOpen((v) => !v)}
      aria-expanded={menuOpen}
      aria-controls="mobile-menu"
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      data-cursor=""
    >
      <span className={styles.hamburgerLine} />
      <span className={styles.hamburgerLine} />
    </button>
  );

  const mobileMenu = (
    <div
      id="mobile-menu"
      className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
      aria-hidden={!menuOpen}
    >
      <div className={styles.mobileLinks}>
        {NAV_LINKS.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            className={`${styles.mobileLink} ${pathname === l.href ? styles.mobileLinkActive : ''}`}
            style={{ transitionDelay: menuOpen ? `${0.08 + i * 0.06}s` : '0s' }}
            tabIndex={menuOpen ? 0 : -1}
          >
            <span className={styles.mobileLinkIndex}>0{i + 1}</span>
            {l.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className={`${styles.mobileLink} ${styles.mobileLinkCta}`}
          style={{ transitionDelay: menuOpen ? `${0.08 + NAV_LINKS.length * 0.06}s` : '0s' }}
          tabIndex={menuOpen ? 0 : -1}
        >
          <span className={styles.mobileLinkIndex}>0{NAV_LINKS.length + 1}</span>
          Book a call
        </Link>
      </div>

      <div className={styles.mobileMenuFooter}>
        <span className={styles.mobileAvail}>
          <span className={styles.availDot} />
          Booking Q3 · 3 slots
        </span>
        <span className={styles.mobileMenuTagline}>Content Growth Studio</span>
      </div>
    </div>
  );

  // The Contact page is a single static indigo section — its nav has no
  // scroll-driven theme change, no tagline/avail pill, and no CTA button.
  if (isContact) {
    return (
      <>
        <nav className={`${styles.navContact} ${menuOpen ? styles.menuOpen : ''}`} data-nav>
          <Link href="/" className={styles.brand} ref={logoRef as any} data-cursor="" data-magnetic>
            <span className={styles.vmark}>
              <Image src="/logov.jpeg" alt="VantixGrowth" width={34} height={34} className={styles.vmarkImg} priority />
            </span>
            <span className={styles.wordmarkContact}>
              VantixGrowth <span className={styles.wordmarkDim}>Media</span>
            </span>
          </Link>
          <div className={styles.linksContainer}>
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={styles.linkContact} data-cursor="">
                {l.label}
              </Link>
            ))}
          </div>
          {hamburger}
        </nav>
        {mobileMenu}
      </>
    );
  }

  return (
    <>
      <nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${isDarkTheme ? styles.dark : styles.light} ${menuOpen ? styles.menuOpen : ''}`}
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
            <span className={styles.vmark} data-nav-mark>
              <Image src="/logov.jpeg" alt="VantixGrowth" width={34} height={34} className={styles.vmarkImg} priority />
            </span>
            <span className={styles.wordmark} data-nav-word>
              VantixGrowth <span className={styles.wordmarkDim}>Media</span>
            </span>
          </Link>
          <span className={styles.divider} data-nav-divider aria-hidden="true" />
          <span className={styles.tagline} data-nav-tagline data-navlink>Content Growth Studio</span>
        </div>

        <div className={styles.linksContainer}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.link} ${pathname === l.href ? styles.active : ''}`}
              data-cursor=""
              data-navlink
            >
              {l.label}
            </Link>
          ))}
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

        {hamburger}
      </nav>
      {mobileMenu}
    </>
  );
}

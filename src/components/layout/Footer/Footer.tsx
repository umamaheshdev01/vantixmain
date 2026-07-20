'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, CONTACT_EMAIL } from '@/constants/navigation';
import { Button } from '../../ui/Button/Button';
import styles from './Footer.module.css';

export function Footer() {
  const pathname = usePathname();
  const isContact = pathname === '/contact';
  const isHome = pathname === '/';

  if (isContact) {
    return (
      <footer data-theme="indigo" className={styles.footerSimple}>
        <div className={styles.container}>
          <div className={styles.simpleTop}>
            <div className={styles.linksRow}>
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} className={styles.link} data-cursor="">
                  {item.label}
                </Link>
              ))}
              <Link href="/" className={styles.link} data-cursor="">Home</Link>
            </div>
            <a href={`mailto:${CONTACT_EMAIL}`} className={styles.emailLink} data-cursor="">
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className={styles.startProjectRow}>
            <Button to="/contact" variant="primary" magnetic withArrow>
              Start a project
            </Button>
          </div>

          <div className={styles.simpleBottom}>
            <span>© 2026 VantixGrowth Media</span>
            <span>Made deliberately.</span>
          </div>
        </div>

        <div aria-hidden="true" className={styles.ghostText}>
          VantixGrowth
        </div>
      </footer>
    );
  }

  return (
    <footer data-theme="indigo" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div>
            <Link href="/contact" data-cursor="" className={styles.headline}>
              Let's build something<br />worth <span className={styles.accent}>watching</span> →
            </Link>
            <div className={styles.startProjectRow}>
              <Button to="/contact" variant="primary" magnetic withArrow>
                Start a project
              </Button>
            </div>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <span className={styles.columnLabel}>Pages</span>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.link}
                  data-cursor=""
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className={styles.link} data-cursor="">Contact</Link>
            </div>

            <div className={styles.column}>
              <span className={styles.columnLabel}>Contact</span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={styles.emailLink}
                data-cursor=""
              >
                {CONTACT_EMAIL}
              </a>
              <a href="https://www.instagram.com/vantixgrowth_media?igsh=em4ydDFiY2k5aGdj" target="_blank" className={styles.link} data-cursor="">Instagram</a>
              <a href="https://www.linkedin.com/in/rajaharsha-pentapati-035784373" target="_blank" className={styles.link} data-cursor="">LinkedIn</a>
              <a href="https://x.com/KYAKH1" className={styles.link}  target="_blank" data-cursor="">X / Twitter</a>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <span>© 2026 VantixGrowth Media</span>
          <span>Boutique content growth studio for tech</span>
          <span>Made deliberately.</span>
        </div>
      </div>

      <div aria-hidden="true" className={styles.ghostText}>
        VantixGrowth
      </div>
    </footer>
  );
}

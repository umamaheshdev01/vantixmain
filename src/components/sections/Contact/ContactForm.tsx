'use client';

import { useRef, useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { CONTACT_EMAIL } from '@/constants/navigation';
import { TIER_OPTIONS } from '@/constants/data';
import { Button } from '../../ui/Button/Button';
import styles from './ContactForm.module.css';

export function ContactForm() {
  const containerRef = useReveal({ immediate: true });
  const [tier, setTier] = useState<string>('Not sure yet');
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (form && !form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (sending) return;

    const data = new FormData(form!);
    const payload = {
      name: (data.get('name') as string) ?? '',
      company: (data.get('company') as string) ?? '',
      email: (data.get('email') as string) ?? '',
      tier,
      need: (data.get('need') as string) ?? '',
    };

    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: '' }));
        throw new Error(error || 'Something went wrong.');
      }

      showToast('Mail sent — we\'ll be in touch soon.', 'success');
      setSuccess(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to send. Please try again.';
      showToast(message, 'error');
    } finally {
      setSending(false);
    }
  };

  return (
    <main ref={containerRef as any} data-theme="indigo" className={styles.section}>
      <div className={styles.blob} />
      <div className={styles.container}>

        <div className={styles.leftCol}>
          <div data-reveal className={styles.eyebrow}>[ Start a project ]</div>
          <h1 className={styles.headline}>
            <span data-reveal-line className={styles.line}>Tell us what</span>
            <span data-reveal-line className={styles.line}>you're <span className={styles.accent}>building</span>.</span>
          </h1>
          <p data-reveal className={styles.paragraph}>
            We take a limited number of partners at a time, so we read every enquiry properly. Expect a reply within two business days — a real one, from the people who'd do the work.
          </p>

          <div data-reveal className={styles.contactDetails}>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>Prefer email?</span>
              <a href={`mailto:${CONTACT_EMAIL}`} className={styles.detailLink} data-cursor="">
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>Rather book a call?</span>
              <Button
                href="https://calendly.com/rajaharsha142/30min"
                newTab
                variant="outline"
                magnetic
                withArrow
                className={styles.bookBtn}
              >
                Book a 20-min intro
              </Button>
            </div>
          </div>
        </div>

        <div data-reveal className={styles.rightCol}>
          {success ? (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>✓</div>
              <h2 className={styles.successTitle}>Enquiry received.</h2>
              <p className={styles.successText}>Thanks — we'll read it properly and reply within two business days.</p>
            </div>
          ) : (
            <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Your name</label>
                <input type="text" id="name" name="name" className={styles.input} placeholder="Jane Doe" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.label}>Company</label>
                <input type="text" id="company" name="company" className={styles.input} placeholder="Acme Inc." required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Work email</label>
                <input type="email" id="email" name="email" className={styles.input} placeholder="jane@acme.com" required />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Which tier fits?</label>
                <div className={styles.tierPick}>
                  {TIER_OPTIONS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      data-cursor=""
                      className={`${styles.tierBtn} ${tier === t ? styles.tierBtnActive : ''}`}
                      onClick={() => setTier(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="need" className={styles.label}>What do you need?</label>
                <textarea
                  id="need"
                  name="need"
                  className={styles.textarea}
                  rows={4}
                  placeholder="A sentence or two on where you're headed and what you'd want us to build."
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="primary"
                magnetic
                withArrow
                disabled={sending}
                className={styles.submitBtn}
              >
                {sending ? 'Sending…' : 'Send enquiry'}
              </Button>
              <p className={styles.disclaimer}>No spam, no drip sequence. Just a reply.</p>
            </form>
          )}
        </div>

      </div>

      {toast && (
        <div
          role="status"
          aria-live="polite"
          className={`${styles.toast} ${toast.type === 'error' ? styles.toastError : styles.toastSuccess}`}
        >
          <span className={styles.toastIcon}>{toast.type === 'error' ? '!' : '✓'}</span>
          {toast.message}
        </div>
      )}
    </main>
  );
}

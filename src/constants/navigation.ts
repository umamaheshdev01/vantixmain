import type { NavItem } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work',     href: '/work'     },
  { label: 'Services', href: '/services' },
  { label: 'About',    href: '/about'    },
];

export const PARTNER_SLOTS = parseInt(process.env.NEXT_PUBLIC_PARTNER_SLOTS ?? '3', 10);
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'connect@vantixgrowth.com';
export const BOOKING_URL   = process.env.NEXT_PUBLIC_BOOKING_URL ?? '#';

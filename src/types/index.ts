// ============================================================
// VantixGrowth — TypeScript Interfaces & Types
// ============================================================

export interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  decimal?: number;
  note?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'inverse';
  to?: string;
  href?: string;
  className?: string;
  magnetic?: boolean;
  withArrow?: boolean;
  cursorLabel?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export interface CaseStudy {
  id: string;
  number: string;
  client: string;
  metric: string;
  label: string;
  gradient: string;
}

export interface Tier {
  id: string;
  number: string;
  name: string;
  tag: string;
  features: string[];
  isFlagship: boolean;
  whoFor?: string;
  subtitle?: string;
}

export interface MethodStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  highlightWord: string;
  author: string;
  role: string;
  alignRight?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Standard {
  number: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  tier: string;
  need: string;
}

export interface ContactFormErrors {
  name?: string;
  company?: string;
  email?: string;
  need?: string;
}

export interface ComparisonRow {
  capability: string;
  basic: string;
  premium: string;
  studio: string;
}

export interface WorkOutcomeStat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  decimal?: number;
}

export interface MediaItem {
  type: 'image' | 'video';
  aspectRatio?: string;
  placeholder: string;
  hasGlow?: boolean;
}

export type Theme = 'indigo' | 'cream';

export interface CursorState {
  scale: number;
  label: string;
  isHovered: boolean;
}

export type RevealVariant = 'line' | 'block';

export interface MagneticOptions {
  factorX?: number;
  factorY?: number;
}

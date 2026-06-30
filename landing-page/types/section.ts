// types/section.ts

// ============================================================
// Tipe untuk semua section yang tersedia
// ============================================================
export type SectionType =
  | 'hero'
  | 'benefits'
  | 'problem'
  | 'solution'
  | 'features'
  | 'faq'
  | 'cta'
  | 'comparison'
  | 'gallery'
  | 'pricing'
  | 'testimonials'
  | 'video';

// ============================================================
// Base interface yang wajib dimiliki semua section
// ============================================================
export interface BaseSection {
  id?: string; // opsional, untuk anchor link
  type: SectionType;
}

// ============================================================
// Masing‑masing section dengan props spesifik
// ============================================================

export interface HeroSettings {
  badge: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
}

export interface BenefitsSettings {
  items: string[];
}

export interface ProblemSettings {
  title: string;
  description: string;
}

export interface SolutionSettings {
  title: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeaturesSettings {
  items: FeatureItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSettings {
  items: FAQItem[];
}

export interface CTASettings {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
}

export interface ComparisonItem {
  feature: string;
  us: string;
  others: string;
}

export interface ComparisonSettings {
  title: string;
  subtitle: string;
  items: ComparisonItem[];
}

export interface GalleryImage {
  image: string;
  title: string;
}

export interface GallerySettings {
  title: string;
  subtitle: string;
  images: GalleryImage[];
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  button: string;
  url: string;
}

export interface PricingSettings {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
}

export interface Testimonial {
  name: string;
  role: string;
  message: string;
}

export interface TestimonialsSettings {
  title: string;
  subtitle: string;
  items: Testimonial[];
}

export interface VideoSettings {
  title: string;
  subtitle: string;
  url: string;
}

export type SectionSettings =
  | HeroSettings
  | BenefitsSettings
  | ProblemSettings
  | SolutionSettings
  | FeaturesSettings
  | FAQSettings
  | CTASettings
  | ComparisonSettings
  | GallerySettings
  | PricingSettings
  | TestimonialsSettings
  | VideoSettings;

export interface LandingSection {
  id: number;
  landingPageId: number;
  type: SectionType; // sekarang menggunakan SectionType
  sortOrder: number;
  settings: SectionSettings;
  isActive: boolean;
}

// ============================================================
// Type guard untuk memeriksa tipe section
// ============================================================
export function isSectionType<T extends SectionType>(
  section: LandingSection,
  type: T
): section is LandingSection & { type: T } {
  return section.type === type;
}
export interface SeoData {
  title: string;
  description: string;
  keywords: string[];
}

export interface HeroSection {
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
  image?: string;
}

export interface ProblemSection {
  title: string;
  description: string;
}

export interface SolutionSection {
  title: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LandingPageData {
  slug: string;

  offerSlug: string;

  hero: HeroSection;

  benefits: string[];

  features: FeatureItem[];

  problem: ProblemSection;

  solution: SolutionSection;

  trust: string[];

  faqs: FaqItem[];

  seo: SeoData;
}
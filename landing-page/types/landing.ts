// types/landing.ts

import type { LandingSection } from "./section";
import type { Offer } from "./offer";

export interface LandingPage {
  id: number;
  slug: string;
  title: string;
  template: string;
  status: "draft" | "published";
  offer: Offer;
  sections: LandingSection[];
  // SEO Properties
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  // Timestamps (opsional)
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface LandingListItem {
  id: number;
  slug: string;
  title: string;
  template: string;
  status: "draft" | "published";
  // SEO Properties (opsional untuk list)
  metaTitle?: string;
  metaDescription?: string;
}
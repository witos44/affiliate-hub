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
}

export interface LandingListItem {
  id: number;
  slug: string;
  title: string;
  template: string;
  status: "draft" | "published";
}
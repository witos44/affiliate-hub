// lib/api.ts

import { mockLanding } from "@/mocks/Landing";
import { mockOffers } from "@/mocks/offers";

import type {
  LandingPage,
  LandingListItem,
} from "@/types/landing";

import type {
  Offer,
} from "@/types/offer";

export async function getLanding(
  slug: string
): Promise<LandingPage | null> {

  if (slug !== mockLanding.data.slug) {
    return null;
  }

  return mockLanding.data;

}

export async function getLandingList(): Promise<LandingListItem[]> {

  return [
    {
      id: 1,
      slug: mockLanding.data.slug,
      title: mockLanding.data.title,
      template: mockLanding.data.template,
      status: mockLanding.data.status,
    },
  ];

}

export async function getOffers(): Promise<Offer[]> {

  return mockOffers;

}
import { mockLanding } from "@/mocks/Landing";
import { mockOffers } from "@/mocks/offers";

import type {
  LandingPage,
  LandingListItem,
} from "@/types/landing";

export async function getLanding(
  slug: string
): Promise<LandingPage | null> {

  if (mockLanding.data.slug !== slug) {
    return null;
  }

  return mockLanding.data;

}

export async function getLandingList(): Promise<LandingListItem[]> {

  return [
    {
      id: mockLanding.data.id,
      slug: mockLanding.data.slug,
      title: mockLanding.data.title,
      template: mockLanding.data.template,
      status: mockLanding.data.status,
    },
  ];

}

export async function getOffers() {

  return mockOffers;

}
// lib/api.ts

import { mockLanding } from "@/mocks/Landing";
import { mockOffers } from "@/mocks/offers";

import type {
  LandingPage,
  LandingListItem,
} from "@/types/landing";

export async function getLanding(
  slug: string
): Promise<LandingPage> {

  return Promise.resolve(mockLanding.data);

}

export async function getLandingList(): Promise<LandingListItem[]> {

  return Promise.resolve([
    {
      id: 1,
      slug: "ads-campaign-automation",
      title: "Ads Campaign Automation",
      template: "default",
      status: "published",
    },
  ]);

}

export async function getOffers() {

  return Promise.resolve(mockOffers);

}
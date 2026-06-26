export interface Offer {
  id: string;
  slug: string;
  name: string;
  merchantName: string;
  description: string;
}

export const featuredOffers: Offer[] = [
  {
    id: "1",
    slug: "adenslab",
    name: "Ads Campaign Automation With AdensLab",
    merchantName: "AdensLab",
    description: "Automasi campaign iklan Anda dengan optimasi cerdas berbasis data.",
  },
];
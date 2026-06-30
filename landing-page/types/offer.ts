// types/offer.ts

export interface Offer {
  id: number;
  merchantName: string;
  offerName: string;
  offerSlug: string;
  affiliateUrl: string;
  description: string;
  category: string;
  status: "draft" | "published";
}
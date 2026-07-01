// src/repositories/offerRepository.ts

import type { D1Database } from "@cloudflare/workers-types";

export interface Offer {
  id: string;
  merchantName: string;
  offerName: string;
  offerSlug: string;
  affiliateUrl: string;
  description: string;
  category: string;
  status: "draft" | "published";
}

export async function getActiveOffers(db: D1Database): Promise<Offer[]> {
  const result = await db
    .prepare(
      `SELECT o.id, o.slug AS offerSlug, o.name AS offerName, 
              o.destination_url AS affiliateUrl, o.description, 
              o.active, o.created_at,
              m.name AS merchantName
       FROM offers o
       JOIN merchants m ON o.merchant_id = m.id
       WHERE o.active = 1`
    )
    .all();

  return result.results.map((row: any) => ({
    id: row.id,
    merchantName: row.merchantName,
    offerName: row.offerName,
    offerSlug: row.offerSlug,
    affiliateUrl: row.affiliateUrl,
    description: row.description,
    category: "AI", // default, sesuaikan jika ada kolom category
    status: row.active ? "published" : "draft",
  }));
}
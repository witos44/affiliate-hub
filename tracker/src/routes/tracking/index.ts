// src/routes/tracking/index.ts

import type { IRequest } from "itty-router";
import { successResponse, errorResponse } from "../../utils/response";

export async function handleTrackClick(request: IRequest, env: any) {
  try {
    const { offerSlug } = request.params;

    // Simpan ke tabel outbound_clicks (gunakan UUID untuk id)
    await env.DB.prepare(
      `INSERT INTO outbound_clicks (id, offer_id, created_at)
       SELECT ?, id, CURRENT_TIMESTAMP
       FROM offers
       WHERE slug = ?`
    )
    .bind(crypto.randomUUID(), offerSlug)
    .run();

    return successResponse({ success: true });
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to track click", 500);
  }
}
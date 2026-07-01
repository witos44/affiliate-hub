// src/routes/public/offers.ts

import type { IRequest } from "itty-router";
import { successResponse, errorResponse } from "../../utils/response";
import * as offerRepo from "../../repositories/offerRepository";

export async function handleGetOffers(request: IRequest, env: any) {
  try {
    const offers = await offerRepo.getActiveOffers(env.DB);
    return successResponse(offers);
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to fetch offers", 500);
  }
}
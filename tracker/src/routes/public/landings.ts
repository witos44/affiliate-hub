// src/routes/public/landings.ts

import type { IRequest } from "itty-router";
import { successResponse, errorResponse } from "../../utils/response";
import * as landingService from "../../services/landingService";

export async function handleGetLandingList(request: IRequest, env: any) {
  try {
    const landings = await landingService.getLandingList(env.DB);
    return successResponse(landings);
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to fetch landings", 500);
  }
}

export async function handleGetLandingBySlug(request: IRequest, env: any) {
  try {
    const { slug } = request.params;
    const landing = await landingService.getLandingBySlug(env.DB, slug);
    if (!landing) {
      return errorResponse("Landing not found", 404);
    }
    return successResponse(landing);
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to fetch landing", 500);
  }
}
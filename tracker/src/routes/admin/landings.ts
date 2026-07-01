// src/routes/admin/landings.ts

import type { IRequest } from "itty-router";
import { successResponse, errorResponse } from "../../utils/response";
import * as landingService from "../../services/landingService";
import { validateApiKey } from "../../middleware/auth";
import type { LandingPage } from "../../repositories/landingRepository";

export async function handleAdminGetLandingList(request: IRequest, env: any) {
  if (!validateApiKey(request)) {
    return errorResponse("Unauthorized", 401);
  }
  try {
    const landings = await landingService.getLandingList(env.DB);
    return successResponse(landings);
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to fetch landings", 500);
  }
}

export async function handleAdminGetLandingById(request: IRequest, env: any) {
  if (!validateApiKey(request)) {
    return errorResponse("Unauthorized", 401);
  }
  try {
    const id = parseInt(request.params.id);
    const landing = await landingService.getLandingById(env.DB, id);
    if (!landing) {
      return errorResponse("Landing not found", 404);
    }
    return successResponse(landing);
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to fetch landing", 500);
  }
}

export async function handleAdminCreateLanding(request: IRequest, env: any) {
  if (!validateApiKey(request)) {
    return errorResponse("Unauthorized", 401);
  }
  try {
    const body = await request.json() as Omit<LandingPage, "id">;
    
    // Validasi dasar
    if (!body.slug || !body.title) {
      return errorResponse("Missing required fields: slug and title", 400);
    }

    const landing = await landingService.createLanding(env.DB, body);
    return successResponse(landing, "Landing created successfully");
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to create landing", 500);
  }
}

export async function handleAdminUpdateLanding(request: IRequest, env: any) {
  if (!validateApiKey(request)) {
    return errorResponse("Unauthorized", 401);
  }
  try {
    const id = parseInt(request.params.id);
    const body = await request.json() as Partial<LandingPage>;
    
    const landing = await landingService.updateLanding(env.DB, id, body);
    if (!landing) {
      return errorResponse("Landing not found", 404);
    }
    return successResponse(landing, "Landing updated successfully");
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to update landing", 500);
  }
}

export async function handleAdminDeleteLanding(request: IRequest, env: any) {
  if (!validateApiKey(request)) {
    return errorResponse("Unauthorized", 401);
  }
  try {
    const id = parseInt(request.params.id);
    await landingService.deleteLanding(env.DB, id);
    return successResponse(null, "Landing deleted successfully");
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to delete landing", 500);
  }
}

export async function handleAdminPublishLanding(request: IRequest, env: any) {
  if (!validateApiKey(request)) {
    return errorResponse("Unauthorized", 401);
  }
  try {
    const id = parseInt(request.params.id);
    const landing = await landingService.publishLanding(env.DB, id);
    if (!landing) {
      return errorResponse("Landing not found", 404);
    }
    return successResponse(landing, "Landing published successfully");
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to publish landing", 500);
  }
}

export async function handleAdminUnpublishLanding(request: IRequest, env: any) {
  if (!validateApiKey(request)) {
    return errorResponse("Unauthorized", 401);
  }
  try {
    const id = parseInt(request.params.id);
    const landing = await landingService.unpublishLanding(env.DB, id);
    if (!landing) {
      return errorResponse("Landing not found", 404);
    }
    return successResponse(landing, "Landing unpublished successfully");
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to unpublish landing", 500);
  }
}

export async function handleAdminDuplicateLanding(request: IRequest, env: any) {
  if (!validateApiKey(request)) {
    return errorResponse("Unauthorized", 401);
  }
  try {
    const id = parseInt(request.params.id);
    const landing = await landingService.duplicateLanding(env.DB, id);
    if (!landing) {
      return errorResponse("Landing not found", 404);
    }
    return successResponse(landing, "Landing duplicated successfully");
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to duplicate landing", 500);
  }
}

export async function handleAdminCheckSlug(request: IRequest, env: any) {
  if (!validateApiKey(request)) {
    return errorResponse("Unauthorized", 401);
  }
  try {
    const url = new URL(request.url);
    const slug = url.searchParams.get("slug");
    if (!slug) {
      return errorResponse("Missing slug parameter", 400);
    }
    const available = await landingService.checkSlugAvailability(env.DB, slug);
    return successResponse({ available });
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to check slug", 500);
  }
}
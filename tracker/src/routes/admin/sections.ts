// src/routes/admin/sections.ts

import type { IRequest } from "itty-router";
import { successResponse, errorResponse } from "../../utils/response";
import * as landingService from "../../services/landingService";
import { validateApiKey } from "../../middleware/auth";
import type { LandingSection } from "../../repositories/landingRepository";
import type { SectionType } from "../../types/section";

export async function handleAdminAddSection(request: IRequest, env: any) {
  if (!validateApiKey(request)) {
    return errorResponse("Unauthorized", 401);
  }
  try {
    const landingId = parseInt(request.params.id);
    const body = await request.json() as { type: SectionType };
    
    if (!body.type) {
      return errorResponse("Missing section type", 400);
    }

    const section = await landingService.addSection(env.DB, landingId, body.type);
    return successResponse(section, "Section added successfully");
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to add section", 500);
  }
}

export async function handleAdminUpdateSection(request: IRequest, env: any) {
  if (!validateApiKey(request)) {
    return errorResponse("Unauthorized", 401);
  }
  try {
    const sectionId = parseInt(request.params.id);
    const body = await request.json() as Partial<LandingSection>;
    
    const section = await landingService.updateSection(env.DB, sectionId, body);
    if (!section) {
      return errorResponse("Section not found", 404);
    }
    return successResponse(section, "Section updated successfully");
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to update section", 500);
  }
}

export async function handleAdminDeleteSection(request: IRequest, env: any) {
  if (!validateApiKey(request)) {
    return errorResponse("Unauthorized", 401);
  }
  try {
    const sectionId = parseInt(request.params.id);
    await landingService.deleteSection(env.DB, sectionId);
    return successResponse(null, "Section deleted successfully");
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to delete section", 500);
  }
}

export async function handleAdminToggleSection(request: IRequest, env: any) {
  if (!validateApiKey(request)) {
    return errorResponse("Unauthorized", 401);
  }
  try {
    const sectionId = parseInt(request.params.id);
    const body = await request.json() as { isActive: boolean };
    
    if (typeof body.isActive !== "boolean") {
      return errorResponse("Missing isActive boolean", 400);
    }

    const result = await landingService.toggleSectionActive(env.DB, sectionId, body.isActive);
    return successResponse(result, "Section toggled successfully");
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to toggle section", 500);
  }
}

export async function handleAdminReorderSections(request: IRequest, env: any) {
  if (!validateApiKey(request)) {
    return errorResponse("Unauthorized", 401);
  }
  try {
    const body = await request.json() as { sectionIds: number[] };
    
    if (!body.sectionIds || !Array.isArray(body.sectionIds)) {
      return errorResponse("Missing sectionIds array", 400);
    }

    await landingService.reorderSections(env.DB, body.sectionIds);
    return successResponse({ reordered: true }, "Sections reordered successfully");
  } catch (error) {
    console.error(error);
    return errorResponse("Failed to reorder sections", 500);
  }
}
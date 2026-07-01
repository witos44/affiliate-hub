// lib/api-client.ts

import type { LandingPage, LandingListItem } from "@/types/landing";
import type { Offer } from "@/types/offer";
import type { ApiResponse } from "@/types/api";
import type { SectionType, LandingSection } from "@/types/section";

const WORKER_URL = process.env.NEXT_PUBLIC_WORKER_URL || "http://localhost:8787";
const API_KEY = process.env.NEXT_PUBLIC_WORKER_API_KEY || "";

function getHeaders(additionalHeaders: HeadersInit = {}): HeadersInit {
  return {
    "Content-Type": "application/json",
    ...(API_KEY ? { "x-api-key": API_KEY } : {}),
    ...additionalHeaders,
  };
}

async function fetcher<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${WORKER_URL}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      ...getHeaders(options.headers as HeadersInit),
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Worker API error (${response.status}): ${errorText || response.statusText}`
    );
  }

  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return (await response.json()) as T;
  }
  return (await response.text()) as T;
}

// ============================================================
// PUBLIC ENDPOINTS (tidak perlu API key)
// ============================================================

export async function getLandingList(): Promise<LandingListItem[]> {
  return fetcher<LandingListItem[]>("/api/public/landings");
}

export async function getLandingBySlug(slug: string): Promise<LandingPage> {
  return fetcher<LandingPage>(`/api/public/landings/${slug}`);
}

export async function getOffers(): Promise<Offer[]> {
  return fetcher<Offer[]>("/api/public/offers");
}

// ============================================================
// ADMIN ENDPOINTS (butuh API key / auth)
// ============================================================

// Landing Pages
export async function getAdminLandingList(): Promise<ApiResponse<LandingListItem[]>> {
  return fetcher<ApiResponse<LandingListItem[]>>("/api/admin/landings");
}

export async function getAdminLandingById(id: number): Promise<ApiResponse<LandingPage>> {
  return fetcher<ApiResponse<LandingPage>>(`/api/admin/landings/${id}`);
}

export async function createAdminLanding(
  data: Omit<LandingPage, "id">
): Promise<ApiResponse<LandingPage>> {
  return fetcher<ApiResponse<LandingPage>>("/api/admin/landings", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateAdminLanding(
  id: number,
  data: Partial<LandingPage>
): Promise<ApiResponse<LandingPage>> {
  return fetcher<ApiResponse<LandingPage>>(`/api/admin/landings/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteAdminLanding(id: number): Promise<ApiResponse<null>> {
  return fetcher<ApiResponse<null>>(`/api/admin/landings/${id}`, {
    method: "DELETE",
  });
}

export async function publishAdminLanding(id: number): Promise<ApiResponse<LandingPage>> {
  return fetcher<ApiResponse<LandingPage>>(`/api/admin/landings/${id}/publish`, {
    method: "POST",
  });
}

export async function unpublishAdminLanding(id: number): Promise<ApiResponse<LandingPage>> {
  return fetcher<ApiResponse<LandingPage>>(`/api/admin/landings/${id}/unpublish`, {
    method: "POST",
  });
}

export async function duplicateAdminLanding(id: number): Promise<ApiResponse<LandingPage>> {
  return fetcher<ApiResponse<LandingPage>>(`/api/admin/landings/${id}/duplicate`, {
    method: "POST",
  });
}

export async function checkSlugAvailability(
  slug: string
): Promise<ApiResponse<{ available: boolean }>> {
  return fetcher<ApiResponse<{ available: boolean }>>(
    `/api/admin/landings/check-slug?slug=${encodeURIComponent(slug)}`
  );
}

// Sections
export async function addSectionToLanding(
  landingId: number,
  type: SectionType
): Promise<ApiResponse<LandingSection>> {
  return fetcher<ApiResponse<LandingSection>>(
    `/api/admin/landings/${landingId}/sections`,
    {
      method: "POST",
      body: JSON.stringify({ type }),
    }
  );
}

export async function updateSection(
  sectionId: number,
  data: Partial<LandingSection>
): Promise<ApiResponse<LandingSection>> {
  return fetcher<ApiResponse<LandingSection>>(`/api/admin/sections/${sectionId}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteSection(sectionId: number): Promise<ApiResponse<null>> {
  return fetcher<ApiResponse<null>>(`/api/admin/sections/${sectionId}`, {
    method: "DELETE",
  });
}

export async function reorderSections(
  sectionIds: number[]
): Promise<ApiResponse<{ reordered: boolean }>> {
  return fetcher<ApiResponse<{ reordered: boolean }>>("/api/admin/sections/reorder", {
    method: "POST",
    body: JSON.stringify({ sectionIds }),
  });
}

export async function toggleSectionActive(
  sectionId: number,
  isActive: boolean
): Promise<ApiResponse<{ id: number; isActive: boolean }>> {
  return fetcher<ApiResponse<{ id: number; isActive: boolean }>>(
    `/api/admin/sections/${sectionId}/toggle`,
    {
      method: "PATCH",
      body: JSON.stringify({ isActive }),
    }
  );
}

// ============================================================
// TRACKING
// ============================================================

export async function trackClick(offerSlug: string): Promise<{ success: boolean }> {
  return fetcher<{ success: boolean }>(`/api/track/${offerSlug}`, {
    method: "POST",
  });
}
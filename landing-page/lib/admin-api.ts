// lib/admin-api.ts

import type { LandingPage, LandingListItem } from "@/types/landing";
import type { LandingSection } from "@/types/section";
import type { ApiResponse } from "@/types/api";
import { mockLanding } from "@/mocks/Landing";
import { mockLandingAdmin } from "@/mocks/landing-admin";

// ============================================================
// Simulasi delay untuk network latency
// ============================================================
const delay = (ms: number = 500) => new Promise((resolve) => setTimeout(resolve, ms));

// ============================================================
// Landing Page CRUD
// ============================================================

/**
 * Get all landing pages (for admin list)
 */
export async function getAdminLandingList(): Promise<ApiResponse<LandingListItem[]>> {
  await delay(300);

  // Gunakan data dari mockLandingAdmin jika ada, atau fallback dari mockLanding
  const list: LandingListItem[] = [];

  // Tambahkan dari mockLanding
  list.push({
    id: mockLanding.data.id,
    slug: mockLanding.data.slug,
    title: mockLanding.data.title,
    template: mockLanding.data.template,
    status: mockLanding.data.status,
  });

  // Tambahkan dari mockLandingAdmin
  if (mockLandingAdmin && mockLandingAdmin.length > 0) {
    mockLandingAdmin.forEach((item: LandingPage) => {
      if (!list.find((l: LandingListItem) => l.id === item.id)) {
        list.push({
          id: item.id,
          slug: item.slug,
          title: item.title,
          template: item.template,
          status: item.status,
        });
      }
    });
  }

  return {
    success: true,
    data: list,
  };
}

/**
 * Get single landing page by ID (for editing)
 */
export async function getAdminLandingById(id: number): Promise<ApiResponse<LandingPage>> {
  await delay(400);

  // Cari di mockLandingAdmin
  let landing: LandingPage | undefined = mockLandingAdmin?.find((l: LandingPage) => l.id === id);

  // Fallback ke mockLanding jika id cocok
  if (!landing && mockLanding.data.id === id) {
    landing = mockLanding.data;
  }

  if (!landing) {
    return {
      success: false,
      message: `Landing page with ID ${id} not found`,
      data: null as any,
    };
  }

  return {
    success: true,
    data: landing,
  };
}

/**
 * Get single landing page by slug (for frontend)
 */
export async function getAdminLandingBySlug(slug: string): Promise<ApiResponse<LandingPage>> {
  await delay(300);

  // Cari di mockLandingAdmin
  let landing: LandingPage | undefined = mockLandingAdmin?.find((l: LandingPage) => l.slug === slug);

  // Fallback ke mockLanding jika slug cocok
  if (!landing && mockLanding.data.slug === slug) {
    landing = mockLanding.data;
  }

  if (!landing) {
    return {
      success: false,
      message: `Landing page with slug "${slug}" not found`,
      data: null as any,
    };
  }

  return {
    success: true,
    data: landing,
  };
}

/**
 * Create new landing page
 */
export async function createAdminLanding(
  data: Omit<LandingPage, "id">
): Promise<ApiResponse<LandingPage>> {
  await delay(600);

  const newLanding: LandingPage = {
    ...data,
    id: Date.now(), // Mock ID generation
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    sections: data.sections || [],
  };

  // Simpan ke mock (di memory, sebenarnya tidak persist)
  console.log("Creating landing page:", newLanding);

  return {
    success: true,
    data: newLanding,
  };
}

/**
 * Update existing landing page
 */
export async function updateAdminLanding(
  id: number,
  data: Partial<LandingPage>
): Promise<ApiResponse<LandingPage>> {
  await delay(500);

  // Cari landing yang akan diupdate
  let existing: LandingPage | undefined;

  if (mockLanding.data.id === id) {
    existing = { ...mockLanding.data };
  } else if (mockLandingAdmin) {
    existing = mockLandingAdmin.find((l: LandingPage) => l.id === id);
  }

  if (!existing) {
    return {
      success: false,
      message: `Landing page with ID ${id} not found`,
      data: null as any,
    };
  }

  const updated: LandingPage = {
    ...existing,
    ...data,
    id, // Pastikan ID tetap sama
    updatedAt: new Date().toISOString(),
  };

  console.log("Updating landing page:", updated);

  return {
    success: true,
    data: updated,
  };
}

/**
 * Delete landing page
 */
export async function deleteAdminLanding(id: number): Promise<ApiResponse<null>> {
  await delay(400);

  console.log("Deleting landing page with ID:", id);

  return {
    success: true,
    data: null,
    message: `Landing page ${id} deleted successfully`,
  };
}

/**
 * Publish landing page (set status to published)
 */
export async function publishAdminLanding(id: number): Promise<ApiResponse<LandingPage>> {
  await delay(500);

  const response = await getAdminLandingById(id);
  if (!response.success || !response.data) {
    return {
      success: false,
      message: `Landing page with ID ${id} not found`,
      data: null as any,
    };
  }

  const published: LandingPage = {
    ...response.data,
    status: "published" as const,
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  console.log("Publishing landing page:", published);

  return {
    success: true,
    data: published,
  };
}

/**
 * Unpublish landing page (set status to draft)
 */
export async function unpublishAdminLanding(id: number): Promise<ApiResponse<LandingPage>> {
  await delay(500);

  const response = await getAdminLandingById(id);
  if (!response.success || !response.data) {
    return {
      success: false,
      message: `Landing page with ID ${id} not found`,
      data: null as any,
    };
  }

  const unpublished: LandingPage = {
    ...response.data,
    status: "draft" as const,
    updatedAt: new Date().toISOString(),
  };

  console.log("Unpublishing landing page:", unpublished);

  return {
    success: true,
    data: unpublished,
  };
}

/**
 * Duplicate landing page
 */
export async function duplicateAdminLanding(id: number): Promise<ApiResponse<LandingPage>> {
  await delay(700);

  const response = await getAdminLandingById(id);
  if (!response.success || !response.data) {
    return {
      success: false,
      message: `Landing page with ID ${id} not found`,
      data: null as any,
    };
  }

  const original = response.data;
  const duplicated: LandingPage = {
    ...original,
    id: Date.now(),
    slug: `${original.slug}-copy-${Date.now()}`,
    title: `${original.title} (Copy)`,
    status: "draft",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: undefined,
    sections: original.sections.map((s: LandingSection) => ({
      ...s,
      id: s.id + 1000, // Simple offset to avoid ID conflict
      settings: JSON.parse(JSON.stringify(s.settings)),
    })),
  };

  console.log("Duplicating landing page:", duplicated);

  return {
    success: true,
    data: duplicated,
  };
}

/**
 * Check if slug is available
 */
export async function checkSlugAvailability(slug: string): Promise<ApiResponse<{ available: boolean }>> {
  await delay(200);

  // Cek apakah slug sudah digunakan
  const isTaken = mockLandingAdmin?.some((l: LandingPage) => l.slug === slug) ||
                  mockLanding.data.slug === slug;

  return {
    success: true,
    data: {
      available: !isTaken,
    },
  };
}
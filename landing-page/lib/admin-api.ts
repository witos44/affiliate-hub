// lib/admin-api.ts

import * as apiClient from "./api-client";
import type { LandingPage, LandingListItem } from "@/types/landing";
import type { LandingSection, SectionType, SectionSettings } from "@/types/section";
import type { ApiResponse } from "@/types/api";
import { mockLanding } from "@/mocks/Landing";
import { mockLandingAdmin } from "@/mocks/landing-admin";

// ============================================================
// Deteksi apakah sedang dalam build (static generation)
// ============================================================
const isBuildTime = typeof window === "undefined" && process.env.NEXT_PHASE !== "phase-production-server";

// ============================================================
// Default Settings untuk setiap tipe section (digunakan saat build)
// ============================================================
function getDefaultSettings(type: SectionType): SectionSettings {
  const defaults: Record<SectionType, SectionSettings> = {
    hero: {
      badge: "New Section",
      title: "Hero Title",
      subtitle: "Hero subtitle goes here",
      buttonText: "Get Started",
      buttonUrl: "#",
    },
    benefits: {
      items: ["Benefit 1", "Benefit 2", "Benefit 3", "Benefit 4"],
    },
    problem: {
      title: "What's the Problem?",
      description: "Describe the problem here.",
    },
    solution: {
      title: "The Solution",
      description: "Describe the solution here.",
    },
    features: {
      items: [
        { title: "Feature 1", description: "Description of feature 1" },
        { title: "Feature 2", description: "Description of feature 2" },
        { title: "Feature 3", description: "Description of feature 3" },
      ],
    },
    faq: {
      items: [
        { question: "Question 1?", answer: "Answer 1." },
        { question: "Question 2?", answer: "Answer 2." },
      ],
    },
    cta: {
      title: "Call to Action",
      subtitle: "This is a call to action section",
      buttonText: "Get Started",
      buttonUrl: "#",
    },
    comparison: {
      title: "Comparison",
      subtitle: "Compare us with others",
      items: [
        { feature: "Feature 1", us: "Yes", others: "No" },
        { feature: "Feature 2", us: "Yes", others: "Yes" },
      ],
    },
    gallery: {
      title: "Gallery",
      subtitle: "Image gallery",
      images: [
        { image: "/placeholder.jpg", title: "Image 1" },
        { image: "/placeholder.jpg", title: "Image 2" },
      ],
    },
    pricing: {
      title: "Pricing",
      subtitle: "Choose your plan",
      plans: [
        {
          name: "Basic",
          price: "$9",
          description: "Basic plan",
          button: "Get Started",
          url: "#",
        },
      ],
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "What people say",
      items: [
        {
          name: "John Doe",
          role: "CEO",
          message: "Great product!",
        },
      ],
    },
    video: {
      title: "Video",
      subtitle: "Watch this video",
      url: "https://www.youtube.com/embed/VIDEO_ID",
    },
  };
  return defaults[type] || defaults["hero"];
}

// ============================================================
// Helper: Get mock data for build time
// ============================================================

function getMockLandingList(): LandingListItem[] {
  const list: LandingListItem[] = [];

  list.push({
    id: mockLanding.data.id,
    slug: mockLanding.data.slug,
    title: mockLanding.data.title,
    template: mockLanding.data.template,
    status: mockLanding.data.status,
  });

  if (mockLandingAdmin && mockLandingAdmin.length > 0) {
    mockLandingAdmin.forEach((item) => {
      if (!list.find((l) => l.id === item.id)) {
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

  return list;
}

function getMockLandingById(id: number): LandingPage | null {
  let landing = mockLandingAdmin?.find((l) => l.id === id);
  if (!landing && mockLanding.data.id === id) {
    landing = mockLanding.data;
  }
  return landing || null;
}

function getMockLandingBySlug(slug: string): LandingPage | null {
  let landing = mockLandingAdmin?.find((l) => l.slug === slug);
  if (!landing && mockLanding.data.slug === slug) {
    landing = mockLanding.data;
  }
  return landing || null;
}

// ============================================================
// Landing Page CRUD (dengan fallback mock untuk build)
// ============================================================

export async function getAdminLandingList(): Promise<ApiResponse<LandingListItem[]>> {
  if (isBuildTime) {
    return {
      success: true,
      data: getMockLandingList(),
    };
  }
  return apiClient.getAdminLandingList();
}

export async function getAdminLandingById(id: number): Promise<ApiResponse<LandingPage>> {
  if (isBuildTime) {
    const data = getMockLandingById(id);
    if (!data) {
      return {
        success: false,
        message: `Landing page with ID ${id} not found`,
        data: null as any,
      };
    }
    return {
      success: true,
      data,
    };
  }
  return apiClient.getAdminLandingById(id);
}

export async function getAdminLandingBySlug(slug: string): Promise<ApiResponse<LandingPage>> {
  if (isBuildTime) {
    const data = getMockLandingBySlug(slug);
    if (!data) {
      return {
        success: false,
        message: `Landing page with slug "${slug}" not found`,
        data: null as any,
      };
    }
    return {
      success: true,
      data,
    };
  }
  const data = await apiClient.getLandingBySlug(slug);
  return {
    success: true,
    data,
  };
}

export async function createAdminLanding(
  data: Omit<LandingPage, "id">
): Promise<ApiResponse<LandingPage>> {
  if (isBuildTime) {
    return {
      success: true,
      data: {
        ...data,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    };
  }
  return apiClient.createAdminLanding(data);
}

export async function updateAdminLanding(
  id: number,
  data: Partial<LandingPage>
): Promise<ApiResponse<LandingPage>> {
  if (isBuildTime) {
    const existing = getMockLandingById(id);
    if (!existing) {
      return {
        success: false,
        message: `Landing page with ID ${id} not found`,
        data: null as any,
      };
    }
    return {
      success: true,
      data: {
        ...existing,
        ...data,
        id,
        updatedAt: new Date().toISOString(),
      },
    };
  }
  return apiClient.updateAdminLanding(id, data);
}

export async function deleteAdminLanding(id: number): Promise<ApiResponse<null>> {
  if (isBuildTime) {
    return {
      success: true,
      data: null,
      message: `Landing page ${id} deleted (mock)`,
    };
  }
  return apiClient.deleteAdminLanding(id);
}

export async function publishAdminLanding(id: number): Promise<ApiResponse<LandingPage>> {
  if (isBuildTime) {
    const existing = getMockLandingById(id);
    if (!existing) {
      return {
        success: false,
        message: `Landing page with ID ${id} not found`,
        data: null as any,
      };
    }
    return {
      success: true,
      data: {
        ...existing,
        status: "published",
        publishedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    };
  }
  return apiClient.publishAdminLanding(id);
}

export async function unpublishAdminLanding(id: number): Promise<ApiResponse<LandingPage>> {
  if (isBuildTime) {
    const existing = getMockLandingById(id);
    if (!existing) {
      return {
        success: false,
        message: `Landing page with ID ${id} not found`,
        data: null as any,
      };
    }
    return {
      success: true,
      data: {
        ...existing,
        status: "draft",
        updatedAt: new Date().toISOString(),
      },
    };
  }
  return apiClient.unpublishAdminLanding(id);
}

export async function duplicateAdminLanding(id: number): Promise<ApiResponse<LandingPage>> {
  if (isBuildTime) {
    const existing = getMockLandingById(id);
    if (!existing) {
      return {
        success: false,
        message: `Landing page with ID ${id} not found`,
        data: null as any,
      };
    }
    return {
      success: true,
      data: {
        ...existing,
        id: Date.now(),
        slug: `${existing.slug}-copy-${Date.now()}`,
        title: `${existing.title} (Copy)`,
        status: "draft",
        publishedAt: undefined,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    };
  }
  return apiClient.duplicateAdminLanding(id);
}

export async function checkSlugAvailability(
  slug: string
): Promise<ApiResponse<{ available: boolean }>> {
  if (isBuildTime) {
    const isTaken = mockLandingAdmin?.some((l) => l.slug === slug) || mockLanding.data.slug === slug;
    return {
      success: true,
      data: { available: !isTaken },
    };
  }
  return apiClient.checkSlugAvailability(slug);
}

// ============================================================
// Section Management (fallback mock untuk build)
// ============================================================

export async function addSectionToLanding(
  landingId: number,
  type: SectionType
): Promise<ApiResponse<LandingSection>> {
  if (isBuildTime) {
    return {
      success: true,
      data: {
        id: Date.now(),
        landingPageId: landingId,
        type,
        sortOrder: 99,
        isActive: true,
        settings: getDefaultSettings(type),
      },
    };
  }
  return apiClient.addSectionToLanding(landingId, type);
}

export async function updateSection(
  sectionId: number,
  data: Partial<LandingSection>
): Promise<ApiResponse<LandingSection>> {
  if (isBuildTime) {
    // Jika data.settings tidak disediakan, gunakan default settings berdasarkan tipe
    const settings = data.settings
      ? data.settings
      : getDefaultSettings(data.type || "hero");

    return {
      success: true,
      data: {
        id: sectionId,
        landingPageId: data.landingPageId || 0,
        type: data.type || "hero",
        sortOrder: data.sortOrder || 1,
        isActive: data.isActive ?? true,
        settings,
        ...data,
      },
    };
  }
  return apiClient.updateSection(sectionId, data);
}

export async function deleteSection(sectionId: number): Promise<ApiResponse<null>> {
  if (isBuildTime) {
    return {
      success: true,
      data: null,
      message: `Section ${sectionId} deleted (mock)`,
    };
  }
  return apiClient.deleteSection(sectionId);
}

export async function reorderSections(
  sectionIds: number[]
): Promise<ApiResponse<{ reordered: boolean }>> {
  if (isBuildTime) {
    return {
      success: true,
      data: { reordered: true },
    };
  }
  return apiClient.reorderSections(sectionIds);
}

export async function toggleSectionActive(
  sectionId: number,
  isActive: boolean
): Promise<ApiResponse<{ id: number; isActive: boolean }>> {
  if (isBuildTime) {
    return {
      success: true,
      data: { id: sectionId, isActive },
    };
  }
  return apiClient.toggleSectionActive(sectionId, isActive);
}
// lib/landing-editor.ts

import type { LandingSection, SectionType, SectionSettings } from "@/types/section";
import type { LandingPage } from "@/types/landing";
import type { ApiResponse } from "@/types/api";

// ============================================================
// Simulasi delay
// ============================================================
const delay = (ms: number = 300) => new Promise((resolve) => setTimeout(resolve, ms));

// ============================================================
// Default settings for new sections
// ============================================================
const DEFAULT_SETTINGS_BY_TYPE: Record<SectionType, SectionSettings> = {
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

// ============================================================
// Section Operations
// ============================================================

/**
 * Add a new section to a landing page
 */
export async function addSectionToLanding(
  landingId: number,
  type: SectionType
): Promise<ApiResponse<LandingSection>> {
  await delay(400);

  const newId = Date.now();

  const newSection: LandingSection = {
    id: newId,
    landingPageId: landingId,
    type,
    sortOrder: 99,
    isActive: true,
    settings: DEFAULT_SETTINGS_BY_TYPE[type] || DEFAULT_SETTINGS_BY_TYPE["hero"],
  };

  console.log("Adding section to landing:", { landingId, type, newSection });

  return {
    success: true,
    data: newSection,
  };
}

/**
 * Update an existing section
 */
export async function updateSection(
  sectionId: number,
  data: Partial<LandingSection>
): Promise<ApiResponse<LandingSection>> {
  await delay(300);

  const updated: LandingSection = {
    id: sectionId,
    landingPageId: data.landingPageId || 0,
    type: data.type || ("hero" as SectionType),
    sortOrder: data.sortOrder || 1,
    isActive: data.isActive ?? true,
    settings: data.settings || DEFAULT_SETTINGS_BY_TYPE["hero"],
    ...data,
  };

  console.log("Updating section:", { sectionId, data, updated });

  return {
    success: true,
    data: updated,
  };
}

/**
 * Delete a section
 */
export async function deleteSection(sectionId: number): Promise<ApiResponse<null>> {
  await delay(300);

  console.log("Deleting section:", sectionId);

  return {
    success: true,
    data: null,
    message: `Section ${sectionId} deleted successfully`,
  };
}

/**
 * Reorder sections (bulk update sortOrder)
 */
export async function reorderSections(
  sectionIds: number[]
): Promise<ApiResponse<{ reordered: boolean }>> {
  await delay(300);

  console.log("Reordering sections:", sectionIds);

  return {
    success: true,
    data: { reordered: true },
  };
}

/**
 * Toggle section active status
 */
export async function toggleSectionActive(
  sectionId: number,
  isActive: boolean
): Promise<ApiResponse<{ id: number; isActive: boolean }>> {
  await delay(200);

  console.log("Toggling section active:", { sectionId, isActive });

  return {
    success: true,
    data: { id: sectionId, isActive },
  };
}

/**
 * Duplicate a section
 * Note: In mock, we create a new section with default settings for the same type
 * @param section - The section data to duplicate
 */
export async function duplicateSection(
  section: LandingSection
): Promise<ApiResponse<LandingSection>> {
  await delay(500);

  const duplicated: LandingSection = {
    ...section,
    id: Date.now(),
    sortOrder: section.sortOrder + 1,
    isActive: true,
    settings: JSON.parse(JSON.stringify(section.settings)), // Deep copy
  };

  console.log("Duplicating section:", { originalId: section.id, duplicated });

  return {
    success: true,
    data: duplicated,
  };
}

/**
 * Get default settings for a section type
 */
export function getDefaultSectionSettings(type: SectionType): SectionSettings {
  return DEFAULT_SETTINGS_BY_TYPE[type] || DEFAULT_SETTINGS_BY_TYPE["hero"];
}
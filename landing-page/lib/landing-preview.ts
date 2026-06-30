// lib/landing-preview.ts

import type { LandingSection } from "@/types/section";
import type { LandingPage } from "@/types/landing";
import type { ApiResponse } from "@/types/api";

// ============================================================
// Simulasi delay
// ============================================================
const delay = (ms: number = 200) => new Promise((resolve) => setTimeout(resolve, ms));

// ============================================================
// Preview Functions
// ============================================================

/**
 * Get preview data for a landing page
 * Returns the full landing page with sections filtered and sorted
 */
export async function getPreviewData(
  landingId: number
): Promise<ApiResponse<LandingPage>> {
  await delay(300);

  // In real implementation, fetch from DB
  // For mock, we'll simulate fetching
  const mockPreview: LandingPage = {
    id: landingId,
    slug: "preview-page",
    title: "Preview Landing Page",
    template: "default",
    status: "draft",
    metaTitle: "Preview Page",
    metaDescription: "This is a preview of the landing page",
    ogImage: "",
    offer: {
      id: 1,
      merchantName: "Preview Merchant",
      offerName: "Preview Offer",
      offerSlug: "preview-offer",
      affiliateUrl: "#",
      description: "Preview offer description",
      category: "Preview",
      status: "published",
    },
    sections: [], // Will be populated by the caller
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  console.log("Getting preview data for landing:", landingId);

  return {
    success: true,
    data: mockPreview,
  };
}

/**
 * Get preview HTML for a specific section
 * Useful for inline preview in the editor
 */
export async function getSectionPreviewHtml(
  section: LandingSection
): Promise<ApiResponse<{ html: string }>> {
  await delay(100);

  // In real implementation, render the section component to HTML on server
  // For mock, return a simple representation
  const html = `
    <div data-section-id="${section.id}" data-section-type="${section.type}">
      <div class="mock-preview">
        <h3>Preview: ${section.type}</h3>
        <p>This is a mock preview of the ${section.type} section.</p>
        <pre>${JSON.stringify(section.settings, null, 2)}</pre>
      </div>
    </div>
  `;

  return {
    success: true,
    data: { html },
  };
}

/**
 * Validate a landing page before publishing
 */
export async function validateLandingPage(
  landing: LandingPage
): Promise<ApiResponse<{ valid: boolean; errors: string[] }>> {
  await delay(300);

  const errors: string[] = [];

  // Check required fields
  if (!landing.title || landing.title.trim() === "") {
    errors.push("Title is required");
  }

  if (!landing.slug || landing.slug.trim() === "") {
    errors.push("Slug is required");
  }

  if (!landing.offer || !landing.offer.id) {
    errors.push("Offer is required");
  }

  // Check sections
  if (!landing.sections || landing.sections.length === 0) {
    errors.push("At least one section is required");
  }

  // Check for duplicate sort orders
  const sortOrders = landing.sections.map((s) => s.sortOrder);
  const uniqueSortOrders = new Set(sortOrders);
  if (sortOrders.length !== uniqueSortOrders.size) {
    errors.push("Duplicate sort orders found in sections");
  }

  // Check if any active section has empty settings
  landing.sections.forEach((s) => {
    if (s.isActive && (!s.settings || Object.keys(s.settings).length === 0)) {
      errors.push(`Section ${s.type} has empty settings`);
    }
  });

  // Check SEO (warnings only)
  if (!landing.metaTitle || landing.metaTitle.trim() === "") {
    errors.push("Meta title is recommended for SEO");
  }

  if (!landing.metaDescription || landing.metaDescription.trim() === "") {
    errors.push("Meta description is recommended for SEO");
  }

  return {
    success: true,
    data: {
      valid: errors.length === 0,
      errors,
    },
  };
}

/**
 * Simulate preview rendering with device viewport
 */
export async function getPreviewWithDevice(
  landingId: number,
  device: "desktop" | "tablet" | "mobile"
): Promise<ApiResponse<{ url: string; width: number; height: number }>> {
  await delay(200);

  const deviceSizes = {
    desktop: { width: 1920, height: 1080 },
    tablet: { width: 768, height: 1024 },
    mobile: { width: 375, height: 812 },
  };

  const size = deviceSizes[device];

  // In real implementation, this would return a URL to a rendered preview
  const previewUrl = `/api/preview/${landingId}?device=${device}`;

  return {
    success: true,
    data: {
      url: previewUrl,
      ...size,
    },
  };
}
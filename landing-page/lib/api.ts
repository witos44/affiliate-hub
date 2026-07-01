// lib/api.ts

import * as apiClient from "./api-client";
import type { LandingPage, LandingListItem } from "@/types/landing";
import type { Offer } from "@/types/offer";
import { mockLanding } from "@/mocks/Landing";
import { mockOffers } from "@/mocks/offers";
import { mockLandingAdmin } from "@/mocks/landing-admin";

// Deteksi apakah sedang dalam build (static generation)
const isBuildTime = typeof window === "undefined" && process.env.NEXT_PHASE !== "phase-production-server";

// Mock data untuk build time (tanpa fetch)
function getMockLandingList(): LandingListItem[] {
  const list: LandingListItem[] = [];

  // Dari mockLanding
  list.push({
    id: mockLanding.data.id,
    slug: mockLanding.data.slug,
    title: mockLanding.data.title,
    template: mockLanding.data.template,
    status: mockLanding.data.status,
  });

  // Dari mockLandingAdmin
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

// ============================================================
// PUBLIC API
// ============================================================

export async function getLanding(slug: string): Promise<LandingPage> {
  // Build time → pakai mock
  if (isBuildTime) {
    // Cari di mockLandingAdmin
    let landing = mockLandingAdmin?.find((l) => l.slug === slug);
    if (!landing && mockLanding.data.slug === slug) {
      landing = mockLanding.data;
    }
    if (landing) return landing;
    throw new Error(`Landing not found: ${slug}`);
  }

  // Runtime → fetch ke Worker
  return apiClient.getLandingBySlug(slug);
}

export async function getLandingList(): Promise<LandingListItem[]> {
  // Build time → pakai mock
  if (isBuildTime) {
    return getMockLandingList();
  }

  // Runtime → fetch ke Worker
  return apiClient.getLandingList();
}

export async function getOffers(): Promise<Offer[]> {
  // Build time → pakai mock
  if (isBuildTime) {
    return mockOffers;
  }

  // Runtime → fetch ke Worker
  return apiClient.getOffers();
}
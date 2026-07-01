// src/services/landingService.ts

import type { D1Database } from "@cloudflare/workers-types";
import type { LandingPage, LandingListItem, LandingSection } from "../repositories/landingRepository";
import type { SectionType, SectionSettings } from "../types/section";
import * as landingRepo from "../repositories/landingRepository";
import * as offerRepo from "../repositories/offerRepository";

// Default settings for new sections
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

export async function getLandingList(db: D1Database): Promise<LandingListItem[]> {
  return landingRepo.getLandingList(db);
}

export async function getLandingBySlug(db: D1Database, slug: string): Promise<LandingPage | null> {
  const landing = await landingRepo.getLandingBySlug(db, slug);
  if (!landing) return null;

  const offers = await offerRepo.getActiveOffers(db);
  const offer = offers.find((o) => o.id === landing.offer.id) || null;

  return {
    ...landing,
    offer: offer || { id: landing.offer.id },
  };
}

export async function getLandingById(db: D1Database, id: number): Promise<LandingPage | null> {
  const landing = await landingRepo.getLandingById(db, id);
  if (!landing) return null;

  const offers = await offerRepo.getActiveOffers(db);
  const offer = offers.find((o) => o.id === landing.offer.id) || null;

  return {
    ...landing,
    offer: offer || { id: landing.offer.id },
  };
}

export async function createLanding(
  db: D1Database,
  data: Omit<LandingPage, "id">
): Promise<LandingPage> {
  const id = await landingRepo.createLanding(db, data);
  const created = await getLandingById(db, id);
  return created!;
}

export async function updateLanding(
  db: D1Database,
  id: number,
  data: Partial<LandingPage>
): Promise<LandingPage | null> {
  await landingRepo.updateLanding(db, id, data);
  return getLandingById(db, id);
}

export async function deleteLanding(db: D1Database, id: number): Promise<boolean> {
  return landingRepo.deleteLanding(db, id);
}

export async function publishLanding(
  db: D1Database,
  id: number
): Promise<LandingPage | null> {
  const landing = await getLandingById(db, id);
  if (!landing) return null;

  await landingRepo.updateLanding(db, id, {
    status: "published",
    publishedAt: new Date().toISOString(),
  });

  return getLandingById(db, id);
}

export async function unpublishLanding(
  db: D1Database,
  id: number
): Promise<LandingPage | null> {
  const landing = await getLandingById(db, id);
  if (!landing) return null;

  await landingRepo.updateLanding(db, id, {
    status: "draft",
    publishedAt: undefined,
  });

  return getLandingById(db, id);
}

export async function duplicateLanding(
  db: D1Database,
  id: number
): Promise<LandingPage | null> {
  const original = await getLandingById(db, id);
  if (!original) return null;

  const { slug, title, sections } = original;
  const newSlug = `${slug}-copy-${Date.now()}`;
  const newTitle = `${title} (Copy)`;

  const duplicatedSections = sections.map((s) => ({
    ...s,
    id: 0,
    sortOrder: s.sortOrder,
    settings: JSON.parse(JSON.stringify(s.settings)),
  }));

  const newId = await landingRepo.createLanding(db, {
    ...original,
    slug: newSlug,
    title: newTitle,
    status: "draft",
    publishedAt: undefined,
    sections: duplicatedSections,
  });

  return getLandingById(db, newId);
}

export async function checkSlugAvailability(
  db: D1Database,
  slug: string
): Promise<boolean> {
  const exists = await landingRepo.checkSlugExists(db, slug);
  return !exists;
}

// ============================================================
// Section Services
// ============================================================

export async function addSection(
  db: D1Database,
  landingId: number,
  type: SectionType
): Promise<LandingSection> {
  const landing = await landingRepo.getLandingById(db, landingId);
  const lastOrder = landing?.sections?.length || 0;

  const settings = DEFAULT_SETTINGS_BY_TYPE[type] || DEFAULT_SETTINGS_BY_TYPE["hero"];

  const id = await landingRepo.createSection(
    db,
    landingId,
    type,
    lastOrder + 1,
    settings
  );

  return {
    id,
    landingPageId: landingId,
    type,
    sortOrder: lastOrder + 1,
    isActive: true,
    settings,
  };
}

export async function updateSection(
  db: D1Database,
  sectionId: number,
  data: Partial<LandingSection>
): Promise<LandingSection | null> {
  await landingRepo.updateSection(db, sectionId, data);
  
  const result = await db
    .prepare("SELECT * FROM sections WHERE id = ?")
    .bind(sectionId)
    .first();
  
  if (!result) return null;
  
  return {
    id: result.id as number,
    landingPageId: result.landing_page_id as number,
    type: result.type as SectionType,
    sortOrder: result.sort_order as number,
    isActive: result.is_active === 1,
    settings: JSON.parse((result.settings as string) || "{}"),
  };
}

export async function deleteSection(db: D1Database, sectionId: number): Promise<boolean> {
  return landingRepo.deleteSection(db, sectionId);
}

export async function toggleSectionActive(
  db: D1Database,
  sectionId: number,
  isActive: boolean
): Promise<{ id: number; isActive: boolean }> {
  await landingRepo.toggleSectionActive(db, sectionId, isActive);
  return { id: sectionId, isActive };
}

export async function reorderSections(
  db: D1Database,
  sectionIds: number[]
): Promise<boolean> {
  return landingRepo.reorderSections(db, sectionIds);
}
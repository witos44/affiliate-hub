// src/repositories/landingRepository.ts

import type { D1Database } from "@cloudflare/workers-types";
import type { SectionType, SectionSettings } from "../types/section";

// Helper untuk parse JSON settings
function parseSettings(settingsStr: string): any {
  try {
    return JSON.parse(settingsStr);
  } catch {
    return {};
  }
}

export interface LandingSection {
  id: number;
  landingPageId: number;
  type: SectionType;
  sortOrder: number;
  isActive: boolean;
  settings: SectionSettings;
}

export interface LandingPage {
  id: number;
  slug: string;
  title: string;
  template: string;
  status: "draft" | "published";
  offer: { id: string };
  sections: LandingSection[];
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface LandingListItem {
  id: number;
  slug: string;
  title: string;
  template: string;
  status: "draft" | "published";
}

export async function getLandingList(db: D1Database): Promise<LandingListItem[]> {
  const result = await db
    .prepare(
      `SELECT id, slug, title, template, status 
       FROM landing_pages 
       ORDER BY created_at DESC`
    )
    .all();

  // Map hasil D1 ke LandingListItem dengan tipe eksplisit
  return result.results.map((row: any) => ({
    id: row.id as number,
    slug: row.slug as string,
    title: row.title as string,
    template: row.template as string,
    status: row.status as "draft" | "published",
  }));
}

export async function getLandingBySlug(db: D1Database, slug: string): Promise<LandingPage | null> {
  const landingResult = await db
    .prepare(
      `SELECT id, slug, title, template, status, 
              meta_title, meta_description, og_image,
              offer_id, created_at, updated_at, published_at
       FROM landing_pages 
       WHERE slug = ?`
    )
    .bind(slug)
    .first();

  if (!landingResult) return null;

  const sectionsResult = await db
    .prepare(
      `SELECT id, landing_page_id, type, sort_order, is_active, settings 
       FROM sections 
       WHERE landing_page_id = ? 
       ORDER BY sort_order ASC`
    )
    .bind(landingResult.id)
    .all();

  const sections = sectionsResult.results.map((row: any) => ({
    id: row.id as number,
    landingPageId: row.landing_page_id as number,
    type: row.type as SectionType,
    sortOrder: row.sort_order as number,
    isActive: row.is_active === 1,
    settings: parseSettings(row.settings as string),
  }));

  return {
    id: landingResult.id as number,
    slug: landingResult.slug as string,
    title: landingResult.title as string,
    template: landingResult.template as string,
    status: landingResult.status as "draft" | "published",
    metaTitle: landingResult.meta_title as string | undefined,
    metaDescription: landingResult.meta_description as string | undefined,
    ogImage: landingResult.og_image as string | undefined,
    offer: { id: landingResult.offer_id as string },
    sections,
    createdAt: landingResult.created_at as string | undefined,
    updatedAt: landingResult.updated_at as string | undefined,
    publishedAt: landingResult.published_at as string | undefined,
  };
}

export async function getLandingById(db: D1Database, id: number): Promise<LandingPage | null> {
  const landingResult = await db
    .prepare(
      `SELECT id, slug, title, template, status, 
              meta_title, meta_description, og_image,
              offer_id, created_at, updated_at, published_at
       FROM landing_pages 
       WHERE id = ?`
    )
    .bind(id)
    .first();

  if (!landingResult) return null;

  const sectionsResult = await db
    .prepare(
      `SELECT id, landing_page_id, type, sort_order, is_active, settings 
       FROM sections 
       WHERE landing_page_id = ? 
       ORDER BY sort_order ASC`
    )
    .bind(id)
    .all();

  const sections = sectionsResult.results.map((row: any) => ({
    id: row.id as number,
    landingPageId: row.landing_page_id as number,
    type: row.type as SectionType,
    sortOrder: row.sort_order as number,
    isActive: row.is_active === 1,
    settings: parseSettings(row.settings as string),
  }));

  return {
    id: landingResult.id as number,
    slug: landingResult.slug as string,
    title: landingResult.title as string,
    template: landingResult.template as string,
    status: landingResult.status as "draft" | "published",
    metaTitle: landingResult.meta_title as string | undefined,
    metaDescription: landingResult.meta_description as string | undefined,
    ogImage: landingResult.og_image as string | undefined,
    offer: { id: landingResult.offer_id as string },
    sections,
    createdAt: landingResult.created_at as string | undefined,
    updatedAt: landingResult.updated_at as string | undefined,
    publishedAt: landingResult.published_at as string | undefined,
  };
}

export async function createLanding(
  db: D1Database,
  data: Omit<LandingPage, "id">
): Promise<number> {
  const result = await db
    .prepare(
      `INSERT INTO landing_pages 
       (slug, title, template, status, offer_id, meta_title, meta_description, og_image)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .bind(
      data.slug,
      data.title,
      data.template || "default",
      data.status || "draft",
      data.offer.id,
      data.metaTitle || null,
      data.metaDescription || null,
      data.ogImage || null
    )
    .run();

  // Insert sections
  if (data.sections && data.sections.length > 0) {
    for (const section of data.sections) {
      await db
        .prepare(
          `INSERT INTO sections 
           (landing_page_id, type, sort_order, is_active, settings)
           VALUES (?, ?, ?, ?, ?)`
        )
        .bind(
          result.meta?.last_row_id,
          section.type,
          section.sortOrder,
          section.isActive ? 1 : 0,
          JSON.stringify(section.settings)
        )
        .run();
    }
  }

  return result.meta?.last_row_id || 0;
}

export async function updateLanding(
  db: D1Database,
  id: number,
  data: Partial<LandingPage>
): Promise<boolean> {
  const fields: string[] = [];
  const values: any[] = [];

  if (data.slug !== undefined) { fields.push("slug = ?"); values.push(data.slug); }
  if (data.title !== undefined) { fields.push("title = ?"); values.push(data.title); }
  if (data.template !== undefined) { fields.push("template = ?"); values.push(data.template); }
  if (data.status !== undefined) { fields.push("status = ?"); values.push(data.status); }
  if (data.metaTitle !== undefined) { fields.push("meta_title = ?"); values.push(data.metaTitle); }
  if (data.metaDescription !== undefined) { fields.push("meta_description = ?"); values.push(data.metaDescription); }
  if (data.ogImage !== undefined) { fields.push("og_image = ?"); values.push(data.ogImage); }
  if (data.publishedAt !== undefined) { fields.push("published_at = ?"); values.push(data.publishedAt); }

  if (fields.length === 0) return false;

  fields.push("updated_at = CURRENT_TIMESTAMP");
  values.push(id);

  const query = `UPDATE landing_pages SET ${fields.join(", ")} WHERE id = ?`;
  const result = await db.prepare(query).bind(...values).run();

  // Update sections if provided
  if (data.sections) {
    // Hapus sections lama
    await db.prepare("DELETE FROM sections WHERE landing_page_id = ?").bind(id).run();
    // Insert ulang
    for (const section of data.sections) {
      await db
        .prepare(
          `INSERT INTO sections 
           (landing_page_id, type, sort_order, is_active, settings)
           VALUES (?, ?, ?, ?, ?)`
        )
        .bind(id, section.type, section.sortOrder, section.isActive ? 1 : 0, JSON.stringify(section.settings))
        .run();
    }
  }

  return result.success;
}

export async function deleteLanding(db: D1Database, id: number): Promise<boolean> {
  const result = await db.prepare("DELETE FROM landing_pages WHERE id = ?").bind(id).run();
  return result.success;
}

export async function checkSlugExists(db: D1Database, slug: string): Promise<boolean> {
  const result = await db.prepare("SELECT id FROM landing_pages WHERE slug = ?").bind(slug).first();
  return !!result;
}

// ============================================================
// Section Repository Functions
// ============================================================

export async function createSection(
  db: D1Database,
  landingId: number,
  type: SectionType,
  sortOrder: number,
  settings: any
): Promise<number> {
  const result = await db
    .prepare(
      `INSERT INTO sections 
       (landing_page_id, type, sort_order, is_active, settings)
       VALUES (?, ?, ?, ?, ?)`
    )
    .bind(landingId, type, sortOrder, 1, JSON.stringify(settings))
    .run();
  return result.meta?.last_row_id || 0;
}

export async function updateSection(
  db: D1Database,
  sectionId: number,
  data: Partial<LandingSection>
): Promise<boolean> {
  const fields: string[] = [];
  const values: any[] = [];

  if (data.type !== undefined) { fields.push("type = ?"); values.push(data.type); }
  if (data.sortOrder !== undefined) { fields.push("sort_order = ?"); values.push(data.sortOrder); }
  if (data.isActive !== undefined) { fields.push("is_active = ?"); values.push(data.isActive ? 1 : 0); }
  if (data.settings !== undefined) { fields.push("settings = ?"); values.push(JSON.stringify(data.settings)); }

  if (fields.length === 0) return false;

  fields.push("updated_at = CURRENT_TIMESTAMP");
  values.push(sectionId);

  const query = `UPDATE sections SET ${fields.join(", ")} WHERE id = ?`;
  const result = await db.prepare(query).bind(...values).run();
  return result.success;
}

export async function deleteSection(db: D1Database, sectionId: number): Promise<boolean> {
  const result = await db.prepare("DELETE FROM sections WHERE id = ?").bind(sectionId).run();
  return result.success;
}

export async function toggleSectionActive(
  db: D1Database,
  sectionId: number,
  isActive: boolean
): Promise<boolean> {
  const result = await db
    .prepare("UPDATE sections SET is_active = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?")
    .bind(isActive ? 1 : 0, sectionId)
    .run();
  return result.success;
}

export async function reorderSections(
  db: D1Database,
  sectionIds: number[]
): Promise<boolean> {
  for (let i = 0; i < sectionIds.length; i++) {
    await db
      .prepare("UPDATE sections SET sort_order = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?")
      .bind(i + 1, sectionIds[i])
      .run();
  }
  return true;
}
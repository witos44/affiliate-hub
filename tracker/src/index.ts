// src/index.ts

import { AutoRouter } from "itty-router";
import { corsHeaders } from "./middleware/cors";
import { setGlobalEnv } from "./middleware/auth"; // <-- TAMBAHKAN INI
import {
  handleGetLandingList,
  handleGetLandingBySlug,
} from "./routes/public/landings";
import { handleGetOffers } from "./routes/public/offers";
import {
  handleAdminGetLandingList,
  handleAdminGetLandingById,
  handleAdminCreateLanding,
  handleAdminUpdateLanding,
  handleAdminDeleteLanding,
  handleAdminPublishLanding,
  handleAdminUnpublishLanding,
  handleAdminDuplicateLanding,
  handleAdminCheckSlug,
} from "./routes/admin/landings";
import {
  handleAdminAddSection,
  handleAdminUpdateSection,
  handleAdminDeleteSection,
  handleAdminToggleSection,
  handleAdminReorderSections,
} from "./routes/admin/sections";
import { handleTrackClick } from "./routes/tracking";

// ============================================================
// AutoRouter
// ============================================================
const router = AutoRouter();

// ============================================================
// Public Routes
// ============================================================
router.get("/api/public/landings", handleGetLandingList);
router.get("/api/public/landings/:slug", handleGetLandingBySlug);
router.get("/api/public/offers", handleGetOffers);

// ============================================================
// Admin Routes
// ============================================================
router.get("/api/admin/landings", handleAdminGetLandingList);
router.get("/api/admin/landings/:id", handleAdminGetLandingById);
router.post("/api/admin/landings", handleAdminCreateLanding);
router.put("/api/admin/landings/:id", handleAdminUpdateLanding);
router.delete("/api/admin/landings/:id", handleAdminDeleteLanding);
router.post("/api/admin/landings/:id/publish", handleAdminPublishLanding);
router.post("/api/admin/landings/:id/unpublish", handleAdminUnpublishLanding);
router.post("/api/admin/landings/:id/duplicate", handleAdminDuplicateLanding);
router.get("/api/admin/landings/check-slug", handleAdminCheckSlug);

// Section Routes
router.post("/api/admin/landings/:id/sections", handleAdminAddSection);
router.put("/api/admin/sections/:id", handleAdminUpdateSection);
router.delete("/api/admin/sections/:id", handleAdminDeleteSection);
router.patch("/api/admin/sections/:id/toggle", handleAdminToggleSection);
router.post("/api/admin/sections/reorder", handleAdminReorderSections);

// Tracking Route
router.post("/api/track/:offerSlug", handleTrackClick);

// ============================================================
// CORS & 404 Handler
// ============================================================
export default {
  async fetch(request: Request, env: any): Promise<Response> {
    // 🔑 Set global env agar bisa diakses oleh validateApiKey
    setGlobalEnv(env);

    // Handle OPTIONS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(request),
      });
    }

    try {
      const response = await router.fetch(request, env);
      const cors = corsHeaders(request);
      Object.entries(cors).forEach(([key, value]) => {
        response.headers.set(key, value);
      });
      return response;
    } catch (error) {
      console.error("Unhandled error:", error);
      return new Response(
        JSON.stringify({
          success: false,
          message: error instanceof Error ? error.message : "Internal Server Error",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  },
};
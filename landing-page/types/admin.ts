// types/admin.ts

import type { LandingPage, LandingListItem } from "./landing";
import type { SectionType } from "./section";

// ============================================================
// Admin User
// ============================================================
export interface AdminUser {
  id: number;
  email: string;
  name: string;
  role: "admin" | "editor" | "viewer";
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

// ============================================================
// Admin Filters
// ============================================================
export interface LandingFilter {
  search?: string;
  status?: "draft" | "published" | "all";
  template?: string;
  sortBy?: "title" | "createdAt" | "updatedAt" | "status";
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

// ============================================================
// Admin State
// ============================================================
export interface AdminLandingState {
  items: LandingListItem[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  filters: LandingFilter;
  isLoading: boolean;
  error: string | null;
}

// ============================================================
// Section Validation
// ============================================================
export interface SectionValidationResult {
  valid: boolean;
  errors: {
    field: string;
    message: string;
  }[];
}

// ============================================================
// Landing Page Validation
// ============================================================
export interface LandingValidationResult {
  valid: boolean;
  errors: {
    field: string;
    message: string;
  }[];
  warnings: {
    field: string;
    message: string;
  }[];
}

// ============================================================
// Admin Action Results
// ============================================================
export interface AdminActionResult<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string>;
}

// ============================================================
// Bulk Operations
// ============================================================
export interface BulkOperation {
  ids: number[];
  action: "publish" | "unpublish" | "delete" | "duplicate";
}

export interface BulkOperationResult {
  success: number;
  failed: number;
  errors?: {
    id: number;
    error: string;
  }[];
}

// ============================================================
// Dashboard Stats
// ============================================================
export interface AdminDashboardStats {
  totalLandings: number;
  publishedLandings: number;
  draftLandings: number;
  totalSections: number;
  recentActivity: {
    id: number;
    action: "created" | "updated" | "published" | "deleted";
    target: string;
    timestamp: string;
    user: string;
  }[];
}
// types/api.ts

import type { LandingPage, LandingListItem } from "./landing";
import type { Offer } from "./offer";

/* ==========================================================
   Generic API Response
========================================================== */

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  errors?: Record<string, string>;
}

/* ==========================================================
   Landing Page
========================================================== */

export type LandingResponse =
  ApiResponse<LandingPage>;

export type LandingListResponse =
  ApiResponse<LandingListItem[]>;

/* ==========================================================
   Offer
========================================================== */

export type OfferResponse =
  ApiResponse<Offer>;

export type OfferListResponse =
  ApiResponse<Offer[]>;

/* ==========================================================
   Pagination
========================================================== */

export interface Pagination {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: Pagination;
}
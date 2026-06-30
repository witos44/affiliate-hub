// hooks/useLandingPreview.ts

"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { LandingSection } from "@/types/section";

export interface UseLandingPreviewOptions {
  sections: LandingSection[];
  autoRefresh?: boolean;
  refreshInterval?: number;
}

export interface UseLandingPreviewReturn {
  previewSections: LandingSection[];
  isLoading: boolean;
  error: string | null;
  refresh: () => void;
  isRefreshing: boolean;
  lastUpdated: Date | null;
}

export function useLandingPreview({
  sections,
  autoRefresh = true,
  refreshInterval = 2000,
}: UseLandingPreviewOptions): UseLandingPreviewReturn {
  const [previewSections, setPreviewSections] = useState<LandingSection[]>(sections);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const prevSectionsRef = useRef<LandingSection[]>(sections);

  // Fungsi refresh: update preview dengan sections terbaru
  const refresh = useCallback(() => {
    setIsRefreshing(true);
    setError(null);

    try {
      // Filter active sections dan sort berdasarkan sortOrder
      const activeSections = sections
        .filter((s) => s.isActive)
        .sort((a, b) => a.sortOrder - b.sortOrder);

      setPreviewSections(activeSections);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to refresh preview");
    } finally {
      setIsRefreshing(false);
    }
  }, [sections]);

  // Auto-refresh ketika sections berubah
  useEffect(() => {
    if (autoRefresh) {
      // Hanya refresh jika sections benar-benar berubah (deep compare)
      if (JSON.stringify(prevSectionsRef.current) !== JSON.stringify(sections)) {
        prevSectionsRef.current = sections;
        refresh();
      }
    }
  }, [sections, autoRefresh, refresh]);

  // Periodic refresh (opsional)
  useEffect(() => {
    if (autoRefresh && refreshInterval > 0) {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }

      timeoutRef.current = setInterval(() => {
        refresh();
      }, refreshInterval);

      return () => {
        if (timeoutRef.current) {
          clearInterval(timeoutRef.current);
        }
      };
    }
  }, [autoRefresh, refreshInterval, refresh]);

  // Initial refresh
  useEffect(() => {
    if (sections.length > 0) {
      refresh();
    }
  }, []); // Only once on mount

  return {
    previewSections,
    isLoading,
    error,
    refresh,
    isRefreshing,
    lastUpdated,
  };
}
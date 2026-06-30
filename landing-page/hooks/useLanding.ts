// hooks/useLanding.ts
"use client";

import { useEffect, useState } from "react";
import { getLanding } from "@/lib/api";
import type { LandingPage } from "@/types/landing";

export function useLanding(slug: string) {
  const [landing, setLanding] = useState<LandingPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await getLanding(slug);
        if (!cancelled) {
          setLanding(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unknown error");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { landing, loading, error };
}
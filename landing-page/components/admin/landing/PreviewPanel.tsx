// components/admin/landing/PreviewPanel.tsx

"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { PreviewToolbar, PreviewDevice } from "./PreviewToolbar";
import { PreviewFrame } from "./PreviewFrame";
import LandingRenderer from "@/components/landing/LandingRenderer";
import type { LandingSection } from "@/types/section";

interface PreviewPanelProps {
  sections: LandingSection[];
  className?: string;
}

export function PreviewPanel({ sections, className = "" }: PreviewPanelProps) {
  const [device, setDevice] = useState<PreviewDevice>("desktop");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [key, setKey] = useState(0); // Untuk memaksa re-render
  const prevSectionsRef = useRef<LandingSection[]>(sections);

  // Refresh preview – increment key untuk memaksa re-mount komponen
  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    setKey((prev) => prev + 1);
    // Simulasi loading, matikan setelah 500ms
    setTimeout(() => setIsRefreshing(false), 500);
  }, []);

  // Otomatis refresh ketika sections berubah (jika ada perubahan dari editor)
  useEffect(() => {
    // Cek apakah sections benar-benar berubah (deep compare sederhana)
    if (JSON.stringify(prevSectionsRef.current) !== JSON.stringify(sections)) {
      prevSectionsRef.current = sections;
      // Refresh otomatis, tapi tanpa loading state agar tidak mengganggu
      setKey((prev) => prev + 1);
    }
  }, [sections]);

  // Saring section yang aktif dan urutkan
  const activeSections = sections
    .filter((section) => section.isActive)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <div className={`flex flex-col ${className}`}>
      <PreviewToolbar
        device={device}
        onDeviceChange={setDevice}
        onRefresh={handleRefresh}
        isRefreshing={isRefreshing}
      />
      <PreviewFrame device={device}>
        {/* Key untuk memaksa remount ketika refresh atau sections berubah */}
        <div key={key} className="w-full">
          {activeSections.length === 0 ? (
            <div className="flex items-center justify-center h-64 text-gray-500">
              <p>No active sections to preview.</p>
            </div>
          ) : (
            <LandingRenderer sections={activeSections} />
          )}
        </div>
      </PreviewFrame>
    </div>
  );
}
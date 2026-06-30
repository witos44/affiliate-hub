// components/admin/landing/SectionEmpty.tsx

"use client";

import { Plus } from "lucide-react";

interface SectionEmptyProps {
  onAddSection?: () => void;
}

export function SectionEmpty({ onAddSection }: SectionEmptyProps) {
  return (
    <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-12 text-center">
      <div className="mx-auto max-w-sm">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-gray-100 p-4">
            <Plus className="h-8 w-8 text-gray-400" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">
          No sections yet
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Build your landing page by adding sections like Hero, Benefits,
          Features, and more.
        </p>
        {onAddSection && (
          <button
            onClick={onAddSection}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add your first section
          </button>
        )}
      </div>
    </div>
  );
}
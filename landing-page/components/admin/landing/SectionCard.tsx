// components/admin/landing/SectionCard.tsx

"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  GripVertical,
  Eye,
  EyeOff,
  Pencil,
  Trash2,
  MoveUp,
  MoveDown,
} from "lucide-react";
import type { LandingSection } from "@/types/section";

interface SectionCardProps {
  section: LandingSection;
  onEdit: () => void;
  onDelete: () => void;
  onToggleActive: () => void;
}

const SectionTypeLabels: Record<string, string> = {
  hero: "Hero",
  benefits: "Benefits",
  problem: "Problem",
  solution: "Solution",
  features: "Features",
  faq: "FAQ",
  cta: "CTA",
  comparison: "Comparison",
  gallery: "Gallery",
  pricing: "Pricing",
  testimonials: "Testimonials",
  video: "Video",
};

const SectionTypeColors: Record<string, string> = {
  hero: "bg-purple-100 text-purple-800",
  benefits: "bg-green-100 text-green-800",
  problem: "bg-red-100 text-red-800",
  solution: "bg-blue-100 text-blue-800",
  features: "bg-indigo-100 text-indigo-800",
  faq: "bg-orange-100 text-orange-800",
  cta: "bg-pink-100 text-pink-800",
  comparison: "bg-cyan-100 text-cyan-800",
  gallery: "bg-amber-100 text-amber-800",
  pricing: "bg-emerald-100 text-emerald-800",
  testimonials: "bg-teal-100 text-teal-800",
  video: "bg-rose-100 text-rose-800",
};

export function SectionCard({
  section,
  onEdit,
  onDelete,
  onToggleActive,
}: SectionCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const label = SectionTypeLabels[section.type] || section.type;
  const colorClass = SectionTypeColors[section.type] || "bg-gray-100 text-gray-800";

  return (
    <div ref={setNodeRef} style={style}>
      <Card className={`${!section.isActive ? "opacity-60" : ""}`}>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            {/* Drag Handle */}
            <button
              {...attributes}
              {...listeners}
              className="cursor-grab text-gray-400 hover:text-gray-600 touch-none"
              aria-label="Drag to reorder"
            >
              <GripVertical className="h-5 w-5" />
            </button>

            {/* Section Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge className={colorClass}>{label}</Badge>
                {!section.isActive && (
                  <Badge variant="outline" className="text-gray-500">
                    Hidden
                  </Badge>
                )}
                <span className="text-sm text-gray-500 ml-2">
                  Order: {section.sortOrder}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1 truncate">
                ID: {section.id} • Type: {section.type}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 shrink-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggleActive}
                title={section.isActive ? "Hide" : "Show"}
              >
                {section.isActive ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onEdit}
                title="Edit section"
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onDelete}
                title="Delete section"
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
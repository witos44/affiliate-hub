// components/admin/landing/SectionToolbar.tsx

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus, LayoutTemplate } from "lucide-react";
import type { SectionType } from "@/types/section";

const SECTION_TYPES: { value: SectionType; label: string }[] = [
  { value: "hero", label: "Hero" },
  { value: "benefits", label: "Benefits" },
  { value: "problem", label: "Problem" },
  { value: "solution", label: "Solution" },
  { value: "features", label: "Features" },
  { value: "faq", label: "FAQ" },
  { value: "cta", label: "CTA" },
  { value: "comparison", label: "Comparison" },
  { value: "gallery", label: "Gallery" },
  { value: "pricing", label: "Pricing" },
  { value: "testimonials", label: "Testimonials" },
  { value: "video", label: "Video" },
];

interface SectionToolbarProps {
  onAddSection: (type: SectionType) => void;
}

export function SectionToolbar({ onAddSection }: SectionToolbarProps) {
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<SectionType | null>(null);

  const handleAdd = (type: SectionType) => {
    setSelectedType(type);
    setOpen(true);
  };

  const handleConfirm = () => {
    if (selectedType) {
      onAddSection(selectedType);
      setOpen(false);
      setSelectedType(null);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Section
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 max-h-96 overflow-y-auto">
          {SECTION_TYPES.map((type) => (
            <DropdownMenuItem
              key={type.value}
              onClick={() => handleAdd(type.value)}
            >
              <LayoutTemplate className="mr-2 h-4 w-4" />
              {type.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Section</DialogTitle>
            <DialogDescription>
              You are about to add a <strong>{selectedType}</strong> section.
              It will be added with default settings.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-4 justify-end pt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirm}>Add Section</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
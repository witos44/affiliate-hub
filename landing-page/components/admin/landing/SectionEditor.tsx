// components/admin/landing/SectionEditor.tsx

"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import type { LandingSection, SectionType, SectionSettings } from "@/types/section";

interface SectionEditorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  section: LandingSection | null;
  onSave: (section: LandingSection) => void;
}

const DEFAULT_SETTINGS_BY_TYPE: Record<SectionType, SectionSettings> = {
  hero: {
    badge: "New Section",
    title: "Hero Title",
    subtitle: "Hero subtitle goes here",
    buttonText: "Get Started",
    buttonUrl: "#",
  },
  benefits: {
    items: ["Benefit 1", "Benefit 2", "Benefit 3", "Benefit 4"],
  },
  problem: {
    title: "What's the Problem?",
    description: "Describe the problem here.",
  },
  solution: {
    title: "The Solution",
    description: "Describe the solution here.",
  },
  features: {
    items: [
      { title: "Feature 1", description: "Description of feature 1" },
      { title: "Feature 2", description: "Description of feature 2" },
      { title: "Feature 3", description: "Description of feature 3" },
    ],
  },
  faq: {
    items: [
      { question: "Question 1?", answer: "Answer 1." },
      { question: "Question 2?", answer: "Answer 2." },
    ],
  },
  cta: {
    title: "Call to Action",
    subtitle: "This is a call to action section",
    buttonText: "Get Started",
    buttonUrl: "#",
  },
  comparison: {
    title: "Comparison",
    subtitle: "Compare us with others",
    items: [
      { feature: "Feature 1", us: "Yes", others: "No" },
      { feature: "Feature 2", us: "Yes", others: "Yes" },
    ],
  },
  gallery: {
    title: "Gallery",
    subtitle: "Image gallery",
    images: [
      { image: "/placeholder.jpg", title: "Image 1" },
      { image: "/placeholder.jpg", title: "Image 2" },
    ],
  },
  pricing: {
    title: "Pricing",
    subtitle: "Choose your plan",
    plans: [
      {
        name: "Basic",
        price: "$9",
        description: "Basic plan",
        button: "Get Started",
        url: "#",
      },
    ],
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "What people say",
    items: [
      {
        name: "John Doe",
        role: "CEO",
        message: "Great product!",
      },
    ],
  },
  video: {
    title: "Video",
    subtitle: "Watch this video",
    url: "https://www.youtube.com/embed/VIDEO_ID",
  },
};

export function SectionEditor({
  open,
  onOpenChange,
  section,
  onSave,
}: SectionEditorProps) {
  const [editingSection, setEditingSection] = useState<LandingSection | null>(
    null
  );

  useEffect(() => {
    if (section) {
      setEditingSection({
        ...section,
        settings: section.settings || {},
      });
    }
  }, [section]);

  if (!editingSection) return null;

  const handleChange = (field: string, value: any) => {
    setEditingSection((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        settings: {
          ...prev.settings,
          [field]: value,
        },
      };
    });
  };

  const handleSave = () => {
    if (editingSection) {
      onSave(editingSection);
      onOpenChange(false);
    }
  };

  const renderSettingsEditor = () => {
    const settings = editingSection.settings;
    const type = editingSection.type;

    // Generic editor - renders fields based on settings object
    return (
      <div className="space-y-4">
        {Object.entries(settings).map(([key, value]) => {
          // Skip complex objects (handled separately by specific editors in Batch 4)
          if (typeof value === "object" && value !== null) {
            return (
              <div key={key} className="space-y-2">
                <Label className="text-sm font-medium capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </Label>
                <p className="text-sm text-gray-500">
                  Complex field: {key} ({Array.isArray(value) ? "Array" : "Object"})
                </p>
              </div>
            );
          }

          return (
            <div key={key} className="space-y-2">
              <Label htmlFor={key} className="text-sm font-medium capitalize">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </Label>
              {typeof value === "string" && value.length > 100 ? (
                <Textarea
                  id={key}
                  value={value as string}
                  onChange={(e) => handleChange(key, e.target.value)}
                  rows={3}
                />
              ) : typeof value === "string" ? (
                <Input
                  id={key}
                  value={value as string}
                  onChange={(e) => handleChange(key, e.target.value)}
                />
              ) : typeof value === "boolean" ? (
                <Switch
                  checked={value as boolean}
                  onCheckedChange={(checked) => handleChange(key, checked)}
                />
              ) : typeof value === "number" ? (
                <Input
                  id={key}
                  type="number"
                  value={value as number}
                  onChange={(e) => handleChange(key, parseInt(e.target.value))}
                />
              ) : (
                <Input
                  id={key}
                  value={String(value)}
                  onChange={(e) => handleChange(key, e.target.value)}
                />
              )}
            </div>
          );
        })}

        {Object.keys(settings).length === 0 && (
          <p className="text-sm text-gray-500">No settings configured.</p>
        )}
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Edit Section:{" "}
            <span className="capitalize bg-gray-100 px-3 py-1 rounded-md text-sm font-normal">
              {editingSection.type}
            </span>
          </DialogTitle>
          <DialogDescription>
            Configure the settings for this section.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Section metadata (readonly) */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="text-xs text-gray-500">ID</p>
              <p className="text-sm font-medium">{editingSection.id}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Type</p>
              <p className="text-sm font-medium capitalize">{editingSection.type}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Order</p>
              <p className="text-sm font-medium">{editingSection.sortOrder}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xs text-gray-500">Active</p>
              <Switch
                checked={editingSection.isActive}
                onCheckedChange={(checked) =>
                  setEditingSection((prev) =>
                    prev ? { ...prev, isActive: checked } : null
                  )
                }
              />
            </div>
          </div>

          {/* Settings editor */}
          <div className="border-t pt-4">
            <h4 className="text-sm font-medium mb-4">Settings</h4>
            {renderSettingsEditor()}
          </div>
        </div>

        <div className="flex gap-4 justify-end pt-4 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
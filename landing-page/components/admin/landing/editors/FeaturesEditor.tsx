// components/admin/landing/editors/FeaturesEditor.tsx

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";
import type { FeaturesSettings, FeatureItem } from "@/types/section";

interface FeaturesEditorProps {
  settings: FeaturesSettings;
  onChange: (settings: FeaturesSettings) => void;
}

export function FeaturesEditor({ settings, onChange }: FeaturesEditorProps) {
  const addItem = () => {
    onChange({
      ...settings,
      items: [...settings.items, { title: "", description: "" }],
    });
  };

  const removeItem = (index: number) => {
    const newItems = settings.items.filter((_, i) => i !== index);
    onChange({ ...settings, items: newItems });
  };

  const updateItem = (index: number, field: keyof FeatureItem, value: string) => {
    const newItems = [...settings.items];
    newItems[index] = { ...newItems[index], [field]: value };
    onChange({ ...settings, items: newItems });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label>Features</Label>
        <Button type="button" variant="outline" size="sm" onClick={addItem}>
          <Plus className="h-4 w-4 mr-1" />
          Add Feature
        </Button>
      </div>

      <div className="space-y-4">
        {settings.items.map((item, index) => (
          <div key={index} className="border rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-start">
              <Label className="text-sm font-medium">Feature {index + 1}</Label>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeItem(index)}
                className="text-red-500 hover:text-red-700"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <Input
                value={item.title}
                onChange={(e) => updateItem(index, "title", e.target.value)}
                placeholder="Feature title"
              />
              <Textarea
                value={item.description}
                onChange={(e) => updateItem(index, "description", e.target.value)}
                placeholder="Feature description"
                rows={2}
              />
            </div>
          </div>
        ))}
        {settings.items.length === 0 && (
          <p className="text-sm text-gray-500">No features added yet.</p>
        )}
      </div>
    </div>
  );
}
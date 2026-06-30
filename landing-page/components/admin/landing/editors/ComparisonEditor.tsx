// components/admin/landing/editors/ComparisonEditor.tsx

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";
import type { ComparisonSettings, ComparisonItem } from "@/types/section";

interface ComparisonEditorProps {
  settings: ComparisonSettings;
  onChange: (settings: ComparisonSettings) => void;
}

export function ComparisonEditor({ settings, onChange }: ComparisonEditorProps) {
  const addItem = () => {
    onChange({
      ...settings,
      items: [...settings.items, { feature: "", us: "", others: "" }],
    });
  };

  const removeItem = (index: number) => {
    const newItems = settings.items.filter((_, i) => i !== index);
    onChange({ ...settings, items: newItems });
  };

  const updateItem = (index: number, field: keyof ComparisonItem, value: string) => {
    const newItems = [...settings.items];
    newItems[index] = { ...newItems[index], [field]: value };
    onChange({ ...settings, items: newItems });
  };

  const handleChange = (field: keyof ComparisonSettings, value: string) => {
    onChange({ ...settings, [field]: value });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={settings.title}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="Why Choose Us?"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subtitle">Subtitle</Label>
        <Textarea
          id="subtitle"
          value={settings.subtitle}
          onChange={(e) => handleChange("subtitle", e.target.value)}
          placeholder="Brief description"
          rows={2}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>Comparison Items</Label>
          <Button type="button" variant="outline" size="sm" onClick={addItem}>
            <Plus className="h-4 w-4 mr-1" />
            Add Row
          </Button>
        </div>

        <div className="space-y-3">
          {settings.items.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-start">
                <Label className="text-sm font-medium">Row {index + 1}</Label>
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

              <div className="grid grid-cols-3 gap-3">
                <Input
                  value={item.feature}
                  onChange={(e) => updateItem(index, "feature", e.target.value)}
                  placeholder="Feature"
                />
                <Input
                  value={item.us}
                  onChange={(e) => updateItem(index, "us", e.target.value)}
                  placeholder="Our value"
                />
                <Input
                  value={item.others}
                  onChange={(e) => updateItem(index, "others", e.target.value)}
                  placeholder="Others value"
                />
              </div>
            </div>
          ))}
          {settings.items.length === 0 && (
            <p className="text-sm text-gray-500">No comparison rows added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
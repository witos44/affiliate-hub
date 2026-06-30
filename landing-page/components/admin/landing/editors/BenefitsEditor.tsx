// components/admin/landing/editors/BenefitsEditor.tsx

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";
import type { BenefitsSettings } from "@/types/section";

interface BenefitsEditorProps {
  settings: BenefitsSettings;
  onChange: (settings: BenefitsSettings) => void;
}

export function BenefitsEditor({ settings, onChange }: BenefitsEditorProps) {
  const addItem = () => {
    onChange({
      ...settings,
      items: [...settings.items, ""],
    });
  };

  const removeItem = (index: number) => {
    const newItems = settings.items.filter((_, i) => i !== index);
    onChange({ ...settings, items: newItems });
  };

  const updateItem = (index: number, value: string) => {
    const newItems = [...settings.items];
    newItems[index] = value;
    onChange({ ...settings, items: newItems });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label>Benefits List</Label>
        <Button type="button" variant="outline" size="sm" onClick={addItem}>
          <Plus className="h-4 w-4 mr-1" />
          Add Benefit
        </Button>
      </div>

      <div className="space-y-2">
        {settings.items.map((item, index) => (
          <div key={index} className="flex gap-2">
            <Input
              value={item}
              onChange={(e) => updateItem(index, e.target.value)}
              placeholder={`Benefit ${index + 1}`}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => removeItem(index)}
              className="shrink-0 text-red-500 hover:text-red-700"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
        {settings.items.length === 0 && (
          <p className="text-sm text-gray-500">No benefits added yet.</p>
        )}
      </div>
    </div>
  );
}
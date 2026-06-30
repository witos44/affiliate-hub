// components/admin/landing/editors/FAQEditor.tsx

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";
import type { FAQSettings, FAQItem } from "@/types/section";

interface FAQEditorProps {
  settings: FAQSettings;
  onChange: (settings: FAQSettings) => void;
}

export function FAQEditor({ settings, onChange }: FAQEditorProps) {
  const addItem = () => {
    onChange({
      ...settings,
      items: [...settings.items, { question: "", answer: "" }],
    });
  };

  const removeItem = (index: number) => {
    const newItems = settings.items.filter((_, i) => i !== index);
    onChange({ ...settings, items: newItems });
  };

  const updateItem = (index: number, field: keyof FAQItem, value: string) => {
    const newItems = [...settings.items];
    newItems[index] = { ...newItems[index], [field]: value };
    onChange({ ...settings, items: newItems });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label>FAQ Items</Label>
        <Button type="button" variant="outline" size="sm" onClick={addItem}>
          <Plus className="h-4 w-4 mr-1" />
          Add FAQ
        </Button>
      </div>

      <div className="space-y-3">
        {settings.items.map((item, index) => (
          <div key={index} className="border rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-start">
              <Label className="text-sm font-medium">FAQ {index + 1}</Label>
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
                value={item.question}
                onChange={(e) => updateItem(index, "question", e.target.value)}
                placeholder="Question"
              />
              <Textarea
                value={item.answer}
                onChange={(e) => updateItem(index, "answer", e.target.value)}
                placeholder="Answer"
                rows={3}
              />
            </div>
          </div>
        ))}
        {settings.items.length === 0 && (
          <p className="text-sm text-gray-500">No FAQs added yet.</p>
        )}
      </div>
    </div>
  );
}
// components/admin/landing/editors/TestimonialsEditor.tsx

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";
import type { TestimonialsSettings, Testimonial } from "@/types/section";

interface TestimonialsEditorProps {
  settings: TestimonialsSettings;
  onChange: (settings: TestimonialsSettings) => void;
}

export function TestimonialsEditor({ settings, onChange }: TestimonialsEditorProps) {
  const addItem = () => {
    onChange({
      ...settings,
      items: [...settings.items, { name: "", role: "", message: "" }],
    });
  };

  const removeItem = (index: number) => {
    const newItems = settings.items.filter((_, i) => i !== index);
    onChange({ ...settings, items: newItems });
  };

  const updateItem = (index: number, field: keyof Testimonial, value: string) => {
    const newItems = [...settings.items];
    newItems[index] = { ...newItems[index], [field]: value };
    onChange({ ...settings, items: newItems });
  };

  const handleChange = (field: keyof TestimonialsSettings, value: string) => {
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
          placeholder="Testimonials"
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
          <Label>Testimonials</Label>
          <Button type="button" variant="outline" size="sm" onClick={addItem}>
            <Plus className="h-4 w-4 mr-1" />
            Add Testimonial
          </Button>
        </div>

        <div className="space-y-3">
          {settings.items.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-start">
                <Label className="text-sm font-medium">Testimonial {index + 1}</Label>
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
                  value={item.name}
                  onChange={(e) => updateItem(index, "name", e.target.value)}
                  placeholder="Full name"
                />
                <Input
                  value={item.role}
                  onChange={(e) => updateItem(index, "role", e.target.value)}
                  placeholder="Role (e.g. CEO, Founder)"
                />
                <Textarea
                  value={item.message}
                  onChange={(e) => updateItem(index, "message", e.target.value)}
                  placeholder="Testimonial message"
                  rows={3}
                />
              </div>
            </div>
          ))}
          {settings.items.length === 0 && (
            <p className="text-sm text-gray-500">No testimonials added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
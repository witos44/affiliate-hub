// components/admin/landing/editors/CTAEditor.tsx

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { CTASettings } from "@/types/section";

interface CTAEditorProps {
  settings: CTASettings;
  onChange: (settings: CTASettings) => void;
}

export function CTAEditor({ settings, onChange }: CTAEditorProps) {
  const handleChange = (field: keyof CTASettings, value: string) => {
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
          placeholder="Call to Action"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subtitle">Subtitle</Label>
        <Textarea
          id="subtitle"
          value={settings.subtitle}
          onChange={(e) => handleChange("subtitle", e.target.value)}
          placeholder="Supporting text"
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="buttonText">Button Text</Label>
          <Input
            id="buttonText"
            value={settings.buttonText}
            onChange={(e) => handleChange("buttonText", e.target.value)}
            placeholder="Get Started"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="buttonUrl">Button URL</Label>
          <Input
            id="buttonUrl"
            value={settings.buttonUrl}
            onChange={(e) => handleChange("buttonUrl", e.target.value)}
            placeholder="/out/offer-slug"
          />
        </div>
      </div>
    </div>
  );
}
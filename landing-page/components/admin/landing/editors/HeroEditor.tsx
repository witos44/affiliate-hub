// components/admin/landing/editors/HeroEditor.tsx

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { HeroSettings } from "@/types/section";

interface HeroEditorProps {
  settings: HeroSettings;
  onChange: (settings: HeroSettings) => void;
}

export function HeroEditor({ settings, onChange }: HeroEditorProps) {
  const handleChange = (field: keyof HeroSettings, value: string) => {
    onChange({ ...settings, [field]: value });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="badge">Badge</Label>
        <Input
          id="badge"
          value={settings.badge}
          onChange={(e) => handleChange("badge", e.target.value)}
          placeholder="e.g. AI Advertising"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={settings.title}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="Main headline"
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
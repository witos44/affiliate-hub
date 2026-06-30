// components/admin/landing/editors/SolutionEditor.tsx

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { SolutionSettings } from "@/types/section";

interface SolutionEditorProps {
  settings: SolutionSettings;
  onChange: (settings: SolutionSettings) => void;
}

export function SolutionEditor({ settings, onChange }: SolutionEditorProps) {
  const handleChange = (field: keyof SolutionSettings, value: string) => {
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
          placeholder="The Solution"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={settings.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Describe the solution"
          rows={5}
        />
      </div>
    </div>
  );
}
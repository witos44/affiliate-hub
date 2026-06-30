// components/admin/landing/editors/ProblemEditor.tsx

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ProblemSettings } from "@/types/section";

interface ProblemEditorProps {
  settings: ProblemSettings;
  onChange: (settings: ProblemSettings) => void;
}

export function ProblemEditor({ settings, onChange }: ProblemEditorProps) {
  const handleChange = (field: keyof ProblemSettings, value: string) => {
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
          placeholder="What's the problem?"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={settings.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Describe the problem in detail"
          rows={5}
        />
      </div>
    </div>
  );
}
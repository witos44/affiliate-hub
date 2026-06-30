// components/admin/landing/editors/VideoEditor.tsx

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { VideoSettings } from "@/types/section";

interface VideoEditorProps {
  settings: VideoSettings;
  onChange: (settings: VideoSettings) => void;
}

export function VideoEditor({ settings, onChange }: VideoEditorProps) {
  const handleChange = (field: keyof VideoSettings, value: string) => {
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
          placeholder="Video Section Title"
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

      <div className="space-y-2">
        <Label htmlFor="url">Video URL</Label>
        <Input
          id="url"
          value={settings.url}
          onChange={(e) => handleChange("url", e.target.value)}
          placeholder="https://www.youtube.com/embed/VIDEO_ID"
        />
        <p className="text-xs text-gray-500">
          Use embed URL from YouTube or Vimeo.
        </p>
      </div>
    </div>
  );
}
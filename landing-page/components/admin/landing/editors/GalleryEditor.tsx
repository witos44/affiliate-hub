// components/admin/landing/editors/GalleryEditor.tsx

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";
import type { GallerySettings, GalleryImage } from "@/types/section";

interface GalleryEditorProps {
  settings: GallerySettings;
  onChange: (settings: GallerySettings) => void;
}

export function GalleryEditor({ settings, onChange }: GalleryEditorProps) {
  const addImage = () => {
    onChange({
      ...settings,
      images: [...settings.images, { image: "", title: "" }],
    });
  };

  const removeImage = (index: number) => {
    const newImages = settings.images.filter((_, i) => i !== index);
    onChange({ ...settings, images: newImages });
  };

  const updateImage = (index: number, field: keyof GalleryImage, value: string) => {
    const newImages = [...settings.images];
    newImages[index] = { ...newImages[index], [field]: value };
    onChange({ ...settings, images: newImages });
  };

  const handleChange = (field: keyof GallerySettings, value: string) => {
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
          placeholder="Gallery Title"
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
          <Label>Images</Label>
          <Button type="button" variant="outline" size="sm" onClick={addImage}>
            <Plus className="h-4 w-4 mr-1" />
            Add Image
          </Button>
        </div>

        <div className="space-y-3">
          {settings.images.map((image, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-start">
                <Label className="text-sm font-medium">Image {index + 1}</Label>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeImage(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <Input
                  value={image.image}
                  onChange={(e) => updateImage(index, "image", e.target.value)}
                  placeholder="Image URL (e.g. /images/photo.jpg)"
                />
                <Input
                  value={image.title}
                  onChange={(e) => updateImage(index, "title", e.target.value)}
                  placeholder="Image title"
                />
              </div>
            </div>
          ))}
          {settings.images.length === 0 && (
            <p className="text-sm text-gray-500">No images added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
// components/admin/landing/LandingSEO.tsx

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface LandingSEOProps {
  metaTitle: string;
  setMetaTitle: (value: string) => void;
  metaDescription: string;
  setMetaDescription: (value: string) => void;
  ogImage: string;
  setOgImage: (value: string) => void;
}

export function LandingSEO({
  metaTitle,
  setMetaTitle,
  metaDescription,
  setMetaDescription,
  ogImage,
  setOgImage,
}: LandingSEOProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="metaTitle">Meta Title</Label>
        <Input
          id="metaTitle"
          value={metaTitle}
          onChange={(e) => setMetaTitle(e.target.value)}
          placeholder="Enter meta title (max 60 characters)"
          maxLength={60}
        />
        <p className="text-xs text-gray-500">
          {metaTitle.length}/60 characters recommended.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="metaDescription">Meta Description</Label>
        <Textarea
          id="metaDescription"
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
          placeholder="Enter meta description (max 160 characters)"
          maxLength={160}
          rows={3}
        />
        <p className="text-xs text-gray-500">
          {metaDescription.length}/160 characters recommended.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="ogImage">Open Graph Image URL</Label>
        <Input
          id="ogImage"
          value={ogImage}
          onChange={(e) => setOgImage(e.target.value)}
          placeholder="https://example.com/image.jpg"
        />
        <p className="text-xs text-gray-500">
          This image will appear when shared on social media.
        </p>
      </div>
    </div>
  );
}
// components/admin/landing/LandingGeneral.tsx

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SlugField } from "./SlugField";

interface LandingGeneralProps {
  title: string;
  setTitle: (value: string) => void;
  slug: string;
  setSlug: (value: string) => void;
  template: string;
  setTemplate: (value: string) => void;
}

export function LandingGeneral({
  title,
  setTitle,
  slug,
  setSlug,
  template,
  setTemplate,
}: LandingGeneralProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter landing page title"
            required
          />
          <p className="text-xs text-gray-500">
            This will be displayed as the main heading.
          </p>
        </div>

        <div className="space-y-2">
          <SlugField
            value={slug}
            onChange={setSlug}
            label="Slug"
            placeholder="enter-slug-here"
            helpText="This will be used in the URL"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="template">Template</Label>
        <Select value={template} onValueChange={setTemplate}>
          <SelectTrigger className="w-full max-w-md">
            <SelectValue placeholder="Select template" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="minimal">Minimal</SelectItem>
            <SelectItem value="full">Full</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-gray-500">
          Choose a template layout for your landing page.
        </p>
      </div>
    </div>
  );
}
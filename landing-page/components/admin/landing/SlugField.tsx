// components/admin/landing/SlugField.tsx

"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RefreshCw, Check, X } from "lucide-react";

interface SlugFieldProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  helpText?: string;
  autoGenerate?: boolean;
}

export function SlugField({
  value,
  onChange,
  label = "Slug",
  placeholder = "enter-slug-here",
  helpText = "This will be used in the URL",
  autoGenerate = false,
}: SlugFieldProps) {
  const [isValid, setIsValid] = useState(true);
  const [isChecking, setIsChecking] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    onChange(newValue);
    validateSlug(newValue);
  };

  const validateSlug = async (slug: string) => {
    if (!slug) {
      setIsValid(true);
      return;
    }

    setIsChecking(true);
    // TODO: Implement slug availability check (Batch 7)
    // const available = await checkSlugAvailability(slug);
    const available = true; // Placeholder
    setIsValid(available);
    setIsChecking(false);
  };

  const generateSlug = () => {
    // TODO: Generate from title (Batch 7)
    const generated = "auto-generated-slug";
    onChange(generated);
    validateSlug(generated);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="slug">{label}</Label>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Input
            id="slug"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className={!isValid ? "border-red-500 pr-10" : "pr-10"}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {isChecking ? (
              <RefreshCw className="h-4 w-4 animate-spin text-gray-400" />
            ) : value && isValid ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : value && !isValid ? (
              <X className="h-4 w-4 text-red-500" />
            ) : null}
          </div>
        </div>
        {autoGenerate && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={generateSlug}
            className="shrink-0"
          >
            <RefreshCw className="mr-1 h-3 w-3" />
            Generate
          </Button>
        )}
      </div>
      {helpText && <p className="text-xs text-gray-500">{helpText}</p>}
      {value && !isValid && (
        <p className="text-xs text-red-500">Slug is already taken or invalid.</p>
      )}
      {value && isValid && (
        <p className="text-xs text-green-600">
          URL: /{value}
        </p>
      )}
    </div>
  );
}
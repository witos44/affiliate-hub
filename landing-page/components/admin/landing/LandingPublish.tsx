// components/admin/landing/LandingPublish.tsx

"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface LandingPublishProps {
  status: "draft" | "published";
  setStatus: (value: "draft" | "published") => void;
}

export function LandingPublish({ status, setStatus }: LandingPublishProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label>Publication Status</Label>
        <RadioGroup
          value={status}
          onValueChange={(val) => setStatus(val as "draft" | "published")}
          className="space-y-3"
        >
          <div className="flex items-start gap-3 rounded-lg border p-4 hover:bg-gray-50 transition-colors">
            <RadioGroupItem value="draft" id="draft" className="mt-0.5" />
            <div>
              <Label htmlFor="draft" className="font-medium cursor-pointer">
                Draft
              </Label>
              <p className="text-sm text-gray-500">
                The page will not be visible to the public.
                <br />
                <span className="flex items-center gap-1 text-amber-600">
                  <AlertCircle className="h-3 w-3" />
                  Only you can see this.
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border p-4 hover:bg-gray-50 transition-colors">
            <RadioGroupItem value="published" id="published" className="mt-0.5" />
            <div>
              <Label htmlFor="published" className="font-medium cursor-pointer">
                Published
              </Label>
              <p className="text-sm text-gray-500">
                The page will be live and accessible to everyone.
                <br />
                <span className="flex items-center gap-1 text-green-600">
                  <CheckCircle2 className="h-3 w-3" />
                  Publicly visible.
                </span>
              </p>
            </div>
          </div>
        </RadioGroup>
      </div>

      {status === "published" && (
        <div className="rounded-lg bg-green-50 p-4 text-sm text-green-700 border border-green-200">
          <p className="flex items-center gap-2 font-medium">
            <CheckCircle2 className="h-4 w-4" />
            This landing page will be published immediately.
          </p>
        </div>
      )}

      {status === "draft" && (
        <div className="rounded-lg bg-amber-50 p-4 text-sm text-amber-700 border border-amber-200">
          <p className="flex items-center gap-2 font-medium">
            <AlertCircle className="h-4 w-4" />
            This landing page will remain in draft mode.
          </p>
        </div>
      )}
    </div>
  );
}
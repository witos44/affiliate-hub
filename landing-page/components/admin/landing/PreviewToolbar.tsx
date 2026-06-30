// components/admin/landing/PreviewToolbar.tsx

"use client";

import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { RefreshCw, Monitor, Tablet, Smartphone } from "lucide-react";

export type PreviewDevice = "desktop" | "tablet" | "mobile";

interface PreviewToolbarProps {
  device: PreviewDevice;
  onDeviceChange: (device: PreviewDevice) => void;
  onRefresh: () => void;
  isRefreshing?: boolean;
}

export function PreviewToolbar({
  device,
  onDeviceChange,
  onRefresh,
  isRefreshing = false,
}: PreviewToolbarProps) {
  return (
    <div className="flex items-center justify-between gap-4 p-3 bg-white border-b rounded-t-lg">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700">Preview</span>
      </div>

      <div className="flex items-center gap-2">
        <ToggleGroup
          type="single"
          value={device}
          onValueChange={(value) => {
            if (value) onDeviceChange(value as PreviewDevice);
          }}
          className="border rounded-md p-1"
        >
          <ToggleGroupItem value="desktop" aria-label="Desktop" className="px-3 py-1.5">
            <Monitor className="h-4 w-4" />
            <span className="sr-only">Desktop</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="tablet" aria-label="Tablet" className="px-3 py-1.5">
            <Tablet className="h-4 w-4" />
            <span className="sr-only">Tablet</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="mobile" aria-label="Mobile" className="px-3 py-1.5">
            <Smartphone className="h-4 w-4" />
            <span className="sr-only">Mobile</span>
          </ToggleGroupItem>
        </ToggleGroup>

        <Button
          variant="outline"
          size="sm"
          onClick={onRefresh}
          disabled={isRefreshing}
          className="ml-2"
        >
          <RefreshCw className={`h-4 w-4 mr-1 ${isRefreshing ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>
    </div>
  );
}
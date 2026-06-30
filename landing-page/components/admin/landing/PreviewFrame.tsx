// components/admin/landing/PreviewFrame.tsx

"use client";

import { ReactNode } from "react";
import { PreviewDevice } from "./PreviewToolbar";

interface PreviewFrameProps {
  device: PreviewDevice;
  children: ReactNode;
  className?: string;
}

const DEVICE_WIDTHS: Record<PreviewDevice, string> = {
  desktop: "w-full max-w-7xl",
  tablet: "w-full max-w-3xl",
  mobile: "w-full max-w-sm",
};

const DEVICE_HEIGHTS: Record<PreviewDevice, string> = {
  desktop: "min-h-screen",
  tablet: "min-h-[800px]",
  mobile: "min-h-[700px]",
};

export function PreviewFrame({ device, children, className = "" }: PreviewFrameProps) {
  const widthClass = DEVICE_WIDTHS[device];
  const heightClass = DEVICE_HEIGHTS[device];

  return (
    <div className="flex justify-center items-start w-full p-4 bg-gray-100 rounded-b-lg">
      <div
        className={`
          ${widthClass}
          ${heightClass}
          bg-white rounded-lg shadow-lg overflow-y-auto transition-all duration-300
          ${className}
        `}
        style={{
          // Tambahkan aspect ratio untuk mobile/tablet jika diperlukan
          ...(device === "mobile" && { maxHeight: "90vh" }),
          ...(device === "tablet" && { maxHeight: "90vh" }),
        }}
      >
        <div className="relative w-full h-full">
          {/* Konten preview akan di-render di sini */}
          {children}
        </div>
      </div>
    </div>
  );
}
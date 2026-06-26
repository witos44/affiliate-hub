// File: components/public/HeroSection.tsx
import { ReactNode } from "react";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  children?: ReactNode; // Untuk meletakkan tombol CTA
}

export function HeroSection({ headline, subheadline, children }: HeroSectionProps) {
  return (
    <div className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          {headline}
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          {subheadline}
        </p>
        {children && (
          <div className="flex justify-center mt-8">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
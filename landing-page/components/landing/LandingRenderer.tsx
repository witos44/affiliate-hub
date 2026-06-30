// components/landing/LandingRenderer.tsx
import { SectionRegistry } from "@/lib/section-registry";
import type { LandingSection } from "@/types/section";

interface LandingRendererProps {
  sections: LandingSection[];
}

export default function LandingRenderer({ sections }: LandingRendererProps) {
  const sortedSections = [...sections]
    .filter((section) => section.isActive)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <>
      {sortedSections.map((section) => {
        const Component = SectionRegistry[section.type as keyof typeof SectionRegistry];

        if (!Component) {
          console.warn(`Unknown section type: ${section.type}`);
          return null;
        }

        return (
          <div key={section.id}>
            <Component settings={section.settings as never} />
          </div>
        );
      })}
    </>
  );
}
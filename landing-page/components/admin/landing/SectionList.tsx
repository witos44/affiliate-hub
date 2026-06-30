// components/admin/landing/SectionList.tsx

"use client";

import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import type { LandingSection } from "@/types/section";
import { SectionCard } from "./SectionCard";
import { SectionEmpty } from "./SectionEmpty";

interface SectionListProps {
  sections: LandingSection[];
  setSections: (sections: LandingSection[]) => void;
  onEditSection: (section: LandingSection) => void;
  onDeleteSection: (id: number) => void;
  onToggleActive: (id: number) => void;
}

export function SectionList({
  sections,
  setSections,
  onEditSection,
  onDeleteSection,
  onToggleActive,
}: SectionListProps) {
  const [activeId, setActiveId] = useState<number | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = sections.findIndex((s) => s.id === active.id);
      const newIndex = sections.findIndex((s) => s.id === over.id);
      const newSections = arrayMove(sections, oldIndex, newIndex);
      // Update sortOrder
      const updatedSections = newSections.map((section, index) => ({
        ...section,
        sortOrder: index + 1,
      }));
      setSections(updatedSections);
    }
    setActiveId(null);
  };

  if (sections.length === 0) {
    return <SectionEmpty />;
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="space-y-3">
        <SortableContext
          items={sections.map((s) => s.id)}
          strategy={verticalListSortingStrategy}
        >
          {sections.map((section) => (
            <SectionCard
              key={section.id}
              section={section}
              onEdit={() => onEditSection(section)}
              onDelete={() => onDeleteSection(section.id)}
              onToggleActive={() => onToggleActive(section.id)}
            />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
}
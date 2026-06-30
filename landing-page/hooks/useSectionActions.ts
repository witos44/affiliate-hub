// hooks/useSectionActions.ts

"use client";

import { useState, useCallback } from "react";
import type { LandingSection, SectionType, SectionSettings } from "@/types/section";

export interface UseSectionActionsReturn {
  // State
  selectedSection: LandingSection | null;
  isEditorOpen: boolean;
  isDeleting: boolean;

  // Actions
  openEditor: (section: LandingSection) => void;
  closeEditor: () => void;
  saveSection: (section: LandingSection) => void;
  deleteSection: (id: number) => void;
  toggleActive: (id: number) => void;
  duplicateSection: (id: number) => void;
  moveUp: (id: number) => void;
  moveDown: (id: number) => void;

  // Section management
  addSection: (type: SectionType) => void;
}

export interface UseSectionActionsOptions {
  sections: LandingSection[];
  setSections: (sections: LandingSection[]) => void;
  onSectionChange?: (sections: LandingSection[]) => void;
}

// ============================================================
// Default settings untuk setiap tipe section
// ============================================================
const DEFAULT_SETTINGS_BY_TYPE: Record<SectionType, SectionSettings> = {
  hero: {
    badge: "New Section",
    title: "Hero Title",
    subtitle: "Hero subtitle goes here",
    buttonText: "Get Started",
    buttonUrl: "#",
  },
  benefits: {
    items: ["Benefit 1", "Benefit 2", "Benefit 3", "Benefit 4"],
  },
  problem: {
    title: "What's the Problem?",
    description: "Describe the problem here.",
  },
  solution: {
    title: "The Solution",
    description: "Describe the solution here.",
  },
  features: {
    items: [
      { title: "Feature 1", description: "Description of feature 1" },
      { title: "Feature 2", description: "Description of feature 2" },
      { title: "Feature 3", description: "Description of feature 3" },
    ],
  },
  faq: {
    items: [
      { question: "Question 1?", answer: "Answer 1." },
      { question: "Question 2?", answer: "Answer 2." },
    ],
  },
  cta: {
    title: "Call to Action",
    subtitle: "This is a call to action section",
    buttonText: "Get Started",
    buttonUrl: "#",
  },
  comparison: {
    title: "Comparison",
    subtitle: "Compare us with others",
    items: [
      { feature: "Feature 1", us: "Yes", others: "No" },
      { feature: "Feature 2", us: "Yes", others: "Yes" },
    ],
  },
  gallery: {
    title: "Gallery",
    subtitle: "Image gallery",
    images: [
      { image: "/placeholder.jpg", title: "Image 1" },
      { image: "/placeholder.jpg", title: "Image 2" },
    ],
  },
  pricing: {
    title: "Pricing",
    subtitle: "Choose your plan",
    plans: [
      {
        name: "Basic",
        price: "$9",
        description: "Basic plan",
        button: "Get Started",
        url: "#",
      },
    ],
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "What people say",
    items: [
      {
        name: "John Doe",
        role: "CEO",
        message: "Great product!",
      },
    ],
  },
  video: {
    title: "Video",
    subtitle: "Watch this video",
    url: "https://www.youtube.com/embed/VIDEO_ID",
  },
};

// ============================================================
// Helper: Get default settings for a section type
// ============================================================
function getDefaultSettings(type: SectionType): SectionSettings {
  return DEFAULT_SETTINGS_BY_TYPE[type] || DEFAULT_SETTINGS_BY_TYPE["hero"];
}

// ============================================================
// Hook Implementation
// ============================================================
export function useSectionActions({
  sections,
  setSections,
  onSectionChange,
}: UseSectionActionsOptions): UseSectionActionsReturn {
  const [selectedSection, setSelectedSection] = useState<LandingSection | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Add section
  const addSection = useCallback(
    (type: SectionType) => {
      const maxId = sections.reduce((max, s) => Math.max(max, s.id), 0);
      const newSection: LandingSection = {
        id: maxId + 1,
        landingPageId: sections[0]?.landingPageId || 0,
        type,
        sortOrder: sections.length + 1,
        isActive: true,
        settings: getDefaultSettings(type),
      };
      const newSections = [...sections, newSection];
      setSections(newSections);
      onSectionChange?.(newSections);
    },
    [sections, setSections, onSectionChange]
  );

  // Open editor
  const openEditor = useCallback((section: LandingSection) => {
    setSelectedSection(section);
    setIsEditorOpen(true);
  }, []);

  // Close editor
  const closeEditor = useCallback(() => {
    setIsEditorOpen(false);
    // Tunggu animasi selesai, lalu clear selected section
    setTimeout(() => setSelectedSection(null), 300);
  }, []);

  // Save section
  const saveSection = useCallback(
    (updatedSection: LandingSection) => {
      const newSections = sections.map((s) =>
        s.id === updatedSection.id ? updatedSection : s
      );
      setSections(newSections);
      onSectionChange?.(newSections);
      closeEditor();
    },
    [sections, setSections, onSectionChange, closeEditor]
  );

  // Delete section
  const deleteSection = useCallback(
    (id: number) => {
      if (sections.length <= 1) {
        console.warn("Cannot delete the last section.");
        return;
      }
      setIsDeleting(true);

      // Filter out the deleted section
      const filtered = sections.filter((s) => s.id !== id);
      // Reorder remaining sections
      const reordered = filtered.map((s, index) => ({
        ...s,
        sortOrder: index + 1,
      }));

      setSections(reordered);
      onSectionChange?.(reordered);
      setIsDeleting(false);

      // If the deleted section was selected, close editor
      if (selectedSection?.id === id) {
        closeEditor();
      }
    },
    [sections, setSections, onSectionChange, selectedSection, closeEditor]
  );

  // Toggle active status
  const toggleActive = useCallback(
    (id: number) => {
      const newSections = sections.map((s) =>
        s.id === id ? { ...s, isActive: !s.isActive } : s
      );
      setSections(newSections);
      onSectionChange?.(newSections);
    },
    [sections, setSections, onSectionChange]
  );

  // Duplicate section
  const duplicateSection = useCallback(
    (id: number) => {
      const sectionToDuplicate = sections.find((s) => s.id === id);
      if (!sectionToDuplicate) return;

      const maxId = sections.reduce((max, s) => Math.max(max, s.id), 0);
      const duplicated: LandingSection = {
        ...sectionToDuplicate,
        id: maxId + 1,
        sortOrder: sections.length + 1,
        isActive: true,
        // Deep copy settings untuk menghindari referensi yang sama
        settings: JSON.parse(JSON.stringify(sectionToDuplicate.settings)),
      };

      const newSections = [...sections, duplicated];
      setSections(newSections);
      onSectionChange?.(newSections);
    },
    [sections, setSections, onSectionChange]
  );

  // Move section up
  const moveUp = useCallback(
    (id: number) => {
      const index = sections.findIndex((s) => s.id === id);
      if (index <= 0) return;

      const newSections = [...sections];
      const temp = newSections[index];
      newSections[index] = newSections[index - 1];
      newSections[index - 1] = temp;

      // Update sortOrder
      const reordered = newSections.map((s, i) => ({
        ...s,
        sortOrder: i + 1,
      }));

      setSections(reordered);
      onSectionChange?.(reordered);
    },
    [sections, setSections, onSectionChange]
  );

  // Move section down
  const moveDown = useCallback(
    (id: number) => {
      const index = sections.findIndex((s) => s.id === id);
      if (index === -1 || index >= sections.length - 1) return;

      const newSections = [...sections];
      const temp = newSections[index];
      newSections[index] = newSections[index + 1];
      newSections[index + 1] = temp;

      // Update sortOrder
      const reordered = newSections.map((s, i) => ({
        ...s,
        sortOrder: i + 1,
      }));

      setSections(reordered);
      onSectionChange?.(reordered);
    },
    [sections, setSections, onSectionChange]
  );

  return {
    selectedSection,
    isEditorOpen,
    isDeleting,
    openEditor,
    closeEditor,
    saveSection,
    deleteSection,
    toggleActive,
    duplicateSection,
    moveUp,
    moveDown,
    addSection,
  };
}
// hooks/useLandingEditor.ts

"use client";

import { useState, useCallback } from "react";
import type { LandingSection, SectionType, SectionSettings } from "@/types/section";
import type { LandingPage } from "@/types/landing";

export interface UseLandingEditorOptions {
  initialData?: LandingPage;
  onSave?: (data: LandingPage) => void;
}

export interface UseLandingEditorReturn {
  // Landing data
  title: string;
  setTitle: (value: string) => void;
  slug: string;
  setSlug: (value: string) => void;
  template: string;
  setTemplate: (value: string) => void;
  status: "draft" | "published";
  setStatus: (value: "draft" | "published") => void;
  sections: LandingSection[];
  setSections: (sections: LandingSection[]) => void;

  // SEO data
  metaTitle: string;
  setMetaTitle: (value: string) => void;
  metaDescription: string;
  setMetaDescription: (value: string) => void;
  ogImage: string;
  setOgImage: (value: string) => void;

  // Section management
  addSection: (type: SectionType) => void;
  updateSection: (section: LandingSection) => void;
  deleteSection: (id: number) => void;
  toggleSectionActive: (id: number) => void;
  reorderSections: (sections: LandingSection[]) => void;

  // Save
  save: () => Promise<void>;
  isDirty: boolean;
  reset: () => void;

  // Utils
  getSectionById: (id: number) => LandingSection | undefined;
}

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

export function useLandingEditor({
  initialData,
  onSave,
}: UseLandingEditorOptions = {}): UseLandingEditorReturn {
  // General data
  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [template, setTemplate] = useState(initialData?.template || "default");
  const [status, setStatus] = useState<"draft" | "published">(
    initialData?.status || "draft"
  );
  const [sections, setSections] = useState<LandingSection[]>(
    initialData?.sections || []
  );

  // SEO data
  const [metaTitle, setMetaTitle] = useState(initialData?.metaTitle || "");
  const [metaDescription, setMetaDescription] = useState(
    initialData?.metaDescription || ""
  );
  const [ogImage, setOgImage] = useState(initialData?.ogImage || "");

  // Track dirty state
  const [isDirty, setIsDirty] = useState(false);
  const [initialState] = useState(() => ({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    template: initialData?.template || "default",
    status: initialData?.status || "draft",
    sections: JSON.stringify(initialData?.sections || []),
    metaTitle: initialData?.metaTitle || "",
    metaDescription: initialData?.metaDescription || "",
    ogImage: initialData?.ogImage || "",
  }));

  // Reset
  const reset = useCallback(() => {
    setTitle(initialState.title);
    setSlug(initialState.slug);
    setTemplate(initialState.template);
    setStatus(initialState.status as "draft" | "published");
    setSections(JSON.parse(initialState.sections));
    setMetaTitle(initialState.metaTitle);
    setMetaDescription(initialState.metaDescription);
    setOgImage(initialState.ogImage);
    setIsDirty(false);
  }, [initialState]);

  // Generate new section
  const generateSection = useCallback(
    (type: SectionType, index: number): LandingSection => {
      const maxId = sections.reduce((max, s) => Math.max(max, s.id), 0);
      return {
        id: maxId + 1,
        landingPageId: initialData?.id || 0,
        type,
        sortOrder: index,
        isActive: true,
        settings: DEFAULT_SETTINGS_BY_TYPE[type] || {},
      };
    },
    [sections, initialData?.id]
  );

  // Add section
  const addSection = useCallback(
    (type: SectionType) => {
      const newSection = generateSection(type, sections.length + 1);
      setSections((prev) => [...prev, newSection]);
      setIsDirty(true);
    },
    [generateSection, sections.length]
  );

  // Update section
  const updateSection = useCallback((updatedSection: LandingSection) => {
    setSections((prev) =>
      prev.map((s) => (s.id === updatedSection.id ? updatedSection : s))
    );
    setIsDirty(true);
  }, []);

  // Delete section
  const deleteSection = useCallback(
    (id: number) => {
      if (sections.length <= 1) {
        console.warn("Cannot delete the last section.");
        return;
      }
      setSections((prev) => {
        const filtered = prev.filter((s) => s.id !== id);
        // Reorder
        return filtered.map((s, index) => ({
          ...s,
          sortOrder: index + 1,
        }));
      });
      setIsDirty(true);
    },
    [sections.length]
  );

  // Toggle section active
  const toggleSectionActive = useCallback((id: number) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, isActive: !s.isActive } : s
      )
    );
    setIsDirty(true);
  }, []);

  // Reorder sections
  const reorderSections = useCallback((newSections: LandingSection[]) => {
    setSections(newSections);
    setIsDirty(true);
  }, []);

  // Get section by ID
  const getSectionById = useCallback(
    (id: number) => {
      return sections.find((s) => s.id === id);
    },
    [sections]
  );

  // Save
  const save = useCallback(async () => {
    const data: LandingPage = {
      id: initialData?.id || 0,
      slug,
      title,
      template,
      status,
      offer: initialData?.offer || {
        id: 0,
        merchantName: "",
        offerName: "",
        offerSlug: "",
        affiliateUrl: "",
        description: "",
        category: "",
        status: "draft",
      },
      sections,
      metaTitle,
      metaDescription,
      ogImage,
    };

    try {
      // TODO: Panggil API (Batch 7)
      console.log("Saving landing page:", data);
      // await saveLanding(data);

      setIsDirty(false);
      onSave?.(data);
    } catch (error) {
      console.error("Failed to save landing page:", error);
      throw error;
    }
  }, [
    initialData,
    slug,
    title,
    template,
    status,
    sections,
    metaTitle,
    metaDescription,
    ogImage,
    onSave,
  ]);

  return {
    title,
    setTitle,
    slug,
    setSlug,
    template,
    setTemplate,
    status,
    setStatus,
    sections,
    setSections,
    metaTitle,
    setMetaTitle,
    metaDescription,
    setMetaDescription,
    ogImage,
    setOgImage,
    addSection,
    updateSection,
    deleteSection,
    toggleSectionActive,
    reorderSections,
    save,
    isDirty,
    reset,
    getSectionById,
  };
}
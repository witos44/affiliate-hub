// lib/validators.ts

import type {
  LandingSection,
  SectionType,
  HeroSettings,
  BenefitsSettings,
  ProblemSettings,
  SolutionSettings,
  FeaturesSettings,
  FAQSettings,
  CTASettings,
  ComparisonSettings,
  GallerySettings,
  PricingSettings,
  TestimonialsSettings,
  VideoSettings,
} from "@/types/section";
import type { LandingPage } from "@/types/landing";
import type { LandingValidationResult, SectionValidationResult } from "@/types/admin";

// ============================================================
// Validasi Section Settings berdasarkan tipe
// ============================================================
export function validateSectionSettings(
  type: SectionType,
  settings: any
): SectionValidationResult {
  const errors: { field: string; message: string }[] = [];

  switch (type) {
    case "hero": {
      const hero = settings as HeroSettings;
      if (!hero.badge || hero.badge.trim() === "") {
        errors.push({ field: "badge", message: "Badge is required" });
      }
      if (!hero.title || hero.title.trim() === "") {
        errors.push({ field: "title", message: "Title is required" });
      }
      if (!hero.subtitle || hero.subtitle.trim() === "") {
        errors.push({ field: "subtitle", message: "Subtitle is required" });
      }
      if (!hero.buttonText || hero.buttonText.trim() === "") {
        errors.push({ field: "buttonText", message: "Button text is required" });
      }
      if (!hero.buttonUrl || hero.buttonUrl.trim() === "") {
        errors.push({ field: "buttonUrl", message: "Button URL is required" });
      }
      break;
    }

    case "benefits": {
      const benefits = settings as BenefitsSettings;
      if (!benefits.items || benefits.items.length === 0) {
        errors.push({ field: "items", message: "At least one benefit is required" });
      } else {
        benefits.items.forEach((item: string, index: number) => {
          if (!item || item.trim() === "") {
            errors.push({
              field: `items[${index}]`,
              message: `Benefit ${index + 1} cannot be empty`,
            });
          }
        });
      }
      break;
    }

    case "problem": {
      const problem = settings as ProblemSettings;
      if (!problem.title || problem.title.trim() === "") {
        errors.push({ field: "title", message: "Problem title is required" });
      }
      if (!problem.description || problem.description.trim() === "") {
        errors.push({ field: "description", message: "Problem description is required" });
      }
      break;
    }

    case "solution": {
      const solution = settings as SolutionSettings;
      if (!solution.title || solution.title.trim() === "") {
        errors.push({ field: "title", message: "Solution title is required" });
      }
      if (!solution.description || solution.description.trim() === "") {
        errors.push({ field: "description", message: "Solution description is required" });
      }
      break;
    }

    case "features": {
      const features = settings as FeaturesSettings;
      if (!features.items || features.items.length === 0) {
        errors.push({ field: "items", message: "At least one feature is required" });
      } else {
        features.items.forEach((item: { title: string; description: string }, index: number) => {
          if (!item.title || item.title.trim() === "") {
            errors.push({
              field: `items[${index}].title`,
              message: `Feature ${index + 1} title is required`,
            });
          }
          if (!item.description || item.description.trim() === "") {
            errors.push({
              field: `items[${index}].description`,
              message: `Feature ${index + 1} description is required`,
            });
          }
        });
      }
      break;
    }

    case "faq": {
      const faq = settings as FAQSettings;
      if (!faq.items || faq.items.length === 0) {
        errors.push({ field: "items", message: "At least one FAQ is required" });
      } else {
        faq.items.forEach((item: { question: string; answer: string }, index: number) => {
          if (!item.question || item.question.trim() === "") {
            errors.push({
              field: `items[${index}].question`,
              message: `FAQ ${index + 1} question is required`,
            });
          }
          if (!item.answer || item.answer.trim() === "") {
            errors.push({
              field: `items[${index}].answer`,
              message: `FAQ ${index + 1} answer is required`,
            });
          }
        });
      }
      break;
    }

    case "cta": {
      const cta = settings as CTASettings;
      if (!cta.title || cta.title.trim() === "") {
        errors.push({ field: "title", message: "CTA title is required" });
      }
      if (!cta.subtitle || cta.subtitle.trim() === "") {
        errors.push({ field: "subtitle", message: "CTA subtitle is required" });
      }
      if (!cta.buttonText || cta.buttonText.trim() === "") {
        errors.push({ field: "buttonText", message: "Button text is required" });
      }
      if (!cta.buttonUrl || cta.buttonUrl.trim() === "") {
        errors.push({ field: "buttonUrl", message: "Button URL is required" });
      }
      break;
    }

    case "comparison": {
      const comparison = settings as ComparisonSettings;
      if (!comparison.title || comparison.title.trim() === "") {
        errors.push({ field: "title", message: "Comparison title is required" });
      }
      if (!comparison.items || comparison.items.length === 0) {
        errors.push({ field: "items", message: "At least one comparison row is required" });
      } else {
        comparison.items.forEach((item: { feature: string; us: string; others: string }, index: number) => {
          if (!item.feature || item.feature.trim() === "") {
            errors.push({
              field: `items[${index}].feature`,
              message: `Row ${index + 1} feature is required`,
            });
          }
          if (!item.us || item.us.trim() === "") {
            errors.push({
              field: `items[${index}].us`,
              message: `Row ${index + 1} 'Our value' is required`,
            });
          }
          if (!item.others || item.others.trim() === "") {
            errors.push({
              field: `items[${index}].others`,
              message: `Row ${index + 1} 'Others value' is required`,
            });
          }
        });
      }
      break;
    }

    case "gallery": {
      const gallery = settings as GallerySettings;
      if (!gallery.title || gallery.title.trim() === "") {
        errors.push({ field: "title", message: "Gallery title is required" });
      }
      if (!gallery.images || gallery.images.length === 0) {
        errors.push({ field: "images", message: "At least one image is required" });
      } else {
        gallery.images.forEach((img: { image: string; title: string }, index: number) => {
          if (!img.image || img.image.trim() === "") {
            errors.push({
              field: `images[${index}].image`,
              message: `Image ${index + 1} URL is required`,
            });
          }
          if (!img.title || img.title.trim() === "") {
            errors.push({
              field: `images[${index}].title`,
              message: `Image ${index + 1} title is required`,
            });
          }
        });
      }
      break;
    }

    case "pricing": {
      const pricing = settings as PricingSettings;
      if (!pricing.title || pricing.title.trim() === "") {
        errors.push({ field: "title", message: "Pricing title is required" });
      }
      if (!pricing.plans || pricing.plans.length === 0) {
        errors.push({ field: "plans", message: "At least one pricing plan is required" });
      } else {
        pricing.plans.forEach((plan: { name: string; price: string }, index: number) => {
          if (!plan.name || plan.name.trim() === "") {
            errors.push({
              field: `plans[${index}].name`,
              message: `Plan ${index + 1} name is required`,
            });
          }
          if (!plan.price || plan.price.trim() === "") {
            errors.push({
              field: `plans[${index}].price`,
              message: `Plan ${index + 1} price is required`,
            });
          }
        });
      }
      break;
    }

    case "testimonials": {
      const testimonials = settings as TestimonialsSettings;
      if (!testimonials.title || testimonials.title.trim() === "") {
        errors.push({ field: "title", message: "Testimonials title is required" });
      }
      if (!testimonials.items || testimonials.items.length === 0) {
        errors.push({ field: "items", message: "At least one testimonial is required" });
      } else {
        testimonials.items.forEach((item: { name: string; message: string }, index: number) => {
          if (!item.name || item.name.trim() === "") {
            errors.push({
              field: `items[${index}].name`,
              message: `Testimonial ${index + 1} name is required`,
            });
          }
          if (!item.message || item.message.trim() === "") {
            errors.push({
              field: `items[${index}].message`,
              message: `Testimonial ${index + 1} message is required`,
            });
          }
        });
      }
      break;
    }

    case "video": {
      const video = settings as VideoSettings;
      if (!video.url || video.url.trim() === "") {
        errors.push({ field: "url", message: "Video URL is required" });
      }
      break;
    }

    default: {
      errors.push({ field: "type", message: `Unknown section type: ${type}` });
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

// ============================================================
// Validasi Landing Page
// ============================================================
export function validateLandingPage(landing: LandingPage): LandingValidationResult {
  const errors: { field: string; message: string }[] = [];
  const warnings: { field: string; message: string }[] = [];

  // === General Fields ===
  if (!landing.title || landing.title.trim() === "") {
    errors.push({ field: "title", message: "Title is required" });
  } else if (landing.title.length < 3) {
    errors.push({ field: "title", message: "Title must be at least 3 characters" });
  }

  if (!landing.slug || landing.slug.trim() === "") {
    errors.push({ field: "slug", message: "Slug is required" });
  } else if (!/^[a-z0-9-]+$/.test(landing.slug)) {
    errors.push({
      field: "slug",
      message: "Slug can only contain lowercase letters, numbers, and hyphens",
    });
  }

  if (!landing.offer || !landing.offer.id) {
    errors.push({ field: "offer", message: "Offer is required" });
  }

  // === Sections ===
  if (!landing.sections || landing.sections.length === 0) {
    errors.push({ field: "sections", message: "At least one section is required" });
  } else {
    // Check for duplicate sort orders
    const sortOrders = landing.sections.map((s: LandingSection) => s.sortOrder);
    const uniqueSortOrders = new Set(sortOrders);
    if (sortOrders.length !== uniqueSortOrders.size) {
      errors.push({
        field: "sections",
        message: "Duplicate sort orders found in sections",
      });
    }

    // Check each section
    landing.sections.forEach((section: LandingSection) => {
      const result = validateSectionSettings(section.type, section.settings);
      if (!result.valid) {
        result.errors.forEach((err) => {
          errors.push({
            field: `sections[${section.id}].${err.field}`,
            message: err.message,
          });
        });
      }
    });

    // Check if at least one active section exists
    const hasActiveSection = landing.sections.some((s: LandingSection) => s.isActive);
    if (!hasActiveSection) {
      warnings.push({
        field: "sections",
        message: "No active sections found. Visitors may see an empty page.",
      });
    }
  }

  // === SEO (Warnings only) ===
  if (!landing.metaTitle || landing.metaTitle.trim() === "") {
    warnings.push({
      field: "metaTitle",
      message: "Meta title is recommended for SEO",
    });
  } else if (landing.metaTitle.length > 60) {
    warnings.push({
      field: "metaTitle",
      message: "Meta title exceeds 60 characters (recommended)",
    });
  }

  if (!landing.metaDescription || landing.metaDescription.trim() === "") {
    warnings.push({
      field: "metaDescription",
      message: "Meta description is recommended for SEO",
    });
  } else if (landing.metaDescription.length > 160) {
    warnings.push({
      field: "metaDescription",
      message: "Meta description exceeds 160 characters (recommended)",
    });
  }

  if (!landing.ogImage || landing.ogImage.trim() === "") {
    warnings.push({
      field: "ogImage",
      message: "Open Graph image is recommended for social sharing",
    });
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

// ============================================================
// Slug Generator
// ============================================================
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, "") // Trim hyphens from start/end
    .replace(/-{2,}/g, "-"); // Replace multiple hyphens with single
}

// ============================================================
// Slug Validator
// ============================================================
export function isValidSlug(slug: string): boolean {
  return /^[a-z0-9-]+$/.test(slug) && slug.length > 0;
}

// ============================================================
// Section Type Helper
// ============================================================
export function getSectionTypeLabel(type: SectionType): string {
  const labels: Record<SectionType, string> = {
    hero: "Hero",
    benefits: "Benefits",
    problem: "Problem",
    solution: "Solution",
    features: "Features",
    faq: "FAQ",
    cta: "CTA",
    comparison: "Comparison",
    gallery: "Gallery",
    pricing: "Pricing",
    testimonials: "Testimonials",
    video: "Video",
  };
  return labels[type] || type;
}

// ============================================================
// Section Type Color
// ============================================================
export function getSectionTypeColor(type: SectionType): string {
  const colors: Record<SectionType, string> = {
    hero: "bg-purple-100 text-purple-800",
    benefits: "bg-green-100 text-green-800",
    problem: "bg-red-100 text-red-800",
    solution: "bg-blue-100 text-blue-800",
    features: "bg-indigo-100 text-indigo-800",
    faq: "bg-orange-100 text-orange-800",
    cta: "bg-pink-100 text-pink-800",
    comparison: "bg-cyan-100 text-cyan-800",
    gallery: "bg-amber-100 text-amber-800",
    pricing: "bg-emerald-100 text-emerald-800",
    testimonials: "bg-teal-100 text-teal-800",
    video: "bg-rose-100 text-rose-800",
  };
  return colors[type] || "bg-gray-100 text-gray-800";
}
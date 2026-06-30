// lib/section-registry.ts
import type { ComponentType } from "react";

import Hero from "@/components/landing/sections/Hero/Hero";
import Benefits from "@/components/landing/sections/Benefits/Benefits";
import Problem from "@/components/landing/sections/Problem/Problem";
import Solution from "@/components/landing/sections/Solution/Solution";
import Features from "@/components/landing/sections/Features/Features";
import FAQ from "@/components/landing/sections/FAQ/FAQ";
import CTA from "@/components/landing/sections/CTA/CTA";
import Comparison from "@/components/landing/sections/Comparison/Comparison";
import Gallery from "@/components/landing/sections/Gallery/Gallery";
import Pricing from "@/components/landing/sections/Pricing/Pricing";
import Testimonials from "@/components/landing/sections/Testimonials/Testimonials";
import Video from "@/components/landing/sections/Video/Video";

import type { SectionSettings } from "@/types/section";

export type SectionComponent = ComponentType<{ settings: SectionSettings }>;

export const SectionRegistry: Record<string, SectionComponent> = {
  hero: Hero as SectionComponent,
  benefits: Benefits as SectionComponent,
  problem: Problem as SectionComponent,
  solution: Solution as SectionComponent,
  features: Features as SectionComponent,
  faq: FAQ as SectionComponent,
  cta: CTA as SectionComponent,
  comparison: Comparison as SectionComponent,
  gallery: Gallery as SectionComponent,
  pricing: Pricing as SectionComponent,
  testimonials: Testimonials as SectionComponent,
  video: Video as SectionComponent,
};

export type SectionType = keyof typeof SectionRegistry;
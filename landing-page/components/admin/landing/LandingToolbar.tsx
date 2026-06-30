// components/admin/landing/LandingToolbar.tsx

"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function LandingToolbar() {
  const router = useRouter();

  return (
    <Button onClick={() => router.push("/admin/landing-pages/new")}>
      <Plus className="mr-2 h-4 w-4" />
      New Landing Page
    </Button>
  );
}
// components/admin/landing/LandingStatusBadge.tsx

import { Badge } from "@/components/ui/badge";

interface LandingStatusBadgeProps {
  status: "draft" | "published";
}

export function LandingStatusBadge({ status }: LandingStatusBadgeProps) {
  const variant = status === "published" ? "default" : "secondary";
  const label = status === "published" ? "Published" : "Draft";

  return <Badge variant={variant}>{label}</Badge>;
}
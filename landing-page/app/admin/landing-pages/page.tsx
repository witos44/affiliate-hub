// app/admin/landing-pages/page.tsx

import { getLandingList } from "@/lib/api";
import { LandingTable } from "@/components/admin/landing/LandingTable";
import { LandingToolbar } from "@/components/admin/landing/LandingToolbar";

export default async function LandingPagesPage() {
  const landings = await getLandingList();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Landing Pages</h1>
        <LandingToolbar />
      </div>
      <LandingTable landings={landings} />
    </div>
  );
}
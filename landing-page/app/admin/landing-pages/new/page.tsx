// app/admin/landing-pages/new/page.tsx

import { LandingForm } from "@/components/admin/landing/LandingForm";

export default function NewLandingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Create New Landing Page</h1>
      <LandingForm />
    </div>
  );
}
// app/admin/landing-pages/edit/[id]/page.tsx

import { notFound } from "next/navigation";
import { getAdminLandingById, getAdminLandingList } from "@/lib/admin-api";
import { LandingForm } from "@/components/admin/landing/LandingForm";

// 🔥 Generate semua ID yang tersedia untuk pre-render
export async function generateStaticParams() {
  const response = await getAdminLandingList();
  if (!response.success) return [];
  return response.data.map((item) => ({
    id: String(item.id),
  }));
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditLandingPage({ params }: PageProps) {
  const { id } = await params;
  const idNumber = parseInt(id, 10);

  if (isNaN(idNumber)) {
    notFound();
  }

  const response = await getAdminLandingById(idNumber);

  if (!response.success || !response.data) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Edit Landing Page</h1>
      <LandingForm initialData={response.data} />
    </div>
  );
}
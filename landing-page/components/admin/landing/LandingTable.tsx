// components/admin/landing/LandingTable.tsx

"use client";

import { useRouter } from "next/navigation";
import type { LandingListItem } from "@/types/landing";
import { LandingStatusBadge } from "./LandingStatusBadge";
import { LandingActions } from "./LandingActions";

interface LandingTableProps {
  landings: LandingListItem[];
}

export function LandingTable({ landings }: LandingTableProps) {
  const router = useRouter();

  if (landings.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-12 text-center">
        <p className="text-gray-500">No landing pages found.</p>
        <p className="mt-2 text-sm text-gray-400">Create your first landing page.</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Title</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Slug</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Template</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
              <th className="px-4 py-3 text-right font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {landings.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => router.push(`/admin/landing-pages/edit/${item.id}`)}
              >
                <td className="px-4 py-3 font-medium">{item.title}</td>
                <td className="px-4 py-3 text-gray-500">/{item.slug}</td>
                <td className="px-4 py-3 text-gray-500 capitalize">{item.template}</td>
                <td className="px-4 py-3">
                  <LandingStatusBadge status={item.status} />
                </td>
                <td className="px-4 py-3 text-right" onClick={(e) => e.stopPropagation()}>
                  <LandingActions id={item.id} status={item.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
// app/admin/campaigns/edit/page.tsx

import Link from "next/link";

export default function EditCampaignPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">

      <div className="mb-8">
        <Link
          href="/admin/campaigns"
          className="text-indigo-600 hover:underline"
        >
          ← Back to Campaigns
        </Link>
      </div>

      <h1 className="text-3xl font-bold">
        Edit Campaign
      </h1>

      <p className="mt-2 text-gray-500">
        Select a campaign from the campaign list to edit.
      </p>

      <div className="mt-10 rounded-xl border border-gray-200 bg-white p-8">
        <p className="text-gray-500">
          Campaign edit form will be implemented here.
        </p>
      </div>

    </div>
  );
}
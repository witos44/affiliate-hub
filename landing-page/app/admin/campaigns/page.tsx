// app/admin/campaigns/page.tsx

import Link from "next/link";

export default function CampaignsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Campaigns
          </h1>

          <p className="mt-2 text-gray-500">
            Manage all affiliate landing page campaigns.
          </p>

        </div>

        <Link
          href="/admin/campaigns/new"
          className="rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700"
        >
          New Campaign
        </Link>

      </div>

      <div className="rounded-xl border border-gray-200 bg-white">

        <table className="w-full">

          <thead className="border-b bg-gray-50">

            <tr>

              <th className="px-6 py-4 text-left">
                Campaign
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-left">
                Slug
              </th>

              <th className="px-6 py-4 text-right">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td
                colSpan={4}
                className="px-6 py-10 text-center text-gray-500"
              >
                No campaigns found.
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}
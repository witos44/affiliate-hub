export default function StatsPage() {
  return (
    <main className="p-10 space-y-4">
      <h1 className="text-3xl font-bold">Stats Dashboard</h1>

      <div className="rounded border p-4">
        <p>Visitors: (coming from D1)</p>
        <p>Outbound Clicks: (coming from D1)</p>
        <p>CTR: (calculated)</p>
      </div>

      <p className="text-sm text-gray-500">
        Phase 1: tracking belum aktif (next step: D1 integration)
      </p>
    </main>
  )
}
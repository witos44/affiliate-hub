//app/admin/stats/page.tsx

import { Users, MousePointerClick, ArrowUpRight, Activity, Database } from "lucide-react";
import { D1Database } from "@cloudflare/workers-types";

// Definisi tipe data sesuai schema D1 Anda
interface ClickRecord {
  id: string;
  created_at: string;
  page: string;
  gclid: string | null;
  user_agent: string | null;
}

interface OutboundClickRecord {
  id: string;
  click_id: string;
  offer_slug: string;
  created_at: string;
}

// Interface untuk Environment Variables Cloudflare
interface Env {
  DB: D1Database;
}

export default async function StatsPage() {
  // Akses database dari global environment Cloudflare
  const db = (globalThis as any).DB as D1Database | undefined;

  // State awal untuk data (akan diisi jika DB ada)
  let totalVisitors = 0;
  let totalOutboundClicks = 0;
  let ctr = "0%";
  let recentActivity: Array<{
    id: string;
    type: "Visit" | "Outbound";
    detail: string;
    source: string;
    time: string;
  }> = [];

  if (db) {
    try {
      // 1. Hitung Total Visitors (dari tabel clicks)
      const visitorsResult = await db.prepare("SELECT COUNT(*) as count FROM clicks").first<{ count: number }>();
      totalVisitors = visitorsResult?.count || 0;

      // 2. Hitung Total Outbound Clicks (dari tabel outbound_clicks)
      const clicksResult = await db.prepare("SELECT COUNT(*) as count FROM outbound_clicks").first<{ count: number }>();
      totalOutboundClicks = clicksResult?.count || 0;

      // 3. Hitung CTR (Click-Through Rate)
      if (totalVisitors > 0) {
        const rate = (totalOutboundClicks / totalVisitors) * 100;
        ctr = `${rate.toFixed(2)}%`;
      }

      // 4. Ambil Riwayat Aktivitas Terbaru (Gabungan Logika)
      // Kita ambil 5 klik outbound terakhir dan join dengan tabel clicks untuk dapat info halaman & gclid
      const activityQuery = `
        SELECT 
          oc.id, 
          oc.offer_slug, 
          oc.created_at,
          c.page,
          c.gclid
        FROM outbound_clicks oc
        JOIN clicks c ON oc.click_id = c.id
        ORDER BY oc.created_at DESC
        LIMIT 5
      `;
      
      const activityResults = await db.prepare(activityQuery).all<any>();
      
      recentActivity = (activityResults.results || []).map((row: any) => ({
        id: row.id,
        type: "Outbound",
        detail: `/out/${row.offer_slug}`,
        source: row.gclid ? `Ads (Gclid: ${row.gclid.substring(0, 8)}...)` : (row.page || "Direct"),
        time: formatTime(row.created_at),
      }));

      // Jika belum ada outbound click, tampilkan visitor terakhir sebagai aktivitas
      if (recentActivity.length === 0) {
        const lastVisitors = await db.prepare("SELECT page, gclid, created_at FROM clicks ORDER BY created_at DESC LIMIT 5").all<any>();
        recentActivity = (lastVisitors.results || []).map((row: any, idx: number) => ({
          id: `v-${idx}`,
          type: "Visit",
          detail: row.page,
          source: row.gclid ? `Ads (Gclid: ${row.gclid.substring(0, 8)}...)` : "Direct",
          time: formatTime(row.created_at),
        }));
      }

    } catch (error) {
      console.error("Error fetching stats:", error);
      // Fallback jika error query tapi DB ada
      recentActivity = []; 
    }
  }

  return (
    <main className="min-h-screen bg-gray-50/50 p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard Analytics</h1>
            <p className="mt-2 text-sm text-gray-600">
              Real-time data from Cloudflare D1 Database.
            </p>
          </div>
          <div className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium ring-1 ring-inset ${db ? 'bg-green-50 text-green-700 ring-green-600/20' : 'bg-yellow-50 text-yellow-700 ring-yellow-600/20'}`}>
            {db ? (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                Database Connected
              </>
            ) : (
              <>
                <Database className="h-4 w-4" />
                Local / DB Missing
              </>
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard 
            title="Total Visitors"
            value={totalVisitors.toLocaleString()}
            icon={Users}
            color="text-blue-600"
            bg="bg-blue-50"
          />
          <StatCard 
            title="Outbound Clicks"
            value={totalOutboundClicks.toLocaleString()}
            icon={MousePointerClick}
            color="text-purple-600"
            bg="bg-purple-50"
          />
          <StatCard 
            title="Conversion Rate (CTR)"
            value={ctr}
            icon={ArrowUpRight}
            color="text-green-600"
            bg="bg-green-50"
          />
        </div>

        {/* Recent Activity Table */}
        <div className="rounded-xl border bg-white shadow-sm">
          <div className="border-b px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            <p className="text-sm text-gray-500">Live feed from `clicks` and `outbound_clicks` tables</p>
          </div>
          
          {!db ? (
            <div className="p-8 text-center text-gray-500">
              <Database className="mx-auto h-10 w-10 text-gray-400 mb-2" />
              <p>Database binding not found. Ensure you are running on Cloudflare Workers/Pages with D1 attached.</p>
            </div>
          ) : recentActivity.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <Activity className="mx-auto h-10 w-10 text-gray-400 mb-2" />
              <p>No activity recorded yet. Visit your landing pages and click affiliate links to generate data.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="px-6 py-3 font-medium">Type</th>
                    <th className="px-6 py-3 font-medium">Target / Page</th>
                    <th className="px-6 py-3 font-medium">Source Info</th>
                    <th className="px-6 py-3 font-medium">Time (UTC)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recentActivity.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${item.type === 'Outbound' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                          {item.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">{item.detail}</td>
                      <td className="px-6 py-4 text-gray-500 truncate max-w-xs">{item.source}</td>
                      <td className="px-6 py-4 text-gray-500 font-mono text-xs">{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

// Komponen Helper untuk Kartu Statistik
function StatCard({ title, value, icon: Icon, color, bg }: { title: string; value: string | number; icon: any; color: string; bg: string }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${bg}`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
      </div>
    </div>
  );
}

// Helper untuk format waktu (sederhana)
function formatTime(isoString: string): string {
  if (!isoString) return "-";
  const date = new Date(isoString);
  return date.toLocaleString("en-US", { 
    month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" 
  });
}
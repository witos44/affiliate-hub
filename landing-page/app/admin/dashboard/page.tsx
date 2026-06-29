// File: app/admin/dashboard/page.tsx
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Eye, MousePointerClick, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  // Dummy data statistik
  const stats = [
    { 
      title: "Total Page Views", 
      value: "1,240", 
      trend: "+12.5% dari bulan lalu", 
      icon: Eye,
      trendUp: true
    },
    { 
      title: "Outbound Clicks", 
      value: "385", 
      trend: "+18.2% dari bulan lalu", 
      icon: MousePointerClick,
      trendUp: true
    },
    { 
      title: "Avg. Conversion Rate", 
      value: "31.0%", 
      trend: "+4.1% dari bulan lalu", 
      icon: TrendingUp,
      trendUp: true
    },
  ];

  // Dummy data tabel live traffic
  const recentTraffic = [
    { id: 1, campaign: "Promo Adenslab B2B", source: "Facebook Ads", status: "Converted", time: "2 menit lalu" },
    { id: 2, campaign: "Case Study Story", source: "Organic Search", status: "Viewed", time: "15 menit lalu" },
    { id: 3, campaign: "Promo Adenslab B2B", source: "Direct", status: "Converted", time: "1 jam lalu" },
    { id: 4, campaign: "Notion Template Bonus", source: "Email Newsletter", status: "Bounced", time: "3 jam lalu" },
  ];

  // Fungsi untuk menentukan variant badge berdasarkan status
  const getBadgeVariant = (status: string) => {
    switch (status) {
      case 'Converted':
        return 'default';
      case 'Viewed':
        return 'secondary';
      case 'Bounced':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  return (
    <div className="flex-1 space-y-6 p-2 md:p-4 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
      </div>
      
      {/* Grid Statistik Menggunakan Card shadcn */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs mt-1 ${stat.trendUp ? 'text-green-600' : 'text-red-600'}`}>
                {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabel Live Traffic Menggunakan Table shadcn */}
      <div className="grid gap-4 grid-cols-1 mt-4">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Live Traffic & Clicks</CardTitle>
            <CardDescription>
              Aktivitas pengunjung terbaru di seluruh landing page Anda.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Kampanye</TableHead>
                  <TableHead>Sumber Trafik</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Waktu</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentTraffic.map((traffic) => (
                  <TableRow key={traffic.id}>
                    <TableCell className="font-medium">{traffic.campaign}</TableCell>
                    <TableCell>{traffic.source}</TableCell>
                    <TableCell>
                      <Badge variant={getBadgeVariant(traffic.status)}>
                        {traffic.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      {traffic.time}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
// File: components/admin/StatCard.tsx

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: string;
  isPositive?: boolean;
}

export function StatCard({ title, value, trend, isPositive = true }: StatCardProps) {
  return (
    <div className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-200">
      <div className="p-6">
        <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
        <dd className="mt-2 flex items-baseline gap-4">
          <span className="text-3xl font-extrabold text-gray-900">{value}</span>
          {trend && (
            <span className={`text-sm font-semibold ${isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
              {trend}
            </span>
          )}
        </dd>
      </div>
    </div>
  );
}
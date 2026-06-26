// File: types/index.ts

export interface Merchant {
  id: string | number;
  name: string;
  baseUrl: string;
  offersCount: number;
  status: 'Active' | 'Draft';
  createdAt?: string;
}

export interface Campaign {
  id: string | number;
  name: string;
  slug: string;
  merchant: string;
  status: 'Active' | 'Draft';
  views: number;
  clicks: number;
  content?: string;
  createdAt?: string;
}

export interface DashboardStats {
  totalViews: number;
  totalClicks: number;
  conversionRate: string;
}
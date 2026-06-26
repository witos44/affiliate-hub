// File: lib/api.ts
import { Campaign, DashboardStats, Merchant } from "../types";

// URL Worker Anda. Nanti bisa dipindahkan ke file .env
// Contoh: "https://tracker.affiliate-hub.workers.dev"
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8787";

export const api = {
  // --- ENDPOINT UNTUK DASHBOARD ---
  getDashboardStats: async (): Promise<DashboardStats> => {
    /* 
    // KODE ASLI UNTUK PRODUCTION:
    const res = await fetch(`${API_BASE_URL}/api/analytics`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Gagal mengambil data analitik');
    return res.json();
    */

    // DUMMY DATA SEMENTARA
    return {
      totalViews: 1240,
      totalClicks: 385,
      conversionRate: "31.0%"
    };
  },

  // --- ENDPOINT UNTUK CAMPAIGNS (OFFERS) ---
  getCampaigns: async (): Promise<Campaign[]> => {
    /*
    const res = await fetch(`${API_BASE_URL}/api/campaigns`, { cache: 'no-store' });
    return res.json();
    */
    
    return [
      { id: 1, name: "Promo Adenslab B2B", slug: "ad-automation", merchant: "Adenslab", status: "Active", views: 840, clicks: 210 },
      { id: 2, name: "Case Study Story", slug: "scaling-case-study", merchant: "Adenslab", status: "Active", views: 320, clicks: 95 }
    ];
  },

  getCampaignById: async (id: string): Promise<Campaign | null> => {
    /*
    const res = await fetch(`${API_BASE_URL}/api/campaigns/${id}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return res.json();
    */
    
    return {
      id,
      name: "Promo Adenslab B2B",
      slug: "ad-automation",
      merchant: "Adenslab",
      status: "Active",
      views: 840,
      clicks: 210,
      content: "Stop Burning Your Ad Spend. Automate Your Ad Campaigns in Minutes."
    };
  },

  // --- ENDPOINT UNTUK MERCHANTS ---
  getMerchants: async (): Promise<Merchant[]> => {
    /*
    const res = await fetch(`${API_BASE_URL}/api/merchants`, { cache: 'no-store' });
    return res.json();
    */

    return [
      { id: 1, name: "Adenslab", baseUrl: "https://www.adenslab.com", offersCount: 3, status: "Active" },
      { id: 2, name: "Amazon Associates", baseUrl: "https://www.amazon.com", offersCount: 0, status: "Draft" }
    ];
  }
};
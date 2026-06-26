// File: app/admin/campaigns/[id]/page.tsx
import Link from "next/link";

export default function CampaignEditPage({ params }: { params: { id: string } }) {
  // NANTINYA: Data ini akan di-fetch dari D1 berdasarkan params.id
  // Untuk sementara, kita gunakan dummy data agar desain form terlihat
  const campaignData = {
    id: params.id,
    name: "Promo Adenslab B2B",
    slug: "ad-automation",
    merchant: "Adenslab",
    status: "Active",
    content: "Stop Burning Your Ad Spend. Automate Your Ad Campaigns in Minutes.\n\nApakah Anda lelah memantau iklan setiap jam? Adenslab adalah solusinya...",
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header & Back Button */}
      <div className="flex items-center space-x-4">
        <Link 
          href="/admin/campaigns" 
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          ← Kembali
        </Link>
        <h2 className="text-2xl font-bold text-gray-900">
          Edit Kampanye: {campaignData.name}
        </h2>
      </div>

      {/* Form Section */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nama Kampanye */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nama Kampanye
              </label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={campaignData.name}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 border"
                placeholder="Contoh: Promo Adenslab B2B"
              />
            </div>

            {/* URL Slug */}
            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                URL Slug <span className="text-gray-400 font-normal">(domain.com/slug)</span>
              </label>
              <input
                type="text"
                id="slug"
                name="slug"
                defaultValue={campaignData.slug}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 border"
                placeholder="ad-automation"
              />
            </div>

            {/* Merchant / Offer */}
            <div>
              <label htmlFor="merchant" className="block text-sm font-medium text-gray-700">
                Merchant / Offer Tujuan
              </label>
              <select
                id="merchant"
                name="merchant"
                defaultValue={campaignData.merchant}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 border bg-white"
              >
                <option value="Adenslab">Adenslab</option>
                <option value="Lainnya">Merchant Lain (Akan Datang)</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                Status Halaman
              </label>
              <select
                id="status"
                name="status"
                defaultValue={campaignData.status}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 border bg-white"
              >
                <option value="Active">Active (Live)</option>
                <option value="Draft">Draft (Tersembunyi)</option>
              </select>
            </div>
          </div>

          {/* Konten / Copywriting */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Isi Konten / Copywriting
            </label>
            <p className="text-xs text-gray-500 mb-2">
              Teks ini yang akan ditampilkan di halaman publik secara dinamis.
            </p>
            <textarea
              id="content"
              name="content"
              rows={8}
              defaultValue={campaignData.content}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 border"
              placeholder="Tuliskan copywriting penawaran Anda di sini..."
            />
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end space-x-3">
          <Link
            href="/admin/campaigns"
            className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            Batal
          </Link>
          <button
            type="button"
            className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
}
// File: app/(public)/layout.tsx

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* 
        Area ini bisa Anda isi dengan Navbar publik jika diperlukan.
        Karena ini landing page (yang biasanya tidak butuh banyak menu),
        kita biarkan kosong agar fokus pengunjung langsung ke penawaran.
      */}
      
      {/* Konten Utama dari page.tsx akan dimuat di sini */}
      <main className="grow">
        {children}
      </main>

      {/* Footer minimalis yang akan otomatis muncul di semua landing page publik */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Affiliate Hub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
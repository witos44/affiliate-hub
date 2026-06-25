/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- Ini kunci utamanya agar jadi statis
  images: {
    unoptimized: true, // <--- Wajib ditambahkan agar Next Image tidak error saat export
  },
  // Tambahkan blok env ini di bawahnya:
  env: {
    NEXT_PUBLIC_TRACKER_URL: process.env.NEXT_PUBLIC_TRACKER_URL || 'https://affiliate-hub-tracker.affiliate-hub.workers.dev/out/',
  },
};

export default nextConfig;

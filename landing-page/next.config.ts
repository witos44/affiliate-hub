/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- Ini kunci utamanya agar jadi statis
  images: {
    unoptimized: true, // <--- Wajib ditambahkan agar Next Image tidak error saat export
  },
};

export default nextConfig;

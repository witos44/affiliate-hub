// File: lib/utils.ts

/**
 * Menggabungkan nama class Tailwind secara dinamis.
 * Sangat berguna saat membuat komponen tombol dengan warna yang bisa berubah-ubah.
 */
export function cx(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Memformat angka menjadi format ribuan.
 * Contoh: 12000 -> "12.000"
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat("id-ID").format(num);
}

/**
 * Memformat string tanggal dari database menjadi format yang mudah dibaca.
 * Contoh: "2026-06-26T10:00:00Z" -> "26 Juni 2026"
 */
export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString("id-ID", options);
}
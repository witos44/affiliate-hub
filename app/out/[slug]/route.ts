// app/out/[slug]/route.ts

import { NextResponse } from "next/server"

// GANTI dengan link affiliate asli Anda (tanpa spasi)
const AFFILIATE_LINKS: Record<string, string> = {
  adenslab: "https://www.adenslab.com/r/ads-campaign-automation-with-adenslab",
}

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const url = new URL(req.url)
  const gclid = url.searchParams.get("gclid")
  const clickId = crypto.randomUUID()
  const userAgent = req.headers.get("user-agent") || "Unknown"

  const db = (globalThis as any).DB

  if (db) {
    try {
      // 1. Simpan data visitor/klik awal ke tabel 'clicks'
      await db.prepare(
        `INSERT INTO clicks (id, created_at, page, gclid, user_agent)
         VALUES (?, datetime('now'), ?, ?, ?)`
      ).bind(
        clickId,
        slug, // Menggunakan slug sebagai nama halaman
        gclid,
        userAgent
      ).run()

      // Cek apakah target link ada sebelum melanjutkan
      const target = AFFILIATE_LINKS[slug]
      
      if (target) {
        // 2. Simpan data outbound click ke tabel 'outbound_clicks' 
        // (Menghubungkan click_id dengan offer_slug)
        await db.prepare(
          `INSERT INTO outbound_clicks (id, click_id, offer_slug, created_at)
           VALUES (?, ?, ?, datetime('now'))`
        ).bind(
          crypto.randomUUID(), // ID baru untuk tabel outbound
          clickId,             // Relasi ke tabel clicks
          slug                 // Offer slug
        ).run()
      }

    } catch (e) {
      console.error("Gagal menyimpan data tracking ke DB:", e)
    }
  }

  const target = AFFILIATE_LINKS[slug]

  // Jika slug tidak ditemukan, redirect ke homepage
  if (!target) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  // Redirect ke link affiliate
  return NextResponse.redirect(target)
}
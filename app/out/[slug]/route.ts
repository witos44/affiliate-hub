//app/out/[slug]/route.ts

import { NextResponse } from "next/server"

const AFFILIATE_LINKS: Record<string, string> = {
  adenslab: "https://example.com?ref=adenslab",
}

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  // Await params karena Next.js versi baru membuatnya asynchronous
  const { slug } = await params
  
  const url = new URL(req.url)
  const gclid = url.searchParams.get("gclid")
  const clickId = crypto.randomUUID()

  const db = (globalThis as any).DB

  if (db) {
    try {
      await db.prepare(
        `INSERT INTO clicks (id, created_at, page, gclid, user_agent)
         VALUES (?, datetime('now'), ?, ?, ?)`
      ).bind(
        clickId,
        slug,
        gclid,
        req.headers.get("user-agent")
      ).run()
    } catch (e) {
      console.error("Gagal menyimpan klik ke DB:", e)
    }
  }

  const target = AFFILIATE_LINKS[slug]

  // Jika slug tidak ditemukan, redirect ke homepage atau tampilkan 404
  if (!target) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  return NextResponse.redirect(target)
}
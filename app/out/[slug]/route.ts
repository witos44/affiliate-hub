import { NextResponse } from "next/server"

const AFFILIATE_LINKS: Record<string, string> = {
  adenslab: "https://example.com?ref=adenslab",
}

export async function GET(req: Request, { params }: any) {
  const slug = params.slug

  const url = new URL(req.url)
  const gclid = url.searchParams.get("gclid")

  const clickId = crypto.randomUUID()

  const db = (globalThis as any).DB

  // fallback safety kalau dev lokal
  if (db) {
    await db.prepare(
      `INSERT INTO clicks (id, created_at, page, gclid, user_agent)
       VALUES (?, datetime('now'), ?, ?, ?)`
    ).bind(
      clickId,
      slug,
      gclid,
      req.headers.get("user-agent")
    ).run()
  }

  const target = AFFILIATE_LINKS[slug]

  return NextResponse.redirect(target)
}
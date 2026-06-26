export interface Env {
  DB: D1Database;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    
    // Tempat kembali yang aman (Frontend Anda) agar tidak terjadi infinite loop
    const FRONTEND_URL = 'https://affiliate-hub-eej.pages.dev';
    
    const pathParts = url.pathname.split('/');
    // Gunakan .trim() untuk membuang spasi kosong jika tidak sengaja ada di URL
    const slug = pathParts[2] ? pathParts[2].trim() : "";

    // Jika tidak ada slug, kembalikan ke landing page frontend (bukan ke worker lagi)
    if (!slug) {
      return Response.redirect(FRONTEND_URL, 302);
    }

    try {
      const offer = await env.DB.prepare(
        "SELECT destination_url FROM offers WHERE slug = ? LIMIT 1"
      ).bind(slug).first<{ destination_url: string }>();

      // Jika data benar-benar kosong di database
      if (!offer) {
        console.log(`[DEBUG] Query mengembalikan NULL. Slug "${slug}" tidak ditemukan di tabel.`);
        return Response.redirect(FRONTEND_URL, 302);
      }

      // Jika data ada tapi kolom destination_url ternyata kosong/null
      if (!offer.destination_url) {
        console.log(`[DEBUG] Baris data ditemukan, tetapi kolom destination_url kosong.`);
        return Response.redirect(FRONTEND_URL, 302);
      }

      let targetUrl = offer.destination_url.trim();
      
      // Keamanan ekstra: Pastikan URL memiliki awalan protokol agar browser tidak error
      if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
        targetUrl = 'https://' + targetUrl;
      }

      console.log(`[DEBUG] BERHASIL! Target URL ditemukan: ${targetUrl}`);

      // 2. LOGGING ASYNC (Mencatat log klik ke tabel outbound_clicks)
      ctx.waitUntil(
        (async () => {
          try {
            await env.DB.prepare(
              "INSERT INTO outbound_clicks (slug, clicked_at, user_agent, referrer) VALUES (?, ?, ?, ?)"
            ).bind(
              slug,
              new Date().toISOString(),
              request.headers.get('user-agent') || 'unknown',
              request.headers.get('referer') || 'direct'
            ).run();
          } catch (e: any) {
            console.error("❌ Gagal mencatat log klik ke DB:", e.message);
          }
        })()
      );

      // 3. REDIRECT INSTAN KE MERCHANT
      return new Response(null, {
        status: 302,
        headers: {
          'Location': targetUrl,
          'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
        },
      });

    } catch (error: any) {
      console.error("❌ Tracker Error:", error.message || error);
      // Lempar kembali ke frontend jika database sedang down/error
      return Response.redirect(FRONTEND_URL, 302);
    }
  },
};
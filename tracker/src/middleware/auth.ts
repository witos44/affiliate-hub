// src/middleware/auth.ts

let _globalEnv: any;

export function setGlobalEnv(env: any) {
  _globalEnv = env;
}

export function validateApiKey(request: Request): boolean {
  const apiKey = request.headers.get("x-api-key");
  if (!apiKey) return false;

  // Ambil dari environment variable (fallback ke hardcode jika tidak ada)
  const validKey = _globalEnv?.API_KEY || "your-secret-api-key";
  return apiKey === validKey;
}
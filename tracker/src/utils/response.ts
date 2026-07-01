// src/utils/response.ts

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
}

export function successResponse<T>(data: T, message?: string): Response {
  return new Response(
    JSON.stringify({
      success: true,
      data,
      message,
    } as ApiResponse<T>),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

export function errorResponse(message: string, status: number = 400): Response {
  return new Response(
    JSON.stringify({
      success: false,
      message,
    } as ApiResponse),
    {
      status,
      headers: { "Content-Type": "application/json" },
    }
  );
}
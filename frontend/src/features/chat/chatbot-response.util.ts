import { ApiResponse, SendMessageResponse } from "@/types/chat";

/**
 * Fungsi ini menjaga component dan hook tetap bersih.
 * Karena response backend bisa saja bentuknya:
 * - result.id
 * - result.data.id
 */
export function getSessionId(result: ApiResponse<{ id: string }> & { id?: string }) {
  return result.data?.id ?? result.id ?? null;
}

/**
 * Fungsi ini mengambil teks jawaban AI dari beberapa kemungkinan response.
 * Sesuaikan kalau backend kamu sudah punya format final yang pasti.
 */
export function getAssistantText(
  result: ApiResponse<SendMessageResponse> & SendMessageResponse,
) {
  return (
    result.data?.message ??
    result.data?.content ??
    result.data?.answer ??
    result.data?.response ??
    result.message ??
    result.content ??
    result.answer ??
    result.response ??
    "Maaf, saya belum bisa menjawab."
  );
}
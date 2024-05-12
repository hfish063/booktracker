const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function apiFetch(path: string, options?: RequestInit) {
  return await fetch(`${API_BASE_URL}${path}`, {
    cache: "no-store",
    ...options,
  });
}

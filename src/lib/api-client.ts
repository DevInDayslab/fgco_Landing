import { logoutAdmin, requireAdminToken } from "./admin-auth";

export {
  clearAdminToken,
  getAdminToken,
  isAdminAuthenticated,
  setAdminToken,
} from "./admin-auth";

const PRODUCTION_API = "https://api.fgco.in";

function isFgcoProductionHost(hostname: string): boolean {
  return hostname === "fgco.in" || hostname === "www.fgco.in";
}

/** API origin for browser requests. Empty string = same-origin /api proxy on fgco.in. */
export function getApiBaseUrl(): string {
  const envBase = import.meta.env.VITE_API_BASE_URL?.trim();
  const configured = envBase ? envBase.replace(/\/$/, "") : "";

  if (typeof window !== "undefined" && isFgcoProductionHost(window.location.hostname)) {
    return "";
  }

  if (configured.includes("localhost") || configured.includes("127.0.0.1")) {
    return configured;
  }

  return configured || PRODUCTION_API;
}

function resolveApiUrl(path: string): string {
  if (typeof window !== "undefined" && isFgcoProductionHost(window.location.hostname)) {
    return path;
  }

  const base = getApiBaseUrl();
  if (!base) {
    throw new Error("VITE_API_BASE_URL is not configured");
  }

  return `${base}${path}`;
}

export function isApiConfigured(): boolean {
  if (typeof window !== "undefined" && isFgcoProductionHost(window.location.hostname)) {
    return true;
  }
  return Boolean(import.meta.env.VITE_API_BASE_URL?.trim());
}

export function buildApiUrl(path: string): string {
  return resolveApiUrl(path);
}

async function parseJsonResponse<T>(res: Response): Promise<T> {
  const text = await res.text();

  if (!text) {
    if (!res.ok) {
      throw new Error(`Request failed (${res.status})`);
    }
    return {} as T;
  }

  if (text.trimStart().startsWith("<")) {
    throw new Error(
      res.ok
        ? "Server returned an unexpected HTML response."
        : `Request failed (${res.status}). Check that the API is running and returning JSON.`,
    );
  }

  let data: T;
  try {
    data = JSON.parse(text) as T;
  } catch {
    throw new Error(`Invalid response from server (${res.status}).`);
  }

  if (!res.ok) {
    const message =
      typeof data === "object" && data !== null && "error" in data
        ? String((data as { error: string }).error)
        : `Request failed (${res.status})`;
    throw new Error(message);
  }
  return data;
}

export async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers);
  const isFormData = typeof FormData !== "undefined" && options.body instanceof FormData;
  if (!isFormData && !headers.has("Content-Type") && options.body) {
    headers.set("Content-Type", "application/json");
  }

  let res: Response;
  try {
    res = await fetch(resolveApiUrl(path), {
      ...options,
      headers,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Network error";
    const hint =
      typeof window !== "undefined" && isFgcoProductionHost(window.location.hostname)
        ? "Check that the API proxy and api.fgco.in are reachable."
        : `Check that the API is running at ${getApiBaseUrl() || PRODUCTION_API} and CORS allows this site.`;
    throw new Error(`${message}. ${hint}`);
  }

  return parseJsonResponse<T>(res);
}

export async function adminFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = requireAdminToken();

  const headers = new Headers(options.headers);
  headers.set("Authorization", `Bearer ${token}`);
  const isFormData = typeof FormData !== "undefined" && options.body instanceof FormData;
  if (!isFormData && !headers.has("Content-Type") && options.body) {
    headers.set("Content-Type", "application/json");
  }

  let res: Response;
  try {
    res = await fetch(resolveApiUrl(path), {
      ...options,
      headers,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Network error";
    const hint =
      typeof window !== "undefined" && isFgcoProductionHost(window.location.hostname)
        ? "Check that the API proxy and api.fgco.in are reachable."
        : `Check that the API is running at ${getApiBaseUrl() || PRODUCTION_API} and CORS allows this site.`;
    throw new Error(`${message}. ${hint}`);
  }

  if (res.status === 401) {
    logoutAdmin("Your session has expired. Please sign in again.");
    throw new Error("Unauthorized");
  }

  return parseJsonResponse<T>(res);
}

export async function postContact(payload: {
  name: string;
  email: string;
  company?: string;
  inquiryType?: string;
  message: string;
}) {
  return apiFetch<{ ok: boolean }>("/api/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function adminFetchBlob(path: string): Promise<Blob> {
  const token = requireAdminToken();

  const res = await fetch(resolveApiUrl(path), {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (res.status === 401) {
    logoutAdmin("Your session has expired. Please sign in again.");
    throw new Error("Unauthorized");
  }

  if (!res.ok) {
    throw new Error(`Failed to load file (${res.status})`);
  }

  return res.blob();
}

export type UploadResult = {
  ok: boolean;
  key: string;
  contentType: string;
  size: number;
  originalName: string;
  originalSize: number;
  compressed: boolean;
  publicUrl: string | null;
};

export async function uploadNominationFile(
  file: File,
  purpose: "profile" | "document" | "video",
): Promise<UploadResult> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("purpose", purpose);

  return apiFetch<UploadResult>("/api/uploads", {
    method: "POST",
    body: formData,
  });
}

export async function checkNomineeEmail(email: string) {
  return apiFetch<{ ok: boolean; available: boolean; resumable?: boolean }>(
    "/api/nominations/check-email",
    {
      method: "POST",
      body: JSON.stringify({ email }),
    },
  );
}

export async function postApplication(payload: {
  nominationId?: string;
  paymentId?: string;
  nominatorName: string;
  nominatorEmail: string;
  nominatorPhone: string;
  nomineeName: string;
  category: string;
  formData: Record<string, unknown>;
  profilePhotoKey: string;
  supportingDocsKey?: string;
  videoKey?: string;
}) {
  return apiFetch<{ ok: boolean; id: string; referenceId: string }>("/api/applications", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function postNominationCreateOrder(payload: {
  nominatorName: string;
  nominatorEmail: string;
  nominatorPhone: string;
  nomineeName: string;
  category: string;
}) {
  return apiFetch<{
    orderId: string;
    amount: number;
    displayAmountPaise: number;
    basePaise: number;
    gstPaise: number;
    totalPaise: number;
    isTestCharge: boolean;
    currency: string;
    keyId: string;
    feeLabel: string;
  }>("/api/nominations/create-order", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function postNominationPayment(payload: {
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
  amountPaise: number;
  basePaise?: number;
  gstPaise?: number;
  nominatorName?: string;
  nominatorEmail?: string;
  nominatorPhone?: string;
  nomineeName?: string;
  category?: string;
}) {
  return apiFetch<{ ok: boolean; paymentId: string }>("/api/nominations/complete-payment", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function postSponsorshipCreateOrder(payload: {
  tierId: string;
  company: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  reservationId?: string;
}) {
  return apiFetch<{
    orderId: string;
    amount: number;
    displayAmountPaise: number;
    basePaise: number;
    gstPaise: number;
    totalPaise: number;
    isTestCharge: boolean;
    currency: string;
    keyId: string;
    tierName: string;
    advanceLabel: string;
  }>("/api/sponsorship/create-order", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function postSponsorshipRegister(payload: {
  tierId: string;
  tierName: string;
  company: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  message?: string;
}) {
  return apiFetch<{ ok: boolean; id: string; referenceId: string }>("/api/sponsorship/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function postSponsorshipPayment(payload: {
  reservationId: string;
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
  amountPaise: number;
  basePaise?: number;
  gstPaise?: number;
}) {
  return apiFetch<{ ok: boolean; paymentId: string }>("/api/sponsorship/complete-payment", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

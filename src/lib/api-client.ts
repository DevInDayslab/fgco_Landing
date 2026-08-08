const ADMIN_PASSCODE_KEY = "admin_passcode";

export function getApiBaseUrl(): string {
  const base = import.meta.env.VITE_API_BASE_URL?.trim();
  return base ? base.replace(/\/$/, "") : "";
}

export function getAdminPasscode(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(ADMIN_PASSCODE_KEY);
}

export function setAdminPasscode(passcode: string) {
  sessionStorage.setItem(ADMIN_PASSCODE_KEY, passcode);
}

export function clearAdminPasscode() {
  sessionStorage.removeItem(ADMIN_PASSCODE_KEY);
}

export function isAdminAuthenticated(): boolean {
  return Boolean(getAdminPasscode());
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
  const base = getApiBaseUrl();
  if (!base) {
    throw new Error("VITE_API_BASE_URL is not configured");
  }

  const headers = new Headers(options.headers);
  const isFormData = typeof FormData !== "undefined" && options.body instanceof FormData;
  if (!isFormData && !headers.has("Content-Type") && options.body) {
    headers.set("Content-Type", "application/json");
  }

  let res: Response;
  try {
    res = await fetch(`${base}${path}`, {
      ...options,
      headers,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Network error";
    throw new Error(
      `${message}. Check that the API is running at ${base} and CORS allows this site.`,
    );
  }

  return parseJsonResponse<T>(res);
}

export async function adminFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const passcode = getAdminPasscode();
  if (!passcode) {
    throw new Error("Admin session expired. Please log in again.");
  }

  const headers = new Headers(options.headers);
  headers.set("X-Admin-Passcode", passcode);

  return apiFetch<T>(path, {
    ...options,
    headers,
  });
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
  const passcode = getAdminPasscode();
  if (!passcode) {
    throw new Error("Admin session expired. Please log in again.");
  }

  const base = getApiBaseUrl();
  if (!base) {
    throw new Error("VITE_API_BASE_URL is not configured");
  }

  const res = await fetch(`${base}${path}`, {
    headers: { "X-Admin-Passcode": passcode },
  });

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

export async function postNomination(payload: {
  nominatorName: string;
  nominatorEmail: string;
  nominatorPhone: string;
  nomineeName: string;
  category: string;
  formData: Record<string, unknown>;
  profilePhotoKey?: string;
  supportingDocsKey?: string;
  videoKey?: string;
}) {
  return apiFetch<{ ok: boolean; id: string; referenceId: string }>("/api/nominations", {
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
}) {
  return apiFetch<{
    orderId: string;
    amount: number;
    displayAmountPaise: number;
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

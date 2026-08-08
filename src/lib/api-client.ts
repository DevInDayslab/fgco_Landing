import { logoutAdmin, requireAdminPasscode } from "./admin-auth";

export {
  clearAdminPasscode,
  getAdminPasscode,
  isAdminAuthenticated,
  setAdminPasscode,
} from "./admin-auth";

export function getApiBaseUrl(): string {
  const base = import.meta.env.VITE_API_BASE_URL?.trim();
  return base ? base.replace(/\/$/, "") : "";
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
  const passcode = requireAdminPasscode();

  const base = getApiBaseUrl();
  if (!base) {
    throw new Error("VITE_API_BASE_URL is not configured");
  }

  const headers = new Headers(options.headers);
  headers.set("X-Admin-Passcode", passcode);
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
  const passcode = requireAdminPasscode();

  const base = getApiBaseUrl();
  if (!base) {
    throw new Error("VITE_API_BASE_URL is not configured");
  }

  const res = await fetch(`${base}${path}`, {
    headers: { "X-Admin-Passcode": passcode },
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

export async function postNominationRefer(payload: Record<string, unknown>) {
  return apiFetch<{
    ok: boolean;
    id?: string;
    referenceId?: string;
    alreadyNominated?: boolean;
    message?: string;
  }>("/api/nominations/refer", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function validateNominationToken(token: string) {
  return apiFetch<{
    ok: boolean;
    referenceId: string | null;
    nominatorName: string;
    nominatorEmail: string;
    nominatorOrg: string;
    relationship: string;
    nomineeName: string;
    nomineeType: string;
    nomineeDesignation: string;
    nomineeEmail: string;
    nomineePhone: string;
    nomineeLocation: string;
    nomineeSocial: string;
    category: string;
    publications: string[];
  }>(`/api/nominations/validate-token/${encodeURIComponent(token)}`);
}

export async function postNominationComplete(payload: {
  token: string;
  paymentId: string;
  profilePhotoKey: string;
  supportingDocsKey?: string;
  videoKey?: string;
  altVideoLink?: string;
  formData?: Record<string, unknown>;
}) {
  return apiFetch<{ ok: boolean; id: string; referenceId: string }>("/api/nominations/complete", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function postNominationResendLink(email: string) {
  return apiFetch<{ ok: boolean; message?: string }>("/api/nominations/resend-link", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export async function lookupNominationByEmail(email: string) {
  return apiFetch<{
    ok: boolean;
    found: boolean;
    nomineeName: string;
    category: string;
    message?: string;
  }>("/api/nominations/lookup-by-email", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export async function postNomination(payload: {
  nominatorName: string;
  nominatorEmail: string;
  nominatorPhone: string;
  nomineeName: string;
  nomineeEmail: string;
  nomineePhone: string;
  category?: string;
}) {
  return apiFetch<{ ok: boolean; id: string; referenceId: string }>("/api/nominations", {
    method: "POST",
    body: JSON.stringify(payload),
  });
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

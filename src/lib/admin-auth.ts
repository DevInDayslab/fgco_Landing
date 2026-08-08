const ADMIN_TOKEN_KEY = "admin_token";
const LOGOUT_MESSAGE_KEY = "admin_logout_message";

let logoutInProgress = false;

export function getAdminToken(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(ADMIN_TOKEN_KEY);
}

export function setAdminToken(token: string) {
  sessionStorage.setItem(ADMIN_TOKEN_KEY, token);
}

export function clearAdminToken() {
  sessionStorage.removeItem(ADMIN_TOKEN_KEY);
}

export function isAdminAuthenticated(): boolean {
  return Boolean(getAdminToken());
}

export function getAdminLogoutMessage(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(LOGOUT_MESSAGE_KEY);
}

export function clearAdminLogoutMessage() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(LOGOUT_MESSAGE_KEY);
}

export function logoutAdmin(message?: string) {
  if (typeof window === "undefined" || logoutInProgress) return;

  logoutInProgress = true;
  clearAdminToken();

  if (message) {
    sessionStorage.setItem(LOGOUT_MESSAGE_KEY, message);
  }

  const loginPath = "/admin/login";
  if (window.location.pathname !== loginPath) {
    window.location.replace(loginPath);
  } else {
    logoutInProgress = false;
  }
}

export function isAdminUnauthorizedError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  const msg = error.message.toLowerCase();
  return (
    msg.includes("unauthorized") ||
    msg.includes("session expired") ||
    msg.includes("admin auth not configured")
  );
}

export function requireAdminToken(): string {
  const token = getAdminToken();
  if (!token) {
    logoutAdmin("Your session has expired. Please sign in again.");
    throw new Error("Admin session expired");
  }
  return token;
}

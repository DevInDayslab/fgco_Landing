const ADMIN_PASSCODE_KEY = "admin_passcode";
const LOGOUT_MESSAGE_KEY = "admin_logout_message";

let logoutInProgress = false;

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
  clearAdminPasscode();

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
    msg.includes("admin passcode not configured")
  );
}

export function requireAdminPasscode(): string {
  const passcode = getAdminPasscode();
  if (!passcode) {
    logoutAdmin("Your session has expired. Please sign in again.");
    throw new Error("Admin session expired");
  }
  return passcode;
}

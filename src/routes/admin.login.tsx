import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  clearAdminLogoutMessage,
  getAdminLogoutMessage,
  isAdminAuthenticated,
  setAdminToken,
} from "@/lib/admin-auth";
import { apiFetch, buildApiUrl } from "@/lib/api-client";

// TEMP DEBUG — remove before production
const DEBUG_LOGIN = true;
const DEBUG_SAVED_PASSWORD = "password123!";

export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState(DEBUG_SAVED_PASSWORD);
  const [error, setError] = useState("");
  const [debugInfo, setDebugInfo] = useState("");
  const [sessionNotice, setSessionNotice] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const notice = getAdminLogoutMessage();
    if (notice) {
      setSessionNotice(notice);
      clearAdminLogoutMessage();
    }

    if (isAdminAuthenticated()) {
      void navigate({ to: "/admin" });
    }
  }, [navigate]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setDebugInfo("");
    setSubmitting(true);

    const loginUrl = buildApiUrl("/api/admin/login");
    const payload = { username: username.trim(), password };

    try {
      if (DEBUG_LOGIN) {
        setDebugInfo(
          [
            `POST ${loginUrl}`,
            `Host: ${window.location.hostname}`,
            `Username: ${payload.username}`,
            `Password (visible for debug): ${payload.password}`,
            `Password length: ${payload.password.length}`,
          ].join("\n"),
        );
      }

      const result = await apiFetch<{ token: string }>("/api/admin/login", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      setAdminToken(result.token);
      void navigate({ to: "/admin" });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Login failed";
      setError(message);

      if (DEBUG_LOGIN) {
        try {
          const probe = await fetch(loginUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          const body = await probe.text();
          setDebugInfo((prev) =>
            [
              prev,
              "",
              "--- Response ---",
              `Status: ${probe.status} ${probe.statusText}`,
              `URL: ${probe.url}`,
              `Body: ${body.slice(0, 500)}`,
            ]
              .filter(Boolean)
              .join("\n"),
          );
        } catch (probeErr) {
          setDebugInfo((prev) =>
            [
              prev,
              "",
              "--- Probe failed ---",
              probeErr instanceof Error ? probeErr.message : String(probeErr),
            ]
              .filter(Boolean)
              .join("\n"),
          );
        }
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F9FAFB] px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <p className="text-xl font-bold tracking-tight text-zinc-900">
            FG MEDIA HUB<span className="text-zinc-400">™</span>
          </p>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
            FG Media Group · Admin Panel
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-5 rounded-xl border border-zinc-200/80 bg-white p-8 shadow-sm"
        >
          <div>
            <h1 className="text-xl font-bold text-zinc-900">Sign in</h1>
            <p className="mt-1 text-sm text-zinc-500">
              Enter your admin username and password to continue.
            </p>
          </div>

          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
              className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
            >
              Password
            </label>
            <input
              id="password"
              type={DEBUG_LOGIN ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            />
            {DEBUG_LOGIN && (
              <p className="mt-2 text-xs text-amber-700">
                Debug: saved test password is <code className="font-mono">{DEBUG_SAVED_PASSWORD}</code>
              </p>
            )}
          </div>

          {DEBUG_LOGIN && debugInfo && (
            <pre className="max-h-48 overflow-auto rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-[11px] leading-relaxed text-zinc-700 whitespace-pre-wrap">
              {debugInfo}
            </pre>
          )}

          {sessionNotice && (
            <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
              {sessionNotice}
            </p>
          )}

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              <p className="font-semibold">Login failed</p>
              <p className="mt-1 whitespace-pre-wrap">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 disabled:opacity-60"
          >
            {submitting ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  clearAdminLogoutMessage,
  getAdminLogoutMessage,
  isAdminAuthenticated,
  setAdminToken,
} from "@/lib/admin-auth";
import { apiFetch } from "@/lib/api-client";

export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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
    setSubmitting(true);

    try {
      const result = await apiFetch<{ token: string }>("/api/admin/login", {
        method: "POST",
        body: JSON.stringify({ username: username.trim(), password }),
      });

      setAdminToken(result.token);
      void navigate({ to: "/admin" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
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
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            />
          </div>

          {sessionNotice && (
            <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
              {sessionNotice}
            </p>
          )}

          {error && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
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

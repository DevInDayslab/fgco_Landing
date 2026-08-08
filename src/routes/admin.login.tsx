import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  clearAdminLogoutMessage,
  getAdminLogoutMessage,
  isAdminAuthenticated,
} from "@/lib/admin-auth";
import { setAdminPasscode } from "@/lib/admin-auth";

export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [sessionNotice, setSessionNotice] = useState("");

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

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const expected = import.meta.env.VITE_ADMIN_PASSCODE?.trim();

    if (!expected) {
      setError("Admin passcode is not configured on this environment.");
      return;
    }

    if (passcode.trim() !== expected) {
      setError("Invalid passcode.");
      return;
    }

    setAdminPasscode(passcode.trim());
    navigate({ to: "/admin" });
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
            <p className="mt-1 text-sm text-zinc-500">Enter your admin passcode to continue.</p>
          </div>

          <div>
            <label
              htmlFor="passcode"
              className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
            >
              Passcode
            </label>
            <input
              id="passcode"
              type="password"
              placeholder="Enter passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              autoComplete="current-password"
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
            className="w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

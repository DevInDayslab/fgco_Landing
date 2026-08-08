import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHeader } from "@/components/admin/PageHeader";
import { logoutAdmin } from "@/lib/admin-auth";
import { adminFetch } from "@/lib/api-client";

export const Route = createFileRoute("/admin/settings")({
  component: AdminSettings,
});

function AdminSettings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirmation do not match.");
      return;
    }

    setSubmitting(true);
    try {
      await adminFetch<{ ok: boolean }>("/api/admin/change-password", {
        method: "POST",
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      logoutAdmin("Password updated. Please sign in with your new password.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to change password");
      setSubmitting(false);
    }
  }

  return (
    <div>
      <PageHeader
        title="Settings"
        subtitle="Update your admin password. Changing it signs out all active sessions."
      />

      <form
        onSubmit={onSubmit}
        className="max-w-md space-y-5 rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm"
      >
        <div>
          <h2 className="text-base font-semibold text-zinc-900">Change password</h2>
          <p className="mt-1 text-sm text-zinc-500">
            After a successful change you will be redirected to sign in again.
          </p>
        </div>

        <div>
          <label
            htmlFor="currentPassword"
            className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
          >
            Current password
          </label>
          <input
            id="currentPassword"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            autoComplete="current-password"
            required
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
          />
        </div>

        <div>
          <label
            htmlFor="newPassword"
            className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
          >
            New password
          </label>
          <input
            id="newPassword"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            autoComplete="new-password"
            minLength={8}
            required
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
          >
            Confirm new password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
            minLength={8}
            required
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
          />
        </div>

        {error && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 disabled:opacity-60"
        >
          {submitting ? "Updating…" : "Update password"}
        </button>
      </form>
    </div>
  );
}

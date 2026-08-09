import { useState } from "react";
import { Loader2, Mail, RefreshCw } from "lucide-react";
import {
  MAIL_TEMPLATE_OPTIONS,
  useMailStatus,
  useMailTest,
  useMailVerify,
  type MailTemplateId,
  type MailTestResult,
} from "@/lib/mail-dev-api";

function StatusPill({ ok, label }: { ok: boolean; label: string }) {
  return (
    <span
      className={
        ok
          ? "rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"
          : "rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700"
      }
    >
      {label}
    </span>
  );
}

export function MailDevTools() {
  const [to, setTo] = useState("");
  const [lastResult, setLastResult] = useState<MailTestResult | null>(null);
  const [activeTemplate, setActiveTemplate] = useState<MailTemplateId | null>(null);

  const statusQuery = useMailStatus();
  const verifyMutation = useMailVerify();
  const testMutation = useMailTest();

  const status = statusQuery.data;
  const verify = verifyMutation.data ?? status?.verify;

  async function runVerify() {
    setLastResult(null);
    await verifyMutation.mutateAsync();
    await statusQuery.refetch();
  }

  async function sendTemplate(template: MailTemplateId) {
    if (!to.trim()) return;
    setActiveTemplate(template);
    setLastResult(null);
    try {
      const result = await testMutation.mutateAsync({ to: to.trim(), template });
      setLastResult(result);
    } catch (err) {
      setLastResult({
        ok: false,
        sent: false,
        template,
        to: to.trim(),
        error: err instanceof Error ? err.message : "Request failed",
        durationMs: 0,
      });
    } finally {
      setActiveTemplate(null);
    }
  }

  return (
    <div className="mt-8 max-w-3xl space-y-5 rounded-xl border border-amber-200/80 bg-amber-50/30 p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-amber-700" />
            <h2 className="text-base font-semibold text-zinc-900">Mail diagnostics (dev)</h2>
          </div>
          <p className="mt-1 text-sm text-zinc-500">
            Check SMTP config and send test emails without going through nomination forms.
          </p>
        </div>
        <button
          type="button"
          onClick={() => void statusQuery.refetch()}
          disabled={statusQuery.isFetching}
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 disabled:opacity-60"
        >
          <RefreshCw className={`h-4 w-4 ${statusQuery.isFetching ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </div>

      {statusQuery.isLoading && (
        <p className="text-sm text-zinc-500">Loading mail status…</p>
      )}

      {statusQuery.error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {statusQuery.error.message}
        </p>
      )}

      {status && (
        <div className="space-y-3 rounded-lg border border-zinc-200 bg-white p-4 text-sm">
          <div className="flex flex-wrap gap-2">
            <StatusPill ok={status.configured} label={status.configured ? "SMTP configured" : "SMTP missing"} />
            <StatusPill ok={status.passSet} label={status.passSet ? "Password set" : "Password missing"} />
            <StatusPill
              ok={verify?.ok ?? false}
              label={verify?.ok ? "SMTP verify OK" : "SMTP verify failed"}
            />
            <StatusPill
              ok={status.ceoImageExists}
              label={status.ceoImageExists ? "CEO image found" : "CEO image missing"}
            />
          </div>

          <dl className="grid gap-2 text-xs text-zinc-600 sm:grid-cols-2">
            <div>
              <dt className="font-medium text-zinc-400">Host</dt>
              <dd className="font-mono">{status.host ?? "—"}</dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-400">Port / secure</dt>
              <dd className="font-mono">
                {status.port ?? "—"} / {String(status.secure)}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-400">User</dt>
              <dd className="font-mono">{status.user ?? "—"}</dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-400">From</dt>
              <dd className="font-mono">{status.from ?? "—"}</dd>
            </div>
            {status.missing.length > 0 && (
              <div className="sm:col-span-2">
                <dt className="font-medium text-red-500">Missing env</dt>
                <dd className="font-mono text-red-700">{status.missing.join(", ")}</dd>
              </div>
            )}
            {verify?.error && (
              <div className="sm:col-span-2">
                <dt className="font-medium text-red-500">Verify error</dt>
                <dd className="font-mono text-red-700">{verify.error}</dd>
              </div>
            )}
            {(status.eaccesHint || verify?.hint) && (
              <div className="sm:col-span-2 rounded-md border border-amber-200 bg-amber-50 p-3">
                <dt className="font-medium text-amber-800">GoDaddy SMTP hint</dt>
                <dd className="mt-1 text-amber-900">{verify?.hint ?? status.eaccesHint}</dd>
              </div>
            )}
            {status.transportProfiles && status.transportProfiles.length > 0 && (
              <div className="sm:col-span-2">
                <dt className="mb-1 font-medium text-zinc-400">Profiles tried (in order)</dt>
                <dd className="space-y-1 font-mono text-[11px] text-zinc-600">
                  {status.transportProfiles.map((p) => (
                    <div key={`${p.label}-${p.host}-${p.port}`}>
                      {p.label}: {p.host}:{p.port} (tls={p.tlsServername})
                    </div>
                  ))}
                </dd>
              </div>
            )}
            {status.activeProfile && (
              <div className="sm:col-span-2">
                <dt className="font-medium text-emerald-600">Active profile</dt>
                <dd className="font-mono text-emerald-700">
                  {status.activeProfile.label} — {status.activeProfile.host}:{status.activeProfile.port}
                </dd>
              </div>
            )}
            {verify?.smtp?.response && (
              <div className="sm:col-span-2">
                <dt className="font-medium text-red-500">SMTP response</dt>
                <dd className="font-mono text-red-700 break-all">{verify.smtp.response}</dd>
              </div>
            )}
          </dl>

          <button
            type="button"
            onClick={() => void runVerify()}
            disabled={verifyMutation.isPending}
            className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100 disabled:opacity-60"
          >
            {verifyMutation.isPending ? "Verifying SMTP…" : "Re-run SMTP verify"}
          </button>
        </div>
      )}

      <div className="space-y-3 rounded-lg border border-zinc-200 bg-white p-4">
        <label
          htmlFor="mailTestTo"
          className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
        >
          Send test to
        </label>
        <input
          id="mailTestTo"
          type="email"
          placeholder="you@example.com"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
        />

        <div className="flex flex-wrap gap-2 pt-1">
          {MAIL_TEMPLATE_OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              disabled={!to.trim() || testMutation.isPending}
              onClick={() => void sendTemplate(option.id)}
              className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-800 hover:bg-zinc-100 disabled:opacity-50"
            >
              {activeTemplate === option.id && testMutation.isPending ? (
                <span className="inline-flex items-center gap-1.5">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  Sending…
                </span>
              ) : (
                option.label
              )}
            </button>
          ))}
        </div>
      </div>

      {lastResult && (
        <pre className="max-h-64 overflow-auto rounded-lg border border-zinc-200 bg-zinc-950 p-4 text-xs leading-relaxed text-emerald-300 whitespace-pre-wrap">
          {JSON.stringify(lastResult, null, 2)}
        </pre>
      )}
    </div>
  );
}

import { useMemo, useState } from "react";
import { Loader2, MessageSquare, Play } from "lucide-react";
import { nominationCategories } from "@/data/awards";
import {
  useNotificationRun,
  useNotificationScenarios,
  type NotificationRunInput,
  type NotificationRunResult,
  type NotificationScenarioId,
  type SponsorshipTierId,
} from "@/lib/notification-dev-api";

const DEFAULT_CATEGORY = nominationCategories[0];

export function NotificationDevTools() {
  const [scenario, setScenario] = useState<NotificationScenarioId>("third_party_nomination");
  const [tierId, setTierId] = useState<SponsorshipTierId>("golden");
  const [nominatorName, setNominatorName] = useState("Test Nominator");
  const [nominatorEmail, setNominatorEmail] = useState("");
  const [nominatorPhone, setNominatorPhone] = useState("");
  const [nomineeName, setNomineeName] = useState("Test Nominee");
  const [nomineeEmail, setNomineeEmail] = useState("");
  const [nomineePhone, setNomineePhone] = useState("");
  const [company, setCompany] = useState("Admin Test Company Pvt Ltd");
  const [category, setCategory] = useState(DEFAULT_CATEGORY);
  const [lastResult, setLastResult] = useState<NotificationRunResult | null>(null);

  const scenariosQuery = useNotificationScenarios();
  const runMutation = useNotificationRun();

  const selectedScenario = useMemo(
    () => scenariosQuery.data?.scenarios.find((item) => item.id === scenario),
    [scenario, scenariosQuery.data?.scenarios],
  );

  const isSelf = scenario === "self_nomination";
  const isSponsorship = scenario === "sponsorship";

  function buildPayload(): NotificationRunInput | null {
    if (!nominatorEmail.trim() || !nominatorPhone.trim()) {
      return null;
    }

    if (isSponsorship) {
      return {
        scenario: "sponsorship",
        tierId,
        contactName: nominatorName.trim(),
        contactEmail: nominatorEmail.trim(),
        contactPhone: nominatorPhone.trim(),
        company: company.trim() || "Admin Test Company Pvt Ltd",
      };
    }

    if (!isSelf && (!nomineeEmail.trim() || !nomineePhone.trim())) {
      return null;
    }

    return {
      scenario,
      nominatorName: nominatorName.trim(),
      nominatorEmail: nominatorEmail.trim(),
      nominatorPhone: nominatorPhone.trim(),
      nomineeName: isSelf ? nominatorName.trim() : nomineeName.trim(),
      nomineeEmail: isSelf ? nominatorEmail.trim() : nomineeEmail.trim(),
      nomineePhone: isSelf ? nominatorPhone.trim() : nomineePhone.trim(),
      category,
    };
  }

  async function runFlow() {
    const payload = buildPayload();
    if (!payload) return;

    setLastResult(null);
    try {
      const result = await runMutation.mutateAsync(payload);
      setLastResult(result);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Request failed";
      setLastResult({
        ok: false,
        durationMs: 0,
        steps: [],
        summary: {},
        error:
          message === "Not found"
            ? "Not found — restart the backend (cd backend && npm run dev) so it loads the notification test routes."
            : message,
      });
    }
  }

  const canRun = Boolean(buildPayload()) && !runMutation.isPending;

  return (
    <div className="mt-8 max-w-4xl space-y-5 rounded-xl border border-violet-200/80 bg-violet-50/30 p-6 shadow-sm">
      <div>
        <div className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-violet-700" />
          <h2 className="text-base font-semibold text-zinc-900">
            Email &amp; SMS flow tests (dev)
          </h2>
        </div>
        <p className="mt-1 text-sm text-zinc-500">
          Runs the same public API routes as the website to trigger real email and SMS notifications.
          Creates test registration records in the database.
        </p>
      </div>

      {scenariosQuery.isLoading && (
        <p className="text-sm text-zinc-500">Loading scenarios…</p>
      )}

      {scenariosQuery.error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {scenariosQuery.error.message}
        </p>
      )}

      {scenariosQuery.data?.phoneNote && (
        <p className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs leading-relaxed text-blue-900">
          {scenariosQuery.data.phoneNote}
        </p>
      )}

      <div className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4">
        <div>
          <label
            htmlFor="notificationScenario"
            className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
          >
            Scenario
          </label>
          <select
            id="notificationScenario"
            value={scenario}
            onChange={(e) => setScenario(e.target.value as NotificationScenarioId)}
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
          >
            {scenariosQuery.data?.scenarios.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            )) ?? (
              <>
                <option value="third_party_nomination">Third-party nomination</option>
                <option value="self_nomination">Self nomination</option>
                <option value="sponsorship">Sponsorship</option>
              </>
            )}
          </select>
        </div>

        {selectedScenario && (
          <div className="rounded-lg border border-zinc-100 bg-zinc-50 p-3 text-xs text-zinc-600">
            <p className="font-medium text-zinc-800">Routes used</p>
            <ul className="mt-1 list-disc pl-4">
              {selectedScenario.routes.map((route) => (
                <li key={route}>{route}</li>
              ))}
            </ul>
            <p className="mt-3 font-medium text-zinc-800">Notifications queued</p>
            <ul className="mt-1 list-disc pl-4">
              {selectedScenario.notifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {isSponsorship && (
          <div>
            <label
              htmlFor="sponsorshipTier"
              className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
            >
              Sponsorship tier
            </label>
            <select
              id="sponsorshipTier"
              value={tierId}
              onChange={(e) => setTierId(e.target.value as SponsorshipTierId)}
              className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            >
              {selectedScenario?.tiers?.map((tier) => (
                <option key={tier.id} value={tier.id}>
                  {tier.name} (₹ {tier.amountInr.toLocaleString("en-IN")})
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            id="nominatorName"
            label={isSponsorship ? "Contact name" : "Nominator name"}
            value={nominatorName}
            onChange={setNominatorName}
          />
          <Field
            id="nominatorEmail"
            label={isSponsorship ? "Contact email" : "Nominator email"}
            type="email"
            value={nominatorEmail}
            onChange={setNominatorEmail}
          />
          <Field
            id="nominatorPhone"
            label={isSponsorship ? "Contact phone" : "Nominator phone"}
            value={nominatorPhone}
            onChange={setNominatorPhone}
            placeholder="9876543210"
          />
          {isSponsorship ? (
            <Field id="company" label="Company" value={company} onChange={setCompany} />
          ) : null}
        </div>

        {!isSelf && !isSponsorship && (
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id="nomineeName"
              label="Nominee name"
              value={nomineeName}
              onChange={setNomineeName}
            />
            <Field
              id="nomineeEmail"
              label="Nominee email"
              type="email"
              value={nomineeEmail}
              onChange={setNomineeEmail}
            />
            <Field
              id="nomineePhone"
              label="Nominee phone"
              value={nomineePhone}
              onChange={setNomineePhone}
              placeholder="9876543210"
            />
            <div>
              <label
                htmlFor="category"
                className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
              >
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
              >
                {nominationCategories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {!isSponsorship && isSelf && (
          <div>
            <label
              htmlFor="selfCategory"
              className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
            >
              Category
            </label>
            <select
              id="selfCategory"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            >
              {nominationCategories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        )}

        <p className="text-xs text-zinc-500">
          Use a unique nominee email for each third-party test run. Re-running with the same completed
          nominee email will be rejected by the real application route.
        </p>

        <button
          type="button"
          onClick={() => void runFlow()}
          disabled={!canRun}
          className="inline-flex items-center gap-2 rounded-lg bg-violet-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-800 disabled:opacity-60"
        >
          {runMutation.isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Running flow…
            </>
          ) : (
            <>
              <Play className="h-4 w-4" />
              Run notification flow
            </>
          )}
        </button>
      </div>

      {lastResult && (
        <pre className="max-h-96 overflow-auto rounded-lg border border-zinc-200 bg-zinc-950 p-4 text-xs leading-relaxed text-emerald-300 whitespace-pre-wrap">
          {JSON.stringify(lastResult, null, 2)}
        </pre>
      )}
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
      />
    </div>
  );
}

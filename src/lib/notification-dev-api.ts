import { useMutation, useQuery } from "@tanstack/react-query";
import { adminFetch } from "./api-client";

export type NotificationScenarioId =
  | "third_party_nomination"
  | "self_nomination"
  | "sponsorship";

export type SponsorshipTierId = "super" | "power" | "golden" | "silver" | "circle";

export type NotificationScenariosResponse = {
  scenarios: Array<{
    id: NotificationScenarioId;
    label: string;
    routes: string[];
    notifications: string[];
    tiers?: Array<{ id: SponsorshipTierId; name: string; amountInr: number }>;
  }>;
  phoneNote: string;
};

export type NotificationRunStep = {
  route: string;
  status: number;
  ok: boolean;
  body: Record<string, unknown>;
};

export type NotificationRunResult = {
  ok: boolean;
  durationMs: number;
  steps: NotificationRunStep[];
  summary: Record<string, unknown>;
  error?: string;
};

export type NominationNotificationRunInput = {
  scenario: "third_party_nomination" | "self_nomination";
  nominatorName: string;
  nominatorEmail: string;
  nominatorPhone: string;
  nomineeName?: string;
  nomineeEmail?: string;
  nomineePhone?: string;
  category?: string;
};

export type SponsorshipNotificationRunInput = {
  scenario: "sponsorship";
  tierId: SponsorshipTierId;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  company?: string;
};

export type NotificationRunInput =
  | NominationNotificationRunInput
  | SponsorshipNotificationRunInput;

export function useNotificationScenarios() {
  return useQuery({
    queryKey: ["admin", "notifications", "scenarios"],
    queryFn: () =>
      adminFetch<NotificationScenariosResponse>("/api/admin/notifications/scenarios"),
    retry: 1,
  });
}

export function useNotificationRun() {
  return useMutation({
    mutationFn: (body: NotificationRunInput) =>
      adminFetch<NotificationRunResult>("/api/admin/notifications/run", {
        method: "POST",
        body: JSON.stringify(body),
      }),
  });
}

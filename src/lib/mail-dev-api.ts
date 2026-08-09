import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { adminFetch } from "./api-client";

export type MailTemplateId =
  | "ping"
  | "ceo_letter"
  | "application_ack"
  | "nominator_ack"
  | "nominee_ack"
  | "payment_receipt"
  | "sponsorship_confirmation";

export type MailDiagnostics = {
  configured: boolean;
  missing: string[];
  host: string | null;
  port: number | null;
  secure: boolean | null;
  user: string | null;
  from: string | null;
  fromName: string | null;
  passSet: boolean;
  ceoImageExists: boolean;
  ceoImagePath: string;
  nodeEnv: string;
  verify?: {
    ok: boolean;
    durationMs: number;
    host?: string;
    port?: number;
    user?: string;
    error?: string;
    smtp?: {
      code?: string;
      command?: string;
      response?: string;
      responseCode?: number;
      message?: string;
    };
  };
};

export type MailTestResult = {
  ok: boolean;
  sent: boolean;
  template: MailTemplateId;
  to: string;
  subject?: string;
  messageId?: string;
  error?: string;
  smtp?: MailDiagnostics["verify"] extends { smtp?: infer S } ? S : never;
  durationMs: number;
};

export const MAIL_TEMPLATE_OPTIONS: Array<{ id: MailTemplateId; label: string }> = [
  { id: "ping", label: "Simple ping (no template)" },
  { id: "ceo_letter", label: "CEO nomination letter" },
  { id: "application_ack", label: "Application acknowledgement (self-nomination)" },
  { id: "nominator_ack", label: "Nominator acknowledgement" },
  { id: "nominee_ack", label: "Nominee acknowledgement" },
  { id: "payment_receipt", label: "Payment receipt" },
  { id: "sponsorship_confirmation", label: "Sponsorship confirmation" },
];

export function useMailStatus() {
  return useQuery({
    queryKey: ["admin", "mail", "status"],
    queryFn: () => adminFetch<MailDiagnostics>("/api/admin/mail/status"),
    retry: 1,
  });
}

export function useMailTest() {
  return useMutation({
    mutationFn: (body: { to: string; template: MailTemplateId }) =>
      adminFetch<MailTestResult>("/api/admin/mail/test", {
        method: "POST",
        body: JSON.stringify(body),
      }),
  });
}

export function useMailVerify() {
  return useMutation({
    mutationFn: () =>
      adminFetch<NonNullable<MailDiagnostics["verify"]>>("/api/admin/mail/verify", {
        method: "POST",
      }),
  });
}

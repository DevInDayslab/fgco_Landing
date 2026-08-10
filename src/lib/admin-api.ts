import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { adminFetch } from "./api-client";

export type DashboardMetrics = {
  nominations: number;
  inquiries: number;
  revenueInr: number;
};

export type NominationRow = {
  id: string;
  referenceId: string | null;
  nomineeName: string;
  nominatorName: string;
  nominatorEmail: string;
  nominatorPhone?: string;
  nomineeEmail?: string | null;
  nomineePhone?: string | null;
  category: string;
  status: "draft" | "pending_payment" | "paid" | "under_review";
  reviewStatus: "pending" | "approved";
  paymentId: string | null;
  paymentStatus?: "unpaid" | "paid";
  paymentPaid: boolean;
  createdAt: string;
};

export type NominationDetail = NominationRow & {
  nominatorPhone: string;
  formData: Record<string, unknown>;
  profilePhotoKey: string | null;
  supportingDocsKey: string | null;
  videoKey: string | null;
  updatedAt: string;
};

export type PaymentRow = {
  id: string;
  razorpayOrderId: string;
  razorpayPaymentId: string | null;
  amountInr: number;
  status: "created" | "paid" | "failed";
  type: "nomination" | "sponsorship";
  createdAt: string;
  contactName?: string | null;
  contactPhone?: string | null;
  contactEmail?: string | null;
  company?: string | null;
};

export type PaymentDetail = PaymentRow & {
  amountPaise: number;
  basePaise: number;
  gstPaise: number;
  baseInr: number;
  gstInr: number;
  currency: string;
  metadata: Record<string, unknown> | null;
  updatedAt: string;
};

export type InquiryRow = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  inquiryType: string | null;
  message: string;
  createdAt: string;
};

export type SponsorshipAdminPaymentSummary = {
  packageInr: number;
  packageGstInr: number;
  committedTotalInr: number;
  razorpayBaseInr: number;
  razorpayGstInr: number;
  razorpayTotalInr: number;
  balanceBaseInr: number;
  balanceGstInr: number;
  balanceTotalInr: number;
  paidViaRazorpayInr: number;
  razorpayPendingInr: number;
  balancePendingInr: number;
  totalOutstandingInr: number;
  razorpayPaymentId: string | null;
  paymentRecordStatus: string | null;
};

export type SponsorshipPaymentRecord = {
  id: string | null;
  razorpayOrderId: string;
  razorpayPaymentId: string | null;
  status: string;
  amountInr: number;
  baseInr: number;
  gstInr: number;
  createdAt: string;
  updatedAt: string;
  metadata: Record<string, unknown> | null;
};

export type SponsorshipRow = {
  id: string;
  referenceId: string | null;
  tierId: string;
  tierName: string;
  company: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  message: string | null;
  status: "pending" | "confirmed" | "cancelled";
  paymentId: string | null;
  paymentPaid: boolean;
  spots?: number;
  payment: SponsorshipAdminPaymentSummary | null;
  createdAt: string;
};

export type SponsorshipDetail = SponsorshipRow & {
  spots: number;
  updatedAt: string;
  paymentRecord: SponsorshipPaymentRecord | null;
};

export function useDashboardMetrics() {
  return useQuery({
    queryKey: ["admin", "dashboard"],
    queryFn: () => adminFetch<DashboardMetrics>("/api/admin/dashboard"),
    retry: 1,
  });
}

export function useNominations() {
  return useQuery({
    queryKey: ["admin", "nominations"],
    queryFn: () => adminFetch<{ items: NominationRow[] }>("/api/admin/nominations"),
    retry: 1,
  });
}

export function useNomination(id: string) {
  return useQuery({
    queryKey: ["admin", "nominations", id],
    queryFn: () => adminFetch<NominationDetail>(`/api/admin/nominations/${id}`),
    retry: 1,
  });
}

export function useMarkNominationPaid() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) =>
      adminFetch<{ ok: boolean }>(`/api/admin/nominations/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: "paid" }),
      }),
    onSuccess: (_data, id) => {
      queryClient.invalidateQueries({ queryKey: ["admin", "nominations"] });
      queryClient.invalidateQueries({ queryKey: ["admin", "nominations", id] });
      queryClient.invalidateQueries({ queryKey: ["admin", "dashboard"] });
    },
  });
}

export function useSendNominationInvite() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (nominationId: string) =>
      adminFetch<{ ok: boolean; sent: boolean }>("/api/admin/send-invite", {
        method: "POST",
        body: JSON.stringify({ nominationId }),
      }),
    onSuccess: (_data, nominationId) => {
      queryClient.invalidateQueries({ queryKey: ["admin", "nominations"] });
      queryClient.invalidateQueries({ queryKey: ["admin", "nominations", nominationId] });
    },
  });
}

export function useUpdateNomination(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: Record<string, unknown>) =>
      adminFetch<{ ok: boolean }>(`/api/admin/nominations/${id}`, {
        method: "PATCH",
        body: JSON.stringify(body),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "nominations"] });
      queryClient.invalidateQueries({ queryKey: ["admin", "nominations", id] });
    },
  });
}

export function useUpdateSponsorship(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: Record<string, unknown>) =>
      adminFetch<{ ok: boolean }>(`/api/admin/sponsorships/${id}`, {
        method: "PATCH",
        body: JSON.stringify(body),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "sponsorships"] });
      queryClient.invalidateQueries({ queryKey: ["admin", "sponsorships", id] });
    },
  });
}

export function useUpdateInquiry(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: Record<string, unknown>) =>
      adminFetch<{ ok: boolean }>(`/api/admin/inquiries/${id}`, {
        method: "PATCH",
        body: JSON.stringify(body),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "inquiries"] });
      queryClient.invalidateQueries({ queryKey: ["admin", "inquiries", id] });
    },
  });
}

export function usePayments() {
  return useQuery({
    queryKey: ["admin", "payments"],
    queryFn: () => adminFetch<{ items: PaymentRow[] }>("/api/admin/payments"),
    retry: 1,
  });
}

export function usePayment(id: string) {
  return useQuery({
    queryKey: ["admin", "payments", id],
    queryFn: () => adminFetch<PaymentDetail>(`/api/admin/payments/${id}`),
    retry: 1,
  });
}

export function useInquiries() {
  return useQuery({
    queryKey: ["admin", "inquiries"],
    queryFn: () => adminFetch<{ items: InquiryRow[] }>("/api/admin/inquiries"),
    retry: 1,
  });
}

export function useInquiry(id: string) {
  return useQuery({
    queryKey: ["admin", "inquiries", id],
    queryFn: () => adminFetch<InquiryRow>(`/api/admin/inquiries/${id}`),
    retry: 1,
  });
}

export function useSponsorships() {
  return useQuery({
    queryKey: ["admin", "sponsorships"],
    queryFn: () => adminFetch<{ items: SponsorshipRow[] }>("/api/admin/sponsorships"),
    retry: 1,
  });
}

export function useSponsorship(id: string) {
  return useQuery({
    queryKey: ["admin", "sponsorships", id],
    queryFn: () => adminFetch<SponsorshipDetail>(`/api/admin/sponsorships/${id}`),
    retry: 1,
  });
}

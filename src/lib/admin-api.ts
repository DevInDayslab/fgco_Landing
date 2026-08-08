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
  category: string;
  status: "draft" | "pending_payment" | "paid" | "under_review";
  reviewStatus: "pending" | "approved";
  paymentId: string | null;
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
  createdAt: string;
};

export type SponsorshipDetail = SponsorshipRow & {
  spots: number;
  updatedAt: string;
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

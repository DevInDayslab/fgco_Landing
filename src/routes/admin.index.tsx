import { createFileRoute } from "@tanstack/react-router";
import { MetricCard } from "@/components/admin/MetricCard";
import { PageHeader } from "@/components/admin/PageHeader";
import { PaymentBadge, StatusBadge } from "@/components/admin/StatusBadge";
import { formatAdminDate } from "@/components/admin/admin-utils";
import {
  useDashboardMetrics,
  useInquiries,
  useNominations,
  usePayments,
} from "@/lib/admin-api";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const metrics = useDashboardMetrics();
  const nominations = useNominations();
  const inquiries = useInquiries();
  const payments = usePayments();

  const isLoading = metrics.isLoading;
  const error = metrics.error;

  const paidPayments =
    payments.data?.items.filter((p) => p.status === "paid").length ?? 0;
  const recentNominations = nominations.data?.items.slice(0, 5) ?? [];
  const recentInquiries = inquiries.data?.items.slice(0, 5) ?? [];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-sm text-zinc-500">Loading dashboard…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        {error.message}
      </div>
    );
  }

  const data = metrics.data;

  return (
    <div>
      <PageHeader
        title="Dashboard"
        subtitle="Live platform snapshot and incoming activity across nominations, sponsorships, and inquiries."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard label="Total Nominations" value={data?.nominations ?? 0} />
        <MetricCard
          label="Total Revenue (INR)"
          value={`₹${(data?.revenueInr ?? 0).toLocaleString("en-IN")}`}
        />
        <MetricCard label="Contact Inquiries" value={data?.inquiries ?? 0} />
        <MetricCard label="Paid Transactions" value={paidPayments} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm">
          <h2 className="text-base font-bold text-zinc-900">Recent Nominations</h2>
          <p className="mt-1 text-sm text-zinc-500">Latest submissions from the awards portal.</p>
          <div className="mt-4 divide-y divide-zinc-100">
            {recentNominations.length === 0 ? (
              <p className="py-6 text-sm text-zinc-400">No nominations yet.</p>
            ) : (
              recentNominations.map((row) => (
                <div key={row.id} className="flex items-center justify-between gap-4 py-3">
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-zinc-900">{row.nomineeName}</p>
                    <p className="text-xs text-zinc-500">
                      {row.category} · {formatAdminDate(row.createdAt)}
                    </p>
                  </div>
                  <PaymentBadge paid={row.paymentPaid} />
                </div>
              ))
            )}
          </div>
        </section>

        <section className="rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm">
          <h2 className="text-base font-bold text-zinc-900">Recent Inquiries</h2>
          <p className="mt-1 text-sm text-zinc-500">Contact form messages from the website.</p>
          <div className="mt-4 divide-y divide-zinc-100">
            {recentInquiries.length === 0 ? (
              <p className="py-6 text-sm text-zinc-400">No inquiries yet.</p>
            ) : (
              recentInquiries.map((row) => (
                <div key={row.id} className="flex items-center justify-between gap-4 py-3">
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-zinc-900">{row.name}</p>
                    <p className="truncate text-xs text-zinc-500">
                      {row.email} · {row.inquiryType ?? "General"}
                    </p>
                  </div>
                  <StatusBadge variant="pending">New</StatusBadge>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

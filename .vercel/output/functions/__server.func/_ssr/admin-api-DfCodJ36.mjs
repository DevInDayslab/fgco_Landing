import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/react+tanstack__react-query.mjs";
import { t as adminFetch } from "./api-client-CkW4sA9s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-api-DfCodJ36.js
function formatAdminDate(value) {
	return new Date(value).toLocaleString("en-IN", {
		dateStyle: "medium",
		timeStyle: "short"
	});
}
function filterBySearch(items, query, keys) {
	const q = query.trim().toLowerCase();
	if (!q) return items;
	return items.filter((item) => keys.some((key) => {
		const value = item[key];
		if (value == null) return false;
		return String(value).toLowerCase().includes(q);
	}));
}
function useDashboardMetrics() {
	return useQuery({
		queryKey: ["admin", "dashboard"],
		queryFn: () => adminFetch("/api/admin/dashboard"),
		retry: 1
	});
}
function useNominations() {
	return useQuery({
		queryKey: ["admin", "nominations"],
		queryFn: () => adminFetch("/api/admin/nominations"),
		retry: 1
	});
}
function useNomination(id) {
	return useQuery({
		queryKey: [
			"admin",
			"nominations",
			id
		],
		queryFn: () => adminFetch(`/api/admin/nominations/${id}`),
		retry: 1
	});
}
function useMarkNominationPaid() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id) => adminFetch(`/api/admin/nominations/${id}`, {
			method: "PATCH",
			body: JSON.stringify({ status: "paid" })
		}),
		onSuccess: (_data, id) => {
			queryClient.invalidateQueries({ queryKey: ["admin", "nominations"] });
			queryClient.invalidateQueries({ queryKey: [
				"admin",
				"nominations",
				id
			] });
			queryClient.invalidateQueries({ queryKey: ["admin", "dashboard"] });
		}
	});
}
function useSendNominationInvite() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (nominationId) => adminFetch("/api/admin/send-invite", {
			method: "POST",
			body: JSON.stringify({ nominationId })
		}),
		onSuccess: (_data, nominationId) => {
			queryClient.invalidateQueries({ queryKey: ["admin", "nominations"] });
			queryClient.invalidateQueries({ queryKey: [
				"admin",
				"nominations",
				nominationId
			] });
		}
	});
}
function useUpdateNomination(id) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body) => adminFetch(`/api/admin/nominations/${id}`, {
			method: "PATCH",
			body: JSON.stringify(body)
		}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["admin", "nominations"] });
			queryClient.invalidateQueries({ queryKey: [
				"admin",
				"nominations",
				id
			] });
		}
	});
}
function useUpdateSponsorship(id) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body) => adminFetch(`/api/admin/sponsorships/${id}`, {
			method: "PATCH",
			body: JSON.stringify(body)
		}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["admin", "sponsorships"] });
			queryClient.invalidateQueries({ queryKey: [
				"admin",
				"sponsorships",
				id
			] });
		}
	});
}
function useUpdateInquiry(id) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body) => adminFetch(`/api/admin/inquiries/${id}`, {
			method: "PATCH",
			body: JSON.stringify(body)
		}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["admin", "inquiries"] });
			queryClient.invalidateQueries({ queryKey: [
				"admin",
				"inquiries",
				id
			] });
		}
	});
}
function usePayments() {
	return useQuery({
		queryKey: ["admin", "payments"],
		queryFn: () => adminFetch("/api/admin/payments"),
		retry: 1
	});
}
function usePayment(id) {
	return useQuery({
		queryKey: [
			"admin",
			"payments",
			id
		],
		queryFn: () => adminFetch(`/api/admin/payments/${id}`),
		retry: 1
	});
}
function useInquiries() {
	return useQuery({
		queryKey: ["admin", "inquiries"],
		queryFn: () => adminFetch("/api/admin/inquiries"),
		retry: 1
	});
}
function useInquiry(id) {
	return useQuery({
		queryKey: [
			"admin",
			"inquiries",
			id
		],
		queryFn: () => adminFetch(`/api/admin/inquiries/${id}`),
		retry: 1
	});
}
function useSponsorships() {
	return useQuery({
		queryKey: ["admin", "sponsorships"],
		queryFn: () => adminFetch("/api/admin/sponsorships"),
		retry: 1
	});
}
function useSponsorship(id) {
	return useQuery({
		queryKey: [
			"admin",
			"sponsorships",
			id
		],
		queryFn: () => adminFetch(`/api/admin/sponsorships/${id}`),
		retry: 1
	});
}
//#endregion
export { useInquiry as a, useNominations as c, useSendNominationInvite as d, useSponsorship as f, useUpdateSponsorship as g, useUpdateNomination as h, useInquiries as i, usePayment as l, useUpdateInquiry as m, formatAdminDate as n, useMarkNominationPaid as o, useSponsorships as p, useDashboardMetrics as r, useNomination as s, filterBySearch as t, usePayments as u };
